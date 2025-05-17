<template>
    <main class="main-page">
      <h2>Welcome to Afya Medical Services</h2>
  
      <img
        src="/mainpage.png"
        class="responsive-img"
        alt="Afya Medical Banner"
        width="100%"
      />
  
      <section class="card">
        <h3 id="about">ABOUT</h3>
      </section>
  
      <p>
        Afya Medical Services is a premier organization specializing in the nationwide supply and distribution of medicinal drugs. Founded with the mission to bridge the gap between pharmaceutical manufacturers and healthcare providers, Afya Medical Services has grown into one of the most trusted and dependable names in the medical supply sector. We serve a wide range of clients including public and private hospitals, clinics, retail pharmacies, and individual households who require access to life-saving medications.
      </p>
  
      <p>
        Our core objective is to ensure that no region, regardless of how remote, is left behind in accessing essential medicines. We understand that in the healthcare industry, time and reliability are critical. That’s why we have developed a comprehensive logistics infrastructure that supports 24/7 delivery, real-time tracking of orders, and compliance with all medical safety regulations. All our supplies are sourced from certified pharmaceutical manufacturers and are handled with the utmost care to maintain integrity and effectiveness.
      </p>
  
      <p>
        We’re not just a supply company — we’re a healthcare partner, committed to saving lives, promoting well-being, and supporting healthcare workers with timely, safe, and affordable delivery of medications. We believe that everyone, regardless of where they live, deserves access to quality drugs.
      </p>
  
      <img
        src="/about.png"
        class="responsive-img"
        alt="Afya Services Team"
        width="100%"
      />
    </main>
  </template>
  
  <script>
  export default {
    name: 'MainPage',
  };
  </script>
  
  <style scoped>
  .main-page {
    background: linear-gradient(45deg, #f8c9d4, #ffd6e3);
    color: #333;
    padding: 2rem;
    font-family: 'Roboto', sans-serif;
    flex-grow: 1;
    overflow-x: hidden;
    box-sizing: border-box;
    min-width: 0;
  }
  
  .main-page h2 {
    font-size: 2rem;
    font-family: 'Poppins', sans-serif;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #333;
  }
  
  .main-page p {
    font-size: 16px;
    line-height: 1.6;
    margin-bottom: 1rem;
  }
  
  .card {
    background-color: black;
    border-radius: 4px;
    padding: 1.5rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .card h3 {
    color: pink;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
  }
  
  .responsive-img {
    max-width: 100%;
    height: auto;
    display: block;
    margin-bottom: 2rem;
  }
  </style>
  