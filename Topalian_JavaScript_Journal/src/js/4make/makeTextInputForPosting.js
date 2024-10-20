// makeTextInputForPosting.js

function makeTextInputForPosting()
{
    let textWords = ce("textarea");
    textWords.id = "textWords";
    textWords.style.width = '70%';
    textWords.style.height = '30vh';
    textWords.style.paddingLeft = '20px';
    textWords.style.paddingRight = '20px';
    textWords.style.paddingTop = '20px';
    textWords.style.paddingBottom = '20px';
    textWords.style.borderRadius = '8px';
    textWords.style.backgroundColor = 'rgb(0, 0, 0)';
    textWords.style.fonFamily = 'arial';
    textWords.style.fontSize = '20px';
    textWords.style.color = 'rgb(255, 255, 255)';
    textWords.placeholder = 'Type Journal Entry Here...';
    ge('mainLayout').append(textWords);
}

//--//

// Dedicated to God the Father
// All Rights Reserved Christopher Andrew Topalian Copyright 2000-2024
// https://github.com/ChristopherTopalian
// https://github.com/ChristopherAndrewTopalian
// https://sites.google.com/view/CollegeOfScripting

