(function() {
    'use strict';

    var App = window.App || {};
    var $ = window.jQuery;
    var LABEL_SELECTOR = '[data-strength-level="label"]';

    function SliderHandler(selector) {
        if (!selector) {
            throw new Error('No selector provided');
        }

        this.$sliderElement = $(selector);
        this.$sliderLabel = $(LABEL_SELECTOR);
        if (this.$sliderElement === 0) {
            throw new Error('Could not find element with selector ' + selector);
        }
        if (this.$sliderLabel === 0){
          throw new Error('No slider selector');
        }
    }

    SliderHandler.prototype.getSliderValue = function() {

    };


    SliderHandler.prototype.addSliderHandler = function() {
        this.$sliderElement.on('input', function(event) {
            event.preventDefault();



            this.$sliderElement.innerHtml();

        });
    };

    App.SliderHandler = SliderHandler;
    window.App = App;
})(window)
