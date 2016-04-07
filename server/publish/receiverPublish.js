Meteor.publish("statusCallback", function(){
    return Status.find({},{});
});
Meteor.publish("tickets", function(){
    return Ticket.find({},{});
});
