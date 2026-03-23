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
    import LayoutGridIcon from "@lucide/svelte/icons/layout-grid";
    import UserCogIcon from "@lucide/svelte/icons/user-cog";
    import SettingsIcon from "@lucide/svelte/icons/settings";
    import logoPintar from "$lib/assets/images/brand/logo-pintar.png";

    const userRole = $derived(page.data.userRole);
</script>

<Sidebar.Root>
    <Sidebar.Header
        class="px-[20px] pt-[30px] pb-[10px] flex flex-col gap-[20px] bg-white"
    >
        <img
            src={logoPintar}
            alt="Pintar"
            class="h-[36px] w-auto object-contain self-start ml-2"
        />
        {#if userRole === "admin"}
            <Separator class="bg-[#d9d9d9] h-px!" />
            <div
                class="flex items-center gap-3 bg-[#f3f4fa] p-2.5 rounded-[6px] w-full mx-auto"
            >
                <div
                    class="w-7 h-7 bg-white rounded-[4px] shadow-sm shrink-0"
                ></div>
                <span class="text-[13px] font-medium text-[#252424]"
                    >SMA Negeri 9 Depok</span
                >
            </div>
        {/if}
    </Sidebar.Header>

    <Sidebar.Content class="flex flex-col gap-[20px] w-full bg-white">
        {#if userRole === "admin"}
            <Sidebar.Group class="flex flex-col gap-[12px] w-[90%] mx-auto">
                <Sidebar.GroupLabel
                    class="px-px text-[14px] font-normal text-[#8c8c8c]"
                    >Kelola Organisasi</Sidebar.GroupLabel
                >
                <Sidebar.GroupContent>
                    <Sidebar.Menu class="flex flex-col gap-[8px]">
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) ===
                                    "/admin/manajemen-akun"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/admin/manajemen-akun"
                                        {...props}
                                        class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                    >
                                        <UsersIcon
                                            class="size-5 hover:text-[#5b5fc7]!"
                                        />
                                        <span class="font-medium"
                                            >Manajemen Akun</span
                                        >
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>

                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) ===
                                    "/admin/manajemen-token-ai"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/admin/manajemen-token-ai"
                                        {...props}
                                        class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                    >
                                        <BotIcon
                                            class="size-5 hover:text-[#5b5fc7]!"
                                        />
                                        <span class="font-medium"
                                            >Manajemen Token AI</span
                                        >
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>

                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname).startsWith(
                                    "/admin/manajemen-materi",
                                )}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/admin/manajemen-materi/tambah"
                                        {...props}
                                        class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                    >
                                        <BookTextIcon
                                            class="size-5 hover:text-[#5b5fc7]!"
                                        />
                                        <span class="font-medium"
                                            >Manajemen Materi</span
                                        >
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>

                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) ===
                                    "/admin/manajemen-fitur"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/admin/manajemen-fitur"
                                        {...props}
                                        class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                    >
                                        <LayoutGridIcon
                                            class="size-5 hover:text-[#5b5fc7]!"
                                        />
                                        <span class="font-medium"
                                            >Manajemen Fitur</span
                                        >
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>

                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) ===
                                    "/admin/mata-pelajaran"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/admin/mata-pelajaran"
                                        {...props}
                                        class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                    >
                                        <BookOpenIcon
                                            class="size-5 hover:text-[#5b5fc7]!"
                                        />
                                        <span class="font-medium"
                                            >Mata Pelajaran</span
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
                    >Admin</Sidebar.GroupLabel
                >
                <Sidebar.GroupContent>
                    <Sidebar.Menu class="flex flex-col gap-[8px]">
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) ===
                                    "/admin/akun-admin"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/admin/akun-admin"
                                        {...props}
                                        class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                    >
                                        <UserCogIcon
                                            class="size-5 hover:text-[#5b5fc7]!"
                                        />
                                        <span class="font-medium"
                                            >Akun Admin</span
                                        >
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>

                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) ===
                                    "/admin/setting-cms"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/admin/setting-cms"
                                        {...props}
                                        class="data-[active=true]:bg-[rgba(239,239,249,0.7)]! data-[active=true]:text-[#5b5fc7]! flex items-center gap-3 w-full h-full p-[10px] rounded-[10px] hover:bg-[rgba(239,239,249,0.7)]! hover:text-[#5b5fc7]! group"
                                    >
                                        <SettingsIcon
                                            class="size-5 hover:text-[#5b5fc7]!"
                                        />
                                        <span class="font-medium"
                                            >Setting CMS</span
                                        >
                                    </a>
                                {/snippet}
                            </Sidebar.MenuButton>
                        </Sidebar.MenuItem>
                    </Sidebar.Menu>
                </Sidebar.GroupContent>
            </Sidebar.Group>
        {:else}
            <Sidebar.Group class="flex flex-col gap-[12px] w-[90%] mx-auto">
                <Sidebar.GroupLabel
                    class="px-px text-[14px] font-normal text-[#8c8c8c]"
                    >Dashboard</Sidebar.GroupLabel
                >
                <Sidebar.GroupContent>
                    <Sidebar.Menu class="flex flex-col gap-[8px]">
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) ===
                                    "/guru/dashboard"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/guru/dashboard"
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
                                isActive={String(page.url.pathname) ===
                                    "/guru/dashboard/monitor-tugas"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/guru/dashboard/monitor-tugas"
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
                                isActive={String(page.url.pathname) ===
                                    "/guru/dashboard/manajemen-kelas"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/guru/dashboard/manajemen-kelas"
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
                                isActive={String(page.url.pathname) ===
                                    "/guru/dashboard/pustaka-materi"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/guru/dashboard/pustaka-materi"
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
                                isActive={String(page.url.pathname) ===
                                    "/asisten-ai"}
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
                                        <span class="font-medium"
                                            >Asisten AI</span
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
                    >Manajemen Asesmen</Sidebar.GroupLabel
                >
                <Sidebar.GroupContent>
                    <Sidebar.Menu class="flex flex-col gap-[8px]">
                        <Sidebar.MenuItem>
                            <Sidebar.MenuButton
                                isActive={String(page.url.pathname) === "/"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/"
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
                                isActive={String(page.url.pathname) === "/"}
                                class="p-0"
                            >
                                {#snippet child({ props })}
                                    <a
                                        href="/"
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
        {/if}
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
