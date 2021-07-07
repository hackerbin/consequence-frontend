<template>
  <div class="container">
    <h3 class="text-center m-5">Processing data...</h3>
  </div>
</template>

<script>
export default {
  auth: true,
  async mounted() {
    try {
      await this.$axios
        .post("/api/truelayer/login", {
          code: this.$router.currentRoute.query["code"]
        })
        .then(response => {
          this.$toast.success("Bank login successful", {
            duration: 3000,
            position: "top-right",
            theme: "outline"
          });

          // redirect to login page on success
          this.$router.push("/accounts");
        })
        .catch(error => {
          if (error.response) {
            // Request made and server responded
            console.log(error.response.data);
            Object.keys(error.response.data).forEach(_key => {
              _message = error.response.data[_key][0];
              _message = _message.charAt(0).toUpperCase() + _message.slice(1); // Error message capitalize
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
      this.$toast.error("Sorry an error occured, please check your internet", {
        duration: 3000,
        position: "top-right",
        theme: "outline"
      });
      this.$router.push("/");
    }
  }
};
</script>
