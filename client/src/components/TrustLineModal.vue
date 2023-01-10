<template>
  <div
    class="modal fade"
    id="trustLineModal"
    tabindex="-1"
    aria-labelledby="trustLineModalLabel"
    aria-hidden="true"
    v-if="!isLoading"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="trustLineModalLabel">Add Trust Line</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="submitTrustLineHandler">
            <div class="mb-2">
              <label for="assetCode" class="form-label">Asset Code</label>
              <input
                type="text"
                class="form-control"
                id="assetCode"
                v-model="formData.code"
                placeholder="Asset Code"
              />
            </div>
            <div class="mb-2">
              <label for="issuer" class="form-label">Asset Code</label>
              <input
                type="text"
                class="form-control"
                id="issuer"
                v-model="formData.issuer"
                placeholder="Issuer Account ID"
              />
            </div>
            <div class="mb-2 modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="submit"
                class="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Add Trust Line
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div>
    <Loader v-if="isLoading" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

import Loader from './Loader.vue';

export default {
  name: 'TrustLineModal',
  data() {
    return {
      isLoading: false,
      formData: {
        code: '',
        issuer: ''
      }
    };
  },
  components: {
    Loader
  },
  methods: {
    ...mapActions(['accountDetails', 'addTrustLine']),
    submitTrustLineHandler() {
      this.isLoading = true;
      const secretKey = this.account.secretKey;
      const publicKey = this.account.publicKey;

      const payload = {
        ...this.formData,
        key: secretKey
      };
      this.addTrustLine(payload).then((res) => {
        if (res.status === 200) {
          this.accountDetails(publicKey).then(() => {
            this.isLoading = false;
          });
        }
      });
    }
  },
  computed: {
    ...mapGetters(['account'])
  }
};
</script>

<style scoped></style>
