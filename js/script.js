

const { createApp } = Vue


createApp({
    data() {
        return {
            arrayEmail : [],
            count: 1,
        }
    },
    methods: {

        getEmailFromList(){
            axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((response) => {

                this.arrayEmail.push(response.data.response);

            })
        }


    },
    created(){
        while (this.count <= 10) {
            this.getEmailFromList()
            this.count++;
        }

    }
}).mount("#app")
