export function initialize(application) {
  // now have access to store on console, shazam
  application.store = application.container.lookup("service:store");
  window.App = application;  // or window.Whatever
}

export default {
  name: 'global',
  initialize: initialize
};
