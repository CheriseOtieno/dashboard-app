import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '../components/MainPage.vue'
import Costs from '../components/costs.vue'
import About from '../components/about.vue'
import Offices from '../components/offices.vue'
import Employees from '../components/employees.vue'
import ContactInfo from '../components/contactinfo.vue'
import Categories from '../components/categories.vue'
import Profile from '../components/profile.vue'
import Dashboard from '../components/dashboard.vue'
import Activity from '../components/activity.vue'

const routes = [
  { path: '/', component: MainPage },
  { path: '/costs', component: Costs },
  { path: '/about', component: About },
  { path: '/offices', component: Offices },
  { path: '/employees', component: Employees },
  { path: '/contactinfo', component: ContactInfo },
  { path: '/categories', component: Categories },
  { path: '/profile', component: Profile },
  { path: '/dashboard', component: Dashboard },
  { path: '/activity', component: Activity },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
