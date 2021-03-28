<template>
   
    <div class="mt-6 container mx-auto grid gap-3 grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <router-link v-for="cat in cats" :key="cat.id" :to="`/info/${cat.id}`" class="">
            <img :src="cat.url">
        </router-link>
    </div>
</template>

<script setup>
import {onMounted} from 'vue'
import {getCats,cats} from '../helpers/useCats'

onMounted(() => {
     getCats()
})
</script>