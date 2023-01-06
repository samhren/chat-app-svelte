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
	<h1>Login</h1>
	<form action="?/login" method="POST">
		<label for=""> Email </label>
		<input type="text" name="email" />
		<label for=""> Password </label>
		<input type="password" name="password" />
		<button>Login</button>
	</form>
	<form action="/login/github" method="POST">
		<button type="submit">Sign in with Github</button>
	</form>
</main>
