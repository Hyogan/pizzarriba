<template>
    <navbar></navbar>
    <products :products="products"></products>
</template>

<script>
  import NavBar from "./components/NavBar.vue";
  import Product from "./components/Product.vue";
  import Products from "./components/Products.vue";
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
                values  : ["good","good","Heart"]
            },  {
                id : 2,
                name : "Pizza",
                type : "Tomate",
                image : tomate,
                isAvailable : true,
                price : 1500,
                ingredients : ["peperonis","meladonia","vox"],
                sauces : ["vina","pinia"],
                values  : ["good","good","Heart"]
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
                values  : ["good","good","Heart"]
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
                values  : ["good","good","Heart"]
            },
        ]
       }
    }
}
</script>
    
<style>
    #app {
        position: relative;
    }
</style>
