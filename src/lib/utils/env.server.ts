import { z } from 'zod';
import * as privateEnv from '$env/static/private';

/**
 * To use any type besides string, you need to use zod's `coerce` method.
 */

const schema = z.object({
	// Add your private env variables here
});

const parsed = schema.safeParse(privateEnv);

if (!parsed.success) {
	console.error(
		'❌ Invalid environment variables:',
		JSON.stringify(parsed.error.format(), null, 4)
	);
	process.exit(1);
}

export const env = parsed.data;
