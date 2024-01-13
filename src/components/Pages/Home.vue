<template>
    <section class="home" id="home">
        <img src="../../assets/images/pages/speedy_gonzales3.png" alt="">
        <div class="infos">
            <h1>Bienvenue à la <span>pizzarriba</span></h1>
    
            <p class="intro-text">Chez senior speedy gonzales, nous prenons un plaisir à faire des pizzas toujours 
                plus belles et toujours plus bonnes pour vous rassasier et vous faire plaisir.
            </p>
        </div>
    </section>
</template>

<script>
    export default {
        // name : "Home"
        mounted() {
           
            // this.style.opacity = 1;
                }
    }
</script>

<style scoped>

    h1 {
        font-size: calc(50px + 2vw);
        color: white;
    }
    h1 span {
        color : orange;
        font-weight: 100;
        font-size: calc(60px + 2vw);
    }

 
   .intro-text {
        color : white;
        font-size: 23px;
    }
    @media screen and (max-width : 470px) {
       header .intro-text {
        text-align: center;
        font-size: 17px;
       }
    }

   
</style>

