function addNewWEField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let weOb=document.getElementById("we");
    let weAddButtonOb=document.getElementById("weAddButton");
    weOb.insertBefore(newNode,weAddButtonOb);
}

function addNewEDField()
{
    let newNode=document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("edField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute("placeholder","Enter here");

    let edOb=document.getElementById("ed");
    let edAddButtonOb=document.getElementById("edAddButton");
    edOb.insertBefore(newNode,edAddButtonOb);
}

// generating resume from the details in the form

function generateResume()
{
    // console.log("generating resume");
    let nameField=document.getElementById("nameField").value;
    
    let nameT1=document.getElementById("nameT1");
    nameT1.innerHTML=nameField;
    
    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML=nameField;
}
