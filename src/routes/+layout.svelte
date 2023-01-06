<script>
	// CSS
	import '../global.css'

	/**
	 * Svelte
	 */
	import { onMount } from 'svelte'

	/**
	 * Supabase
	 */
	import { supabaseClient } from '$lib/supabase/supabaseClient'
	import { invalidate } from '$app/navigation'

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidate('supabase:auth')
		})

		return () => {
			subscription.unsubscribe()
		}
	})
</script>

<slot />
