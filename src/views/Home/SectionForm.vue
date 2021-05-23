<template>
  <section class="row section-form">
    <div class="col-6 m-auto form-demo">
      <div class="card form-demo__card">
        <form 
          class="form-demo__form"
            @submit.prevent="sendServer"
        >
          <div class="form-demo__input-container">
            <label for="" class="form-demo__label">
              {{ $t('form.UrlApi.label') }}
            </label>
            <b-input
              disabled
              :class="{
                'form-demo__input': true,
                '--active': demo.url_api 
              }" 
              v-model="demo.url_api"
              :placeholder="$t('form.UrlApi.placeholder')"
            /> 
          </div>

            <div class="form-demo__input-container">
            <label for="" class="form-demo__label">
              {{ $t('form.methods.label') }}
            </label>
             <b-form-select
              :class="{
                'form-demo__select': true,
              }" 
              v-model="demo.methods" 
              :options="options"
            />
          </div>

          <div class="form-demo__input-container">
            <label for="" class="form-demo__label">
              {{ $t('form.content.label') }}
            </label>
            <b-input
            :class="{
              'form-demo__input': true,
              '--active': demo.content 
            }" 
            v-model="demo.message"
            :placeholder="$t('form.content.placeholder')"
          /> 
          </div>
        
          <div class="form-demo__group-button">
            <button class="btn --primary" type="submit">
              {{ $t('form.submit.label') }}
            </button>
          </div>
        </form>
      </div>
      
    </div>
  </section>
</template>

<script>
import BaseForm from '@/components/stateless/BaseForm';
import { GlobalPlugin } from '@/plugins/mixins';

const URL_API = process.env.VUE_APP_URL_API

export default {
  name: 'SectionForm',

  components: {
    BaseForm,
  },

  data: () => ({
    demo: {
      url_api: `${URL_API}/demo`,
      message: '',
      methods: 'GET'
    },
    options: [
      {
        text: 'GET',
        value: 'GET',
      },
      {
        text: 'POST',
        value: 'POST',
      },
      {
        text: 'PUT',
        value: 'PUT',
      },
      {
        text: 'DELETE',
        value: 'DELETE',
      }
    ]
  }),

  mixins: [
    GlobalPlugin,
  ],

  methods: {
    sendServer() {
      this.startLoading();
      try {
        this.$http({
          url: '/demo',
          method: this.demo.methods,
          data: this.demo.message ? {message: this.demo.message} : {}
        }).then((response) => {

          this.setAlert({
            variant: 'success',
            message: response.data.message,
          });
          this.closeLoading();
        })
        .catch((err) => {
          console.log(err.response)
          this.setAlert({
            variant: 'success',
            message: err.response.statusText,
          });
          this.closeLoading();
        })
      } catch (error) {
         this.setAlert({
            variant: 'danger',
            message: 'Error server!!!',
          });
          this.closeLoading();
          this.setEmptyAlert();
      }
    }
  }
}
</script>

<style lang="scss">
  .form-demo {
    &__card {
      padding: 1.5rem;
    }

    &__label {
      font-size: .95rem;
      margin-bottom: .25rem;
      font-weight: bold;
    }

    &__input {
      &.\--active {
        background-color: colors.$color-input-active-bg;
      }

      &:focus, &:active {
        outline: none;
        box-shadow: none;
        background: colors.$color-input-focus-bg;
      }
    }

    &__input-container {
      padding-bottom: 1rem;
    }

    &__group-button {
      display: flex;
      justify-content: flex-end;
    }

    &__select {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
    }
  }
</style>