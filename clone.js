"use strict";
/* global isArray, isHostObject, isHTMLElement */
/**
 * @function clone
 * @param o {all}
 * @param deep {Boolean} - clone descendants or reference
 * @return {all}
 * @description attempts to clone supplied object
 * @requires isArray
 **/
var clone = function(o, deep){
       deep = (deep === undefined && deep !== true) ? false : true;
       var obj, i, imax;
       if(typeof o === 'object' && o !== null){
            if(isArray(o)){
                var m = [];
                for(i=0, imax =o.length; i<imax; i+=1){
                   m[i] = (deep) ? clone(o[i]) : o[i]; }
                return m;
            } else if('hasOwnProperty' in o){
                var n = {};
                for(var prop in o){
                    if(o.hasOwnProperty(prop)){
                        n[prop] = (deep) ? clone(o[prop]) : o[prop]; }}
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
var deepClone = function(o){ return clone(o, true); };
/**
 * @function cloneExcludeHost
 * @param o {all}
 * @param deep {Boolean}
 * @description clone but with exclusion of host objects, only works if global namespace (window) is not polluted
 * @requires isArray, isHostObject
 **/
var cloneExcludeHost = function(o, deep){
       deep = (deep === undefined && deep !== true) ? false : true;
       var obj, i, imax;
       if(typeof o === 'object' && o !== null && !isHostObject(o)){
            if(isArray(o)){
                var m = [];
                for(i=0, imax =o.length; i<imax; i+=1){
                   m[i] = (deep) ? cloneExcludeHost(o[i]) : o[i]; }
                return m;
            } else if('hasOwnProperty' in o){
                var n = {};
                for(var prop in o){
                    if(o.hasOwnProperty(prop)){
                        n[prop] = (deep) ? cloneExcludeHost(o[prop]) : o[prop]; }}
                return n; }
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
var cloneExcludeHTML = function(o, deep){
       deep = (deep === undefined && deep !== true) ? false : true;
       var obj, i, imax;
       if(typeof o === 'object' && o !== null && !isHTMLElement(o)){
            if(isArray(o)){
                var m = [];
                for(i=0, imax =o.length; i<imax; i+=1){
                   m[i] = (deep) ? cloneExcludeHTML(o[i]) : o[i]; }
                return m;
            } else if('hasOwnProperty' in o){
                var n = {};
                for(var prop in o){
                    if(o.hasOwnProperty(prop)){
                        n[prop] = (deep) ? cloneExcludeHTML(o[prop]) : o[prop]; }}
                return n; }
            //if you need to catch add more here with n;
       }
       var t = (o !== undefined) ? o : undefined;
       return t; };
