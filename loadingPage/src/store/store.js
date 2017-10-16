import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var store = new Vuex.Store({
    state:{
        navData:null,
        state:false,
        allData:null
    },
    actions:{
        getAllData({commit}){
            var getNav = ()=>{
                return new Promise((resolve,reject)=>{
                    this.axios("/api/getNavData").then(data=>{
                        commit("getNavData_m",data.data.data);
                        resolve()
                    })
                })
            }
            var getAllData = ()=>{
                return new Promise((resolve,reject)=>{
                    this.axios("/api/getArticleAll").then(data=>{
                        commit("getAllData_m",data.data.data);
                        resolve()
                    })
                })
            }
            return {
                getNav,
                getAllData
            }
        },
        ok({dispatch,commit},fn){
            dispatch("getAllData").then(data=>{
               Promise.all([data.getNav(),data.getAllData()]).then((data)=>{
                    new Promise((resolve,reject)=>{
                        resolve(123)
                    }).then(data=>{
                        commit("changeState_m",true);
                    })
                    fn();
               })
            })
        }
    },
    mutations:{
        getAllData_m(state,data){
            state.allData = data;
        },
        getNavData_m(state,data){
            state.navData = data;
        },
        changeState_m(state,data){
            state.state = data;
        }
    }
})
export default store