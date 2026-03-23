<script lang="ts">
    import X from "@lucide/svelte/icons/x";
    import UsersRound from "@lucide/svelte/icons/users-round";
    import BannerKognitif from "$lib/assets/banner (1) copy.png";
    import { page } from "$app/state";
    import { kognitifState } from "$lib/states/kognitifState.svelte";

    let { children } = $props();

    const isKelompokPage = $derived(page.url.pathname.includes("/pemetaan-kelompok"));
    const title = $derived(isKelompokPage ? "Pemetaan Kelompok" : "Pemetaan Kognitif");
</script>

<div class="p-8 space-y-8">

    <div class="relative w-full overflow-hidden rounded-[24px]">
        <img src={BannerKognitif} alt="Banner" class="w-full h-auto object-cover" />
        <div class="absolute inset-x-0 top-0 bottom-0 flex items-center justify-end px-12">
            {#if isKelompokPage}
                <button 
                    onclick={() => kognitifState.showResults = true}
                    class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white px-6 py-3 rounded-[12px] font-bold flex items-center gap-2 shadow-sm transition-all transform hover:scale-105 active:scale-95"
                >
                    <UsersRound class="size-5" />
                    <span>Buat Kelompok</span>
                </button>
            {:else}
                <a href="/guru/dashboard/kognitif/pemetaan-kelompok" class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white px-6 py-3 rounded-[12px] font-bold flex items-center gap-2 shadow-sm transition-all transform hover:scale-105 active:scale-95">
                    <UsersRound class="size-5" />
                    <span>Buat Kelompok</span>
                </a>
            {/if}
        </div>
    </div>

    {@render children?.()}
</div>
