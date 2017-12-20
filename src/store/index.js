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
export default store