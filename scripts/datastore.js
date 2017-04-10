// The datastore.js module will store emails and the cost of their purchase. it can also remove those entries. it also provides the ability to see the list of emails and their values
(function(window) {
    'use strict';
    var App = window.App || {};

    // DataStore(), using capital letters for the words is a convention when naming constructors.
    function DataStore() {

        this.data = {}; // data is a instance variable that holds key-value pairing.
    }

    // prototypes are pretty much class variables and methods. available to all instances.
    // Here we give DataStore.prototype the 'add' property. 'add' will be a function.
    DataStore.prototype.add = function(key, val) {
        // key is the customer's email address, val is the object containing the email address and coffee in.
        this.data[key] = val;
    };

    DataStore.prototype.get = function(key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function() {
        return this.data;
    }

    DataStore.prototype.remove = function(key) {
        delete this.data[key]; // Delete operator removes a key/value pair from an object.

    }


    App.DataStore = DataStore; // Add the DataStore constructor and its prototypes.
    window.App = App; // Reassigns App to the window///Export all this code to window.App

})(window);
