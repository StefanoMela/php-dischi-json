const { createApp } = Vue;

createApp({
  data() {
    return {
      discList: [],
      discIndex: 0,
    };
  },

  // onclick method recupero index e stampo in base index 

  mounted() {
    axios.get('http://localhost:8888/php-dischi-json/backend/api/get-dischi.php')
      .then((response) => {
        this.discList = response.data;
      })
  },
}).mount('#app')