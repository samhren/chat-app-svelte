<script lang="ts">
	import type { ActionData } from './$types'

	export let form: ActionData
</script>

{#if form && form.error}
	<div class="error">
		{form.error}
	</div>
{/if}

<main>
	<h1>Register</h1>
	<form action="?/register" method="POST">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button>Register</button>
	</form>
</main>
