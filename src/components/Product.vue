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
            <modal :showModal="showModal" @closeModal="closeModal" ></modal>
        </div>
    

</template>


<script>
    import Modal from './Modal.vue';
    export default {
        props : {
            product : Object,
        },
        components : {
            "modal" : Modal
        },
        data() {
            return {
                showModal: false
            };
        },
        computed: {
            backgroundStyle() {
                const gradientColors =  ["rgba(0, 0, 0, 0.552)", "rgba(0, 0, 0, 0.762)"]; // Example gradient color
                const imageUrl =  this.product.image;
                const gradient = `linear-gradient(to right, ${gradientColors.join(', ')})`;
                return `background-image: ${gradient}, url(${imageUrl})`;
            }
            },
        methods : {
            addToCart(ida){
                // const product_card = [{id : 1}];
                if(!this.product.isAvailable){
                    this.showModal = true;
                }
                else {
                    let isThere = false;
                    const products_card_list =  JSON.parse(localStorage.getItem("products_card") || "[]");
                    // if(array_products.length() == )
                    products_card_list.forEach(function(product)  {
                        // console.log()
                        if(product.id == ida){
                            product.quantity++ ;
                            isThere = true;
                        }
                    });
                    if(isThere == false){
                        const p1 = {id : ida, quantity : 1 };
                        products_card_list.push(p1);
                    }

                    localStorage.setItem("products_card",JSON.stringify(products_card_list));
                }
              
            },
            closeModal() {
                this.showModal = false;
            }
        },
        mounted() {
            // this.productAvailable = product.isAvailable;
        }
    }
</script>