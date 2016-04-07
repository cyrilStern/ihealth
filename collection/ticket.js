Ticket = new Mongo.Collection("ticket");
Ticket.allow({
    insert: function(){
        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return true;
    }
});

_Ticket = new SimpleSchema({
	name: {
		type: String
	},
    phoneNumber: {
		type: Number
	},
    description: {
		type: String
	},
	createdAt: {
		type: Date
	},
});
Ticket.attachSchema( _Ticket );

Meteor.methods({
    insertTicket: function(ticket){
            var resultReturn = false;
            newTicket = Ticket.insert({name: ticket.name, phoneNumber: ticket.telephone, description: ticket.description, createdAt: Date.now()},
                function(error,result){
                    if(result !== null){
                    }
            });
            return true
    },

    deleteTicket:function(ticketId){
        Ticket.remove(ticketId);
        return "ok this has been deleted"
    }
});
