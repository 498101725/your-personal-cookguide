<template>
  <div>
    <!-- columnDefs表头  rowData表格数据-->
    <!-- ag-theme-balham 是ag-grid自带的表格样式类 -->
    <!-- 设置 :enableColResize="true" 就可实现表格列宽随意拖动改变 -->
    <!-- 设置 enableSorting 为 true 就可实现表格数据排序-->
    <!-- 排序有默认顺序、升序、降序-->
    <!-- 设置 enableFilter 为 true 就可实现筛选功能-->
    <!-- gridReady 绑定一个事件，在表格创建完成后执行 -->
    <!-- 这些属性，不需要绑定，直接给属性值 -->
    <button @click="deleteCuisine()">Delete Selected Cuisine</button>

    <button @click="addCuisine()">Add Cuisine</button>

    <ag-grid-vue
      class="table ag-theme-balham"
      :columnDefs="columnDefs"
      :rowData="rowData"
      rowSelection="multiple"
      rowHeight="60"
      :enableColResize="true"
      @grid-ready="onGridReady"
    >
      <!--   
  可以添加 groupSelectesChildren="true" 在上面，关系group；
  可以添加 :autoGroupColumnDef="autoGroupColumnDef"
      -->
    </ag-grid-vue>
  </div>
</template>

<script>
// 引入ag-grid-vue
import { AgGridVue } from "ag-grid-vue";

export default {
  components: { AgGridVue },
  name: "cuisineGrid",

  data() {
    return {
      // initiate variables in data;
      columnDefs: null,
      rowData: null,
      gridApi: null,
      columnApi: null

      //关系分组：
      // autoGroupColumnDef: null,
    };
  },
  mounted() {},

  methods: {
    // 表格创建完成后执行
    // delete line
    deleteCuisine() {
      const selectedNodes = this.gridApi.getSelectedNodes();
      this.allNodesData = Array();
      this.gridApi.forEachNode(node => {
        if (selectedNodes.indexOf(node) < 0) this.allNodesData.push(node.data);
      });
      this.gridApi.setRowData(this.allNodesData);

      localStorage.setItem("allNodes", JSON.stringify(this.allNodesData));
    },
    // add line
    addCuisine() {
      // this.topRow = [];
      // for (let i = 0; i < 5; i++) {
      //   this.topRow.push(this.rowData[i]);
      // }
      // this.gridApi.setPinnedTopRowData(this.topRow);

      this.allNodesData = [];
      this.gridApi.forEachNode(node => {
        this.allNodesData.push(node.data);
      });
      this.allNodesData.unshift({});
      this.gridApi.setRowData(this.allNodesData);
      this.gridApi.setPinnedTopRowData([this.allNodesData[0]]);

      localStorage.setItem("allNodes", JSON.stringify(this.allNodesData));
      console.log(localStorage.getItem("add"));
    },

    // onGridReady 在 ag-grid 里面的作用等同是 mounted 的功能；
    onGridReady(params) {
      console.log(params);
      // 获取gridApi
      this.gridApi = params.api;

      if (localStorage.getItem("allNodes")) {
        this.allNodesData = JSON.parse(localStorage.getItem("allNodes"));
        this.gridApi.setRowData(this.allNodesData);
      }
    }
  },

  beforeMount() {
    this.columnDefs = [
      {
        headerName: "ID",
        field: "id",
        editable: true,
        sortable: true,
        filter: true,
        checkboxSelection: true

        // 关系分组：
        //rowGroup: true,
      },
      {
        headerName: "Name",
        field: "Name",
        //可编辑表格内容，每一个都要加上去！
        editable: true,
        sortable: true,
        filter: true
      },
      {
        headerName: "Material",
        field: "Material",
        editable: true,
        sortable: true,
        filter: true
      },
      {
        headerName: "Sauce",
        field: "Sauce",
        editable: true,
        sortable: true,
        filter: true
      }
    ];
    // fetch(
    //   "https://gist.githubusercontent.com/498101725/129f698ff02d53b7c6bc0e8e58e970f6/raw/b57a10495c55327f9693b90fc93098704cdbeba5/menuJsonFile"
    // )
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(rowData => {
    //     this.rowData = rowData;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // 以下关系分组；
    // this.autoGroupColumnDef = {
    //   headerName: 'Name',
    //   field: 'Name',
    //   cellRenderer: 'agGroupCellRenderer',
    //   cellRendererParams: {
    //     checkbox: true,
    //   },
    // };
  }
};
</script>

<style scoped>
.table {
  width: 80%;
  height: 800px;
}
</style>
