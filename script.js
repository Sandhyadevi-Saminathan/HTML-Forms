var ele1=document.createElement("h1");
ele1.innerHTML="Form";
ele1.setAttribute("id","title");
document.body.append(ele1);

var ele2=document.createElement("p");
ele2.innerHTML="This is a form task";
ele2.setAttribute("id","description");
document.body.append(ele2);

var heading = document.createElement('div');
heading.setAttribute('class', 'h2');
heading.innerHTML = "HTML FORM"
heading.style.textAlign = "center";

var divclass=document.createElement('div');
divclass.setAttribute('class','form-group');

var containers=document.createElement('container');
containers.setAttribute('class','container');

var rows= document.createElement('row');
rows.setAttribute('class','row');

var col=document.createElement('column');
col.setAttribute('class',"col-md-4");

var col1=document.createElement('column');
col1.setAttribute('class',"col-md-6");




document.body.append(containers);
var form = document.createElement('form');
form.setAttribute('id', 'form');

var fname=document.createElement('label');
fname.setAttribute('for','first-name');
fname.innerHTML="FirstName";

var br= document.createElement('br');

var firstName=document.createElement('input');
firstName.setAttribute('id', 'first-name');
firstName.setAttribute('type','text');
firstName.setAttribute('required','');
firstName.placeholder ="firstname";

var br1= document.createElement('br');

var lname=document.createElement('label');
lname.setAttribute('for','last-name');
lname.innerHTML="LastName";

var br2= document.createElement('br');

var lastName=document.createElement('input');
lastName.setAttribute('id', 'last-name');
lastName.setAttribute('type','text');
lastName.setAttribute('required','');
lastName.placeholder="lastname";

var br3= document.createElement('br');

var pincode=document.createElement('label');
pincode.setAttribute('for','pincode');
pincode.innerHTML="Pincode";

var br4= document.createElement('br');

var pin=document.createElement('input');
pin.setAttribute('id', 'pincode');
pin.setAttribute('type','pincode');
pin.setAttribute('required','');
pin.placeholder="Pincode";

var br5= document.createElement('br');

var gender=document.createElement('label');
gender.innerHTML="Gender";

var br6= document.createElement('br');

var gen=document.createElement("label");
gen.setAttribute("for","male");
gen.innerHTML="Male";

var male=document.createElement("input");
male.setAttribute("type","radio");
male.setAttribute("name","gender");
male.setAttribute("id","male");
male.setAttribute("value","male");

var gen1=document.createElement("label");
gen1.setAttribute("for","female");
gen1.innerHTML="Female";

var female=document.createElement("input");
female.setAttribute("type","radio");
female.setAttribute("name","gender");
female.setAttribute("id","female");
female.setAttribute("value","female");

var br7= document.createElement('br');

var addr=document.createElement('label');
addr.setAttribute('for','address');
addr.innerHTML="Address";

var br8= document.createElement('br');

var addre=document.createElement('textarea');
addre.setAttribute('id', 'address');
addre.setAttribute('type','textarea');
addre.placeholder="Enter your address";

var br9= document.createElement('br');

var fav=document.createElement('label');``
fav.innerHTML="Choice of Food(Must choose at least 2 of 5 foods)";

var br10= document.createElement('br');


var food=document.createElement("label");
food.setAttribute("for","food");
food.innerHTML="NorthIndian";


var north=document.createElement("input");
north.setAttribute("type","checkbox");
north.setAttribute("name","food");
north.setAttribute("id","food");
north.setAttribute("value","NorthIndain");


var br11= document.createElement('br');

var food1=document.createElement("label");
food1.setAttribute("for","food");
food1.innerHTML="SouthIndian";


var south=document.createElement("input");
south.setAttribute("type","checkbox");
south.setAttribute("name","food");
south.setAttribute("id","food");
south.setAttribute("value","SouthIndain");


var br12= document.createElement('br');

var food2=document.createElement("label");
food2.setAttribute("for","food");
food2.innerHTML="Chinese";


var chinese=document.createElement("input");
chinese.setAttribute("type","checkbox");
chinese.setAttribute("name","food");
chinese.setAttribute("id","food");
chinese.setAttribute("value","chinese");


var br13= document.createElement('br');

var food3=document.createElement("label");
food3.setAttribute("for","Itl");
food3.innerHTML="Italian";


var Italian=document.createElement("input");
Italian.setAttribute("type","checkbox");
Italian.setAttribute("name","food");
Italian.setAttribute("id","food");
Italian.setAttribute("value","Italian");



var br14= document.createElement('br');

