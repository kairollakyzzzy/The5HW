var button = document.getElementById("Button");
var edu = document.getElementById("Education");
var net = document.getElementById("FamilyNetWorth");
var skills = document.getElementById("Skills");
var age = document.getElementsByName("Age");
var ability = document.getElementsByClassName("Ability");
var gossip = document.getElementsByClassName("Gossip");

var checkedAbility = [], checkedGossip = [];
var Education, Net, Age, Skill, Sum;     


    let amount = document.getElementById("startingBil");
    


let groom = {

    groom_name:     name,
    
    groom_amount: amount,
    
    }

button.addEventListener("l", calculate); 
   
function calculate() {
    
    
    let name = document.getElementById("name").value;
    sum = parseFloat(amount.value);
   

    Skill=0;
   

    console.log(edu.value);
    Education = parseFloat(edu.value);

    console.log(net.value);
    Net = parseFloat(net.value);

    for(var l=0; l<ability.length;l++){
        if(ability[l].checked === true){
            checkedAbility.push(parseFloat(ability[l].value)); 

        }
    }

    for(var l =0; l< checkedAbility.length;l++){
        Skill += checkedAbility[l];
    }

    console.log(Skill);

    for(var l=0; l<age.length;l++){
        if(age[l].checked === true){
            age = parseFloat(age[l].value);
            break;
        }
    }

    console.log(Age);

    sum = Math.round(sum*Education);
    sum = Math.round(sum*Net);
    sum = Math.round(sum+Skill);
    sum = Math.round(sum*Age);

    
    for(var l=0; l<gossip.length;l++){
        if(gossip[l].checked === true){
            checkedGossip.push(parseFloat(gossip[l].value)); 

        }
    }

    for(var l =0; l< checkedGossip.length;l++){
        if(checkedGossip[l]%1==0 || checkedGossip[l]==0){
            sum = sum + checkedGossip[l];

        } else sum *= checkedGossip[l];
    }
    console.log(Math.round(sum));
    if(isNaN(Math.round(sum)) || sum==0 || name.length == 0){
        alert("Try again");
        location.reload();
    } else 
    document.getElementById("answer").innerHTML=`The qalynmal of ${name} is ${sum}$. "`;
}


