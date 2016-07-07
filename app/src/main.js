import angular from 'angular';
import app from './codeTest';
import './scss/main.scss';

app.value( 'apiUrl', 'http://localhost:9000/api');
angular.bootstrap(document, [app.name]);
