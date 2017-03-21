

var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var numThree = document.getElementById("num-three");
var addSum = document.getElementById("add-sum");


  numOne.addEventListener("input", add);
  numTwo.addEventListener("input", add);
  numThree.addEventListener("input", add);


function add()
{
  var one = parseFloat(numOne.value);
  var two = parseFloat(numTwo.value);
  var three = parseFloat(numThree.value);
  var sum = favgates();
  if(sum == "Nand")
  {
    sum = Nand(one, two);
  }
  else if(sum == "And")
  {
    sum = And(one, two);
  }
  else if(sum == "Or")
  {
    sum = Or(one, two);
  }
  else if(sum == "Xor")
  {
    sum = Xor(one, two);
  }
  else if(sum == "Not")
  {
    sum = Not(three);
  }
   return sum;

}

function myFunction()
{
    addSum.innerHTML = add();

}


function favgates()
{
 var mylist = document.getElementById("myList")
  var result = document.getElementById("favorite").value = mylist.options[mylist.selectedIndex].text;


     return result;

}





function show(id)
{
  var img = document.getElementById(id);

    img.style.display = "block";


}
function show1(id)
{
  var img = document.getElementById(id);

    img.style.display = "none";


}
function Nand(a,b)
{
  if(a==0 && b==0)
  {
    return 1;
  }else if (a==0 && b==1)
  {
    return 1;
  }else if (a==1 && b==0)
  {
    return 1;
  }else if (a==1 && b==1)
  {
    return 0;
  }
}

function Not(ina)
{
  if (ina == 0)
  {
    return 1;
  }else if(ina == 1)
  {
    return 0;
  }
}

function And(a,b)
{
  if(a==0 && b==0)
  {
    return 0;
  }else if (a==0 && b==1)
  {
    return 0;
  }else if (a==1 && b==0)
  {
    return 0;
  }else if (a==1 && b==1)
  {
    return 1;
  }

}

function Or(a,b)
{
  if(a==0 && b==0)
  {
    return 0;
  }else if (a==0 && b==1)
  {
    return 1;
  }else if (a==1 && b==0)
  {
    return 1;
  }else if (a==1 && b==1)
  {
    return 1;
  }

}


function Xor(a,b)
{
  if(a==0 && b==0)
  {
    return 0;
  }else if (a==0 && b==1)
  {
    return 1;
  }else if (a==1 && b==0)
  {
    return 1;
  }else if (a==1 && b==1)
  {
    return 0;
  }

}

function formReset()
{
document.getElementById("myForm").reset()
}
