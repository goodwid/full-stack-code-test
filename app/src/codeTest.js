import angular from 'angular';
import components from './components';
import services from './services';

const app = angular.module('codeTest', [
  components,
  services]);

export default app;
