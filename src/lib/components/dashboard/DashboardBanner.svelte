<script lang="ts">
    import type { Snippet } from "svelte";
    import UsersRound from "@lucide/svelte/icons/users-round";

    let { 
        title, 
        description, 
        buttonLabel, 
        buttonHref, 
        buttonOnClick,
        icon
    } = $props<{
        title: string;
        description: string;
        buttonLabel?: string;
        buttonHref?: string;
        buttonOnClick?: () => void;
        icon?: any;
    }>();
</script>

<div
    class="relative w-full h-[180px] bg-[#fff9e5] rounded-[24px] overflow-hidden flex items-center px-12 gap-8"
>
    <div class="flex-1 space-y-2">
        <h2 class="text-[22px] font-bold text-[#252424]">
            {title}
        </h2>
        <p class="text-[14px] text-gray-600 max-w-[600px]">
            {description}
        </p>
    </div>

    {#if buttonLabel}
        {#if buttonHref}
            <a
                href={buttonHref}
                class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white px-6 py-3 rounded-[12px] font-bold flex items-center gap-2 transition-all"
            >
                {#if icon}
                    {@const Icon = icon}
                    <Icon class="size-5" />
                {:else}
                    <UsersRound class="size-5" />
                {/if}
                <span>{buttonLabel}</span>
            </a>
        {:else}
            <button
                onclick={buttonOnClick}
                class="bg-[#5b5fc7] hover:bg-[#4a4db0] text-white px-6 py-3 rounded-[12px] font-bold flex items-center gap-2 transition-all"
            >
                {#if icon}
                    {@const Icon = icon}
                    <Icon class="size-5" />
                {:else}
                    <UsersRound class="size-5" />
                {/if}
                <span>{buttonLabel}</span>
            </button>
        {/if}
    {/if}

    
    <div
        class="absolute -left-10 -bottom-10 size-40 bg-[#ffec99] rounded-full opacity-50 blur-3xl"
    ></div>
    <div
        class="absolute -right-10 -top-10 size-40 bg-[#ffec99] rounded-full opacity-50 blur-3xl"
    ></div>
</div>