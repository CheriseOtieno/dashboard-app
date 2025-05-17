<template>
    <main class="officespage">
      <section class="card">
        <h3 id="offices">OFFICES</h3>
      </section>
  
      <p>
        To ensure broad national coverage, Afya Medical Services maintains regional distribution centers and satellite offices across Kenya. These offices are strategically placed to optimize delivery efficiency and minimize response times. Our current office locations include:
      </p>
  
      <ul class="office-list">
        <li v-for="office in offices" :key="office.name">
          <strong>{{ office.name }} –</strong> {{ office.description }}
        </li>
      </ul>
  
      <p>
        Each office is equipped with storage facilities, delivery vehicles, and trained personnel to handle medical goods with care. Plans are underway to expand into Garissa, Kitale, and Meru in the near future.
      </p>
  
      <div class="offices-section">
        <img
          src="/offices.png"
          alt="Offices"
          class="office-img"
        />
      </div>
    </main>
  </template>
  
<script>
  export default {
    name: 'offices',
    data() {
      return {
        offices: [
          { name: 'Nairobi', description: 'Main headquarters and national operations center.' },
          { name: 'Mombasa', description: 'Coastal logistics and sea import handling.' },
          { name: 'Kisumu', description: 'Western region supply and support hub.' },
          { name: 'Eldoret', description: 'North Rift distribution center and regional warehouse.' },
          { name: 'Nakuru', description: 'Central Rift logistics center with pharmacy partnerships.' },
          { name: 'Nyeri', description: 'Mt. Kenya region distribution and outpatient service coordination.' },
          { name: 'Kakamega', description: 'Western health support and outreach coordination.' },
          { name: 'Machakos', description: 'Lower Eastern delivery and inventory point.' },
        ]
      };
    }
  };
</script>
  
<style scoped>
  .officespage {
    background: linear-gradient(45deg, #f8c9d4, #ffd6e3); 
    color: #333;
    padding: 2rem;
    font-family: 'Roboto', sans-serif;
  }
  
  .officespage p {
    font-size: 16px;
    line-height: 1.6;
  }
  
  .card {
    background-color: black;
    border-radius: 4px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .officespage h3 {
    color: pink;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .office-list {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  .office-list li {
    margin-bottom: 0.5rem;
    font-size: 16px;
  }
  
  .offices-section {
    display: flex;
    gap: 2rem;
    margin: 2rem 0;
    flex-wrap: wrap;
  }
  
  .office-img {
    width: 100%;
    border-radius: 8px;
  }
</style>
  