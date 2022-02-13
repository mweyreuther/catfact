<template>
  <div
    id="app"
    class="
      relative
      h-screen
      grid
      place-items-center
      bg-gradient-to-tr
      from-blue-500
      to-blue-700
    "
  >
    <header class="fixed top-0 left-0 right-0 flex justify-center bg-white/10">
      <Button @click="toggleRun" :keepRunning="keepRunning" />
    </header>
    <div class="mx-8 my-20 max-w-prose">
      <Fact :keepRunning="keepRunning" />
    </div>
  </div>
</template>

<script>
import Button from './components/Button.vue';
import Fact from './components/Fact.vue';

export default {
  name: 'App',
  components: {
    Button,
    Fact,
  },
  data() {
    return {
      keepRunning: true,
    };
  },
  methods: {
    toggleRun() {
      this.keepRunning = !this.keepRunning;
    },
  },
};
</script>
