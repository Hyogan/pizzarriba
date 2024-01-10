<template>
    <div class="products-list">
        <ul class="menu">
            <li
                v-for="(product,index) in products" 
                :key="index"
                @click="changeProduct(index)"
            >
                {{product.name}} {{product.type}}
            </li>

        </ul>

        <div v-if="currentProduct">
            <product :product="currentProduct"></product>
        </div>
    </div>

</template>



<script>
    import Product from './Product.vue';
    export default {
        props : {
            "products"  : Array
        },
        components : {
            "product" : Product,
        },
        data() {
            return{
                currentProduct : this.products[0],
            }
        },
        methods : {
            changeProduct(id) {
                // alert(id)
                // this.currentProduct = this.products.find((product) => {
                //     product.id = id;
                // });

                this.currentProduct = this.products[id];
            }
        }

    }
</script>