import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'https://rickandmortyapi.com/api/character',
  charctersList: [],
  nameToSearch: '',
  statusToSearch: '',
  isLoading: true,
  statusList:[]
})