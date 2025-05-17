<template id="employees">
    <main class="employeespage">
        <section class="card">
            <h3 >EMPLOYEES</h3>
        </section>
        <p>Our strength lies in our diverse and highly trained workforce. Afya Medical Services is proud to employ professionals who are not only skilled but also passionate about healthcare delivery. Our team includes:

Doctors – Our in-house medical officers provide clinical guidance, review prescriptions when needed, and ensure all deliveries meet medical standards. They also engage in medical outreach and emergency teleconsultation support for urgent cases.

Pharmacists – Our certified pharmacists manage our inventories, handle drug verifications, monitor expiration dates, and provide prescription advice. They work closely with hospitals and clinics to ensure we supply the right drugs in the right quantities.

Delivery Men and Women – These are the heartbeat of our logistics chain. They are trained in handling medical products, maintaining hygiene, and ensuring safe and timely deliveries. They use GPS tracking and mobile updates to keep clients informed throughout the delivery process.

Support Staff – From customer care agents to warehouse managers, our support team ensures smooth communication, prompt query resolution, and flawless coordination of operations across the country.

We promote inclusivity, professionalism, and ongoing training to ensure our employees remain motivated and well-informed.</p>
        <img src="/employees.png" width="100%"/>
    </main>
</template>

<style scoped>

    .employeespage {
        background: linear-gradient(45deg, #f8c9d4, #ffd6e3); 
        color: #333;
        padding: 2rem;
        font-family: 'Roboto', sans-serif;
    }
  
  
    .employeespage p {
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

    .employeespage h3 {
        color: pink;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

</style>

<script>
    export default {
        name: 'employees'
    }
</script>