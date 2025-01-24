const frm = document.querySelector ("form")

frm.addEventListener ("submit",(e) => {
e.preventDefault()
const firstForm = frm.a.value
const secondForm = frm.b.value
    if (secondForm >= firstForm) {
    alert ("Positivo")
    }
    else {
    alert ("Negativo")
    }
    
})