const form = document.getElementById('form')
let inputField = document.getElementById('input-field')
const clearItemsBtn = document.getElementById('clear')
const item = document.querySelector('.item')


let renderListItems = e => {
    e.preventDefault()
    document.getElementById('list').innerHTML +=  `

        <div class="item">
            <p>${inputField.value}</p>
            <span>
                <i class="fa-solid fa-pen-to-square"></i>
                <i class="fa-solid fa-trash"></i>
            </span>
        </div>
     
    `
}

form.addEventListener('submit', renderListItems)

clearItemsBtn.addEventListener('click', () => document.getElementById('list').innerHTML = '' )