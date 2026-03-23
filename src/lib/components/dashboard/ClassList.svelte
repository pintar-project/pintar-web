<script lang="ts">
    import ClassCard from "./ClassCard.svelte";
    import { goto } from "$app/navigation";

    let {
        onCreateClass,
        classes,
    }: { onCreateClass: () => void; classes: Kelas[] } = $props();

    const colors = ["#5b5fc7", "#e8a5ac", "#b4e1fa", "#c7cbf1"];

    function handleSelect(cls: Kelas) {
        goto(`/guru/dashboard/manajemen-kelas/${cls.id}`);
    }
</script>

<div
    class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
>
    {#each classes as classData, i}
        <button onclick={() => handleSelect(classData)} class="text-left">
            <ClassCard {classData} color={colors[i % colors.length]} />
        </button>
    {/each}
</div>
