import { error, redirect, type RequestHandler } from '@sveltejs/kit'

export const POST: RequestHandler = async ({ locals }) => {
	const { data, error: err } = await locals.sb.auth.signInWithOAuth({
		provider: 'github'
	})

	if (err) {
		throw error(500, 'Something went wrong logging in with GitHub')
	}
	throw redirect(303, data.url)
}
