<script lang="ts">
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import LogoBuku from "$lib/assets/banner (1).png";
    import Shape from "$lib/assets/Shape.png";
    import { Progress } from "$lib/components/ui/progress";
    import type { ApexOptions } from "apexcharts";
    import { Chart } from "@flowbite-svelte-plugins/chart";
    import InfoIcon from "@lucide/svelte/icons/info";
    import UserIcon from "@lucide/svelte/icons/user";
    import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
    import Ilustration from "$lib/assets/1 5974209.png";
    import { Button } from "$lib/components/ui/button";
    import BuatKelasIcon from "$lib/assets/icon-wrapper.png";
    import CreateClassDialog from "$lib/components/dashboard/CreateClassDialog.svelte";
    import { createQuery } from "@tanstack/svelte-query";
    import { siswaService } from "../../../api/siswaService";
    import Cookies from "js-cookie";

    let openCreateClass = $state(false);

    const accessToken = Cookies.get("access_token") || "";

    const siswaQuery = createQuery(() => ({
        queryKey: ["siswa_dashboard_stats"],
        queryFn: async () => {
            const res = await siswaService.getAllSiswa(accessToken);
            return res.data;
        },
        enabled: !!accessToken,
    }));

    const hasClasses = $derived(siswaQuery.isPending || siswaQuery.isSuccess);

    const stats = $derived(
        siswaQuery.data?.statistik_pemetaan || {
            kognitif: {
                jumlah: { tinggi: 0, sedang: 0, rendah: 0 },
                persentase: { tinggi: 0, sedang: 0, rendah: 0 },
            },
            gaya_belajar: {
                jumlah: { auditori: 0, visual: 0, kinestetik: 0 },
                persentase: { auditori: 0, visual: 0, kinestetik: 0 },
            },
            jumlah_siswa: 0,
        },
    );

    const header = $derived(
        siswaQuery.data?.statistik_pemetaan.jumlah_siswa || 0,
    );

    const MAX_VALUE = $derived(header || 1);

    const kognitifData = $derived([
        { label: "Tinggi", value: stats.kognitif.jumlah.tinggi },
        { label: "Sedang", value: stats.kognitif.jumlah.sedang },
        { label: "Rendah", value: stats.kognitif.jumlah.rendah },
    ]);

    const gayaBelajarLegend = $derived([
        {
            label: "Auditori",
            pct: stats.gaya_belajar.persentase.auditori || 0,
            color: "#5b5fc7",
        },
        {
            label: "Visual",
            pct: stats.gaya_belajar.persentase.visual || 0,
            color: "#e05252",
        },
        {
            label: "Kinestetik",
            pct: stats.gaya_belajar.persentase.kinestetik || 0,
            color: "#d1d5db",
        },
    ]);

    const mappedSiswaData = $derived(
        siswaQuery.data?.data.map((s) => ({
            id: s.id_siswa,
            nama: s.user.nama_lengkap,
            gaya: s.gaya_belajar,
            kognitif: s.kognitif,
            keaktifan: s.keaktifan,
            avatar:
                s.user.avatar_url || `https://i.pravatar.cc/150?u=${s.user.id}`,
        })) || [],
    );

    const options: ApexOptions = $derived({
        series: [
            stats.gaya_belajar.jumlah.auditori,
            stats.gaya_belajar.jumlah.visual,
            stats.gaya_belajar.jumlah.kinestetik,
        ],
        colors: ["#5b5fc7", "#e05252", "#d1d5db"],
        chart: {
            height: 240,
            width: "100%",
            type: "pie",
            toolbar: { show: false },
        },
        stroke: {
            colors: ["white"],
            width: 2,
        },
        plotOptions: {
            pie: {
                dataLabels: { offset: -10 },
            },
        },
        labels: ["Auditori", "Visual", "Kinestetik"],
        dataLabels: {
            enabled: false,
        },
        legend: {
            show: false,
        },
    });
</script>

<div
    class={hasClasses
        ? "pb-10"
        : "flex flex-col h-full min-h-[80vh] p-8"}
