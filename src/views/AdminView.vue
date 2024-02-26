<template>
    <div class="container">
        <div class="row">
            <h2 class="display-4">User CRUD</h2>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-success" data-bs-toggle="modal" data-bs-target="">Add</button>
            </div>
        </div>
        <div class="row">
            <table>
                <thread>
                <tr>
                    <th>User ID</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Email</th>
                    <th>User role</th>
                    <th>
                        Action
                    </th>
                </tr>
                </thread>
                <tbody v-if="users">
                    <tr v-for="user in users" :key="user.userID">
                        <td>
                            {{ user.userID }}
                        </td>
                        <td>
                            {{ user.firstName }}
                        </td>
                        <td>
                            {{ user.lastName }}
                        </td>
                        <td>
                            {{ user.age }}
                        </td>
                        <td>
                            {{ user.gender }}
                        </td>
                        <td>
                            {{ user.email }}
                        </td>
                        <td>
                            {{ user.userRole }}
                        </td>
                        <td class="d-flex justify-content-between">
                            <button class="btn btn-success">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="row">
            <h2 class="display-2">Product CRUD</h2>
        </div>
        <div class="row">
            <div class="col">
                <button class="btn btn-success">Add</button>
            </div>
        </div>
        <div class="row">
            <table>
                <thread>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Image</th>
                        <th>Product Description</th>
                        <th>Product Quantity</th>
                        <th>Product Amount</th>
                    </tr>
                </thread>
                <tbody v-if="products">
                    <tr v-for="product in products" :key="product.prodID">
                        <td>{{ product.prodID }}</td>
                        <td>{{ product.prodName }}</td>
                        <td>{{ product.prodImage }}</td>
                        <td>{{ product.prodDesc }}</td>
                        <td>{{ product.prodQuantity }}</td>
                        <td>{{ product.prodAmount }}</td>
                        <td class="d-flex justify-content-between">
                            <button class="btn btn-success">Edit</button>
                            <button class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>    
            </table>
        </div>
    </div>
</template>

<script>
    export default {
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
        }
    }
</script>

<style scoped>

</style>