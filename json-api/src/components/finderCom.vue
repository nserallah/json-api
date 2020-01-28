<template>
    <div>
        <Finder :tree="tree"></Finder>

        <ul v-for="(v, id, index) in arrayData.resource.childrens[0]" :key="index">
            <li>{{arrayData.resource.childrens[index].title}}</li>
        </ul>
        
    </div>
</template>

<script>
import "axios";
import Axios from 'axios';
import { Finder } from "@jledentu/vue-finder";
export default {
    components: {
      Finder
    },
    
    data() {
      return {
        arrayData:[],  
        tree: {
          id: "root",
          title: "Test",
          children: [
            {
      id: "1",
      label: "الإلكترونيات",
      children: [
        { id: "1-1", label: "الموبايلات وملحقاتها"},
        { id: "2-1", label: "أجهزة الكمبيوتر المحمولة"}
      ]
    },
    {
      id: "2",
      label: "الأزياء",
      children: [
        { id: "2-2", label: "أحذية" },
        
      ]
    },
    {
      id: "3",
      label: "الصناعات الحرفية",
      children: [
        { id: "1-3", label: "صناعة المنظفات" },
        { id: "2-3", label: "صناعة الفخاريات" }
        // ...
      ]
    },
    {
      id: "4",
      label: "المنتجات الصحية",
      children: [
        { id: "1-4", label: "المنظفات" },
        { id: "2-4", label: "الأدوية" }
        // ...
      ]
    },
    {
      id: "5",
      label: "الأناقة والجمال",
      children: [
        { id: "1-5", label: "الاكسسوارات" },
        { id: "2-5", label: "عدسات لاصقة" }
        // ...
      ]
    },
    {
      id: "6",
      label: "الأغذية",
      children: [
        { id: "1-6", label: "الألبان" },
        { id: "2-6", label: "اللحوم المجمدة" }
        // ...
      ]
    }
          ]
        }
      };
    },
    mounted: function() {
       
          return Axios.get('http://18.184.97.50/eltager/api/categories/1')
          .then(response => {
                this.arrayData = response.data;
              console.log(response.data);
          })

          
    }  
}
</script>

<style>
    .tree-container{
        direction: rtl
    }
    .arrow {
        transform: rotate(134deg) !important
    }
</style>