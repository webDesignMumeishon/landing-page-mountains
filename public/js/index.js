
function btnStyling1(){
    let width = window.innerWidth;

    // console.log("testing width", width);

    const btn1 = document.getElementById("toggle1")
    const btn2 = document.getElementById("toggle2")
    const image = document.getElementById("section_three")
    const table1 = document.getElementById("table1")
    const table2 = document.getElementById("table2")

    const tableContainer1 = document.getElementById("table_container1")
    const tableContainer2 = document.getElementById("table_container2")

    
    if(btn1.className != "selected" && width > 451){
        btn1.className = "selected"
        btn2.className = ""
        image.className = "background--image2"
        table1.hidden = false
        table2.hidden = true
    }
    else if(btn1.className != "selected"){
        btn1.className = "selected"
        btn2.className = ""
        tableContainer1.className = "show--accordion--function1"
        tableContainer2.className = "hide--accordion"
    }
    else if(tableContainer1.className == "show--accordion--function1" && btn1.className == "selected"){
        tableContainer1.className = "hide--accordion"
    }
    else if(tableContainer1.className == "hide--accordion" && btn1.className == "selected"  && width < 451){
        tableContainer1.className = "show--accordion--function1"
    }
    else{
        return null
    }
}

function btnStyling2(){

    let width = window.innerWidth;


    const btn1 = document.getElementById("toggle1")
    const btn2 = document.getElementById("toggle2")
    const image = document.getElementById("section_three")
    const table1 = document.getElementById("table1")
    const table2 = document.getElementById("table2") 


    const tableContainer1 = document.getElementById("table_container1")
    const tableContainer2 = document.getElementById("table_container2")


    if(btn2.className != "selected" && width > 451){
        btn2.className = "selected"
        btn1.className = ""
        image.className = "background--image1"
        table1.hidden = true
        table2.hidden = false
    }
    else if(btn2.className != "selected"){
        btn2.className = "selected"
        btn1.className = ""
        tableContainer2.className = "show--accordion--function2"
        tableContainer1.className = "hide--accordion"
    }
    else if(tableContainer2.className == "show--accordion--function2" && btn2.className == "selected"){
        tableContainer2.className = "hide--accordion"
    }
    else if(tableContainer2.className == "hide--accordion" && btn2.className == "selected" && width < 451){
        tableContainer2.className = "show--accordion--function2"
    }
    else{
        return null
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
window.onload = function(){
	console.log("window.onload");
    resize()
	window.addEventListener('resize', resize)

};

function resize(e){
    // tables containers
    const tableContainer1 = document.getElementById("table_container1")
    const tableContainer2 = document.getElementById("table_container2")

    // tables
    const table1 = document.getElementById("table1")
    const table2 = document.getElementById("table2") 

    // section
    const section_three = document.getElementById("section_three")

    let heigth = window.innerHeight;
    let width = window.innerWidth;

    if( width < 450){
        table1.hidden = false
        table2.hidden = false

        tableContainer1.className = "hide--accordion"
        tableContainer2.className = "hide--accordion"
        
        tableContainer1.appendChild(table1)
        tableContainer2.appendChild(table2)
        section_three.className = ""

    }
    else{
        section_three.appendChild(table1)
        section_three.appendChild(table2)

        section_three.className = "background--image1"

        tableContainer1.className = "hide--accordion"
        tableContainer2.className = "hide--accordion"
    }

}
