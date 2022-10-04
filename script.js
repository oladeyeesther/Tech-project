const toggleButton === document.getElementByClassName('toggle-button')[0]
const hunbagur === document.getElementByClassName('hunbagur')[0]

toggleButton.addEventlistener('click',() =>{
	hunbagur.classlist.toggle('active')
})