console.log("working");

function btnStyling1(){


    const btn1 = document.getElementById("toggle1")
    const btn2 = document.getElementById("toggle2")
    const image = document.getElementById("section_three")
    const table1 = document.getElementById("table1")
    const table2 = document.getElementById("table2")

    if(btn1.className == "selected"){
       return null
    }
    else{
        btn1.className = "selected"
        btn2.className = ""
        image.className = "background--image2"
        table1.hidden = false
        table2.hidden = true

    }
}

function btnStyling2(){
    const btn1 = document.getElementById("toggle1")
    const btn2 = document.getElementById("toggle2")
    const image = document.getElementById("section_three")
    const table1 = document.getElementById("table1")
    const table2 = document.getElementById("table2")

    if(btn2.className == "selected"){
       return null
    }
    else{
        btn2.className = "selected"
        btn1.className = ""
        image.className = "background--image1"
        table1.hidden = true
        table2.hidden = false
    }
}

const IMAGES = [
    {
        file: "carousel1.jpg",
        path: "./carousel1.jpg",
    },
    {
        file: "carousel2.jpg",
        path: "./carousel2.jpg",
    },
]

const URL = "http://localhost:5500"


function nextImg(){
    const imageCarousel = document.getElementById('image1')
    const btnGoBackImg = document.getElementById('btnBack')
    const btnNextImg = document.getElementById('btnNext')

    if (imageCarousel.src === `${URL}/${IMAGES[0].file}`) {
        imageCarousel.src = IMAGES[1].path
        btnGoBackImg.className = ""
        btnNextImg.className = "selected--btn"
    }
}

function goBackImg(){
    const imageCarousel = document.getElementById('image1')
    const btnGoBackImg = document.getElementById('btnBack')
    const btnNextImg = document.getElementById('btnNext')

    if (imageCarousel.src === `${URL}/${IMAGES[1].file}`) {
        imageCarousel.src = IMAGES[0].path
        btnGoBackImg.className = "selected--btn"
        btnNextImg.className = ""
    }
}


// button function
function carouselBtn() {
    // // click 
    // const imageCarousel = document.getElementById('image1')
    // if(imageCarousel.src === )
    // // atras
    // IMAGES[n - 1]
    // // siguiente
    // IMAGES[n + 1]
    // IMAGES[1]
    // div id="tal" img src={}
}

