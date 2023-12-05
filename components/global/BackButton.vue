<template>
    <div>
        <button @click="$router.back()"
            class="flex items-center justify-center w-10 h-10 mr-2 text-gray-700 transition-colors duration-150 bg-gray-200 rounded-full focus:outline-none hover:bg-gray-300">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
            </svg>
        </button>
    </div>
</template>