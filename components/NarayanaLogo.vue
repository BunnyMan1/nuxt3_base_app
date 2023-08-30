<template>
    <!-- TODO: Correct this <nuxt-link> to <component> tag and conditionally use the below linkComponent. -->
    <nuxt-link to="/" class="narayana-logo">
        <img :style="{ 'max-height': pixelToRem(maxHeight) }" :src="onlyLogo ? NarayanaLogo : NarayanaLogoFull"
            alt="Narayana Educational Institutions Logo" />
    </nuxt-link>
</template>

<script lang="ts" setup>
import NarayanaLogo from "@branding/narayana_logo.svg";
import NarayanaLogoFull from "@branding/narayana_logo_full.svg";

interface Props {
    maxHeight?: number;
    onlyLogo?: boolean;
    routeToHome?: boolean;
};

const props = withDefaults(defineProps<Props>(), {
    maxHeight: 40,
    onlyLogo: false,
    routeToHome: true,
});

const linkComponent = computed(() => props.routeToHome ? 'nuxt-link' : 'div')

</script>

<style lang="scss">
</style>
