CreateTicket = React.createClass({

  getInitialState() {
    return {
      disabled: true,
      style: null
    };
  },

  resetValidation() {
    this.setState({
      disabled: true,
      style: null
    });
  },

  handleSubmit(event) {
      event.preventDefault();
      ticketName = ReactDOM.findDOMNode(this.refs.ticketName).value.trim();
      ticketPhone = ReactDOM.findDOMNode(this.refs.ticketPhone).value.trim();
      ticketDescription = ReactDOM.findDOMNode(this.refs.ticketDescription).value.trim();

      if(ticketPhone && ticketName && ticketDescription){
      var Ticket = {
          name: ticketName,
          telephone: ticketPhone,
          description : ticketDescription
      };

  }else{
      alert ("merci de remplir");
  }
    _this = this;
    Meteor.call("insertTicket", Ticket, function(error, result){
          if(result){
              ReactDOM.findDOMNode(_this.refs.ticketPhone).value ="";
              ReactDOM.findDOMNode(_this.refs.ticketDescription).value ="";
              ReactDOM.findDOMNode(_this.refs.ticketName).value ="";
              alert("votre message a été envoyé");
          }
      });

  },

  render() {
    return (

        <div className="container leftPart">
            <div className="row">

              <div className="col-md-6 col-sm-8">
                  <h1 className=" center-block text-center">CREER UN TICKET</h1>
                  <form className="form center-block" data-toggle="validator"role="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                    <input type="text" ref="ticketName"  className="form-control input-lg form-control" pattern="[a-zA-Z-']{3,30}" title="votre nom ex: mr Durand" placeholder="Nom"required/>
                    </div>
                    <div className="form-group has-feedback">
                      <input type="text" ref="ticketPhone"  className="form-control input-lg" placeholder="Telephone" pattern="[0-9]{10}" title="ex 0661507218"/>
                    </div>
                    <div className="form-group">
                      <textarea row="5" type="text"  ref="ticketDescription" className="form-control input-lg" pattern="[a-zA-Z-'?.!]{10,200}" title="votre commentaire maxi 200 caracters" placeholder="Votre demande"required/>
                    </div>
                    <div className="form-group">
                      <button className="btn btn-primary btn-lg btn-block">
                          <span className="glyphicon glyphicon-send"></span> Envoyer</button>
                    </div>
                  </form>
                      <div className="">
                          <button className="btn" data-dismiss="form" aria-hidden="true">Cancel</button>
                      </div>
              </div>
                  <div className="col-md-6 col-sm-4">
                      <CallTheHotLine/>
                  </div>

              </div>

        </div>
    );
  }
});
