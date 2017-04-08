			function myFunction()
			{
				let text = document.getElementById("name").value; 
				let ul = document.getElementById("list");
				let div1 = document.createElement("DIV");
				let div2 = document.createElement("DIV");
				let today= new Date();
				let li = document.createElement("LI");
				div1.setAttribute("class", "div-name");
				div1.innerHTML=text;
				div2.setAttribute("class", "div-date");
				div2.innerHTML = today.toDateString();
				li.appendChild(div1);
				li.appendChild(div2);
				
				ul.appendChild(li);
ul.addEventListener('click',function(){
	let div3=document.createElement("div");
	div3.setAttribute("class","div-edit");
div3.classList.remove("hide");
	let div4=document.createElement("div");
	div4.setAttribute("class","edit-content");


	let text=document.getElementById("content").value;
	let content=document.createTextNode(text);
	
	div4.appendChild(content);
	div3.appendChild(div4);
	div3.appendChild(div1);

})
			}
			function reset() {   
 document.getElementById("DIV").value = "";
 }



function remove(){
let li=this.parentNode;
let parent=li.parentNode;
parent.removeChild(li);
}
