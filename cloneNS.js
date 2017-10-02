"use strict";
/* global window, IMDebugger, $, __imns */
(function(){
    var adr = __imns('util.tools');
    // var adr = window; //for stand-alone delete above and uncomment this line
    if(!('clone' in adr)){
        /**
         * @function clone
         * @param o {all}
         * @param deep {Boolean} - clone descendants or reference
         * @return {all}
         * @description attempts to clone supplied object
         * @requires isArray
         **/
        adr.clone = function(o, deep){
           var ut = __imns('util.tools'),
               uv = __imns('util.validation');
           deep = (deep === undefined && deep !== true) ? false : true;
           var obj, i, imax;
           if(typeof o === 'object' && o !== null){
                if(uv.isArray(o)){
                    var m = [];
                    for(i=0, imax =o.length; i<imax; i+=1){
                       m[i] = (deep) ? ut.clone(o[i]) : o[i]; }
                    return m;
                } else if('hasOwnProperty' in o){
                    var n = {};
                    for(var prop in o){
                        if(o.hasOwnProperty(prop)){
                            n[prop] = (deep) ? ut.clone(o[prop]) : o[prop]; }}
                    return n;
                }
                //if you need to catch add more here with n;
           }
           var t = (o !== undefined) ? o : undefined;
           return t; };

        /**
         * @function deepClone
         * @param o {all}
         * @return {all}
         * @description quick/short-syntax to clone(o, true) method
         * @requires isArray
         **/
           adr.deepClone = function(o){
               var ut = __imns('util.tools');
               return ut.clone(o, true); };

        /**
         * @function cloneExcludeHost
         * @param o {all}
         * @param deep {Boolean}
         * @description clone but with exclusion of host objects, only works if global namespace (window) is not polluted
         * @requires isArray, isHostObject
         **/
        adr.cloneExcludeHost = function(o, deep){
           var ut = __imns('util.tools'),
               uv = __imns('util.validation');
           deep = (deep === undefined && deep !== true) ? false : true;
           var obj, i, imax;
           if(typeof o === 'object' && o !== null && !uv.isHostObject(o)){
                if(uv.isArray(o)){
                    var m = [];
                    for(i=0, imax = o.length; i<imax; i+=1){
                       m[i] = (deep) ? ut.cloneExcludeHost(o[i]) : o[i]; }
                    return m;
                } else if('hasOwnProperty' in o){
                    var n = {};
                    for(var prop in o){
                        if(o.hasOwnProperty(prop)){
                            n[prop] = (deep) ? ut.cloneExcludeHost(o[prop]) : o[prop]; }}
                    return n;
                }
                //if you need to catch add more here with n;
           }
           var t = (o !== undefined) ? o : undefined;
           return t; };

        /**
         * @function cloneExcludeHTML
         * @param o {all}
         * @param deep {Boolean}
         * @description - clone but with cloning HTML Elements to avoid duplication when reference is needed
         * @requires isArray, isHostObject, isHTMLElement
         **/
        adr.cloneExcludeHTML = function(o, deep){
           var ut = __imns('util.tools'),
               uv = __imns('util.validation');
           deep = (deep === undefined && deep !== true) ? false : true;
           var obj, i, imax;
           if(typeof o === 'object' && o !== null && !uv.isHTMLElement(o)){
                if(uv.isArray(o)){
                    var m = [];
                    for(i=0, imax =o.length; i<imax; i+=1){
                       m[i] = (deep) ? ut.cloneExcludeHTML(o[i]) : o[i]; }
                    return m;
                } else if('hasOwnProperty' in o){
                    var n = {};
                    for(var prop in o){
                        if(o.hasOwnProperty(prop)){
                            n[prop] = (deep) ? ut.cloneExcludeHTML(o[prop]) : o[prop]; }}
                    return n;
                }
                //if you need to catch add more here with n;
           }
           var t = (o !== undefined) ? o : undefined;
           return t; };
    }
})();
