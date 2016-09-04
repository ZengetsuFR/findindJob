createServiceConfiguration = function(service, clientId,secret){
    ServiceConfiguration.configuration.remove({
        service:service
    });
    var config = {
        generic:{
            service: service,
            clientId: clientId,
            secret: secret
        }
    }
    ServiceConfiguration.configurations.insert(config.generic);
}