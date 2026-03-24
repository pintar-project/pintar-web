<script lang="ts">
    import { Button } from "$lib/components/ui/button/index.js";
    import { Input } from "$lib/components/ui/input/index.js";
    import { Label } from "$lib/components/ui/label/index.js";
    import Mail from "@lucide/svelte/icons/mail";
    import Lock from "@lucide/svelte/icons/lock";
    import ArrowRight from "@lucide/svelte/icons/arrow-right";
    import CheckCircle from "@lucide/svelte/icons/check-circle";
    import { fade, fly } from "svelte/transition";

    import { createMutation } from "@tanstack/svelte-query";
    import { createForm } from "svelte-forms-lib";
    import { authService } from "../../api/authService";

    import Cookies from "js-cookie";
    import { authState } from "$lib/state/auth.svelte";

    const loginMutation = createMutation(() => ({
        mutationFn: (data: UserLogin) => authService.userLogin(data),
        onSuccess: (response) => {
            const data = response.data.data;
            const accessToken = response.data.token.access_token;

            authState.user = data;

            Cookies.set("access_token", accessToken);
            Cookies.set("user_role", data.role);

            if (data.role === "admin") {
                window.location.href = "/admin/manajemen-materi/tambah";
            } else if (data.role === "guru") {
                window.location.href = "/guru/dashboard";
            } else {
                window.location.href = "/";
            }
        },
        onError: (error: Error) => {
            console.error("Login error:", error);
        },
    }));

    const { form, errors, handleChange, handleSubmit } = createForm({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: (values) => {
            loginMutation.mutate(values as UserLogin);
        },
    });

    const isLoading = $derived(loginMutation.isPending);
</script>

