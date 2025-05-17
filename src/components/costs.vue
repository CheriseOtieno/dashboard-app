<template id="costs">
    <main class="costspage">
        <section class="card">
            <h3>COSTS</h3>
        </section>
        <p>At Afya Medical Services, we believe in providing fair and transparent pricing for all our delivery services. The cost of our deliveries is determined by several key factors:

Delivery Location:

Urban areas such as Nairobi, Mombasa, and Kisumu typically have faster, more economical delivery rates due to the proximity of our regional offices and established transport routes.

Rural and remote locations may incur slightly higher costs due to travel distance, terrain, or limited accessibility.

Delivery Speed & Urgency:

Standard Delivery: Delivered within 1–3 business days depending on location.

Express Delivery: For urgent medical cases, we offer same-day delivery where possible.

Emergency Medical Dispatch: Critical care medicines and lifesaving drugs can be dispatched within hours via our rapid response logistics team.

Order Volume:

Discounts are available for bulk orders and long-term supply contracts.

Hospitals and large healthcare organizations may qualify for institutional rates.

Packaging & Handling:

For sensitive medications such as vaccines or refrigerated drugs, an additional fee may be applied to cover cold-chain packaging and temperature-controlled transport.

We are committed to keeping our services affordable, efficient, and dependable for all.</p>
        <img src="/costs.png" width="100%"/>
    </main>
</template>

<style scoped>

    body, html {
        margin: 0;
        padding: 0;
        width: 100%;
        overflow-x: hidden; 
    }

    .costspage {
        background: linear-gradient(45deg, #f8c9d4, #ffd6e3); 
        color: #333;
        padding: 2rem;
        font-family: 'Roboto', sans-serif;
        z-index: 1000px;
        width: 100%;
        box-sizing: border-box;
        overflow-x: hidden;
    }

    .costspage p {
        font-size: 16px;
        line-height: 1.6;
        word-wrap: break-word; 
    }

    .card {
        background-color: black;
        border-radius: 4px;
        padding: 1.5rem;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        margin-bottom: 2rem;
        box-sizing: border-box;
        text-align: center;
    }

    .costspage h3 {
        color: pink;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

    img {
        max-width: 100%; 
        height: auto; 
    }

</style>

<script>
    export default {
        name: 'costs'
    }
</script>
