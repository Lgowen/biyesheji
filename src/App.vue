<template>
    <Nav v-if="isHomePage"></Nav>
    <router-view></router-view>
</template>

<script>
import Nav from "./components/nav-component/nav.vue";
import Index from "./views/index.vue"
import { ref, reactive, computed, watch } from "vue"
import { useRoute, useRouter } from 'vue-router'
import { useStore, mapState } from "vuex"
// import removeStudent from '../src/student/removeStu'
// import addStudent from '../src/student/addStu'

export default {
  name: "App",
  // // 组合API的入口函数
  setup() {
    // ref函数只适用于简单数据类型
    // reactive适用于复杂数据类型
    // let {state, deleteStu} = removeStudent()
    // let {state2, addStu} = addStudent(state)
    const store = useStore()
    const ruote = useRoute()
    const isHomePage = computed( () => store.state.isHomePage )
    // console.log(store.state.isHomePage)
    // isHomePage = computed( () => store.state.isHomePage )

    const changeHomePage = isHomePage => store.commit('changeHomePage', isHomePage)
    watch(ruote, ( { path } ) => {
        path === '/' ? changeHomePage(false) : changeHomePage(true)
    })
    // console.log(isHomePage)
    return { isHomePage }
  },
  components: {
    Index,
    Nav,
  },
};

// 抽取学生数据和相关业务逻辑
</script>

<style lang="scss">
// @media screen and (max-width:1200px) {
//     body,html {
//       font-size:15px ;
//     }
// }
// @media screen and (max-width:992px) {
//     body,html {
//       font-size:14px ;
//     }
// }
// @media screen and (max-width:768px) {
//     body,html {
//       font-size:13px ;
//     }
// }
// @media screen and (max-width:576px) {
//     body,html {
//       font-size:12px ;
//     }
// }
// @media screen and (max-width:400px) {
//     body,html {
//       font-size:11px ;
//     }
// }
// html {font-size: 625%; /*100 ÷ 16 × 100% = 625%*/}

// @media screen and (min-width: 320px) and (max-width: 375px) and (min-height: 568px) and (max-height: 667px) and (orientation: portrait) {
//   body,
//   html {
//     font-size: 12px;
//     width: 375px;
//     height: 667px;
//     padding: 10px;
//   }
// }
// @media screen and (min-width: 375px) and (max-width: 383px) and (orientation: portrait) {
//   body,
//   html {
//     font-size: 12px;
//   }
// }
// @media screen and (min-width: 384px) and (max-width: 399px) and (orientation: portrait) {
//   body,
//   html {
//     font-size: 13px;
//   }
// }
// @media screen and (min-width: 400px) and (max-width: 413px) and (orientation: portrait) {
//   body,
//   html {
//     font-size: 14px;
//   }
// }
// @media screen and (min-width: 414px) and (max-width: 431px) and (orientation: portrait) {
//   body,
//   html {
//     font-size: 15px;
//   }
// }
// @media screen and (min-width: 432px) and (max-width: 479px) and (orientation: portrait) {
//   body,
//   html {
//     font-size: 16px;
//   }
// }
</style>
