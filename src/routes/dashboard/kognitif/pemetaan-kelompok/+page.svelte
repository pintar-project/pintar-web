<script lang="ts">
    import { fly } from "svelte/transition";
    import UsersRound from "@lucide/svelte/icons/users-round";
    import FileDown from "@lucide/svelte/icons/file-down";
    import Filter from "@lucide/svelte/icons/filter";
    import LogOut from "@lucide/svelte/icons/log-out";
    import ArrowUpDown from "@lucide/svelte/icons/arrow-up-down";
    import { kognitifState } from "$lib/states/kognitifState.svelte";

    const groups = [
        {
            name: "Kelompok 1",
            tags: [
                { text: "Audio", color: "bg-[#efeff9] text-[#5b5fc7]" },
                { text: "Tinggi", color: "bg-[#e6fcf5] text-[#20c997]" },
                { text: "Moderate", color: "bg-[#fff9db] text-[#fab005]" },
            ],
            students: [
                {
                    id: "1",
                    name: "Andrian Muhammad",
                    avatar: "https://i.pravatar.cc/150?u=1",
                },
                {
                    id: "2",
                    name: "Alya Zahra",
                    avatar: "https://i.pravatar.cc/150?u=2",
                },
                {
                    id: "3",
                    name: "Zoya Amira",
                    avatar: "https://i.pravatar.cc/150?u=3",
                },
                {
                    id: "4",
                    name: "Amira Syafa",
                    avatar: "https://i.pravatar.cc/150?u=4",
                },
                {
                    id: "5",
                    name: "Naufal Rayyan",
                    avatar: "https://i.pravatar.cc/150?u=5",
                },
                {
                    id: "6",
                    name: "Nara Devano",
                    avatar: "https://i.pravatar.cc/150?u=6",
                },
                {
                    id: "7",
                    name: "Elara Nadine",
                    avatar: "https://i.pravatar.cc/150?u=7",
                },
                {
                    id: "8",
                    name: "Zeno Pratama",
                    avatar: "https://i.pravatar.cc/150?u=8",
                },
            ],
        },
        {
            name: "Kelompok 2",
            tags: [
                { text: "Kinestetik", color: "bg-[#fff4e6] text-[#fd7e14]" },
                { text: "Tinggi", color: "bg-[#e6fcf5] text-[#20c997]" },
            ],
            students: [
                {
                    id: "9",
                    name: "Rafif Alvaro",
                    avatar: "https://i.pravatar.cc/150?u=9",
                },
                {
                    id: "10",
                    name: "Faris Zaydan",
                    avatar: "https://i.pravatar.cc/150?u=10",
                },
                {
                    id: "11",
                    name: "Rania Safira",
                    avatar: "https://i.pravatar.cc/150?u=11",
                },
                {
                    id: "12",
                    name: "Talia Serene",
                    avatar: "https://i.pravatar.cc/150?u=12",
                },
                { id: "13", name: "Rivan Aditya", avatar: "" },
                { id: "14", name: "Vano Arka", avatar: "" },
                { id: "15", name: "Nyla Estella", avatar: "" },
                { id: "16", name: "Arven Althaf", avatar: "" },
            ],
        },
        {
            name: "Kelompok 3",
            tags: [
                { text: "Visual", color: "bg-[#e7f5ff] text-[#228be6]" },
                { text: "Tinggi", color: "bg-[#e6fcf5] text-[#20c997]" },
            ],
            students: [
                {
                    id: "17",
                    name: "Aidan Kareem",
                    avatar: "https://i.pravatar.cc/150?u=17",
                },
                {
                    id: "18",
                    name: "Keira Safira",
                    avatar: "https://i.pravatar.cc/150?u=18",
                },
                {
                    id: "19",
                    name: "Livia Zahra",
                    avatar: "https://i.pravatar.cc/150?u=19",
                },
                {
                    id: "20",
                    name: "Raina Velora",
                    avatar: "https://i.pravatar.cc/150?u=20",
                },
                {
                    id: "21",
                    name: "Ezra Mahardika",
                    avatar: "https://i.pravatar.cc/150?u=21",
                },
                { id: "22", name: "Kael Pradipta", avatar: "" },
                { id: "23", name: "Arka Mahendra", avatar: "" },
                { id: "24", name: "Aira Calista", avatar: "" },
            ],
        },
        {
            name: "Kelompok 4",
            tags: [
                { text: "Visual", color: "bg-[#e7f5ff] text-[#228be6]" },
                { text: "Tinggi", color: "bg-[#e6fcf5] text-[#20c997]" },
            ],
            students: [
                { id: "25", name: "Andrian Muhammad", avatar: "" },
                { id: "26", name: "Andrian Muhammad", avatar: "" },
                { id: "27", name: "Andrian Muhammad", avatar: "" },
                { id: "28", name: "Andrian Muhammad", avatar: "" },
                { id: "29", name: "Andrian Muhammad", avatar: "" },
                { id: "30", name: "Andrian Muhammad", avatar: "" },
                { id: "31", name: "Andrian Muhammad", avatar: "" },
                { id: "32", name: "Andrian Muhammad", avatar: "" },
            ],
        },
    ];
