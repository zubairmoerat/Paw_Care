<template>
    <div class="container">
        <div class="row d-block d-flex ">
            <div class="row">
              <div class="col">
                <input id="search1" type="text" placeholder="Search by category..." class="form-control" data-search-products>
                </div>
              
              <div class="col d-flex justify-content-end">
                <button class="btn btn-light" id="sortProducts" data-sorted-products @click="sort">
                  Sort by
                </button>
              </div>
            </div>
          </div>
        <div class="row" v-if="products">
            <Card v-for="product in products" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">
                        {{ product.prodName }}
                    </h4>
                </template>
                <template #cardBody>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        
                        Image: {{ product.prodUrl }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        Category: {{ product.prodCategory }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        Amount: R{{ product.prodAmount }}
                    </p>
                    <router-link :to="{name: 'product', params: {id: product.prodID}}">View more</router-link>
                </template>
            </Card> 
        </div>
        <!--spinner-->
        <div class="row" v-else>
            <SpinnerComp></SpinnerComp>
        </div>
    </div>
</template>

<script>
import Card from '../components/CardComp.vue';
import SpinnerComp from '../components/SpinnerComp.vue';

export default {
    name: 'ProductsView',
    components: {
        Card,
        SpinnerComp
    },
    computed: {
        products(){
            return this.$store.state.products
        },
        // sort() {

        // }
    },
    mounted(){
        this.$store.dispatch('fetchProducts')
    },
    methods: {
        
    }
}
</script>

<style scoped>
#search1 {
    border-radius:13px;
    border-color: #EE6F12;
}

#sortProducts {
    border-radius: 16px;
    border-color: #EE6F12;
    color: black;
    background-color: white;
}
</style>