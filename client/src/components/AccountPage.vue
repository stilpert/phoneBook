<template>
    <main class="account">
        <div class="container">
            <h1 class="h3 mb-3 fw-normal text-center">Your account</h1>
            <div class="row">
                <div class="col-md-6  col-sm-12 avatar">
                    <img class="mb-4" src="./../assets/avatar.png" alt="">
                </div>
                <div class="col-md-6  col-sm-12 description">
                    <p>Full name: {{ data.name }}</p>
                    <p>Email: {{ data.email }}</p>
                    <p>Gender: {{ data.gender }}</p>
                    <p>Date of birth: {{ data.dateOfBirth }}</p>
                </div>
            </div>
        </div>
    </main>
</template>
<style>
.avatar img {
    max-width: 100%;
}

.account .description {
    font-size: 2ch;
}
</style>

<script>
import UserService from '@/services/UserService'
export default {
  name: 'AccountPage',
  data () {
    return {
      data: {}
    }
  },
  methods: {
    async getUserData () {
      const response = await UserService.getUserById(UserService.getLoginedUserId())
      this.data = response.data.user
      console.log('DATA: ', this.data)
    }
  },
  mounted () {
    this.getUserData()
  }
}
</script>
