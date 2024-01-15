<template>
    <navbar></navbar>

    <products :products="products"></products>

    <footer_n></footer_n>
</template>

<script>
  import NavBar from "@/components/NavBar.vue";
  import Product from "@/components/Product.vue";
  import Footer from  "@/components/Pages/Footer.vue"
  import Products from "@/components/Products.vue";
    import creme from "./assets/images/pizza1-creme.jpg";
    import tomate from "./assets/images/pizza1-tomate.jpg";
    import premisses from "./assets/images/s_prem.jpeg";
    import pepperonis from "./assets/images/s_tomate.jpeg";

//   import img1 from "../src/assets/images/"


  export default {
name: 'App',
    components: {
       'product' : Product,
        'products' : Products,
        'navbar' : NavBar,
        'footer_n' : Footer,
    },
    mounted() {
        localStorage.setItem("products_card",[]);
        const products = localStorage.getItem("products_card");
        if(products == null){
                 localStorage.setItem("products_card",[]);
        }
           
    },
    data() {
       return {
        products : [
                    {
                        id : 1,
                        name : "Pizza",
                        type : "Creme",
                        image : creme,
                        // image: "../assets/images/pizza1-creme.jpg",
                        isAvailable : true,
                        price : 1000,
                        ingredients : ["peperonis","meladonia","vox"],
                        sauces : ["vina","pinia"],
                        values  : ["good","good","Heart"],
                        isPromote : true,
                        promotion : 0.2

                    },  
                    {
                        id : 2,
                        name : "Pizza",
                        type : "Tomate",
                        image : tomate,
                        isAvailable : false,
                        price : 1500,
                        ingredients : ["peperonis","meladonia","vox"],
                        sauces : ["vina","pinia"],
                        values  : ["good","good","Heart"],
                        isPromote : true,
                        promotion : 0.5
                    },
                    {
                        id : 3,
                        name : "Pizza",
                        type : "Premisses",
                        image : premisses,
                        isAvailable : true,
                        price : 2500,
                        ingredients : ["peperonis","meladonia","vox"],
                        sauces : ["vina","pinia"],
                        values  : ["good","good","Heart"],
                        isPromote : false,
                        promotion : 0.2
                    },
                    {
                        id : 4,
                        name : "Pizza",
                        type : "Pépéronis",
                        image : pepperonis,
                        isAvailable : true,
                        price : 3500,
                        ingredients : ["peperonis","meladonia","vox"],
                        sauces : ["vina","pinia"],
                        values  : ["good","good","Heart"],
                        isPromote : false,
                        promotion : 0.2
                    }
                ],
       }
    }
}
</script>

<style>
    #app {
        position: relative;
    }
</style>
