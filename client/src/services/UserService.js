import api from '@/services/api'
export default {
  getLoginedUserId () {
    return '60b961407f49d21fe2b87a82'
  },
  getUserById (id) {
    return api().get('users/' + id)
  }
}
