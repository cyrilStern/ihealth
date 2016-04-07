Meteor.startup(function(){

    HTTP.get('/token', {}, function( error, response ) {
        if ( error ) {
            console.log( error );
        } else {
             var tokenAcces = response.content;
            Session.set("token", tokenAcces);
        }
    });
    HTTP.get('/token2', {}, function( error, response ) {
        if ( error ) {
            console.log( error );
        } else {
             var tokenAcces = response.content;
            Session.set("token2", tokenAcces);
        }
    });

});
