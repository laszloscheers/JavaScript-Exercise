

function ClickMe(){
    console.log(`Button has been clicked`);
    var field1 = document.getElementById("field1").value;
    var field2 = document.getElementById("field2").value;
    var solution = parseInt(field1) + parseInt(field2);
    let messagePanel = document.getElementById("messagePanel");
    messagePanel.innerHTML = `The sum of ${field1} and ${field2} is ${solution}.`;
}


function ClearField1(){
    let field1 = document.getElementById("field1");

    field1.value ="";
}

function ClearField2(){
    let field2 = document.getElementById("field2");

    field2.value ="";
}