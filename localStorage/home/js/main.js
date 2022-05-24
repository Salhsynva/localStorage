let btns = document.querySelectorAll('.btn');

function BasketItem(name, id, count) {
    this.Name = name,
        this.Id = id,
        this.Count = count
}

let basketStr = localStorage.getItem('basket');
if (!basketStr) {
    var basketItems = [];
} else {
    var basketItems = JSON.parse(basketStr);
}


let badge = document.querySelector("#basket-span");
console.log(badge);
badge.innerText = basketItems.length;


btns.forEach(el => {
    el.addEventListener('click', function (e) {
        e.preventDefault();
        let dataId = el.parentNode.parentNode.getAttribute('data-id');
        // console.log(dataId);


        let item = basketItems.find(x => x.Id == dataId);
        if (item) {
            item.Count++;
        } else {
            item = new BasketItem("name1", dataId, 1);
            basketItems.push(item);
        }

        badge.innerText = basketItems.length;

        localStorage.setItem('basket', JSON.stringify(basketItems));

    })

})

