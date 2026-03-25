import adapter from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-node supports Node.js environments
		adapter: adapter(),
		alias: {
			"@/*": "./path/to/lib/*",
		},
	}
};

export default config;
