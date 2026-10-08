<template>
  <div class="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
    
    <!-- Top Browser Showcase Frame -->
    <div class="bg-gray-100 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-700">
      
      <!-- Mini Browser Window Bar -->
      <div class="flex items-center justify-between px-3.5 py-2 border-b border-gray-200/70 dark:border-gray-800 text-xs">
        <!-- Window Traffic Light Dots -->
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-rose-400 inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block"></span>
          <span class="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block"></span>
        </div>

        <!-- Mini URL Address Bar -->
        <div class="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-[11px] font-mono text-gray-600 dark:text-gray-300 shadow-2xs max-w-[190px] truncate">
          <svg class="w-3 h-3 text-emerald-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
          </svg>
          <span class="truncate">{{ data.domain }}</span>
        </div>

        <!-- Status Pill -->
        <div>
          <span 
            v-if="data.status === 'live'"
            class="inline-flex items-center gap-1 bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800/60 text-[10px] font-bold px-2 py-0.5 rounded-full"
          >
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            LIVE
          </span>
          <span 
            v-else
            class="bg-amber-50 text-amber-700 dark:bg-amber-950/60 dark:text-amber-400 border border-amber-200 dark:border-amber-800/60 text-[10px] font-bold px-2 py-0.5 rounded-full"
          >
            SOON
          </span>
        </div>
      </div>

      <!-- Clickable Home UI Screenshot Container -->
      <component 
        :is="data.status === 'live' ? 'a' : 'div'"
        :href="data.status === 'live' ? data.url : null"
        :target="data.status === 'live' ? '_blank' : null"
        :rel="data.status === 'live' ? 'noopener noreferrer' : null"
        :title="data.status === 'live' ? 'Click to visit ' + data.name + ' (' + data.domain + ')' : data.name + ' - Launching Soon'"
        class="block relative group overflow-hidden bg-slate-900 cursor-pointer aspect-[16/9]"
      >
        <!-- Home UI Screenshot Image -->
        <img 
          class="w-full h-full object-cover object-top transition duration-500 group-hover:scale-105" 
          :src="data.thumbnail" 
          :alt="data.name + ' Home UI - ' + data.domain" 
          loading="lazy"
        />

        <!-- Category Tag Overlay -->
        <span class="absolute top-2.5 left-2.5 z-10 bg-slate-900/80 backdrop-blur text-white text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 rounded shadow">
          {{ data.category }}
        </span>

        <!-- Hover State Overlay with CTA -->
        <div class="absolute inset-0 bg-slate-950/50 backdrop-blur-[1px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-4">
          <div v-if="data.status === 'live'" class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-xl">
            <span>Visit {{ data.name }}</span>
            <svg class="w-3.5 h-3.5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </div>
          <div v-else class="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-500 text-white text-xs font-semibold shadow-xl">
            <span>Coming Soon</span>
          </div>
        </div>
      </component>

    </div>

    <!-- Body Information -->
    <div class="p-5 flex flex-col justify-between flex-grow">
      <div>
        <div class="flex items-baseline justify-between mb-1">
          <h5 class="text-xl font-bold text-gray-900 dark:text-white">
            {{ data.name }}
          </h5>
          <span class="text-xs font-mono text-gray-400">
            {{ data.domain }}
          </span>
        </div>

        <p class="text-xs font-semibold text-primary mb-3">
          {{ data.tagline }}
        </p>

        <!-- Description with Read More toggle -->
        <p 
          class="font-normal text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3"
          :class="showReadMore ? '' : 'line-clamp-3'"
        >
          {{ showReadMore ? data.fullDescription : data.description }}
        </p>

        <!-- Feature List (Shown when Read More is expanded) -->
        <div v-if="showReadMore" class="my-3 pt-3 border-t border-gray-100 dark:border-gray-700">
          <div class="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-2">Key Highlights</div>
          <ul class="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
            <li v-for="(feat, idx) in data.highlights" :key="idx" class="flex items-start gap-1.5">
              <span class="text-emerald-500 font-bold">✓</span>
              <span>{{ feat }}</span>
            </li>
          </ul>
        </div>

        <!-- Tech Stack Tags -->
        <div class="flex flex-wrap gap-1.5 my-3">
          <span 
            v-for="tech in data.techStack" 
            :key="tech" 
            class="px-2 py-0.5 rounded text-[11px] font-mono font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
          >
            {{ tech }}
          </span>
        </div>
      </div>

      <!-- Action Buttons Row -->
      <div class="flex justify-between items-center mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 gap-2 w-full">
        <!-- Button 1: Toggle Details -->
        <button 
          @click="showReadMore = !showReadMore" 
          class="items-center px-3 py-2 text-sm font-medium text-white bg-primary rounded hover:bg-secondary dark:bg-blue-600 w-1/2 text-center transition-colors"
        >
          {{ showReadMore ? 'Read Less' : 'Read More' }}
        </button>

        <!-- Button 2: Direct Backlink / External Live Launch -->
        <template v-if="data.status === 'live'">
          <a 
            :href="data.url" 
            target="_blank" 
            rel="noopener noreferrer" 
            :title="data.backlinkAnchor"
            class="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-white rounded w-1/2 text-center transition-colors"
          >
            <span>Visit Site</span>
            <svg class="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
          </a>
        </template>
        <template v-else>
          <button 
            disabled 
            class="items-center px-3 py-2 text-sm font-medium text-gray-400 border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-gray-800 rounded w-1/2 text-center cursor-not-allowed opacity-60"
          >
            Coming Soon
          </button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCard',
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showReadMore: false
    };
  }
};
</script>
