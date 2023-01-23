// The app should:


 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

$(document).ready(function() {
    // * Display the current day at the top of the calender when a user opens the planner.
    let currentDate = $('#currentDay');
    var today = moment();
    currentDate.text(today.format("dddd, MMMM D YYYY"));

    // Render and display the daily planner 
    // The rows of the planner must start with 9 and end with 5.
    // Initialise the starting hour
    function renderPlanner(today, events) {
        let hourRow = moment(today).hour(9); // This will start the rows from 9
        let calender = $(".container");
        calendar.empty();

        // Increment the number of rows by 1 and display it on the page
        // Increment until 'X' number of rows is displayed
        for (i = 1; i < 10; i++) {
            let row = $("<div>").addClass("row");
        }
    }

});