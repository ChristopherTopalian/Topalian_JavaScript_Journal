// addRecord.js

function addRecord(whichId, whichDate, whichWords)
{
    // if records exist
    if (records.length > 0)
    {
        let largestId = Math.max.apply(Math,records.map(function(x)
        {
            return x.id;
        }));

        addingOneToLargestId = largestId + 1;
    }
    // else if no records exist, such as after clearing all records
    else
    {
        addingOneToLargestId = 0;

        records = [];
    }

    recordEntry =
    {
        id: addingOneToLargestId,
        date: whichDate,
        text: whichWords
    }

    records.push(recordEntry);

    cl("records = " + JSON.stringify(records) + ";");

    ge("recordsTextBox").value = JSON.stringify(records);

    return records;
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

