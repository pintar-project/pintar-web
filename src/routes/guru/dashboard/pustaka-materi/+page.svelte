<script lang="ts">
    import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Search from "@lucide/svelte/icons/search";
    import Filter from "@lucide/svelte/icons/filter";
    import { createQuery } from "@tanstack/svelte-query";
    import { modulService, type ModulResponse } from "../../../../api/modulService";
    import Cookies from "js-cookie";
    import { browser } from "$app/environment";
    import * as Skeleton from "$lib/components/ui/skeleton";

    const modulsQuery = createQuery(() => ({
        queryKey: ["moduls"],
        queryFn: async () => {
            const token = Cookies.get("access_token") || "";
            const res = await modulService.getAllModul(token);
            return res.data.data;
        },
        enabled: browser,
    }));

    let searchQuery = $state("");
    const filteredModuls = $derived(
        (modulsQuery.data || []).filter((modul: ModulResponse) => 
            modul.judul.toLowerCase().includes(searchQuery.toLowerCase()) ||
            modul.id_mapel.nama_mapel.toLowerCase().includes(searchQuery.toLowerCase())
        )
    );
</script>

<div class="px-8 py-6 flex flex-col gap-8">
    
    <div class="flex flex-row items-center gap-4">
        <div class="relative w-full max-w-[400px]">
             <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input 
                bind:value={searchQuery}
                placeholder="Cari materi atau mata pelajaran..." 
                class="pl-10 h-11 border-gray-200 focus:ring-[#5b5fc7] focus:border-[#5b5fc7] rounded-lg" 
            />
        </div>
        
        <Button variant="outline" class="h-11 border-gray-200 text-gray-500 gap-2 font-medium px-5 rounded-lg hover:bg-gray-50">
            <Filter class="size-4" />
            Filter Jurusan
        </Button>
        
        <Button variant="outline" class="h-11 border-gray-200 text-gray-500 gap-2 font-medium px-5 rounded-lg hover:bg-gray-50">
            <Filter class="size-4" />
            Filter Kelas
        </Button>
    </div>

    {#if modulsQuery.isLoading}
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {#each Array(10) as _}
                <div class="flex flex-col gap-4">
                    <Skeleton.Root class="aspect-[3/4.2] rounded-xl w-full" />
                    <div class="flex flex-col gap-2">
                        <Skeleton.Root class="h-4 w-3/4" />
                        <Skeleton.Root class="h-3 w-1/2" />
                    </div>
                </div>
            {/each}
        </div>
    {:else if modulsQuery.isError}
        <div class="flex flex-col items-center justify-center py-20 text-gray-500 border-2 border-dashed border-gray-100 rounded-3xl">
            <p>Gagal memuat data modul.</p>
        </div>
    {:else if filteredModuls.length === 0}
        <div class="flex flex-col items-center justify-center py-20 text-gray-500 border-2 border-dashed border-gray-100 rounded-3xl">
            <p class="font-medium text-[16px]">Tidak ada modul ditemukan.</p>
            <p class="text-sm">Coba kata kunci lain atau pilih filter yang berbeda.</p>
        </div>
    {:else}
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
            {#each filteredModuls as modul}
                <a href={modul.link} target="_blank" class="flex flex-col gap-4 cursor-pointer no-underline group">
                    <div class="aspect-[3/4.2] flex items-center justify-center relative">
                        {#if modul.thumbnail}
                            <img 
                                src={modul.thumbnail.replace('/c_fill,', '/c_limit,')} 
                                alt={modul.judul} 
                                class="w-full h-full object-contain rounded-xl" 
                            />
                        {:else}
                             <div class="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-300 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                                <span class="text-xs font-bold uppercase tracking-widest">{modul.id_mapel.kode_mapel}</span>
                             </div>
                        {/if}
                    </div>
                    <div class="flex flex-col gap-1.5 px-0.5">
                        <h3 class="font-bold text-[15px] text-gray-900 line-clamp-2 leading-snug">
                            {modul.judul}
                        </h3>
                        <p class="text-[13px] text-gray-500 font-medium">
                             {modul.id_mapel.nama_mapel} • {modul.tingkat}
                        </p>
                    </div>
                </a>
            {/each}
        </div>
    {/if}

    {#if filteredModuls.length > 0}
        <div class="flex justify-center items-center gap-5 mt-10 pb-16">
            <Button 
                variant="outline" 
                class="border-[#5b5fc7] text-[#5b5fc7] hover:bg-[#5b5fc7]/5 font-bold px-8 h-12 rounded-xl text-[15px] transition-all"
            >
                Sebelumnya
            </Button>
            <Button 
                class="bg-[#5b5fc7] hover:bg-[#4a4db5] text-white font-bold px-8 h-12 rounded-xl text-[15px] transition-all"
            >
                Selanjutnya
            </Button>
        </div>
    {/if}
</div>

<style>
    :global(body) {
        -webkit-font-smoothing: antialiased;
    }
</style>