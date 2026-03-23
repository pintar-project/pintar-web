<script lang="ts">
    import { Input } from "$lib/components/ui/input";
    import { Label } from "$lib/components/ui/label";
    import { Button } from "$lib/components/ui/button";
    import FileDown from "@lucide/svelte/icons/file-down";
    import Send from "@lucide/svelte/icons/send";
</script>

<div class="p-8 md:p-12 w-full flex flex-col gap-[28px] bg-white min-h-full">
    <div class="flex flex-col gap-3">
        <h1 class="text-[26px] font-bold text-[#141414] tracking-tight">
            Tambahkan Materi
        </h1>
        <p class="text-[15px] leading-relaxed text-[#252424] max-w-[1000px]">
            Anda bisa menambahkan materi berupa file buku paket atau modul ajar
            template milik sekolah sebagai bahan referensi guru dalam merancanf
            modul ajar pribadi untuk siswa.
        </p>
    </div>

    <div
        class="bg-white rounded-[8px] border border-[#d9d9d9] overflow-hidden mt-2"
    >
        <div class="px-6 py-4 border-b border-[#d9d9d9] bg-white">
            <h3 class="font-semibold text-[15px] text-[#141414]">
                Informasi Materi
            </h3>
        </div>
        <div class="p-6 flex flex-col gap-6">
            <div class="flex flex-col gap-3">
                <Label class="text-[13px] font-semibold text-[#141414]"
                    >Judul Materi</Label
                >
                <Input
                    type="text"
                    placeholder="Contoh: Bahasa Indonesia untuk kelas 12"
                    class="h-[46px] rounded-[6px] border-[#d9d9d9] focus-visible:ring-1 focus-visible:ring-[#5b5fc7] text-[14px] px-4 placeholder:text-[#595959]"
                />
            </div>
            <div class="flex flex-col gap-3">
                <Label class="text-[13px] font-semibold text-[#141414]"
                    >Penerbit</Label
                >
                <Input
                    type="text"
                    placeholder="Contoh: Arya Duta"
                    class="h-[46px] rounded-[6px] border-[#d9d9d9] focus-visible:ring-1 focus-visible:ring-[#5b5fc7] text-[14px] px-4 placeholder:text-[#595959]"
                />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="flex flex-col gap-3">
                    <Label class="text-[13px] font-semibold text-[#141414]"
                        >Mata Pelajaran</Label
                    >
                    <div class="relative">
                        <select
                            class="w-full h-[46px] rounded-[6px] border border-[#d9d9d9] bg-white px-4 py-2 text-[14px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#5b5fc7] text-gray-900 cursor-pointer"
                        >
                            <option value="" disabled selected></option>
                            <option value="matematika">Matematika</option>
                            <option value="bahasa-indonesia"
                                >Bahasa Indonesia</option
                            >
                            <option value="ipa">Ilmu Pengetahuan Alam</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                        >
                            <svg
                                class="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex flex-col gap-3">
                    <Label class="text-[13px] font-semibold text-[#141414]"
                        >Jenjang Kelas</Label
                    >
                    <div class="relative">
                        <select
                            class="w-full h-[46px] rounded-[6px] border border-[#d9d9d9] bg-white px-4 py-2 text-[14px] appearance-none focus:outline-none focus:ring-1 focus:ring-[#5b5fc7] text-gray-900 cursor-pointer"
                        >
                            <option value="" disabled selected></option>
                            <option value="10">Kelas 10</option>
                            <option value="11">Kelas 11</option>
                            <option value="12">Kelas 12</option>
                        </select>
                        <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500"
                        >
                            <svg
                                class="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    
    <label
        class="border-[1.5px] border-dashed border-[#d9d9d9] rounded-[8px] hover:bg-gray-50 transition-colors p-10 flex flex-col items-center justify-center text-center cursor-pointer min-h-[300px]"
    >
        <FileDown class="size-[48px] text-[#454545] mb-4" strokeWidth={2} />
        <h4 class="text-[14px] font-semibold text-[#454545] mb-2">
            Klik untuk mengunggah file materi Anda
        </h4>
        <p class="text-[13px] text-[#757575]">
            format PDF, PPT, atau DOCX - Max 20 MB
        </p>
        <input type="file" class="hidden" accept=".pdf,.ppt,.pptx,.doc,.docx" />
    </label>

    
    <div class="flex justify-start w-full mb-12">
        <Button
            class="w-full bg-[#5b5fc7] hover:bg-[#4a4ea3] text-white font-semibold h-[48px] rounded-[6px] text-[15px] flex items-center justify-center gap-2"
        >
            Kirim Materi <Send class="size-4" />
        </Button>
    </div>
</div>
