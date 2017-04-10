// The job of this module is to receive the window object for use inside the function body
// It also retrieves the constructors I defined as part of the Window.App namespace.
(function(window){
  'use strict';
  var App = window.App; // App namespace that contains Truck and DataStore modules
  var Truck = App.Truck; // Truck module. So we can use new Truck instead of new App.Truck
  var DataStore = App.DataStore; // DataStore module

  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck; // Export to the global namespace 'window' so that we can interact with the truck via the console.
})(window);
