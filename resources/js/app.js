/**
 * Created by Tarek on 10/29/2017.
 */

try {
    window.$ = window.jQuery = require('jquery');
    // window.$ = window.jQuery = require('./jquery.min');
} catch (e) {}

window.axios = require('axios');
window.Vue = require('vue');

require('./route');

