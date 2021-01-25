<template>
    <q-page class="Login_background">
      <div class="bg-primary login shadow-7">
        <div class="logo column">
          <span class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></span>
          <span class="anime_astronaut">
            <img src="../../assets/2091.png" alt="Astronaut">
          </span>
          <div class="my-font text-red logo_text">
              bylearn.
          </div>
        </div>
        <div class="login-section column fit create animate__animated animate__fadeIn">
           <div class="q-mb-md my-font text-h5 text-secondary">login</div>
           <q-input class="q-mb-md"  outlined color="secondary" dense label="Email" type="email"/>
           <q-input color="secondary" outlined dense label="Password" type="password"/>
           <div class="q-gutter-md q-mt-sm">
             <q-btn flat class="q-mt-md bg-secondary text-white" label="login" />
             <q-btn flat class="q-mt-md" label="sign up" @click="animate"  />
           </div>
        </div>
      </div>
    </q-page>
</template>

<script>
export default {

  methods: {
    animate () {
      const element = document.querySelector('.create')
      element.classList.add('animate__animated', 'animate__fadeOut')
      element.addEventListener('animationend', () => {
        this.$router.replace({ path: '/signup' })
      })
    }
  }
}
</script>
