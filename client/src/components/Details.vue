<template>
  <div>
    Account Details
    <hr />
    <ul class="list-group" v-if="details">
      <template v-for="item in details.balances || []" :key="item.asset_code">
        <li class="list-group-item text-center">
          <div class="row d-flex justify-content-between">
            <div class="col">
              {{ Number(item.balance) }}
              {{ item.asset_type === 'native' ? 'XLM' : item.asset_code }}
            </div>
            <div class="col align-self-end">
              <button class="btn btn-primary">Make Payment</button>
            </div>
          </div>
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
