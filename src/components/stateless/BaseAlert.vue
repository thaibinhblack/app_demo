<template>
  <div 
    :class="{
      'base-alert': true,
      '--bottom': bottom,
      '--left': left,
      '--right': right,
      '--center': center,
    }"
    :style="{
      top: `${index*1}rem`
    }"
  >
    <b-alert
      class="base-alert__container"
      :show="value"
      fade
      :variant="variant"
    >
      <div class="base-alert__top">
        <div class="base-alert__left">
       
        </div>
        <div class="base-alert__right">
           <button 
            class="base-alert__button" 
            :title="$t('close')"
            @click="close"
          >
             <i class="bi bi-x"></i>
           </button>
        </div>
      </div>
      <div class="base-alert__message">
        <i 
          :class="{
            'base-alert__icon bi': true,
            'bi-check': variant === 'success',
            'bi-emoji-frown': variant === 'warning',
            'bi-bug': variant === 'danger',
          }"
        />
        <span class="base-alert__text">
          {{ message }}
        </span>
       
      </div>
    </b-alert>
  </div>
</template>

<script>
import { GlobalPlugin } from '@/plugins/mixins';

export default {
  name: 'BaseAlert',

  props: {
    label: String,
    message: String,
    value: {
      type: [Boolean, Number],
      default: false,
    },
    variant: {
      type: String,
      default: 'danger',
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false,
    },
    bottom: {
      type: Boolean,
      default: false
    },
    center: {
      type: Boolean,
      default: false,
    },
    index: {
      type: Number
    }
  },

  data: () => ({
    dismissCountDown: true,
  }),

  mixins: [
    GlobalPlugin,
  ],

  methods: {
    close() {
      this.$emit('dismissed');
      this.$emit('input',false);
    }
  },

  destroyed() {
    this.setEmptyAlert();
  }
}
</script>

<style lang="scss">
  .base-alert {
    $this: &;
  
    position: absolute;
    top: 15px;
    right: 15px;

    & &__container {
      padding-bottom: .5rem;
      position: relative;
    }

    &__top {
      position: absolute;
      top: .25rem;
      right: .5rem;
      font-size: .85rem;
      z-index: 3;
    }

    &__button {
      outline: none;
      border: none;
      background-color: transparent;
    }

    &__message {
      display: flex;
      align-items: center;
    }

    &__text {
      margin-left: .5rem;
    }
  }
</style>
