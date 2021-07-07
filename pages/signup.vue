<template>
  <main class="form-signup p-2 mt-3">
    <form @submit.prevent="userRegister">
      <h1 class="h3 mb-3 fw-normal">Signup</h1>

      <div class="form-floating mb-2">
        <label for="floatingInput">Email address</label>
        <input
          type="email"
          class="form-control"
          id="floatingInput"
          placeholder="name@example.com"
          v-model="register.email"
        />
      </div>
      <div class="form-floating mb-3">
        <label for="floatingPassword">Password</label>
        <input
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="register.password"
          required
        />
      </div>
      <button class="w-100 btn btn-lg btn-primary btn--csq" type="submit">
        Sign up
      </button>
      <p class="mt-5 mb-3 text-muted text-center">&copy; consequence 2021</p>
    </form>
  </main>
</template>
<style>
.form-signup {
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
  auth: false,
  data() {
    return {
      register: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    async userRegister() {
      try {
        await this.$axios
          .post("/api/auth/register", this.register)
          .then(response => {
            this.$toast.success("Account created successfully", {
              duration: 3000,
              position: "top-right",
              theme: "outline"
            });

            // redirect to login page on success
            this.$router.push("/login");
          })
          .catch(error => {
            if (error.response) {
              // Request made and server responded
              console.log(error.response.data);
              Object.keys(error.response.data).forEach((_key) => {
                _message = error.response.data[_key][0]
                _message = _message.charAt(0).toUpperCase() + _message.slice(1)  // Error message capitalize
                this.$toast.error(_message, {
                  duration: 3000,
                  position: "top-right",
                  theme: "outline"
                });
              });
            } else if (error.request) {
              // The request was made but no response was received
              console.log(error.request);
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log("Error", error.message);
            }
          });
      } catch (error) {
        this.$toast.error(
          "Sorry an error occured, please check your internet",
          {
            duration: 3000,
            position: "top-right",
            theme: "outline"
          }
        );
      }
    }
  }
};
</script>
