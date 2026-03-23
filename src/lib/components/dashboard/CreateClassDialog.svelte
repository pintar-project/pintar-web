<script lang="ts">
    import * as Dialog from "$lib/components/ui/dialog/index";
    import { Button } from "$lib/components/ui/button/index";
    import { Input } from "$lib/components/ui/input/index";
    import { Label } from "$lib/components/ui/label/index";
    import { Textarea } from "$lib/components/ui/textarea/index";
    import ChevronRight from "@lucide/svelte/icons/chevron-right";
    import Copy from "@lucide/svelte/icons/copy";
    import Mascot from "$lib/assets/Group.png";
    import { createForm } from "svelte-forms-lib";
    import { createMutation, useQueryClient } from "@tanstack/svelte-query";
    import { kelasService } from "../../../api/kelasService";
    import Cookies from "js-cookie";

    let { open = $bindable(false) } = $props();
    let isSuccess = $state(false);
    let createdClass = $state<Kelas | null>(null);

    const queryClient = useQueryClient();
    const accessToken = Cookies.get("access_token") || "";

    const mutation = createMutation(() => ({
        mutationFn: (values: { nama: string; deskripsi: string }) =>
            kelasService.createKelas(accessToken, values),
        onSuccess: (res) => {
            createdClass = res.data.data;
            isSuccess = true;
            queryClient.invalidateQueries({ queryKey: ["kelas"] });
        },
    }));

    const {
        form,
        errors,
        handleChange,
        handleSubmit,
        handleReset: resetForm,
    } = createForm({
        initialValues: {
            nama: "",
            deskripsi: "",
        },
        onSubmit: (values) => {
            mutation.mutate(values);
        },
    });

    function handleReset() {
        isSuccess = false;
        resetForm();
    }

    function handleClose() {
        open = false;
        setTimeout(() => (isSuccess = false), 300);
    }
</script>

<Dialog.Root
    bind:open
    onOpenChange={(val) => {
        if (!val) handleClose();
    }}
>
    <Dialog.Content class="sm:max-w-[700px] p-8 gap-6">
        {#if !isSuccess}
            <Dialog.Header>
                <Dialog.Title class="text-[24px] font-bold text-[#252424]"
                    >Buat Kelas Baru</Dialog.Title
                >
            </Dialog.Header>
            <div class="grid gap-6 py-4">
                <div class="grid gap-3">
                    <Label
                        for="nama"
                        class="text-[16px] font-semibold text-[#595959]"
                        >Nama Kelas</Label
                    >
                    <Input
                        id="nama"
                        name="nama"
                        onchange={handleChange}
                        bind:value={$form.nama}
                        placeholder="Contoh: Sosiologi X IPS 1"
                        class="h-[56px] px-4 rounded-[12px] border-[#d9d9d9] text-[16px]"
                    />
                    {#if $errors.nama}
                        <p class="text-sm text-red-500">{$errors.nama}</p>
                    {/if}
                </div>
                <div class="grid gap-3">
                    <Label
                        for="deskripsi"
                        class="text-[16px] font-semibold text-[#595959]"
                        >Deskripsi Mata Pelajaran</Label
                    >
                    <div class="relative">
                        <Textarea
                            id="deskripsi"
                            name="deskripsi"
                            onchange={handleChange}
                            bind:value={$form.deskripsi}
                            class="min-h-[160px] p-4 rounded-[12px] border-[#d9d9d9] text-[16px] resize-none"
                        />
                    </div>
                    {#if $errors.deskripsi}
                        <p class="text-sm text-red-500">{$errors.deskripsi}</p>
                    {/if}
                </div>
            </div>
            <Dialog.Footer>
                <Button
                    onclick={handleSubmit}
                    disabled={mutation.isPending}
                    type="submit"
                    class="w-full bg-[#5b5fc7] hover:bg-[#4a4db0] text-white h-[56px] rounded-[12px] text-[16px] font-semibold flex items-center justify-center gap-2"
                >
                    {#if mutation.isPending}
                        <span class="animate-spin mr-2">...</span>
                    {:else}
                        <ChevronRight class="size-5" />
                    {/if}
                    <span
                        >{mutation.isPending
                            ? "Memproses..."
                            : "Lanjutkan"}</span
                    >
                </Button>
            </Dialog.Footer>
        {:else}
            <div class="flex flex-col items-center justify-center py-6 gap-6">
                <img src={Mascot} alt="Mascot" class="w-[280px] h-auto" />

                <div class="text-center space-y-2">
                    <h2 class="text-[28px] font-bold text-[#252424]">
                        Kelas Berhasil Dibuat!
                    </h2>
                    <p class="text-[16px] text-[#252424]">
                        Bagikan kode kelas ini kepada siswa Anda
                    </p>
                </div>

                <div
                    class="bg-[#f0f0f0] px-4 py-2 rounded-[8px] flex items-center gap-3"
                >
                    <Copy class="size-4 text-[#8c8c8c]" />
                    <span
                        class="text-[18px] font-bold text-[#8c8c8c] tracking-wider"
                        >{createdClass?.kode_unik || ""}</span
                    >
                </div>

                <div class="flex w-full gap-4 mt-4">
                    <Button
                        variant="outline"
                        onclick={handleReset}
                        class="flex-1 h-[56px] rounded-[12px] border-[#5b5fc7] text-[#5b5fc7] font-semibold hover:bg-[#5b5fc7]/5"
                    >
                        Buat Lagi
                    </Button>
                    <Button
                        onclick={handleClose}
                        class="flex-1 h-[56px] rounded-[12px] bg-[#5b5fc7] hover:bg-[#4a4db0] text-white font-semibold"
                    >
                        Kembali
                    </Button>
                </div>
            </div>
        {/if}
    </Dialog.Content>
</Dialog.Root>
