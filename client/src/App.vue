<template>
  <div class="container mt-3">
    <div class="mb-4" v-if="account">
      <Account />
    </div>
    <Header />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Header from './components/Header.vue';
import Account from './components/Account.vue';

export default {
  name: 'App',
  components: {
    Header,
    Account
  },
  computed: {
    ...mapGetters(['account'])
  }
};
</script>

<style></style>
