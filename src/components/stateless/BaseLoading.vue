<template functional>
  <div 
    :class="{
      'base-loading': true,
      '--active': props.loading,
    }"
  >
    <div class="base-loading__container">
      <slot>
        <img 
          :src="props.srcLoading" 
          alt="loading"
        />
      </slot>
    </div>
  </div>
</template>

<script>
import srcFileLoading from '@/assets/images/loading.gif';

export default {
  name: 'BaseLoading',

 props: {
   loading: {
     type: Boolean,
     default: false,
   },
   srcLoading: {
     type: String,
     default: srcFileLoading,
   }
 },
}
</script>

<style lang="scss">
  .base-loading {
    display: none;
    position: fixed;
    background: colors.$color-base-loading-bg;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;

    &.\--active {
      display: flex;
    }

    &__container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
</style>