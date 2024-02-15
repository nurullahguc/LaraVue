<template>
  <div class="task">
    <h3>{{ props.task.title }}</h3>
    <div class="icons">
      <i
          @click="taskStore.deleteTask(props.task.id)"
          class="material-icons">delete</i>
      <i
          @click="taskStore.toggleFav(props.task.id)"
          class="material-icons"
          :class="{active: task.isFav}">favorite</i>
    </div>
  </div>
</template>

<script setup>
import {defineProps, reactive} from "vue";
import {useTaskStore} from "@/stores/TaskStore.js";

const props = defineProps(['task'])
const taskStore = useTaskStore()


</script>