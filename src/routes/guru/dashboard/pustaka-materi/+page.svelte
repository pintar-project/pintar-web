<script lang="ts">
    import Input from "$lib/components/ui/input/input.svelte";
    import Button from "$lib/components/ui/button/button.svelte";
    import Search from "@lucide/svelte/icons/search";
    import Filter from "@lucide/svelte/icons/filter";

    const books = [
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Sejarah Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
        { title: "Bahasa Indonesia untuk Kelas X", publisher: "Penerbit - Arya Duta", image: "/book_cover.png" },
    ];
</script>

<div class="px-8 py-6 flex flex-col gap-8">
    
    <div class="flex flex-row items-center gap-4">
        <div class="relative w-full max-w-[400px]">
             <Search class="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <Input 
                placeholder="Search" 
                class="pl-10 h-11 border-gray-200 focus:ring-[#5b5fc7] focus:border-[#5b5fc7] rounded-lg shadow-sm" 
            />
        </div>
        
        <Button variant="outline" class="h-11 border-gray-200 text-gray-500 gap-2 font-medium px-5 rounded-lg shadow-sm hover:bg-gray-50">
            <Filter class="size-4" />
            Filter Jurusan
        </Button>
        
        <Button variant="outline" class="h-11 border-gray-200 text-gray-500 gap-2 font-medium px-5 rounded-lg shadow-sm hover:bg-gray-50">
            <Filter class="size-4" />
            Filter Kelas
        </Button>
    </div>

    
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-12">
        {#each books as book}
            <div class="flex flex-col gap-4 group cursor-pointer">
                <div class="aspect-[3/4.2] rounded-xl overflow-hidden shadow-sm group-hover:shadow-xl transition-all duration-300 border border-gray-100 flex items-center justify-center bg-gray-50">
                    <img 
                        src={book.image} 
                        alt={book.title} 
                        class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
                    />
                </div>
                <div class="flex flex-col gap-1.5 px-0.5">
                    <h3 class="font-bold text-[15px] text-gray-900 group-hover:text-[#5b5fc7] transition-colors line-clamp-2 leading-snug">
                        {book.title}
                    </h3>
                    <p class="text-[13px] text-gray-500 font-medium">
                        {book.publisher}
                    </p>
                </div>
            </div>
        {/each}
    </div>

    
    <div class="flex justify-center items-center gap-5 mt-10 pb-16">
        <Button 
            variant="outline" 
            class="border-[#5b5fc7] text-[#5b5fc7] hover:bg-[#5b5fc7]/5 font-bold px-8 h-12 rounded-xl text-[15px] transition-all"
        >
            Sebelumnya
        </Button>
        <Button 
            class="bg-[#5b5fc7] hover:bg-[#4a4db5] text-white font-bold px-8 h-12 rounded-xl text-[15px] shadow-lg shadow-[#5b5fc7]/20 transition-all hover:-translate-y-0.5 active:translate-y-0"
        >
            Selanjutnya
        </Button>
    </div>
</div>

<style>
    
    :global(body) {
        -webkit-font-smoothing: antialiased;
    }
</style>
