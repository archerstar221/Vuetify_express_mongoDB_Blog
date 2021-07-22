<template>
    <div class="login d-flex align-center">
        <v-container class="d-flex justify-center">
            <v-sheet height="500" width="400" color="rgba(0,0,0,0)">
                <v-input
                dense
                >

                </v-input>
            </v-sheet>
        </v-container>
    </div>
</template>
<script>
    export default{
        name:"Login",
        data:() => ({
            // back:'./assets/pricing.jpg',
        }),
    }
</script>

<style>
    .login{
        background: url("/assets/pricing.jpg");
        background-size: cover;
        text-align: center;
        height: 100vh;
    }
</style>

