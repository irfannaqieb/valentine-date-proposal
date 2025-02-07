import { defineStore } from "pinia";
import { ref } from "vue";

export const useDateStore = defineStore("date", () => {
  const selectedCuisine = ref("");
  const isCustomCuisine = ref(false);
  const selectedDate = ref(null);

  const setCuisine = (cuisine) => {
    if (typeof cuisine === "string") {
      selectedCuisine.value = cuisine;
      isCustomCuisine.value = true;
    } else {
      selectedCuisine.value = cuisine.name;
      isCustomCuisine.value = false;
    }
  };

  const setDate = (date) => {
    selectedDate.value = date;
  };

  return {
    selectedCuisine,
    isCustomCuisine,
    selectedDate,
    setCuisine,
    setDate,
  };
});
