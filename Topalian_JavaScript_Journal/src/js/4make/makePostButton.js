// makePostButton.js

function makePostButton()
{
    let mainDiv = ce("div");
    mainDiv.style.display = 'flex';
    mainDiv.style.display = 'row';
    ge('mainLayout').append(mainDiv);

    //-//

    let postButton = ce("button");
    postButton.id = "postButton";
    postButton.textContent = "Post";
    postButton.style.width = 70 + 'px';
    mainDiv.append(postButton);
}

function listenForPostButtonClick()
{
    if (ge('postButton'))
    {
        let postListener = ge('postButton').addEventListener('click', function(theEvent)
        {
            clickSound();

            let theText = ge("textWords").value;

            //-//

            let controlsContainer = ce('div');
            controlsContainer.style.margin = '5px';
            ge('postLayout').append(controlsContainer);

            //-//

            let theNavigation = ce("div");
            theNavigation.style.display = 'flex';
            theNavigation.style.flexDirection = 'row';
            theNavigation.id = "navigation" + counter;
            ge('postLayout').append(theNavigation);

            //-//

            counter += 1;

            if (counter == 0)
            {
                records = [];
                ge("recordsTextBox").value = "";
            }

            //-//

            let minimizeButton = ce("button");
            minimizeButton.textContent = "_";
            minimizeButton.style.height = 30 + 'px';
            minimizeButton.onclick = function()
            {
                clickSound();

                //  adjust to minimum height
                ge(theTextEntry.id).style.height = 60 + "px";
            };
            minimizeButton.onmouseover = function()
            {
                hoverSound();
            };

            theNavigation.append(minimizeButton);

            //-//

            let maximizeButton = ce("button");
            maximizeButton.style.height = 30 + 'px';
            maximizeButton.textContent = "+";
            maximizeButton.onclick = function()
            {
                clickSound();

                ge(theTextEntry.id).style.height = 200 + "px";

                ge(theTextEntry.id).style.height = ge(theTextEntry.id).scrollHeight + 'px';
            };
            maximizeButton.onmouseover = function()
            {
                hoverSound();
            };
            theNavigation.append(maximizeButton);

            //-//

            let deleteButton = ce("button");
            deleteButton.textContent = "Delete";
            deleteButton.style.height = 30 + 'px';
            deleteButton.onclick = function()
            {
                clickSound();

                deleteThisRecordButton(theTextEntry.id);

                ge("recordsTextBox").value = JSON.stringify(records);
            };
            deleteButton.onmouseover = function()
            {
                hoverSound();
            };
            theNavigation.append(deleteButton);

            //-//

            let theTextEntry = ce("textarea");
            theTextEntry.style.width = '700px';
            theTextEntry.style.height = '60px';
            theTextEntry.style.borderRadius = '8px';
            theTextEntry.style.paddingLeft = '10px';
            theTextEntry.style.paddingRight = '10px';
            theTextEntry.style.overflowY = 'scroll';
            theTextEntry.style.fontSize = '20px';
            theTextEntry.id = counter - 1;
            theTextEntry.title = counter - 1;

            //-//

            let theDate = new Date().toLocaleString();

            theTextEntry.value = theDate + "\n" +
            ge("textWords").value;

            addRecord(theTextEntry.id, theDate, ge("textWords").value);

            //-//

            theTextEntry.onkeyup = function()
            {
                editRecord(theTextEntry.id);
            };

            theNavigation.append(theTextEntry);
        });
    }
}

function listenForPostButtonHover()
{
    let postListenerHover = ge('postButton').addEventListener('mouseover', function(theEvent)
    {
        hoverSound();
    });
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

