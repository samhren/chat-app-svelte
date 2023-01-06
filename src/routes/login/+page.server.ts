import { fail, redirect } from '@sveltejs/kit'
import type { Actions } from './$types'
import { AuthApiError } from '@supabase/supabase-js'

export const actions: Actions = {
	login: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())

		if (!body.email || !body.password) {
			return fail(400, {
				error: 'Missing email or password'
			})
		}

		const { data, error: err } = await locals.sb.auth.signInWithPassword({
			email: body.email as string,
			password: body.password as string
		})

		if (err) {
			if (err instanceof AuthApiError) {
				return fail(400, {
					error: err.message
				})
			}
			return fail(500, {
				error: 'Something went wrong'
			})
		}

		throw redirect(303, '/')
	}
}
