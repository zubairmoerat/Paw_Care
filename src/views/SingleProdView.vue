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
                        <img :src="product.prodUrl" alt="prodPic">
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        {{ product.category }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        {{ product.prodDesc }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        {{ product.quantity }}
                    </p>
                    <p class="card-text text-dark bg-gradient bg-dark subtle p-2">
                        R{{ product.amount }}
                    </p>
                </template>
            </Card>
        </div>
        <div></div>
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
