<script lang="ts">
    import Users from "@lucide/svelte/icons/users";
    import Copy from "@lucide/svelte/icons/copy";
    import BookOpen from "@lucide/svelte/icons/book-open";

    import { type Class } from "$lib/state/classes.svelte";

    let { classData }: { classData: Class } = $props();

    const bgColorMap: Record<string, string> = {
        '#5b5fc7': '#E2E4FF',
        '#e8a5ac': '#F8CCD1',
        '#b4e1fa': '#D1EEFE',
        '#c7cbf1': '#E2E4FF',
    };

    const bgColor = $derived(bgColorMap[classData.color] || '#E2E4FF');
</script>

<div class="bg-white rounded-[20px] border border-[#f0f0f0] overflow-hidden flex flex-col shadow-sm transition-all hover:shadow-md cursor-pointer group">
    <div 
        class="h-[140px] p-6 relative flex flex-col justify-end overflow-hidden"
        style="background-color: {bgColor};"
    >
        <BookOpen 
            class="absolute -right-4 -top-4 size-40 text-black/5 rotate-12 pointer-events-none" 
        />
        
        <div class="relative z-10">
            <h3 class="text-[24px] font-bold text-[#252424] leading-tight line-clamp-1 group-hover:text-[#5b5fc7] transition-colors">
                {classData.name}
            </h3>
            <p class="text-[14px] text-[#595959] mt-1 line-clamp-2 leading-relaxed">
                {classData.description || "Belum ada deskripsi kelas."}
            </p>
        </div>
    </div>

    <div class="p-4 px-6 flex items-center justify-between border-t border-[#f0f0f0]">
        <div class="flex items-center gap-2 text-[#8c8c8c]">
            <Users class="size-4" />
            <span class="text-[14px] font-medium">{classData.studentCount || 0}</span>
        </div>
        
        <div class="bg-[#f0f0f0] px-3 py-1.5 rounded-[10px] flex items-center gap-2">
            <Copy class="size-3.5 text-[#8c8c8c]" />
            <span class="text-[12px] font-bold text-[#8c8c8c] tracking-wider uppercase">
                {classData.code}
            </span>
        </div>
    </div>
</div>
