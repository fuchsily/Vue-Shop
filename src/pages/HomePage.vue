<template>
  <TheTwoColumnsLayout
    :leftColumnsClass="'col-md-8 bg-vue'"
    :rightColumnsClass="'col-md-4'"
    :fullsize="true"
  >
  <template #leftCol>
    <div class="mt-5-text-center">
        <div class="display-1 my-5">
            <display-4 class="my-5">
                Erhalten Sie Zugriff auf exklusive Artikel
            </display-4>
        </div>
        <div class="my-5 offset-4 col-4">
            <img src="@/assets/shopping.svg" class="img-fluid">
        </div>
    </div>
  </template>
  <template #rightCol></template>
  </TheTwoColumnsLayout>
</template>

<script>
import TheTwoColumnsLayout from "../layouts/TheTwoColumnsLayout.vue";
export default {
  name: "HomePage",
  components: {
    TheTwoColumnsLayout,
  },
};
</script>

<style scoped></style>
