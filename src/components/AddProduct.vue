<!-- <template>
    <div class="modal fade" id="addProductModel" tabindex="-1" aria-labelledby="addProduct" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header bg-dark">
            <h1 class="modal-title fs-5" id="addProduct">Add Product</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body bg-dark">
            <div @submit.prevent="addingProduct">
                <div>
                <input type="text" placeholder="prodID" v-model="payload.prodID" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="Name" v-model="payload.prodName" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="quantity" v-model="payload.quantity" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="category" v-model="payload.amount" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="price" v-model="payload.category" class="bg-transparent border-dark">
            </div>
            <br><br>
            <div>
                <input type="text" placeholder="image link" v-model="payload.prodUrl" class="bg-transparent border-dark">
            </div>
            <br><br>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn bg-transparent border-light text-white" data-bs-dismiss="modal">Close</button>
            <button type="submit" class="btn btn-light">Save changes</button>
          </div>
        </div>        
        </div>
      </div>
    </div>
    </template>
    
    <script>
        export default {
            name: "addProduct",
            data(){
                return{
                    payload: {
                        prodID: '',
                        prodName: '',
                        quantity: '',
                        amount: '',
                        category: '',
                        prodUrl: ''
                    }
                }
            },
            methods: {
                register(){
                    this.$store.dispatch('addProduct', this.payload)
                }
            }
        }
    </script>
    
    <style scoped>
    
    </style> -->

    <template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    data-bs-target="#exampleModal"
  >
    Add Product
  </button>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product ID"
                v-model="payload.prodID"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Name"
                v-model="payload.prodName"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Quantity"
                v-model="payload.quantity"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Amount"
                v-model="payload.amount"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Category"
                v-model="payload.Category"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product URL"
                v-model="payload.prodURL"
              />
            </div>
            <div class="mb-3">
              <input
                type="text"
                class="form-control w-50 mx-auto"
                placeholder="Product Desc"
                v-model="payload.prodDesc"
              />
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                @click="addingProduct"
                class="btn btn-success"
                data-bs-dismiss="modal"
              >
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "addProduct",
  data() {
    return {
      payload: {
        prodID: null,
        prodName: "",
        quantity: null,
        amount: null,
        Category: "",
        prodURL: "",
        prodDesc: "",
      },
    };
  },
  methods: {
    addingProduct() {
      try {
        this.$store.dispatch("addProduct", this.payload);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>