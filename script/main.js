window.onload = function () {
	

	let inputAdd = document.getElementById('input-add');
	let buttonAdd = document.getElementById('btn-add');

	let outContent = document.getElementById('out-content');


	buttonAdd.onclick = function () {

		
		let newContent = document.createElement('div');
		let paragraph = document.createElement('p');
		let img = document.createElement('img');

		let editButton = document.createElement('button');
		let removeButton = document.createElement('button');


		img.setAttribute('src', 'img/1.gif');

		editButton.innerHTML = 'Edit';
		removeButton.innerHTML = 'Remove';

		newContent.classList.add('block');
		paragraph.innerHTML = inputAdd.value;





		removeButton.onclick = () => {
			newContent.remove();
		}
		editButton.onclick = () => {
			result = prompt('Edit');
			paragraph.innerHTML = result;
			img.remove();
		}




		if (paragraph.innerHTML == '') {
			newContent.appendChild(img);
		}

		outContent.appendChild(newContent);
		newContent.appendChild(paragraph);
		newContent.appendChild(editButton);
		newContent.appendChild(removeButton);
	}


}