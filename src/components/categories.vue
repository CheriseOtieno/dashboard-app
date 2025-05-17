<template>
  <main class="categoriespage">
    <section class="card">
      <h3>CATEGORIES</h3>
    </section>

    <div class="category-holder">
      <div class="prescription" @click="showForm = true">
        <h4>PRESCRIPTION</h4>
        <p>Do you need a drug to be prescribed to you?</p>
      </div>

      <div class="consultation" @click="showConsultationForm = true">
        <h4>CONSULTATION</h4>
        <p>Need to consult a doctor?</p>
      </div>

      <div class="supply" @click="showSupplyForm = true">
        <h4>SUPPLY</h4>
        <p>Are you an organization that needs medicine supply?</p>
      </div>

      <div class="delivery" @click="showDeliveryForm = true">
        <h4>DELIVERY</h4>
        <p>Do you need a delivery to your location?</p>
      </div>
    </div>

    <div v-if="showForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Prescription Form</h3>
        <form @submit.prevent="submitForm('Prescription')">
          <label>Name: <input type="text" v-model="form.name" required /></label>
          <label>Age: <input type="number" v-model="form.age" required /></label>
          <label>Weight (kg): <input type="number" v-model="form.weight" required /></label>
          <label>Height (cm): <input type="number" v-model="form.height" required /></label>
          <label>Issue: <input type="text" v-model="form.issue" required /></label>
          <label>Email: <input type="email" v-model="form.email" required /></label>
          <div class="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" @click="cancelForm('Prescription')">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="showConsultationForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Consultation Form</h3>
        <form @submit.prevent="submitConsultationForm">
          <label>Name: <input type="text" v-model="consultationForm.name" required /></label>
          <label>ID number: <input type="text" v-model="consultationForm.id" required /></label>
          <label>Phone number: <input type="text" v-model="consultationForm.phone" required /></label>
          <label>Email: <input type="email" v-model="consultationForm.email" required /></label>
          <div class="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" @click="cancelForm('Consultation')">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="showSupplyForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Supply Form</h3>
        <form @submit.prevent="submitSupplyForm">
          <label>Organization name: <input type="text" v-model="supplyForm.name" required /></label>
          <label>Contact Info: <input type="text" v-model="supplyForm.contactinfo" required /></label>
          <label>Email: <input type="email" v-model="supplyForm.email" required /></label>
          <div class="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" @click="cancelForm('Supply')">Cancel</button>
          </div>
        </form>
      </div>
    </div>

    <div v-if="showDeliveryForm" class="modal-overlay">
      <div class="modal-content">
        <h3>Delivery Form</h3>
        <form @submit.prevent="submitDeliveryForm">
          <label>Name: <input type="text" v-model="deliveryForm.name" required /></label>
          <label>Phone Number: <input type="text" v-model="deliveryForm.phonenumber" required /></label>
          <label>Email: <input type="email" v-model="deliveryForm.email" required /></label>
          <label>Address: <input type="text" v-model="deliveryForm.address" required /></label>
          <div class="form-buttons">
            <button type="submit">Submit</button>
            <button type="button" @click="cancelForm('Delivery')">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  </main>
</template>

<script>
  export default {
    name: 'categories',
    data() {
      return {
        showForm: false,
        showConsultationForm: false,
        showSupplyForm: false,
        showDeliveryForm: false,
        form: { name: '', age: '', weight: '', height: '', issue: '', email: '' },
        consultationForm: { name: '', id: '', phone: '', email: '' },
        supplyForm: { name: '', contactinfo: '', email: '' },
        deliveryForm: { name: '', phonenumber: '', email: '', address: '' }
      };
    },
    methods: {
      logActivity(category, success) {
        const date = new Date().toLocaleString();
        const newEntry = { 
          userEmail: this.$store.getters.currentUser.email,
          category, 
          date, 
          success 
        };
        const existingLog = JSON.parse(localStorage.getItem('activityLog')) || [];
        existingLog.push(newEntry);
        localStorage.setItem('activityLog', JSON.stringify(existingLog));
      },
      submitForm(category) {
        this.logActivity(category, true);
        this.showForm = false;
        this.resetForm('form');
      },
      submitConsultationForm() {
        this.logActivity('Consultation', true);
        this.showConsultationForm = false;
        this.resetForm('consultationForm');
      },
      submitSupplyForm() {
        this.logActivity('Supply', true);
        this.showSupplyForm = false;
        this.resetForm('supplyForm');
      },
      submitDeliveryForm() {
        this.logActivity('Delivery', true);
        this.showDeliveryForm = false;
        this.resetForm('deliveryForm');
      },
      cancelForm(category) {
        this.logActivity(category, false);
        this.showForm = false;
        this.showConsultationForm = false;
        this.showSupplyForm = false;
        this.showDeliveryForm = false;
      },
      resetForm(formName) {
        for (const key in this[formName]) {
          this[formName][key] = '';
        }
      }
    }
  };
</script>

<style scoped>
  .categoriespage {
    padding: 2rem;
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

    .categoriespage h3 {
        color: pink;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
    }

  .category-holder {
    display: flex;
    flex-wrap: wrap;
    gap: 1.5rem;
    justify-content: center;
    margin-top: 2rem;
  }

  .category-holder > div {
    flex: 1 1 220px;
    max-width: 23%;
    background-color: skyblue;
    border-radius: 12px;
    padding: 1.5rem;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
  }

  .category-holder > div:hover {
    background-color: pink;
  }

  @media (max-width: 600px) {
    .category-holder {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      justify-content: center;
    }
    .category-holder > div {
      flex: none;
      max-width: none;
    }
  }

  @media (min-width: 601px) {
    .category-holder {
      display: flex; 
    }
    .category-holder > div {
      flex: 1 1 220px;
      max-width: 23%;
    }
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }

  .modal-content {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    width: 90%;
    max-width: 500px;
    max-height: 90vh;
    overflow-y: auto;
  }

  .modal-content h3 {
    margin-bottom: 1rem;
  }

  .modal-content form {
    display: flex;
    flex-direction: column;
  }

  .modal-content label {
    margin-bottom: 0.75rem;
  }

  .modal-content input {
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
  }

  .form-buttons {
    margin-top: 1rem;
    display: flex;
    justify-content: space-between;
  }

  .form-buttons button {
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
  }

  .form-buttons button:first-child {
    background-color: #4caf50;
    color: white;
  }

  .form-buttons button:last-child {
    background-color: #f44336;
    color: white;
  }
</style>
