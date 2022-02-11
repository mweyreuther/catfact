<template>
  <button
    class="
      w-60
      m-4
      border-blue-500 border-2
      text-blue-200
      rounded
      block
      px-4
      py-2
      transition
      duration-100
      ease-in-out
      focus:border-blue-500
      focus:ring-2
      focus:outline-none
      focus:ring-opacity-50
    "
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    keepRunning: Boolean,
  },
  computed: {
    text() {
      return this.keepRunning ? 'stop blowing my mind' : 'blow my mind';
    },
  },
};
</script>
