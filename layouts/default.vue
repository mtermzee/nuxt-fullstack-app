<template>
	<div class="flex flex-col min-h-screen">
		<NavAppHeader />

		<main>
			<slot />
		</main>

		<div class="flex-1"></div>

		<NavAppFooter />
	</div>
</template>
