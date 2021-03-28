<template>
    <div class="mt-6 grid justify-items-center space-y-5">
        <h1 class="text-white text-2xl font-bold">Info Page of image:  {{id}}</h1>
                <div v-if="cat">
                <div v-if="cat.categories">
                <h1 class="text-white text-2xl text-center font-bold">Category:  {{cat.categories[0].name}}</h1>
            </div>
            <img :src=cat.url>         
        </div> 
    </div>
</template>

<script>
import axios from 'axios'
export default {
    props: ['id'],
    data: function(){
        return{
            cat: null
        }
    },
    methods: {
        getData(){
            this.id
            var myVue = this
            axios.get('https://api.thecatapi.com/v1/images/'+this.id,{ params: {size:"full"} })
            .then(function (response){
                myVue.cat = response.data
                console.log(response)
            })
        }

    },
    mounted: function(){
        this.getData()
    }
}
</script>