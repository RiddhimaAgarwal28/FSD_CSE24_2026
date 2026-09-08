const container=document.getElementById('root');
console.log(container);
const root=ReactDOM.createRoot(container);
const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},"Welcome to React App Development");//(name of element,styling,content of element)
const h1=React.createElement('h1',{style:{color:'brown'}},'ABES Engineering College')
const img=React.createElement('img',{src:'https://tse4.mm.bing.net/th/id/OIP.PtU3oZdtcX1QysiofE2zOQHaE8?r=0&pid=Api&h=220&P=0',style:{height:'200px', width:'200px'}});

const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2)

const h21=<h2>Hello World</h2>
//root.render(h21);
root.render(div);