fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(bagels => renderBagels(bagels))
 



function renderBagels(bagels){
  const bagelList = document.getElementById('bagel-list')
  
  bagels.map(bagel => {
    const bagelLi = document.createElement('li')
    bagelLi.innerText = bagel.type
    bagelList.appendChild(bagelLi)
  })
}
