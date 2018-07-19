apiURL = 'http://leopittapi.docksal/api/posts';

new Vue({
  el: '#app',

  data: {
    homeTitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    posts: []
  },

  mounted: function() {
    this.getPosts();
  },

  methods: {
    getPosts: function(){

      console.log('getPosts');

      this.$http.get(apiURL).then(response => {
        this.posts = response.body;
        console.log(this.posts);
      }, response => {
        console.log('oops');
      });
    }
  },

  filters: {
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format('MMMM Do YYYY')
      }
    }
  }

});
