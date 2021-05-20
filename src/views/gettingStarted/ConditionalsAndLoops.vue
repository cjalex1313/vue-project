<template>
  <div>
    <h1>Conditionals and loops</h1>
    <div>
      <h2>Conditionals</h2>
      <div>
        <button @click="showCat = !showCat">Curiosity</button>
        <br/>
        <span v-if="showCat">Now you see the cat</span>
      </div>
    </div>
    <div>
      <h2>Loops</h2>
      <div>
        Some of the cutest cats there are:
        <ol>
          <li v-for="cat in cuteCats" :key="cat">
            {{cat}}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showCat: true,
      cuteCats: ['Misu', 'Fifi', 'Florica'],
    };
  },
};
</script>
