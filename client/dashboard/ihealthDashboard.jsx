 Dashboard = React.createClass({

      mixins: [ReactMeteorData],

      getMeteorData () {
        Meteor.subscribe("tickets");
        return {
            tickets: Ticket.find({},{sort: {createdAt: -1}}).fetch()
        }
      },

      renderTickets() {
        return this.data.tickets.map((ticket) => {
              return <TicketList key={ticket._id} ticket={ticket}/>;
            });
      },

      handleSubmit(event) {
          event.preventDefault();
          ticketName = ReactDOM.findDOMNode(this.refs.ticketName).value.trim();
          ticketPhone = ReactDOM.findDOMNode(this.refs.ticketPhone).value.trim();
          ticketDescription = ReactDOM.findDOMNode(this.refs.ticketDescription).value.trim()
          var ticket = {
              name: ticketName,
              telephone: ticketPhone,
              description : ticketDescription
          };
          console.log(Ticket);
          Meteor.call("insertStatue", ticket, function(error, result){
              if(error){
                  console.log("error", error);
              }
              if(result){

              }
          });
      },
      render() {
        return (
            <div className="container">
                <div className="row">
                    <ReceiverCallInterface/>
                {this.renderTickets()}
            </div>

            </div>

        );
      }
});
Template.dashboard.helpers({
    Dashboard() {
      return Dashboard;
    }
})
