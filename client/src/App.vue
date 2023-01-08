<template>
  <div class="container mt-5">
    <div class="mb-2">
      <Account />
    </div>
    <Header />
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Account from './components/Account.vue';

export default {
  name: 'App',
  components: {
    Header,
    Account
  }
};
</script>

<style></style>
