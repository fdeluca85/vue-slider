// alert('hello')

// Descrizione:
// Partendo dal markup della versione svolta in js plain, rifare lo slider ma questa volta usando Vue.
// Bonus:
// 1- al click su una thumb, visualizzare in grande l'immagine corrispondente
// 2- applicare l'autoplay allo slider: ogni 3 secondi, cambia immagine automaticamente
// 3- quando il mouse va in hover sullo slider, bloccare l'autoplay e farlo riprendere quando esce



const app = new Vue({
    el:'#root',
    data:{
        images:[
            "./img/01.jpg",
            "./img/02.jpg",
            "./img/03.jpg",
            "./img/04.jpg",
            "./img/05.jpg",
        ],
        currentImg:0
    },
    methods:{
        nextImage:function(){
            this.currentImg++;
        }

    }


});