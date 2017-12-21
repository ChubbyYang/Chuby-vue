
<template>
  <div class="pos">
   <div>
     <el-row>
            <el-col id="order-list" :span='7'>
              <order></order>
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
                <el-tabs>
                  <el-tab-pane label="汉堡" >
                    <ul class="cookList">
                      <li v-for="good in type0Goods">
                        <span class="cookImg"><img :src="good.goodsImg" width="100%"></span>
                        <span class="cookName">{{good.goodsName}}</span>
                        <span class="cookPrice">￥{{good.price}}元</span>
                      </li>                   
                    </ul>
                  </el-tab-pane>
                  <el-tab-pane label="小食" >
                     <ul class="cookList">
                        <li v-for="good in type1Goods">
                          <span class="cookImg"><img :src="good.goodsImg" width="100%"></span>
                          <span class="cookName">{{good.goodsName}}</span>
                          <span class="cookPrice">￥{{good.price}}元</span>
                        </li>  
                     </ul>  
                  </el-tab-pane>
                  <el-tab-pane label="饮料" >饮料</el-tab-pane>
                  <el-tab-pane label="套餐" >套餐</el-tab-pane>
                </el-tabs>
              </div>
              
            </el-col>
        </el-row>
   </div>
  </div>
</template>
 
<script>
import axios from 'axios'
import {mapGetters, mapMutations} from 'vuex'
import order from '@/components/common/order'
export default {
  name: 'Pos',
  data () {
    return {
      oftenGoods: []
    }
  },
  components: {
    order
  },
  computed: {
    ...mapGetters([
      'type0Goods', 'type1Goods'
    ])
  },
  created () {
    // oftengood
    axios.get('http://jspang.com/DemoApi/oftenGoods.php')
      .then(response => {
        console.log(response)
        console.log(this)
        this.oftenGoods = response.data
      })
      .catch(error => {
        console.log(error)
      })
  },
  mounted () {
    var orderHeight = document.body.clientHeight
    document.getElementById('order-list').style.height = orderHeight + 'px'
    this.$store.dispatch('request')
  },
  methods: {
    ...mapMutations([
      'addOrderList'
    ])
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