<script>
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
</script>

<!-- <Header /> -->

<main>
	<slot />
</main>

<style>
	main {
		background-color: pink;
		min-width: 100vw;
		min-height: 100vh;
		/* flex: 1;
		display: flex;
		flex-direction: column;
		width: 100vw;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box; */
	}

	/* footer {
		display: flex;
		flex-direction: column;
		justify-content: stretch;
		align-items: stretch;
	} */

</style>
