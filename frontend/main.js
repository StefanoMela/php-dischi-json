const { createApp } = Vue;

createApp({
  data() {
    return {
      discList: [],
      discIndex: 0,
    };
  },

  methods: {

    getThumb(index){

      this.discIndex = index;

      console.log(this.discIndex);

      axios.get('http://localhost:8888/php-dischi-json/backend/api/get-dischi.php')
      .then((response) => {

        console.log(response.data[index]);
      });
    },
  },
  mounted() {
    axios.get('http://localhost:8888/php-dischi-json/backend/api/get-dischi.php')
      .then((response) => {
        this.discList = response.data;
      })
  },
}).mount('#app')