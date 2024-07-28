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

function addNote(note = {}) {
    const {title = "", noteDate = setDate()} = note
    
    
    let divEle = document.createElement('div')
    divEle.setAttribute('class', 'singleNote')
    divEle.innerHTML = `
    <div>
        <button class="editBtn">${title ? 'Edit' : 'Save'}</button>
        <button class="removeBtn">Remove</button>
    </div>
    <div>
        <div class="note ${title ? '' : 'hidden'}" id="div"></div>
        <textarea class="note ${title ? 'hidden' : ''}" id="txtA"></textarea>
    </div>
    <div class="date" id="dateDiv">${noteDate}</div>
    `

    let editBtn = divEle.querySelector('.editBtn')
    let removeBtn = divEle.querySelector('.removeBtn')
    let txtA = divEle.querySelector('#txtA')
    let div = divEle.querySelector('#div')
    // let dateDiv = divEle.querySelector('#dateDiv')

    div.innerHTML = title
    txtA.innerHTML = title
    // dateDiv.innerHTML = note.noteDate
    
    editBtn.addEventListener('click', () => {
        // console.log(txtA)
        let isEditing = editBtn.textContent === 'Edit'
        editBtn.textContent = isEditing ? 'Save' : 'Edit'
        div.innerHTML = txtA.value
        txtA.classList.toggle('hidden')
        div.classList.toggle('hidden')
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
    // console.log(document.querySelectorAll('.singleNote'))
    data = Array.from(document.querySelectorAll('.singleNote')).map(noteDiv => {
        let textArea = noteDiv.querySelector('textarea').value
        let date = noteDiv.querySelector('.date').textContent
        return {title : textArea , noteDate : date}
    })
    localStorage.setItem('notes', JSON.stringify(data))
}

function setDate() {
    return(new Date().toLocaleString())
}