<template>
  <div>
    <h1>Handling user input</h1>
    <div>
      <h2>Listen to events</h2>
      <div>
        The cat says: {{catSays}}
        <br/>
        Click the button to reverse what the cat says:
        <button @click="reverseMessage">Reverse</button>
      </div>
    </div>
    <div>
      <h2>Two-way binding</h2>
      <div>
        If you could make your cat say something, that would be: {{sayWish}}
        <br/>
        <input v-model="sayWish">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      catSays: 'meow',
      sayWish: '',
    };
  },
  methods: {
    reverseMessage() {
      this.catSays = this.catSays.split('')
        .reverse()
        .join('');
    },
  },
};
</script>

<style lang="scss" scoped>
h1 {
  text-align: center;
}
</style>
