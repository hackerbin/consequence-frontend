<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Consequence</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="/"
            >Bank Login <span class="sr-only">(current)</span></a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/accounts">Accounts</a>
        </li>
      </ul>
      
      <button
        type="text"
        @click="logout()"
        class="btn btn-primary btn-sm btn--csq"
      >
        Logout
      </button>
    </div>
  </nav>
</template>
<script>
export default {
  methods: {
    async logout() {
      this.$auth.logout()
      this.$router.push('/login')
    }
  }
};
</script>