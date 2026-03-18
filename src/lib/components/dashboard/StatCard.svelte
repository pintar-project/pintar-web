<script lang="ts">
    import { ChevronDown } from "@lucide/svelte";

    let { title, value, hasDropdown = false, suffix = "" } = $props();
</script>

<div
    class="bg-white p-6 rounded-[12px] border border-[#d9d9d9] flex flex-col gap-4 h-full"
>
    <div class="flex flex-row justify-between items-start">
        <h3 class="text-[14px] font-semibold text-[#595959]">{title}</h3>
        {#if hasDropdown}
            <ChevronDown class="size-4 text-[#bfbfbf]" strokeWidth={2.5} />
        {/if}
    </div>
    <div class="flex items-baseline gap-1">
        <span class="text-[32px] font-bold text-[#252424]">{value}</span>
        {#if suffix}
            <span class="text-[18px] font-bold text-[#252424] ml-1"
                >{suffix}</span
            >
        {/if}
    </div>
</div>
