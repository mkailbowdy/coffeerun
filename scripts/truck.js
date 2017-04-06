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

    App.Truck = Truck;
    window.App = App;

})(window);
