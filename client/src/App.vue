<template>
  <div class="container mt-3">
    <div class="mb-4" v-if="account">
      <Account />
      <div class="mt-3">
        <Details class="border p-2" />
      </div>
    </div>
    <Header />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Header from './components/Header.vue';
import Account from './components/Account.vue';
import Details from './components/Details.vue';

export default {
  name: 'App',
  components: {
    Header,
    Account,
    Details
  },
  computed: {
    ...mapGetters(['account'])
  }
};
</script>

<style></style>
