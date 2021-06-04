<template>
    <main class="form-signin text-cente">
        <form>
            <img class="mb-4" src="./../assets/phonebook.jpg" alt="" width="200">
            <h1 class="h3 mb-3 fw-normal">Login</h1>

            <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
                <label for="floatingPassword">Password</label>
            </div>

            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
            <a href="./registry.html">Don't have account? Sign up!</a>
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
  name: 'LoginPage',
  data () {
    return { }
  }
}
</script>
