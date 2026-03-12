<script lang="ts">
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import LogoBuku from "../../lib/assets/banner (1).png";
    import Shape from "$lib/assets/Shape.png";
    import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
    import { Progress } from "$lib/components/ui/progress";
    import type { ApexOptions } from "apexcharts";
    import { Chart } from "@flowbite-svelte-plugins/chart";
    import InfoIcon from "@lucide/svelte/icons/info";
    import UserIcon from "@lucide/svelte/icons/user";
    import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";

    const MAX_VALUE = 45;
    const kognitifData = [
        { label: "Tinggi", value: 15 },
        { label: "Sedang", value: 19 },
        { label: "Rendah", value: 9 },
    ];

    const gayaBelajarLegend = [
        { label: "Auditori", pct: 66, color: "#5b5fc7" },
        { label: "Visual", pct: 23, color: "#e05252" },
        { label: "Kinestetik", pct: 11, color: "#d1d5db" },
    ];

    const siswaData = [
        {
            id: "ID-1243",
            nama: "Andrian Muhammad",
            gaya: "Auditori",
            kognitif: "Tinggi",
            keaktifan: 87.67,
            avatar: "https://i.pravatar.cc/150?u=ID-1243",
        },
        {
            id: "ID-1245",
            nama: "Alya Zahra",
            gaya: "Auditori",
            kognitif: "Rendah",
            keaktifan: 55.72,
            avatar: "https://i.pravatar.cc/150?u=ID-1245",
        },
        {
            id: "ID-1247",
            nama: "Aidan Kareem",
            gaya: "Visual",
            kognitif: "Sedang",
            keaktifan: 75.55,
            avatar: "https://i.pravatar.cc/150?u=ID-1247",
        },
        {
            id: "ID-1255",
            nama: "Rafif Alvaro",
            gaya: "Kinestetik",
            kognitif: "Tinggi",
            keaktifan: 90.69,
            avatar: "https://i.pravatar.cc/150?u=ID-1255",
        },
        {
            id: "ID-1262",
            nama: "Naufal Rayyan",
            gaya: "Auditori",
            kognitif: "Sedang",
            keaktifan: 80.67,
            avatar: "https://i.pravatar.cc/150?u=ID-1262",
        },
        {
            id: "ID-1266",
            nama: "Keira Safira",
            gaya: "Visual",
            kognitif: "Rendah",
            keaktifan: 70.57,
            avatar: "https://i.pravatar.cc/150?u=ID-1266",
        },
        {
            id: "ID-1270",
            nama: "Bimo Arya",
            gaya: "Auditori",
            kognitif: "Sedang",
            keaktifan: 82.34,
            avatar: "https://i.pravatar.cc/150?u=ID-1270",
        },
        {
            id: "ID-1275",
            nama: "Citra Lestari",
            gaya: "Visual",
            kognitif: "Tinggi",
            keaktifan: 94.12,
            avatar: "https://i.pravatar.cc/150?u=ID-1275",
        },
        {
            id: "ID-1280",
            nama: "Deni Ramadhan",
            gaya: "Kinestetik",
            kognitif: "Rendah",
            keaktifan: 61.45,
            avatar: "https://i.pravatar.cc/150?u=ID-1280",
        },
        {
            id: "ID-1285",
            nama: "Eka Putri",
            gaya: "Auditori",
            kognitif: "Tinggi",
            keaktifan: 88.92,
            avatar: "https://i.pravatar.cc/150?u=ID-1285",
        },
        {
            id: "ID-1290",
            nama: "Fahri Alamsyah",
            gaya: "Visual",
            kognitif: "Sedang",
            keaktifan: 79.88,
            avatar: "https://i.pravatar.cc/150?u=ID-1290",
        },
        {
            id: "ID-1295",
            nama: "Gita Permata",
            gaya: "Auditori",
            kognitif: "Sedang",
            keaktifan: 76.54,
            avatar: "https://i.pravatar.cc/150?u=ID-1295",
        },
    ];

    const options: ApexOptions = {
        series: [66, 23, 11],
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

<div class="h-full w-full flex flex-col overflow-hidden">
    <div class="flex-1 overflow-y-auto overflow-x-hidden pb-10">
        <div
            class="flex flex-row justify-between w-full items-center py-[10px] px-[30px]"
        >
            <div class="flex flex-col gap-[18px]">
                <h1 class="font-bold text-[20px]">Dasbor Analitik Siswa</h1>
                <div class="flex flex-row items-center gap-[20px]">
                    <p class="text-[12px] text-[#595959]">
                        Tahun Ajaran: <span class="text-[#000000] font-semibold"
                            >2026/2027</span
                        >
                    </p>
                    <Separator
                        orientation="vertical"
                        class="h-[11px] w-px! bg-[#d9d9d9]!"
                    />
                    <p class="text-[12px] text-[#595959]">
                        Status Akademik: <span
                            class="text-[#000000] font-semibold"
                            >Semester 1</span
                        >
                    </p>
                    <Separator
                        orientation="vertical"
                        class="h-[11px] w-px! bg-[#d9d9d9]!"
                    />
                    <p class="text-[12px] text-[#595959]">
                        Jumlah Siswa: <span class="text-[#000000] font-semibold"
                            >43</span
                        >
                    </p>
                </div>
            </div>
            <div
                class="bg-[#efeff9] text-[#5b5fc7] font-medium p-[12px] rounded-[20px] gap-[8px] flex flex-row items-center"
            >
                <span class="text-[16px] font-medium">XI 1PS 2</span>
                <ArrowDownIcon class="size-3.5" />
            </div>
        </div>
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
                    href="/"
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
                    href="/"
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
    </div>
</div>
