<template>
    <div class="modal-overlay" @click.self="close">
        <div class="modal-content">
            <h3>Sign in</h3>
    
            <div v-if="isCreatingAccount">
                <form @submit.prevent="submitForm('create')">
                    <input v-model="name" type="text" placeholder="Full Name" required />
                    <input v-model="email" type="email" placeholder="Email" required />
                    <input v-model="password" type="password" placeholder="Password" required />
                    <button type="submit">Create Account</button>
                </form>
            </div>
    
            <div v-else>
                <form @submit.prevent="submitForm('login')">
                    <input v-model="email" type="email" placeholder="Email" required />
                    <input v-model="password" type="password" placeholder="Password" required />
                    <button type="submit">Login</button>
                </form>
            </div>
    
            <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    
            <button @click="toggleForm">{{ isCreatingAccount ? 'Already have an account?' : 'Create Account' }}</button>
            <button @click="close">Close</button>
        </div>
    </div>
</template>
  
<script>
export default {
    name: 'login',
    data() {
        return {
            isCreatingAccount: false,
            email: '',
            password: '',
            name: '',
            errorMessage: '',
            loginRedirectPath: ''  
        };
    },
    computed: {
        showModal() {
            return this.$store.state.showLoginModal;
        }
    },
    methods: {
        toggleForm() {
            this.isCreatingAccount = !this.isCreatingAccount;
            this.errorMessage = '';
        },
        submitForm(type) {
            if (type === 'create') {
                const existingUser = this.$store.state.users.find(user => user.email === this.email);
                if (existingUser) {
                    this.errorMessage = 'Email already exists! Please log in.';
                } else {
                    const newUser = { name: this.name, email: this.email, password: this.password };
                    this.$store.dispatch('registerUser', newUser);
                    this.$emit('close');  
                    this.$router.push(this.loginRedirectPath || '/profile'); 
                }
            } else if (type === 'login') {
                const storedUser = this.$store.state.users.find(
                    user => user.email === this.email && user.password === this.password
                );
                if (storedUser) {
                    this.$store.dispatch('loginUser', storedUser);
                    this.$emit('close'); 
                    this.$router.push(this.loginRedirectPath || '/profile'); 
                } else {
                    this.errorMessage = 'Invalid email or password';
                }
            }
        },
        close() {
            this.$store.dispatch('setShowLoginModal', false); 
            this.$emit('close'); 
        }
    },
    watch: {
        showModal(newValue) {
            if (newValue === false) {
                this.$router.push('/'); 
            }
        }
    }
};
</script>
  
<style scoped>
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.modal-content {
    background: white;
    padding: 2rem;
    border-radius: 8px;
    width: 90%;
    max-width: 400px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

.error {
    color: red;
}
</style>
