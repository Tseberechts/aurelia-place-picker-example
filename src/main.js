var Promise = require('bluebird'); // Promise polyfill for IE11
import {bootstrap} from 'aurelia-bootstrapper-webpack';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/font-awesome/css/font-awesome.css';
import '../styles/styles.css';

bootstrap(function(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-place-picker', config => {
      config.options({
      apiKey: 'AIzaSyAX0aZ8wgoKcmlY-elhaYzR2F0ZeIYKVXg'
    });
  });
    

  aurelia.start().then(() => aurelia.setRoot('app', document.body));
});
