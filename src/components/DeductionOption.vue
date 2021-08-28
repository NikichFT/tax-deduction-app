<template>
    <div class="deduction-view__str">
        <div class="deduction-view__checkbox-area">
            <input type="checkbox" :id="yearId" :checked="obj.use" class="deduction-view__checkbox" name="choose" @change="CHOOSE_YEAR">
            <label :for="yearId" class="deduction-view__checkbox-label">{{obj.value}} рублей <span style="color: #808080">в {{yearId + 1}}-ый год</span></label>
        </div>
        <hr align="center" width="100%" size="2" color="#DFE3E6"/>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'DeductionOption',
  props: {
      yearId: Number,
      obj: Object
  },
  methods: {
      ...mapActions(['CHOOSE_YEAR', 'VALIDATE'])
  },
  watch: {
      obj(){
          this.VALIDATE()
      }
  }
}
</script>

<style>

</style>
