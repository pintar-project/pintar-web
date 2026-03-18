<script lang="ts">
    import { classesState } from "$lib/state/classes.svelte";
    import ClassCard from "./ClassCard.svelte";

    import { type Class } from "$lib/state/classes.svelte";

    import { goto } from "$app/navigation";

    let { onCreateClass }: { onCreateClass: () => void } = $props();

    function handleSelect(cls: Class) {
        goto(`/manajemen-kelas/${cls.id}`);
    }
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {#each classesState.list as classData}
        <button onclick={() => handleSelect(classData)} class="text-left">
            <ClassCard {classData} />
        </button>
    {/each}
</div>
