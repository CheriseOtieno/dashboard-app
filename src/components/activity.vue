<template>
    <div class="activity-page">
      <h2>Your Full Activity Log</h2>
      <ActivityTable :activityData="userActivity" />
    </div>
  </template>
  
<script>
  import ActivityTable from '../components/activitytable.vue';
  
  export default {
    components: { ActivityTable },
    computed: {
      user() {
        return this.$store.getters.currentUser;
      },
      userActivity() {
        const log = localStorage.getItem('activityLog');
        const allEntries = log ? JSON.parse(log) : [];
        return allEntries.filter(entry => entry.userEmail === this.user.email);
      }
    },
    created() {
    const storedLog = localStorage.getItem('activityLog');
    if (storedLog) {
      this.activityLog = JSON.parse(storedLog);
    }
  }
  };
</script>
  
<style scoped>
  .activity-page {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #fafafa;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
</style>
  