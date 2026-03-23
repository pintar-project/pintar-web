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

    import dashboardData from "$lib/json/data_dasbor_analitik_XI_IPS_2.json";

    const hasClasses = true;
    let openCreateClass = $state(false);

    const stats = dashboardData.statistik_pemetaan;
    const header = dashboardData.header_kelas;

    const MAX_VALUE = header.jumlah_siswa;

    const kognitifData = [
        { label: "Tinggi", value: stats.kognitif.tinggi },
        { label: "Sedang", value: stats.kognitif.sedang },
        { label: "Rendah", value: stats.kognitif.rendah },
    ];

    const totalStudents = header.jumlah_siswa;
    const gayaBelajarLegend = [
        {
            label: "Auditori",
            pct: Math.round(
                (stats.gaya_belajar.auditori / totalStudents) * 100,
            ),
            color: "#5b5fc7",
        },
        {
            label: "Visual",
            pct: Math.round((stats.gaya_belajar.visual / totalStudents) * 100),
            color: "#e05252",
        },
        {
            label: "Kinestetik",
            pct: Math.round(
                (stats.gaya_belajar.kinestetik / totalStudents) * 100,
            ),
            color: "#d1d5db",
        },
    ];

    const siswaData = dashboardData.data_siswa.map((s: any) => ({
        id: s.id_siswa,
        nama: s.nama,
        gaya: s.gaya_belajar,
        kognitif: s.kognitif,
        keaktifan: parseFloat(s.keaktifan),
        avatar: `https://i.pravatar.cc/150?u=${s.id_siswa}`,
    }));

    const options: ApexOptions = {
        series: [
            stats.gaya_belajar.auditori,
            stats.gaya_belajar.visual,
            stats.gaya_belajar.kinestetik,
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
    };
</script>

<div
    class={hasClasses
        ? "pb-10"
        : "flex flex-col items-center justify-center min-h-[60vh] gap-8"}
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
                                    value={(item.value / MAX_VALUE) * 100}
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
                        <Chart {options} />
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
                        {#each siswaData as siswa}
                            <tr
                                class="border-b border-gray-100 last:border-0 hover:bg-gray-50/50 transition-colors group"
                            >
                                <td class="py-2 text-gray-500">{siswa.id}</td>
                                <td class="py-2">
                                    <div class="flex items-center gap-3">
                                        <img
                                            src={siswa.avatar}
                                            alt={siswa.nama}
                                            class="size-8 rounded-full bg-gray-100 object-cover"
                                        />
                                        <span class="font-medium text-gray-900"
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
                                    >{siswa.keaktifan}%</td
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
                    </tbody>
                </table>
            </ScrollArea>
        </div>
    {:else}
        <div class="flex-1 flex flex-col overflow-hidden">
            <div class="mt-[30px] relative z-50">
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

            <div class="flex flex-col items-center justify-center -mt-10">
                <img
                    src={Ilustration}
                    alt="Empty State"
                    class="w-[400px] h-auto"
                />
                <div class="text-center mt-[30px] space-y-2">
                    <h2 class="text-[24px] font-bold text-[#252424]">
                        Mari Siapkan Kelas Pertama Anda
                    </h2>
                    <p class="text-[18px] text-[#262626] max-w-[550px]">
                        Tambahkan kelas dan unggah materi pembelajaran untuk
                        mulai mengatur pengalaman belajar siswa dengan lebih
                        terorganisir.
                    </p>
                </div>
            </div>
        </div>
    {/if}
</div>
