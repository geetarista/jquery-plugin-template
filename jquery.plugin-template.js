/**
 * PLUGIN_NAME
 * Version: VERSION
 * URL: URL
 * Description: DESCRIPTION
 * Requires: JQUERY_VERSION, OTHER_PLUGIN(S), ETC.
 * Author: AUTHOR (AUTHOR_URL)
 * Copyright: Copyright 2013 YOUR_NAME
 * License: LICENSE_INFO
 */

// Plugin closure wrapper
// Uses dollar, but calls jQuery to prevent conflicts with other libraries
// Semicolon to prevent breakage with concatenation
// Pass in window as local variable for efficiency (could do same for document)
// Pass in undefined to prevent mutation in ES3
;(function($, document, window, undefined) {
    // Optional, but considered best practice by some
    "use strict";

    // Name the plugin so it's only in one place
    var pluginName = 'PLUGIN';

    // Default options for the plugin as a simple object
    var defaults = {
        property: 'value',
        anotherProperty: 10
    };

    // Plugin constructor
    // This is the boilerplate to set up the plugin to keep our actual logic in one place
    function Plugin(element, options) {
        this.element = element;

        // Merge the options given by the user with the defaults
        this.options = $.extend({}, defaults, options)

        // Attach data to the elment
        this.$el      = $(element);
        this.$el.data(name, this);

        this._defaults = defaults;

        var meta      = this.$el.data(name + '-opts');
        this.opts     = $.extend(this._defaults, options, meta);

        // Initialization code to get the ball rolling
        // If your plugin is simple, this may not be necessary and
        // you could place your implementation here
        this.init();
    }

    Plugin.prototype = {
        // Public functions accessible to users
        // Prototype methods are shared across all elements
        // You have access to this.options and this.element
        // If your plugin is complex, you can split functionality into more
        // methods like this one

        init: function() {
            // Plugin initializer - prepare your plugin
        }
    };

    $.fn[pluginName] = function(options) {
        // Iterate through each DOM element and return it
        return this.each(function() {
            // prevent multiple instantiations
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin(this, options));
            }
        });
    };

    // Private function that is only called by the plugin
    var privateFunction = function() {
        // ...
    }

})(jQuery, document, window);
