const form = document.getElementById('form')
let inputField = document.getElementById('input-field')
const clearItemsBtn = document.getElementById('clear')
const item = document.querySelector('.item')

let Delete = e => {
    e.parentElement.parentElement.remove()
}

let edit = e => {
    inputField.value = e.parentElement.previousElementSibling.textContent

    e.parentElement.parentElement.remove()
}

let renderListItems = e => {
    e.preventDefault()
    document.getElementById('list').innerHTML +=  `

        <div class="item">
            <p>${inputField.value}</p>
            <span>
                <i class="fa-solid fa-pen-to-square" onclick="edit(this)"></i>
                <i class="fa-solid fa-trash" onclick="Delete(this)"></i>
            </span>
        </div>
     
    `
    inputField.value = ''
}

form.addEventListener('submit', renderListItems)

clearItemsBtn.addEventListener('click', () => document.getElementById('list').innerHTML = '' )


