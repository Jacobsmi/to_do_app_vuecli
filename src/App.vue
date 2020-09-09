<template>
  <div id="app">
    <div id="mainTitle">To Do App</div>
    <Calendar v-show='calendarShow' v-on:visibilityChange='updateVisibility' />
    <div v-show='addTaskShow' v-on:click="addClick" id="add">
      <AddTask />
    </div>
  </div>
</template>

<script>
import Calendar from './components/calendar/Calendar'
import AddTask from './components/addTasks/addTask'
export default {
  name: 'App',
  components: {
    Calendar,
    AddTask
  }, 
  data: function (){
    return {
      calendarShow: true,
      addTaskShow: false,
    }
  },
  methods:{
    updateVisibility: function (comp, value) {
      if (comp === 'calendar'){
        this.calendarShow = value
      }else if(comp === 'addTask'){
        this.addTaskShow = value
      }
    },

    addClick: function(){
      this.updateVisibility('addTask', false)
      this.updateVisibility('calendar', true)
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
