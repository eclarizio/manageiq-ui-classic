window.angular = require('angular');
window.Rx = require('rxjs');
window.$ = require('jquery');
window._ = require('lodash');
window.__ = (x) => x;
window.n__ = (x) => x;
window.miqSparkleOn = () => {};
window.miqSparkleOff = () => {};
window.miqAjaxButton = () => {};

// mock async requests
require('whatwg-fetch');

require('../app/assets/javascripts/miq_global');
require('../app/assets/javascripts/miq_application');
require('../app/assets/javascripts/miq_angular_application');

import { rxSubject, sendDataWithRx, listenToRx } from '../app/javascript/miq_observable';
ManageIQ.angular.rxSubject = rxSubject;
window.sendDataWithRx = sendDataWithRx;
window.listenToRx = listenToRx;

// configure enzyme adapter
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new EnzymeAdapter() });
