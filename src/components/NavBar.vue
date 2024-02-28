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
           <!-- <button type="button" class="searchBotton" aria-label="Search" id="searchNav">
            <span class="navBar-button-container">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 21L16.657 16.657M16.657 16.657C17.3999 15.9141 17.9892 15.0321 18.3912 14.0615C18.7933 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94936 18.7933 8.90905 18.3912 7.93842C17.9892 6.96779 17.3999 6.08585 16.657 5.34296C15.9141 4.60007 15.0322 4.01078 14.0615 3.60874C13.0909 3.20669 12.0506 2.99976 11 2.99976C9.94939 2.99976 8.90908 3.20669 7.93845 3.60874C6.96782 4.01078 6.08588 4.60007 5.34299 5.34296C3.84266 6.84329 2.99979 8.87818 2.99979 11C2.99979 13.1217 3.84266 15.1566 5.34299 16.657C6.84332 18.1573 8.87821 19.0002 11 19.0002C13.1218 19.0002 15.1567 18.1573 16.657 16.657Z" stroke="#EE6F12" stroke-linecap="round" stroke-linejoin="round"/>
               </svg>
               <span class="DocSearch-Button-Placeholder">Search Dogs...</span>
            </span>
           </button>  -->
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

#searchNav {
    margin-top: 8%;
    border-radius: 10px;
    border-color: #EE6F12;
    background-color: white;
    color: gray;
    width: 20%;
}
</style>