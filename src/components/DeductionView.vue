<template>
    <div class="deduction-view">
        <div class="deduction-view__title" v-if="ARR_YEARS.length">Итого можете внести в качестве досрочных:</div>
        <DeductionOption v-for="(obj, year) in ARR_YEARS" :key="year" :yearId="year" :obj="obj"/>
    </div>
</template>

<script>
import DeductionOption from './DeductionOption.vue'
import { mapGetters } from 'vuex';

export default {
  name: 'DeductionView',
  components: {
    DeductionOption
  },
  computed: {
    ...mapGetters(['ARR_YEARS'])
  }
}
</script>

<style lang="scss">
@import '../assets/mixins.scss';

.deduction-view{
    display: flex;
    flex-direction: column;
    &__title{
        font-size: 14px;
        line-height: 24px;
        font-weight: 600;
        margin-top: 16px;
    }
    &__str{
        display: flex;
        flex-direction: column;
    }
    &__checkbox{
        width: 20px;
        height: 20px;
        margin: 0;
        appearance: none;
        border: 1px solid #DFE3E6;
        border-radius: 6px;
        cursor: pointer;
        &:hover{
            border: 1px solid #000000;
        }
        &-label{
            font-size: 14px;
            line-height: 24px;
            margin-left: 11px;
            cursor: pointer;
        }
        &-area{
            display: flex;
            align-items: center;
            margin-top: $margin;
            margin-bottom: $margin;
        }
        &:checked{
            background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
            border: none;
        }
        &::after{
            content: '';
            position: absolute;
            width: 12px;
            height: 5px;
            border: 2px solid #FFFFFF;
            border-top: none;
            border-right: none;
            vertical-align: middle;
            -webkit-transform: rotate(-45deg);
            -moz-transform: rotate(-45deg);
            -o-transform: rotate(-45deg);
            -ms-transform: rotate(-45deg);
            transform: rotate(-45deg);
            display: none;
        }
        &:checked::after{
            display: block;
            margin-left: 3px;
            margin-top: 5px;
        }
    }
}
hr{
    border: 0;
    height: 1px;
    margin: 0;
}
</style>
