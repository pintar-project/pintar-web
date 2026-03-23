<script lang="ts">
    import logoPintar from "$lib/assets/images/brand/logo-pintar.png";
    import Ilustration from "$lib/assets/1 5974209.png";
    import ArrowRight from "@lucide/svelte/icons/arrow-right";
    import CheckCircle2 from "@lucide/svelte/icons/check-circle-2";
    import BrainCircuit from "@lucide/svelte/icons/brain-circuit";
    import BookOpen from "@lucide/svelte/icons/book-open";
    import BarChart3 from "@lucide/svelte/icons/bar-chart-3";
    import { page } from "$app/stores";

    let isAuthenticated = $derived($page.data.userRole !== null);
    let dashboardPath = $derived($page.data.userRole === "admin" ? "/admin/manajemen-materi/tambah" : "/guru/dashboard");
</script>

<div class="h-screen w-full overflow-y-auto bg-white flex flex-col font-sans">
    
    <header
        class="w-full h-24 bg-white/70 backdrop-blur-lg fixed top-0 left-0 z-50 border-b border-gray-100 flex items-center justify-between px-6 md:px-16 transition-all"
    >
        <div class="flex items-center gap-12">
            <a href="/">
                <img src={logoPintar} alt="Pintar" class="h-11 w-auto" />
            </a>
            <nav class="hidden md:flex items-center gap-8">
                <a
                    href="#fitur"
                    class="text-[15px] font-medium text-gray-600 hover:text-[#5b5fc7] transition-colors"
                    >Fitur Utama</a
                >
                <a
                    href="#solusi"
                    class="text-[15px] font-medium text-gray-600 hover:text-[#5b5fc7] transition-colors"
                    >Solusi Sekolah</a
                >
                <a
                    href="#kontak"
                    class="text-[15px] font-medium text-gray-600 hover:text-[#5b5fc7] transition-colors"
                    >Hubungi Kami</a
                >
            </nav>
        </div>
        <div class="flex items-center gap-6">
            {#if isAuthenticated}
            <a
                href={dashboardPath}
                class="text-[15px] font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >Dashboard</a
            >
            <a
                href={dashboardPath}
                class="inline-flex items-center justify-center bg-[#5b5fc7] hover:bg-[#4a4ea3] text-white rounded-full px-7 h-11 text-[15px] font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
                Buka Dashboard
            </a>
            {:else}
            <a
                href="/login"
                class="text-[15px] font-semibold text-gray-700 hover:text-gray-900 transition-colors"
                >Masuk</a
            >
            <a
                href="/login"
                class="inline-flex items-center justify-center bg-[#5b5fc7] hover:bg-[#4a4ea3] text-white rounded-full px-7 h-11 text-[15px] font-semibold transition-all hover:shadow-lg hover:shadow-indigo-500/25"
            >
                Mulai Gratis
            </a>
            {/if}
        </div>
    </header>

    
    <main class="grow pt-32 pb-20 px-6 md:px-16 flex flex-col items-center">
        <div
            class="max-w-[1300px] w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center mt-8 md:mt-16"
        >
            <div
                class="flex flex-col gap-7 text-center lg:text-left order-2 lg:order-1"
            >
                <div
                    class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100/50 text-[#5b5fc7] font-semibold text-[13px] self-center lg:self-start mb-2"
                >
                    <span class="relative flex h-2 w-2">
                        <span
                            class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"
                        ></span>
                        <span
                            class="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"
                        ></span>
                    </span>
                    Tingkatkan Kualitas Pembelajaran
                </div>

                <h1
                    class="text-[40px] md:text-[52px] lg:text-[60px] font-extrabold text-[#111827] leading-[1.12] tracking-tight"
                >
                    Ekosistem Pendidikan Berbasis <span
                        class="text-transparent bg-clip-text bg-linear-to-r from-[#5b5fc7] to-[#8b8df2]"
                        >Data Cerdas</span
                    >
                </h1>

                <p
                    class="text-[17px] md:text-[19px] text-[#4b5563] leading-[1.7] max-w-[600px] mx-auto lg:mx-0 font-medium"
                >
                    Sistem pemetaan siswa yang cerdas, mulai dari analisis
                    analitik kognitif hingga gaya belajar. Bantu sekolah dan
                    guru merancang pendidikan yang jauh lebih personal.
                </p>

                <div
                    class="flex flex-col sm:flex-row items-center gap-4 mt-4 justify-center lg:justify-start"
                >
                    {#if isAuthenticated}
                    <a
                        href={dashboardPath}
                        class="inline-flex items-center justify-center bg-[#5b5fc7] hover:bg-[#4a4ea3] text-white rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto shadow-xl shadow-indigo-500/20 transition-all gap-2 group"
                    >
                        Buka Dashboard <ArrowRight
                            class="size-4 group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                    {:else}
                    <a
                        href="/login"
                        class="inline-flex items-center justify-center bg-[#5b5fc7] hover:bg-[#4a4ea3] text-white rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto shadow-xl shadow-indigo-500/20 transition-all gap-2 group"
                    >
                        Coba Pintar Sekarang <ArrowRight
                            class="size-4 group-hover:translate-x-1 transition-transform"
                        />
                    </a>
                    {/if}
                    <a
                        href="#fitur"
                        class="inline-flex items-center justify-center border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 rounded-full px-8 h-14 text-base font-semibold text-gray-700 w-full sm:w-auto transition-colors"
                    >
                        Pelajari Fitur
                    </a>
                </div>

                <div
                    class="flex items-center gap-8 mt-6 justify-center lg:justify-start flex-wrap"
                >
                    <div class="flex items-center gap-2.5">
                        <CheckCircle2 class="text-green-500 size-5" />
                        <span class="text-[15px] text-gray-700 font-semibold"
                            >Diagnosis Kognitif</span
                        >
                    </div>
                    <div class="flex items-center gap-2.5">
                        <CheckCircle2 class="text-green-500 size-5" />
                        <span class="text-[15px] text-gray-700 font-semibold"
                            >Visualisasi Interaktif</span
                        >
                    </div>
                </div>
            </div>

            <div
                class="order-1 lg:order-2 flex justify-center lg:justify-end relative pb-10 lg:pb-0"
            >
                <div
                    class="absolute inset-0 bg-linear-to-tr from-[#5b5fc7]/10 to-transparent rounded-full blur-[80px] w-[80%] h-[80%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                ></div>
                
                <div
                    class="absolute top-10 left-10 w-20 h-20 bg-indigo-100 rounded-full blur-2xl opacity-60"
                ></div>
                <div
                    class="absolute bottom-10 right-10 w-32 h-32 bg-purple-100 rounded-full blur-3xl opacity-60"
                ></div>

                <img
                    src={Ilustration}
                    alt="Dashboard Illustration"
                    class="w-[90%] md:w-[80%] lg:w-[95%] drop-shadow-2xl animate-[float_6s_ease-in-out_infinite]"
                />
            </div>
        </div>

        
        <section id="fitur" class="w-full max-w-[1300px] mt-40 mb-20 relative">
            <div
                class="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-linear-to-b from-transparent to-gray-200 -mt-24"
            ></div>

            <div class="text-center mb-16 flex flex-col items-center">
                <h2
                    class="text-3xl md:text-[38px] font-bold text-[#111827] mb-5 tracking-tight"
                >
                    Membangun Sistem Pendidikan Masa Depan
                </h2>
                <p class="text-gray-500 max-w-2xl text-[17px] leading-relaxed">
                    Kami menyediakan alat canggih yang dirancang secara spesifik
                    untuk mempermudah manajemen sekolah dan observasi
                    perkembangan akademik siswa tiap hari.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div
                    class="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                    <div
                        class="w-16 h-16 rounded-[16px] bg-blue-50 text-blue-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                    >
                        <BarChart3 class="size-8" />
                    </div>
                    <h3
                        class="text-[20px] font-bold text-gray-900 mb-3 tracking-tight"
                    >
                        Pemetaan Analitik
                    </h3>
                    <p
                        class="text-gray-500 leading-[1.7] text-[15px] font-medium"
                    >
                        Dapatkan wawasan mendalam terkait profil kognitif dan
                        gaya belajar tiap kelas dengan dashboard visual
                        interaktif. Evaluasi lebih mudah tanpa dokumen kompleks.
                    </p>
                </div>

                
                <div
                    class="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                    <div
                        class="w-16 h-16 rounded-[16px] bg-[#f2f2fa] text-[#5b5fc7] flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                    >
                        <BookOpen class="size-8" />
                    </div>
                    <h3
                        class="text-[20px] font-bold text-gray-900 mb-3 tracking-tight"
                    >
                        Manajemen Materi
                    </h3>
                    <p
                        class="text-gray-500 leading-[1.7] text-[15px] font-medium"
                    >
                        Berbagi bahan ajar dari pihak administrator secara
                        tersentralisasi. Pantau bank modul pelajaran yang dapat
                        menjadi referensi guru dan sekolah.
                    </p>
                </div>

                
                <div
                    class="bg-white rounded-[24px] p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                >
                    <div
                        class="w-16 h-16 rounded-[16px] bg-purple-50 text-purple-600 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300"
                    >
                        <BrainCircuit class="size-8" />
                    </div>
                    <h3
                        class="text-[20px] font-bold text-gray-900 mb-3 tracking-tight"
                    >
                        Asisten AI Cerdas
                    </h3>
                    <p
                        class="text-gray-500 leading-[1.7] text-[15px] font-medium"
                    >
                        Dapatkan bantuan dalam merancang kurikulum dan menjawab
                        pertanyaan mendesain materi pembelajaran menggunakan
                        manajemen token model AI canggih.
                    </p>
                </div>
            </div>

            <div
                class="mt-20 rounded-[24px] bg-[#111827] px-8 py-16 flex flex-col items-center text-center overflow-hidden relative"
            >
                <div
                    class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"
                ></div>
                <div
                    class="absolute right-0 bottom-0 w-[500px] h-[500px] bg-[#5b5fc7] rounded-full blur-[120px] opacity-30 translate-x-1/3 translate-y-1/3"
                ></div>

                <h2
                    class="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 tracking-tight max-w-2xl"
                >
                    Siap Memulai Transformasi di Sekolah Anda?
                </h2>
                <p class="text-gray-300 text-lg mb-10 relative z-10 max-w-xl">
                    Gabung dengan pengajar terdepan yang menggunakan analisis
                    data untuk mendongkrak capaian akademik harian siswa.
                </p>
                {#if isAuthenticated}
                <a
                    href={dashboardPath}
                    class="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#111827] rounded-full px-10 h-14 text-base font-bold transition-transform hover:scale-105 shadow-xl relative z-10"
                >
                    Masuk ke Dashboard
                </a>
                {:else}
                <a
                    href="/login"
                    class="inline-flex items-center justify-center bg-white hover:bg-gray-100 text-[#111827] rounded-full px-10 h-14 text-base font-bold transition-transform hover:scale-105 shadow-xl relative z-10"
                >
                    Coba Gratis Sekarang
                </a>
                {/if}
            </div>
        </section>
    </main>

    
    <footer class="w-full bg-white border-t border-gray-100 pt-16 pb-8">
        <div
            class="max-w-[1300px] mx-auto px-6 md:px-16 flex flex-col items-center"
        >
            <img
                src={logoPintar}
                alt="Pintar"
                class="h-10 grayscale opacity-40 mb-8"
            />
            <!-- svelte-ignore a11y_invalid_attribute -->
            <div
                class="flex items-center gap-6 mb-8 text-sm font-medium text-gray-500"
            >
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="#" class="hover:text-[#5b5fc7] transition-colors"
                    >Tentang Kami</a
                >
                <!-- svelte-ignore a11y_invalid_attribute -->
                <a href="#" class="hover:text-[#5b5fc7] transition-colors"
                    >Syarat & Ketentuan</a
                >
                <a href="#" class="hover:text-[#5b5fc7] transition-colors"
                    >Kebijakan Privasi</a
                >
            </div>
            <p class="text-gray-400 text-[13px]">
                © 2026 Pintar Edukasi. All rights reserved.
            </p>
        </div>
    </footer>
</div>

<style>
    @keyframes float {
        0%,
        100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-12px);
        }
    }
</style>
