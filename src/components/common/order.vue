<template>
    <el-tabs>
        <el-tab-pane label="点餐">
            <el-table :data="tableData" border show-summary style="width: 100%" >
                <el-table-column prop="goodsName" label="商品"  ></el-table-column>
                <el-table-column prop="count" label="量" width="50">
                <el-button>-</el-button><el-button>-</el-button>
                </el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column  label="操作" width="100" fixed="right">
                    <template slot-scope="scope">
                        <el-button type="text" size="small"  @click="delSingleGoods(scope.row)">删除</el-button>
                        <el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>                      
                    </template>
                </el-table-column>
            </el-table> 
            <div class="btn">
            <el-button type="warning">挂单</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="success">结账</el-button>
            </div> 
            
        </el-tab-pane>
        <el-tab-pane label="挂单">
        挂单
        </el-tab-pane>
        <el-tab-pane label="外卖">
        外卖
        </el-tab-pane>
    </el-tabs>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
  name: 'order',
  computed: {
    ...mapGetters([
      'tableData'
    ])
  },
  methods: {
    ...mapMutations([
      'addOrderList', 'delSingleGoods'
    ])
  }
}
</script>

<style>


</style>