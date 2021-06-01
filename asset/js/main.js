// Btn categories
var btn = document.getElementById('img-nav')

btn.onclick = function() {
        var categories_open = document.getElementById('categories-open')
        var style = getComputedStyle(categories_open)
        if (style.display === 'none') {
            categories_open.style.display = 'block'
        } else {
            categories_open.style.display = 'none'
        }
    }
    // open,close Child of btn
var first_child = document.querySelector('.list-item:first-child')

first_child.onclick = function() {
        var list_item = document.querySelector('.list-item-chlid')
        var style = getComputedStyle(list_item)
        if (style.display === 'none') {
            list_item.style.display = 'block'
        } else {
            list_item.style.display = 'none'
        }
    }
    // Click outside close



// Slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}



function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider-contain");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "flex";
}






// Change language
$(document).ready(function() {

    $(".language-default").click(function() {
        $(this).parent().toggleClass("active");
    })

    $(".language-selection li").click(function() {
        var current_ele = $(this).html()
        $(".language-default li").html(current_ele)
        $(this).parents(".language").removeClass("active")
    })
});

// Click outside close

$(document).click(function(e) {
    var ele = $(e.target)
    if (!ele.closest(".language").length) {
        $('.language').removeClass("active")
    }
})


// Carousel latest

$('.carousel').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,

            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                infinite: true,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 2000,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Nav mobiele

$(document).ready(function() {

    $(".caret").click(function() {
        $('.header__bottom .navigation').toggleClass("active");
    })
});

// Click outside close nav mobile

$(document).click(function(e) {
    var ele = $(e.target)
    if (!ele.closest(".navigation").length && !ele.closest('.caret').length) {
        $('.navigation').removeClass("active")
    }
})


// search tablet

$(document).ready(function() {

    $(".extension-search").click(function() {
        $('.mid-box .search-box .search-input').toggleClass("active");
    })
});

// Click outside close search tablet

$(document).click(function(e) {
    var ele = $(e.target)
    if (!ele.closest(".mid-box .search-box .search-input").length && !ele.closest('.extension-search').length) {
        $('.mid-box .search-box .search-input').removeClass("active")
    }
})


// Categories selector

$(document).ready(function() {

    $(".category").click(function() {
        $('.form-input .category .list').toggleClass("active");
    })

    $(".category .list .category-item").click(function() {
        var current_ele = $(this).html()
        console.log(current_ele)
        $(".form-input .category .default-item").html(current_ele)
        $(this).parents(".category-item default-item ").removeClass("active")
    })
});

// Click outside close Categories selector
$(document).click(function(e) {
    var ele = $(e.target)
    if (!ele.closest(".form-input .category .list").length && !ele.closest('.category').length) {
        $('.form-input .category .list').removeClass("active")
    }
})

// Btn-contact 
$(document).ready(function() {

    $(".contact-btn").click(function() {
        $('.header__top .contact-info').toggleClass("active");
    })
});

// Click outside close search tablet

$(document).click(function(e) {
    var ele = $(e.target)
    if (!ele.closest(".header__top .contact-info").length && !ele.closest('.contact-btn').length) {
        $('.header__top .contact-info').removeClass("active")
    }
})


// Brand carousel


$('.brand-box').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
            breakpoint: 1025,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                infinite: true,

            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 1500,
                infinite: true,
            }
        },
        {
            breakpoint: 426,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                autoplaySpeed: 1500,
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

// Cart 

$(document).ready(function() {

    $(".cart").click(function() {
        $('.list-items').toggleClass("active");
    })
});

// Click outside close search tablet

$(document).click(function(e) {
    var ele = $(e.target)
    if (!ele.closest(".list-items").length && !ele.closest('.cart').length) {
        $('.list-items').removeClass("active")
    }
})

// SEARCHING SUGGESTIONS

// Getting all required elements
const form_input = document.querySelector('.form-input');

const input_box = document.querySelector('.input')
const box_search = form_input.querySelector('.suggestion-box')
const suggestion_box = box_search.querySelector('.suggestion-list');



// Catching data from user when user press any key and release

input_box.onkeyup = (e) => {
    let user_data = e.target.value
    let emptyList = []
    if (user_data) {
        emptyList = suggestions.filter((data) => {
                //filter and  Return the first letter that user entered
                return data.toLocaleLowerCase().startsWith(user_data.toLocaleLowerCase())
            })
            // Make suggestion items to be li tag
        emptyList = emptyList.map((data) => {
            return data = '<li class="suggestion">' + data + '</li>'
        })

        form_input.classList.add("active")
        showSuggestions(emptyList)
        let all_list = suggestion_box.querySelectorAll("li")

        for (let i = 0; i < all_list.length; i++) {
            all_list[i].setAttribute("onclick", "select(this)")
        }
    } else {
        form_input.classList.remove("active")
    }


}

function select(element) {
    let selectUserdata = element.textContent;
    input_box.value = selectUserdata
    form_input.classList.remove("active")

}

function showSuggestions(list) {
    let listData
    if (!list.length) {
        form_input.classList.remove("active")
    } else {
        listData = list.join('')
    }
    suggestion_box.innerHTML = listData;
}


$(document).click(function(e) {
    var ele = $(e.target)
    if (!ele.closest(".search-form").length) {
        $('.search-form').removeClass("active")
    }
})