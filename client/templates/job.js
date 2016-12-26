statRome ="";
nboffre =0;
libelleRome = "";
libellePopin = "";
wordingRome= "";
wordingLibellePopin = "";

var urlParams = new URLSearchParams(window.location.search);
var metier = urlParams.get("metier");
var code = urlParams.get("code");

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

Meteor.call("getStatForRome", code, function (err, response) {
    console.log(response);
    if (!err) {
        nbOffer = response.result.records[0].NB_OFFER_END_MONTH;
        nbDemande = response.result.records[0].NB_APPLICATION_END_MONTH;
        var stats = response.result.records[0].NB_OFFER_END_MONTH * 100 / response.result.records[0].NB_APPLICATION_END_MONTH;
        stats = stats.toFixed(2);
        breakpoint(stats);
        var result = {
            "metier": metier,
            "nbOffre": nbOffer,
            "nbDemande": nbDemande,
            "stats": stats,
            "wordingLibellePopin": wordingLibellePopin,
            "wordingRome": wordingRome
        };
        Session.set("statForRome", result);
    }
})

Template.job.helpers({
    metiers: function () {
        return Session.get("statForRome");
    }
})