import template from './app.html';
import styles from './app.scss';

export default {
  template,
  controllerAs: 'app',
  controller
};


controller.inject = ['placeService'];

function controller (placeService) {
  this.styles = styles;

  this.newPlace = (place) => {
    placeService.add(place)
      .then(place => this.data.push(place))
      .catch(err => console.log(err));
  };

  placeService.get()
    .then(places => {
      this.data = places;
    });
}
