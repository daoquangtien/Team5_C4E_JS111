// Header

// Style cho header khi scroll và style cho nút arrow up
let headerScroll = document.getElementById("homepage--header")
let arrowUpScroll = document.querySelector(".homepage--upButton")

window.onscroll = function() {
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
// footer
// Password

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
// Lấy ra sản phẩm được click từ trang SHOP
let itemClick = JSON.parse(localStorage.getItem('itemClick'));

function check1() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb1").src) {
        let inner = "";
        let inHTML = document.getElementById('anh1');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[0]}" alt="" id="thumb1" onclick="click1()" 
        style="border: 1px solid black;">        `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb1").src) {
        let inner = "";
        let inHTML = document.getElementById('anh1');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[0]}" alt="" id="thumb1" onclick="click1()">
        `
        inHTML.innerHTML += inner;
    }
}

function check2() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb2").src) {
        let inner = "";
        let inHTML = document.getElementById('anh2');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[1]}" alt="" id="thumb2" onclick="click2()" 
        style="border: 1px solid black; opacity: 1;">       `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb2").src) {
        let inner = "";
        let inHTML = document.getElementById('anh2');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[1]}" alt="" id="thumb2" onclick="click2()">
        `
        inHTML.innerHTML += inner;
    }
}

function check3() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb3").src) {
        let inner = "";
        let inHTML = document.getElementById('anh3');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[2]}" alt="" id="thumb3" onclick="click3()" 
        style="border: 1px solid black; opacity: 1;">      `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb3").src) {
        let inner = "";
        let inHTML = document.getElementById('anh3');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[2]}" alt="" id="thumb3" onclick="click3()">
        `
        inHTML.innerHTML += inner;
    }
}

