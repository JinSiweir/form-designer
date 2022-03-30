<template>
  <k-form-build :value="data" />
</template>

<script>
  export default {
    data() {
      return {
        data: {
          list: [],
          config: {},
        },
        a: null,
      };
    },
    created() {
      this.a = JSON.parse(window.prompt());
      this.data = this.a;
    },
    mounted() {
      console.log(this.a);
    },
  };
</script>
