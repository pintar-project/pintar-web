<script lang="ts">
    import StatCard from "$lib/components/dashboard/StatCard.svelte";
    import MonitorTaskCard from "$lib/components/dashboard/MonitorTaskCard.svelte";
    import { Search, Filter, ChevronLeft, ChevronRight } from "@lucide/svelte";
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import Separator from "$lib/components/ui/separator/separator.svelte";

    const stats = [
        { title: "Total Tugas Aktif", value: "35", hasDropdown: true },
        { title: "Sudah Dikumpulkan", value: "15" },
        { title: "Belum Dikumpulkan", value: "20" },
        { title: "Rentensi Pengumpulan", value: "32", suffix: "%" },
    ];

    const tasks = [
        {
            title: "Essay Masalah Sosial Di Lingkup Remaja Indonesia",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Tugas Essay: Refleksi Pengalaman Belajar Mandiri",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Essay Penerapan Nilai Gotong Royong dalam Mengatasi Krisis...",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Essay Peluang dan Tantangan Artificial Intelligence dalam...",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Karya Tulis Ilmiah Inovasi Energi Terbarukan untuk Desa Terpencil",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Eksplorasi Inovasi Teknologi Tepat Guna untuk Masyarakat",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Tinjauan Ilmiah terhadap Manfaat Kearifan Lokal Daerah",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Observasi Perubahan Sosial pada Masyarakat Urban/Rural",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Kajian Literatur: Solusi Mengatasi Pencemaran Lingkungan",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Kuis Harian: Pemahaman Materi Pekan Ini",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Kuis Evaluasi: Review Bab yang Telah Dipelajari",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
        {
            title: "Kuis Pengetahuan Umum: Wawasan Nusantara dan Dunia",
            deadline: "03 Maret 2026",
            submissionCount: 10,
            totalStudents: 32,
        },
    ];
</script>

<div class="p-8 space-y-12 pb-20">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each stats as stat}
            <StatCard {...stat} />
        {/each}
    </div>

    <div class="flex flex-row justify-between items-center gap-4 pt-4">
        <h2 class="text-[24px] font-bold text-[#252424]">Daftar Tugas</h2>
        <div class="flex items-center gap-2 flex-1 max-w-[500px]">
            <div class="relative flex-1">
                <Search
                    class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400"
                    strokeWidth={2.5}
                />
                <Input
                    type="text"
                    placeholder="Search"
                    class="pl-10 h-11 bg-white border-[#d9d9d9] rounded-[10px] focus-visible:ring-[#5b5fc7] text-sm"
                />
            </div>
            <Button
                variant="outline"
                class="h-11 px-5 gap-2 border-[#d9d9d9] text-[#595959] hover:bg-gray-50 rounded-[10px] text-sm font-bold"
            >
                <Filter class="size-4" />
                Filter
            </Button>
        </div>
    </div>
    <Separator class="bg-[#d9d9d9] h-px! mb-8 -mt-5" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each tasks as task}
            <MonitorTaskCard {...task} />
        {/each}
    </div>

    <div class="flex justify-center items-center gap-3 mt-10">
        <Button
            variant="outline"
            class="h-10 px-5 border-[#5b5fc7] text-[#5b5fc7] hover:bg-[#5b5fc7]/5 font-bold rounded-[8px] text-[13px]"
        >
            Sebelumnya
        </Button>
        <Button
            class="h-10 px-5 bg-[#5b5fc7] text-white hover:bg-[#4a4db0] font-bold rounded-[8px] text-[13px]"
        >
            Selanjutnya
        </Button>
    </div>
</div>