<div class="min-h-screen w-full flex bg-white font-sans">
    <div
        class="hidden lg:flex flex-col flex-1 bg-[#5b5fc7] text-white p-16 relative overflow-hidden justify-between"
    >
        <div
            class="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-white/10 blur-3xl"
        ></div>
        <div
            class="absolute -bottom-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-indigo-900/40 blur-3xl"
        ></div>
        <div
            class="absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-white/5 blur-2xl"
        ></div>

        <div
            class="relative z-10"
            in:fade={{ duration: 1000, delay: 100 }}
        >
            <div class="flex items-center gap-3">
                <div
                    class="w-11 h-11 bg-white rounded-xl flex items-center justify-center"
                >
                    <span
                        class="text-[#5b5fc7] font-black text-2xl tracking-tighter"
                        >P</span
                    >
                </div>
                <span class="text-2xl font-bold tracking-tight">Pintar</span>
            </div>
        </div>

        <div
            class="relative z-10 flex flex-col gap-8 max-w-[480px] my-auto"
            in:fade={{ duration: 1000, delay: 300 }}
        >
            <h1
                class="text-[44px] leading-[1.15] font-bold tracking-tight text-white"
            >
                Mulai Perjalanan <br />
                <span class="text-indigo-200">Belajar Anda</span> Hari Ini.
            </h1>
            <p
                class="text-indigo-100/90 text-[18px] leading-relaxed font-medium"
            >
                Platform manajemen pembelajaran cerdas yang dirancang untuk
                memberikan pengalaman belajar yang lebih terorganisir dan
                efektif.
            </p>

            <div class="flex flex-col gap-5 mt-6">
                <div
                    class="flex items-center gap-4 text-white text-[16px] font-medium"
                    in:fade={{ duration: 600, delay: 500 }}
                >
                    <div
                        class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-400 text-white shrink-0"
                    >
                        <CheckCircle size={16} strokeWidth={3} />
                    </div>
                    Manajemen Kelas Interaktif & Intuitif
                </div>
                <div
                    class="flex items-center gap-4 text-white text-[16px] font-medium"
                    in:fade={{ duration: 600, delay: 600 }}
                >
                    <div
                        class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-400 text-white shrink-0"
                    >
                        <CheckCircle size={16} strokeWidth={3} />
                    </div>
                    Pemetaan Gaya Belajar & Kognitif
                </div>
                <div
                    class="flex items-center gap-4 text-white text-[16px] font-medium"
                    in:fade={{ duration: 600, delay: 700 }}
                >
                    <div
                        class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-400 text-white shrink-0"
                    >
                        <CheckCircle size={16} strokeWidth={3} />
                    </div>
                    Monitor Tugas & Evaluasi Real-time
                </div>
            </div>
        </div>

        <div
            class="relative z-10 text-[13px] text-indigo-300 font-medium"
            in:fade={{ duration: 1000, delay: 800 }}
        >
            &copy; 2026 Platform Pintar. Hak Cipta Dilindungi.
        </div>
    </div>

    <div
        class="flex-1 flex flex-col items-center justify-center p-6 sm:p-12 relative bg-white overflow-hidden"
    >
        <div
            class="absolute inset-0 bg-linear-to-b from-[#f8f9fa] to-white lg:hidden"
        ></div>

        <div
            class="absolute top-8 left-8 lg:hidden flex items-center gap-3 z-10"
            in:fade={{ duration: 800 }}
        >
            <div
                class="w-10 h-10 bg-[#5b5fc7] rounded-xl flex items-center justify-center"
            >
                <span class="text-white font-black text-[22px] tracking-tighter"
                    >P</span
                >
            </div>
            <span class="text-xl font-bold text-gray-900 tracking-tight"
                >Pintar</span
            >
        </div>

        <div
            class="w-full max-w-[420px] flex flex-col gap-8 relative z-10"
            in:fade={{ duration: 800, delay: 200 }}
        >
            <div class="flex flex-col gap-2.5">
                <h2 class="text-[32px] font-bold tracking-tight text-[#111827]">
                    Selamat Datang Kembali
                </h2>
                <p class="text-[#4b5563] text-[15px] leading-relaxed">
                    Silakan masuk ke akun Anda untuk mengakses dashboard dan
                    melanjutkan aktivitas Anda.
                </p>
            </div>

            <div class="flex flex-col" in:fade={{ duration: 600, delay: 400 }}>
                <Button
                    variant="outline"
                    class="h-12 rounded-[12px] border-[#e5e7eb] bg-white hover:bg-gray-50 flex items-center justify-center gap-3 font-semibold text-[#4b5563] transition-all"
                >
                    <svg class="w-[18px] h-[18px]" viewBox="0 0 24 24">
                        <path
                            fill="#4285F4"
                            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                        />
                        <path
                            fill="#34A853"
                            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                        />
                        <path
                            fill="#FBBC05"
                            d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l3.66-2.84z"
                        />
                        <path
                            fill="#EA4335"
                            d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                        />
                    </svg>
                    Lanjutkan dengan Google
                </Button>
            </div>

            <div
                class="flex items-center gap-4 px-1"
                in:fade={{ duration: 600, delay: 500 }}
            >
                <div class="h-px bg-[#e5e7eb] flex-1"></div>
                <span
                    class="text-[12px] font-bold text-[#9ca3af] uppercase tracking-wider"
                    >Atau dengan Email</span
                >
                <div class="h-px bg-[#e5e7eb] flex-1"></div>
            </div>

            <form onsubmit={handleSubmit} class="flex flex-col gap-6">
                <div class="flex flex-col gap-5">
                    <div
                        class="flex flex-col gap-2.5"
                        in:fade={{ duration: 600, delay: 600 }}
                    >
                        <Label
                            for="email"
                            class="text-[14px] font-semibold text-[#374151]"
                            >Alamat Email</Label
                        >
                        <div class="relative group">
                            <div
                                class="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#5b5fc7] transition-colors duration-300"
                            >
                                <Mail size={18} strokeWidth={2.5} />
                            </div>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="nama@email.com"
                                value={$form.email}
                                oninput={handleChange}
                                class="h-12 pl-11 bg-white border-[#d1d5db] hover:border-[#9ca3af] focus-visible:ring-[3px] focus-visible:ring-[#5b5fc7]/15 focus-visible:border-[#5b5fc7] rounded-[12px] text-[15px] font-medium text-[#111827] placeholder:text-[#9ca3af] placeholder:font-normal transition-all"
                                required
                            />
                        </div>
                        {#if $errors.email}
                            <span class="text-xs text-red-500"
                                >{$errors.email}</span
                            >
                        {/if}
                    </div>

                    <div
                        class="flex flex-col gap-2.5"
                        in:fade={{ duration: 600, delay: 700 }}
                    >
                        <div class="flex justify-between items-center">
                            <Label
                                for="password"
                                class="text-[14px] font-semibold text-[#374151]"
                                >Password</Label
                            >
                            <a
                                href="/forgot-password"
                                class="text-[13px] font-semibold text-[#5b5fc7] hover:text-[#4a4db0] hover:underline transition-all"
                                >Lupa Password?</a
                            >
                        </div>
                        <div class="relative group">
                            <div
                                class="absolute left-4 top-1/2 -translate-y-1/2 text-[#9ca3af] group-focus-within:text-[#5b5fc7] transition-colors duration-300"
                            >
                                <Lock size={18} strokeWidth={2.5} />
                            </div>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                value={$form.password}
                                oninput={handleChange}
                                class="h-12 pl-11 bg-white border-[#d1d5db] hover:border-[#9ca3af] focus-visible:ring-[3px] focus-visible:ring-[#5b5fc7]/15 focus-visible:border-[#5b5fc7] rounded-[12px] text-[15px] font-medium text-[#111827] placeholder:text-[#9ca3af] placeholder:font-normal transition-all"
                                required
                            />
                        </div>
                        {#if $errors.password}
                            <span class="text-xs text-red-500"
                                >{$errors.password}</span
                            >
                        {/if}
                    </div>
                </div>

                <div class="pt-2" in:fade={{ duration: 800, delay: 800 }}>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        class="w-full h-12 bg-[#5b5fc7] hover:bg-[#4a4db0] text-white font-bold text-[15px] rounded-[12px] transition-all flex items-center justify-center gap-2 group/btn"
                    >
                        {#if isLoading}
                            <div
                                class="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"
                            ></div>
                        {:else}
                            Masuk ke Dashboard
                            <ArrowRight
                                size={18}
                                strokeWidth={2.5}
                                class="group-hover/btn:opacity-80 transition-opacity"
                            />
                        {/if}
                    </Button>
                </div>
            </form>

            <div
                class="flex justify-center items-center gap-1.5 text-[14px] mt-2 font-medium"
                in:fade={{ duration: 1000, delay: 1000 }}
            >
                <span class="text-[#6b7280]">Belum punya akun?</span>
                <a
                    href="/register"
                    class="text-[#5b5fc7] hover:text-[#4a4db0] hover:underline transition-all font-semibold"
                    >Daftar sekarang</a
                >
            </div>
        </div>
    </div>
</div>

<style>
    :global(body) {
        font-family:
            "Inter",
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            Roboto,
            Helvetica,
            Arial,
            sans-serif;
        background-color: #ffffff;
    }
</style>