var food4=document.createElement("label");
food4.setAttribute("for","food");
food4.innerHTML="Japanese Cuisine";


var Jap=document.createElement("input");
Jap.setAttribute("type","checkbox");
Jap.setAttribute("name","food");
Jap.setAttribute("id","food");
Jap.setAttribute("value","Jap");




var br15= document.createElement('br');


var state=document.createElement('label');
state.setAttribute('for','state');
state.innerHTML="State";

var br16= document.createElement('br');

var State=document.createElement('input');
State.setAttribute('id', 'state');
State.setAttribute('type','text');

var br17= document.createElement('br');

var country=document.createElement('label');
country.setAttribute('for','con');
country.innerHTML="Country";

var br18= document.createElement('br');

var Country=document.createElement('input');
Country.setAttribute('id', 'con');
Country.setAttribute('type','text');


var but=createButton();

function createButton() {
    var d = document.createElement('div');
    d.setAttribute('class', 'row offset-6');

    var btn = document.createElement('button');
    btn.innerHTML = 'Submit';
    btn.type = 'button';
    btn.setAttribute('id','submit');
    btn.classList.add("btn","btn-primary");
    //btn.setAttribute('class', 'btn btn-info text-center mt-5')
    btn.onclick = action;
    
    d.append(btn);
    return d;
}


var table = document.createElement('table');
table.setAttribute('class', 'table');

var thead = document.createElement('thead');
var tbody = document.createElement('tbody');

var tr1 = document.createElement('tr');

var th1 = document.createElement('th');
th1.innerHTML = 'First Name';
var th2 = document.createElement('th');
th2.innerHTML = 'Last Name';
var th3 = document.createElement('th');
th3.innerHTML = 'Address';
var th4 = document.createElement('th');
th4.innerHTML = 'Pincode';
var th5 = document.createElement('th');
th5.innerHTML = 'Gender';
var th6 = document.createElement('th');
th6.innerHTML = 'Favourite Food';
var th7 = document.createElement('th');
th7.innerHTML = 'State';
var th8 = document.createElement('th');
th8.innerHTML = 'Country';


table.append(thead, tbody);
thead.append(tr1);
tr1.append(th1, th2, th3, th4, th5, th6, th7, th8);



function action() {
    var fn = document.getElementById('first-name').value;
    var ln = document.getElementById('last-name').value;
    var addr = document.getElementById('address').value;
    var pcode = document.getElementById('pincode').value;

    if (!fn) {
        alert('Please Enter First Name');
    } else if (!ln) {
        alert('Please Enter Last Name');
    } else if (!addr) {
        alert('Please Enter Address');
    } else if (!pcode) {
        alert('Please Enter pin code');
    } else {

        let tablebody = document.querySelector('tbody');
        var trow2 = tablebody.insertRow(0);
        var cell1 = trow2.insertCell(0);
        var cell2 = trow2.insertCell(1);
        var cell3 = trow2.insertCell(2);
        var cell4 = trow2.insertCell(3);
        var cell5 = trow2.insertCell(4);
        var cell6 = trow2.insertCell(5);
        var cell7 = trow2.insertCell(6);
        var cell8 = trow2.insertCell(7);
        cell1.innerHTML = fn;
        cell2.innerHTML = ln;
        cell3.innerHTML = addr;
        cell4.innerHTML = pcode;

        var data = document.getElementsByName('gender');
        for (let i = 0; i < data.length; i++) {
            if (data[i].checked === true)
                cell5.innerHTML = data[i].value;
        }
        
         
     var temp=[];
        var markedCheckbox = document.querySelectorAll('input[type="checkbox"]:checked');  
        for (var checkbox of markedCheckbox) {  
          temp.push(checkbox.value + ' ');  
          cell6.innerHTML=temp;
        }  
         if (temp.length<2)
         {
            alert("select atlease 2");
         }

        cell7.innerHTML = document.getElementById('state').value;
        cell8.innerHTML = document.getElementById('con').value;

        alert('Thanks for submitting the form!!')
        document.getElementById("form").reset();
    }


}


form.append(divclass,but);
divclass.append(fname,br,firstName,br1,lname,br2,lastName,br3,pincode,br4,pin,br5,gender,br6,male,gen,female,gen1,br7,addr,br8,addre,br9,
    fav,br10,north,food,br11,south,food1,br12,chinese,food2,br13,Italian,food3,br14,Jap,food4,
    br15,state,br16,State,br17,country,br18,Country);
    col.append(form);
col1.append(table);
rows.append(col,col1);


containers.append(rows);
// document.body.append(form);






