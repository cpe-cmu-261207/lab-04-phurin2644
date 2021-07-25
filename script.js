const cout = console.log
let currentInput = ''

const input = document.querySelector('input')
const add = document.querySelector('#add')
const coms = document.querySelector('#coms')
const list = document.querySelector('#list')
const local = []

const addinput = () => {
    if (input.value == "") {
        alert("task is empty")
    }
    else {
        const btn = document.createElement('button')
        btn.setAttribute('class', 'bg-green-100')
        btn.innerHTML = "Done"
        local.push(input.value)
        localStorage.setItem("lastname", JSON.stringify(local))
        btn.addEventListener("click", function(event){
            h1.style.textDecoration = "line-through"
            h1.remove()
            coms.insertBefore(h1, coms.firstChild)

        })
        const btnDel = document.createElement('button')
        btnDel.setAttribute('class', 'bg-red-100')
        btnDel.innerHTML = "Delete"
        btnDel.addEventListener("click", function(event){
            h1.remove()
            local.splice(local.findIndex(x => x == h1.innerText)-1, 1)
            localStorage.setItem("lastname", JSON.stringify(local))
        })
        const h1 = document.createElement('h1')
        h1.innerHTML = input.value
        btn.style.visibility = "hidden"
        btnDel.style.visibility = "hidden"
        h1.addEventListener("mouseenter", function (event){
            if(h1.style.textDecoration !== "line-through"){
                btn.style.visibility = "visible"
            btnDel.style.visibility = "visible"
            }
        })
        h1.addEventListener("mouseleave", function (event){
            btn.style.visibility = "hidden"
            btnDel.style.visibility = "hidden"
        })
        h1.append(btn)
        h1.append(btnDel)
        input.value = ""
        list.insertBefore(h1, list.firstChild)
    }

}

input.addEventListener("keyup", function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        add.click();
    }
});

