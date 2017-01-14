var nbRecords = 0;
var limit = 900;
var fieldtoFind ="";

var JSON_Metier = "[";
//Metiers.remove({});

//id pour l'information sur le marché du travail
var packageId ="a4f9e4dd-365e-4542-839c-a93a2448e388";

//referenctiel competence
var romeId = "7c7b90a4-11e6-4283-97f3-59dbf40d8e86";

//id Pour les statistiques sur les offres et demandes d'emploi par code ROME
var resourceId = "266f691f-bce8-4443-808e-8e5aa125cf17";

//PackageId for ROME "78f91db4-b3c0-400c-a68d-47df9387e5a7"
//var packageId = "78f91db4-b3c0-400c-a68d-47df9387e5a7";

//Liste des métier (ROME)
//var romeId = "767d0c4a-277b-493c-84b7-00143933efce";


Meteor.methods({
    "getPackageId1" : function(){
        //obtenir liste package id


       //Lister les métiers
        //var apiUrl = "https://api.emploi-store.fr/api/action/datastore_search?resource_id=47dbbaba-c983-47df-bd9c-eaeec14bd834";
        //var apiUrl = "https://api.emploi-store.fr/api/action/package_show?id=47dbbaba-c983-47df-bd9c-eaeec14bd834";
        //var apiUrl = "https://api.emploi-store.fr/api/action/package_show?id=80341a24-a451-49ec-b6b0-1b8756fe977d";
        //var apiUrl = "https://api.emploi-store.fr/api/action/datastore_search?resource_id=421692f5-f342-4223-9c51-72a27dcaf51e";
        //var apiUrl = "https://api.emploi-store.fr/api/action/resource_show?id=421692f5-f342-4223-9c51-72a27dcaf51e";

        //get ressource stat par code rome
        //var apiUrl = "https://api.emploi-store.fr/api/action/resource_show?id=266f691f-bce8-4443-808e-8e5aa125cf17";

        //var  apiUrl = 'https://api.emploi-store.fr/api/action/datastore_search_sql?sql=SELECT * from "421692f5-f342-4223-9c51-72a27dcaf51e" WHERE "CITY_NAME" =' +"'NANTES'" + 'LIMIT 50';
        var code = "D1102";
        var  apiUrl = 'https://api.emploi-store.fr/api/action/datastore_search_sql?sql=SELECT * from "266f691f-bce8-4443-808e-8e5aa125cf17"' +
                      ' WHERE "ROME_PROFESSION_CARD_CODE" LIKE ' + "'" + code + "'" +
                      ' AND "AREA_TYPE_CODE" =' + "'F'" ;

        //statistique Janvier 2016 - a66fe203-5bba-4dc8-8c70-7d0d6daf67f7

        var response = Meteor.wrapAsync(apiCall)(apiUrl,"Bearer " + accessToken(),"get");
        return response;
    }
});

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
 "getStatForRome": function (code) {
  var apiUrl = "https://api.emploi-store.fr/api/action/datastore_search_sql?sql=SELECT * from " +
                '"' + resourceId +'"' + ' WHERE "ROME_PROFESSION_CARD_CODE" LIKE ' + "'" + code + "'" +
                ' AND "AREA_TYPE_CODE" =' + AreaTypeCode;

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
        _.each(data.result.records, function (item) {
           JSON_Metier += '{"metier":"'+ deleteDoubleQuote(item.ROME_PROFESSION_NAME.toLowerCase())
                + '", "code":"' + item.ROME_PROFESSION_CARD_CODE + '"},';
          Metiers.insert({
              "metier":deleteDoubleQuote(item.ROME_PROFESSION_NAME.toLowerCase()),
              "code":item.ROME_PROFESSION_CARD_CODE,
              "metierwithoutdiacritics":accent_fold(item.ROME_PROFESSION_NAME.toLowerCase())
            });
        });
        });
      };

      Meteor.call("getROME","","",function(error,data){
        var self = this;
        var nbRecordsTotal = data.result.total;
        _.each(data.result.records, function (item) {
          JSON_Metier += '{"metier":"'+ deleteDoubleQuote(item.ROME_PROFESSION_NAME.toLowerCase())
                + '", "code":"' + item.ROME_PROFESSION_CARD_CODE + '"},';
          Metiers.insert({
              "metier":deleteDoubleQuote(item.ROME_PROFESSION_NAME.toLowerCase()),
              "code":item.ROME_PROFESSION_CARD_CODE,
              "metierwithoutdiacritics":accent_fold(item.ROME_PROFESSION_NAME.toLowerCase())
            });
        });

        if (nbRecordsTotal > 100){
          for (var index = 100; index < nbRecordsTotal; index+= 100) {
              insertIntoMetier ();
          }
          JSON_Metier += "]";
          if (nbRecords < nbRecordsTotal){
            limit = nbRecordsTotal - nbRecords;
            nbRecords +=  limit;
          }
        } else {
            JSON_Metier += "]";
        }
        //writeJsonFile();
        console.log("nbRecordsTotal :" + nbRecordsTotal);
        console.log("End of Traitement");
        console.log("-----------");
     });
  }
});

writeJsonFile = function () {
    var fs = require('fs');
    var fileName = process.env["PWD"] + 'job.json';
    fs.writeFile(fileName, JSON_Metier, function (err) {
        if (err) return console.log(err);
    });


}

Meteor.publish('romes', function(job) {
  var m = null;

  if (job){
    m = Metiers.find({
       metier:{$regex: job, $options: '-i'}},
       {sort: {metier:1}
      });
    fieldtoFind = "metier";

    if (m.count() === 0){
      m = Metiers.find({
       "metierwithoutdiacritics":{$regex: job, $options:'-i'}
      });
      fieldtoFind = "metierwithoutdiacritics";
    }
  }

    return m;
});

Meteor.publish('findjob', function(job) {
    if (job) {
        /*return Metiers.find({ metier: { $regex: job, $options: '-i' } }, { sort: { metier: 1 } });*/
        return Metiers.find({ metier: { $regex: job, $options: '-i' } });
    }
});

Meteor.methods({
  fieldFiltre: function () {
    return fieldtoFind;
  }
});

var deleteDoubleQuote = function(metier){
 if (metier.indexOf("''")>0){
   metier = metier.replace("''","'");
 }
  //metier = accent_fold(metier); // delete accent
 return metier;
};

var accent_fold = (function () {
    var accent_map = {
        'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', // a
        'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e',                     // e
        'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',                     // i
        'ñ': 'n',                                                   // n
        'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ø': 'o', // o
        'ß': 's',                                                   // s
        'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u',                     // u
        'ÿ': 'y',                                                     // y
        "'":"'"
    };

    return function accent_fold(s) {
        if (!s) { return ''; }
        var ret = '';
        for (var i = 0; i < s.length; i++) {
            ret += accent_map[s.charAt(i)] || s.charAt(i);
        }
        return deleteDoubleQuote(ret);
    };
} ());