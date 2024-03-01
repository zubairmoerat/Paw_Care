<template>
    <div class="container">
        <div class="row">
            <h2 class="display-6" id="shop1">Shop</h2>
        </div>
        <div class="row" >
            <Card v-if="product" class="mx-auto">
                {{product}}
                <template #cardHeader>
                    <h4 class="card-title">
                       <img :src="product.prodUrl" alt="prodPic">
                    </h4>
                </template>
                <template #cardBody>
                        <p class="card-text   p-2  mx-2" id="theNamee">
                        {{ product.prodName }}
                    </p>
                    <p class="card-text  p-2" id="dCat">
                        Category: <br>
                        {{ product.category }}
                    </p>
                    <p class="card-text p-2" id="theDesc">
                        Description: <br>
                        {{ product.prodDesc }}
                    </p>
                    <p class="card-text p-2">
                        Quantity: <br>
                         {{ product.quantity }}
                    </p>
                    <p class="card-text p-2" id="amounty">
                        R{{ product.amount }},00
                    </p>
                    <button class="pButton" @click="Purchase">Purchase</button>
                    
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
  import Card from '../components/CardComp.vue';
  export default{
    components: {
        Card
    },
    computed: {
        product(){
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    },
    methods: {
        Purchase(){
            alert("Purchase Successful")
        }
    },
  }
</script>

<style scoped>
#shop1{
    color: #EE6F12;
}

.pButton{
    border-radius: 15px;
    padding: 0.5rem;
    color: white;
    background-color: #EE6F12;
    border-color: #EE6F12;
    /* margin: 25px; */
}
img[alt="prodPic"] {
    width: 110px;
}

#theNamee {
    font-size: medium;
    font-weight: 600;
    background-color: white;
}

#dCat {
    color: #EE6F12;
}

#theDesc {
    font-style: italic;
    font-weight: 500;
}

#amounty {
    font-weight: 900;
}
@media(max-width: 350px) {
    #alignment {
        display: inline-block;
        
    }
}
</style>
