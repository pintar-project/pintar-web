<script lang="ts">
    import { Calendar, Users } from "@lucide/svelte";
    import { Button } from "$lib/components/ui/button";

    let { title, deadline, submissionCount, totalStudents } = $props();
</script>

<div
    class="bg-white p-5 rounded-[12px] border border-[#d9d9d9] flex flex-col gap-5"
>
    <div class="space-y-2.5">
        <h3
            class="text-[15px] font-bold text-[#252424] leading-[1.4] line-clamp-2 min-h-[2.8rem]"
        >
            {title}
        </h3>
        <div class="flex items-center gap-1.5 text-[#f59e0b]">
            <Calendar class="size-3.5" strokeWidth={2.5} />
            <span class="text-[12px] font-bold">Tenggat {deadline}</span>
        </div>
    </div>

    <div
        class="flex items-center justify-between mt-1 pt-1 border-t border-transparent"
    >
        <Button
            variant="outline"
            class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white hover:text-white cursor-pointer border-none h-8 px-3 rounded-[8px] text-[12px] font-bold transition-all"
        >
            Lihat Tugas
        </Button>
        <div class="flex items-center gap-1.5 text-[#595959] ml-2">
            <Users class="size-3.5" strokeWidth={2} />
            <span class="text-[11px] font-bold whitespace-nowrap"
                >{submissionCount}/{totalStudents} Dikumpulkan</span
            >
        </div>
    </div>
</div>