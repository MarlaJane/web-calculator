function sum() {
    var a = document.getElementById('a').value
    var b = document.getElementById('b').value
    
    var total = parseInt(a) + parseInt(b)

       

    document.getElementById('total').innerHTML = total
}
