<template>
  <header class="top-bar">
    <div class="hamburger" @click="toggleSidebar">
      &#9776;
    </div>
    <div class="title">AMS</div>
    <div class="right-section">
      <router-link to="/dashboard" class="dashboard-link" >
        Overview
      </router-link>
      <div class="profile-icon" @click="handleProfileClick">
        👤
      </div>
    </div>
  </header>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    emits: ['toggleSidebar'],
    computed: {
      ...mapGetters(['isAuthenticated', 'loginRedirectPath'])
    },
    methods: {
      ...mapActions(['setShowLoginModal', 'setLoginRedirectPath']),
      toggleSidebar() {
        this.$emit('toggleSidebar');
      },
      handleProfileClick() {
        if (this.isAuthenticated) {
          this.$router.push('/profile');
        } else {
          const currentRoute = this.$route.name;
          this.setLoginRedirectPath(currentRoute === 'Categories' ? '/categories' : '/profile');
          this.setShowLoginModal(true); 
        }
      },
      closeSidebar() {
        this.$emit('toggleSidebar');
      }
    }
  };
</script>

<style scoped>
  .top-bar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #333;
    color: white;
    padding: 0.5rem 1rem;
    font-size: 1.8rem;
    font-weight: bold;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: space-between; 
    padding-left: 3rem;
    padding-right: 3rem;
    box-sizing: border-box;
  }

  .hamburger {
    font-size: 2rem;
    cursor: pointer;
    flex-shrink: 0;
  }

  .title {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    font-size: 2rem;
    pointer-events: none; 
    white-space: nowrap;
    width: 6rem;
    text-align: center;
    user-select: none;
  }

  .right-section {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-shrink: 1;
    min-width: 0;
    justify-content: flex-end;
  }

  .dashboard-link {
    font-size: 1rem; 
    color: blue;
    text-decoration: none;
    margin-right: 0.5rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 8rem; 
  }

  .dashboard-link:hover {
    text-decoration: underline;
  }

  .profile-icon {
    font-size: 1.8rem;
    cursor: pointer;
    margin-right: 1rem;
    flex-shrink: 0;
  }

  @media (max-width: 480px) {
    .top-bar {
      padding-left: 1.5rem;
      padding-right: 1.5rem;
      font-size: 1.4rem;
    }
    .title {
      font-size: 1.6rem;
      width: 5rem;
    }
    .dashboard-link {
      font-size: 0.9rem;
      max-width: 6rem;
    }
    .profile-icon {
      font-size: 1.5rem;
      margin-right: 0.5rem;
    }
  }

</style>
