<template>
    <main class="about">
        <div class="container">
            <h1 class="h3 mb-3 fw-normal">About App</h1>
            <div class="row">
                <div class="col-md-7  col-sm-12 logo">
                    <img class="mb-4 " src="./../assets/phonebook.jpg" alt="">
                </div>
                <div class="col-md-5 col-sm-12 description display-6">
                    <p>Телефонний довідник який містить дані про абонентів та всі їхні номери. Даний додаток надає можливість додавання, вилучення та редагування. </p>
                </div>
            </div>
        </div>
    </main>
</template>
<style>
.about .logo {
    border: 3px solid darkcyan;
}
</style>

<script>
export default {
  name: 'AboutPage',
  data () {
    return { }
  }
}
</script>
