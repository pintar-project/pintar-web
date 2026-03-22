<script lang="ts">
	import { page } from "$app/state";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import AppSidebar from "$lib/components/app-sidebar.svelte";
	import { QueryClient, QueryClientProvider } from "@tanstack/svelte-query";
	import "../routes/layout.css";

	let { children } = $props();

	const queryClient = new QueryClient();
	const isAuthPage = $derived(page.url.pathname === "/login");
</script>

<QueryClientProvider client={queryClient}>
	{#if isAuthPage}
		{@render children?.()}
	{:else}
		<Sidebar.Provider>
			<AppSidebar />
			<main class="flex flex-1 flex-col min-w-0">
				{@render children?.()}
			</main>
		</Sidebar.Provider>
	{/if}
</QueryClientProvider>
