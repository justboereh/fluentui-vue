<script setup lang="ts">
type Type = 'secondary' | 'primary' | 'text' | 'link'

type Props = {
  type?: Type
}

defineProps<Props>()
</script>

<template>
  <button>
    <slot />
  </button>
</template>
