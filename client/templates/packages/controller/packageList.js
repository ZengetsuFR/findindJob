var offsetRome = null;
var metiersList = null;
var job = null;
var urlParams = null;
breakpointRome = [{
    breakpointNumber: 100 / 10,
    wordingRome: "<p style='font-size:100px;'>ÉVITE !</p>",
    wordingPopin:"BOUCHÉ"
    },
    {
    breakpointNumber: 100 / 4,
    wordingRome: "<p style='font-size:30px;'>C’EST CONCURRENTIEL</p>",
    wordingPopin:"CONCURRENTIEL"

    },
    {
    breakpointNumber: 100 / 2,
    wordingRome: "<p style='font-size:50px;'>C'EST DÉGAGÉ</p>",
    wordingPopin:"DÉGAGÉ"
    }, {
    breakpointNumber: 100,
    wordingRome: "<p style='font-size:100px;'>FONCE !</p>",
    wordingPopin:"PORTEUR"
    }
]
statRome ="";
nboffre =0;
libelleRome = "";
libellePopin = "";
wordingRome= "";
wordingLibellePopin = "";

var test = function () {
    alert("test");
}
 Template.packageList.events({
   "keypress input#metier" : function(event){
     //if (event.which === 13) {

       Session.set('job',event.currentTarget.value);
       setTimeout( function() {
        Meteor.subscribe('romes', event.currentTarget.value,function() {
          Meteor.call("fieldFiltre",function(err,response){
            Session.set("fieldToFind",response);
          });
       });
       },500);
       //Meteor.subscribe('romes', event.currentTarget.value);
     //}
   },
   "autocompleteselect input" : function(event, template, doc){
       romeCode = doc.code.toString();
       callGetStatForRome();
     /*Meteor.call("getStatForRome", romeCode, function (err, response) {
         console.log(response);

      if (err){
          document.getElementById("labelInfo").innerHTML = "pas de données statistiques pour ce métier";
          document.getElementById("notification-trigger").disabled = true;
      }else{
        document.getElementById("labelInfo").innerHTML = "";
        var stats = response.result.records[0].NB_OFFER_END_MONTH*100/response.result.records[0].NB_APPLICATION_END_MONTH;
        stats = stats.toFixed(2);
        breakpoint(stats);
        nboffre = "( soit " + response.result.records[0].NB_OFFER_END_MONTH + " offres)";
        Session.set("StatsForRome",stats);
        var sel = document.getElementById('metier');
			 //var opt = sel.options[sel.selectedIndex];
        pos = sel.value.indexOf('/')>0 ? sel.value.indexOf('/'):sel.length;

        libelleRome = sel.value.substring(0, pos);
        libellePopin = "LE MARCHÉ EST " + wordingLibellePopin + " AVEC " + response.result.records[0].NB_APPLICATION_END_MONTH + " DEMANDEURS D'EMPLOIS" +
                        " POUR " + response.result.records[0].NB_OFFER_END_MONTH + " POSTES DISPONIBLES"
        //statRome = stats;
        statRome = wordingRome;
      }

    });*/
    return false;
   }
});

 breakpoint = function (stat) {
     if (stat <= breakpointRome[0].breakpointNumber) { wordingRome = breakpointRome[0].wordingRome; wordingLibellePopin = breakpointRome[0].wordingPopin }
     else if (stat <= breakpointRome[1].breakpointNumber) { wordingRome = breakpointRome[1].wordingRome; wordingLibellePopin = breakpointRome[1].wordingPopin }
     else if (stat <= breakpointRome[2].breakpointNumber) { wordingRome = breakpointRome[2].wordingRome; wordingLibellePopin = breakpointRome[2].wordingPopin }
     else { wordingRome = breakpointRome[3].wordingRome; wordingLibellePopin = breakpointRome[3].wordingPopin}
 }

 Template.packageList.helpers({
  statRome:function(){
    return Session.get("StatsForRome");
  },
  rome:function(){
    //var obj = Metiers.find({ metier: {$regex: Session.get('job'), $options: '-i'} });
    var findRecord = Metiers.find();
    var nbRecord = Metiers.find().count();
    console.log(nbRecord);
    return findRecord;
  },
  settings: function(){
    return{
        position:"bottom",
        limit:10,
        rules:[
          {
            token:"",
            collection: Metiers,
            field: Session.get('fieldToFind'),
            matchAll: true,
            template:Template.resultMetier
          }
        ]
    };
  }
 });