</script>


    <!-- Results Card -->
    {#if kognitifState.showResults}
    <div
        class="bg-white rounded-[24px] border border-border shadow-sm p-8 space-y-8"
        in:fly={{ y: 20, duration: 400 }}
    >
        <div class="flex items-center justify-between">
            <div
                class="flex items-center gap-3 text-[18px] font-bold text-[#252424]"
            >
                <UsersRound class="size-5" />
                <span>Hasil Pengelompokan</span>
            </div>
            <div class="flex items-center gap-3">
                <button
                    class="flex items-center gap-2 px-4 py-2 bg-[#efeff9] text-[#5b5fc7] rounded-[12px] text-[14px] font-semibold hover:bg-[#e5e5f5] transition-colors"
                >
                    <FileDown class="size-4" />
                    Ekspor
                </button>
                <button
                    class="flex items-center gap-2 px-4 py-2 bg-[#f8f9fa] text-[#8c8c8c] rounded-[12px] text-[14px] font-semibold hover:bg-gray-100 transition-colors"
                >
                    <Filter class="size-4" />
                    Filter
                </button>
                <button
                    onclick={() => kognitifState.showResults = false}
                    class="flex items-center gap-2 px-4 py-2 bg-[#efeff9] text-[#5b5fc7] rounded-[12px] text-[14px] font-semibold hover:bg-[#e5e5f5] transition-colors"
                >
                    <LogOut class="size-4" />
                    Tutup
                </button>
            </div>
        </div>

        <div class="grid grid-cols-4 gap-8">
            {#each groups as group}
                <div class="space-y-6">
                    <!-- Group Header -->
                    <div
                        class="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar"
                    >
                        <span
                            class="text-[16px] font-bold text-[#252424] mr-2 whitespace-nowrap"
                            >{group.name}</span
                        >
                        {#each group.tags as tag}
                            <span
                                class={`px-3 py-1 rounded-full text-[11px] font-bold whitespace-nowrap ${tag.color}`}
                            >
                                {tag.text}
                            </span>
                        {/each}
                    </div>

                    <!-- Students List -->
                    <div class="space-y-4">
                        {#each group.students as student}
                            <div class="flex items-center gap-3 group/item">
                                <button
                                    class="p-1 text-gray-300 hover:text-gray-500 transition-colors"
                                >
                                    <ArrowUpDown class="size-4" />
                                </button>
                                <div class="relative">
                                    {#if student.avatar}
                                        <img
                                            src={student.avatar}
                                            alt={student.name}
                                            class="size-9 rounded-full bg-gray-100 object-cover border border-border"
                                        />
                                    {:else}
                                        <div
                                            class="size-9 rounded-full bg-gray-200 border border-border"
                                        ></div>
                                    {/if}
                                </div>
                                <div class="flex-1">
                                    <div
                                        class="border-b border-border pb-3 group-last/item:border-0"
                                    >
                                        <span
                                            class="text-[14px] font-medium text-[#434343]"
                                            >{student.name}</span
                                        >
                                    </div>
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </div>
    {/if}

<style>
    .no-scrollbar::-webkit-scrollbar {
        display: none;
    }
    .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
    }
</style>
