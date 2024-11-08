function numBtn(value){
    var inputField = document.getElementById('field');
    inputField.value += value
}

function equalsBtn() {
    var inputField = document.getElementById('field');
    try {
        inputField.value = eval(inputField.value);
        console.log("Result:", inputField.value); 
    } catch (error) {
        inputField.value = "Error";
        console.log("Invalid expression"); 
        }
}
function clean(){
    document.getElementById('field').value=''
}
