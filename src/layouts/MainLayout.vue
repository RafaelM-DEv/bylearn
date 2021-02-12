<template>
  <q-layout view="HHh LpR fFf">
    <q-header elevated class="bg-cyan-7" >
      <!-- TODO mudar o display quando entrar no sistema -->
      <q-toolbar :class="isLogin()">
        <q-btn dense flat round icon="menu" @click="ShowMenu" />

        <q-toolbar-title class="text-amber my-font">
          bylearn.
        </q-toolbar-title>

         <q-btn class="q-ml-md" round>
          <q-avatar size="42px" class="bg-amber">
            <img src="https://image.flaticon.com/icons/svg/3048/3048127.svg">
          </q-avatar>
          <q-menu>
            <q-btn  label="logout" :to="{ name: 'login'}"/>
          </q-menu>
        </q-btn>

      </q-toolbar>
    </q-header>

    <q-drawer v-if="!loginPage && !signupPage" show-if-above v-model="left" side="left" behavior="desktop" elevated content-class="bg-grey-3" :mini="miniState" @mouseover="miniState = false" @mouseout="miniState = true" mini-to-overlay>
      <q-scroll-area class="fit bg-lime-1">
        <div>
          <q-list v-for="(menuItem, index) in menuList" :key="index">
            <q-item clickable :to="{ name: menuItem.name }">
              <q-item-section avatar>
                <q-icon :name="menuItem.icon" color="amber"/>
              </q-item-section>
              <q-item-section class="text-cyan-7">
                {{ menuItem.label }}
              </q-item-section>
            </q-item>
          <q-separator v-if="menuItem.separator" />
        </q-list>
        </div>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

const menuList = [
  {
    name: 'dashboard',
    icon: 'dashboard',
    label: 'DashBoard',
    separator: true
  },
  {
    name: 'campainglist',
    icon: 'dashboard',
    label: 'Campaing List',
    separator: false
  },
  {
    name: 'campaingedit',
    icon: 'dashboard',
    label: 'Campaing Edit',
    separator: false
  }
]

export default {
  name: 'MainLayout',
  // components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      menuList,
      miniState: true,
      left: false
      // drawer: false

    }
  },

  computed: {
    loginPage () {
      const loginpage = this.$route.name === 'login'
      return loginpage
    },

    signupPage () {
      const signupPage = this.$route.name === 'signup'
      return signupPage
    }
  },

  methods: {
    isLogin () {
      if (this.$route.name === 'login' || this.$route.name === 'signup') {
        return 'hidden'
      } else {
        return 'dashboard'
      }
    },

    ShowMenu () {
      this.left = !this.left
    }
  }
}
</script>

<style lang="scss">
.dashboard {
  display: flex;
}
.hidden {
  display: none;
}
</style>
