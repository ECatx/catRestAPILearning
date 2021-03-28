import {ref} from 'vue'
import axios from 'axios'

export const searchItem = ref('') 
  export const cats = ref([])
  export const cat = ref()

  const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1/',
    params: {
      api_key: "1f913fd2-a737-4934-9004-b86bbe545911",
    },
  })
  export const getCats = async () => {
      try {
          const ressource = searchItem.value ? 'images/search' : 'images/search' 
          const response = await api(ressource,{ params: {limit:16, size:"full"} })
          cats.value = response.data
          // console.log(response.data[0].url)
      } catch (error) {
          console.log(error)
      }
  }

  export const cleanCat = () => (cat.value = null)