var result = document.getElementById("return")
function display(number){
 result.value += number;
}
function calculate(){
    var final_number = result.value;
    var final_number = eval(final_number);
    result.value = final_number;
}
function clrs(){
    result.value = "";
}
function dle(){
    result.value  = result.value.slice(0,-1)
}