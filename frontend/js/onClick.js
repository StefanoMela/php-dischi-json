const { createApp } = Vue;

createApp({
    data() {
        return {
            discIndex: 0,
        };
    },

    methods: {

        getThumb(index) {

            this.discIndex = index;

            console.log(this.discIndex);

            axios.get('http://localhost:8888/php-dischi-json/backend/api/get-dischi.php')
                .then((response) => {

                    console.log(response.data[index]);
                });
        },
    },
}).mount('#app')