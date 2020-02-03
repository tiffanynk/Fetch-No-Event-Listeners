fetch('http://bagel-api-fis.herokuapp.com/bagels')
  .then(response => response.json())
  .then(bagels => renderBagels(bagels))
  .then(postBagels())


function postBagels(){
    fetch('http://bagel-api-fis.herokuapp.com/bagels',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Accept':'application/json'
      },
      body:JSON.stringify({type:"Bagel YEAHH"})
    })
  }

function renderBagels(bagels){
  const bagelList = document.getElementById('bagel-list')
  bagels.map(bagel => {
    const bagelLi = document.createElement('li')
    bagelLi.innerText = bagel.type
    bagelList.appendChild(bagelLi)
  })
}
