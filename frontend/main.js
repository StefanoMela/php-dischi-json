const { createApp } = Vue;

createApp({
  data() {
    return {
      discList: [],
    };
  },

  mounted() {
    axios.get('http://localhost:8888/php-dischi-json/backend/api/get-dischi.php')
      .then((response) => {
        this.discList = response.data;
      })
  },
}).mount('#app')