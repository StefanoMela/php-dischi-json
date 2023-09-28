const { createApp } = Vue;

createApp({
  data() {
    return {
      discList: [],
      discIndex: 0,
    };
  },

  mounted() {
    axios.get('http://localhost:8888/php-dischi-json/backend/api/get-dischi.php')
      .then((response) => {
        this.discList = response.data;
      })
  },
}).mount('#app')