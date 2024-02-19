<script lang="ts">
	import { enhance } from '$app/forms';
	import { fly } from 'svelte/transition';
	import '../app.css';
	import { onDestroy, onMount } from 'svelte';

	// const generateObjectWithAspectRatio = (width, height) => ({ width, height });

	// const newArray = [];
	// for (let i = 0; i < 24; i++) {
	// 	// Determine the aspect ratio based on the current phase in the pattern
	// 	// The pattern repeats every 4 iterations: two with 16:9, followed by two with 9:16
	// 	const isSixteenNine = Math.floor(i / 2) % 2 === 0; // This toggles every two iterations
	// 	if (isSixteenNine) {
	// 		newArray.push({ aspectRatio: '16:9' });
	// 	} else {
	// 		newArray.push({ aspectRatio: '9:16' });
	// 	}
	// }

	onMount(() => {
		const syncPointer = ({ x: pointerX, y: pointerY }) => {
			const x = pointerX.toFixed(2);
			const y = pointerY.toFixed(2);
			const xp = (pointerX / window.innerWidth).toFixed(2);
			const yp = (pointerY / window.innerHeight).toFixed(2);
			document.documentElement.style.setProperty('--x', x);
			document.documentElement.style.setProperty('--xp', xp);
			document.documentElement.style.setProperty('--y', y);
			document.documentElement.style.setProperty('--yp', yp);
		};
		document.body.addEventListener('pointermove', syncPointer);
	});

	const videos = [
		{
			title: 'video 1',
			length: '0:53',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 2',
			length: '1:30',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 3',
			length: '2:15',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/moonmax.jpeg'
		},
		{
			title: 'video 4',
			length: '3:45',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 5',
			length: '4:20',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 6',
			length: '5:00',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/e.png'
		},
		{
			title: 'video 1',
			length: '0:53',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 2',
			length: '1:30',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 3',
			length: '2:15',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/moonmax.jpeg'
		},
		{
			title: 'video 4',
			length: '3:45',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 5',
			length: '4:20',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 6',
			length: '5:00',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/e.png'
		},
		{
			title: 'video 1',
			length: '0:53',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 2',
			length: '1:30',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 3',
			length: '2:15',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/moonmax.jpeg'
		},
		{
			title: 'video 4',
			length: '3:45',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 5',
			length: '4:20',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 6',
			length: '5:00',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/e.png'
		},
		{
			title: 'video 1',
			length: '0:53',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 2',
			length: '1:30',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 3',
			length: '2:15',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/moonmax.jpeg'
		},
		{
			title: 'video 4',
			length: '3:45',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 5',
			length: '4:20',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 6',
			length: '5:00',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/e.png'
		},
		{
			title: 'video 1',
			length: '0:53',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 2',
			length: '1:30',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 3',
			length: '2:15',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/moonmax.jpeg'
		},
		{
			title: 'video 4',
			length: '3:45',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 5',
			length: '4:20',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 6',
			length: '5:00',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/e.png'
		},
		{
			title: 'video 1',
			length: '0:53',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 2',
			length: '1:30',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 3',
			length: '2:15',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/moonmax.jpeg'
		},
		{
			title: 'video 4',
			length: '3:45',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 5',
			length: '4:20',
			createdAt: new Date(),
			aspectRatio: '9:16',
			cover: '/video1_cover.png'
		},
		{
			title: 'video 6',
			length: '5:00',
			createdAt: new Date(),
			aspectRatio: '16:9',
			cover: '/e.png'
		}
	];

	let emailSubmittedSuccess = false;
	let signupFail: any;
</script>

<svelte:head>
	<link rel="preload" href="/WOLFES.otf" as="font" type="font/otf" crossorigin="anonymous" />
</svelte:head>

