/*var offsetRome = null;
var metiersList = null;
inputValue = null;
dataid = null;
*/
Template.packageList.events({
    "submit form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        var metierAndCode = JSON.parse($(event.target).find('[id = recherchermetier]').val());
        if (metierAndCode) {
            var metier = metierAndCode["metier"];
            var code = metierAndCode["code"];
            Router.go('/job?metier=' + metier + "&code=" + code);
        }
    }
});

/*
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
  json: function () {
      return Session.get("jsonFile");
  },
  urljson: function () {
      return Meteor.absoluteUrl("countries.json");
  },
  fromexternal: function () {
      return fromexternal;
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
*/