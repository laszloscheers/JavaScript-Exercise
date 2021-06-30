function init(){
    //alert('Hello Worl')
    ShowDate();
    Greeting();
}

function Greeting(){
    let htmlElement = document.getElementById("greeting");
    htmlElement.innerHTML = 'Hello World';

}

function ShowDate(){
    console.log(`ShowDate() has been called`);
    let currentDate = new Date();
    const longDate = currentDate.toString();
    const shortDate = currentDate.toDateString();
    const utcDate = currentDate.toUTCString();

    console.log(`Long date is ${longDate}`);
    console.log(`Short date is ${shortDate}`);
    console.log(`UTC date is ${utcDate}`);

    let htmlElement = document.getElementById("currentDate");
    htmlElement.innerHTML = shortDate;

}

function ClickMe(){
    console.log(`Button has been clicked`);
    const planets = ['Mercury', 'Venus', 'Earth'];
    //WriteListOfPlanets(planets)
    //WriteAsHTML(planets)
    //WriteAsHTML_1(planets)
    WriteAsHTML_1(planets)

}

function ClearEmail(){
    let field =document.getElementById("email");

    console.log(`Current Value is ${field.value}`)
    field.value ="";
}
function SetEmail(){
    let field =document.getElementById("email");
    console.log(`Current Value is ${field.value}`);
    field.value ="Put your email here";
}

function WriteListOfPlanets(listOfItems){
    let messagePanel = document.getElementById("messagePanel");
    messagePanel.innerHTML = listOfItems.join();
}

function WriteAsHTML(listOfItems){
    let messagePanel = document.getElementById("messagePanel");
    let holdingText ='<ol>';
    for (const item of listOfItems){
        holdingText += `<li>${item}</li>`
        console.log(holdingText)
    }
    holdingText += '</ol>'
    messagePanel.innerHTML = holdingText;
}

function WriteAsHTML_1(listOfItems){
    let messagePanel = document.getElementById("messagePanel");
    let holdingText =['<ul>'];
    for (const item of listOfItems){
        holdingText.push(`<li>${item}</li>`);
        console.log(holdingText.join());
    }
    holdingText.push('</ul>');
    messagePanel.innerHTML = holdingText.join(' ');
}

function WriteAsHTML_2(listOfItems){
    let messagePanel = document.getElementById("messagePanel");
    let htmlText =['<ol>'];
    let list = listOfItems.map(currentItem =>{

        return `<li>${currentItem}</li>`
    })

    htmlText = htmlText.concat(list);
    htmlText.push(`</ul>`)
    messagePanel.innerHTML = htmlText.join(' ');
}