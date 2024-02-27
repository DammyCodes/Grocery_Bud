const form = document.getElementById('form')
let inputField = document.getElementById('input-field')
const clearItemsBtn = document.getElementById('clear')
const item = document.querySelector('.item')

let Delete = e => {
    e.parentElement.parentElement.remove()
}

let renderListItems = e => {
    e.preventDefault()
    document.getElementById('list').innerHTML +=  `

        <div class="item">
            <p>${inputField.value}</p>
            <span>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash" onclick="Delete(this)"></i>
            </span>
        </div>
     
    `
    inputField.value = ''
}

form.addEventListener('submit', renderListItems)

clearItemsBtn.addEventListener('dblclick', () => document.getElementById('list').innerHTML = '' )


