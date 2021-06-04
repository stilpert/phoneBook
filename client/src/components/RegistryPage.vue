<template>
    <main class="form-signin">
        <form>
            <img class="mb-4" src="./../assets/phonebook.jpg" alt="" width="200">
            <h1 class="h3 mb-3 fw-normal">Sign up</h1>
            <div class="form-floating">
                <input type="text" class="form-control" id="floatingInput" placeholder="Your full name">
                <label for="floatingInput">Full name</label>
            </div>
            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Confirm Password</label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="maleRadio" checked>
                <label class="form-check-label" for="maleRadio">
                  Male
                </label>
            </div>
            <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="flexRadioDefault" id="femaleRadio">
                <label class="form-check-label" for="femaleRadio">
                  Female
                </label>
            </div>
            <div class="form-floating">
                <input type="date" class="form-control" id="floatingPassword" placeholder="">
                <label for="floatingPassword">Date of birth</label>
            </div>
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="login"> Login
                </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        </form>
    </main>
</template>
<style>
.form-signin {
    max-width: 30%;
    margin: auto;
}
@media (max-width: 768px) {
    .form-signin {
        max-width: 80%;
    }
}
</style>

<script>
export default {
  name: 'RegistryPage',
  data () {
    return { }
  }
}
</script>
