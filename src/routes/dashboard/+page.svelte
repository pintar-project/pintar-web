<script lang="ts">
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import LogoBuku from "../../lib/assets/banner (1).png";
    import Shape from "$lib/assets/Shape.png";
    import ArrowDownIcon from "@lucide/svelte/icons/arrow-down";
    import { Progress } from "$lib/components/ui/progress";
    import type { ApexOptions } from "apexcharts";
    import { Chart } from "@flowbite-svelte-plugins/chart";

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

<div class="h-screen w-full">
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
                    Status Akademik: <span class="text-[#000000] font-semibold"
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

    <div class="flex gap-5 w-[96.5%] mx-auto mt-6">
        <div
            class="flex-1 bg-white rounded-2xl shadow-sm border p-6 flex flex-col gap-5 bar-siswa-1"
        >
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

        <div
            class="flex-1 bg-white rounded-2xl shadow-sm border p-6 flex flex-col gap-5 bar-siswa-2"
        >
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
</div>