<div class="flex gap-1 md:gap-2 items-center overflow-hidden justify-center relative w-full h-full">
	<div
		class="grid columns- pb-48 w-full aspect-square_ gap-1 md:gap-2 max-h-screen overflow-hidden grid-flow-dense grid-cols-4 relative"
	>
		{#each videos as item}
			<div
				class="rounded-lg bg-zinc-900 flex group overflow-hidden relative {item.aspectRatio ===
				'16:9'
					? 'aspect-16-9 aspect-[16/9]'
					: 'aspect-9-16 col-span-1 aspect-[9/16]'}"
			>
				<div
					class="absolute z-10 clippath opacity-0 backdrop-blur-sm transition-opacity bg-black bg-opacity-0 h-full w-full"
				></div>

				<img class=" opacity-0 duration-700 relative transition-transform" alt="" />
			</div>
		{/each}
	</div>
	<div
		class="grid columns- pb-48 w-full aspect-square_ gap-1 md:gap-2 max-h-screen overflow-hidden grid-flow-dense grid-cols-4 relative"
	>
		{#each videos as item}
			<div
				class="rounded-lg bg-zinc-900 flex group overflow-hidden_ relative {item.aspectRatio ===
				'16:9'
					? 'aspect-16-9 aspect-[16/9]'
					: 'aspect-9-16 col-span-1 aspect-[9/16]'}"
			>
				<div
					class="absolute z-10 clippath opacity-0 backdrop-blur-sm transition-opacity bg-black bg-opacity-0 h-full w-full"
				></div>

				<img alt="placeholder" class=" opacity-0 duration-700 relative transition-transform" />
			</div>
		{/each}
	</div>

	<div class=" flex flex-col space-y-3 justify-center items-center absolute z-20">
		<div class="text-white select-none fonto opacity-25 text-[15vw] md:text-9xl">GenFlix</div>

		{#if !emailSubmittedSuccess}
			<form
				class:!outline-red-700={signupFail}
				class:!outline={signupFail}
				use:enhance={(ev) => {
					return async ({ result, update }) => {
						console.log(result);
						if (result.type === 'success') emailSubmittedSuccess = true;
						if (result.type === 'failure') signupFail = result?.data.message;

						signupFail.length = 0;
						// `result` is an `ActionResult` object
						// `update` is a function which triggers the default logic that would be triggered if this callback wasn't set
					};
				}}
				method="POST"
				action=""
				class="relative shadow-sm shadow-black gap-2 flex w-full md:w-[70%] bg-zinc-800 justify-center items-center rounded-lg p-2"
			>
				<input
					name="email"
					class="w-full z-10 !outline-transparent focus-visible:outline-none !ring-0 ring-transparent border-0 !appearance-none autofill:!bg-transparent rounded-lg !bg-transparent"
					type="text"
				/>

				<button
					class="hover:scale-105 z-10 transition-all text-zinc-200 hover:text-white right-2 bg-zinc-800 px-2 py-1 text-sm rounded-lg"
				>
					signup
				</button>
			</form>
			{#if signupFail}
				{signupFail}
			{/if}
		{:else}
			<div class="fonto" in:fly={{ opacity: 0, duration: 500 }}>Thanks for signing up</div>
		{/if}
	</div>
</div>

<div
	class="fixed bottom-0 via-zinc-950 via-40% bg-gradient-to-t from-zinc-950 to-transparent h-[90vh] w-full"
></div>

<style>
	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	textarea:-webkit-autofill,
	textarea:-webkit-autofill:hover,
	textarea:-webkit-autofill:focus,
	select:-webkit-autofill,
	select:-webkit-autofill:hover,
	select:-webkit-autofill:focus {
		-webkit-text-fill-color: whitesmoke;
		-webkit-box-shadow: 0 0 0px 1000px #000 inset;
		transition: background-color 5000s ease-in-out 0s;
	}

	@font-face {
		font-family: 'WolvesVsMonster';
		src: url('/WOLFES.otf') format('opentype');
	}
	.fonto {
		font-family: 'WolvesVsMonster', sans-serif;
	}
	li {
		list-style-type: none;
		/* 
		box-shadow:
			0.3px 0.5px 0.7px hsl(0deg 0% 0% / 0.36),
			0.8px 1.6px 2px -0.8px hsl(0deg 0% 0% / 0.36),
			2.1px 4.1px 5.2px -1.7px hsl(0deg 0% 0% / 0.36),
			5px 10px 12.6px -2.5px hsl(0deg 0% 0% / 0.36); */
	}
	.aspect-16-9 img,
	.aspect-9-16 img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		border-radius: inherit;
	}

	.aspect-16-9 img {
		aspect-ratio: 16 / 9;
	}

	.aspect-9-16 img {
		aspect-ratio: 9 / 16;
	}

	div.aspect-16-9 {
		grid-column: span 2;
		/* aspect-ratio: 16 / 9; */
	}

	div.aspect-9-16 {
		grid-row: span 2;
		/* aspect-ratio: 9 / 16; */
	}

	/* Glow effect by jhey */
	*,
	*:after,
	*:before {
		box-sizing: border-box;
	}

	:root {
		--x: 0;
		--y: 0;
		--xp: 0;
		--yp: 0;
		--bg: hsl(0 0% 10%);
		--size: 900px;
		--hue: calc(75 + (var(--xp) * 30)); /* Adjusts the hue range from 75° to 105° */
		--glow: radial-gradient(
				50% 50% at center,
				hsl(var(--hue) 80% 85%),
				hsl(var(--hue) 80% 70%),
				transparent
			)
			calc((var(--x) * 1px) - (var(--size) * 0.5)) calc((var(--y) * 1px) - (var(--size) * 0.5)) /
			var(--size) var(--size) no-repeat fixed;

		/* --hue: calc(0 + (var(--xp) * 500));
		--glow: radial-gradient(
				50% 50% at center,
				hsl(var(--hue) 80% 85%),
				hsl(var(--hue) 80% 70%),
				transparent
			)
			calc((var(--x) * 1px) - (var(--size) * 0.5)) calc((var(--y) * 1px) - (var(--size) * 0.5)) /
			var(--size) var(--size) no-repeat fixed; */
	}

	form {
		border: 2px solid transparent;
		transition: background-size 0.24s;
		touch-action: none;
		position: relative;
	}

	form::before {
		content: '';
		position: absolute;
		inset: 0;
		background: var(--bg);
		z-index: 2;
		border: 4px solid transparent;
		border-radius: 0.5rem;
	}

	form {
		background: var(--glow), black;
		z-index: 2;
		position: relative;
		inset: 0;
	}

	:root:has(form) {
		--size: 200px;
	}

	form::after {
		content: '';
		position: absolute;
		inset: -8px;
		filter: blur(20px);
		border: 14px solid transparent;
		background: var(--glow);
		border-radius: 0.5rem;
	}
</style>
