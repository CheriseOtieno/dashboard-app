<template>
  <div :class="['side-bar', { open: isOpen }]">
    <h3 class="sideheading">AMS</h3>
    <ul>
      <li><router-link to="/about" @click="closeSidebar">🧾 About</router-link></li>
      <li><router-link to="/costs" @click="closeSidebar">💰 Costs</router-link></li>
      <li><router-link to="/offices" @click="closeSidebar">🏢 Offices</router-link></li>
      <li><router-link to="/employees" @click="closeSidebar">👥 Employees</router-link></li>
      <li><router-link to="/categories" @click="closeSidebar">🗂️ Categories</router-link></li>
      <li><router-link to="/contactinfo" @click="closeSidebar">📞 Contact Info</router-link></li>
    </ul>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  import { useRouter } from 'vue-router';

  export default {
    props: {
      isOpen: Boolean,
    },
    setup() {
      const router = useRouter();
      return { router };
    },
    methods: {
      closeSidebar() {
        this.$emit('toggleSidebar');
      }
    }
  };
</script>

<style scoped>
  .side-bar {
    width: 250px;
    position: fixed;
    top: 60px;
    left: 0;
    bottom: 0;
    background-color: #222;
    color: white;
    padding-top: 20px;
    z-index: 1000;
    transition: transform 0.3s ease;
  }

  .side-bar ul {
    list-style: none;
    padding-left: 0;
  }

  .side-bar li {
    padding: 10px;
    font-size: 16px;
  }

  .side-bar a {
    text-decoration: none;
    color: inherit;
    display: block;
  }

  .side-bar a:hover {
    background-color: #ff4d6d;
    border-radius: 5px;
    padding: 10px;
  }

  @media (max-width: 1024px) {
    .side-bar {
      transform: translateX(-100%);
      width: 80%;
    }

    .side-bar.open {
      transform: translateX(0);
    }
  }
</style>
