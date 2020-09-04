<template>
  <div id="app">
    <div id="mainTitle">To Do App</div>
    <Calendar />
  </div>
</template>

<script>
import Calendar from './components/Calendar'

export default {
  name: 'App',
  components: {
    Calendar
  }
}
</script>

<style>
#app{
  display: grid;
  justify-items: center;
}
#mainTitle{
  margin-top: -5px;
  margin-bottom: 5px;
  font-size: 5vh;
}
</style>
