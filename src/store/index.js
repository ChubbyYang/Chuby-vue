<<<<<<< HEAD
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 变量定义
    state: {
        type0Goods:[
            {
                goodsId:1,
                goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                goodsName:'香辣鸡腿堡',
                price:18
            }, {
                goodsId:2,
                goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                goodsName:'田园鸡腿堡',
                price:15
            }, {
                goodsId:3,
                goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                goodsName:'和风汉堡',
                price:15
            }, {
                goodsId:4,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                goodsName:'快乐全家桶',
                price:80
            }, {
                goodsId:5,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                goodsName:'脆皮炸鸡腿',
                price:10
            }, {
                goodsId:6,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                goodsName:'魔法鸡块',
                price:20
            }, {
                goodsId:7,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                goodsName:'可乐大杯',
                price:10
            }, {
                goodsId:8,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                goodsName:'雪顶咖啡',
                price:18
            }, {
                goodsId:9,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                goodsName:'大块鸡米花',
                price:15
            }, {
                goodsId:20,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                goodsName:'香脆鸡柳',
                price:17
            }
            
        ],
        type1Goods:[],
        tableData:[]
       
    },
    // 变量操作
    getters:{
        type0Goods: state => state.type0Goods,
        tableData: state => state.tableData,
        type1Goods: state => state.type1Goods
    },
    mutations:{
        //添加订单列表的方法
      addOrderList(state,goods){
            state.tableData.totalCount=0; //汇总数量清0
             state.tableData.totalMoney=0;
            let isHave=false;
            //判断是否这个商品已经存在于订单列表
            for (let i=0; i< state.tableData.length;i++){
                console.log( state.tableData[i].goodsId);
                if( state.tableData[i].goodsId==goods.goodsId){
                    isHave=true; //存在
                    state.tableData[i].count++;
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
                state.tableData.push(newGoods);
 
            }
 
            //进行数量和价格的汇总计算
            state.tableData.forEach((element) => {
               state.tableData.totalCount+=element.count;
               state.tableData.totalMoney=state.tableData.totalMoney+(element.price*element.count);   
            });
           
      },
       //删除单个商品
      delSingleGoods(state,goods){
        console.log(goods);
       state.tableData=state.tableData.filter(o => o.goodsId !=goods.goodsId);
 
      },
    },
    actions: {
        //typeGoods
        request({commit, state},context){
            Axios.get('http://jspang.com/DemoApi/typeGoods.php')
            .then( response=>{
                console.log(response);
            // console.log(this);
                state.type1Goods=response.data[1];
            
            })
            .catch(error=>{
                console.log(error);
            });
        }  
    }
})
=======
import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    // 变量定义
    state: {
        type0Goods:[
            {
                goodsId:1,
                goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                goodsName:'香辣鸡腿堡',
                price:18
            }, {
                goodsId:2,
                goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                goodsName:'田园鸡腿堡',
                price:15
            }, {
                goodsId:3,
                goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                goodsName:'和风汉堡',
                price:15
            }, {
                goodsId:4,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                goodsName:'快乐全家桶',
                price:80
            }, {
                goodsId:5,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                goodsName:'脆皮炸鸡腿',
                price:10
            }, {
                goodsId:6,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
                goodsName:'魔法鸡块',
                price:20
            }, {
                goodsId:7,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
                goodsName:'可乐大杯',
                price:10
            }, {
                goodsId:8,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
                goodsName:'雪顶咖啡',
                price:18
            }, {
                goodsId:9,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                goodsName:'大块鸡米花',
                price:15
            }, {
                goodsId:20,
                 goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
                goodsName:'香脆鸡柳',
                price:17
            }
            
        ]
    },
    // 变量操作
    getters: {
        type0Goods: state => state.type0Goods
    }
})
>>>>>>> aa39274aab8a4911f263bf957e2f69102f3dd05f
export default store