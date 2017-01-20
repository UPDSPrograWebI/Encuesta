import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {

    var promise = new Promise(function(resolve, reject) {
      setTimeout(function () {
        resolve([
          {
            nombre: 'encuesta 1',
            preguntas: [
              'pregunta 1',
              'pregunta 2',
              'pregunta 3'
            ]
          },
          {
            nombre: 'encuesta 2',
            preguntas: [
              'pregunta 4',
              'pregunta 5',
              'pregunta 6'
            ]
          }
        ]);
      }, 5000);
    });

    return promise;
  }
});