function check4() {
    if (document.getElementById("firstImg").src == document.getElementById("thumb4").src) {
        let inner = "";
        let inHTML = document.getElementById('anh4');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[3]}" alt="" id="thumb4" onclick="click4()" 
        style="border: 1px solid black; opacity: 1;">       `
        inHTML.innerHTML = inner;
    } else if (document.getElementById("firstImg").src != document.getElementById("thumb4").src) {
        let inner = "";
        let inHTML = document.getElementById('anh4');
        inHTML.innerHTML = "";
        inner += `
        <img src="${itemClick.bigImage[3]}" alt="" id="thumb4" onclick="click4()">
        `
        inHTML.innerHTML += inner;
    }
}




function click1() {
    document.getElementById("firstImg").src = document.getElementById("thumb1").src;
    check1();
    check2();
    check3();
    check4();
}

function click2() {
    document.getElementById("firstImg").src = document.getElementById("thumb2").src;
    check1();
    check2();
    check3();
    check4();
}

function click3() {

    document.getElementById("firstImg").src = document.getElementById("thumb3").src;
    check1();
    check3();
    check2();
    check4();
}

function click4() {
    document.getElementById("firstImg").src = document.getElementById("thumb4").src;
    check1();
    check3();
    check2();
    check4();
}

let count = 0;
let sum = document.getElementById("sum");

function cong() {
    let sum = document.getElementById("sum");
    if (sum.value > 999) {
        sum.value = 1;
    } else if (sum.value <= 999) {
        count++;
        sum.value = count;
    }
}

function tru() {
    let sum = document.getElementById("sum");
    if (sum.value < 2) {
        sum.value = 1;
    } else {
        count--;
        sum.value = count;
    }
}


function vote1() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="far fa-star"></i>
    </div>
    <div id="star3">
        <i class="far fa-star"></i>
    </div>
    <div id="star4">
         <i class="far fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 1;
    console.log(voteStar);
}

function vote2() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="far fa-star"></i>
    </div>
    <div id="star4">
         <i class="far fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 2;
    console.log(voteStar);
}

function vote3() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="fas fa-star"></i>
    </div>
    <div id="star4">
         <i class="far fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 3;
    console.log(voteStar);
}

function vote4() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="fas fa-star"></i>
    </div>
    <div id="star4">
        <i class="fas fa-star"></i>
    </div>
    <div id="star5">
        <i class="far fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 4;
    console.log(voteStar);
}

function vote5() {
    let vote = document.getElementById("star");
    let stringHTML = `
    <div id="star1">
        <i class="fas fa-star"></i>
    </div>
    <div id="star2">
        <i class="fas fa-star"></i>
    </div>
    <div id="star3">
        <i class="fas fa-star"></i>
    </div>
    <div id="star4">
        <i class="fas fa-star"></i>
    </div>
    <div id="star5">
        <i class="fas fa-star"></i>
    </div>      
    `;
    vote.innerHTML = stringHTML;
    let voteStar = 5;
    console.log(voteStar);
}
// Click tu Shop chuyen vao Detail
function onloadData() {

    let dataDetail = document.getElementById('main');
    let strHTMLDetail = `
    <div class="top">
    
                <!-- Phần hình ảnh đầu trang (thumb + ảnh lớn + chi tiết đánh giá) -->
                <div class="topContainer">
                    <div class="topLeftContainer">
                        <!-- 4 Ảnh nhỏ -->
                        <div class="smallImg">
                            <div class="imgSmall">
                                <div id="anh1">
                                    <img src="${itemClick.bigImage[0]}" alt="" id="thumb1"
                                        onclick="click1()">
                                </div>
                            </div>
                            <div class="imgSmall">
                                <div id="anh2">
                                    <img src="${itemClick.bigImage[1]}" alt="" id="thumb2"
                                        onclick="click2()">
                                </div>
                            </div>
                            <div class="imgSmall">
                                <div id="anh3">
                                    <img src="${itemClick.bigImage[2]}" alt="" id="thumb3"
                                        onclick="click3()">
                                </div>
                            </div>
                            <div class="imgSmall">
                                <div id="anh4">
                                    <img src="${itemClick.bigImage[3]}" alt="" id="thumb4"
                                        onclick="click4()">
                                </div>
                            </div>
                        </div>
                        <!-- Ảnh lớn -->
                        <div class="bigImg">
                            <div class="imgBig">
                                <img src="${itemClick.bigImage[0]}" alt="" id="firstImg">
                            </div>
                        </div>

                    </div>
                    <div class="topRightContainer">
                        <div class="allDivRight">
                            <!-- Home Accessories After -->
                            <div class="topOfTopRightContainer">
                                <a href="https://goya.everthemes.com/demo-decor">Home</a>
                                <i>/</i>
                                <a
                                    href="https://goya.everthemes.com/demo-decor/product-category/accessories/">${itemClick.catelogy}</a>
                                <i>/</i>
                                <a href="">${itemClick.productName}</a>
                            </div>
                            <!-- Tên Sản Phẩm -->
                            <div class="nameProduct">
                                <h1>${itemClick.productName}</h1>
                                <p class="price">
                                    <span>$</span>
                                    <span>${itemClick.price}.00</span>
                                    <span><strike>SALE</strike></span>
                                </p>
                                <p class="discount">
                                    <span class="numberDiscount">
                                    ${itemClick.salePercent}
                                    </span>
                                    <span>
                                        %
                                    </span>
                                    <span>
                                        Off
                                    </span>
                                </p>
                                <div class="star" id="star">
                                    <div id="star1" onclick="vote1()">
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div id="star2" onclick="vote2()">
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div id="star3" onclick="vote3()">
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div id="star4" onclick="vote4()">
                                        <i class="far fa-star"></i>
                                    </div>
                                    <div id="star5" onclick="vote5()">
                                        <i class="far fa-star"></i>
                                    </div>
                                </div>
                                <p class="describe">
                                ${itemClick.shortDes}
                                </p>
                            </div>
                            <div class="allButton">
                                <form action="">
                                    <div class="threeButton">
                                        <div class="twoBox">
                                            <div class="box">
                                                <div class="minus">
                                                    <p class="sub" onclick="tru()">
                                                        -
                                                    </p>
                                                </div>
                                                <input type="number" class="total" id="sum" value="1">
                                                <div class="plus">
                                                    <p class="add" onclick="cong()">
                                                        +
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="addToCart">
                                                <button type="submit" onclick="Sale()">Add To Cart</button>
                                            </div>
                                        </div>

                                    </div>
                                </form>
                            </div>

                            <div class="hastag">
                                <div class="topHastag">
                                    <div>
                                        <p class="sku">SKU:</p>
                                        <p class="titleSku">LGHT183</p>
                                    </div>
                                    <div class="cate">
                                        <p class="titleCate">Categories: &nbsp;</p>
                                        <a href="../Trang_Accesories/index.html" >Accessories</a>
                                        <p class="dauphay">,</p>
                                        <a href="../Trang_Decor/index.html">Decoration</a>
                                    </div>
                                </div>
                                <br>
                                <div class="botHastag">
                                    <p class="tag">Tag: &nbsp;</p>
                                    <a
                                        href="https://goya.everthemes.com/demo-decor/product-category/decoration/">decoration</a>
                                </div>
                            </div>

                            <div class="bottomRight">
                                <div class="share">
                                    <p class="tilteShare">
                                        Share
                                    </p>
                                    <i class="fab fa-facebook-f"></i>
                                    <i class="fab fa-twitter"></i>
                                    <i class="fab fa-pinterest"></i>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div class="bot">
                <div class="botContainer">
                    <div class="descriptionContainer">
                        <div class="description">
                            <h2>Description</h2>
                            <div class="titleDes">
                                <p>
                                ${itemClick.fullDes}
                                </p>
                                <p>
                                ${itemClick.fullDes2}
                                <h4>
                                    Product Details
                                </h4>
                                </p>
                                <ul>
                                    <li>
                                    ${itemClick.details[0]}
                                    </li>
                                    <li>
                                    ${itemClick.details[1]}
                                    </li>
                                    <li>
                                    ${itemClick.details[2]}
                                    </li>
                                    <li>
                                    ${itemClick.details[3]}
                                    </li>
                                    <li>
                                    ${itemClick.details[4]}
                                    </li>
                                    <li>
                                    ${itemClick.details[5]}
                                    </li>
                                    <li>
                                    ${itemClick.details[6]}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="informationContainer">
                        <div class="information">
                            <h2>Additional information</h2>
                            <table class="titleInfor">
                                <tbody>
                                    <tr>
                                        <th class="weight">WEIGHT</th>
                                        <td class="weight_value">${itemClick.AdditionalInfo.weight}</td>
                                    </tr>
                                    <tr>
                                        <th class="dimensions">DIMENSIONS</th>
                                        <td class="dimensions_value">${itemClick.AdditionalInfo.demensions}</td>
                                    </tr>
                                    <tr>
                                        <th class="color">COLOR</th>
                                        <td class="color_value">${itemClick.AdditionalInfo.color}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="relatedProductContainer">
                        <div class="relatedProduct">
                            <h2>
                                Related products
                            </h2>
                            <div class="listRelated">
                                <ul id="listRelatedProduct">
                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="homepage--footer">

                    <div class="homepage--footer__navigator">
                        <div class="homepage--footer__menu menuLeft">
                            <div class="footer__menu title ">COMPANY</div>
                            <div class="footer__menu css underline">Contact</div>
                            <div class="footer__menu css underline">Store Locator</div>
                            <div class="footer__menu css underline">About us</div>
                        </div>

                        <div class="homepage--footer__menu menuBetween">
                            <div class="footer__menu title">HELP</div>
                            <div class="footer__menu css underline">Order Tracking</div>
                            <div class="footer__menu css underline">FAQ’s</div>
                            <div class="footer__menu css underline">Terms & Conditions</div>
                        </div>

                        <div class="homepage--footer__menu menuBetween">
                            <div class="footer__menu title">STORE</div>
                            <div class="footer__menu css underline">Furniture</div>
                            <div class="footer__menu css underline">Decoration</div>
                            <div class="footer__menu css underline">Lighting</div>
                        </div>

                        <div class="homepage--footer__menu menuRight">
                            <div class="footer__menu title">SIGN UP FOR FREE</div>
                            <div class="footer__menu content">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Molestias quia beatae.</div>

                            <div class="footer__menu form ">
                                <input class="footer--menu--inputText" type="text" placeholder="Your email adress">
                                <input class="footer--menu--signUpButton" type="button" value="SIGN UP"></input>
                            </div>
                        </div>
                    </div>
                    <div class="homepage--footer__social ">
                        <i class="footer fa fa-twitter "></i>
                        <i class="footer fa fa-facebook "></i>
                        <i class="footer fa fa-instagram "></i>
                    </div>
                </div>

                <div onclick="autoSrollUp()" class="homepage--upButton">
                    <i class="fa fa-long-arrow-up"></i>
                </div>
                
    
    `
    dataDetail.innerHTML = strHTMLDetail;
}




// Random related product


function randomProduct() {
    let arrRandom = [];
    let dem = 1;
    for (let i = 0; i < 100; i++) {
        let a = Math.floor(Math.random() * products.length + 1);
        if (arrRandom.includes(a) == false) {
            arrRandom.push(a);
        }
        if (arrRandom.length == 4) {
            break;
        }
    }
    console.log(arrRandom);
    let strHTMLProDuct = "";
    let related = document.getElementById('listRelatedProduct');
    for (let i = 0; i < arrRandom.length; i++) {
        strHTMLProDuct += `
        <li>
        <div class="containerImgProduct">
            <figure>
                <a href="">
                    <img src="${products[arrRandom[i]-1].bigImage[0]}" alt="" class="img1">
                    <img src="${products[arrRandom[i]-1].bigImage[1]}" alt="" class="img2">
                </a>
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
            </figure>
            <div class="nameAndPriceBot">
                <div class="productTitle">
                    <h3>
                        <a href="" title="${products[arrRandom[i]-1].productName}">${products[arrRandom[i]-1].productName}</a>
                    </h3>
                </div>
                <div class="price">
                    <span class="titlePrice">
                        <span>
                            $
                        </span>
                        <span>
                            ${products[arrRandom[i]-1].price}.00
                        </span>
                    </span>
                </div>
            </div>
        </div>
    </li>
    `;
        related.innerHTML = strHTMLProDuct;
    }

}



// }