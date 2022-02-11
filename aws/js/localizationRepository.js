/** Copyright 2022 Amazon.com Inc. or its affiliates. All Rights Reserved. **/
define(["jquery","ajaxHelper","webServiceError","webServiceCallbackParameters","misc","argumentNullError"],function($,a,b,c,d,e){var f=function(){};return f.getJavaScriptStrings=function(b,g,h,i){if(null===h||void 0===h)throw e.createInstance("callback");if(null===i||void 0===i)throw new e.createInstance("callbackContext");null!==g&&void 0!==g||(g=!0),g=d.parseBool(g,!0),a.invokeWebApi("GET",CDNBasePath+"/api/v1/localization/resources/jsstrings/"+b,g,new c(h,i),f.onGetJavaScriptStringsSuccess,f.onGetJavaScriptStringsError)},f.onGetJavaScriptStringsSuccess=function(a,b){if(null===a||void 0===a)throw new e.createInstance("context");a.callbackFunction.call(a.callbackContext,b,!1,null)},f.onGetJavaScriptStringsError=function(a,c,d,f){if(null===a||void 0===a)throw new e.createInstance("context");a.callbackFunction.call(a.callbackContext,null,!0,new b(c,d,f))},f});