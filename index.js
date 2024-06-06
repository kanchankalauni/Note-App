let txtA = document.getElementById('txtA')
let div = document.getElementById('div')

document.getElementById('btn').addEventListener('click', () => {
    div.innerHTML = txtA.value
    txtA.classList.toggle('hidden')
    div.classList.toggle('hidden')
})