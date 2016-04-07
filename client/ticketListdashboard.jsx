Progress = React.createClass({

    mixins: [ReactMeteorData],

      getMeteorData () {
        Meteor.subscribe("statusCallback");
        return {
           status: Status.find({_id:"statueKey"},{status: 1}).fetch()
        }
      },

      renderStatus() {
          var response = this.data.status[0];
          return this.data.status.map((statu) => {
                return statu.status.toString();
              });
      },
      render(){
          return (
                <button className="btn btn-warning">{this.renderStatus()}</button>
            )
    }
})

TicketList = React.createClass({

    propTypes: {
    ticket: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return { showResults: false };
    },

        handleSubmit() {
          },
        handleRemoveTicket(event) {
                 event.preventDefault(this.props.ticket._id);
                 Meteor.call('deleteTicket',this.props.ticket._id,(error, result) => {
                     console.log(accountsClientOrServer.user());
                 });
             },
        handleCall() {
                   var telephone = "+33" + this.props.ticket.phoneNumber;
                   var that = this;
                   var tokenAcces = Session.get("username");
                   Meteor.call('PhoneCall',tokenAcces,telephone,(error, result) => {
                       if(result){
                       };
                   });
                   setTimeout(function() {
                       that.setState({ showResults: true });
                   }, 2000);
               },

        render() {
          return (
                  <div className="card card-block">
                        <h4 className="card-title">{this.props.ticket.name}</h4>
                        <p className="card-text text-xs-center">{this.props.ticket.description}</p>
                        <div className="card-footer buttonticketList">
                            <button className="btn btn-danger" onClick={this.handleRemoveTicket}>
                            remove
                            </button>
                            <button className="btn btn-lg btn-success" ref="callCustomerButtons" onClick={this.handleCall}>
                            <span className="glyphicon glyphicon-earphone"></span>   call
                            </button>
                            { this.state.showResults ? <Progress/> : null }
                        </div>
                     </div>

          );
        }


})
