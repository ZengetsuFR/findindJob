Router.route('/', function () {
    this.render('home');
});
Router.route('/job', function () {
    this.render('job');
});
Router.route('/findjob.json',{where : 'server'})
    .post(function () {
        console.log("post");
        this.response.setHeader('Content-Type', 'application/json');
        this.response.setHeader('Accept-Ranges', 'bytes');
        var metiersJSFile = HTTP.get(Meteor.absoluteUrl("/findjob.json")).data;
        this.response.end(JSON.stringify(metiersJSFile));
    })
    .put()
    .delete();

/*Router.route('/findjob.json',{where: 'server'})
    .post(function () {
        console.log("dans post");

        var JSON_metiers = HTTP.get(Meteor.absoluteUrl("/findjob.json")).data;
        response.send(JSON.stringify(metiers))
        response.end();
    })*/