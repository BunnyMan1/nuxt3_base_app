<template>
    <span class="sized-box" :style="{
        'height': height ? pixelToRem(height) : '100%',
        'width': width ? pixelToRem(width) : '100%'
    }"></span>
</template>

<script lang="ts" setup>
interface Props {
    height?: number;
    width?: number;
};

const props = withDefaults(defineProps<Props>(), {});
</script>

<style lang="scss">
.sized-box {
    display: block;
}
</style>
