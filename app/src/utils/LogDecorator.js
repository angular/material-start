import './supplant';

export { LogDecorator, ExternalLogger }

/**
 * Decorate the $log to use inject the LogEnhancer features.
 *
 * @param {object} $provide The log console.
 * @returns {object} promise.
 * @private
 */
function LogDecorator($provide) {
    // Register our $log decorator with AngularJS $provider

    $provide.decorator('$log', ["$delegate", function ($delegate) {

        return enhanceLog($delegate);

    }]);
}


function ExternalLogger()
{
    /**
     * Determines if the requested console logging method is available, since it is not with IE.
     *
     * @param {Function} method The request console logging method.
     * @returns {object} Indicates if the console logging method is available.
     * @private
     */
    var prepareLogToConsole = function (method)
    {
        var console = window.console,
            isFunction = function (fn)
            {
                return(typeof (fn) == typeof (Function));
            },
            isAvailableConsoleFor = function (method)
            {
                var isPhantomJS = new BrowserDetect().browser != "PhantomJS";

                // NOTE: Tried using this for less logging in the console/terminal, but then logging in IDE is
                // wiped out as well return console && console[method] && isFunction(console[method]) && isPhantomJS;

                return console && console[method] && isFunction(console[method]);
            },
            logFn = function (message)
            {
                if(isAvailableConsoleFor(method))
                {
                    try
                    {
                        console[method](message);

                    }
                    catch(e)
                    {}
                }
            };

        return logFn;
    },
    $log = {
        log  : prepareLogToConsole("log"),
        info : prepareLogToConsole("info"),
        warn : prepareLogToConsole("warn"),
        debug: prepareLogToConsole("debug"),
        error: prepareLogToConsole("error")
    };

    // Publish instance of $log simulator; with enhanced functionality
    return new enhanceLog($log);
}


function enhanceLog($log) {
    var separator = "::",

        /**
         * Cached DateTime formatter
         */
        dateFormatter = new DateTime(),
        detector = new BrowserDetect(),


        /**
         * Capture the original $log functions; for use in enhancedLogFn()
         */
        _$log = (function ($log) {
            return {
                log: $log.log,
                info: $log.info,
                warn: $log.warn,
                debug: $log.debug,
                error: $log.error
            };
        })($log),

        /**
         * Chrome Dev tools supports color logging
         * @see https://developers.google.com/chrome-developer-tools/docs/console#styling_console_output_with_css
         */
        colorify = function (message, colorCSS) {
            var isChrome = detector.browser == "Chrome",
                canColorize = isChrome && (colorCSS !== undefined);

            return canColorize ? ["%c" + message, colorCSS] : [message];
        },

        /**
         * Partial application to pre-capture a logger function
         */
        prepareLogFn = function (logFn, className, colorCSS) {
            /**
             * Invoke the specified `logFn` with the supplant functionality...
             */
            var supplant = String.supplant;
            var enhancedLogFn = function () {
                try {
                    var args = Array.prototype.slice.call(arguments);

                    // prepend a timestamp and optional classname to the original output message
                    args[0] = supplant("{0} - {1}{2}", [dateFormatter.now(), className, args[0]]);
                    args = colorify(supplant.apply(null, args), colorCSS);

                    logFn.apply(null, args);
                }
                catch (error) {
                    $log.error("LogEnhancer ERROR: " + error);
                }

            };

            // Only needed to support angular-mocks expectations
            enhancedLogFn.logs = [];

            return enhancedLogFn;
        },

        /**
         * Support to generate class-specific logger instance with classname only
         */
        getInstance = function (className, colorCSS, customSeparator) {
            className = (className !== undefined) ? className + (customSeparator || separator) : "";

            var instance = {
                log: prepareLogFn(_$log.log, className, colorCSS),
                info: prepareLogFn(_$log.info, className, colorCSS),
                warn: prepareLogFn(_$log.warn, className, colorCSS),
                debug: prepareLogFn(_$log.debug, className, colorCSS),
                error: prepareLogFn(_$log.error, className) // NO styling of ERROR messages
            };

            // Attach instance specific tryCatch() functionality...
            instance.tryCatch = makeTryCatch(instance.error, instance);

            return instance;
        };

    // Add special method to AngularJS $log
    $log.getInstance = getInstance;

    return $log;
}


/**
 * Implement a tryCatch() method that logs exceptions for method invocations AND
 * promise rejection activity.
 *
 * @param notifyFn      Function used to log.debug exception information
 * @param scope         Object Receiver for the notifyFn invocation
 *
 * @return Function used to guard and invoke the targeted actionFn
 */
function makeTryCatch(notifyFn, scope) {
    /**
     * Report error (with stack trace if possible) to the logger function
     */
    var reportError = function (reason) {
                if (notifyFn != null) {
                    var error = (reason && reason.stack) ? reason : null,
                            message = reason != null ? String(reason) : "";

                    if (error != null) {
                        message = error.message + "\n" + error.stack;
                    }

                    notifyFn.apply(scope, [message]);
                }

                return reason;
            },
            /**
             * Publish the tryCatch() guard 'n report function
             */
            tryCatch = function (actionFn, scope, args) {
                try {
                    // Invoke the targeted `actionFn`
                    var result = angular.isFunction(actionFn) ? actionFn.apply(scope, args || []) : String(actionFn),
                            promise = (angular.isObject(result) && result.then) ? result : null;

                    if (promise != null) {
                        // Catch and report any promise rejection reason...
                        promise.then(null, reportError);
                    }

                    actionFn = null;
                    return result;

                }
                catch (e) {
                    actionFn = null;
                    throw reportError(e);
                }

            };

    return tryCatch;
}


