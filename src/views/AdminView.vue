<template>
    <div class="container mt-5">
      <div class="row">
        <h2 class="display-4">User CRUD</h2>
      </div>
      <div class="row mb-3">
        <div class="col">
          <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="">Add</button>
        </div>
      </div>
      <div class="row">
        <table class="table table-bordered table-striped">
          <thead class="bg-warning text-white">
            <tr>
              <th>User ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>User role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="users">
            <tr v-for="user in users" :key="user.userID">
              <td>{{ user.userID }}</td>
              <td>{{ user.firstName }}</td>
              <td>{{ user.lastName }}</td>
              <td>{{ user.userAge }}</td>
              <td>{{ user.Gender }}</td>
              <td>{{ user.emailAdd }}</td>
              <td>{{ user.userRole }}</td>
              <td class="d-flex justify-content-between">
                <button class="btn btn-sm btn-primary">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row mt-5">
        <h2 class="display-4">Product CRUD</h2>
      </div>
      <div class="row mb-3">
        <div class="col">
          <button class="btn btn-warning">Add</button>
        </div>
      </div>
      <div class="row">
        <table class="table table-bordered table-striped">
          <thead class="bg-warning text-white">
            <tr>
              <th>Product ID</th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product Description</th>
              <th>Product Quantity</th>
              <th>Product Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-if="products">
            <tr v-for="product in products" :key="product.prodID">
              <td>{{ product.prodID }}</td>
              <td>{{ product.prodName }}</td>
              <td>{{ product.prodUrl }}</td>
              <td>{{ product.prodDesc }}</td>
              <td>{{ product.quantity }}</td>
              <td>R{{ product.amount }},00</td>
              <td class="d-flex justify-content-between gap-2">
                <button class="btn btn-sm btn-primary">Edit</button>
                <button class="btn btn-sm btn-danger">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  

<script>
    export default {
        components :{
            
        },
        computed: {
            users(){
                return this.$store.state.users
            },
            products() {
                return this.$store.state.products
            }
        },
        mounted(){
            this.$store.dispatch('fetchUsers')
            this.$store.dispatch('fetchProducts')
        },
        methods: {
            deleteUser(userID) {
                this.$store.dispatch('deleteUser', {id: userID});
            },
            deleteProduct(prodID) {
                this.$store.dispatch('deleteProduct', {id: prodID});
            },
            updateUser(user) {
                let editUser = {
                    userID: user.userID,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    emailAdd: user.emailAdd,
                    Gender: user.Gender,
                    Age: user.userAge,
                    Role: user.userRole,
                    Profile: user.userProfile
                }
                this.$store.dispatch('updateUser', {id: user.userID, data: editUser});
            },
            updateProduct(product) {
                let editProd = {
                    prodID: product.prodID,
                    Name: product.prodName ,
                    Image: product.prodUrl ,
                    Description: product.prodDesc ,
                    Quantity: product.prodQuantity,
                    Amount: product.prodAmount 
                }
                this.$store.dispatch('updateProduct', {id: product.prodID, data: editProd});
            }
        }
    }

</script>

<style scoped>

</style>