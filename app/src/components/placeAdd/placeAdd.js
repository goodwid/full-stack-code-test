import template from './placeAdd.html';

export default {
  template,
  controllerAs: 'placeAdd',
  bindings: {
    add: '&'
  },
  controller () {
    this.submit = () => {
      let place = this.place;
      this.add({place});
      this.place = {};
    };
  }
};
