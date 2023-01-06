<script lang="ts">
	import type { PageData } from './$types'

	export let data: PageData
</script>

<main>
	<h1>SvelteKit & Tailwind & Supabase & Prisma & Typescript Starter</h1>
	{#if data.session}
		<p>Welcome {data.session.user.email}</p>
		<form action="/logout" method="POST">
			<button type="submit">Logout</button>
		</form>
	{:else}
		<a href="/login">Login</a>
		<a href="/register">Register</a>
	{/if}
</main>
