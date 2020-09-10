# to_do_app_vuecli

## About

- Frontend for a project that allows a user to add events to their 'To-Do-List' and then displays them on an interactive calendar
- Live @ <https://jacobsmi.github.io/ToDoApp_Dist/>

## How things work 

### Addding a Task

- Clicking the plus button in the bottom right corner hides the main calendar and brings up the add task dialog
- After filling out the add task it is submitted to the database as well as passed back to the main App so it can then be passed to the calendar
- In the main app the new task is set to a local data item that is bound to a prop in calendar
- The calendar listens for changes on the prop and when it changes it adds to the tasklist and redisplays in order to avoid a new call to the database and full page refresh
