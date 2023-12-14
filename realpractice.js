let fulldata;

async function fetchData() {
    fulldata = await $.get('./store.json');
    console.log(fulldata.products);
    return fulldata;
}

fetchData().then(() => {
    console.log(fulldata.products[0].id);
    let html = fulldata.products.map((item, i) => {
    return `<div class="row" >
    <div id= data-product-id="${item.id}" class="col-lg-4 mt-2" draggable="true">
      <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
      <h2 class="fw-normal"></h2>
      <p>${item.title}</p>
      <p>${item.brand}</p>
      <p>${item.price}</p>
      <p><a class="btn btn-secondary" data-product-id="${item.id}" href="#">구매하기 »</a></p>
    </div>
  </div>`
    }).join('');

    let container = document.querySelector('.container.marketing');
    container.innerHTML += html;


    container.addEventListener('click', function(event) {
        if (event.target.classList.contains('btn-secondary')) {
            event.preventDefault(); // 버튼의 기본 동작을 막습니다.
            let productId = event.target.dataset.productId;
            let product = fulldata.products.find(function(item) {
                return item.id == productId;
            });
            let purchaseButtonId = `purchase-button-${productId}`;
            let purchaseButton = document.getElementById(purchaseButtonId);
            console.log(product);
            // 모달 창의 HTML 문자열을 만듭니다.
            let modalHtml = `
                <div class="modal" style="display: block;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">구매하기</h5>
                        </div>
                        <div class="modal-body">
                        <p>성함</p>
                        <input id="name" type="text" placeholder="이름을 입력하세요.">
                        <p>연락처</p>
                        <input id="phone" type="text" placeholder="전화번호를 입력하세요.">
                    </div>
                        <div class="modal-footer">
                            <button class="close-button">닫기</button>
                            <button id="${purchaseButtonId}" class="purchase-button" data-product-id="${productId}">구매</button>
                        </div>
                    </div>
                </div>
            `;
            document.body.insertAdjacentHTML('beforeend', modalHtml);
            document.querySelector('.close-button').addEventListener('click', function() {
                // 모달 창을 제거합니다.
                let modal = document.querySelector('.modal');
                modal.parentNode.removeChild(modal);
            });
            document.getElementById(purchaseButtonId).addEventListener('click', function(event) {
                event.preventDefault();
                let productId = event.target.dataset.productId;
                let product = fulldata.products.find(function(item) {
                    return item.id == productId;
                });
                console.log(product);
                let name = $('#name').val();
                let phone = $('#phone').val();
                let canvasHtml = `<div class="modal" style="display: block;">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">구매영수증</h5>
                        </div>
                        <div class="modal-body">
                            <p>성함: ${name}</p>
                            <p>연락처: ${phone}</p>
                            <p>상품명: ${product.title}</p>
                            <p>가격: ${product.price}</p>
                            <p>구매일: ${new Date().toLocaleString('ko-KR')}</p>
                            <p>수량: 1</p>
                            <p>합계: ${product.price}</p>
                        </div>
                        <div class="modal-footer">
                            <button class="close-modal-button">닫기</button>
                        </div>
                    </div>
                </div>`;
                document.querySelector('.modal').innerHTML = canvasHtml;
                document.querySelector('.close-modal-button').addEventListener('click', function() {
                    document.querySelector('.modal').style.display = 'none';
                });
                
            });
        }
    });
}).catch(error => console.log(error));


$('form').on('submit', (e) => {
    e.preventDefault();
    let search = $('input[type="search"]').val();
    let filteredProducts = fulldata.products.filter((item) => {
        return item.title.includes(search);
    });
    console.log(filteredProducts);
    let html = filteredProducts.map((item, i) => {
        return `<div class="row">
        <div class="col-lg-4 mt-2">
          <svg class="bd-placeholder-img rounded-circle" width="140" height="140" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="var(--bs-secondary-color)"></rect></svg>
          <h2 class="fw-normal"></h2>
          <p>${item.title}</p>
          <p>${item.brand}</p>
          <p>${item.price}</p>
          <p><a class="btn btn-secondary" href="#">구매하기 »</a></p>
        </div>
      </div>`
        }).join('');
        $('.container.marketing').html(html);
})



$('#drag-item').attr('draggable', 'true');

$(`#drag-item-${item.id}`).on('dragstart', function(event) {
    event.originalEvent.dataTransfer.setData('text', $(this).data('productId'));
});

let cart = []; 
$('#cart').on('dragover', function(event) {
    event.preventDefault();
});

$('#cart').on('drop', function(event) {
    event.preventDefault();
    let productId = event.originalEvent.dataTransfer.getData('text');
    let product = fulldata.products.find(function(item) {
        return item.id == productId;
    });
    cart.push(product); 

    let html = cart.map(function(item) {
        return `<p>${item.title}: ${item.price}</p>`;
    }).join('');
    $('#cart').html(html);
});