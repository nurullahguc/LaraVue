<template>
  <main>
    <!--  Heading -->
    <header>
      <img src="./assets/pinia-logo.svg" alt="pinia logo">
      <h1>Pinia Task Store</h1>
    </header>
    <!-- new task form-->
    <div class="new-task-form">
      <TaskForm></TaskForm>
    </div>
    <!-- filter -->
    <nav class="filter">
      <button @click="filter = 'all'">All Tasks</button>
      <button @click="filter = 'favs'">Favorite Tasks</button>
    </nav>

    <!-- loading -->
    <div class="loading" v-if="loading">Loading Tasks...</div>
    <!-- Task List-->
    <div class="task-list" v-if="filter === 'all'">
      <p>You have {{ totalCount }} task left to do</p>
      <div v-for="task in tasks">
        <TaskDetails :task="task"/>
      </div>
    </div>
    <div class="task-list" v-if="filter === 'favs'">
      <p>You have {{ favCount }} favs left to do</p>
      <div v-for="task in favs">
        <TaskDetails :task="task"/>
      </div>
    </div>

    <button @click="taskStore.$reset">reset state</button>

  </main>
</template>

<script setup>
import {useTaskStore} from "./stores/TaskStore";
import TaskDetails from "@/components/TaskDetails.vue";
import TaskForm from "@/components/TaskForm.vue";
import {storeToRefs} from "pinia"

import {ref} from "vue";

const taskStore = useTaskStore()

const {tasks, loading, favs, totalCount, favCount} = storeToRefs(taskStore)

// fetch tasks
taskStore.getTasks()

const filter = ref('all')

</script>

<style scoped>

</style>