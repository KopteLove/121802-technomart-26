var link = document.querySelector(".button-write-us");
var popupForm = document.querySelector(".modal-write-us");
var closeForm = document.querySelector(".close-form");
if (popupForm) {
    var form = popupForm.querySelector(".modal-write-us-form");
    var login = popupForm.querySelector("[name=name]");
    var email = popupForm.querySelector("[name=email]");
    var comment = popupForm.querySelector("[name=user-comment]");
}
var storageLogin = "";
var storageEmail = "";

var isSupportStorageLogin = true;

try {
    storageLogin = localStorage.getItem("login");
} catch (err) {
    isSupportStorageLogin = false;
}

var isSupportStorageEmail = true;

try {
    storageEmail = localStorage.getItem("email");
} catch (err) {
    isSupportStorageEmail = false;
}

if (link) {
    link.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по ссылке напишите нам");
        popupForm.classList.add("js-modal-show");
        if (storageLogin) {
            login.value = storageLogin;
            email.focus();
            email.value = storageEmail;
            comment.focus()
        } else {
            login.focus()
        }
    });

    closeForm.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по крестику закрыть");
        popupForm.classList.remove("js-modal-show");
        popupForm.classList.remove("js-modal-error");
    });

    form.addEventListener("submit", function (evt) {
        if (!login.value || !email.value || !comment.value) {
            evt.preventDefault();
            console.log("Нужно заполнить форму!!!");
            popupForm.classList.remove("js-modal-error");
            popupForm.offsetWidth = popupForm.offsetWidth;
            popupForm.classList.add("js-modal-error");
        } else {
            if (isSupportStorageLogin) {
                localStorage.setItem("login", login.value);
            }
            if (isSupportStorageEmail) {
                localStorage.setItem("email", email.value);
            }
        }
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (popupForm.classList.contains("js-modal-show")) {
                evt.preventDefault();
                popupForm.classList.remove("js-modal-show");
                popupForm.classList.remove("js-modal-error");
            }
        }
    });
}

var mapImg = document.querySelector(".map-img");
var map = document.querySelector(".map-popup");

if (map) {
    var closeMap = map.querySelector(".close-map");

    mapImg.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по мини-карте");
        map.classList.add("js-modal-show");
    });

    closeMap.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по крестику закрыть");
        map.classList.remove("js-modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (map.classList.contains("js-modal-show")) {
                evt.preventDefault();
                map.classList.remove("js-modal-show");
            }
        }
    });
}

var cart = document.querySelector(".modal-cart");
var buy = document.querySelectorAll(".button-buy");
var basket = document.querySelector(".basket");

if (cart) {
    var closeCart = cart.querySelector(".close-cart");
    var continueBuy = cart.querySelector(".modal-cart-button-continue");
    var order = cart.querySelector(".modal-cart-button-buy");
    var basketQuantity = document.querySelector(".js-basket-quantity");
    var basketCount = 0;

    basketQuantity.textContent = basketCount.toString();

    for (var i = 0; i < buy.length; i++) {
        buy[i].addEventListener("click", function (evt) {
            evt.preventDefault();
            console.log("Клик по кнопки купить");
            cart.classList.add("js-modal-show");
            basket.classList.add("color-red");
            basketCount++;
            basketQuantity.textContent = basketCount.toString();
        });
    }

    closeCart.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по крестику закрыть");
        cart.classList.remove("js-modal-show");
    });

    order.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по кнопке оформить заказ");
        cart.classList.remove("js-modal-show");
    });

    continueBuy.addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по кнопке продолжить покупки");
        cart.classList.remove("js-modal-show");
    });

    window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
            if (cart.classList.contains("js-modal-show")) {
                evt.preventDefault();
                cart.classList.remove("js-modal-show");
            }
        }
    });
}

var btnBookmark = document.querySelectorAll(".button-bookmark");
var bookmark = document.querySelector(".bookmark");
var bookmarkQuantity = document.querySelector(".js-bookmark-quantity");
var bookmarkCount = 0;

bookmarkQuantity.textContent = bookmarkCount.toString();

for (var b = 0; b < btnBookmark.length; b++) {
    btnBookmark[b].addEventListener("click", function (evt) {
        evt.preventDefault();
        console.log("Клик по кнопке в закладки");
        bookmark.classList.add("color-red");
        bookmarkCount++;
        bookmarkQuantity.textContent = bookmarkCount.toString();
    });
}