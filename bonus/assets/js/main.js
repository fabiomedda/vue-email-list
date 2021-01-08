/*
Griglia 6 x6, ad ogni click parte una
richiesta AJAX che prende un
numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo,
se è > di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro
del quadrato
*/

let root = new Vue ({
    el: "#root",
    data: {
        numeriGriglia: [],
    },
    methods: {
        random(){
            this.numeriGriglia = [];
            for (let index = 0; index < 36; index++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/int').then(response => {
                    //console.log(response);
                    //console.log(response.data.response);
                    this.numeriGriglia.push(response.data.response);
                })                
            }
            console.log(this.numeriGriglia);
        }
    },
});