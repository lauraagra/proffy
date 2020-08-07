// Procurar o botão
document.querySelector("#add-time")
// Quando clicar no botão
.addEventListener('click', cloneField)

// Executar uma ação
function cloneField() {
    // duplicar os campos
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)

    // colocar na página
    const fields = newFieldContainer.querySelectorAll('input')

    // para cada campos, limpar
    fields.forEach(function(field) {
        // pega o field do momento e limpar ele
        field.value = ""
    })

    // Colocar na págica
    document.querySelector('.schedule-items').appendChild(newFieldContainer)
}