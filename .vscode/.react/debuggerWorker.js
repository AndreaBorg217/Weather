
// Initialize some variables before react-native code would access them
var onmessage=null, self=global;
// Cache Node's original require as __debug__.require
global.__debug__={require: require***REMOVED***;
// Prevent leaking process.versions from debugger process to
// worker because pure React Native doesn't do that and some packages as js-md5 rely on this behavior
Object.defineProperty(process, "versions", {
    value: undefined
***REMOVED***);
// TODO: Replace by url.fileURLToPath method when Node 10 LTS become deprecated
function fileUrlToPath(url) {
  if (process.platform === 'win32') {
      return url.toString().replace('file:///', '');
  ***REMOVED*** else {
    return url.toString().replace('file://', '');
  ***REMOVED***
***REMOVED***
function getNativeModules() {
    var NativeModules;
    try {
        // This approach is for old RN versions
        NativeModules = global.require('NativeModules');
    ***REMOVED*** catch (err) {
        // ignore error and try another way for more recent RN versions
        try {
            var nativeModuleId;
            var modules = global.__r.getModules();
            var ids = Object.keys(modules);
            for (var i = 0; i < ids.length; i++) {
              if (modules[ids[i]].verboseName) {
                 var packagePath = new String(modules[ids[i]].verboseName);
                 if (packagePath.indexOf('Libraries/BatchedBridge/NativeModules.js') > 0 || packagePath.indexOf('Libraries\\BatchedBridge\\NativeModules.js') > 0) {
                   nativeModuleId = parseInt(ids[i], 10);
                   break;
           ***REMOVED***
        ***REMOVED***
      ***REMOVED***
          if (nativeModuleId) {
            NativeModules = global.__r(nativeModuleId);
    ***REMOVED***
  ***REMOVED***
        catch (err) {
            // suppress errors
  ***REMOVED***
    ***REMOVED***
    return NativeModules;
***REMOVED***
// Originally, this was made for iOS only
var vscodeHandlers = {
    'vscode_reloadApp': function () {
        var NativeModules = getNativeModules();
        if (NativeModules && NativeModules.DevSettings) {
            NativeModules.DevSettings.reload();
  ***REMOVED***
    ***REMOVED***,
    'vscode_showDevMenu': function () {
        var NativeModules = getNativeModules();
        if (NativeModules && NativeModules.DevMenu) {
            NativeModules.DevMenu.show();
  ***REMOVED***
    ***REMOVED***
***REMOVED***;
process.on("message", function (message) {
    if (message.data && vscodeHandlers[message.data.method]) {
        vscodeHandlers[message.data.method]();
    ***REMOVED*** else if(onmessage) {
        onmessage(message);
    ***REMOVED***
***REMOVED***);
var postMessage = function(message){
    process.send(message);
***REMOVED***;
if (!self.postMessage) {
    self.postMessage = postMessage;
***REMOVED***
var importScripts = (function(){
    var fs=require('fs'), vm=require('vm');
    return function(scriptUrl){
        scriptUrl = fileUrlToPath(scriptUrl);
        var scriptCode = fs.readFileSync(scriptUrl, 'utf8');
        // Add a 'debugger;' statement to stop code execution
        // to wait for the sourcemaps to be processed by the debug adapter
        vm.runInThisContext('debugger;' + scriptCode, {filename: scriptUrl***REMOVED***);
    ***REMOVED***;
***REMOVED***)();

// Worker is ran as nodejs process, so console.trace() writes to stderr and it leads to error in native app
// To avoid this console.trace() is overridden to print stacktrace via console.log()
// Please, see Node JS implementation: https://github.com/nodejs/node/blob/master/lib/internal/console/constructor.js
console.trace = (function() {
    return function() {
        try {
            var err = {
                name: 'Trace',
                message: require('util').format.apply(null, arguments)
          ***REMOVED***;
            // Node uses 10, but usually it's not enough for RN app trace
            Error.stackTraceLimit = 30;
            Error.captureStackTrace(err, console.trace);
            console.log(err.stack);
  ***REMOVED*** catch (e) {
            console.error(e);
  ***REMOVED***
    ***REMOVED***;
***REMOVED***)();

// As worker is ran in node, it breaks broadcast-channels package approach of identifying if it’s ran in node:
// https://github.com/pubkey/broadcast-channel/blob/master/src/util.js#L64
// To avoid it if process.toString() is called if will return empty string instead of [object process].
var nativeObjectToString = Object.prototype.toString;
Object.prototype.toString = function() {
    if (this === process) {
        return '';
    ***REMOVED*** else {
        return nativeObjectToString.call(this);
    ***REMOVED***
***REMOVED***;


"use strict";

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

/* global __fbBatchedBridge, self, importScripts, postMessage, onmessage: true */

/* eslint no-unused-vars: 0 */
onmessage = function () {
  var visibilityState;

  var showVisibilityWarning = function () {
    var hasWarned = false;
    return function () {
      // Wait until `YellowBox` gets initialized before displaying the warning.
      if (hasWarned || console.warn.toString().includes('[native code]')) {
        return;
***REMOVED***

      hasWarned = true;
      console.warn('Remote debugger is in a background tab which may cause apps to ' + 'perform slowly. Fix this by foregrounding the tab (or opening it in ' + 'a separate window).');
    ***REMOVED***;
  ***REMOVED***();

  var messageHandlers = {
    executeApplicationScript: function (message, sendReply) {
      for (var key in message.inject) {
        self[key] = JSON.parse(message.inject[key]);
***REMOVED***

      var error;

      try {
        importScripts(message.url);
***REMOVED*** catch (err) {
        error = err.message;
***REMOVED***

      sendReply(null
      /* result */
      , error);
    ***REMOVED***,
    setDebuggerVisibility: function (message) {
      visibilityState = message.visibilityState;
    ***REMOVED***
  ***REMOVED***;
  return function (message) {
    if (visibilityState === 'hidden') {
      showVisibilityWarning();
    ***REMOVED***

    var object = message.data;

    var sendReply = function (result, error) {
      postMessage({
        replyID: object.id,
        result: result,
        error: error
***REMOVED***);
    ***REMOVED***;

    var handler = messageHandlers[object.method];

    if (handler) {
      // Special cased handlers
      handler(object, sendReply);
    ***REMOVED*** else {
      // Other methods get called on the bridge
      var returnValue = [[], [], [], 0];
      var error;

      try {
        if (typeof __fbBatchedBridge === 'object') {
          returnValue = __fbBatchedBridge[object.method].apply(null, object.arguments);
  ***REMOVED*** else {
          error = 'Failed to call function, __fbBatchedBridge is undefined';
  ***REMOVED***
***REMOVED*** catch (err) {
        error = err.message;
***REMOVED*** finally {
        sendReply(JSON.stringify(returnValue), error);
***REMOVED***
    ***REMOVED***
  ***REMOVED***;
***REMOVED***();

//# sourceMappingURL=debuggerWorker.js.map
// Notify debugger that we're done with loading
// and started listening for IPC messages
postMessage({workerLoaded:true***REMOVED***);