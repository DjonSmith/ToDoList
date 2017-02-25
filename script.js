function add() {
	var inputText = document.getElementById('txt').value;

	var delBtn = document.createElement('button');
	delBtn.className = 'delBtnClass';
	delBtn.setAttribute('onclick', 'del()');
	delBtn.innerHTML = "&#9746"

	var div = document.createElement('div');
		div.className = 'liClass';
		div.innerHTML = '&#10031' + inputText;
		var list = document.getElementById('tasks');
		list.appendChild(div);
		div.insertAdjacentElement('beforeEnd', delBtn);

}


function addBtn() {
	if (document.getElementById('txt').value != '') {
		add();
		document.getElementById('txt').focus();
	} else document.getElementById('txt').focus();
}

function del () {
	div.parentElement.removeChild(div);
}