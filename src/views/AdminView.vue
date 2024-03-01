<template>
    <div class="container mt-5">
      <div class="row">
        <h2 class="display-4">User CRUD</h2>
      </div>
    <AddUser/>
      <div class="row mb-3">
        <div class="col">
          <!-- <button @click="openAddUserModal" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addUserModalTarget">Add</button> -->
        </div>
      </div>
      <div class="row">
        <table class="table table-bordered">
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
                <updateUser/>
                <button @click="event=> deleteUser(user.userID)" class="btn btn-sm btn-danger">Delete</button>
                <!-- <button @click="editUser(user.userID)" id="edit" class="btn btn-sm btn-primary">Edit</button> -->
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
        <AddProduct/>
          <!-- <button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#addProductModalTarget">Add</button> -->
        </div>
      </div>
      <div class="row">
        <table class="table table-bordered">
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
              <td>
                <img :src="product.prodUrl" alt="prodPic">
              </td>
              <td>{{ product.prodDesc }}</td>
              <td>{{ product.quantity }}</td>
              <td>R{{ product.amount }},00</td>
              <td class="d-flex justify-content-between gap-2">
                <!-- <updateProduct :product="product" /> -->
               <button class="btn btn-sm btn-primary" @click="addingProduct"
               data-bs-target="#updateProductModal" data-bs-toggle="modal"><updateProduct/></button>
               
                <!-- <button class="btn btn-sm btn-danger">Delete</button> -->
                <button class="btn btn-sm btn-danger deleteButton" @click="event => 
                deleteProduct(product.prodID)">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  

<script>
import AddUser from '../components/AddUser.vue'
import AddProduct from '@/components/AddProduct.vue'
import UpdateProduct from '@/components/UpdateProduct.vue'
import UpdateUser from '@/components/UpdateUser.vue'

    export default {

        components :{
          AddUser,
          AddProduct,
          UpdateProduct,
          UpdateUser
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
                this.$store.dispatch('updateProduct', {id: product.prodID, value: editProd});
            },
            editUser(userID){
        let edit = {
          id:userID,
          firstName: this.firstName,
          lastName: this.lastName,
          emailAdd:this.emailAdd,
          Gender:this.gender,
          userAge:this.userAge,
          userRole: this.userRole,
          userProfile: this.userProfile,
          userPass: this.userPass
        }
        this.$store.dispatch('editUser', edit);
    },
  }
}
</script>

<style scoped>
img[alt="prodPic"] {
    width: 110px;
}
</style>