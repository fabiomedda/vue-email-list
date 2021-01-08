/*
Istruzioni:
Genera 10 mail tramite api e stampale in una lista 
*/
let root = new Vue({
    el: "#root",
    data: {
        listaMail: [],
    },
    methods: {

    },
    mounted(){
        for (let index = 0; index < 10; index++) {
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then(response => {
                //console.log(response);
                this.listaMail.push(response.data.response);
            })
        }
        console.log(this.listaMail);
    }
});