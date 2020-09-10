<template>
    <div id="addTask">
        <label for="taskName">Task Name: </label>
        <input type="text" id="taskName" name="taskName">
        <label for="dueDate">  Due Date: </label>
        <input type="date" id="dueDate" name="dueDate"><br>
        <br><br>

        <button id="submitAddTask" v-on:click="submitAddTask">Submit</button>
    </div>
</template>

<script>
export default {
    name: 'AddTask',
    methods: {
    submitAddTask: function (){
        let data = {
            'name': document.getElementById("taskName").value,
            'due': document.getElementById("dueDate").value
        }
        console.log("Submitting task")
        fetch(process.env.VUE_APP_ADD_TASK, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        .then(() => {
            this.$emit('visibilityChange', 'addTask', false)
            this.$emit('visibilityChange', 'calendar', true)
        })
    }
}
}

</script>

<style>
#addTask{
    height: auto;
    padding-top: 1vh;
    padding-bottom: 1vh;
    padding-left: 1vw;
    padding-right: 1vw;
    width: auto;
    background-color: #6883BA;
    text-align: center;
    border-radius: 10px;
}
</style>