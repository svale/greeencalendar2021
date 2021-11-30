<script>
	import { page } from '$app/stores';
	import logo from './svelte-logo.svg';
</script>

<header>
	<div class="corner">
		N
	</div>

	<div class="corner">
		<!-- TODO put something else here? github link? -->
	</div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 2em;
		height: 1em;
		padding: 1rem;
	}


</style>
