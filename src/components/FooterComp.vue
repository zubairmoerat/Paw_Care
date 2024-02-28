<template>
    <div class="container-fluid d-flex justify-content-center fixed-bottom" id="footer" >
        <div class="row">
            <p class="lead" id="footer">
                PawCare&copy;2024
                <span>{{ currYear }}</span> <br>
            </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FooterComp'
    }
</script>

<style scoped>
#footer {
color: white;
background-color: #EE6F12;
}

</style>