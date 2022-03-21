<script setup>
 import axios from "axios";
</script>

<template>
  <header>
   
<section>
      <div class="container-fluid" id="app">
        <div class="row">
          <div class="col-xl-7 order-1 img">
            <img class="bg-center bg-img-cover img-fluid bg" src="@/assets/images/res/banner.jpg" alt="loginpage">
          <div class="developed" >Desenvolvido por <img class="pwned img-fluid" style="height: 50px;" src="@/assets/images/logo/logo.png" alt="webalive"></div></div>
          <div class="col-xl-5 p-0">
            <div class="login-card">
              <form class="theme-form login-form needs-validation" id="loginform" @submit="login()" >
                <h4>Login</h4>
                <h6>Bem vindo! Entre em sua conta.</h6>
                <div class="form-group">
                  <label>Email</label>
                  <div class="input-group"><span class="input-group-text"><i class="icon-email"></i></span>
                    <input class="form-control" v-model="user.email" type="email" required="" placeholder="seuemail@domain.com" >
                  </div>
                </div>
                <div class="form-group">
                  <label>Senha</label>
                  <div class="input-group"><span class="input-group-text"><i class="icon-lock"></i></span>
                    <input class="form-control" v-model="user.password" type="password" required="" placeholder="*********">
                    <div class="show-hide"><span class="show">                         </span></div>
                  </div>
                </div>
                <div class="form-group">
                  <div class="checkbox">
                    <input id="checkbox1" type="checkbox">
                    <label class="text-muted" for="checkbox1">Continuar conectado</label>
                  </div><a class="link" href="forget-password.html">Esqueceu sua senha?</a>
                </div>
                <div class="form-group">
                  <button class="btn btn-primary btn-block" type="submit"  >Entrar</button>
                </div>
                <div class="login-social-title">                
                  <h5>Entre com</h5>
                </div>
                <div class="form-group">
                  <ul class="login-social">
                    <li><a href="https://www.linkedin.com/login" target="_blank"><i data-feather="linkedin"></i></a></li>
                    <li><a href="https://www.linkedin.com/login" target="_blank"><i data-feather="twitter"></i></a></li>
                    <li><a href="https://www.linkedin.com/login" target="_blank"><i data-feather="facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/login" target="_blank"><i data-feather="instagram">                  </i></a></li>
                  </ul>
                </div>
                <p>Não possui conta? {{ resposta }} <a class="ms-2" href="sign-up.html">Cadaste aqui</a></p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
 
  </header>


</template>

<script>

 

  export default {
    el:"#loginform",
   name: "User",
   data() {
     return {
       user: { email:"lucas.batista@webalive.com.br", password:"b475csdu"},
       resposta: "Conectando"
     };
   }, 
  methods: {   
  login: async function login() {    
      username = 'lucas.batista@webalive.com.br';
      password = 'b475csdu';

      config = {
        method: 'post',
        url: 'https://alive-agenda-clinica.herokuapp.com/api/v1/token/',
        headers: { 
          ...data.getHeaders()
        },
        data : { username, password}
      };

      await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

  }
  }
  }
  

</script>


<style>



@import '@/assets/css/fontawesome.css';
@import '@/assets/css/icofont.css';
@import '@/assets/css/themify.css';
@import '@/assets/css/feather-icon.css';
@import '@/assets/css/flag-icon.css';
@import '@/assets/css/bootstrap.css';
@import '@/assets/css/style.css';
@import '@/assets/css/color-6.css';
@import '@/assets/css/responsive.css';

#app {
  max-width: auto;
  font-weight: normal;
}
img .bg{

  max-width: 100%;
  position: absolute;
  left: 50%;
  top: 10%;
  height: 100%;
  width: auto;
  transform: translate(-50%,0%); 
  margin-top: 5%;

}

div .img {
  
  background-color: #7951AA;
}

div .developed {

  background-color: #7951AA;
  margin-left: 75%;
  margin-top: 10%;
  color:azure;
}

</style>
