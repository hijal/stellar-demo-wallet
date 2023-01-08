<template>
  <div class="btn-group-vertical" role="group" aria-label="Basic example">
    <button :class="createBtn" @click="setActive(1)" class="btn">
      Create An Account
    </button>
    <button :class="trustLineBtn" @click="setActive(2)" class="btn">
      Trust Line
    </button>
    <button :class="updateBtn" @click="setActive(3)" class="btn">
      Update Account
    </button>
    <button :class="acDetails" @click="setActive(4)" class="btn">
      Account Details
    </button>
    <button :class="payment" @click="setActive(5)" class="btn">
      Make Payment
    </button>
    <button :class="deposit" @click="setActive(6)" class="btn">
      Deposit Asset
    </button>
    <button :class="withdraw" @click="setActive(7)" class="btn">
      Withdraw Asset
    </button>
    <button :class="signOut" @click="setActive(8)" class="btn">Sign Out</button>
  </div>
</template>

<style></style>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      activeButton: 1
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
