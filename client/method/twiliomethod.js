
Meteor.methods({
    BrowserCall:function(token){
        Twilio.Device.setup(token);
        Twilio.Device.ready(function(device){
            console.log("Twilio.Device is now ready for connections");
        });
        setTimeout(function() {
            Twilio.Device.connect({"user":"client","agent":"support_agent"});
        },2000);
        return true;
    },
    PhoneCall:function(token,telephoneNumber){
        var params = {"phoneNumber": telephoneNumber};
        console.log(params.phoneNumber);
        var retour = Twilio.Device.connect({"phoneNumber": telephoneNumber});
        return retour;
    },

    ConnectionCall:function(token){

        console.log(token);
        Twilio.Device.setup(token);
        Twilio.Device.ready(function(device){
            console.log("Twilio.Device is now ready for connections");
        });
        var connection = Twilio.Device.incoming(function(connection) {
            connection.accept();
        });

        return connection;

    },
    AcceptCall:function(connection){
        dup.accept();
        console.log(dup);
    }
});
//Send an SMS text message
