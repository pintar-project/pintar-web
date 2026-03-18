<script lang="ts">
    import Separator from "$lib/components/ui/separator/separator.svelte";
    import Ilustration from "$lib/assets/1 5974209.png";
    import { Button } from "$lib/components/ui/button";
    import BuatKelasIcon from "../../lib/assets/icon-wrapper.png";
    import CreateClassDialog from "$lib/components/dashboard/CreateClassDialog.svelte";
    import ClassList from "$lib/components/dashboard/ClassList.svelte";
    import { classesState } from "$lib/state/classes.svelte";

    let openCreateClass = $state(false);
</script>

<div class="flex-1 flex flex-col p-[30px] overflow-hidden">
    <div class="flex flex-col gap-[18px]">
        <h1 class="font-bold text-[20px]">Manajemen Kelas</h1>
        <div class="flex flex-row items-center gap-[10px]">
            <p class="text-[12px] text-[#595959]">
                Tahun Ajaran: <span class="text-[#000000] font-semibold"
                    >2026/2027</span
                >
            </p>
            <Separator
                orientation="vertical"
                class="h-[11px] w-px bg-[#d9d9d9]"
            />
            <p class="text-[12px] text-[#595959]">
                Status Akademik: <span
                    class="text-[#000000] font-semibold"
                    >Semester 1</span
                >
            </p>
        </div>
    </div>

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

    {#if classesState.list.length > 0}
        <div class="mt-10">
            <ClassList onCreateClass={() => (openCreateClass = true)} />
        </div>
    {:else}
        <div
            class="flex-1 flex flex-col items-center justify-center -mt-20"
        >
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
    {/if}
</div>
