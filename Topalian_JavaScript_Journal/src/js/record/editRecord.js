// editRecord.js

function editRecord(whichId)
{
    let existingId = records[whichId].id;

    recordEntry =
    {
        id: existingId, // whichId
        date: records[whichId].date,
        text: ge(whichId).value
    }

    records.splice(whichId, 1, recordEntry);

    cl("records = " + JSON.stringify(records) + ";");

    ge("recordsTextBox").value = JSON.stringify(records);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

