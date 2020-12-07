import { reactive } from "vue"

function removeStudent() {
    let state = reactive({
      student: [
        { id: 1, name: "zs", age: 15 },
        { id: 2, name: "ls", age: 25 },
        { id: 3, name: "ww", age: 35 }
      ]
    })
    //  let stu = ref({id:'', name:'', age:''})
    function deleteStu(index) {
      state.student = state.student.filter((item, idx) => idx !== index)
    }
  
    return { state, deleteStu }
  }

export default removeStudent