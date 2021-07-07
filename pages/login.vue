<template>
  <!-- <div>
    <form @submit.prevent="userLogin">
      <div>
        <label>Email</label>
        <input type="text" v-model="login.email" />
      </div>
      <div>
        <label>Password</label>
        <input type="text" v-model="login.password" />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  </div> -->
  <main class="form-signin p-2 mt-3">
    <form @submit.prevent="userLogin">
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="login.email"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="login.password"
          required
        />
        <label for="floatingPassword">Password</label>
      </div>
      <button class="w-100 btn btn-lg btn-primary btn--csq" type="submit">
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted text-center">&copy; consequence 2021</p>
    </form>
  </main>
</template>
<style>
.form-signin{
  max-width: 500px;
  margin: 0 auto;
}

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}
</style>
<script>
export default {
  data() {
    return {
      login: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async userLogin() {
      try {
        let response = await this.$auth.loginWith("local", {
          data: this.login
        });
        this.$toast.success("Login Successful", {
          duration: 2000,
          position: "top-right",
          theme: "outline"
        });
        this.$router.push('/')
      } catch (err) {
        this.$toast.error("Login Failed", {
          duration: 2000,
          position: "top-right",
          theme: "outline"
        });
      }
    }
  }
};
</script>
