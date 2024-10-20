// deleteThisRecordButton.js

function deleteThisRecordButton(whichId)
{
    let warningDelete = confirm("DELETE ONLY This Record?");

    if (warningDelete == true)
    {
        // cl("Okay");
    }
    else if (warningDelete == false)
    {
        alert("Canceled");

        return;
    }

    records.splice(whichId, 1);

    cl("records = " + JSON.stringify(records) + ";");

    ge(whichId).remove();

    ge("navigation" + parseInt(whichId)).remove();

    cl("navigation" + parseInt(whichId));
    
    cl("records length = " + records.length);

    if (whichId == 0)
    {
        counter = records.length;

        records = [];
    }
    else
    {
        counter = records.length;
    }
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

