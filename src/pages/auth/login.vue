<template>
    <q-page class="login">
      <div class="login__modal shadow-7">
        <div class="login__logo column">
          <span class="circles"><li></li><li></li><li></li><li></li><li></li><li></li><li></li></span>
            <img id="astronaut" class="anime_astronaut" src="../../assets/astronaut.png" alt="Astronaut">
          <div class="my-font text-red-6 login__logo__text">
              bylearn.
          </div>
        </div>
        <div class="login__section column fit create animate__animated animate__fadeIn">
           <div class="q-mb-md my-font text-h5 text-cyan-7">login</div>
           <q-input class="q-mb-md" color="cyan-7" dense outlined  label="Email" type="email"/>
           <q-input color="cyan-7" dense outlined label="Password" type="password"/>
           <div class="q-gutter-md q-mt-sm">
             <q-btn flat class="bg-cyan-7 text-white" label="log in" :to="{ name: 'dashboard'}"/>
             <q-btn flat label="sign up" @click="animate" />
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
