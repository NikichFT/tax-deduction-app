<template>
  <div id="app">
    <Button @click.native="showPopup"/>
  </div>
</template>

<script>
import Button from './components/Button.vue'

export default {
  name: 'App',
  components: {
    Button
  },
  data() {
    return {
      popupOpen: false
    }
  },
  methods: {
    showPopup() {
      this.popupOpen = true
    }
  }

}
</script>

<style lang="scss">
  @font-face {
    font-family: 'Lab Grotesque';
    src: url("./fonts/LabGrotesque-Regular.ttf") format("truetype");
    font-weight: normal;
 }

*{
  box-sizing: border-box;
}
html {
  margin: 0;
  padding: 0;
  height: 100%;
}
body {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: linear-gradient(255.35deg, #DC3131 0.83%, rgba(255, 79, 79, 0) 108.93%), #FF5E56;
  background-repeat: no-repeat;
  box-shadow: 0px -0.11px 16.9495px rgba(183, 187, 225, 0.33);
  width: 100vw;
  height: 100vh;
  position: fixed;
  font-family: 'Lab Grotesque';
  font-style: normal;
  font-weight: 500;
  margin: 0;
}
#app{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
