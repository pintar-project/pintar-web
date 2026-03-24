<script lang="ts">
    import { page } from "$app/state";
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
    import X from "@lucide/svelte/icons/x";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import { createQuery } from "@tanstack/svelte-query";
    import { tahunAjaranService } from "../../../api/tahunAjaranService";
    import { kelasService } from "../../../api/kelasService";
    import { goto } from "$app/navigation";
    import { browser } from "$app/environment";
    import Cookies from "js-cookie";
    import { setContext } from "svelte";

    let { children } = $props();
    let dropdownOpen = $state(false);

    const tahunAjaranQuery = createQuery(() => ({
        queryKey: ["tahun-ajaran"],
        queryFn: async () => {
            const token = Cookies.get("access_token") || "";
            const res = await tahunAjaranService.getTahunAjaran(token);
            return res.data.data;
        },
        enabled: browser,
    }));

    const kelasQuery = createQuery(() => ({
        queryKey: ["kelas"],
        queryFn: async () => {
            const token = Cookies.get("access_token") || "";
            const res = await kelasService.getKelas(token);
            return res.data;
        },
        enabled: browser,
    }));

    setContext("kelasQuery", kelasQuery);

    const selectedKodeKunik = $derived(
        page.url.searchParams.get("kelas") ||
            kelasQuery.data?.data?.[0]?.kode_unik,
    );

    const activeKelas = $derived(
        kelasQuery.data?.data?.find((k) => k.kode_unik === selectedKodeKunik),
    );


    $effect(() => {
        if (browser && kelasQuery.data?.data?.[0]?.kode_unik) {
            const isExcludedPage =
                page.url.pathname.includes("/manajemen-kelas") ||
                page.url.pathname.includes("/pustaka-materi");
            const hasKelasParam = page.url.searchParams.has("kelas");

            if (!isExcludedPage && !hasKelasParam) {
                const url = new URL(page.url);
                url.searchParams.set("kelas", kelasQuery.data.data[0].kode_unik);
                goto(url.toString(), { replaceState: true, keepFocus: true });
            } else if (isExcludedPage && hasKelasParam) {
                const url = new URL(page.url);
                url.searchParams.delete("kelas");
                goto(url.toString(), { replaceState: true, keepFocus: true });
            }
        }
    });

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
        if (!kelasQuery.data || kelasQuery.data.data.length === 0)
            return "Manajemen Kelas";
        return "Dasbor Analitik Siswa";
    });

    function handleSelectKelas(kode: string) {
        const url = new URL(page.url);
        url.searchParams.set("kelas", kode);
        goto(url.toString());
        dropdownOpen = false;
    }
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
                                    >{tahunAjaranQuery.data?.nama || "..."}</span
                                >
                            </p>
                            <Separator
                                orientation="vertical"
                                class="h-3 bg-gray-200"
                            />
                            <p class="text-[13px] text-[#595959]">
                                Status Akademik: <span
                                    class="text-[#000000] font-semibold"
                                    >Semester {tahunAjaranQuery.data?.semester || "..."}</span
                                >
                            </p>
                            {#if title !== "Manajemen Kelas" && title !== "Monitor Tugas" && title !== "Pustaka Materi" && (kelasQuery.data?.data?.length || 0) > 0}
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

                    {#if title !== "Manajemen Kelas" && title !== "Pustaka Materi" && (kelasQuery.data?.data?.length || 0) > 0}
                        <div class="relative mb-1">
                            <button
                                onclick={() =>
                                    (dropdownOpen = !dropdownOpen)}
                                class="bg-[#efeff9] text-[#5b5fc7] font-medium px-4 py-2.5 rounded-full gap-2.5 flex flex-row items-center hover:bg-[#e5e5f7] transition-colors border border-[#5b5fc7]/10"
                            >
                                <span class="text-sm font-bold"
                                    >{activeKelas?.nama || "Pilih Kelas"}</span
                                >
                                <ArrowDownIcon
                                    class="size-4 transition-transform {dropdownOpen
                                        ? 'rotate-180'
                                        : ''}"
                                />
                            </button>

                            {#if dropdownOpen}
                                
                                
                                <button
                                    type="button"
                                    class="fixed inset-0 z-40 w-full h-full cursor-default bg-transparent border-none p-0"
                                    onclick={() => (dropdownOpen = false)}
                                    aria-label="Tutup menu dropdown"
                                ></button>
                                <div
                                    class="absolute right-0 mt-2 w-56 bg-white rounded-xl border border-gray-100 py-2 z-50 overflow-hidden"
                                >
                                    <div
                                        class="px-4 py-2 text-[11px] font-bold text-gray-400 uppercase tracking-wider"
                                    >
                                        Pilih Kelas
                                    </div>
                                    {#each kelasQuery.data?.data || [] as kelas}
                                        <button
                                            onclick={() =>
                                                handleSelectKelas(
                                                    kelas.kode_unik,
                                                )}
                                            class="w-full text-left px-4 py-2.5 text-sm hover:bg-[#efeff9] hover:text-[#5b5fc7] transition-colors flex items-center justify-between {selectedKodeKunik ===
                                            kelas.kode_unik
                                                ? 'bg-[#efeff9] text-[#5b5fc7] font-semibold'
                                                : 'text-gray-700'}"
                                        >
                                            {kelas.nama}
                                            {#if selectedKodeKunik === kelas.kode_unik}
                                                <div
                                                    class="size-1.5 rounded-full bg-[#5b5fc7]"
                                                ></div>
                                            {/if}
                                        </button>
                                    {/each}
                                </div>
                            {/if}
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