function getURLParameters(paramName) {
    var sURL = window.document.URL.toString();
    if (sURL.indexOf("?") > 0) {
        var arrParams = sURL.split("?");
        var arrURLParams = arrParams[1].split("&");
        var arrParamNames = new Array(arrURLParams.length);
        var arrParamValues = new Array(arrURLParams.length);

        var i = 0;
        for (i = 0; i < arrURLParams.length; i++) {
            var sParam = arrURLParams[i].split("=");
            arrParamNames[i] = sParam[0];
            if (sParam[1] != "")
                arrParamValues[i] = unescape(sParam[1]);
            else
                arrParamValues[i] = "No Value";
        }

        for (i = 0; i < arrURLParams.length; i++) {
            if (arrParamNames[i] == paramName) {
                //alert("Parameter:" + arrParamValues[i]);
                return arrParamValues[i];
            }
        }
        return "No Parameters Found";
    }
}

var isMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
    },
    any: function() {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};


var nboffre = 0;
var wordingRome = "";
var wordingLibellePopin = "";
var maxNumberOfSearch = 500;



if (isMobile.any()) maxNumberOfSearch = 10;

/*ne marche pas sur SAFARI*/
/*
var urlParams = new URLSearchParams(window.location.search);
var metier = urlParams.get("metier");
var code = urlParams.get("code");*/

var subscription;
var metier = unescape(getURLParameters("metier"));
var code = unescape(getURLParameters("code"));

returnjob = null;

breakpointRome = [{
        breakpointNumber: 100 / 10,
        wordingRome: "BEAUCOUP MOINS PORTEUR",
    },
    {
        breakpointNumber: 100 / 4,
        wordingRome: "MOINS PORTEUR"
    },
    {
        breakpointNumber: 100 / 2,
        wordingRome: "DANS LA MOYENNE"
    }, {
        breakpointNumber: 100,
        wordingRome: "BEAUCOUP PLUS PORTEUR"
    }
]

breakpoint = function(stat) {
    if (stat <= breakpointRome[0].breakpointNumber) {
        wordingRome = breakpointRome[0].wordingRome;
        wordingLibellePopin = breakpointRome[0].wordingPopin
    } else if (stat <= breakpointRome[1].breakpointNumber) {
        wordingRome = breakpointRome[1].wordingRome;
        wordingLibellePopin = breakpointRome[1].wordingPopin
    } else if (stat <= breakpointRome[2].breakpointNumber) {
        wordingRome = breakpointRome[2].wordingRome;
        wordingLibellePopin = breakpointRome[2].wordingPopin
    } else {
        wordingRome = breakpointRome[3].wordingRome;
        wordingLibellePopin = breakpointRome[3].wordingPopin
    }
}

var findjobWithRomeCode = function() {
    Meteor.call("getStatForRome", code, function(err, response) {
        nbOffer = response.result.records[0].NB_OFFER_END_MONTH;
        nbDemande = response.result.records[0].NB_APPLICATION_END_MONTH;
        var stats = response.result.records[0].NB_OFFER_END_MONTH * 100 / response.result.records[0].NB_APPLICATION_END_MONTH;
        stats = stats.toFixed(2);
        breakpoint(stats);
        var texttoShare = "Avec " + nbDemande + " pour " + nbOffer + " postes disponibles selon l'ANPE ce métier est" +
            wordingRome + "que la moyenne";
        var result = {
            "metier": metier,
            "nbOffre": nbOffer,
            "nbDemande": nbDemande,
            "stats": stats,
            "wordingLibellePopin": wordingLibellePopin,
            "wordingRome": wordingRome,
            "description": "Découvre si ton futur métier est porteur sur www.queldebouche.fr",
            "facebookurl": window.location,
            "quote": texttoShare
        };
        Session.set("statForRome", result);
    })
};


if (metier != "undefined" && code != "undefined" && Session.get("statForRome") == null) {
    findjobWithRomeCode();
}

Template.job.helpers({
    metiers: function() {
        return Session.get("statForRome");
    }
})

Template.job.onCreated(function() {
    this.subscribe("getStatForRome");
})

Template.packageList.onCreated(function() {
    this.subscribe("autocompleteMetiers")
    $('*').unbind('keyup keydown');
    $("#metier").removeClass('errormessage');
})

