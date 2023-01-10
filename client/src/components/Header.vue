<template>
  <div class="btn-group-vertical" role="group">
    <button @click="createAccount" class="btn btn-outline-primary mb-2">
      Create An Account
    </button>
    <button
      class="btn btn-outline-primary mb-2"
      data-bs-toggle="modal"
      data-bs-target="#trustLineModal"
    >
      Trust Line
    </button>
    <button class="btn btn-outline-primary mb-2">Update Account</button>
    <button class="btn btn-outline-primary mb-2">Account Details</button>
    <button class="btn btn-outline-primary mb-2">Make Payment</button>
    <button class="btn btn-outline-primary mb-2">Deposit Asset</button>
    <button class="btn btn-outline-primary mb-2">Withdraw Asset</button>
    <button class="btn btn-outline-primary mb-2">Sign Out</button>

    <TrustLineModal />
  </div>
</template>

<style></style>

<script>
import { mapActions, mapGetters } from 'vuex';
import TrustLineModal from './TrustLineModal.vue';

export default {
  name: 'TheHeader',
  data() {
    return {
      activeButton: null
    };
  },
  components: { TrustLineModal },
  computed: {
    ...mapGetters(['account'])
  },
  methods: {
    ...mapActions(['createAc', 'fundAccountAc']),
    async createAccount() {
      const createdAcc = await this.createAc();
      if (createdAcc.status === 200) {
        const payload = {
          publicKey: createdAcc.data.publicKey
        };
        const funded = await this.fundAccountAc(payload);
        if (funded.status === 200) {
          localStorage.setItem('account', JSON.stringify(this.account));
          alert('Friendbot funded this account');
        }
      }
    }
  }
};
</script>
