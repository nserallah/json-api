<template>
    <div>
        <!-- <button @click="getApiData">Get api data</button> -->
    </div>
</template>

<script>
import "axios";
import Axios from 'axios';
export default {
    data: function() {
        return {

        }
    },
    methods: {
        
    },
    mounted: function() {
       
           
          return Axios.get('http://18.184.97.50/eltager/api/categories/1')
          .then(response => {
              console.log(response.data);
          })
      
        
    }
}
</script>

<style scoped>

</style>