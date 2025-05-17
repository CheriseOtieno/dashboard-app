<template>
  <div class="stat-card">
    <div class="icon">{{ icon }}</div>
    <div class="info">
      <h4>{{ title }}</h4>
      <p>{{ value }}</p>
    </div>
  </div>
</template>
  
<script>
  export default {
    name: 'StatCard',
    props: {
      title: String,
      value: [String, Number],
      icon: String
    }
  };
</script>
  
<style scoped>
  .stat-card {
    background-color: white;
    padding: 1.2rem;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    flex: 1;
    min-width: 200px;
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .icon {
    font-size: 2rem;
  }
  
  .info h4 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
  }
  
  .info p {
    margin: 0;
    font-size: 1.5rem;
    color: #ff4d6d;
  }
</style>
  