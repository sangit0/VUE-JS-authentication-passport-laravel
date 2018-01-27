<template>
        <div><br>
            <b-col cols="5" style="margin:0 auto;">

            <b-jumbotron bg-variant="info" text-variant="white" border-variant="dark"
            header="Login" lead="Welcome to vue passport showcase with Laravel" >

            <b-container fluid class="alert">
                    <b-form-input v-model="user.email"
                     type="text"
                     placeholder="Enter your email"></b-form-input>
                     <br>
                     <b-form-input v-model="user.password"
                                   type="password"
                                   placeholder="password"></b-form-input><br>
                                   <b-button @click="login" variant="primary">Login</b-button>

                                </b-container>

                        </b-jumbotron>
                    </b-col>



     </div>
</template>
<script>
export default{

    data(){
        return{
          user:{
              email:'',
              password:''
          },
          logo:{
              url:"image/logo.png",
              alt:"Bangol"
          }
        }
    },
    methods:{
        login(){
            var data={
                client_id: 2,
                client_secret:'LVSBC2SrSWMvbZMruTyyAYoh4RkWiUNiWAVMyDY2',
                grant_type:'password',
                username:this.user.email,
                password:this.user.password

            };
                   axios.post('http://localhost:8000/oauth/token',data)
                    .then(response => {
                        //console.log(response);
                        this.$auth.setToken(response.data.access_token,response.data.expires_in +Date.now())
                        this.$router.push("/home");
                    })
        }
    }
    }
</script>
