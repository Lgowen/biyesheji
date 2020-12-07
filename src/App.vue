<template>
  <div>
    <form>
         <input type="text" v-model="state2.stu.id">
         <input type="text" v-model="state2.stu.name">
         <input type="text" v-model="state2.stu.age">
         <input type="submit" @click="addStu">
      </form>
    <ul>
      <li
        v-for="(item, index) in state.student"
        :key="item.id"
        @click="deleteStu(index)"
      >
        {{ item.name }} -- {{ item.age }}
      </li>
    </ul>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { reactive } from "vue";
import removeStudent from '../src/student/removeStu'
import addStudent from '../src/student/addStu'

export default {
  name: "App",
  // 组合API的入口函数
  setup() {
    // ref函数只适用于简单数据类型
    // reactive适用于复杂数据类型
    let {state, deleteStu} = removeStudent()
    let {state2, addStu} = addStudent(state)
    return { state, deleteStu, state2, addStu }
  }
}

// 抽取学生数据和相关业务逻辑
</script>
