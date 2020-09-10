<template>
  <div id="app">
    <div id="mainTitle">To Do App</div>
    <Calendar :newTask='newTask' v-show='calendarShow' v-on:visibilityChange='updateVisibility' />
    <a id='addButton' v-on:click='addClick'><img id='plus' src="@/assets/plus.png"/></a>
    <AddTask v-show='addTaskShow' v-on:visibilityChange='updateVisibility' v-on:submit='addNewTask'/>
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
      newTask: null
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
    addNewTask: function (newT){
      // When a new task is created in the addTask Vue it triggers the submit event and passes the new Task array
      // then the newTask data is set in App which is bound to a prop in Calendar.
      // When the prop changes in calendar it triggers a method that updates
      this.newTask = newT
      this.addClick()
    },
    addClick: function(){
      let addBut = document.getElementById("addButton")
      if (addBut.classList.value === ""){
        addBut.classList.add("rotated")
        this.updateVisibility('addTask', true)
        this.updateVisibility('calendar', false)
      }else{
        addBut.classList.remove("rotated")
        this.updateVisibility('addTask', false)
        this.updateVisibility('calendar', true)
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
  padding-left: 1vw;
  padding-right: 1vw;
  padding-top: 1vh;
  padding-bottom: 1vh;
  border-radius: 10px;
  background-color: #D3B99F;
}
#addButton{
    position: absolute;
    bottom: 2.5vh;
    right: 2.5vh;
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
    background-color: #D3B99F;
}
.rotated{
  transform: rotate(45deg);
}
</style>
