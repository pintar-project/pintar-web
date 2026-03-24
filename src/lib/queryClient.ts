import { QueryClient } from "@tanstack/svelte-query";
import { browser } from "$app/environment";

export const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 1000 * 60, 
            refetchOnWindowFocus: false, 
        },
    },
});