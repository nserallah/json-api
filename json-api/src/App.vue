<template>
  <div id="app">
    <!-- <tree-com></tree-com>
    <test></test> -->
    <!-- <b-tree-view
      :data="treeData"
      :nodeKeyProp="nodeKeyProp"
      :nodeChildrenProp="nodeChildrenProp"
      :showIcons="showIcons"
      
      
      ></b-tree-view> -->
      
      <finder-com></finder-com>
  </div>
</template>

<script>
// import "axios";
// import Axios from 'axios';
//import jsonfile from "../src/json/classifications.json";
export default {
  data() {
    return {
//       nodeKeyProp: "id",
//       showIcons: true,
//       nodeChildrenProp: "children",
//       children: '',
//       contextMenu: true,
//       contextMenuItems: [ { code: 'DELETE_NODE', label: 'Delete node' }, { code: 'RENAME_NODE', label: 'Rename node' } ],
//       treeData: [
//         {
//           "id": 1,
//           "name": "الالكترونيات" ,
//           "children": [
//             {"id": 3, "name": "Neptune"},
//             {"id": 4, "name": "Stratus"} 
//           ] 
//         },
//         {
//           "id": 2,
//           "name": "الازياء" ,
//           "children": [
//             {"id": 3, "name": "Neptune"},
//             {"id": 4, "name": "Stratus", "children": [
//             {"id": 3, "name": "Neptune"},
//             {"id": 4, "name": "Stratus"} 
//           ] } 
//           ] 
//         },
//         {
//           "id": 2,
//           "name": "الصناعات الحرفية" ,
//           "children": [
//             {"id": 3, "name": "Neptune"},
//             {"id": 4, "name": "Stratus"} 
//           ] 
//         }    

//       ],

//     }
//   },
//   mounted: function() {
       
//           // return Axios.get('http://18.184.97.50/eltager/api/categories/1')
//           // .then(response => {
//           //     this.treeData.push(this.response.data);
//           //     console.log(response.data);
//           // })

//           console.log(this.treeData[1].children);
    }    
    }
 }
</script>

<style lang="scss">

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
