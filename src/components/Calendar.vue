<template>
    <div id="calendar">
        The calendar will go here.
        {{ days }}
    </div>
</template>

<script>
export default {
    name: 'Calendar', 
    data: function () {
        return {
            days: []
        }
    },
    created(){
        // Create a Date object to hold the current date
        let curDate = new Date()
        // Find the number of days in the current month
        let daysInMonth = new Date(curDate.getFullYear(), curDate.getMonth()+1, 0).getDate()
        // For each day in the month add the day of the month to the corresponding spot in the url
        for (let i = 0; i < daysInMonth; i++){
            this.days[i] = [i+1]
        }
        // Fetches Data from the API
        fetch(process.env.VUE_APP_GET_TASKS)
        // Waits until the data has been fetched then executes
        // Returns the parsed json from the API response
        .then(response => response.json())
        // Waits until json has been parsed
        // Passes the list of tasks into an anon function
        .then(tasks =>{
            /*
                task objects are represented as arrays where:
                [0] => int:task id
                [1] => string:task name
                [2] => string:task due date(YEAR-MONTH-DAY)
                [3] => int:completed (0=false, 1=true)
            */
            // Iterates through each task
            tasks.forEach(task => {
                // Get the individual parts of the date
                let dateParts = task[2].split("-")
                // Checks if task is in the current year
                if (curDate.getFullYear() === parseInt(dateParts[0])){
                    // Then check if in the current month
                    if (curDate.getMonth()+1 === parseInt(dateParts[1])){
                        // If both are true push the task array to the proper day
                        this.days[parseInt(dateParts[2])-1].push(task)
                    }
                }
            });
            // Pad the calendar so it can display properly
            let daysBeforeStart = new Date(curDate.getFullYear(), curDate.getMonth(), 1).getDay()
            // Add empty spots to the beginning of the array so the month can start on the proper day
            for (let i = 0; i < daysBeforeStart; i++){
                // Add empty arrays to the beginning of the days array
                this.days.unshift([])
            }
            // Add days to the end until it reaches the standard calendar length of 35
            for (let i = this.days.length; i < 35; i++){
                // Add an empty array to the end
                this.days.push([])
            }
        })
    }
}
</script>

<style>

</style>