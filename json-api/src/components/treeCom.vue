<template>
  <div>
    
    <vue-tree-list
      @click="onClick"
      @change-name="onChangeName"
      @delete-node="onDel"
      @add-node="onAddNode"
      :model="data"
      default-tree-node-name="new node"
      default-leaf-node-name="new leaf"
      v-bind:default-expanded="false">
      <span class="icon" slot="addTreeNodeIcon">📂</span>
      <span class="icon" slot="addLeafNodeIcon">＋</span>
      <span class="icon" slot="editNodeIcon">📃</span>
      <span class="icon" slot="delNodeIcon">✂️</span>
      <span class="icon" slot="leafNodeIcon">🍃</span>
      <span class="icon" slot="treeNodeIcon">🌲</span>
    </vue-tree-list>
    <button @click="getNewTree">Get new tree</button>
    <button @click="getApiData()">Get data from api</button>
    <pre>
      {{newTree}}
    </pre>
  </div>
</template>

<script>
import { VueTreeList, Tree, TreeNode } from 'vue-tree-list';
import "axios";
import Axios from 'axios';

export default {
    components: {
      VueTreeList
    },
    data () {
      return {
        newTree: {},
        data: new Tree([
          {
            name: 'Node 1',
            id: 1,
            pid: 0,
            dragDisabled: true,
            addTreeNodeDisabled: true,
            addLeafNodeDisabled: true,
            editNodeDisabled: true,
            delNodeDisabled: true,
            children: [
              {
                name: 'Node 1-2',
                id: 2,
                isLeaf: true,
                pid: 1
              },
              {
                name: 'Node 1-',
                id: 3,
                isLeaf: true,
                pid: 2
              },
              {
                name: 'Node 1-3',
                id: 4,
                isLeaf: true,
                pid: 3
              }
            ]
          },
          {
            name: 'Node 2',
            id: 3,
            pid: 0,
            disabled: true
          },
          {
            name: 'Node 3',
            id: 4,
            pid: 0
          }
        ])
      }
    },
    methods: {
      onDel (node) {
        console.log(node)
        node.remove()
      },
 
      onChangeName (params) {
        console.log(params)
      },
 
      onAddNode (params) {
        console.log(params)
      },
 
      onClick (params) {
        console.log(params)
      },
 
      addNode () {
        var node = new TreeNode({ name: 'new node', isLeaf: false })
        if (!this.data.children) this.data.children = []
        this.data.addChildren(node)
      },
 
      getNewTree () {
        var vm = this
        function _dfs (oldNode) {
          var newNode = {}
 
          for (var k in oldNode) {
            if (k !== 'children' && k !== 'parent') {
              newNode[k] = oldNode[k]
            }
          }
 
          if (oldNode.children && oldNode.children.length > 0) {
            newNode.children = []
            for (var i = 0, len = oldNode.children.length; i < len; i++) {
              newNode.children.push(_dfs(oldNode.children[i]))
            }
          }
          return newNode
        }
 
        vm.newTree = _dfs(vm.data)
      },
      getApiData: function () {
          return Axios.get('http://18.184.97.50/eltager/api/categories/1')
          .then(response => {
              console.log(response.data);
          })
      }
    }
  }


</script>

<style scoped>

</style>