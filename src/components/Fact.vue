<template>
  <div
    class="
      backdrop-blur-md
      bg-blue-200/30
      text-yellow-200
      p-8
      rounded-lg
      shadow
      transition
      duration-1000
      scale-100
    "
    :class="{ 'opacity-40 scale-95': isLoading }"
  >
    {{ text }}
  </div>
</template>

<script>
import axios from 'axios';
import { sleep } from '../utils.js';
export default {
  name: 'HelloWorld',
  props: {
    keepRunning: Boolean,
  },
  data() {
    return {
      fact: '',
      url: 'https://catfact.ninja/fact',
      isLoading: false,
      error: null,
    };
  },

  computed: {
    text() {
      if (this.error) return 'something went wrong 🤷';
      return this.fact || 'looking for facts ...';
    },
  },

  watch: {
    keepRunning: {
      handler(newValue) {
        if (newValue) this.loadFact();
      },
      immediate: true,
    },
  },

  methods: {
    async loadFact() {
      if (this.isLoading || !this.keepRunning) return;
      try {
        this.isLoading = true;
        await sleep(1000);
        const { data } = await axios.get(this.url);
        // console.log(data);
        this.isLoading = false;
        this.fact = data.fact;

        if (this.keepRunning) {
          await sleep(5000);
          this.loadFact();
        }
      } catch (error) {
        vm.isLoading = false;
        vm.error = error;
      }
    },
  },
};
</script>
