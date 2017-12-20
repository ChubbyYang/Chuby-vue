<template>
  <div class="pos">
   <div>
     <el-row>
            <el-col id="order-list" :span='7'>
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
                        <el-button type="warning" >挂单</el-button>
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
            </el-col>
            <!--商品展示-->
            <el-col :span="17">
              <div class="often-goods ">
                <div class="title">常用商品</div>
                <div class="often-goods-list">
                  <ul>
                    <li v-for="good in oftenGoods" @click="addOrderList(good)">
                      <span>{{good.goodsName}}</span>
                      <span class="o-price">￥{{good.price}}元</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="tab-goods">
                <el-tabs >
                  <el-tab-pane label="汉堡" >
                    <ul class="cookList">
                      <li v-for="good in type0Goods">
                        <span class="cookImg"><img :src="good.goodsImg" width="100%"></span>
                        <span class="cookName">{{good.goodsName}}</span>
                        <span class="cookPrice">￥{{good.price}}元</span>
                      </li>                   
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="小食" >配置管理</el-tab-pane>
                  <el-tab-pane label="饮料" >角色管理</el-tab-pane>
                  <el-tab-pane label="套餐" >定时任务补偿</el-tab-pane>
                </el-tabs>
              </div>
              
            </el-col>
        </el-row>
   </div>
  </div>
</template>
 
<script>
import axios from 'axios'
import { mapGetters } from 'vuex'
export default {
  name: 'Pos',
  data(){
    return{
        tableData: [],
        oftenGoods:[]
    }   
  },
  computed: {
    ...mapGetters([
      'type0Goods'
    ])
  },
  created(){
    // oftengood
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then( response=>{
        console.log(response);
        console.log(this);
        this.oftenGoods=response.data;
      })
      .catch(error=>{
        console.log(error);
      });
  },
  mounted(){
    var orderHeight = document.body.clientHeight;
    document.getElementById('order-list').style.height=orderHeight+'px';
  },
  methods:{
   //添加订单列表的方法
      addOrderList(goods){
            this.totalCount=0; //汇总数量清0
            this.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i<this.tableData.length;i++){
                console.log(this.tableData[i].goodsId);
                if(this.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                    this.tableData[i].count++;
                }
            }
            // //根据isHave的值判断订单列表中是否已经有此商品
            // if(isHave){
            //     //存在就进行数量添加
            //      let arr = this.tableData.filter(o =>o.goodsId == goods.goodsId);
            //      arr[0].count++;
            //      //console.log(arr);
            // }
            
            if(!isHave){
                //不存在就推入数组
                let newGoods={goodsId:goods.goodsId,goodsName:goods.goodsName,price:goods.price,count:1};
                 this.tableData.push(newGoods);
 
            }
 
            //进行数量和价格的汇总计算
            this.tableData.forEach((element) => {
                this.totalCount+=element.count;
                this.totalMoney=this.totalMoney+(element.price*element.count);   
            });
           
      },
       //删除单个商品
      delSingleGoods(goods){
        console.log(goods);
        this.tableData=this.tableData.filter(o => o.goodsId !=goods.goodsId);
 
      },
  }
  
}
</script>
<style slot-scope>
  .tx{
    border:1px solid red;
  }
  #order-list{
    background: #dfd;
  }
  .btn{
   margin-top:30px; 
   text-align: center;
  }
  .often-goods{
   height:300px;
  }
  .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
  .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
  .o-price{
      color:#58B7FF; 
   }
  .cookList li{
    list-style: none;
    float: left;
    width:200px;
    background: #fff;
    margin: 5px 10px;
  }
  .cookList  li span{
    display: block;
    float: left;
  }
  .cookImg{
    width:100px; 
  }
  .cookName{
    color: red;
    margin: 5px;
  }
  .cookPrice{
    margin: 5px;
  }
</style>