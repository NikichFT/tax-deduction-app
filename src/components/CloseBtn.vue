<template>
  <div class="close-btn-area"  @click="CLOSE_POPUP">
    <div class="close-btn">
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CloseBtn',
  methods: {
    ...mapActions(['CLOSE_POPUP'])
  }
}
</script>

<style lang="scss">
@import '../assets/mixins.scss';

.close-btn-area{
  @include display-flex-cntr;
  position: absolute;
  cursor: pointer;
  &:hover{
    opacity: 0.3;
  }
}
.close-btn{
  background-image: url("../img/close-btn.svg");
  background-repeat: no-repeat;
  background-position: center;
}
@media screen and (min-width: 0px) {
  .close-btn{
    width: 12px;
    height: 12px;
  }
  .close-btn-area{
    width: 24px;
    height: 24px;
    left: calc(100% - 40px);
  }
}
@media screen and (min-width : 768px) {
  .close-btn{
    width: 18px;
    height: 18px;
    transform: scale(1.5);
  }
  .close-btn-area{
    width: 40px;
    height: 40px;
    left: calc(100% - 72px);
  }
}
</style>
