

const JSON_data = ('/code_API')
    //console.log(JSON_data)
    GetData(JSON_data)
    
    async function GetData(url) {
        const res = await fetch(url)
        const data = await res.json()
        //console.log(data)
    }


   
    const formData = document.getElementById('form')
    const NewForm = new FormData(formData)
    const labelEls = document.getElementsByTagName("label")
    const inputEls = document.getElementsByTagName("input")
    const choiceEls = document.getElementsByTagName("select")
    const pEls = document.getElementsByTagName('p')
   
    const FormEl = document.getElementsByTagName('form')

  

    
    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const m = new Date()
    let currant_m = month[m.getMonth()]
    //console.log(currant_m)


//console.log(pEls)
    const output = document.getElementById('output');



   for (let l = 0; l < labelEls.length; l++){
     console.log(labelEls[l].innerHTML)
     if(labelEls[l].innerHTML == "File:" || labelEls[l].innerHTML == "Num of drink:" || labelEls[l].innerHTML == "Num of dessert:" ){
        labelEls[l].style.display = "none"
     }
   }

   for(let i = 0; i < inputEls.length; i++){
        
        for(let c = 0; c < choiceEls.length; c++){
            //console.log(choiceEls[c].name)
            if(inputEls[i].name == "num_of_fruit" || inputEls[i].name == "num_of_drink" || inputEls[i].name == "num_of_dessert"){
            inputEls[i].style.width = "35px"
            inputEls[i].style.marginRight = "20%"
            inputEls[i].max = 10
            inputEls[i].min = 0
            choiceEls[c].style.marginLeft = "16%"

            //const divEl = document.createElement('div')



            //formData.appendChild(divEl)
        
        }

        }

   }
   let div = []
   for (let p = 0; p < pEls.length; p++){
    //console.log(pEls[p].childNodes)
    pEls[p].childNodes.forEach(e => {
        //console.log(e.name)
        
        if(e.name == "num_of_fruit" || e.name == "fruit_amenity"){
            div.push(e)
            //console.log(123)
        }
        
    })
    
   }
//console.log(div)





