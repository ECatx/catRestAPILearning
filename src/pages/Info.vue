<template>
    <div class="mt-6 grid justify-items-center space-y-5">
        <h1 class="text-white text-2xl font-bold">Info Page of image:  {{id}}</h1>
                <div v-if="cat">
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
    // watch:{
    //     '$route' (to,from){
    //         this.getData()
    //     }
    // },
    methods: {
        getData(){
            this.id
            var myVue = this
            axios.get('https://api.thecatapi.com/v1/images/'+this.id)
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