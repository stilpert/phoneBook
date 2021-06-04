import Login from '@/components/LoginPage'
import Phones from '@/components/PhonesPage'
import About from '@/components/AboutPage'
import Registry from '@/components/RegistryPage'
import Account from '@/components/AccountPage'

const routes = [
  {
    path: '/about',
    name: 'AboutUs',
    component: About
  },
  {
    path: '/',
    name: 'Contacts',
    component: Phones
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/registry',
    name: 'Registry',
    component: Registry
  },
  {
    path: '/account',
    name: 'Account',
    component: Account
  }
]
export default routes
