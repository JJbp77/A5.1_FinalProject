function myTable() {
    const firstName = document.getElementById('name1').value;
    const lastName = document.getElementById('name2').value;
    const friendName = document.getElementById('battle').value;
    const favoriteFood = document.getElementById('favoriteFood').value;
    const meetingPlace = document.getElementById('meet').value;
    const meetingDate = document.getElementById('date').value;


    //Gets the table body
    const tableBody = document.getElementById('tableBody');


    //Create a new row
    const newRow = tableBody.insertRow();

    //Insert cells with user input
    newRow.insertCell().textContent = firstName + ' ' + lastName;
    newRow.insertCell().textContent = friendName;
    newRow.insertCell().textContent = favoriteFood;
    newRow.insertCell().textContent = meetingPlace;
    newRow.insertCell().textContent = meetingDate;

}