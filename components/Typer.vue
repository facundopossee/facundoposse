<template>
  <vue-typer
  class="content-line"
    :text="text"
    :repeat="repeat"
    :pre-erase-delay="preerasedelay"
    :erase-style="erasestyle"
    :caret-animation="caretanimation"
    :pre-type-delay="pretypedelay"
    @completed="$emit('completed')"
    @typed="$emit('typed')"
  ></vue-typer>
</template>

<script>
import { VueTyper } from "vue-typer";
export default {
  name: "Typer",
  props: {
    text: Array,
    repeat: Array,
    preerasedelay: Array,
    erasestyle: Array,
    caretanimation: Array,
    pretypedelay: Array,
  },
  components: {
    VueTyper,
  },
};
</script>
