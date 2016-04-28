// this script is suggested in the Using Enzyme w/ JSDOM guide
// from the Enzyme doc http://airbnb.io/enzyme/docs/guides/jsdom.html
require('babel-register')();

var jsdom = require('jsdom').jsdom;
var exposedProperties = ['window', 'navigator', 'document'];
// About #jsdom and #defaultView from doc:
  // The jsdom.jsdom method does fewer things automatically; it takes in only
  // HTML source,and it does not allow you to separately supply scripts that
  // it will inject and execute. It just gives you back a document object,
  // with usable document.defaultView, and starts asynchronously executing
  // any <script>s included in the HTML source. You can listen for the 'load'
  // event to wait until scripts are done loading and executing, just like you
  // would in a normal HTML page. Full Doc @ https://github.com/tmpvar/jsdom

// create 'fake' dom with jsdom
global.document = jsdom('');
// create 'fake' window
global.window = document.defaultView

// If a property in document.defaultView is not a property in the global object
// then we add it to the exposedProperties array and add it as a property
// of the global object. These are things like: innerHeight, HTMLBodyElement,
// HTMLButtonElement, XMLHttpRequest, alert, blur, etc.
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;
