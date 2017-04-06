(function(window) {
    'use strict';
    var App = window.App || {};

    function Truck(truckId, db) {
        this.truckId = truckId; // Truck objects/instances now have a truckId instance variable
        this.db = db; // Truck objects/instances now have an instance variable 'db'

    }

    // When using other modules (datastore in this example), make sure to look at how the methods are implemented to understand how you'll use it in another class
    Truck.prototype.createOrder = function(order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };

    Truck.prototype.deliverOrder = function(customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function() {
        var customerIdArray = Object.keys(this.db.getAll()); // an array of strings that are the 'id's.
        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function(id) {
            console.log(this.db.get(id));
        }.bind(this));
        // Look up .bind(this) in the debugging section in book. every function has a 'this' property, however in a callback funciton it is not assigned an object, unlike constructor and prototype functions.
        // In this case, we have to call bind(this) on the callback because 'this' is assigned to the Truck object in that scope.
        // .bind(this) creates a modified version of the anonymous callback function where the OWNER of the function call is the Truck instance. This means that 'this' refers to the truck instance.
    };

    App.Truck = Truck;
    window.App = App;

})(window);