Template.job.events({
    'click #backHome': function(event, template) {
        event.preventDefault();
        Router.go("/")
    },
    'click #posttoFacebook': function(event, template) {
        event.preventDefault();
    },
    'click #shareBtn': function(event, template) {
        var sharingElementToFacebook = Session.get("statForRome");
        FB.ui({
            method: 'feed',
            title: 'Quel Debouché',
            picture: "http://www.queldebouche.fr/asset/images/Sharing.jpg",
            description: sharingElementToFacebook.description,
            quote: sharingElementToFacebook.quote,
            href: "www.queldebouche.fr"
        }, function(response) {});
        /*FB.ui({
            method: 'share',
            title: 'Quel Debouché',
            picture: "http://www.queldebouche.fr/asset/images/share.jpg",
            description: sharingElementToFacebook.description,
            quote: sharingElementToFacebook.quote,
            href: "www.queldebouche.fr"
        }, function(response) {});*/
    }
})


Template.packageList.events({
    "submit form": function(event) {
        // Prevent default browser form submit
        event.preventDefault();
        try {
            var metierAndCode = JSON.parse($(event.target).find('[id = recherchermetier]').val());
            Session.set("statForRome", null);
            metier = metierAndCode["metier"];
            code = metierAndCode["code"];
            findjobWithRomeCode();
            Router.go('/job?metier=' + escape(metier) + "&code=" + escape(code));
        } catch (error) {
            Session.set("errormessage", "Merci de saisir votre métier")
            $("#metier").attr("placeholder", Session.get("errormessage"));
            $("#metier").addClass('errormessage');
        }
    },
    "input #metier": function(event) {
        $("#metier").removeClass('errormessage');
        /*
        var jobToFind = $("input").val().trim().toLowerCase();
        if (jobToFind.length >= 3) {
            setTimeout(function () {
                findjob(jobToFind);
            }, 2000);
            setTimeout(function () {
                Session.set("errorrecher", "Aucun métier pour ta saisie")
            }, 500);
        }*/

        //Meteor.subscribe("autocompleteMetiers", jobToFind)
        /*Session.set("errorrecher", "Loading")
        setTimeout(function () {
            if (jobToFind.length >= 3) {
                findjob(jobToFind);
            if (Metiers.find().count <= 0) {
                Session.set("errorrecher", "Aucun métier pour ta saisie")
            }
        } else {
            Session.set("errorrecher", "Saisir au moins 3 caractères")
        }
        }, timeout);
*/
        //$('.-autocomplete-container').show();
    },
    "autocompleteselect input": function(event, template, doc) {
        event.preventDefault();
        try {
            Session.set("statForRome", null);
            code = doc.code.toString();
            metier = doc.metier.toString();
            findjobWithRomeCode();
            Router.go('/job?metier=' + escape(metier) + "&code=" + escape(code));
        } catch (error) {
            Session.set("errormessage", "Merci de saisir votre métier")
            $("#metier").attr("placeholder", Session.get("errormessage"));
            $("#metier").addClass('errormessage');
        }
    }
});

findjob = function(input) {
    subscription && subscription.stop();
    subscription = Meteor.subscribe('findjob', input);
}

Template.packageList.onRendered(function() {
    $("#metier").attr("autocomplete", "off");
    $('*').unbind('keyup keydown')
    $("#metier").focus();
    //Meteor.subscribe("autocompleteMetiers")
})

Template.packageList.helpers({
    findjob: function() {
        return Metiers.find();
    },
    errormessage: function() {
        return Session.get("errormessage");
    },
    settings: function() {
        return {
            position: "bottom",
            limit: maxNumberOfSearch,
            rules: [{
                token: "",
                //subscription:"autocompleteMetiers",
                collection: "Metiers",
                //selector: function (match) { return $("input").val().trim().toLowerCase()},
                option: "si",
                field: "metier",
                matchAll: true,
                noMatchTemplate: Template._noJob,
                loadingTemplate: Template._searchingJob,
                template: Template.resultjob,
                sort: true
            }]
        };
    }
})

Template._noJob.helpers({
        messagederetour: function() {
            console.log(Metiers.find().count());
            if (Metiers.find().count() === 0) {
                Session.set("errorrecher", "Aucun métier pour ta saisie")
            } else {
                Session.set("errorrecher", "Chargement en cours...")
            }

            return Session.get("errorrecher");
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