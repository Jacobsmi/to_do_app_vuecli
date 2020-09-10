<template>
  <div id="app">
    <div id="mainTitle">To Do App</div>
    <Calendar v-show='calendarShow' v-on:visibilityChange='updateVisibility' />
    <a id='addButton' v-on:click='addClick'><img id='plus' src="@/assets/plus.png"/></a>
    <AddTask v-show='addTaskShow' v-on:visibilityChange='updateVisibility' />
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
    bottom: 1vh;
    right: 1vh;
    height: 5vh;
    width: 5vh;
    border-radius: 50%;
    background-color: #D3B99F;
}
.rotated{
  transform: rotate(45deg);
}
</style>
