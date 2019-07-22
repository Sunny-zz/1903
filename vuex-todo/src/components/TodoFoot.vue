<template>
  <div>
    <span>{{$store.getters.activeNum}} item left</span>
    <div>
      <button @click="changeType('all')" :class=" type==='all' ?'active' : ''">all</button>
      <button @click="changeType('active')" :class=" type==='active' ?'active' : ''">active</button>
      <button @click="changeType('completed')" :class=" type==='completed' ?'active' : ''">completed</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "todofoot",
  computed: {
    ...mapState({
      type: state => state.filter.type
    })
  },
  methods: {
    ...mapMutations(["changeType"])
  }
};
</script>

<style>
.active {
  background-color: red;
}
</style>
