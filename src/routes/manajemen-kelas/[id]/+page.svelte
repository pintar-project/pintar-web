<script lang="ts">
    import { page } from "$app/state";
    import { classesState } from "$lib/state/classes.svelte";
    import ArrowLeft from "@lucide/svelte/icons/arrow-left";
    import Users from "@lucide/svelte/icons/users";
    import Copy from "@lucide/svelte/icons/copy";
    import BookOpen from "@lucide/svelte/icons/book-open";
    import FilePlus2 from "@lucide/svelte/icons/file-plus-2";
    import LayoutList from "@lucide/svelte/icons/layout-list";
    import Upload from "@lucide/svelte/icons/upload";
    import Link2 from "@lucide/svelte/icons/link-2";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";
    import Calendar from "@lucide/svelte/icons/calendar";
    import FileText from "@lucide/svelte/icons/file-text";
    import Sparkles from "@lucide/svelte/icons/sparkles";
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Separator } from "$lib/components/ui/separator";

    const classId = page.params.id;
    const classData = $derived(classesState.list.find((c) => c.id === classId));

    let activeTab = $state("materi");
    let activeUploadTab = $state("file");
    let activeTugasTab = $state("file");
    let isUploadExpanded = $state(true);

    const bgColorMap: Record<string, string> = {
        "#5b5fc7": "#E2E4FF",
        "#e8a5ac": "#F8CCD1",
        "#b4e1fa": "#D1EEFE",
        "#c7cbf1": "#E2E4FF",
    };

    const bgColor = $derived(
        classData ? bgColorMap[classData.color] || "#E2E4FF" : "#E2E4FF",
    );
</script>

