let data = JSON.parse(localStorage.getItem('notes')) || []

function displayNote() {
    data.map((singleNote) => {
        // console.log(singleNote)
        if (singleNote) {
            addNote(singleNote)
        }
    })
}

displayNote()

document.getElementById('btn').addEventListener('click', () => {
    addNote()
})

function addNote(note = '') {
    console.log(note)
    let date
    function setDate() {
        date = new Date().toLocaleString()
    }
    setDate()
    let divEle = document.createElement('div')
    divEle.setAttribute('class', 'singleNote')
    divEle.innerHTML = `
    <div>
        <button class="editBtn">Edit</button>
        <button class="removeBtn">Remove</button>
    </div>
    <div>
        <div class="note ${note ? '' : 'hidden'}" id="div"></div>
        <textarea class="note ${note ? 'hidden' : ''}" id="txtA"></textarea>
    </div>
    <div class="date" id="dateDiv">${date}</div>
    `

    let editBtn = divEle.querySelector('.editBtn')
    let removeBtn = divEle.querySelector('.removeBtn')
    let txtA = divEle.querySelector('#txtA')
    let div = divEle.querySelector('#div')

    div.innerHTML = note
    txtA.innerHTML = note
    
    editBtn.addEventListener('click', () => {
        let dateDiv = divEle.querySelector('#dateDiv')
        // console.log(txtA)
        div.innerHTML = txtA.value
        txtA.classList.toggle('hidden')
        div.classList.toggle('hidden')
        setDate()
        dateDiv.innerHTML = date
    })

    removeBtn.addEventListener('click', (e) => {
        divEle.remove()
        updateStorage()
        // e.target.parentNode.parentNode.remove()
    })

    txtA.addEventListener('input' , () => {
        updateStorage()
    })

    document.getElementById('allNote').append(divEle)
}

function updateStorage() {
    let textArea = document.querySelectorAll('textarea')
    data = []
    textArea.forEach(e => {
        if (e) {
            data.push(e.value)   
        }
    })
    localStorage.setItem('notes', JSON.stringify(data))
    // displayNote()
}