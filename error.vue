<template>
    <div class="page-error">
        <!---->
        <NarayanaLogo class="narayana-logo--error-page" :max-height="mobile ? 40 : 80" />

        <p class="error__title">Something is wrong.</p>

        <!-- TODO: (Syntax Error) Tried using custom interface, but didn't workout. -->
        <p class="error__status-code">{{ error?.statusCode }}</p>
        <p class="error__message">{{ error?.message }}</p>
        <ElButton v-if="isHomePage" type="primary" text size="large" @click="handleError">Go Home</ElButton>
    </div>
</template>

<script lang="ts" setup>
import { ElButton } from 'element-plus';

const error = useError();
const { mobile } = useScreenWidth();
const router = useRouter();

const isHomePage = computed(() => router.currentRoute.value.path == '/')

const handleError = () => {
    clearError({
        redirect: '/',
    });
};
</script>

<style lang="scss">
.page-error {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: rem(8);
    padding: rem(32);
}

.narayana-logo--error-page {
    margin: rem(40) auto;
}

.error {
    &__title {
        font-weight: 600;
        font-size: rem(24);
        margin-bottom: rem(16);
    }

    &__status-code {
        font-size: rem(40);
    }

    &__message {
        font-size: rem(20);
    }
}
</style>
