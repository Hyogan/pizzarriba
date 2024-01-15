<template>
    <section class="card">
        <h2 class="section-title"> Here is the list of products you added</h2>
        <div 
            class="card-el" 
            v-for="card_el in final_product_list"
        >
            <!-- <img src="../assets/images/pizza1-creme.jpg"> -->
            <img :src="card_el.pic">
            <div class="infos">
                <h2 class="name">{{card_el.name}} {{ card_el.type }}</h2>
                <p>Quantité <span class="quantity">{{ card_el.quantity }}</span></p>
                <p>Valeurs nutritionelles :  </p>
                <ul>
                    <li v-for="value in card_el.values">{{ value }}</li>
                    <!-- <li>Cube</li>
                    <li>Cube</li>
                    <li>Cube</li> -->
                </ul>
            </div>
            <div class="infos2">
                <p v-if="card_el.isPromote" class="prix prices">
                    <span class="old-price">{{card_el.price}}</span> <span>{{card_el.price - card_el.price * card_el.promotion}}Fcfa</span> <span class="red">PROMOTION </span>
                </p>
                <p v-else class="prix">
                    <span>{{card_el.price}} </span>Fcfa
                </p>
                <!-- <p class="prix">{{card_el.price}} Fcfa</p> -->
                <button class="add">Ajouter</button>
                <button class="remove">Retirer</button>
            </div>
        </div>
        <div class="card-el facture">
            <h2 class="title">FACTURE DE LIVRAISON DE PIZZA</h2>
            <div>
                <p class="fact-item"> Nombre de produits : <span> {{ this.numberOfProducts }} </span></p>
                <p class="fact-item"> Quantité de produits : <span> {{ this.quantityOfProducts }} </span></p>
                <p class="fact-item"> Prix : <span>{{ this.productPrice }} </span>  FCFA</p>
                <p class="fact-item"> Prix promotionel : <span> {{ this.productPricesPromoted }}</span> FCFA</p>
                <button>Commander</button>
            </div>
        </div>
    </section>
 
</template>

<script>
// import jones from "@/assets/images/"
    import creme from "@/assets/images/pizza1-creme.jpg";
    import tomate from "@/assets/images/pizza1-tomate.jpg";
    import premisses from "@/assets/images/s_prem.jpeg";
    import pepperonis from "@/assets/images/s_tomate.jpeg";
    export default {
        data(){
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
                        promotion : 0.2,
                    }
                ],
                final_product_list : [],
                numberOfProducts : 0,
                productPrice : 0,
                productPricesPromoted : 0,
                quantityOfProducts : 0
            }
        },
        mounted() {
            // const products_els = JSON.parse(localStorage.getItem("products_card")  || []);
            const products_els = JSON.parse(localStorage.getItem("products_card") || "[]");
            // console.log(products_els);

            const final_product = [];
          

            this.products.forEach(p => {
                for(const el of products_els){
                    // console.log(p.id + "--"+ el.id)
                    if(p.id == el.id){
                        this.numberOfProducts++;
                        this.productPrice += p.price;
                        this.quantityOfProducts += el.quantity;
                        if (p.isPromote) {
                            this.productPricesPromoted += (p.price - p.price * p.promotion);
                        }else {
                            this.productPricesPromoted += p.price;
                        }

                        this.final_product_list.push({
                            name : p.name,
                            type : p.type,
                            pic : p.image,
                            price : p.price,
                            values : p.values,
                            quantity : el.quantity,
                            isPromote : p.isPromote,
                            promotion : p.promotion
                        });
                        
                    } 
                };
            });

            // for(const p of products_els){
            //     products_els.forEach(el => {
            //         if(p.id == el.id){
            //             final_product.push({product : p, quantity : el.quantity});
                        
            //         }
                        
            //     });
            // }
            
            // console.log(this.final_product_list);
        },
    }
</script>


<style scoped>
    @counter-style slice {
        system : cyclic;
        symbols : '🍕';
        suffix : '';
    }

    h2.section-title {
        color: white;
        font-size: 45px;
        margin-bottom: 10px;
    }

.card {
    display: flex;
    flex-direction: column;
    /* background: white; */
    justify-content: center;
    align-items: center;
    padding : 15px;
    gap: 10px;
}

.card-el{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    width: 80%;
    background: white;
    border-radius: 10px;
    padding: 15px 10px;
}


.card-el img{
    /* width: 45px; */
    height: 200px;
    border-radius: 5px;
}

.card-el .name {
    font-size: 30px;
    font-weight: 900;
    color: rgb(151, 115, 68);
    color: orange;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
}
.card-el .infos  {
    gap: 2px;
    font-size: 20px;
    font-weight: bold;
    color: rgb(43, 34, 22);
    font-family: 'Courier New', Courier, monospace
}
.card-el p .quantity {
    font-size: 45px;
}

ul li {
    list-style-type: slice;
    position: relative;
}

.infos2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    border-left: 4px solid orange;
    padding: 5px;
    height: 100%;
}

.infos2 .prix{
    font-size: 30px;
    font-weight: 900;
    color: orange;
    font-weight: bolder;
    font-family: 'Courier New', Courier, monospace;
    
}
.infos2  button {
    border: none;
    background: none;
    padding: 10px 15px ;
    margin: 5px 0;
    cursor: pointer;
    transition: .7s;
    font: bold;
    font-size: 19px;
    color: white;
}
.infos2  .add {
    background: orange;
}
.infos2 .add:hover {
    background: rgb(168, 109, 0);
}

.infos2  .remove {
    background: red;
}
.infos2  .remove:hover {
    background:rgb(150, 0, 0);
}



@media screen and (max-width : 1228px){
    .card-el {
        width : 95%;
    }
}
@media screen and (max-width : 995px){
    .card-el {
       flex-wrap: wrap;
    }
    .card-el img {
        max-width: 260px;
    }
    ul {
        margin-left: 20px;
    }
}

.card-el .prices{
    display: flex;
    flex-direction: column;
}

.card-el .prices .red {
    color: red;
}
.card-el .prices span.old-price {
    font-size: 30px; 
    margin-right: 5px;
    text-decoration: line-through;
    color: rgb(174, 177, 0);
}


.card-el.facture {
    font-family: 'Courier New', Courier, monospace;
    flex-direction: column;
}

.fact-item {
    margin: 4px 0 ;
    font-weight: 600;
}
.fact-item span {
    color: orange;
    font-size: 35px;
    font-weight: 900;
}

.card-el.facture button {
    border: none;
    background: none;
    padding: 10px 15px ;
    margin: 5px 0;
    cursor: pointer;
    transition: .7s;
    font: bold;
    font-size: 19px;
    color: white;
    background: orange;
    transition : 1s;
}

.card-el.facture button:hover{
    background : orangered;
}
</style>