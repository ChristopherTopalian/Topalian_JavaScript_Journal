// makeRecordsTextBox.js

function makeRecordsTextBox()
{
    let mainDiv = ce("div");
    mainDiv.id = 'mainRecords';
    ge('mainLayout').append(mainDiv);

    //-//

    let theTextBox = ce("textarea");
    theTextBox.value = records;
    theTextBox.id = "recordsTextBox";
    theTextBox.style.width = 500 + 'px';
    theTextBox.style.height = 50 + 'px';
    mainDiv.append(theTextBox);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

