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