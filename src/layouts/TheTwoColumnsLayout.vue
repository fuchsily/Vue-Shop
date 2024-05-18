<template>
  <div class="container-fluid" :class="containerClasses">
    <div class="row" :class="rowClasses">
      <div :class="leftColumnsClasses">
        <slot name="leftCol">
          <h1>Linke Spalte</h1>
        </slot>
      </div>
      <div :class="rightColumnsClasses">
        <slot name="rightCol">
          <h1>Rechte Spalte</h1>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheTwoColumnsLayout",
  props: {
    leftColumnsClass: {
      type: String,
      default: "col-md-8",
    },
    rightColumnsClass: {
      type: String,
      default: "col-md-4",
    },
    fullsize: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    leftColumnsClasses() {
      return [this.leftColumnsClass, this.fullsize ? "h-100" : ""];
    },
    rightColumnsClasses() {
      return [this.rightColumnsClass, this.fullsize ? "h-100" : ""];
    },
    rowClasses() {
      return [this.fullsize ? "h-100" : ""]; // Höhe 100%
    },
    containerClasses() {
      return [this.fullsize ? "vh-100" : ""]; // vh bezieht sich auf ViewPort
    },
  },
};
</script>

<style scoped></style>
