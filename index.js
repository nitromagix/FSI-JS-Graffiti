
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

let paragraphs = document.querySelectorAll('.dog-description')
for (let i = 0; i < paragraphs.length; i++)
{
    paragraphs[i].style.textAlign = 'justify' 
    paragraphs[i].style.textIndent = '10px' 
}

let footer = document.querySelector('.footer')
footer.style.border = "1px solid black"

