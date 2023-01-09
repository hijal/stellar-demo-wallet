<template>
  <div class="border-bottom container">
    <div class="row mb-2">
      <div class="col-8 border text-truncate">
        {{ account && account.publicKey }}
      </div>
      <div class="col">
        <button class="btn btn-outline-primary" @click="copyAddress">
          Copy Address
        </button>
      </div>
      <div class="col">
        <button class="btn btn-outline-primary" @click="copySecret">
          Copy Secret
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'AccountDetails',
  computed: {
    ...mapGetters(['account'])
  },
  methods: {
    copyAddress() {
      navigator.clipboard.writeText(this.account.publicKey);
    },
    copySecret() {
      navigator.clipboard.writeText(this.account.secretKey);
    }
  }
};
</script>

<style scoped></style>
