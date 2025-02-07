<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-200 to-pink-50 p-4">
    <div
      class="container mx-auto min-h-screen flex flex-col items-center justify-center"
    >
      <div class="animate-bounce-slow">
        <img
          src="https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExbGFnM3ExYjJrdmZidmRxY2M1aWZjMmM3OGhoYXlzd3Nxa3A4YWptcSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tpVKvAabWt3G5csMkT/giphy.gif"
          alt="gif"
          class="rounded-sm shadow-lg w-full max-w-[150px] md:max-w-[200px] mx-auto"
        />
      </div>
      <div class="text-center space-y-4 mt-10">
        <h1 class="text-2xl md:text-3xl font-bold text-pink-500">
          Valentine's Day is set! See you there! 💝
        </h1>
        <p class="text-xl text-pink-600">
          Nanti kita makan
          <span class="font-bold">{{ dateStore.selectedCuisine }}</span> food
          {{ dateStore.isCustomCuisine ? "(Your special choice! 😊)" : "" }}
        </p>
        <p class="text-xl text-pink-600">
          on
          <span class="font-bold">{{
            formatDate(dateStore.selectedDate || "2025-02-14")
          }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDateStore } from "~/stores/dateStore";

const dateStore = useDateStore();

// Helper function to format the date nicely
const formatDate = (dateStr) => {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
</script>
