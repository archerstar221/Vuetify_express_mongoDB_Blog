<template>
    <div class="login d-flex align-center">
        <v-container class="d-flex justify-center">
            <v-sheet height="400" width="300" color="rgba(0,0,0,0)">
                <v-text-field
                filled
                dense
                rounded
                outlined
                dark
                autocomplete="off"
                placeholder="Email"
                v-model="user_valid.email"
                >
                </v-text-field>
                <v-text-field
                type="password"
                filled
                dense
                outlined
                rounded
                dark
                autocomplete="off"
                placeholder="Password"
                v-model="user_valid.password"
                >
                </v-text-field>
                <v-btn
                rounded
                dark
                color="#b7801fdb"
                width="300"
                @click.prevent="login"
                >
                Login
                </v-btn>
                
               <v-btn :to="'/signup'">Sign up</v-btn>
            </v-sheet>
        </v-container>
    </div>
</template>
<script>
    export default{
        name:"Login",
        data:() => ({
            // back:'./assets/pricing.jpg',
            user_valid:{},
        }),
        methods: {
            login(){
                let uri = '//localhost:4000/users/login';
                this.axios.post(uri, this.user_valid).then((res) => {
                    localStorage.setItem("token",res.data.token);
                    this.$router.push({path:'blogs'});
                });
            }
        }
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

