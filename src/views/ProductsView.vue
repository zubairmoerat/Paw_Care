<template>
    <div class="container">
        <div class="row d-block d-flex ">
            <div class="row">
              <div class="col">
                <input id="search1" type="text" placeholder=" Search by category..."  class="form-control" data-search-products>
                </div>
              
              <div class="col d-flex justify-content-end">
                <button class="btn btn-light" id="sortProducts" data-sorted-products @click="sort">
                  Sort by <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 8.5L14.5 12.5M14.5 12.5L18.5 8.5M14.5 12.5V2.5M10.5 12.544L6.5 8.5M6.5 8.5L2.5 12.544M6.5 8.5V18.5" stroke="#D27C2C" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                </button>
              </div>
            </div>
          </div>
        <div class="row" v-if="products" id="alignment">
            <Card v-for="product in products" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">
                        <img :src="product.prodUrl" alt="prodPic">
                    </h4>
                </template>
                <template #cardBody>
                    <div class="theAlignment">
                        <p class="card-text p-2 mx-2" id="theName">
                        {{ product.prodName }}
                    </p>
                    <p class="card-text p-2" id="theCat">
                        {{ product.category }}
                    </p>
                    <p class="card-text  p-2" id="theAmount">
                        R{{ product.amount }},00
                    </p>
                    <router-link :to="{name: 'product', params: {id: product.prodID}} "><button type="button" class="deButton">View more</button></router-link>
                    </div>
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

img[alt="prodPic"] {
    width: 200px;
}

#deName{
    font-size: large;
    color:#EE6F12 ;
    background-color: white;
}

#alignment {
    gap: 2rem;
    padding-top: 90px;
}

#theCat{
    color: #EE6F12;
}

#theName{
    font-weight: 600;
}

#theAmount{
    font-weight: bolder;
}

.deButton{
    border-radius: 15px;
    padding: 0.5rem;
    color: white;
    background-color: #EE6F12;
    border-color: #EE6F12;
    
}


</style>