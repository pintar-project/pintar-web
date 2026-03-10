<script lang="ts">
    import { page } from "$app/state";
    import * as Sidebar from "$lib/components/ui/sidebar/index.js";
    import ChartSplineIcon from "@lucide/svelte/icons/chart-spline";
    import ClipboardListIcon from "@lucide/svelte/icons/clipboard-list";
    import Separator from "./ui/separator/separator.svelte";
    import UsersIcon from "@lucide/svelte/icons/users";
    import BookTextIcon from "@lucide/svelte/icons/book-text";
    import BotIcon from "@lucide/svelte/icons/bot";
    import NoteBookPenIcon from "@lucide/svelte/icons/notebook-pen";
    import BookOpenIcon from "@lucide/svelte/icons/book-open";
    import MessageCircleQuestionIcon from "@lucide/svelte/icons/message-circle-question";
    import logoPintar from "$lib/assets/images/brand/logo-pintar.png";
</script>

<Sidebar.Root>
    <Sidebar.Header
        class="px-[20px] py-[25px] flex flex-col gap-[16px] bg-white"
    >
        <img
            src={logoPintar}
            alt="Pintar"
            class="h-[40px] w-auto object-contain self-center"
        />
        <Separator class="bg-[#d9d9d9] h-[2px] w-[90%] mx-auto mt-[8px]" />
    </Sidebar.Header>

    <Sidebar.Content class="flex flex-col gap-[20px] w-full bg-white">
        <Sidebar.Group class="flex flex-col gap-[12px] w-[90%] mx-auto">
            <Sidebar.GroupLabel
                class="px-px text-[14px] font-normal text-[#8c8c8c]"
                >Dashboard</Sidebar.GroupLabel
            >
            <Sidebar.GroupContent>
                <Sidebar.Menu class="flex flex-col gap-[8px]">
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={page.url.pathname === "/dashboard"}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/dashboard"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <ChartSplineIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Analitik Siswa</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={page.url.pathname === "/"}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/monitor-tugas"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <ClipboardListIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Monitor Tugas</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Separator class="bg-[#d9d9d9] h-px!" />
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
        <Sidebar.Group class="flex flex-col gap-[12px] w-[90%] mx-auto">
            <Sidebar.GroupLabel
                class="px-px text-[14px] font-normal text-[#8c8c8c]"
                >Pusat Pengajaran</Sidebar.GroupLabel
            >
            <Sidebar.GroupContent>
                <Sidebar.Menu class="flex flex-col gap-[8px]">
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={page.url.pathname === "/"}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/manajemen-kelas"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <UsersIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Manajemen kelas</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={page.url.pathname === "/"}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/pustaka-materi"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <BookTextIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Pustaka Materi</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={page.url.pathname === "/"}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/asisten-ai"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <BotIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium">Asisten AI</span>
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Separator class="bg-[#d9d9d9] h-px!" />
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
        <Sidebar.Group class="flex flex-col gap-[12px] w-[90%] mx-auto">
            <Sidebar.GroupLabel
                class="px-px text-[14px] font-normal text-[#8c8c8c]"
                >Manajemen Asesmen</Sidebar.GroupLabel
            >
            <Sidebar.GroupContent>
                <Sidebar.Menu class="flex flex-col gap-[8px]">
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={page.url.pathname === "/"}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/manajemen-kelas"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <NoteBookPenIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Tes Diagnostik</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={page.url.pathname === "/"}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/pustaka-materi"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <NoteBookPenIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Tes Kompetensi</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Separator class="bg-[#d9d9d9] h-px!" />
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
        <Sidebar.Group class="flex flex-col gap-[12px] w-[90%] mx-auto">
            <Sidebar.GroupLabel
                class="px-[10px] text-[14px] font-normal text-[#8c8c8c]"
                >Pusat Bantuan</Sidebar.GroupLabel
            >
            <Sidebar.GroupContent>
                <Sidebar.Menu class="flex flex-col gap-[8px]">
                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={String(page.url.pathname).startsWith(
                                "/panduan-produk",
                            )}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/panduan-produk"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <BookOpenIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Panduan Produk</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>

                    <Sidebar.MenuItem>
                        <Sidebar.MenuButton
                            isActive={String(page.url.pathname).startsWith(
                                "/kirim-feedback",
                            )}
                            class="p-0"
                        >
                            {#snippet child({ props })}
                                <a
                                    href="/kirim-feedback"
                                    {...props}
                                    class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                >
                                    <MessageCircleQuestionIcon
                                        class="size-5 hover:text-[#5b5fc7]!"
                                    />
                                    <span class="font-medium"
                                        >Kirim Feedback</span
                                    >
                                </a>
                            {/snippet}
                        </Sidebar.MenuButton>
                    </Sidebar.MenuItem>
                </Sidebar.Menu>
            </Sidebar.GroupContent>
        </Sidebar.Group>
    </Sidebar.Content>

    <Sidebar.Footer class="px-[20px] pb-[24px] bg-white">
        <Separator class="bg-[#d9d9d9] h-[2px] w-[90%] mx-auto mb-[20px]" />
        <div class="flex items-center gap-[12px] px-[10px]">
            <div
                class="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-[#f2f2fa] text-[15px] font-semibold text-[#1a1c3d]"
            >
                NA
            </div>
            <span class="text-[15px] font-medium text-[#141414]">Nadiem</span>
        </div>
    </Sidebar.Footer>
</Sidebar.Root>