>
    {#if hasClasses}
        <img
            src={LogoBuku}
            alt="Pintar"
            class="w-[96.5%] mx-auto h-auto mt-5 pointer-events-none select-none [-webkit-user-drag:none]"
            draggable="false"
        />

        <div class="flex w-[96.5%] mx-auto mt-6 items-stretch">
            <div class="flex-1 p-6 flex flex-col gap-5 bar-siswa-1">
                <h2 class="font-semibold text-[15px] text-gray-900">
                    Pemetaan Kognitif
                </h2>

                <div
                    class="flex gap-6 text-sm font-medium border-b border-gray-100 pb-1"
                >
                    <span
                        class="text-[#5b5fc7] border-b-2 border-[#5b5fc7] pb-1 cursor-pointer"
                        >Semester 1</span
                    >
                    <span class="text-gray-400 cursor-pointer">Semester 2</span>
                </div>

                <div class="flex flex-col gap-5">
                    {#each kognitifData as item}
                        <div class="flex flex-col gap-1">
                            <div class="flex items-center gap-3">
                                <Progress
                                    value={item.value}
                                    max={MAX_VALUE}
                                    class="h-[22px] flex-1 bg-gray-100 [&>div]:bg-[#5b5fc7]/80 rounded-md"
                                />
                                <span
                                    class="text-sm font-bold text-gray-800 whitespace-nowrap w-16 text-right"
                                >
                                    {item.value} Siswa
                                </span>
                            </div>
                            <p class="text-xs text-gray-500">{item.label}</p>
                        </div>
                    {/each}
                </div>

                <a
                    href="/guru/dashboard/kognitif"
                    class="text-sm text-[#5b5fc7] font-medium mt-auto flex items-center gap-1.5 hover:underline"
                >
                    Lihat Detail <img
                        src={Shape}
                        alt=""
                        class="size-3.5 object-contain"
                    />
                </a>
            </div>

            <Separator orientation="vertical" class="mx-6 w-px bg-gray-200" />

            <div class="flex-1 p-6 flex flex-col gap-5 bar-siswa-2">
                <h2 class="font-semibold text-[15px] text-gray-900">
                    Pemetaan Gaya Belajar
                </h2>

                <div
                    class="flex gap-6 text-sm font-medium border-b border-gray-100 pb-1"
                >
                    <span
                        class="text-[#5b5fc7] border-b-2 border-[#5b5fc7] pb-1 cursor-pointer"
                        >Semester 1</span
                    >
                    <span class="text-gray-400 cursor-pointer">Semester 2</span>
                </div>

                <div class="flex items-center gap-6">
                    <div class="w-[200px] shrink-0">
                        {#if siswaQuery.isSuccess && (stats.gaya_belajar.jumlah.auditori > 0 || stats.gaya_belajar.jumlah.visual > 0 || stats.gaya_belajar.jumlah.kinestetik > 0)}
                            <Chart {options} />
                        {:else}
                            <div class="h-[200px] w-[200px] rounded-full bg-gray-100 animate-pulse"></div>
                        {/if}
                    </div>

                    <div class="flex flex-col gap-4">
                        {#each gayaBelajarLegend as item}
                            <div class="flex items-center gap-3">
                                <div
                                    class="w-1 h-8 rounded-full shrink-0"
                                    style="background-color: {item.color};"
                                ></div>
                                <div>
                                    <p
                                        class="text-[24px] font-normal text-[#252424]"
                                    >
                                        {item.pct}%
                                    </p>
                                    <p class="text-[12px] text-[#252424]">
                                        {item.label}
                                    </p>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>

                <a
                    href="/guru/dashboard/gaya-belajar"
                    class="text-sm text-[#5b5fc7] font-medium mt-auto flex items-center gap-1.5 hover:underline"
                >
                    Lihat Detail <img
                        src={Shape}
                        alt=""
                        class="size-3.5 object-contain"
                    />
                </a>
            </div>
        </div>

        <div class="w-[96.5%] mx-auto mt-10 space-y-6">
            <div class="space-y-2">
                <h2 class="font-bold text-[20px] text-gray-900">
                    Direktori Wawasan Siswa
                </h2>
                <div class="flex items-center gap-4 text-sm text-gray-400">
                    <div
                        class="flex items-center gap-1.5 cursor-pointer hover:text-gray-600 transition-colors"
                    >
                        Filter Gaya Belajar: -
                    </div>
                    <Separator
                        orientation="vertical"
                        class="h-3.5 w-px bg-gray-300"
                    />
                    <div
                        class="flex items-center gap-1.5 cursor-pointer hover:text-gray-600 transition-colors"
                    >
                        Filter Kognitif: -
                    </div>
                    <Separator
                        orientation="vertical"
                        class="h-3.5 w-px bg-gray-300"
                    />
                    <div
                        class="flex items-center gap-1.5 cursor-pointer hover:text-gray-600 transition-colors"
                    >
                        Filter Keaktifan: -
                    </div>
                </div>
            </div>

            <ScrollArea class="h-[400px] w-full">
                <table class="w-full text-left border-collapse">
                    <thead
                        class="text-[14px] text-gray-400 font-medium sticky top-0 bg-white z-10"
                    >
                        <tr class="border-b border-gray-100">
                            <th class="py-2 font-medium">
                                <div
                                    class="flex items-center gap-1.5 text-gray-900"
                                >
                                    ID Siswa <InfoIcon class="size-3.5" />
                                </div>
                            </th>
                            <th class="py-2 font-medium">
                                <div
                                    class="flex items-center gap-1.5 text-gray-900"
                                >
                                    Nama Siswa <UserIcon class="size-3.5" />
                                </div>
                            </th>
                            <th class="py-2 font-medium">Gaya Belajar</th>
                            <th class="py-2 font-medium">Kognitif</th>
                            <th class="py-2 font-medium">Keaktifan (%)</th>
                            <th class="py-2 font-medium text-right pr-10">
                                <div
                                    class="flex items-center justify-end gap-1.5"
                                >
                                    Aksi <ExternalLinkIcon class="size-3.5" />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[14px]">
                        {#if siswaQuery.isPending}
                            {#each Array(5) as _}
                                <tr
                                    class="border-b border-gray-100 animate-pulse"
                                >
                                    <td
                                        class="py-4 bg-gray-50 h-8 rounded-md"
                                        colspan="6"
                                    ></td>
                                </tr>
                            {/each}
                        {:else}
                            {#each mappedSiswaData as siswa}
                                <tr
                                    class="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors group"
                                >
                                    <td class="py-2 text-gray-500"
                                        >{siswa.id}</td
                                    >
                                    <td class="py-2">
                                        <div class="flex items-center gap-3">
                                            <img
                                                src={siswa.avatar}
                                                alt={siswa.nama}
                                                class="size-8 rounded-full bg-gray-100 object-cover"
                                            />
                                            <span
                                                class="font-medium text-gray-900"
                                                >{siswa.nama}</span
                                            >
                                        </div>
                                    </td>
                                    <td class="py-2 font-medium text-gray-900"
                                        >{siswa.gaya}</td
                                    >
                                    <td class="py-2 text-gray-600"
                                        >{siswa.kognitif}</td
                                    >
                                    <td class="py-2 text-gray-600"
                                        >{siswa.keaktifan}{typeof siswa.keaktifan ===
                                        "number"
                                            ? "%"
                                            : ""}</td
                                    >

                                    <td class="py-2 text-right pr-10">
                                        <button
                                            class="px-5 py-1.5 rounded-full border border-gray-200 text-gray-600 hover:bg-[#5b5fc7] hover:border-[#5b5fc7] hover:text-white transition-all text-[12px] font-medium"
                                        >
                                            Detail
                                        </button>
                                    </td>
                                </tr>
                            {/each}
                        {/if}
                    </tbody>
                </table>
            </ScrollArea>
        </div>
    {:else}
        <div class="relative z-50 self-start">
            <Button
                onclick={() => {
                    openCreateClass = true;
                }}
                class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white rounded-[8px] flex items-center gap-[10px]"
            >
                <img
                    src={BuatKelasIcon}
                    alt=""
                    class="size-4 object-contain"
                />
                <span>Buat Kelas</span>
            </Button>
        </div>

        <CreateClassDialog bind:open={openCreateClass} />

        <div class="flex-1 flex flex-col items-center justify-center gap-6 mt-10">
            <img
                src={Ilustration}
                alt="Empty State"
                class="w-[450px] h-auto object-contain"
            />
            <div class="text-center space-y-3">
                <h2 class="text-[22px] font-bold text-[#252424]">
                    Mari Siapkan Kelas Pertama Anda
                </h2>
                <p class="text-[15px] font-medium text-gray-600 max-w-[500px] leading-relaxed mx-auto">
                    Tambahkan kelas dan unggah materi pembelajaran untuk mulai
                    mengatur pengalaman belajar siswa dengan lebih terorganisir.
                </p>
            </div>
        </div>
    {/if}
</div>
