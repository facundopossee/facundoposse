<template>
  <div class="container px-4">
    <div class="pb-6">
      <h1 class="text-6xl font-bold">
        <Typer
          class="text1"
          text="Hello, i'm Facundo!"
          repeat="0"
          preerasedelay="100000"
          erasestyle="backspace"
          caretanimation="smooth"
          pretypedelay="500"
          v-on:completed="startSecond"
        />
      </h1>
      <h1 class="text-4xl font-bold">
        <Typer
          class="text2"
          v-show="show"
          text="A fullstack developer based in Buenos Aires.
I love make and mostly break things coding."
          repeat="1"
          preerasedelay="1000000000"
          erasestyle="backspace"
          caretanimation="smooth"
          pretypedelay="3000"
          v-on:completed="showEmail"
        />
      </h1>
    </div>    
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    };
  },
  methods: {
    startSecond() {
      this.show = true;
    },
  },
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  min-height: 100vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.text1 .custom.char.typed {
  color: #e9e9e9;
}

.text2 .custom.char.typed {
  color: #797979;
}

.vue-typer .custom.caret {
  background-color: #ffffff;
}
</style>
