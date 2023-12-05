<template>
	<div class="flex flex-col min-h-screen gap-5">
		<NavAppHeader />

		<main class="flex-1">
			<slot />
		</main>

		<NavAppFooter />
	</div>
</template>
