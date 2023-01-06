import { createClient } from '@supabase/auth-helpers-sveltekit'
import { env } from '$lib/utils/variables'

export const supabaseClient = createClient(env.PUBLIC_SUPABASE_URL, env.PUBLIC_SUPABASE_ANON_KEY)
