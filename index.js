
// Select some elements...

let header = document.querySelector('#page-header')
header.style.textAlign = 'left'
header.style.color = 'grey'
header.style.borderTop = '3px double black'

let dogImages = document.querySelectorAll('.dog-image')
for (let i = 0; i < dogImages.length; i++)
{
    dogImages[i].style.borderRadius = '50px'
}

let columns = document.querySelectorAll('.column')
for (let i = 0; i < columns.length; i++)
{
    columns[i].style.border = '1px solid lightgrey' 
    columns[i].style.margin = '10px'
    let p=columns[i].querySelector('.dog-description')
    p.style.textAlign = 'justify' 
    p.style.textIndent = '10px'
}


let footer = document.querySelector('.footer')
footer.style.color = 'red'
footer.style.border = "1px solid black"



