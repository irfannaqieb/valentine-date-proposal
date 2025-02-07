<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-200 to-pink-50 p-4">
    <div
      class="container max-w-md mx-auto min-h-screen flex flex-col items-center justify-center gap-6"
    >
      <h1 class="text-3xl font-bold text-pink-500">
        OK! Awak rasa nak makan apa?
      </h1>
      <p class="text-pink-500 text-sm italic">(later can change)</p>

      <!-- Grid of cuisine cards -->
      <div class="grid grid-cols-2 gap-4 w-full">
        <button
          v-for="cuisine in cuisines"
          :key="cuisine.name"
          @click="handleCuisineSelect(cuisine)"
          class="bg-white rounded-lg p-3 shadow-md hover:shadow-lg transition-shadow"
        >
          <img
            :src="cuisine.image"
            :alt="cuisine.name"
            class="w-full h-32 object-cover rounded-md mb-2"
          />
          <p class="text-pink-600 font-medium">{{ cuisine.name }}</p>
        </button>

        <!-- form to add other suggestions -->
        <form @submit.prevent="handleOtherSubmit" class="col-span-2 mt-4">
          <div class="bg-white rounded-lg p-4 shadow-md">
            <label for="other" class="block text-pink-600 font-medium mb-2"
              >Feeling like eating something else..?</label
            >
            <div class="flex flex-col gap-2">
              <div class="flex gap-2">
                <input
                  id="other"
                  v-model="otherCuisine"
                  type="text"
                  placeholder="Apa craving u ni..."
                  class="flex-1 px-3 py-2 border border-pink-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  :class="{ 'border-red-500': showError }"
                />
                <button
                  type="submit"
                  class="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 transition-colors"
                >
                  Go
                </button>
              </div>
              <p v-if="showError" class="text-red-500 text-sm">
                Please enter a cuisine type before proceeding
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDateStore } from "~/stores/dateStore";

const router = useRouter();
const dateStore = useDateStore();

const cuisines = [
  {
    name: "Malaysian",
    image: "/images/malaysian_food.jpg",
  },
  {
    name: "Western",
    image: "/images/western_food.jpg",
  },
  {
    name: "Japanese",
    image: "/images/japanese_food.jpg",
  },
  {
    name: "Korean",
    image: "/images/korean_food.jpg",
  },

  // modify the food as needed, this is just my preferences
];

const otherCuisine = ref("");
const showError = ref(false);

const handleOtherSubmit = () => {
  if (!otherCuisine.value.trim()) {
    showError.value = true;
    return;
  }

  showError.value = false;
  dateStore.setCuisine(otherCuisine.value);
  router.push("/date");
};

const handleCuisineSelect = (cuisine) => {
  dateStore.setCuisine(cuisine);
  router.push("/date");
};
</script>
