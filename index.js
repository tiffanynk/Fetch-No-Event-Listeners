fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(bagels => renderBagels(bagels))
 
const bagelList = document.getElementById('bagel-list')

function renderBagels(bagels){

  bagels.map(bagel => {
    const bagelLi = document.createElement('li')
    bagelLi.innerText = bagel.type
    bagelList.appendChild(bagelLi)
  })
}

const bagelForm = document.getElementById('bagel-form')

// <form> responds to a submit event. user hitting enter or clicking submit
bagelForm.addEventListener('submit', (event) => {
  event.preventDefault()
  //prevents default behavior event - in this case, reloading the page
  handleForm(bagelForm)
  event.target.reset()
})

function handleForm(bagelForm){
  const newBagelFormData = new FormData(bagelForm)
  //new FormData: formdata api that makes use of the formdata prototype
  // console.log(...newBagelFormData)
  //taking the return from newBagelFormData and saving it to another data structure and feeding into the argument field of console.log 
  const newBagel = newBagelFormData.get('bagel')
  //the input name value is what gets passed into .get.
  renderBagel(newBagel)
  persistBagel(newBagel)
  //called renderBagel before persistBagel because renderBagel manipulates the DOM first and shows the user the updated page before it saves to the backend with persist. 
  //rendering before persisting = optimistic rendering
}

function renderBagel(newBagel){
  const li = document.createElement('li')
  li.innerText = newBagel
  bagelList.append(li)
}

function persistBagel(newBagel){
  //sending to backend
  fetch('http://bagel-api-fis.herokuapp.com/bagels', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({type: newBagel})
  })
}