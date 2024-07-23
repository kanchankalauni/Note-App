document.getElementById('btn').addEventListener('click', () => {
    addNote()
})

function addNote() {
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
        <div class="note hidden" id="div"></div>
        <textarea class="note " id="txtA"></textarea>
    </div>
    <div class="date" id="dateDiv">${date}</div>
    `

    let editBtn = divEle.querySelector('.editBtn')
    let removeBtn = divEle.querySelector('.removeBtn')
    
    editBtn.addEventListener('click', () => {
        let txtA = divEle.querySelector('#txtA')
        let div = divEle.querySelector('#div')
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
        // e.target.parentNode.parentNode.remove()
    })

    document.getElementById('allNote').append(divEle)
}