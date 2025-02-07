<template>
  <div class="min-h-screen bg-gradient-to-br from-pink-200 to-pink-50 p-4">
    <div
      class="container max-w-md mx-auto min-h-screen flex flex-col items-center justify-center gap-6"
    >
      <div class="text-center space-y-2">
        <!-- Title and subtitle -->
        <h1 class="text-3xl font-bold text-pink-600">Pick a date!</h1>
        <p class="text-pink-500 text-sm italic">
          (optional, if u cannot on the 14th jerps)
        </p>
      </div>

      <!-- Calendar component, from Shadcn Vue -->
      <div
        class="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl w-full"
      >
        <Calendar
          v-model="value"
          :weekday-format="'short'"
          class="rounded-lg border-pink-100"
        />

        <!-- Buttons -->
        <div class="mt-6 flex justify-between items-center">
          <button
            @click="handleSkip"
            class="text-pink-500 hover:text-pink-600 transition-colors"
          >
            Skip
          </button>
          <button
            @click="handleNext"
            class="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition-all duration-300 shadow-md"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Calendar } from "@/components/ui/calendar";
import { getLocalTimeZone, parseDate } from "@internationalized/date";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useDateStore } from "~/stores/dateStore";

const router = useRouter();
const dateStore = useDateStore();

// this would make the default date on the calendar to be 14th of February 2025
const value = ref(parseDate("2025-02-14"));

const handleNext = () => {
  // Save the date before navigating
  dateStore.setDate(value.value.toString());
  router.push("/summary");
};

const handleSkip = () => {
  // Set default date when skipping
  dateStore.setDate("2025-02-14");
  router.push("/summary");
};
</script>
