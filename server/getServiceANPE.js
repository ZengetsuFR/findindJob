var nbRecords = 0;
var limit = 900;
//Metiers.remove({});


var apiCall = function (apiUrl, accessToken, method, callback) {
  // try…catch allows you to handle errors 
  try {
    var response = HTTP.get(apiUrl,{
            headers:{"Authorization": accessToken,
                     "Content-Type":"application/x-www-form-urlencoded;charset=iso-8859-1"
}
        }).data;
    // A successful API call returns no error 
    // but the contents from the JSON response
    callback(null, response);
  } catch (error) {
    // If the API responded with an error message and a payload 
    console.log(error);
    if (error.response) {
      var errorCode = error.response.data.code;
      var errorMessage = error.response.data.message;
    // Otherwise use a generic error message
    } else {
      var errorCode = 500;
      var errorMessage = 'Cannot access the API';
    }
    // Create an Error object and return it via callback
    var myError = new Meteor.Error(errorCode, errorMessage);
    callback(myError, null);
  }
}

var accessToken = function (){
    var secretANPE = Meteor.settings.private.anpePrivateKey;
    var clientId = Meteor.settings.public.anpePublicKey;
    var tokenParam = "realm=/developpeur&grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + secretANPE;
    var tokenUrl = "https://www.emploi-store-dev.fr/identite/oauth2/access_token?" + tokenParam;
    var token = HTTP.post(tokenUrl).data.access_token;

    return token;
}
/*
Meteor.methods({
    "getPackageId" : function(){
        //obtenir liste package id
        
       
       //Lister les métiers
        //var apiUrl = "https://api.emploi-store.fr/api/action/datastore_search?resource_id=47dbbaba-c983-47df-bd9c-eaeec14bd834"
        //var apiUrl = "https://api.emploi-store.fr/api/action/package_show?id=47dbbaba-c983-47df-bd9c-eaeec14bd834";
        //var apiUrl = "https://api.emploi-store.fr/api/action/package_show?id=80341a24-a451-49ec-b6b0-1b8756fe977d";
        //var apiUrl = "https://api.emploi-store.fr/api/action/datastore_search?resource_id=421692f5-f342-4223-9c51-72a27dcaf51e";
        //var apiUrl = "https://api.emploi-store.fr/api/action/resource_show?id=421692f5-f342-4223-9c51-72a27dcaf51e";
        //var  apiUrl = 'https://api.emploi-store.fr/api/action/datastore_search_sql?sql=SELECT * from "421692f5-f342-4223-9c51-72a27dcaf51e" WHERE "CITY_NAME" =' +"'NANTES'" + 'LIMIT 50';
        //statistique Janvier 2016 - a66fe203-5bba-4dc8-8c70-7d0d6daf67f7
}*/
//id pour l'information sur le marché du travail
//var packageId ="a4f9e4dd-365e-4542-839c-a93a2448e388";

//PackageId for ROME "78f91db4-b3c0-400c-a68d-47df9387e5a7"
var packageId = "78f91db4-b3c0-400c-a68d-47df9387e5a7";

//id Pour les statistiques sur les offres et demandes d'emploi par code ROME
var resourceId ="266f691f-bce8-4443-808e-8e5aa125cf17";

//Liste des métier (ROME)
//var romeId = "767d0c4a-277b-493c-84b7-00143933efce";

//referenctiel competence
var romeId = "7c7b90a4-11e6-4283-97f3-59dbf40d8e86";
//------------------------------------------------------------
//PackageID rome : "78f91db4-b3c0-400c-a68d-47df9387e5a7"
//var packageId ="78f91db4-b3c0-400c-a68d-47df9387e5a7";
//var romeId = "bb7c0638-2bc3-41d9-93aa-75205c288509"
//******************************
//Recherche region,departement,bassin
//B (Bassin)
//D (Département)
//R (Région)
//F (France entière)
//*******************************
var AreaTypeCode = "'F'";
Meteor.methods({
 "getPackageId" : function(){
   var apiUrl = "https://api.emploi-store.fr/api/action/organization_show?id=digidata";
   var response = Meteor.wrapAsync(apiCall)(apiUrl,"Bearer " + accessToken(),"get");
   
   return response;
 },
 "getPackageShow": function(){
   var apiUrl = "https://api.emploi-store.fr/api/action/package_show?id=" + packageId;
   var response = Meteor.wrapAsync(apiCall)(apiUrl,"Bearer " + accessToken(),"get");
   
   return response;
 },
 "getROME": function(offset,limit){
   var apiUrl;
   
   if (offset)
    apiUrl = "https://api.emploi-store.fr/api/action/datastore_search_sql?sql=SELECT * from " + '"' + romeId +'"' + 'LIMIT '+ limit +' OFFSET ' + offset;
   else
    apiUrl = "https://api.emploi-store.fr/api/action/datastore_search?resource_id=" +  romeId;
    var response = Meteor.wrapAsync(apiCall)(apiUrl,"Bearer " + accessToken(),"get");

    return response;
 },
 "getStatForRome":function(code){
  var apiUrl = "https://api.emploi-store.fr/api/action/datastore_search_sql?sql=SELECT * from " + 
                '"' + resourceId +'"' + ' WHERE "ROME_PROFESSION_CARD_CODE" LIKE ' + "'" + code + "'" +
                'AND "AREA_TYPE_CODE" =' + AreaTypeCode;
               
   var response = Meteor.wrapAsync(apiCall)(apiUrl,"Bearer " + accessToken(),"get");

   return response;
 }
});  

Meteor.startup(function () {
  if (Metiers.find().count() === 0) {
      var  insertIntoMetier = function (){
        var self = this;
        
        Meteor.call("getROME",nbRecords,limit,function(error,data){
        nbRecords += data.result.records.length;

        _.each(data.result.records, function(item) {
          Metiers.insert({
              "metier":deleteDoubleQuote(item.ROME_PROFESSION_NAME.toLowerCase()),
              "code":item.ROME_PROFESSION_CARD_CODE
            });
        });
        })
      }

      Meteor.call("getROME","","",function(error,data){ 
        var self = this;
        var nbRecordsTotal = data.result.total;
        _.each(data.result.records, function(item) {
          Metiers.insert({
              "metier":deleteDoubleQuote(item.ROME_PROFESSION_NAME.toLowerCase()),
              "code":item.ROME_PROFESSION_CARD_CODE
            })
        });

        if (nbRecordsTotal > 100){
          for (var index = 100; index < nbRecordsTotal; index+= 100) {
              insertIntoMetier ();
          }
          if (nbRecords < nbRecordsTotal){
            limit = nbRecordsTotal - nbRecords;
            nbRecords +=  limit;
          }
        }
        console.log("nbRecordsTotal :" + nbRecordsTotal);
        console.log("End of Traitement");
        console.log("-----------"); 
     });
  } 
});

/*Meteor.publish('romes', function() {
     return Metiers.find();
});
*/
Meteor.publish('romes', function(job) {
  var m = null;
  console.log(job);
  if (job){
    m = Metiers.find({
       metier:{$regex: job, $options: '-i'}},
       {sort: {metier:1}
      });
  }
    return m;
});

var deleteDoubleQuote = function(metier){
 if (metier.indexOf("''")>0){
   metier = metier.replace("''","'");
 }
 return metier;
}