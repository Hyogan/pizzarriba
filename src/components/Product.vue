<template>
    <div 
        class="product" 
        :style="backgroundStyle"
        >
            <div class="product-image">
                <img :src="product.image" alt="">
            </div>
            <div class="product-infos">
                <h1 class="name">{{product.name}} {{product.type}}</h1>
                <p class="available">
                    <span v-if="product.isAvailable">Dispognible</span>
                    <span v-else class="no">Momentanément indispognible</span>    
                </p>
                <p class="price"><span>{{product.price}} </span>Fcfa</p>
                <div class="list-of-lists">
                    <div class="ingrédients list">
                        <span>ingrédients  : </span>
                        <ul>
                            <li v-for="(ingredient,index) in product.ingredients" :key="index">{{ingredient}}</li>                
                        </ul>    
                    </div>
                    <div class="sauces list">
                        <span>sauces au choix  : </span>
                        <ul>
                            <li v-for="(sauce,index) in product.sauces" :key="index">{{sauce}}</li>
                        </ul>
                    </div>
                    <div class="values list">
                        <span>Valeurs nutritionnelles  : </span>
                        <ul>
                            <li v-for="(value,index) in product.values" :key="index">{{value}}</li>
                        </ul>
                    </div>
                </div>
                <div class="buttons" >
                    <button @click="addToCart(product.id)">Ajouter au panier</button>
                </div>
            </div>
        </div>
    

</template>


<script>
    export default {
        props : {
            product : Object,
        },
        computed: {
            backgroundStyle() {
                const gradientColors =  ["rgba(0, 0, 0, 0.552)", "rgba(0, 0, 0, 0.762)"]; // Example gradient colors
                const imageUrl =  this.product.image;
                const gradient = `linear-gradient(to right, ${gradientColors.join(', ')})`;
                return `background-image: ${gradient}, url(${imageUrl})`;
            }
            },
        methods : {
            addToCart(id){
            }
        }    
    }
</script>