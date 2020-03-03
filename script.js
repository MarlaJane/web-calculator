function sum() {
    var a = document.getElementById("a").value
    var b = document.getElementById("b").value
    var operatorSelect = document.getElementById("operator")
    var chosenOperator = operatorSelect.options[operatorSelect.selectedIndex].value

    switch (chosenOperator) {
        case "add":
            var total = parseInt(a) + parseInt(b)
            break;
        case "subtract":
            var total = parseInt(a) - parseInt(b)
            break;
        case "multiply":
            var total = parseInt(a) * parseInt(b)
            break;
        case "divide":
            var total = parseInt(a) / parseInt(b)
            break;
        default:
            var total = "Unknown operator"
    }

    document.getElementById("total").innerHTML = total
}
