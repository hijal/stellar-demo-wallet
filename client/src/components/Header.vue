<template>
  <div class="btn-group-vertical" role="group">
    <button
      :class="createBtn"
      @click="setActive(1)"
      class="btn btn-outline-primary mb-2"
    >
      Create An Account
    </button>
    <button
      :class="trustLineBtn"
      @click="setActive(2)"
      class="btn btn-outline-primary mb-2"
    >
      Trust Line
    </button>
    <button
      :class="updateBtn"
      @click="setActive(3)"
      class="btn btn-outline-primary mb-2"
    >
      Update Account
    </button>
    <button
      :class="acDetails"
      @click="setActive(4)"
      class="btn btn-outline-primary mb-2"
    >
      Account Details
    </button>
    <button
      :class="payment"
      @click="setActive(5)"
      class="btn btn-outline-primary mb-2"
    >
      Make Payment
    </button>
    <button
      :class="deposit"
      @click="setActive(6)"
      class="btn btn-outline-primary mb-2"
    >
      Deposit Asset
    </button>
    <button
      :class="withdraw"
      @click="setActive(7)"
      class="btn btn-outline-primary mb-2"
    >
      Withdraw Asset
    </button>
    <button
      :class="signOut"
      @click="setActive(8)"
      class="btn btn-outline-primary mb-2"
    >
      Sign Out
    </button>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      activeButton: null
    };
  },
  computed: {
    createBtn() {
      return this.activeButton === 1 ? 'active' : '';
    },
    trustLineBtn() {
      return this.activeButton === 2 ? 'active' : '';
    },
    updateBtn() {
      return this.activeButton === 3 ? 'active' : '';
    },
    acDetails() {
      return this.activeButton === 4 ? 'active' : '';
    },
    payment() {
      return this.activeButton === 5 ? 'active' : '';
    },
    deposit() {
      return this.activeButton === 6 ? 'active' : '';
    },
    withdraw() {
      return this.activeButton === 7 ? 'active' : '';
    },
    signOut() {
      return this.activeButton === 8 ? 'active' : '';
    }
  },
  methods: {
    setActive(button) {
      this.activeButton = button;
    }
  }
};
</script>
