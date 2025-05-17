<template>
  <main class="dashboard">
    <section class="card">
      <h3>DASHBOARD SUMMARY</h3>
    </section>

    <div class="stats-container">
      <StatCard title="Registered Users" :value="registeredUsers" icon="👥" />
      <StatCard title="Office Locations" :value="officeCount" icon="🏢" />
      <StatCard title="Employees" :value="employeeCount" icon="🩺" />
    </div>

    <div class="charts">
      <canvas id="activityChart"></canvas>
    </div>
  </main>
</template>
  
<script>
  import StatCard from './statCard.vue';
  import Chart from 'chart.js/auto';
  
  export default {
    name: 'Dashboard',
    components: {
      StatCard
    },
    data() {
      return {
        registeredUsers: 328, 
        officeCount: 8,
        employeeCount: 42
      };
    },
    mounted() {
      const ctx = document.getElementById('activityChart');
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
          datasets: [{
            label: 'New Users',
            data: [20, 35, 25, 40, 50],
            backgroundColor: '#ff4d6d'
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false }
          }
        }
      });
    }
  };
</script>
  
<style scoped>
  .dashboard {
    padding: 2rem;
    background: linear-gradient(45deg, #f8c9d4, #ffd6e3);
    font-family: 'Roboto', sans-serif;
    color: #333;
  }
  
  .card {
    background-color: black;
    border-radius: 4px;
    padding: 1.5rem;
    text-align: center;
    color: pink;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    margin-bottom: 2rem;
  }
  
  .stats-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .charts {
    background: white;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  }
</style>
  