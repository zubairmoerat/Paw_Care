<template>
  <div class="container"> <br><br><br>
    <div class="row">
      <div class="col-md-6" id="alignText-1">
        <h4 class="d-flex justify-content-left" id="home-1">Shop now and get 20% discount <br>on your first order.</h4>
        <p class="lead d-flex justify-content-left" id="home-2"> Only the best for our furry friends!</p>
        <div class="theBTN">
        <button type="button" id="shopNow" class="d-flex justify-content-left"><a href="./ProductsView.vue" class="button-link">Shop now</a></button>
      </div>
      </div> 
      
      <br> <br>
      <div class="col-md-6">
        <!-- the pets -->
        <img src="https://i.postimg.cc/bYbC3Kh4/Screenshot-2024-02-27-123248-removebg.png" class="img-fluid" loading="lazy" alt="landingPage">
      </div>
    </div>
  
  </div>
</template>

<script>


export default {
  name: 'HomeView',
  components: {
  }
}
</script>

<style scoped>
.theBTN {
  padding-top: 40px;
}
#shopNow {
  padding-bottom: 80px;
  background-color: #EE6F12;
  color:  white;
  border-radius: 13px;
  size: 50px;
  padding: 10px 20px;
  border: #EE6F12;
}

img[alt="landingPage"] {
  width: 100%;
  justify-content: end;
  margin-right: 20%;
}

#home-1 {
  color: #EE6F12;
}
#home-2 {
  font-size: medium;
  font-weight: 600;
}

.button-link {
    display: inline-block;
    padding: 10px 20px;
    text-decoration: none;
    color: white;
  }


</style>