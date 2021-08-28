<template>
  <button class="button" @click="SHOW_POPUP">
    Налоговый вычет
  </button>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'Button',
    methods: {
    ...mapActions(['SHOW_POPUP'])
  },
}
</script>

<style scoped lang="scss">
@import '../assets/mixins.scss';

.button{
  @include display-flex-cntr;
  font-family: 'Lab Grotesque';
  font-style: normal;
  font-weight: 500;
  top: 50vh;
  left: 50vw;
  flex-direction: row;
  border: 1px solid #FFFFFF;
  filter: drop-shadow(0px 0px 44px #CFDAE7);
  border-radius: 6px;
  background: transparent;
  color: #FFFFFF;
  white-space: nowrap;
  transition: .2s ease-in-out;
  &:hover{
      background: #FFFFFF;
      color: #000000;
    }
}

@media screen and (min-width: 0px) {
  .button{
    padding: 12px 24px;
    width: 149px;
    height: 40px;
    font-size: 12px;
    line-height: 16px;
    cursor: pointer;
  }
}
@media screen and (min-width : 768px) {
  .button{
    padding: 16px 32px;
    width: 198px;
    height: 56px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
