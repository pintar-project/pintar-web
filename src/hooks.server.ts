import { redirect, type Handle } from '@sveltejs/kit';
import { env as dynamic_public } from '$env/dynamic/public';
import { env } from '$env/dynamic/private';

export const handle: Handle = async ({ event, resolve }) => {
	const accessToken = event.cookies.get('access_token');
	const { pathname } = event.url;

	const isPublicRoute = pathname === '/login' || pathname === '/register';
	const isProtectedRoute = !isPublicRoute && pathname !== '/';

	let verifiedRole: string | null = null;

	// Clean approach: Server-side priority to Internal URL, fallback to Public
	const apiUrl = env.INTERNAL_API_URL || dynamic_public.PUBLIC_API_URL;

	if (accessToken) {
		try {
			const response = await event.fetch(`${apiUrl}/auth/@me`, {
				headers: {
					Authorization: `Bearer ${accessToken}`
				}
			});

			if (response.ok) {
				const result = await response.json();
				verifiedRole = result.data?.role;

				if (event.cookies.get('user_role') !== verifiedRole && verifiedRole) {
					event.cookies.set('user_role', verifiedRole, { path: '/' });
				}
			} else {
				event.cookies.delete('access_token', { path: '/' });
				event.cookies.delete('user_role', { path: '/' });
			}
		} catch (error) {
			console.error('Hooks verify error:', error);
		}
	}

	event.locals.userRole = verifiedRole;

	if (!accessToken && isProtectedRoute) {
		throw redirect(303, '/login');
	}

	if (accessToken && pathname.startsWith('/guru') && verifiedRole !== 'guru') {
		throw redirect(303, verifiedRole === 'admin' ? '/admin/manajemen-materi/tambah' : '/');
	}
	if (accessToken && pathname.startsWith('/admin') && verifiedRole !== 'admin') {
		throw redirect(303, verifiedRole === 'guru' ? '/guru/dashboard' : '/');
	}

	if (accessToken && isPublicRoute) {
		if (verifiedRole === 'guru') {
			throw redirect(303, '/guru/dashboard');
		} else if (verifiedRole === 'admin') {
			throw redirect(303, '/admin/manajemen-materi/tambah');
		} else {
			throw redirect(303, '/');
		}
	}

	const response = await resolve(event);
	return response;
};