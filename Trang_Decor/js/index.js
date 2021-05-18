// Header

// Style cho header khi scroll và style cho nút arrow up
let headerScroll = document.getElementById("homepage--header")
let arrowUpScroll = document.querySelector(".homepage--upButton")

window.onscroll = function () {
    if (document.documentElement.scrollTop > 0) {
        headerScroll.className = "scrollHeader"
        arrowUpScroll.className = "homepage--upButton active"

    } else if (document.documentElement.scrollTop === 0) {
        headerScroll.className = ""
        arrowUpScroll.className = "homepage--upButton inActive"
    }
}

// JS cho chức năng tự động cuộn trang lên đầu: Bấm nút là
// tự động cuộn lên mỗi 10ms là 100px, khi cuộn tới giá trị vị trí = 0 thì dừng cuộn
function autoSrollUp() {
    window.scrollBy(0, -100);
    scrolldelay = setTimeout(autoSrollUp, 10);
    if (document.documentElement.scrollTop === 0) {
        clearTimeout(scrolldelay)
    }
}

// Style gạch chân các nút header menu
let currentHeaderTitle = document.getElementsByClassName("header--buttonCSS")

function underlineTitle(i) {
    for (let i = 0; i < currentHeaderTitle.length; i++) {
        currentHeaderTitle[i].className = "header--buttonCSS"
    }
    currentHeaderTitle[i].className = "header--buttonCSS underline"
}

// Hết Header

// chia cột 

let productContainer = document.getElementsByClassName("container1")

function threeRow() {
    for (let i = 0; i < productContainer.length; i++) {
        productContainer[i].className = "container1 production__gird"
    }
}

function fourRow() {
    for (let i = 0; i < productContainer.length; i++) {
        productContainer[i].className = "container1 production__gird fourItems"
    }
}


// footer
// Password

let registerButton = document.querySelector(".btn.modal--registerButton")
let loginPassword = document.getElementById("loginPW")
let userConfirmPW = document.getElementById("confirmPW")
let userRegisterPW = document.getElementById("registerPW")
let confirmFailMessage = document.querySelector(".form-message")
let loginFail = document.getElementById("test12")


function checkPW() {

    // Register
    if (userRegisterPW.value !== userConfirmPW.value) {
        userConfirmPW.className = "modal--userInput password confirmFail"
        loginFail.innerHTML = "Password does not match!"

    } else if (userRegisterPW.value === userConfirmPW.value) {
        userConfirmPW.className = "modal--userInput password"
        loginFail.innerHTML = ""
    }
}

function login() {

    // Login
    if (loginPassword.value.length < 6) {
        loginPassword.className = "modal--userInput password confirmFail"
        confirmFailMessage.innerHTML = "Password's length must be over 6 characters!"

    }
    // else if (!loginPassword.value.includes()) {
    //     loginPassword.className = "modal--userInput password confirmFail"
    //     confirmFailMessage.innerHTML = "Password must include special character, number, and Uppercase!"
    // } 
    else {
        loginPassword.className = "modal--userInput password"
        confirmFailMessage.innerHTML = ""

    }
    console.log(loginPassword.value.includes)
}

// Show Login / Rerister modal vầ vô hiệu hóa thanh cuộn
let homepageModal = document.querySelector(".homepage--modal")

function showHomepageModal() {
    homepageModal.style.display = "flex"
    // Khó quá nên đi cop cho nó hoạt động chứ ko hiểu gì
    if ($(document).height() > $(window).height()) {
        let scrollTop = ($('html').scrollTop()) ? $('html').scrollTop() : $('body').scrollTop(); // Works for Chrome, Firefox, IE...
        $('html').addClass('noscroll').css('top', -scrollTop);
    }
}



// Swicth Login and Register modal
let loginModal = document.querySelector(".modal--body__loginInner")
let registerModal = document.querySelector(".modal--body__registerInner")

function showRegisterModal() {
    registerModal.style.display = "flex"
    loginModal.style.display = "none"
}

function showLoginModal() {
    registerModal.style.display = "none"
    loginModal.style.display = "flex"
}

// Close Login/Register modal
let closeModalLogin = document.querySelector(".modal--body__close")


function closeModal() {
    homepageModal.style.display = "none"
    registerModal.style.display = "none"
    loginModal.style.display = "flex"
    loginPassword.value = ""
    confirmFailMessage.innerHTML = ""
    loginPassword.className = "modal--userInput password"

    let scrollTop = parseInt($('html').css('top'));
    $('html').removeClass('noscroll');
    $('html,body').scrollTop(-scrollTop);
}


// Show and Hide password
let showPS = document.getElementsByClassName("modal--eyes show")
let hidePS = document.getElementsByClassName("modal--eyes hide")
let userLoginPW = document.getElementsByClassName("modal--userInput password")

function hidePassword(x) {
    showPS[x].style.display = "none"
    hidePS[x].style.display = "flex"

    userLoginPW[x].type = "password"
}

function showPassword(x) {
    showPS[x].style.display = "flex"
    hidePS[x].style.display = "none"

    userLoginPW[x].type = "text"
    userLoginPW[x].innerHTML = userLoginPW.value
}

// Search modal

let search = document.querySelector(".search--form")

function userSearch() {
    search.style.display = "flex"
    document.documentElement.style.overflow = "hidden"
}

function closeSearch() {
    search.style.display = "none"
    document.documentElement.style.overflow = "unset"
}

//


// Truyền sản phẩm decoration vào
{
    let strHTML = "";
    let containerItem = document.getElementById('container--production')
    for (let i = 0; i < products.length; i++) {
        if (products[i].catelogy === 'Decoration') {

            strHTML += `
            <div class="container1 production__gird" id="container1 production__gird">
                <div class="product__img">
                    <img src="${products[i].bigImage[0]}" alt="">
                    <img class="picturre" src="${products[i].bigImage[1]}" alt="">
                    <div class="iconImgBott">
                        <div class="boxIcon">
                            <div class="icon">
                                <i class="far fa-heart"></i>
                            </div>
                            <div class="icon">
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                            <div class="icon">
                                <i class="fas fa-search-plus"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product__meta">
                    <a href="#">${products[i].productName}</a>
                    <p>
                        <span>
                            $
                        </span>
                        <span>
                        ${products[i].price}.00
                        </span>
                    </p>
                </div>
            </div>
            `;
            containerItem.innerHTML = strHTML;
        }
    }
}