<template>
    <div class='full-content'>
        <header class="header">
                    <p>
                        <img src="../assets/images/pages/pizzariba-logo.jpg" />
                        <h1 clsss="title">PIZZARIBA <span>.</span></h1>
                    </p>
                <nav>
                    <div class="open-btn">
                        <img class="hamburger" src="../assets/images/pages/close-btn.png" @click="closeNav()" alt="">
                    </div>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About us</router-link>
                    <router-link to="/products">Products</router-link>
                    <router-link to="/team">Team</router-link>
                    <router-link to="/card">Card</router-link>
                    <router-link to="/advices">Advices</router-link>
                </nav> 
                <img class="hamburger" id="openNav" src="../assets/images/pages/hamburger-white.png" @click="openNav()" alt="">  
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
    // import NotFound from './Pages/NotFound.vue';

    

    export default {

        methods : {
            openNav(){
                document.querySelector("nav").classList.add("opened");
                document.querySelector("#openNav").classList.toggle("closed");
            },
            closeNav(){
                document.querySelector("#openNav").classList.toggle("closed");
                document.querySelector("nav").classList.remove("opened");
            }
        }
    }

</script>

<style scoped>
    header {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        padding: 15px 15px;
    }
 
    header a {
        font-size: 22px;
        color: white;
        text-decoration: none;
        padding: 12px 15px;
        margin: 10px 0;
        transition: .7s;
        font-weight: bold;
    }
    header a:hover{
        background: white;
        color: orange;
        font-weight: bold;
    }
    header p {
        color : white;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }
    header img{
        width: 180px;
        height: 100px;
    }
    

   @media screen and (min-width : 1008px) {
        header img.hamburger {
            display: none;
        }
   }

   @media screen and (max-width : 1008px) {
        img {
            display: flex;
        }
        header h1.title{
        font-size: 15px;
        }

        header img.closed {
            display: none;
        }

        header {
            /* flex-direction: column; */
            flex-wrap: wrap;
            position: relative;
        }
        nav {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 0;
            right : 0;
            z-index: 99999;
            /* background: rgba(0, 0, 0, 0.678); */
            background: rgba(255, 166, 0, 0.719);
            width: 70%;
            height: 100vh;
            display: flex;
            justify-content: flex-start;
            align-items: flex-start ;
            padding-top: 40px;
            box-shadow: -10px 0 10px rgba(0, 0, 0, 0.5) ;
            backdrop-filter: blur(5px);
            transform: translateX(100%);
            /* display: none; */
            transition: .7s;
        }
        header img {
            display: block;
            /* background: white; */
            width: 50px;
            height: 50px;
        }
        nav.opened{
            display: flex;
            transform: translateX(0%);
        }
    }
       
</style>