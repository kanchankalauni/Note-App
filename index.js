

document.getElementById('btn').addEventListener('click', () => {

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
    <div class="date">04/06/2024</div>
    `

    let editBtn = divEle.querySelector('.editBtn')
    
    editBtn.addEventListener('click', () => {
        let txtA = divEle.querySelector('#txtA')
        let div = divEle.querySelector('#div')
        // console.log(txtA)
        div.innerHTML = txtA.value
        txtA.classList.toggle('hidden')
        div.classList.toggle('hidden')
    })

    document.getElementById('allNote').append(divEle)
    
})