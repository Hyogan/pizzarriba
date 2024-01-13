<template>
   <section class="about">
       <div class="about-el">
            <img src="../../assets/images/pages/pizzariba-logo.jpg" alt="">
            <div class="about-block">
                <h1>🍕 Our story </h1>
                <p>La PIZZARRIBA is a restaurant that has been mounted by Senior Bugs bunny. Not knowing how to administrate a restaurant, he then decided to give it to Senior speedy gonzales as a gift whose dream was to have a restaurant of himself</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum! Ex ab ipsam cum odit sed voluptatem in id magni, recusandae sunt, officia magnam maxime quis voluptates! Distinctio ipsum error dolorem corporis, corrupti rem in est. Perferendis dolore quisquam reprehenderit in minima voluptatibus. Facilis atque voluptates vel porro perferendis ipsa voluptatem corrupti, nulla, praesentium eligendi exercitationem. Quisquam quod, architecto eveniet, deserunt ea quidem sunt soluta nesciunt vero, accusantium hic pariatur.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum! Ex ab ipsam cum odit sed voluptatem in id magni, recusandae sunt, officia magnam maxime quis voluptates! Distinctio ipsum error dolorem corporis, corrupti rem in est. Perferendis dolore quisquam reprehenderit in minima voluptatibus. Facilis atque voluptates vel porro perferendis ipsa voluptatem corrupti, nulla, praesentium eligendi exercitationem. Quisquam quod, architecto eveniet, deserunt ea quidem sunt soluta nesciunt vero, accusantium hic pariatur.</p>
                <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum! Ex ab ipsam cum odit sed voluptatem in id magni, recusandae sunt, officia magnam maxime quis voluptates! Distinctio ipsum error dolorem corporis, corrupti rem in est. Perferendis dolore quisquam reprehenderit in minima voluptatibus. Facilis atque voluptates vel porro perferendis ipsa voluptatem corrupti, nulla, praesentium eligendi exercitationem. Quisquam quod, architecto eveniet, deserunt ea quidem sunt soluta nesciunt vero, accusantium hic pariatur.</p> -->
            </div>
       </div>
   </section>
</template>


<script>
    export default {
        
    }
</script>


<style>
    .about {
       
    }
    .about-el {
        display: flex;

        width : 95%;
        background : white;
        border-radius: 15px;    
        padding : 45px;
        /* flex-wrap: wrap; */
        /* height: fit-content; */
    }

    .about-el .about-block {
        display: flex;
        flex-direction: column;
        padding: 10px;
        /* flex-wrap: wrap; */
    }

    @media screen and (max-width : 1076px){
        .about-el {
            flex-wrap: wrap;
        }
        section.about {
            height : fit-content;
        }
    }

    .about-el h1 {
        font-size: 50px;
        font-weight: 900;
        color: rgb(151, 115, 68);
        color: orange;
        font-weight: bolder;
    }

    .about-el p {
            text-align: justify;
            text-justify:newspaper;
            text-indent: 35px;
            font-weight: 500;
            margin-bottom: 10px;
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    }


    .about img{
        width : 270px;

    }


</style>