/* 🏛️ Skara.js Styles - Ancient meets Modern with Tailwind-safe utilities */

@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply text-white font-sans min-h-screen;
    background-image: linear-gradient(
      to bottom right,
      theme('colors.skara.900', #0c4a6e),
      theme('colors.ancient.900', #701a75),
      theme('colors.skara.700', #0369a1)
    );
    background-attachment: fixed;
  }

  * {
    @apply box-border;
  }
}

@layer components {
  .glass-card {
    @apply bg-white/10 backdrop-blur-md border border-white/20 rounded-xl shadow-2xl p-6;
    @apply transition-all duration-300 hover:bg-white/15 hover:shadow-3xl;
  }

  .neon-button {
    @apply px-6 py-3 rounded-lg font-semibold transition-all duration-300 cursor-pointer;
    @apply bg-gradient-to-r from-skara-400 to-ancient-400 hover:from-skara-300 hover:to-ancient-300;
    @apply shadow-lg hover:shadow-skara-400/25 hover:scale-105 active:scale-95;
    @apply border border-skara-400/30 hover:border-ancient-400/50;
    @apply text-white hover:text-white;
  }

  .ancient-text {
    @apply bg-gradient-to-r from-ancient-200 via-ancient-300 to-ancient-200 bg-clip-text text-transparent;
    @apply font-bold tracking-wide text-shadow;
  }

  .floating-card {
    @apply transform transition-all duration-500 hover:scale-105 hover:-translate-y-2;
    @apply hover:shadow-2xl hover:shadow-skara-500/20;
  }

  .cyber-border {
    @apply relative p-0.5 rounded-lg overflow-hidden;
    background: linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899);
  }

  .cyber-border-inner {
    @apply bg-gray-900/90 backdrop-blur-sm rounded-md p-4 h-full w-full;
  }

  .hero-title {
    @apply text-6xl md:text-8xl font-black text-center mb-8;
    @apply bg-gradient-to-r from-skara-400 via-ancient-400 to-ancient-300 bg-clip-text text-transparent;
    @apply animate-pulse;
    text-shadow: 0 0 30px rgba(139, 92, 246, 0.5);
  }

  .feature-grid {
    @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto;
  }

  .feature-card {
    @apply glass-card floating-card text-center;
  }

  .feature-icon {
    @apply text-4xl mb-4 block;
    filter: drop-shadow(0 0 10px currentColor);
  }

  .demo-section {
    @apply glass-card max-w-md mx-auto text-center;
  }

  .counter-display {
    @apply text-4xl font-bold mb-4 text-skara-400;
    text-shadow: 0 0 20px currentColor;
  }

  .button-group {
    @apply flex gap-4 justify-center flex-wrap;
  }

  .todo-input {
    @apply w-full p-3 rounded-lg bg-white/10 border border-white/20;
    @apply text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-skara-400;
    @apply backdrop-blur-sm;
  }

  .todo-list {
    @apply space-y-2 mt-4 max-h-40 overflow-y-auto;
  }

  .todo-item {
    @apply flex items-center justify-between p-2 bg-white/5 rounded-lg;
    @apply border border-white/10 hover:bg-white/10 transition-colors;
  }

  .timer-display {
    @apply text-3xl font-mono font-bold text-ancient-400 mb-4;
    text-shadow: 0 0 15px currentColor;
  }

  .progress-bar {
    @apply w-full h-2 bg-white/20 rounded-full overflow-hidden mb-4;
  }

  .progress-fill {
    @apply h-full transition-all duration-1000;
    background-image: linear-gradient(
      to right,
      theme('colors.skara.400', #38bdf8),
      theme('colors.ancient.400', #e879f9)
    );
    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
  }
}

@layer utilities {
  .text-shadow {
    text-shadow: 0 2px 4px rgba(0,0,0,0.3);
  }

  .text-glow {
    text-shadow: 0 0 10px currentColor;
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animate-glow {
    animation: glow 2s ease-in-out infinite alternate;
  }
}

@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}

@keyframes glow {
  0% { box-shadow: 0 0 5px rgb(59 130 246 / 0.5); }
  100% { box-shadow: 0 0 20px rgb(59 130 246 / 0.8), 0 0 30px rgb(59 130 246 / 0.4); }
}

/* Custom scrollbar */
::-webkit-scrollbar {
  @apply w-2;
}

::-webkit-scrollbar-track {
  @apply bg-white/10 rounded-full;
}

::-webkit-scrollbar-thumb {
  @apply rounded-full;
  background-image: linear-gradient(
    to bottom,
    theme('colors.skara.400', #38bdf8),
    theme('colors.ancient.400', #e879f9)
  );
}

::-webkit-scrollbar-thumb:hover {
  background-image: linear-gradient(
    to bottom,
    theme('colors.skara.300', #7dd3fc),
    theme('colors.ancient.300', #f0abfc)
  );
}
