<script context="module">
	import Day from '$lib/Day.svelte';

	export const prerender = true;

	export const load = async ({ fetch }) => {
			const response = await fetch('http://localhost:3000/data/days.json');
			const responseJson = await response.json();
			return {
				props: {
					days: responseJson
				}
			}
	}
</script>

<script>

	export let days;

	let currentDate = new Date(2021, 11, 15); // NB TEST DATE
  // let currentDate = new Date();
	let randoms = Array.from({length: 9}, () => Math.floor(Math.random() * 23));
	let colors = [randoms.splice(0,3), randoms.splice(0,3), randoms]
	let date = currentDate.getDate()

	function handleKeydown(event) {
		if (event.key === 'Escape') {
			console.log(event.key, 'todo: close modal')
		}
	}

</script>

<svelte:window on:keydown={handleKeydown}/>

<svelte:head>
	<title>Home</title>
</svelte:head>


<section>
	<!-- <div class="title">
		<h1>Tittel</h1>
	</div> -->
	<div class="calendar-grid">
		{#each days as day}
				<Day date={date} {...day} colors={colors} />
		{/each}
	</div>

</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 1;
	}

	.calendar-grid {
		position: relative;
		display: grid;
		/* grid-gap: 1rem; */
		grid-template-columns: repeat(10, 1fr);
		grid-template-rows: repeat(6, 1fr);
		grid-template-areas:
			"day13 day13 day09 day09 day18 day01 day01 day20 day20 day15"
			"day13 day13 day05 day06 day06 day01 day01 day11 day03 day03"
			"day22 day22 day05 day06 day06 day08 day08 day11 day03 day03"
			"day07 day16 day16 day02 day02 day19 day14 day14 day21 day21"
			"day24 day24 day17 day02 day02 day04 day04 day23 day21 day21"
			"day24 day24 day17 day12 day12 day04 day04 day23 day10 day10";
	}
	</style>
