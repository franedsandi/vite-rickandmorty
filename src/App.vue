<script>

import axios from 'axios';
import { store } from './components/data/store';
import Header from './components/header-part.vue';
import CardsContainer from './components/CardContainer.vue';
import Resuts from './components/partials/Results.vue';
import SearchBar from './components/partials/SearchBar.vue';
import Loader from './components/partials/Loader.vue';

export default {
  name: 'App',
  components:{
    Header,
    CardsContainer,
    Resuts,
    SearchBar,
    Loader
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getApi(){
      store.isLoading = true;
      axios.get(store.apiUrl,{
        params:{
          name: store.nameToSearch,
          status: store.statusToSearch
        }
      })
        .then( res =>{
          
          store.charctersList = res.data.results;
          console.log(store.charctersList);
          store.isLoading = false;

          store.charctersList.forEach( char => {

            if(!store.statusList.includes(char.status)){
              store.statusList.push(char.status)
            }
          })

        })
        .catch(err => {

          store.charctersList = [];
          store.isLoading = false;
        })

    }
  },
  mounted(){
    this.getApi();
  }
}
</script>

<template>
  <Header titleStr="- Rick&Morty -" />
  <SearchBar @startSearch="getApi" />
  <Loader v-if="store.isLoading" title="Loarding Rick&Morty API" />
  <CardsContainer v-else />
  <Resuts v-if="!store.isLoading" />
  
</template>



<style lang="scss" >

@use './scss/main.scss';

</style>