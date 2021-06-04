import api from '@/services/api'
import userService from './UserService'
export default {
  fetchContacts () {
    return api().get('users/' + userService.getLoginedUserId() + '/contacts')
  },
  addContact (data) {
    return api().post('users/' + userService.getLoginedUserId() + '/contacts', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  },
  deleteContact (id) {
    return api().delete('users/' + userService.getLoginedUserId() + '/contacts/' + id)
  },
  addNumberToContact (id, data) {
    return api().put('users/' + userService.getLoginedUserId() + '/contacts/' + id, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }
}
