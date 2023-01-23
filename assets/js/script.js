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

});