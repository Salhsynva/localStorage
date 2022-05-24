let ul = document.querySelector('.list-group');
// console.log(ul);

let basketStrBs = localStorage.getItem('basket');
if (!basketStrBs) {
    var basketList = [];
} else {
    var basketList = JSON.parse(basketStrBs);
}

// console.log(basketList);

for (let i = 0; i < basketList.length; i++) {
    let bsItemDiv = document.createElement('div');
    bsItemDiv.classList.add('position-relative');
    let bsItemLi = document.createElement('li');
    bsItemLi.classList.add('list-group-item');
    bsItemLi.innerText = "Name: " +basketList[i].Name +" ID: " + basketList[i].Id + " Count: " + basketList[i].Count;
    let bsItemSpan = document.createElement('span');
    bsItemSpan.classList.add('span-element');
    bsItemSpan.innerText = 'Remove';

    bsItemDiv.appendChild(bsItemLi);
    bsItemDiv.appendChild(bsItemSpan);
    ul.appendChild(bsItemDiv);


    bsItemSpan.addEventListener('click', function(){
        basketList.splice(i,1)
    })
}

// basketList.forEach(bsItem => {
    
// });