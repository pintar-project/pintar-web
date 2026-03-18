<script lang="ts">
    import Ilustration from "$lib/assets/1 5974209.png";
    import { Button } from "$lib/components/ui/button";
    import BuatKelasIcon from "$lib/assets/icon-wrapper.png";
    import CreateClassDialog from "$lib/components/dashboard/CreateClassDialog.svelte";
    import ClassList from "$lib/components/dashboard/ClassList.svelte";
    import { classesState } from "$lib/state/classes.svelte";

    let openCreateClass = $state(false);
</script>

<div class="p-8">
    <CreateClassDialog bind:open={openCreateClass} />

    {#if classesState.list.length > 0}
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
        <div class="mt-10">
            <ClassList onCreateClass={() => (openCreateClass = true)} />
        </div>
    {:else}
        <div
            class="flex-1 flex flex-col items-center justify-center -mt-10 gap-8 min-h-[60vh]"
        >
            <img src={Ilustration} alt="Empty State" class="w-[400px] h-auto" />

            <div class="text-center space-y-2">
                <h2 class="text-[24px] font-bold text-[#252424]">
                    Mari Siapkan Kelas Pertama Anda
                </h2>
                <p class="text-[18px] text-[#262626] max-w-[550px]">
                    Tambahkan kelas dan unggah materi pembelajaran untuk mulai
                    mengatur pengalaman belajar siswa dengan lebih terorganisir.
                </p>
            </div>

            <Button
                onclick={() => {
                    openCreateClass = true;
                }}
                class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white rounded-[8px] flex items-center gap-[10px] px-6 py-6"
            >
                <img src={BuatKelasIcon} alt="" class="size-5 object-contain" />
                <span class="text-lg font-medium">Buat Kelas</span>
            </Button>
        </div>
    {/if}
</div>