/**
 * @author     Thomas Burleson
 * @author     StackOverflow - Harto, http://stackoverflow.com/questions/2315408/how-do-i-format-a-timestamp-in-javascript-to-display-it-in-graphs-utc-is-fine
 * @description
 *
 * DateTime utility class that spits out UTC timestamp strings usually used in a reporting, print-capable process.
 */
function DateTime() {
    /**
     * Creates a date timestamp string.
     */
    var buildTimeString = function (date, format) {
        format = format || "%h:%m:%s:%z";

        function pad(value, isMilliSeconds) {
            if (typeof (isMilliSeconds) === "undefined") {
                isMilliSeconds = false;
            }
            if (isMilliSeconds) {
                if (value < 10) {
                    value = "00" + value;
                }
                else if (value < 100) {
                    value = "0" + value;
                }
            }
            return (value.toString().length < 2) ? "0" + value : value;
        }

        return format.replace(/%([a-zA-Z])/g, function (_, fmtCode) {
            switch (fmtCode) {
                case "Y":
                    return date.getFullYear();
                case "M":
                    return pad(date.getMonth() + 1);
                case "d":
                    return pad(date.getDate());
                case "h":
                    return pad(date.getHours());
                case "m":
                    return pad(date.getMinutes());
                case "s":
                    return pad(date.getSeconds());
                case "z":
                    return pad(date.getMilliseconds(), true);
                default:
                    throw new Error("Unsupported format code: " + fmtCode);
            }
        });
    };

    // Publish API for DateTime utils
    return {
        now : function () {
            return buildTimeString(new Date());
        }
    };

}

function BrowserDetect() {

    // NOTE: It's important to list PhantomJS first since it has the same browser information as Safari
    this.dataBrowser = [
    {
        string: "PhantomJS",
        subString: "PhantomJS",
        identity: "PhantomJS",
        versionSearch: "PhantomJS"
    },
    {
        string: navigator.userAgent,
        subString: "Chrome",
        identity: "Chrome"
    },
    {
        string: navigator.userAgent,
        subString: "OmniWeb",
        versionSearch: "OmniWeb/",
        identity: "OmniWeb"
    },
    {
        string: navigator.vendor,
        subString: "Apple",
        identity: "Safari",
        versionSearch: "Version"
    },
    {
        prop: window.opera,
        identity: "Opera",
        versionSearch: "Version"
    },
    {
        string: navigator.vendor,
        subString: "iCab",
        identity: "iCab"
    },
    {
        string: navigator.vendor,
        subString: "KDE",
        identity: "Konqueror"
    },
    {
        string: navigator.userAgent,
        subString: "Firefox",
        identity: "Firefox"
    },
    {
        string: navigator.vendor,
        subString: "Camino",
        identity: "Camino"
    },
    { // for newer Netscapes (6+)
        string: navigator.userAgent,
        subString: "Netscape",
        identity: "Netscape"
    },
    {
        string: navigator.userAgent,
        subString: "MSIE",
        identity: "Explorer",
        versionSearch: "MSIE"
    },
    {
        string: navigator.userAgent,
        subString: "Gecko",
        identity: "Mozilla",
        versionSearch: "rv"
    },
    {
        // for older Netscapes (4-)
        string: navigator.userAgent,
        subString: "Mozilla",
        identity: "Netscape",
        versionSearch: "Mozilla"
    }],
    this.dataOS = [
    {
        string: navigator.platform,
        subString: "Win",
        identity: "Windows"
    },
    {
        string: navigator.platform,
        subString: "Mac",
        identity: "Mac"
    },
    {
        string: navigator.userAgent,
        subString: "iPhone",
        identity: "iPhone/iPod"
    },
    {
        string: navigator.platform,
        subString: "Linux",
        identity: "Linux"
    }];

    this.init();
}

BrowserDetect.prototype = {

    /**
     * Sets the browser version and OS(Operating Systems) uses {@link mindspace.utils:BrowserDetect#searchString searchString}
     * and {@link mindspace.utils:BrowserDetect#searchVersion searchVersion} internally
     */
    init: function ()
    {
        this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
        this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) ||
            "an unknown version";
        this.OS = this.searchString(this.dataOS) || "an unknown OS";

        return this;
    },

    /**
     * Checks whether the browser is IE8. Root element(html) is already set with class='ie8
     * this function uses the same class reference and provides the status.
     */
    isIE8: function ()
    {
        return (document.documentElement.hasAttribute("class")) && (document.documentElement.getAttribute("class") === "ie8");
    },

    /**
     * User for determining the browser and OS based on the input provided by the data param.
     * Also sets the versionSearchString parameter which would be used by
     * {@link mindspace.utils:BrowserDetect#searchVersion searchVersion}
     */
    searchString: function (data)
    {
        for(var i = 0; i < data.length; i++)
        {
            var dataString = data[i].string;
            var dataProp = data[i].prop;

            this.versionSearchString = data[i].versionSearch || data[i].identity;
            if(dataString)
            {
                if(dataString.indexOf(data[i].subString) != -1)
                {
                    return data[i].identity;
                }
            }
            else if(dataProp)
            {
                return data[i].identity;
            }
        }
    },

    /**
     * User for determining the browser version based on input string
     */
    searchVersion: function (dataString)
    {
        var index = dataString.indexOf(this.versionSearchString);
        if(index == -1)
        {
            return;
        }
        return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
    }

};
