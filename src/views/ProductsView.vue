<template>
    <div class="container">
        <div class="row d-block d-flex ">
            <div class="row">
                <h4 class="display-6" id="shopAll">Shop All</h4>
              <div class="col">
                <!-- Search input -->
                <input id="search1" type="text" placeholder=" Search by category..."  class="form-control" data-search-products>
                </div>
              
              <div class="col d-flex justify-content-end">
                <!-- sort button -->
                <button class="btn btn-light" id="sortProducts" data-sorted-products>
                  Sort by<svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.5 8.5L14.5 12.5M14.5 12.5L18.5 8.5M14.5 12.5V2.5M10.5 12.544L6.5 8.5M6.5 8.5L2.5 12.544M6.5 8.5V18.5" stroke="#D27C2C" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <!-- ({{ ascendingOrder ? 'Lowest to Highest' : 'Highest to Lowest' }}) -->
                </button>
                <!-- <ul>
                  <li v-for="product in sortedProducts" :key="product.id">
                   {{ product.prodName }} - R{{ product.amount }},00
                </li>
              </ul> -->
              </div>
            </div>
          </div>
        <div class="row mx-2" v-if="products" id="alignment">
            <Card v-for="product in products" :key="product.prodID">
                <template #cardHeader>
                    <h4 class="card-title">
                        <img :src="product.prodUrl" alt="prodPic">
                    </h4>
                </template>
                <template #cardBody>
                        <p class="card-text p-2" id="theName">
                        {{ product.prodName }}
                    </p>
                        <p class="card-text p-2 mx-2" id="theCat">
                            {{ product.category }}
                        </p>
                    <div class="d-flex justify-content-center">
                        <p class="card-text  p-2" id="theAmount">
                            R{{ product.amount }},00
                        </p>
                    </div>
            </template>
            <template #cardFooter>
                <router-link :to="{name: 'product', params: {id: product.prodID}} "><button type="button" class="deButton">View more</button></router-link>
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
    //     sortedProducts() {
    //   return this.products.slice().sort((a, b) => {
    //     return this.ascendingOrder ? a.amount - b.amount : b.amount - a.amount;
    //   });
    // },
    },
    mounted(){
        this.$store.dispatch('fetchProducts')
    },
    methods: {
    //     toggleSortOrder() {
    //   this.ascendingOrder = !this.ascendingOrder;
    // },
    }
}
</script>

<style scoped>
.card-title{
    height: 180px;
}
#shopAll {
    color:#EE6F12 ;

}

#search1 {
    border-radius:13px;
    border-color: #EE6F12;
    margin-top: 20px;
}

#sortProducts {
    border-radius: 16px;
    border-color: #EE6F12;
    color: black;
    background-color: white;
    margin-top: 20px;
}

img[alt="prodPic"] {
    width: 110px;
}

#deName{
    font-size: medium;
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
    /* margin: 25px; */
}


</style>