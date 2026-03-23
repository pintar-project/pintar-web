import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ locals }: ServerLoadEvent) => {
	const userRole = locals.userRole || null;

	return {
		userRole
	};
};