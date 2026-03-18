<script lang="ts">
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
    import X from "@lucide/svelte/icons/x";
    import InfoIcon from "@lucide/svelte/icons/info";
    import UserIcon from "@lucide/svelte/icons/user";
    import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";
    import UsersRound from "@lucide/svelte/icons/users-round";
    import BannerGayaBelajar from "$lib/assets/banner (1) copy.png";

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
            id: "ID-1243",
            nama: "Zoya Amira",
            gaya: "Auditori",
            kognitif: "Rendah",
            keaktifan: 66.67,
            avatar: "https://i.pravatar.cc/150?u=ID-1243_2",
        },
        {
            id: "ID-1243",
            nama: "Faris Zaydan",
            gaya: "Kinestetik",
            kognitif: "Sedang",
            keaktifan: 79.8,
            avatar: "https://i.pravatar.cc/150?u=ID-1243_3",
        },
    ];
</script>

<div class="flex-1 overflow-y-auto bg-white p-8 space-y-8">
    <div class="flex items-center justify-between">
        <h1 class="text-[24px] font-bold text-[#252424]">
            Pemetaan Gaya Belajar
        </h1>
        <a
            href="/dashboard"
            class="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
            <X class="size-6 text-[#252424]" />
        </a>
    </div>

    <div class="relative w-full overflow-hidden rounded-[24px]">
        <img
            src={BannerGayaBelajar}
            alt="Banner"
            class="w-full h-auto object-cover"
        />
        <div
            class="absolute inset-x-0 top-0 bottom-0 flex items-center justify-end px-12"
        >
            <a
                href="/dashboard/kognitif/pemetaan-kelompok"
                class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white px-6 py-3 rounded-[12px] font-bold flex items-center gap-2 shadow-sm transition-all transform hover:scale-105 active:scale-95"
            >
                <UsersRound class="size-5" />
                <span>Buat Kelompok</span>
            </a>
        </div>
    </div>

    <div class="flex items-center justify-between">
        <div
            class="flex gap-8 text-[16px] font-medium border-b border-border pb-2 w-full max-w-sm"
        >
            <span
                class="text-[#5b5fc7] border-b-2 border-[#5b5fc7] pb-2 cursor-pointer"
                >Semester 1</span
            >
            <span
                class="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors"
                >Semester 2</span
            >
        </div>
        <button
            class="bg-[#efeff9] text-[#5b5fc7] px-4 py-2.5 rounded-[12px] flex items-center gap-2 font-medium hover:bg-[#e5e5f5] transition-colors"
        >
            <span>Filter Gaya Belajar</span>
            <ChevronDown class="size-4" />
        </button>
    </div>

    <div class="space-y-6">
        <ScrollArea class="h-[600px] w-full">
            <table class="w-full text-left border-collapse">
                <thead
                    class="text-[14px] text-gray-400 font-medium sticky top-0 bg-white z-10"
                >
                    <tr class="border-b border-border">
                        <th class="py-4 font-medium">
                            <div
                                class="flex items-center gap-1.5 text-gray-900"
                            >
                                ID Siswa <InfoIcon class="size-3.5" />
                            </div>
                        </th>
                        <th class="py-4 font-medium">
                            <div
                                class="flex items-center gap-1.5 text-gray-900"
                            >
                                Nama Siswa <UserIcon class="size-3.5" />
                            </div>
                        </th>
                        <th class="py-4 font-medium text-gray-900"
                            >Gaya Belajar</th
                        >
                        <th class="py-4 font-medium text-gray-900">Kognitif</th>
                        <th class="py-4 font-medium text-gray-900"
                            >Keaktifan (%)</th
                        >
                        <th class="py-4 font-medium text-right pr-10">
                            <div
                                class="flex items-center justify-end gap-1.5 text-gray-900"
                            >
                                Aksi <ExternalLinkIcon class="size-3.5" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="text-[14px]">
                    {#each siswaData as siswa}
                        <tr
                            class="border-b border-border last:border-0 hover:bg-gray-50/50 transition-colors group"
                        >
                            <td class="py-4 text-gray-500">{siswa.id}</td>
                            <td class="py-4">
                                <div class="flex items-center gap-3">
                                    <img
                                        src={siswa.avatar}
                                        alt={siswa.nama}
                                        class="size-10 rounded-full bg-gray-100 object-cover border border-border"
                                    />
                                    <span class="font-medium text-gray-900"
                                        >{siswa.nama}</span
                                    >
                                </div>
                            </td>
                            <td class="py-4 font-medium text-gray-900"
                                >{siswa.gaya}</td
                            >
                            <td class="py-4 text-gray-600">{siswa.kognitif}</td>
                            <td class="py-4 text-gray-600"
                                >{siswa.keaktifan}%</td
                            >
                            <td class="py-4 text-right pr-10">
                                <button
                                    class="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-[#5b5fc7] hover:border-[#5b5fc7] hover:text-white transition-all text-[12px] font-medium"
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
