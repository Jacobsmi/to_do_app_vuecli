<template>
  <div id="app">
    <div id="mainTitle">To Do App</div>
    <Calendar v-on:visibilityChange='updateVisibility' />

  </div>
</template>

<script>
import Calendar from './components/calendar/Calendar'

export default {
  name: 'App',
  components: {
    Calendar
  }, 
  data: function (){
    return {
      calendarShow: false,
      taskShow: false,
    }
  },
  methods:{

    updateVisibility(comp, value) {
      if (comp === "calendar"){
        this.calendarShow = value
      }
      else if (comp === "task"){
        this.taskShow = value
      }
    }

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
