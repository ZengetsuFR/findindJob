var offsetRome = null;
var metiersList = null;
statRome ="";
nboffre =0;
libelleRome ="";


 Template.packageList.events({
   "keypress input#metier" : function(event){
     //if (event.which === 13) {
       
       Session.set('job',event.currentTarget.value);
       Meteor.subscribe('romes', event.currentTarget.value,function() {
          console.log("search : " + Metiers.find().count());
       });
       //Meteor.subscribe('romes', event.currentTarget.value);
     //}
   },
   "autocompleteselect input" : function(event, template, doc){
     var romeCode = doc.code.toString();

     Meteor.call("getStatForRome",romeCode,function(err,response){
       
      var stats = response.result.records[0].NB_OFFER_END_MONTH*100/response.result.records[0].NB_APPLICATION_END_MONTH;
      stats = stats.toFixed(2);
      nboffre = "( soit " + response.result.records[0].NB_OFFER_END_MONTH + " offres)";
      Session.set("StatsForRome",stats);      
      var sel = document.getElementById('metier');
			//var opt = sel.options[sel.selectedIndex];
      pos = sel.value.indexOf('/')>0 ? sel.value.indexOf('/'):sel.length;
      
			libelleRome = sel.value.substring(0,pos);
      statRome = stats;

    });
    return false;
   }   
 });

 Template.packageList.helpers({
  statRome:function(){
    return Session.get("StatsForRome");
  },
  rome:function(){
    //var obj = Metiers.find({ metier: {$regex: Session.get('job'), $options: '-i'} });

    return Metiers.find();
  },
  settings: function(){
    return{
        position:"bottom",
        limit:30,
        rules:[
          {
            token:"",
            collection: Metiers,
            field: "metier",
            matchAll: true,
            template:Template.resultMetier
          }
        ]
    };
  }
 });
 