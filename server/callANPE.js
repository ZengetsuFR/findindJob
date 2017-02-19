apiCall = function (apiUrl, accessToken, method, callback) {
  try {
    var response = HTTP.get(apiUrl,{
            headers:{"Authorization": accessToken,
                "Content-Type": "application/x-www-form-urlencoded;charset=iso-8859-1"
        }
    }).data;

    // A successful API call returns no error
    // but the contents from the JSON response
    callback(null, response);
  } catch (error) {
    // If the API responded with an error message and a payload
    console.log(error);
    if (error.response) {
      var errorCode = error.response.data.code;
      var errorMessage = error.response.data.message;
    // Otherwise use a generic error message
    } else {
      var errorCode = 500;
      var errorMessage = 'Cannot access the API';
    }
    // Create an Error object and return it via callback
    var myError = new Meteor.Error(errorCode, errorMessage);
    callback(myError, null);
  }
};

accessToken = function (){
    var secretANPE = Meteor.settings.private.anpePrivateKey;
    var clientId = Meteor.settings.public.anpePublicKey;
    var tokenParam = "realm=/developpeur&grant_type=client_credentials&client_id=" + clientId + "&client_secret=" + secretANPE;
    var tokenUrl = "https://www.emploi-store-dev.fr/identite/oauth2/access_token?" + tokenParam;
    var token = HTTP.post(tokenUrl).data.access_token;

    return token;
};