<template>
  <main>
    <!--  Heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Task Store</h1>
    </header>

    <!-- Task List-->
    <div class="task-list">
      <p>all tasks</p>
      <div v-for="task in taskStore.tasks">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list">
      <p>fav tasks</p>
      <div v-for="task in taskStore.favs">
        <TaskDetails :task="task"/>
      </div>
    </div>

  </main>
</template>

<script setup>
import {useTaskStore} from "./stores/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";

const taskStore = useTaskStore()


</script>

<style scoped>

</style>