var myNodeList = document.getElementsByTagName('li'),
	close = document.getElementsByClassName('close'),
	list = document.querySelector('ul');
	
//Стильное отмечание выполненого
list.addEventListener('click', function(ev) {
	if(ev.target.tagName == 'LI') {
		ev.target.classList.toggle('checked');
	}
},false);

//Если код добавления кнопок и цикл не дублировать,он не работает
for (var i = 0; i<myNodeList.length; i++) {//Пацанская кнопка удаления
	var span = document.createElement('span'),
		txt = document.createTextNode('\u00D7');
	
	span.className = 'close';
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}

//Цикл добавления свойств удаления для кнопки 
for (var i = 0; i<close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = 'none';
		};
	}

//Функция создания новой заметки 
function newElem() {
	var li = document.createElement('li'),
		inputValue = document.getElementById('input').value,
		t = document.createTextNode(inputValue);
	li.appendChild(t);
	
	if (inputValue === "") {
		document.getElementById('input').focus();
	} else {
		document.getElementById('ul').appendChild(li);
	}

	document.getElementById('input').value = "";
	document.getElementById('input').focus();

	var span = document.createElement('span'),
		txt = document.createTextNode('\u00D7');

	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for (var i = 0; i<close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		}
	}

}	