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
    
    // taking the value from the form field name and storing in variable
    let nameField=document.getElementById("nameField").value;
    
    // selecting template's name field and storing that field in variable
    let nameT1=document.getElementById("nameT1");
    
    // change inner value 
    nameT1.innerHTML=nameField;
    
    // for contact field
    let nameT2=document.getElementById("nameT2");
    nameT2.innerHTML=nameField;

    let contactField=document.getElementById("contactField").value;

    let contactT=document.getElementById("contactT");
    contactT.innerHTML=contactField;

    // for address
    let addressField=document.getElementById("addressField").value;
    let addressT=document.getElementById("addressT");
    addressT.innerHTML=addressField;

    // for linkedin and mail
    let linkedField=document.getElementById("linkedField").value;
    let linkedT=document.getElementById("linkedT");
    linkedT.innerHTML=linkedField;

    let emailField=document.getElementById("emailField").value;
    let emailT=document.getElementById("emailT");
    emailT.innerHTML=emailField;

    // for objective
    // let objectiveField=document.getElementById("objectiveField").value;
    // let objectiveT=document.getElementById("objectiveT");
    // objectiveT.innerHTML=objectiveField;

    document.getElementById("objectiveT").innerHTML=document.getElementById("objectiveField").value;

    // for work experience
    let weField=document.getElementsByClassName("weField");

    str="";
    for (let w of weField) {
        str = str + `<li> ${w.value} </li>`
        
    }
    
    document.getElementById("weT").innerHTML=str;

    // for educational qualificaions

    let edField=document.getElementsByClassName("edField");
    str="";
    for (let e of edField) {
        str = str + `<li> ${e.value} </li>`
        
    }
    document.getElementById("edT").innerHTML=str;

    document.getElementById("resume-form").style.display='none';
    document.getElementById("resume-template").style.display='block';


}


function printResume(){
    window.print();
}
