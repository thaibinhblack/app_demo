<template>
  <div class="home">
    <div class="container">
        <div class="page-container">
          <div class="home__intro">
            <h3 class="txt-center">Demo</h3>
          </div>
          <section-form />        
        </div>
    </div>
  </div>
</template>

<script>
import SectionForm from '@/views/Home/SectionForm';

export default {
  name: 'Home',

  components: {
    SectionForm,
  },
}
</script>

