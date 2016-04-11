Router.route('/*', {
    waitOn: function () {
          return  IRLibLoader.load('https://media.twiliocdn.com/sdk/js/client/v1.3/twilio.min.js');
    },
    action: function () {
        this.render('dashboardIhealth');
    }
});

Router.route('/', {
    waitOn: function () {
          return  IRLibLoader.load('https://media.twiliocdn.com/sdk/js/client/v1.3/twilio.min.js');
    },
    action: function () {
        this.render('dashboardIhealth');
    }
});

Router.route('/tickets', {
    waitOn: function () {
        return  IRLibLoader.load('https://media.twiliocdn.com/sdk/js/client/v1.3/twilio.min.js');

    },
    action: function () {
      this.render('userinterface');
    }
});

Router.route('/dashboard',{

    waitOn: function () {
        return  IRLibLoader.load('https://media.twiliocdn.com/sdk/js/client/v1.3/twilio.min.js');

   },
    action: function () {
      this.render('dashboardIhealth');
    }
});
Router.route('/token2', { where: 'server' })
  .get(function () {
        var client = Meteor.npmRequire('twilio');

        var capability = new client.Capability(
        'ACf93aee23b76e63f4c64ff03c53fb5568',
        'a923874165230c0201e6fae93853c3d2'
  );
        capability.allowClientOutgoing('AP1c32a67f356dad5ab6cd97d3b4a1cbc6');
        var token = capability.generate();
        this.response.statusCode = 200;
        this.response.end( token );



  })

Router.route('/token', { where: 'server' })
  .get(function () {

        var client = Meteor.npmRequire('twilio');
        var capability = new client.Capability(
        'ACf93aee23b76e63f4c64ff03c53fb5568',
        'a923874165230c0201e6fae93853c3d2'
        );
        capability.allowClientOutgoing('AP1c32a67f356dad5ab6cd97d3b4a1cbc6');
        capability.allowClientIncoming("support_agent");
        var token = capability.generate();
        this.response.statusCode = 200;
        this.response.end( token );

    })
    .post(function (req, res) {

    })
    .put(function () {
    })


Router.route('/call', { where: 'server' })
    .get(function () {
    })
    .post(function (req, res) {
    })
    .put(function () {
    })

Router.route('/events', { where: 'server' })
  .get(function () {
  })
  .post(function (req, res) {
      Meteor.call("insertStatue", req.body.CallStatus, function(error, result){
          if(error){
              console.log("error", error);
          }
          if(result){
          }
      });
    })
  .put(function () {
  })
  Router.route('/twilio/call_twiml.xml', {
  where: 'server',
  action: function() {
          if(this.request.body.user == "client"){

                var client = this.request.body.agent;
                var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
                xmlData += "<Response>";
                xmlData += "<Dial>";
                xmlData += "<Client>"+client+"</Client>";
                xmlData += "</Dial>";
                xmlData += "</Response>";
                this.response.writeHead(200, {'Content-Type': 'application/xml'});
                this.response.end(xmlData);
          }
          else{
                var phoneToCall = this.request.body.phoneNumber;
                var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
                xmlData += "<Response>";
                xmlData += "<Dial callerId=\"+33970732267\">";
                xmlData += "<Number statusCallbackEvent=\"initiated ringing answered completed\" statusCallback=\"https://28634c27.ngrok.io/events\">"+phoneToCall+"</Number>";
                xmlData += "</Dial>";
                xmlData += "</Response>";
                this.response.writeHead(200, {'Content-Type': 'application/xml'});
                this.response.end(xmlData);
                }
              }
    });
Router.route('/twilio/sms_twiml.xml', {
        where: 'server',
        action: function() {
              var xmlData = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>";
              xmlData += "<Response>";
              xmlData += "<Message>Hello World!</Message>";
              xmlData += "</Response>";
              this.response.writeHead(200, {'Content-Type': 'application/xml'});
              this.response.end(xmlData);
        }
    });
