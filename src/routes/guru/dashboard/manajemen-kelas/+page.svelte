<script lang="ts">
    import Ilustration from "$lib/assets/1 5974209.png";
    import { Button } from "$lib/components/ui/button";
    import BuatKelasIcon from "$lib/assets/icon-wrapper.png";
    import CreateClassDialog from "$lib/components/dashboard/CreateClassDialog.svelte";
    import ClassList from "$lib/components/dashboard/ClassList.svelte";
    import { createQuery } from "@tanstack/svelte-query";
    import { kelasService } from "../../../../api/kelasService";
    import Cookies from "js-cookie";

    let openCreateClass = $state(false);

    const accessToken = Cookies.get("access_token") || "";

    const query = createQuery(() => ({
        queryKey: ["kelas"],
        queryFn: async () => {
            const res = await kelasService.getKelas(accessToken);
            return res.data.data;
        },
        enabled: !!accessToken,
    }));


</script>

<div class="p-8">
    <CreateClassDialog bind:open={openCreateClass} />

    {#if !query.isLoading}
        <div class="relative z-50">
            <Button
                onclick={() => {
                    openCreateClass = true;
                }}
                class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white rounded-[8px] flex items-center gap-[10px]"
            >
                <img src={BuatKelasIcon} alt="" class="size-4 object-contain" />
                <span>Buat Kelas</span>
            </Button>
        </div>
    {/if}

    {#if query.isLoading}
        <div class="flex items-center justify-center min-h-[60vh]">
            <p class="text-lg text-gray-500">Memuat data kelas...</p>
        </div>
    {:else if query.data && query.data.length > 0}
        <div class="mt-10">
            <ClassList
                classes={query.data}
                onCreateClass={() => (openCreateClass = true)}
            />
        </div>
    {:else}
        <div
            class="flex-1 flex flex-col items-center justify-center gap-6 min-h-[60vh]"
        >
            <img src={Ilustration} alt="Empty State" class="w-[450px] h-auto object-contain" />

            <div class="text-center space-y-3">
                <h2 class="text-[22px] font-bold text-[#252424]">
                    Mari Siapkan Kelas Pertama Anda
                </h2>
                <p class="text-[15px] font-medium text-gray-600 max-w-[500px] leading-relaxed">
                    Tambahkan kelas dan unggah materi pembelajaran untuk mulai
                    mengatur pengalaman belajar siswa dengan lebih terorganisir.
                </p>
            </div>
        </div>
    {/if}
</div>
