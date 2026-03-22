import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import type { UserConfig } from 'vite';

export default defineConfig({
    plugins: [tailwindcss(), sveltekit()],
    ssr: {
        noExternal: ['@tanstack/svelte-query'],
    },
    ...(defineConfig((config: UserConfig) => config) as any).legacy,
    buildSsrCjsExternalHeuristics: true,
});