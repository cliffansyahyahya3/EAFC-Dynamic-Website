$(document).ready(function(){
    // Get the current date
    var currentDate = new Date();
    // Format the date as needed (e.g., "June 3, 2024")
    var formattedDate = currentDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    // Add the formatted date to the header
    $('#current_date').text(formattedDate);
    
    $('#nav_menu').slicknav({prependTo:"#mobile_menu"});
});

