<script lang="ts">
    let { children } = $props();
</script>

<div class="h-[calc(100vh-40px)] w-full overflow-hidden flex flex-col">
    {@render children?.()}
</div>
