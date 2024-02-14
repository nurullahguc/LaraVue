<template>
  <div class="task">
    <h3>{{ props.task.title }} asdf</h3>
    <div class="icons">
      <i class="material-icons">delete</i>
      <i class="material-icons">favorite</i>
    </div>
  </div>
</template>

<script setup>
import {defineProps, reactive} from "vue";

const props = defineProps(['task'])


</script>