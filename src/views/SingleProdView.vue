<template>
    <div class="container">
        <div class="row">
            <h2 class="display-2">Shop</h2>
        </div>
        <div class="row">
            <Card v-if="product">
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
                        Description: {{ product.prodDesc }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        Quantity: {{ product.prodQuantity }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        Amount: {{ product.prodAmount }}
                    </p>
                </template>
            </Card>
        </div>
    </div>
</template>

<script>
  import Card from '../components/CardComp.vue';
  export default{
    components: {
        Card,
    },
    computed: {
        product(){
            return this.$store.state.product
        }
    },
    mounted() {
        this.$store.dispatch('fetchProduct', this.$route.params)
    }
  }
</script>

<style scoped>

</style>
