var buttons = [...document.getElementById('buttons').children]
var display = document.getElementById('display')
var newHistory = document.getElementById('new')
var oldHistory = document.getElementById('old')

buttons.forEach( b => {

    b.addEventListener('click', () => {

        if(b.value == 'd') display.value = ''
        else if(b.value == 'c') display.value = display.value.slice(0,-1)
        else if(b.value == '=') {
            if(!display.value) alert('Enter Input Value')
            else{
                if(!newHistory.innerText) newHistory.innerText = eval(display.value)
                else {
                    oldHistory.innerText = newHistory.innerText
                    newHistory.innerText = eval(display.value)
                }
                display.value = ''
            }
        }
        else display.value += b.value
    })
})
