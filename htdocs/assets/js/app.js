var app = new Vue({
  el: '#app',
  data: {
    homeTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    posts: [
      {
        title: 'Phasellus lorem orci, sollicitudin quis tortor et',
        teaser: 'Nunc feugiat vel dolor ut tristique. Nulla sagittis sem sed suscipit semper. Mauris non ligula in elit semper porttitor quis sit amet neque. Phasellus lorem orci, sollicitudin quis tortor et, viverra tempus felis.',
        date: 'Monday, 10th July 2018',
        numComments: 3,
      },
      {
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing',
        teaser: 'Feugiat vel dolor ut tristique. Nulla sagittis sem sed suscipit semper. Mauris non ligula in elit semper porttitor quis sit amet neque. Phasellus lorem orci, sollicitudin quis tortor et, viverra tempus felis.',
        date: 'Monday, 9th July 2018',
        numComments: 5,
      },
      {
        title: 'Feugiat vel dolor ut tristique',
        teaser: 'Feugiat vel dolor ut tristique. Nulla sagittis sem sed suscipit semper. Mauris non ligula in elit semper porttitor quis sit amet neque. Phasellus lorem orci, sollicitudin quis tortor et, viverra tempus felis.',
        date: 'Monday, 21st June 2018',
        numComments: 26,
      },
    ],
  }
});
