const button = document.getElementById('generateResume');
const container = document.getElementById('container');
const heading=document.createElement('h1')
heading.style.backgroundColor='cyan';
heading.style.color='red';
heading.innerText='My Resume'
const name=document.createElement('h2');
name.innerText='Riddhima Agarwal';
const img=document.createElement('img');
const loader=document.createElement('h2');
loader.innerHTML='<h2>Loading Data...</h2>'
container.appendChild(loader)
function personalResume() {
    try{
        container.innerHTML='<h2 style=color:red>Welcome to DOM</h2>'
        img.src="https://tse3.mm.bing.net/th/id/OIP.MlOkNGvGa2jO9oIqHuW5OwHaE8?r=0&pid=Api&h=220&P=0"
        img.setAttribute('height',200)
        img.setAttribute('width',200)
        container.appendChild(heading);
        container.appendChild(name);
        container.appendChild(img);
    }
    catch(e){
        loader.innerHTMl='<h2 style=color:red>Error in loading data</h2>'
    }
    finally{
        //loader.innerHTML='';
        container.removeChild(loader);
    }
}
button.addEventListener('click',personalResume)