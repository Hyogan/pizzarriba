<template>
    <div class='full-content'>
        <header class="header">
                    <p>
                        <img src="../assets/images/pages/pizzariba-logo.jpg" />
                        <h1>PIZZARIBA <span>.</span></h1>
                    </p>
                <nav>
                    <router-link to="/">Home</router-link>
                    <router-link to="/about">About us</router-link>
                    <router-link to="/products">Products</router-link>
                    <router-link to="/team">Team</router-link>
                    <router-link to="/card">Card</router-link>
                    <router-link to="/advices">Advices</router-link>
                        
                </nav> 
        </header>
        <router-view></router-view>
    </div>
</template>
<script>
    // import NotFound from './Pages/NotFound.vue';

    

    export default {
        // props : ["products"],
        // data() {
        //     return {
        //     currentPath: window.location.hash
        //     }
        // },
        // computed: {
        //     currentView() {
        //     return routes[this.currentPath.slice(1) || '/'] || NotFound
        //     }
        // },
        // mounted() {
        //     window.addEventListener('hashchange', () => {
        //         this.currentPath = window.location.hash
        //     });
        // }
    }

</script>



<style scoped>
    header {
        display: flex;
        width: 100%;
        justify-content: space-around;
        align-items: center;
        /* background: url("../assets/images/pizza1-tomate.jpg") top; */
        padding: 15px 15px;
        top: 0;
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

   @media screen and (max-width : 1008px) {
        /* nav {
            display: flex;
            flex-direction: column;
            position: absolute;
            top: 0;
            z-index: 99999;
            background: #000;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center ;
        } */

        header {
            display: flex;
            flex-wrap: wrap;

            position: absolute;
            top: 0;
            z-index: 99999;
            background: #00000059;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center ;
            /* margin-bottom: 7; */
        }
    
   }
</style>