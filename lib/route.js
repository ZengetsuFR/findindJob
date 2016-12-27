//var locat = document.window.location.href;
//console.log(locat)

Router.configure({
    layoutTemplate: "layout"
});

Router.route('/', { name: "packageList" })
Router.route('/job', { name: "job" })

Router.route('/findjob.json', { where: 'server' })
    .post(function () {
        this.response.setHeader('Content-Type', 'application/json');
        this.response.setHeader('Accept-Ranges', 'bytes');
        this.response.setHeader('Access-Control-Allow-Origin', '*');
        this.response.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        this.response.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
        var metiersJSFile = HTTP.get(Meteor.absoluteUrl("/findjob.json")).data;
        console.log(metiersJSFile);
        this.response.end(JSON.stringify(metiersJSFile));
    })
    .get()
    .delete()
/*Router.route('/findjob.json',{where: 'server'})
    .post(function () {
        console.log("dans post");

        var JSON_metiers = HTTP.get(Meteor.absoluteUrl("/findjob.json")).data;
        response.send(JSON.stringify(metiers))
        response.end();
    })*/