placeService.$inject = ['$http', 'apiUrl'];

export default function placeService ($http, apiUrl) {

  return{
    get() {
      return $http
      .get(`${apiUrl}/place`)
      .then(r => r.data);
    },
    add(place) {
      return $http
      .post(`${apiUrl}/place`, place)
      .then(r => r.data);
    }
  };
}
