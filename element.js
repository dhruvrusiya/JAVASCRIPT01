let head_element=document.createElement('h1') // create element
head_element.textContent="this is the end bogywn" // assign data in h2


let bd=document.body // target body 
bd.append(head_element) // append h1

let head1=document.createElement('h2') 
head1.textContent="demotocosida ha ha "
bd.append(head1)

head_element.setAttribute('align','center') // add css

head1.setAttribute('style','background-color: blue')
bd.setAttribute('bgcolor','yellow')
bd.removeAttribute('bgcolor')  // remove css

let image=document.createElement('img')
bd.append(image)
image.setAttribute('src','Fotor_AI（3）.png')