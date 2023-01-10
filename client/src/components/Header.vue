<template>
  <div v-if="isLoading">
    <Loader />
  </div>
  <div class="btn-group-vertical" role="group" v-else>
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
import Loader from './Loader.vue';

export default {
  name: 'TheHeader',
  data() {
    return {
      activeButton: null,
      isLoading: false
    };
  },
  components: { TrustLineModal, Loader },
  computed: {
    ...mapGetters(['account'])
  },
  methods: {
    ...mapActions(['createAc', 'fundAccountAc', 'accountDetails']),
    async createAccount() {
      this.isLoading = true;
      this.createAc().then((result) => {
        const payload = {
          publicKey: result.data.publicKey
        };
        this.fundAccountAc(payload).then(() => {
          localStorage.setItem('account', JSON.stringify(this.account));
          this.accountDetails(this.account.publicKey).then(() => {
            this.isLoading = false;
          });
        });
      });
    }
  }
};
</script>
