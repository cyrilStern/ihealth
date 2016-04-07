Status = new Mongo.Collection("status");
Status.allow({
    insert: function(){

        return true;
    },
    update: function(){
        return true;
    },
    remove: function(){
        return false;
    }
});
Meteor.methods({
    insertStatue: function(statue){
        console.log(statue);
        if(!Status.find({_id:'statueKey'})){
            newStatu = Status.insert({_id:'statueKey',status: statue},
            function(error,result){console.log(error,result);
            });
        }
        else{
            newStatu = Status.update('statueKey', {$set: {status: statue} });
        }
            return newStatu;
    },
});
