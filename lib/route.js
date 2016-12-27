Router.configure({
    layoutTemplate: "layout"
});

Router.route('/', { name: "packageList" })
Router.route('/job', { name: "job" })

Router.route('/findjob.json', { where: 'server' })
    .post(function () {
        this.response.setHeader('Content-Type', 'application/json');
        this.response.setHeader('Accept-Ranges', 'bytes');
        var metiersJSFile = HTTP.get(Meteor.absoluteUrl("/findjob.json")).data;
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