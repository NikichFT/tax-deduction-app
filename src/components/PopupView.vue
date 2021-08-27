<template>
<div class="popup-fade">
  <div class="popup">
    <div class="popup-view">
      <CloseBtn/>
      <div class="popup__title-main">Налоговый вычет</div>
      <div class="popup__description">
        Используйте налоговый вычет чтобы погасить ипотеку досрочно. Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </div>
      <div class="popup__title">Ваша зарплата в месяц</div>
      <div class="popup__input-area">
        <input type="text" id="popup__input" class="popup__input" placeholder=" Введите данные">
        <label for="popup__input" class="popup__input-label">Поле обязательно для заполнения</label>
      </div>
      <div class="calc-button">Рассчитать</div>
      <DeductionView/>
      <div class="popup-select">
        <div class="popup__title">Что уменьшаем?</div>
        <div class="select-area">
          <div class="select-area__select-btn selected">Платеж</div>
          <div class="select-area__select-btn">Срок</div>
        </div>
      </div>
    </div>
    <div class="add-btn">Добавить</div>
  </div>
  </div>
</template>

<script>
import CloseBtn from './CloseBtn.vue'
import DeductionView from './DeductionView.vue'

export default {
  name: 'PopupView',
  components: {
    CloseBtn, DeductionView
  }
}
</script>

<style lang="scss">
@import '../assets/mixins.scss';
.popup-fade{
    position: absolute;
    content: '';
    overflow-y: scroll;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
}
.popup{
  position: absolute;
  z-index: 99999;
  display: flex;
  flex-direction: column;
  background: #FFFFFF;
  justify-content: space-between;

  &__title-main{
    color: #000000;
  }
  &__description{
    color: #808080;
    word-wrap: break-word;
  }
  &__input{
    border: 1px solid #DFE3E6;
    font-size: 14px;
    line-height: 24px;
    &-label{
      margin-top: 4px;
      font-size: 10px;
      line-height: 12px;
      color: #EA0029;
    }
    &:focus{
      border: 1px solid #DFE3E6 !important;
      outline: none;
    }
    &::placeholder{
      color: #BEC5CC;
    }
    &:hover{
      border: 1px solid #000000;
    }
  }
  &-select{
    display: flex;
  }

}
.select-area{
  display: flex;
  flex-direction: row;
  &__select-btn{
    background: #EEF0F2;
    border-radius: 50px;
    @include display-flex-cntr;
    font-weight: 400;
    color: #000000;
    cursor: pointer;
    &:hover{
      background: #DFE3E6;
      color: #000000;
    }
  }
}
.calc-button{
  color: #EA0029;
  font-weight: 600;
  cursor: pointer;
  &:hover{
    color: #F53A31;
  }
}
.add-btn{
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
  border-radius: 6px;
  color: #FFFFFF;
  @include display-flex-cntr;
  cursor: pointer;
  transition: .2s ease-in-out;
  &:hover{
    background: #EA0029;
    box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
    border-radius: 6px;
  }
}
.selected{
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  color: #FFFFFF;
}
.error{
  border: 1px solid #EA0029;
}
@media screen and (min-width: 0px) {
  .popup{
    top: 0;
    overflow-y: auto;
    left: 0;
    height: 100vh;
    padding: 16px;
    .calc-button{
      font-size: 14px;
      line-height: 24px;
    }
    &__title-main{
      font-size: 18px;
      line-height: 24px;
      font-weight: 600;
      margin-top: $margin;
    }
    &__description{
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      margin-top: $margin;
    }
    &__title{
      font-size: 14px;
      line-height: 24px;
      font-weight: 600;
      margin-top: 24px;
    }
    &__input{
      padding: 0 0 0 10px;
      border: 1px solid #DFE3E6;
      border-radius: 3px;
      height: 40px;
      width: 100%;
      &-area{
        margin: $margin/2 0 $margin/2 0;
      }
    }
    &-select{
      flex-direction: column;
    }
  }
  .select-area{
    margin-top: 24px;
    &__select-btn{
      height: 36px;
      font-size: 14px;
      line-height: 24px;
      padding: 6px 12px 6px 12px;
      margin-right: $margin/2;
    }
  }
  .add-btn{
    width: 100%;
    min-height: 40px;
    margin-top: 40px;
    font-size: 12px;
    line-height: 16px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1439px) {
  .popup{
    top: 120px;
    left: 50%;
    height: auto;
    transform: translate(-50%);
    overflow: hidden;
    border-radius: 30px;
    min-width: 59%;
    padding: 16px 32px 32px 32px;
    &__title-main{
      font-size: 28px;
      line-height: 40px;
      font-weight: 600;
      margin-top: $margin;
    }
    &__description{
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }
    &-select{
      flex-direction: row;
      align-items: center;
    }
  }
  .select-area{
    margin-top: 24px;
    margin-left: 44px;
    &__select-btn{
      margin-right: $margin;
    }
  }
  .add-btn{
    width: 100%;
    min-height: 56px;
    margin-top: 40px;
    font-size: 16px;
    line-height: 24px;
  }
}
@media screen and (min-width: 1440px) {
   .popup{
    top: 120px;
    left: 50%;
    height: auto;
    transform: translate(-50%);
    overflow: hidden;
    border-radius: 30px;
    max-width: 38.3%;
    padding: 32px;
    &__title-main{
      font-size: 28px;
      line-height: 40px;
      font-weight: 600;
      margin-top: $margin;
    }
    &__description{
      font-weight: 400;
      font-size: 14px;
      line-height: 24px;
    }
    &-select{
      flex-direction: row;
      align-items: center;
    }
  }
  .select-area{
    margin-top: 24px;
    margin-left: 44px;
    &__select-btn{
      margin-right: $margin;
    }
  }
  .add-btn{
    width: 100%;
    min-height: 56px;
    margin-top: 40px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
