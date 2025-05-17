import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      isSidebarOpen: false,
      users: JSON.parse(localStorage.getItem('users')) || [],
      currentUser: JSON.parse(localStorage.getItem('user')) || null,
      showLoginModal: false,
      errorMessage: '',
      loginRedirectPath: '' 
    };
  },
  mutations: {
    toggleSidebar(state) {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
    registerUser(state, newUser) {
      const existingUser = state.users.find(user => user.email === newUser.email);
      if (existingUser) {
        state.errorMessage = 'This email is already registered. Please log in instead.';
        return;
      }

      state.users.push(newUser);
      state.currentUser = newUser;
      localStorage.setItem('users', JSON.stringify(state.users));
      localStorage.setItem('user', JSON.stringify(newUser));
      state.errorMessage = '';
    },
    loginUser(state, user) {
      state.currentUser = user;
      localStorage.setItem('user', JSON.stringify(user));
      state.errorMessage = '';
    },
    logoutUser(state) {
      state.currentUser = null;
      localStorage.removeItem('user');
    },
    setShowLoginModal(state, value) {
      state.showLoginModal = value;
    },
    setErrorMessage(state, message) {
      state.errorMessage = message;
    },
    setLoginRedirectPath(state, path) {
      state.loginRedirectPath = path; 
    },
    updateUserName(state, newName) {
      if (state.currentUser) {
        state.currentUser.name = newName;
        const index = state.users.findIndex(user => user.email === state.currentUser.email);
        if (index !== -1) {
          state.users[index].name = newName;
          localStorage.setItem('users', JSON.stringify(state.users)); 
        }
        localStorage.setItem('user', JSON.stringify(state.currentUser)); 
      }
    },
    updateUserPassword(state, newPassword) {
      if (state.currentUser) {
        state.currentUser.password = newPassword;
        const index = state.users.findIndex(user => user.email === state.currentUser.email);
        if (index !== -1) {
          state.users[index].password = newPassword;
          localStorage.setItem('users', JSON.stringify(state.users)); 
        }
        localStorage.setItem('user', JSON.stringify(state.currentUser)); 
      }
    }
  },
  actions: {
    toggleSidebar({ commit }) {
      commit('toggleSidebar');
    },
    registerUser({ commit }, newUser) {
      commit('registerUser', newUser);
    },
    loginUser({ commit }, credentials) {
      const user = this.state.users.find(
        user => user.email === credentials.email && user.password === credentials.password
      );
      if (user) {
        commit('loginUser', user);
      } else {
        commit('setErrorMessage', 'Invalid credentials');
        throw new Error('Invalid credentials');
      }
    },
    logoutUser({ commit }) {
      commit('logoutUser');
    },
    setShowLoginModal({ commit }, value) {
      commit('setShowLoginModal', value);
    },
    setLoginRedirectPath({ commit }, path) {
      commit('setLoginRedirectPath', path); 
    },
    updateUserName({ commit }, newName) {
      commit('updateUserName', newName); 
    },
    updatePassword({ commit }, newPassword) {
      commit('updateUserPassword', newPassword); 
    }
  },
  getters: {
    isSidebarOpen: state => state.isSidebarOpen,
    isAuthenticated: state => !!state.currentUser,
    currentUser: state => state.currentUser,
    showLoginModal: state => state.showLoginModal,
    errorMessage: state => state.errorMessage,
    loginRedirectPath: state => state.loginRedirectPath 
  }
});

export default store;
