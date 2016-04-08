CallTheHotLine = React.createClass({

  renderStatus() {
  },
    handleSubmit(event) {
          event.preventDefault();
          var tokenAcces = Session.get("token2");

          Twilio.Device.setup(tokenAcces);
          Twilio.Device.ready(function(device){
              console.log("Twilio.Device is now ready for connections");
          });
          setTimeout(function() {
              Twilio.Device.connect({"user":"client","agent":"support_agent"});
          },2000);

      },
    render() {

      return (
                <div className="card col-md-10">
                    <img className="card-img-top" src="images/hosted-call-center.jpg" alt="Card image cap"/>
                    <div className="card-block">
                        <h4 className="card-title">contacter directement notre service client</h4>
                        <p className="card-text">nos équipes sont à votre disposition</p>
                        <button className="btn btn-lg btn-success btnCall" onClick={this.handleSubmit}ref="callCustomerButtons"><span className="glyphicon glyphicon-earphone"></span> call</button>
                    </div>
                </div>

      );
    }


})
