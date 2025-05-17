<template id="contactinfo">
    <main class="contactinfopage">

        <section class="card">
            <h3 id="contactinfo">CONTACT INFORMATION</h3>
        </section>
        <p>Afya Medical Services values open and accessible communication. Whether you're a hospital seeking a new supplier, a clinic needing emergency stock, or a patient with a prescription to be filled, we’re here to help.</p>

        <p>Phone Number: +254 712 345 678</p>
        <p class="email"> cheriseotieno1707@gmail.com</p>

        <p>You can also visit any of our regional offices or contact us via our official social media pages. We are working toward launching an online portal and mobile app to allow real-time tracking, ordering, and support.

We look forward to being your trusted partner in healthcare delivery.</p>
    </main>
</template>

<style scoped>

    .contactinfopage {
        background: linear-gradient(45deg, #f8c9d4, #ffd6e3); 
        color: #333;
        padding: 2rem;
        font-family: 'Roboto', sans-serif;
    }
  
  
    .contactinfopage p {
        font-size: 16px;
        line-height: 1.6;
    }

    .email {
        color: blue;
    }

    .card {
        background-color: black;
        border-radius: 4px;
        padding: 1.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
        text-align: center;
    }

    .contactinfopage h3 {
        color: pink;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }


</style>

<script>
    export default {
        name: 'contactinfo'
    }
</script>
