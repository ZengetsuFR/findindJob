/*var offsetRome = null;
var metiersList = null;
inputValue = null;
dataid = null;
*/

var nboffre = 0;
var wordingRome= "";
var wordingLibellePopin = "";
var urlParams = new URLSearchParams(window.location.search);
var metier = urlParams.get("metier");
var code = urlParams.get("code");
var subscription;
returnjob = null;

breakpointRome = [{
    breakpointNumber: 100 / 10,
    wordingRome: "ÉVITE !",
    wordingPopin:"BOUCHÉ"
    },
    {
    breakpointNumber: 100 / 4,
    wordingRome: "C’EST CONCURRENTIEL",
    wordingPopin:"CONCURRENTIEL"
    },
    {
    breakpointNumber: 100 / 2,
    wordingRome: "C'EST DÉGAGÉ",
    wordingPopin:"DÉGAGÉ"
    }, {
    breakpointNumber: 100,
    wordingRome: "FONCE !",
    wordingPopin:"PORTEUR"
    }
]

breakpoint = function (stat) {
    if (stat <= breakpointRome[0].breakpointNumber) { wordingRome = breakpointRome[0].wordingRome; wordingLibellePopin = breakpointRome[0].wordingPopin }
    else if (stat <= breakpointRome[1].breakpointNumber) { wordingRome = breakpointRome[1].wordingRome; wordingLibellePopin = breakpointRome[1].wordingPopin }
    else if (stat <= breakpointRome[2].breakpointNumber) { wordingRome = breakpointRome[2].wordingRome; wordingLibellePopin = breakpointRome[2].wordingPopin }
    else { wordingRome = breakpointRome[3].wordingRome; wordingLibellePopin = breakpointRome[3].wordingPopin}
}

var findjobWithRomeCode = function () {
    Meteor.call("getStatForRome", code, function (err, response) {
        nbOffer = response.result.records[0].NB_OFFER_END_MONTH;
        nbDemande = response.result.records[0].NB_APPLICATION_END_MONTH;
        var stats = response.result.records[0].NB_OFFER_END_MONTH * 100 / response.result.records[0].NB_APPLICATION_END_MONTH;
        stats = stats.toFixed(2);
        breakpoint(stats);
        var texttoShare = "Actuellement pour le métier " + metier
            + ": tu as " + nbOffer + " postes disponibles pour "
            + nbDemande + " demandeurs";
        var result = {
            "metier": metier,
            "nbOffre": nbOffer,
            "nbDemande": nbDemande,
            "stats": stats,
            "wordingLibellePopin": wordingLibellePopin,
            "wordingRome": wordingRome,
            "texttoShare": texttoShare,
            "facebookurl": encodeURIComponent(window.location)
        };
        Session.set("statForRome", result);
    })
};

var shareBtn = function () {
    console.log("test");
}


if (metier && code && Session.get("statForRome") ==null) {
    findjobWithRomeCode();
}


Template.job.helpers({
    metiers: function () {
        return Session.get("statForRome");
    }
})

Template.job.events({
    'click #backHome': function (event, template) {
        event.preventDefault();
        Router.go("/")
    },
    'click #posttoFacebook': function (event, template) {
        event.preventDefault();
    },
    'click #shareBtn': function (event, template) {
        var sharingElementToFacebook = Session.get("statForRome");
            FB.ui({
                display: 'popup',
                method: 'share',
                title: 'Ton futur métier est-il porteur ?',
                description: sharingElementToFacebook.texttoShare,
                href: sharingElementToFacebook.facebookurl,
            }, function (response) { });
    }
})


Template.packageList.events({
    "submit form": function (event) {
        // Prevent default browser form submit
        event.preventDefault();
        var metierAndCode = JSON.parse($(event.target).find('[id = recherchermetier]').val());
        if (metierAndCode) {
            Session.set("statForRome", null);
            metier = metierAndCode["metier"];
            code = metierAndCode["code"];
            findjobWithRomeCode();
            setTimeout(function() {
              Router.go('/job?metier=' + metier + "&code=" + code);
            }, 200);
        }
    }
});

findjob = function (input) {
    var searchjob = input.value;
    subscription && subscription.stop();
    if (searchjob.length > 2) {
        subscription = Meteor.subscribe('findjob', input.value);
        console.log(Metiers.find().count());
    }
}

Template.packageList.helpers({
    findjob: function () {
        return Metiers.find();
    }
})
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