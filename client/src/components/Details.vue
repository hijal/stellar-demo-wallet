<template>
  <div>
    Account Details
    <hr />
    <ul class="list-group" v-if="details">
      <template v-for="item in details.balances || []" :key="item.asset_code">
        <li class="list-group-item d-flex justify-content-around">
          {{ parseInt(item.balance, 10) }}
          {{ item.asset_type === 'native' ? 'XLM' : item.asset_type }}
          <button class="btn btn-primary">Make Payment</button>
        </li>
      </template>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'AccountDetails',
  computed: {
    ...mapGetters(['account', 'details'])
  },
  methods: {
    ...mapActions(['accountDetails'])
  },
  mounted() {
    if (this.account) {
      this.accountDetails(this.account.publicKey);
    }
  }
};
</script>

<style scoped></style>
