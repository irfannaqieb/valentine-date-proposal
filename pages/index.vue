<template>
  <div
    class="min-h-screen bg-gradient-to-br from-red-50 via-pink-100 to-purple-100 p-4 relative"
  >
    <div
      class="absolute inset-0 bg-gradient-to-t from-white/0 via-pink-100/30 to-rose-100/30 pointer-events-none"
    ></div>
    <div
      class="container mx-auto min-h-screen flex flex-col items-center justify-center relative"
    >
      <h1 class="text-3xl font-bold text-pink-500 mb-8">Hello awak busuk!</h1>

      <div
        class="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-8 shadow-xl space-y-6 md:space-y-8 w-full max-w-sm md:max-w-md mx-4"
      >
        <!-- Image/Gif, replace with whatever you like -->
        <div class="animate-bounce-slow">
          <img
            :src="currentGif"
            alt="gif"
            class="rounded-sm shadow-lg w-full max-w-[150px] md:max-w-[200px] mx-auto"
          />
        </div>

        <!-- the main question -->
        <h1 class="text-xl md:text-2xl font-bold text-pink-500 text-center">
          Will you be my Valentine?
        </h1>

        <!-- Yes/No buttons -->
        <div
          class="flex justify-center items-center gap-4 md:gap-8 min-h-[80px] md:min-h-[100px] w-full"
        >
          <div class="flex-1 flex justify-end">
            <button
              @click="handleYesClick"
              :style="{ transform: `scale(${buttonSize})` }"
              class="px-6 md:px-8 py-2 md:py-3 bg-pink-500 text-white rounded-full hover:bg-pink-400 transition-all duration-300 shadow-md text-sm md:text-base"
            >
              Yes 💖
            </button>
          </div>
          <div class="flex-1 flex justify-start">
            <button
              @click="handleNoClick"
              class="px-6 md:px-8 py-2 md:py-3 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-all duration-300 shadow-md text-sm md:text-base"
            >
              No 😢
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

const router = useRouter();
const buttonSize = ref(1);
const currentGifIndex = ref(-1); // Start with -1 to show initial gif

const initialGif =
  "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExNW0zMnRoNW12MGw3dDcyd3Vjd2RwdWFuZzV2Y2doZ2ViZHZ4bzJjYyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/VBUkRtVVlDGCFEGCjf/giphy.gif";

const sadGifs = [
  "https://media.giphy.com/media/ISOckXUybVfQ4/giphy.gif?cid=ecf05e47mapdnzze8zx8p68vrrt477gokr0uqd047qrueq1k&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXR3azJ1cDM1NTF2b3QxYzV2ODUzZTBlNmo5MzI1dzdtbWl3aHUyayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/OPU6wzx8JrHna/giphy.gif",
  "https://media.giphy.com/media/qQdL532ZANbjy/giphy.gif?cid=ecf05e47b23njdvr78c2n8e8rvucb829sp4w0yhgcxlyfcu3&ep=v1_gifs_related&rid=giphy.gif&ct=g",
  "https://media.giphy.com/media/gfsQffBnuc6e096brx/giphy.gif?cid=ecf05e47mapdnzze8zx8p68vrrt477gokr0uqd047qrueq1k&ep=v1_gifs_related&rid=giphy.gif&ct=g",
];

const currentGif = computed(() => {
  // If currentGifIndex is -1, show the initial gif
  if (currentGifIndex.value === -1) {
    return initialGif;
  }
  // Otherwise show one of the sad gifs
  return sadGifs[currentGifIndex.value];
});

const handleYesClick = async () => {
  // Navigate and end transition
  await router.push("/cuisine");
};

const handleNoClick = () => {
  buttonSize.value += 0.2;

  // If we're still showing the initial gif, start the sad gifs cycle
  if (currentGifIndex.value === -1) {
    currentGifIndex.value = 0;
  } else {
    // Cycle through sad gifs
    currentGifIndex.value = (currentGifIndex.value + 1) % sadGifs.length;
  }
};
</script>
