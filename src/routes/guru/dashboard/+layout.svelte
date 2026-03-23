<script lang="ts">
    import { page } from "$app/state";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
    import X from "@lucide/svelte/icons/x";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { classesState } from "$lib/state/classes.svelte";

    let { children } = $props();

    const isSubPage = $derived(
        page.url.pathname.includes("/kognitif") ||
            page.url.pathname.includes("/gaya-belajar"),
    );

    const title = $derived.by(() => {
        if (page.url.pathname.includes("/kognitif/pemetaan-kelompok"))
            return "Pemetaan Kelompok";
        if (page.url.pathname.includes("/kognitif")) return "Pemetaan Kognitif";
        if (page.url.pathname.includes("/gaya-belajar"))
            return "Pemetaan Gaya Belajar";
        if (page.url.pathname.includes("/manajemen-kelas"))
            return "Manajemen Kelas";
        if (page.url.pathname.includes("/monitor-tugas"))
            return "Monitor Tugas";
        if (page.url.pathname.includes("/pustaka-materi"))
            return "Pustaka Materi";
        if (classesState.list.length === 0) return "Manajemen Kelas";
        return "Dasbor Analitik Siswa";
    });
</script>

<div class="flex flex-col h-screen bg-white overflow-hidden">
    <header class="bg-white z-50 w-full shrink-0 border-b border-gray-100">
        {#if !isSubPage}
            <div class="px-8 flex flex-col pt-4">
                <div class="flex items-center mb-4">
                    <Sidebar.Trigger class="hover:text-[#5b5fc7]" />
                </div>

                <div
                    class="flex flex-row justify-between w-full items-end pb-4 gap-4"
                >
                    <div class="flex flex-col gap-2">
                        <h1
                            class="font-bold text-[24px] text-gray-900 leading-tight"
                        >
                            {title}
                        </h1>
                        <div class="flex flex-row items-center gap-4">
                            <p class="text-[13px] text-[#595959]">
                                Tahun Ajaran: <span
                                    class="text-[#000000] font-semibold"
                                    >2026/2027</span
                                >
                            </p>
                            <Separator
                                orientation="vertical"
                                class="h-3 bg-gray-200"
                            />
                            <p class="text-[13px] text-[#595959]">
                                Status Akademik: <span
                                    class="text-[#000000] font-semibold"
                                    >Semester 1</span
                                >
                            </p>
                            {#if title !== "Manajemen Kelas" && title !== "Monitor Tugas" && classesState.list.length > 0}
                                <Separator
                                    orientation="vertical"
                                    class="h-3 bg-gray-200"
                                />
                                <p class="text-[13px] text-[#595959]">
                                    Jumlah Siswa: <span
                                        class="text-[#000000] font-semibold"
                                        >43</span
                                    >
                                </p>
                            {/if}
                        </div>
                    </div>

                    {#if title !== "Manajemen Kelas" && classesState.list.length > 0}
                        <div
                            class="bg-[#efeff9] text-[#5b5fc7] font-medium px-4 py-2.5 rounded-full gap-2.5 flex flex-row items-center hover:bg-[#e5e5f7] cursor-pointer transition-colors border border-[#5b5fc7]/10 mb-1"
                        >
                            <span class="text-sm font-bold">XI 1PS 2</span>
                            <ArrowDownIcon class="size-4" />
                        </div>
                    {/if}
                </div>
            </div>
        {:else}
            <div class="flex flex-col px-8 pt-4">
                <div class="flex items-center mb-4">
                    <Sidebar.Trigger class="text-[#5b5fc7]" />
                </div>
                <div class="flex items-center justify-between pb-6 gap-4">
                    <h1 class="text-[28px] font-bold text-[#252424]">
                        {title}
                    </h1>
                    <a
                        href="/guru/dashboard"
                        class="p-2.5 hover:bg-gray-100 rounded-full transition-all group"
                    >
                        <X
                            class="size-7 text-[#252424] group-hover:scale-110"
                        />
                    </a>
                </div>
            </div>
        {/if}
    </header>

    <main class="flex-1 overflow-y-auto w-full">
        {@render children()}
    </main>
</div>
