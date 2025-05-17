<template>
  <div id="app" class="app-container">
    <SideBar :isOpen="isSidebarOpen" @toggleSidebar="toggleSidebar" />
    <div class="main-container">
      <TopBar @toggleSidebar="toggleSidebar" />
      <router-view />
    </div>
    <login v-if="showLoginModal" @close="closeLoginModal" />
  </div>
</template>

<script>
  import SideBar from './components/SideBar.vue'
  import TopBar from './components/TopBar.vue'
  import login from './components/login.vue'
  import { mapGetters, mapActions } from 'vuex'

  export default {
    name: 'App',
    components: {
      SideBar,
      TopBar,
      login
    },
    computed: {
      ...mapGetters(['showLoginModal'])
    },
    data() {
      return {
        isSidebarOpen: false
      }
    },
    methods: {
      ...mapActions(['setShowLoginModal']),
      toggleSidebar() {
        this.isSidebarOpen = !this.isSidebarOpen
      },
      closeLoginModal() {
        this.setShowLoginModal(false)
      }
    }
  }
</script>

<style>
  .app-container {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }

  .main-container {
    margin-left: 250px;
    flex: 1;
    overflow-y: auto;
    padding: 20px;
    background: linear-gradient(45deg, #f8c9d4, #ffd6e3);
  }

  @media (max-width: 1024px) {
    .main-container {
      margin-left: 0;
      margin-top: 60px;
    }
  }
</style>
