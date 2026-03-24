<script lang="ts">
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
    import InfoIcon from "@lucide/svelte/icons/info";
    import UserIcon from "@lucide/svelte/icons/user";
    import ExternalLinkIcon from "@lucide/svelte/icons/external-link";
    import ChevronDown from "@lucide/svelte/icons/chevron-down";

    import { page } from "$app/state";
    import { createQuery } from "@tanstack/svelte-query";
    import { siswaService } from "../../../../api/siswaService";
    import { browser } from "$app/environment";
    import Cookies from "js-cookie";
    import { getContext } from "svelte";

    const kelasQuery: any = getContext("kelasQuery");

    const activeKodeKunik = $derived(
        page.url.searchParams.get("kelas") ||
            kelasQuery.data?.data?.[0]?.kode_unik,
    );

    const siswaQuery = createQuery(() => ({
        queryKey: ["siswa_kognitif", activeKodeKunik],
        queryFn: async () => {
            const token = Cookies.get("access_token") || "";
            const res = await siswaService.getAllSiswa(
                token,
                activeKodeKunik || "",
            );
            return res.data;
        },
        enabled: browser && !!activeKodeKunik,
    }));

    const mappedSiswaData = $derived(
        siswaQuery.data?.data.map((s) => ({
            id: s.id_siswa,
            nama: s.user.nama_lengkap,
            gaya: s.gaya_belajar,
            kognitif: s.kognitif,
            keaktifan: s.keaktifan,
            avatar:
                s.user.avatar_url || `https://i.pravatar.cc/150?u=${s.user.id}`,
        })) || []
    );
</script>


    <div class="flex items-center justify-between">
        <div class="flex gap-8 text-[16px] font-medium border-b border-border pb-2 w-full max-w-sm">
            <span class="text-[#5b5fc7] border-b-2 border-[#5b5fc7] pb-2 cursor-pointer">Semester 1</span>
            <span class="text-gray-400 cursor-pointer hover:text-gray-600 transition-colors">Semester 2</span>
        </div>
        <button class="bg-[#efeff9] text-[#5b5fc7] px-4 py-2.5 rounded-[12px] flex items-center gap-2 font-medium hover:bg-[#e5e5f5] transition-colors">
            <span>Filter Kognitif</span>
            <ChevronDown class="size-4" />
        </button>
    </div>

    <div class="space-y-6">
        <ScrollArea class="h-[600px] w-full">
            <table class="w-full text-left border-collapse">
                <thead class="text-[14px] text-gray-400 font-medium sticky top-0 bg-white z-10">
                    <tr class="border-b border-border">
                        <th class="py-4 font-medium">
                            <div class="flex items-center gap-1.5 text-gray-900">
                                ID Siswa <InfoIcon class="size-3.5" />
                            </div>
                        </th>
                        <th class="py-4 font-medium">
                            <div class="flex items-center gap-1.5 text-gray-900">
                                Nama Siswa <UserIcon class="size-3.5" />
                            </div>
                        </th>
                        <th class="py-4 font-medium text-gray-900">Gaya Belajar</th>
                        <th class="py-4 font-medium text-gray-900">Kognitif</th>
                        <th class="py-4 font-medium text-gray-900">Keaktifan (%)</th>
                        <th class="py-4 font-medium text-right pr-10">
                            <div class="flex items-center justify-end gap-1.5 text-gray-900">
                                Aksi <ExternalLinkIcon class="size-3.5" />
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody class="text-[14px]">
                    {#if siswaQuery.isPending}
                        {#each Array(5) as _}
                            <tr class="border-b border-border animate-pulse">
                                <td class="py-4 bg-gray-50 h-10 rounded-md" colspan="6"></td>
                            </tr>
                        {/each}
                    {:else if mappedSiswaData.length === 0}
                        <tr>
                            <td colspan="6" class="py-10 text-center text-gray-500">
                                Belum ada siswa di kelas ini.
                            </td>
                        </tr>
                    {:else}
                        {#each mappedSiswaData as siswa}
                            <tr class="border-b border-border last:border-0 hover:bg-gray-50/50 transition-colors group">
                                <td class="py-4 text-gray-500">{siswa.id}</td>
                                <td class="py-4">
                                    <div class="flex items-center gap-3">
                                        <img src={siswa.avatar} alt={siswa.nama} class="size-10 rounded-full bg-gray-100 object-cover border border-border" />
                                        <span class="font-medium text-gray-900">{siswa.nama}</span>
                                    </div>
                                </td>
                                <td class="py-4 font-medium text-gray-900">{siswa.gaya}</td>
                                <td class="py-4 text-gray-600">{siswa.kognitif}</td>
                                <td class="py-4 text-gray-600">{siswa.keaktifan}{typeof siswa.keaktifan === "number" ? "%" : ""}</td>
                                <td class="py-4 text-right pr-10">
                                    <button class="px-6 py-2 rounded-full border border-gray-200 text-gray-600 hover:bg-[#5b5fc7] hover:border-[#5b5fc7] hover:text-white transition-all text-[12px] font-medium">
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