{#if classData}
    <div class="flex-1 overflow-y-auto bg-gray-50/50">
        <div class="sticky top-0 z-100 shadow-sm">
            <div
                class="h-[240px] p-8 relative overflow-hidden flex flex-col justify-between"
                style="background-color: {bgColor};"
            >
                <BookOpen
                    class="absolute -right-10 -top-10 size-80 text-black/5 rotate-12 pointer-events-none"
                />

                <a
                    href="/manajemen-kelas"
                    class="flex items-center gap-2 text-[#252424] font-medium hover:underline w-fit relative z-10"
                >
                    <ArrowLeft class="size-5" />
                    <span>Kembali</span>
                </a>

                <div class="relative z-10">
                    <h1
                        class="text-[36px] font-bold text-[#252424] leading-tight"
                    >
                        {classData.name}
                    </h1>
                    <p class="text-[18px] text-[#595959] mt-2 max-w-[800px]">
                        {classData.description || "Belum ada deskripsi kelas."}
                    </p>
                </div>
            </div>

            <div
                class="bg-white border-b border-gray-100 p-4 px-8 flex items-center gap-8 relative z-20"
            >
                <div class="flex items-center gap-2 text-[#595959]">
                    <Users class="size-5" />
                    <span class="text-[14px]"
                        >Jumlah Siswa: <span
                            class="font-bold text-[#252424] ml-1"
                            >{classData.studentCount || 0}</span
                        ></span
                    >
                </div>
                <div class="flex items-center gap-2 text-[#595959]">
                    <span class="text-[14px]">Kode Kelas:</span>
                    <div
                        class="bg-gray-100 px-3 py-1 rounded-[6px] flex items-center gap-2"
                    >
                        <Copy class="size-4 text-[#8c8c8c]" />
                        <span
                            class="text-[12px] font-bold text-[#8c8c8c] tracking-wider uppercase"
                            >{classData.code}</span
                        >
                    </div>
                </div>
            </div>
        </div>

        <div class="p-8 mx-auto space-y-8">
            <div
                class="bg-gray-100 p-1.5 rounded-[12px] flex items-center w-full"
            >
                <button
                    onclick={() => (activeTab = "materi")}
                    class="flex-1 py-2.5 rounded-[10px] flex items-center justify-center gap-2 transition-all {activeTab ===
                    'materi'
                        ? 'bg-white text-[#252424] shadow-sm font-bold'
                        : 'text-[#595959] font-medium hover:text-[#252424]'}"
                >
                    <FilePlus2 class="size-5" />
                    <span>Materi Belajar</span>
                </button>
                <button
                    onclick={() => (activeTab = "tugas")}
                    class="flex-1 py-2.5 rounded-[10px] flex items-center justify-center gap-2 transition-all {activeTab ===
                    'tugas'
                        ? 'bg-white text-[#252424] shadow-sm font-bold'
                        : 'text-[#595959] font-medium hover:text-[#252424]'}"
                >
                    <LayoutList class="size-5" />
                    <span>Tugas</span>
                </button>
            </div>

            {#if activeTab === "materi"}
                <div
                    class="bg-white rounded-[16px] border border-gray-100 overflow-hidden shadow-sm"
                >
                    <button
                        onclick={() => (isUploadExpanded = !isUploadExpanded)}
                        class="w-full p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                    >
                        <h2 class="text-[18px] font-bold text-[#252424]">
                            Upload Materi Belajar
                        </h2>
                        <ChevronDown
                            class="size-6 text-gray-400 transition-transform {isUploadExpanded
                                ? 'rotate-180'
                                : ''}"
                        />
                    </button>

                    {#if isUploadExpanded}
                        <div class="mb-6">
                            <Separator class="bg-gray-100" />
                        </div>
                        <div class="p-6 pt-0 space-y-6">
                            <div class="space-y-3">
                                <Label
                                    for="judul"
                                    class="text-[14px] font-semibold text-[#595959]"
                                    >Judul Materi</Label
                                >
                                <Input
                                    id="judul"
                                    placeholder="Contoh: Materi BAB 2 - Interaksi Sosial Dalam Ilmu Sosiologi"
                                    class="h-[48px] px-4 rounded-[10px] border-gray-200"
                                />
                            </div>

                            <div class="space-y-4">
                                <div
                                    class="bg-gray-100 p-1 rounded-[10px] flex items-center w-full"
                                >
                                    <button
                                        onclick={() =>
                                            (activeUploadTab = "file")}
                                        class="flex-1 py-2 rounded-[8px] flex items-center justify-center gap-2 transition-all {activeUploadTab ===
                                        'file'
                                            ? 'bg-white text-[#252424] shadow-sm font-bold'
                                            : 'text-[#595959] font-medium hover:text-[#252424]'}"
                                    >
                                        <FilePlus2 class="size-4" />
                                        <span>File Materi</span>
                                    </button>
                                    <button
                                        onclick={() =>
                                            (activeUploadTab = "link")}
                                        class="flex-1 py-2 rounded-[8px] flex items-center justify-center gap-2 transition-all {activeUploadTab ===
                                        'link'
                                            ? 'bg-white text-[#252424] shadow-sm font-bold'
                                            : 'text-[#595959] font-medium hover:text-[#252424]'}"
                                    >
                                        <Link2 class="size-4" />
                                        <span>Link Materi</span>
                                    </button>
                                </div>

                                {#if activeUploadTab === "file"}
                                    <div
                                        class="border-2 border-dashed border-gray-200 rounded-[12px] p-12 flex flex-col items-center justify-center gap-4 group hover:border-[#5b5fc7] transition-all cursor-pointer"
                                    >
                                        <div
                                            class="bg-gray-100 p-4 rounded-full group-hover:bg-[#5b5fc7]/5 transition-all"
                                        >
                                            <Upload
                                                class="size-8 text-gray-400 group-hover:text-[#5b5fc7]"
                                            />
                                        </div>
                                        <div class="text-center">
                                            <p
                                                class="text-[14px] font-bold text-[#252424]"
                                            >
                                                Klik untuk mengunggah file
                                                materi Anda
                                            </p>
                                            <p
                                                class="text-[12px] text-gray-400 mt-1"
                                            >
                                                format PDF, PPT, atau DOCX - Max
                                                20 MB
                                            </p>
                                        </div>
                                    </div>
                                {:else}
                                    <div class="space-y-3">
                                        <Label
                                            for="url"
                                            class="text-[14px] font-semibold text-[#595959]"
                                            >URL / Link Materi</Label
                                        >
                                        <Input
                                            id="url"
                                            placeholder="https://example.com/materi"
                                            class="h-[48px] px-4 rounded-[10px] border-gray-200"
                                        />
                                    </div>
                                {/if}
                            </div>

                            <Button
                                class="w-full h-[56px] rounded-[10px] bg-[#5b5fc7] hover:bg-[#4a4db0] text-white font-bold flex items-center justify-center gap-2"
                            >
                                <Upload class="size-5" />
                                <span>Upload Materi</span>
                            </Button>
                        </div>
                    {/if}
                </div>
            {:else}
                <div
                    class="bg-white rounded-[16px] border border-gray-100 overflow-hidden shadow-sm"
                >
                    <button
                        onclick={() => (isUploadExpanded = !isUploadExpanded)}
                        class="w-full p-6 flex items-center justify-between hover:bg-gray-50/50 transition-colors"
                    >
                        <h2 class="text-[18px] font-bold text-[#252424]">
                            Upload Tugas
                        </h2>
                        <ChevronDown
                            class="size-6 text-gray-400 transition-transform {isUploadExpanded
                                ? 'rotate-180'
                                : ''}"
                        />
                    </button>

                    {#if isUploadExpanded}
                        <div class="mb-6">
                            <Separator class="bg-gray-100" />
                        </div>
                        <div class="p-6 pt-0 space-y-6">
                            <div class="space-y-3">
                                <Label
                                    for="judul-tugas"
                                    class="text-[14px] font-semibold text-[#595959]"
                                    >Judul Tugas</Label
                                >
                                <Input
                                    id="judul-tugas"
                                    placeholder="Contoh: Materi BAB 2 - Interaksi Sosial Dalam Ilmu Sosiologi"
                                    class="h-[48px] px-4 rounded-[10px] border-gray-200"
                                />
                            </div>

                            <div class="space-y-3">
                                <Label
                                    for="deskripsi-tugas"
                                    class="text-[14px] font-semibold text-[#595959]"
                                    >Deskripsi</Label
                                >
                                <Input
                                    id="deskripsi-tugas"
                                    placeholder="Jelaskan deskripsi pengerjaan tugas.."
                                    class="h-[48px] px-4 rounded-[10px] border-gray-200"
                                />
                            </div>

                            <div class="space-y-3">
                                <Label
                                    for="deadline"
                                    class="text-[14px] font-semibold text-[#595959]"
                                    >Deadline</Label
                                >
                                <div class="relative">
                                    <div
                                        class="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                                    >
                                        <Calendar class="size-5" />
                                    </div>
                                    <Input
                                        id="deadline"
                                        placeholder="dd/mm/yy -:- - dd/mm/yy -:-"
                                        class="h-[48px] pl-12 pr-4 rounded-[10px] border-gray-200"
                                    />
                                </div>
                            </div>

                            <div class="space-y-4">
                                <div
                                    class="bg-gray-100 p-1 rounded-[10px] flex items-center w-full"
                                >
                                    <button
                                        onclick={() =>
                                            (activeTugasTab = "file")}
                                        class="flex-1 py-2 rounded-[8px] flex items-center justify-center gap-2 transition-all {activeTugasTab ===
                                        'file'
                                            ? 'bg-white text-[#252424] shadow-sm font-bold'
                                            : 'text-[#595959] font-medium hover:text-[#252424]'}"
                                    >
                                        <FileText class="size-4" />
                                        <span>File Tugas</span>
                                    </button>
                                    <button
                                        onclick={() =>
                                            (activeTugasTab = "link")}
                                        class="flex-1 py-2 rounded-[8px] flex items-center justify-center gap-2 transition-all {activeTugasTab ===
                                        'link'
                                            ? 'bg-white text-[#252424] shadow-sm font-bold'
                                            : 'text-[#595959] font-medium hover:text-[#252424]'}"
                                    >
                                        <Link2 class="size-4" />
                                        <span>Link Tugas</span>
                                    </button>
                                    <button
                                        onclick={() => (activeTugasTab = "ai")}
                                        class="flex-1 py-2 rounded-[8px] flex items-center justify-center gap-2 transition-all {activeTugasTab ===
                                        'ai'
                                            ? 'bg-white text-[#252424] shadow-sm font-bold'
                                            : 'text-[#595959] font-medium hover:text-[#252424]'}"
                                    >
                                        <Sparkles class="size-4" />
                                        <span>Buat Kuis Dengan AI</span>
                                    </button>
                                </div>

                                {#if activeTugasTab === "file"}
                                    <div
                                        class="border-2 border-dashed border-gray-200 rounded-[12px] p-12 flex flex-col items-center justify-center gap-4 group hover:border-[#5b5fc7] transition-all cursor-pointer"
                                    >
                                        <div
                                            class="bg-gray-100 p-4 rounded-full group-hover:bg-[#5b5fc7]/5 transition-all"
                                        >
                                            <Upload
                                                class="size-8 text-gray-400 group-hover:text-[#5b5fc7]"
                                            />
                                        </div>
                                        <div class="text-center">
                                            <p
                                                class="text-[14px] font-bold text-[#252424]"
                                            >
                                                Klik untuk mengunggah file tugas
                                                Anda
                                            </p>
                                            <p
                                                class="text-[12px] text-gray-400 mt-1"
                                            >
                                                format PDF, PPT, atau DOCX - Max
                                                20 MB
                                            </p>
                                        </div>
                                    </div>
                                {:else if activeTugasTab === "link"}
                                    <div class="space-y-3">
                                        <Label
                                            for="url-tugas"
                                            class="text-[14px] font-semibold text-[#595959]"
                                            >URL / Link Materi</Label
                                        >
                                        <Input
                                            id="url-tugas"
                                            placeholder="Contoh: https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                                            class="h-[48px] px-4 rounded-[10px] border-gray-200"
                                        />
                                        <p class="text-[12px] text-gray-400">
                                            Mendukung link YouTube, Google
                                            Drive, atau URL lainnya
                                        </p>
                                    </div>
                                {:else}
                                    <div
                                        class="bg-[#5b5fc7]/5 rounded-[12px] p-8 flex flex-col items-center justify-center gap-4 border border-[#5b5fc7]/20"
                                    >
                                        <Sparkles
                                            class="size-10 text-[#5b5fc7]"
                                        />
                                        <div class="text-center">
                                            <p
                                                class="text-[16px] font-bold text-[#252424]"
                                            >
                                                Buat Kuis Interaktif dengan AI
                                            </p>
                                            <p
                                                class="text-[14px] text-gray-500 mt-1 max-w-[400px]"
                                            >
                                                Cukup unggah materi atau
                                                masukkan topik, dan biarkan AI
                                                kami membuat kuis pembelajaran
                                                untuk Anda.
                                            </p>
                                        </div>
                                        <Button
                                            class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white font-bold h-[48px] px-8 rounded-[10px]"
                                        >
                                            <span>Mulai Membuat Kuis</span>
                                        </Button>
                                    </div>
                                {/if}
                            </div>

                            {#if activeTugasTab !== "ai"}
                                <Button
                                    class="w-full h-[56px] rounded-[10px] bg-[#5b5fc7] hover:bg-[#4a4db0] text-white font-bold flex items-center justify-center gap-2"
                                >
                                    {#if activeTugasTab === "file"}
                                        <Upload class="size-5" />
                                        <span>Upload Tugas</span>
                                    {:else}
                                        <Link2 class="size-5" />
                                        <span>Tambahkan Link</span>
                                    {/if}
                                </Button>
                            {/if}
                        </div>
                    {/if}
                </div>
            {/if}
        </div>
    </div>
{:else}
    <div class="flex-1 flex items-center justify-center">
        <p class="text-gray-500">Kelas tidak ditemukan.</p>
    </div>
{/if}
