<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" placeholder="I need to..." v-model="newTask">
    <button>Add</button>
  </form>
</template>

<script>
import {ref} from "vue";
import {useTaskStore} from "@/stores/TaskStore.js";

export default {
  setup() {
    const taskStore = useTaskStore()
    const newTask = ref('')


    const handleSubmit = () => {
      if (!newTask.value)
        return false

      taskStore.addTask({
        title: newTask.value,
        isFav: false,
        id: Math.floor(Math.random() * 10000).toString()
      })
      newTask.value = ''
    }

    return {
      newTask,
      handleSubmit
    }


  }
}


</script>

<style scoped>

</style>