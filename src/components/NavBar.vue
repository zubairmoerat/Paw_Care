<template>
    <nav class="navbar navbar-expand-lg navbar-light" id="navbarr">
       <div class="container-fluid">
       <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
           <span class="navbar-toggler-icon"></span>
       </button>

       <div class="collapse navbar-collapse justify-content-center inline-block d-flex w-100">
           <ul class="navbar-nav">
           <li class="nav-item">
                   <router-link to ="/" class="nav-link">Home</router-link> 
           </li>  
           <li class="nav-item">
                <router-link to ="/about" class="nav-link">About</router-link>
           </li>
                  
           <li class="nav-item">
               <router-link to ="/products" class="nav-link">Shop</router-link>
           </li>    
           <!--the pic of the logo for the website-->
           <li class="nav-item ml-auto">
            <router-link to="/">
           <img src="https://i.ibb.co/hYrJKmp/Background-Eraser-20240220-094141227.png
            " alt="logo">
           </router-link>
        </li>
           

                   
           <!-- <li class="nav-item">
               <router-link to ="/product/:id" class="nav-link">Single prod</router-link>
           </li>     -->
                   
           <li class="nav-item">
                <router-link to ="/admin" class="nav-link">Admin</router-link>
           </li>   
                  
           <li class="nav-item">
                <router-link to ="/contact" class="nav-link">Contact us</router-link>
           </li>
           <li class="nav-item">
                <router-link to ="/register" class="nav-link">Register</router-link>
           </li>
           </ul>  
         </div>
       </div>
   </nav>
</template>

<script>
   export default {
       name: 'NavBar'
   }
</script>

<style scoped>
img[alt="logo"] {
   width: 170px;
}

.nav-item {
    font-size: 20px;
}
.navbar-nav li  {
       margin-inline: .2rem;
   }

   
</style>