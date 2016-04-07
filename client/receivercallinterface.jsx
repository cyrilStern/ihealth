ReceiverCallInterface = React.createClass({

    getInitialState() {
		return {
			hideshow: ""
		};
	},
     handleSubmitAccept(event) {
        event.preventDefault();

     },
     handleSubmitHangUp(event) {
         event.preventDefault();

     },
  render() {
              var myBtn = $('#myBtn');
              var myBtn2 = $('#myBtn2');
              var hideshow = $("#hideshow");
              var tokenAcces = Session.get("token");
              Twilio.Device.setup(tokenAcces);
              Twilio.Device.ready(function(device){
                  console.log("Twilio.Device is now ready for connections");
              });
              Twilio.Device.incoming(function(connection) {
                  myBtn2.prop('disabled', true);
                  hideshow.css({"visibility":"visible"});
                  myBtn.click(function(){
                      connection.accept();
                      myBtn.prop('disabled', true);
                      myBtn2.prop('disabled', false);

                  });
              });
              myBtn2.click(function(){
                  Twilio.Device.disconnectAll();
                  myBtn.prop('disabled', false);

                  hideshow.css({"visibility":"hidden"});
              });

    return (
        <div id="hideshow">
            <div className="card-receiver card " id="receivercard">
                <h3 className="card-header">Reception des appels</h3>
                <div className="card-block">
                    <h4 className="card-title">En attente</h4>
                    <p className="card-text"></p>
                        <div className="card-footer buttonticketList">
                            <button className="btn btn-danger answer-button btn" id="myBtn2" ref="callCustomerButtons" onClick={this.handleSubmitAccept}>
                                <span className="glyphicon glyphicon-remove-circle"></span> hangup</button>
                            <button className="btn btn-success answer-button btn" id="myBtn" ref="hangUpButton" onClick={this.handleSubmitAccept}>
                            <span className="glyphicon glyphicon-earphone"></span> décrocher</button>
                        </div>
                </div>
            </div>
        </div>
    );
  }
});
