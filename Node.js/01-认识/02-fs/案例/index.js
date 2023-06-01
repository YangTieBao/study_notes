
        var div = document.querySelector('div')
        var button1 = document.querySelector('.but1')
        var button2 = document.querySelector('.but2')
        button1.onclick = ()=>{
            div.style.width='500px'
            div.style.height='500px'
            div.style.backgroundColor='green'
        }
        button2.onclick = ()=>{
            div.style.width='200px'
            div.style.height='200px'
            div.style.backgroundColor='red'
        }
    