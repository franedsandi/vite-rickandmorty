<script>
import { store } from '../../components/data/store';

export default {
  name: 'SearchBar',
  methods: {
    reset() {
      store.nameToSearch = '';
      store.statusToSearch = '';
      this.$emit('startSearch');
    },
    search() {
      this.$emit('startSearch');
      store.nameToSearch = '';
      store.statusToSearch = '';
    }
  },
  data() {
    return {
      store
    };
  }
};
</script>

<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-auto">
        <input 
          v-model="store.nameToSearch" 
          type="text" 
          class="form-control" 
          placeholder="Search Character"
          @keyup.enter="search">
      </div>
      <div class="col-auto">
        <select v-model="store.statusToSearch" class="form-select" aria-label="Default select example">
          <option selected value="">Select Status</option>
          <option
            v-for="(status, index) in store.statusList"
            :key="index"
            :value="status"
          >{{ status }}</option>
        </select>
      </div>
      <div class="col-auto">
        <button @click="search" class="btn btn-info">Search</button>
      </div>
      <div class="col-auto">
        <button @click="reset" class="btn btn-warning">Reset</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

</style>