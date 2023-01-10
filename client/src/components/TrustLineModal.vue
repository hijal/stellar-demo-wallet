<template>
  <div
    class="modal fade"
    id="trustLineModal"
    tabindex="-1"
    aria-labelledby="trustLineModalLabel"
    aria-hidden="true"
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
                v-model="formData.issuerId"
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
              <button type="submit" class="btn btn-primary">
                Add Trust Line
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TrustLineModal',
  data() {
    return {
      formData: {
        code: '',
        issuerId: ''
      }
    };
  },
  methods: {
    submitTrustLineHandler() {
      console.log(this.formData);
    }
  }
};
</script>

<style scoped></style>
