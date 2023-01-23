// The app should:


 
// * Present timeblocks for standard business hours when the user scrolls down.
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

$(document).ready(function() {

    loadPlanner();
    // * Display the current day at the top of the calender when a user opens the planner.
    let currentDate = $('#currentDay');
    var today = moment();
    currentDate.text(today.format("dddd, MMMM D YYYY"));

    let events = {};
    let hourRendered = moment();

    // Render and display the daily planner 
    // The rows of the planner must start with 9 and end with 5.
    // Initialise the starting hour
    function renderPlanner(today, events) {
        let hourRow = moment(today).hour(9); // This will start the rows from 9
        let calendar = $(".container");
        calendar.empty();

        // Increment the number of rows by 1 and display it on the page
        // Increment until 'X' number of rows is displayed

        
        for (i = 1; i < 10; i++) {
            let row = $("<div>").addClass("row");

            let time = "";
            if (today.isBefore(hourRow, "hour")) {
                time = "Future"
            } else if (today.isAfter(hourRow, "hour")) {
                time = "Past"
            } else {
                time = "Present"
            }

            calendar.append(row);
            row.append($("<div>").addClass("col-2 hour").text(hourRow.format("h A")));
            let timeBlock = hourRow.format("hA");
            row.append($("<textarea>").addClass(`col-8 ${time}`).text(events[timeBlock]));
            row.append($("<button>").addClass("col-2 saveBtn").html("<i class='fas fa-save'></i>").attr("aria-label", "Save").attr("id", hourRow.format("hA")));

            hourRow.add(1, "hour");

            hourRendered = moment();
        };
    };

    renderPlanner(today, events);
    

    function loadPlanner() {
        let storedEvents = JSON.parse(localStorage.getItem("events"));
        if (storedEvents) {
            events = storedEvents;
        } 
    }

    // Store events with local Storage

    function savePlanner() {
        localStorage.setItem("events", JSON.stringify(events));
    }

});