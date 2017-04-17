(function(window) {
    'use strict';
    var App = window.App || {};
    var $ = window.jQuery; // $ is now assigned to jQuery function. Using $ as a variable for jQuery is the common convention. When we added jQuery in the <script> tag, it created a a function called jQuery and as well as a variable $.

    // A <form> selector will be passed in as an argument to FormHandler()
    function FormHandler(selector){
        if (!selector) {
            throw new Error('No selector provided'); // Error is a built-in type that lets you signal your own message when there's an error
        }

        // When selecting elements with $(), it doesn't return references to DOM elements. It returns a single object that contains references to the selected elements.
        // The object also has special methods for manipulating the collection of references. This object is called a "jQuery-wrapped selection/collection."
        this.$formElement = $(selector); // pre-fixing a variable with $ (ex. $formElement) refers to elements selected using jQuery.
        if (this.$formElement.length === 0) {
            // We used .length on $formElement because jQuery-wrapped selections tells us
            // how many elements there are in it.
            throw new Error('Could not find element with selector: ' + selector);
        }
    }
    // Instead of hardcoding the submit handler code, we'll make a method that accepts a function argument, adds the submit listener, then calls the function agument inside that listener
    // Instead of addEventListener, we used jQuery's 'on' method
    FormHandler.prototype.addSubmitHandler = function() {
        console.log('Setting submit handler for form');
        this.$formElement.on('submit', function(event) {
            event.preventDefault();

            // 'this' gets set to the element the event fired from because of the context. Look up documentation on 'this' for javascript
            // 'this' object is a reference to the form element. serializeArray is a jQuery method for getting values from the jQuery-wrapped <form>. serializeArray returns the form data as an array of objects
            var data = {}; // Will hold the Key-Value pairs of our form. Name-Value.
            $(this).serializeArray().forEach(function(item) {
                data[item.name] = item.value;
                console.log(item.name + ' is ' + item.value);
            });
            console.log(data);
        });
    };

    App.FormHandler = FormHandler;
    window.App = App;

})(window);
