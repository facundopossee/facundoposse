<template>
  <vue-typer style="cursor:none"
    :text="text"
    :repeat="repeat"
    :pre-erase-delay="preerasedelay"
    :erase-style="erasestyle"
    :caret-animation="caretanimation"
    :pre-type-delay="pretypedelay"
    :cursor="none"
    @completed="$emit('completed')"
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
