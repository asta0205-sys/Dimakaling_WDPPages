//filename:script5.js
function changeFontSize() {
    //Select all <li> elements
    let items = document.getElementsByTagName("li");

    // Inititalize the counter 
    let i = 0;

    // Loop through each <li> elements using a while loop
    while (i < items.length) {
        items[i].style.fontSize = "20px"; //Change the font size of each item
        i++; //Increment the counter 
    }
}