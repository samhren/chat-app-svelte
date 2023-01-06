import { AuthApiError } from '@supabase/supabase-js'
import type { Actions } from './$types'
import { fail, redirect } from '@sveltejs/kit'

export const actions: Actions = {
	register: async ({ request, locals }) => {
		const body = Object.fromEntries(await request.formData())

		// Validate the data
		if (!body.email || !body.password) {
			return fail(400, {
				error: 'Email and password are required'
			})
		}

		const { data, error: err } = await locals.sb.auth.signUp({
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
				error: 'Something went wrong. Please try again later.'
			})
		}

		throw redirect(303, '/login')
	}
}
