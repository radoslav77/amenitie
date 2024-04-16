

  const TotalEl = document.getElementById('total')
  const ReservedEl = document.getElementsByClassName('reserved')
  const linesEl = document.getElementsByClassName('lines')
  const MyTableEl = document.getElementById('table').rows  

for(let i = 0; i < ReservedEl.length; i++){
    

    if(parseInt(ReservedEl[i].innerText) === 0)
    //console.log(ReservedEl[i])
    pass
    //ReservedEl[i].hidden = true 
}


for (let i = 0; i < MyTableEl.length; i++){
    //console.log(MyTableEl[i])

}



//  console.log(MyTableEl.innerText)

let counarr = []
let coun = 0
let counM = 0
let counL = 0
let counR = 0
let counCH = 0
let CustomChoice = 0
let desC = 0  
let desB = 0
let desM = 0
let desM6 = 0
let desM8 = 0
let floren = 0
let desMaamul = 0
let desDates = 0
let desGold = 0 
let desCustom = 0
let drkWater = 0 
let drkN = 0 
let drkWW = 0
let drkCh = 0
let drkRW = 0
    const amenitiesEl = document.getElementsByClassName('amenities')
    
   // need to import jason and compare arrival name with amenities 
   // and input it back to page as combined + total  
   var FruitAmenitie = ['Large fruit','Midium fruit','Small fruit','Presidential'] 

    let arr = []
    for (let item of amenitiesEl) {
    //console.log(item.innerText)
    let nArr = item.innerText.split(',')
        arr.push(nArr)
    }
    
    let ArrEl = []
    for (let line of amenitiesEl ){
        let Ael = line
        ArrEl.push(Ael)
    }
    
    const JSON_data = ('/code_API')
    //console.log(JSON_data)
    GetData(JSON_data)
    
    async function GetData(url) {
        const res = await fetch(url)
        const data = await res.json()
 
       // data.forEach(e =>{
        //    console.log(e.amenity_code)
       /// })
        //console.log(data)
//working
    arr.forEach(el => {
        //console.log(el)
        
        data.forEach(en =>{
            //console.log(en)
            if (el.includes(en.amenity_code)){
                
              // console.log(ArrEl.length)
               for (let i = 0; i < ArrEl.length; i++ ){
                ArrEl[i].innerText = en 
                i = ArrEl.length
                console.log(ArrEl[i])
                               
               }
                
                //console.log(123)
            }
        })

        //console.log(el)
    })


function size_dict(d){c=0; for (i in d) ++c; return c}  

let numCount = {key: {type:'none',
                       num: 0},
                des: {Dtype: 'none',
                      Dnum: 0},
                des2: {Dtype2: 'none',
                        Dnum2: 0},
                drk: {drktype: 'none',
                    drknum: 0}
                }

let size = size_dict(numCount)


//console.log (numCount)
        data.forEach(e => {
            
            //var date = new Date().toLocaleDateString()
            //var currentDate = date.getFullYear() + '-' + date.getrMonth() + '-' + date.getDate()
            
            //console.log(typeof(e.today_date),' ',e.arrival_date)
            
            //console.log(e.today_date,' ',e.arrival_date)
            if (e.arrival_date === e.today_date){
               //console.log(123)
                if(e.reserved != 0){
                    //console.log(e.reserved)
                 //console.log(e.name, '+', e.fruit_amenity, '+', e.arrival_date )
                 //console.log(e.fruit_amenity, '-', e.dessert_amenity)

                    numCount.key.type = e.fruit_amenity
                    numCount.key.num= 0
                    numCount.des.Dtype = e.dessert_amenity
                    numCount.des.Dnum = 0
                    numCount.drk.drktype = e.drink_amenity
                    numCount.drk.drknum = e.num_drink
                    //numCount.num = e.num_fruit
                    
                    //console.log(size)
                    for(var key in numCount){
                        //console.log(key+ ':' + numCount[key])
                        if ( e.fruit_amenity == 'Small fruit bowl'){
                            
                            //var Ccoun = 0
                            coun =  (coun + numCount.key.num)
                            coun = coun + parseInt(e.reserved) 

                        } else if (e.fruit_amenity == 'Medium fruit bowl'){
                            counM = counM + numCount.key.num
                            counM = counM + parseInt(e.reserved)

                        }else if (e.fruit_amenity == 'Large fruit bowl'){
                            counL = counL + numCount.key.num
                            counL = counL + parseInt(e.reserved)

                        }else if (e.fruit_amenity == 'Presidential fruit bowl'){
                            counR = counR + numCount.key.num
                            counR = counR + parseInt(e.reserved)
                        
                        }else if(e.fruit_amenity == 'Chocolate box'){
                           // console.log(123)
                            counCH = counCH + numCount.key.num
                            counCH = counCH + parseInt(e.reserved)
                        }
                            
                    }
                    for( var key in numCount){
                        if ( e.dessert_amenity == 'dates' || e.dessert_amenity1 == 'dates'){
                            
                            desDates = desDates + numCount.des.Dnum
                            desDates = desDates + parseInt(e.reserved)
                         }
                    }
                
                    for (var key in numCount){
                        //console.log(key, '--', numCount[key])
                        if (e.dessert_amenity == 'Chocolate truffle'){
                            desC = desC + numCount.des.Dnum
                            desC = desC + parseInt(e.reserved)
                            
                        }else if(e.dessert_amenity == 'baklava' || e.dessert_amenity1 == 'baklava'){                     
                            desB = desB + numCount.des.Dnum
                            desB = desB + parseInt(e.reserved)
                            
                        }else if(e.dessert_amenity == '4 macaroons'){
                            desM = desM + numCount.des.Dnum
                            desM = desM + parseInt(e.reserved)
                        
                        }else if(e.dessert_amenity == '6 macaroons' || e.dessert_amenity == 'macaroons' || e.dessert_amenity1 == 'macaroons'){
                            desM6 = desM6 + numCount.des.Dnum
                            desM6 = desM6 + parseInt(e.reserved)
                        }else if(e.dessert_amenity == '8 macaroons'){
                            desM8 = desM8 + numCount.des.Dnum
                            desM8 = desM8 + parseInt(e.reserved)
                                                
                        }else if (e.dessert_amenity == 'florentine'){
                            floren = floren + numCount.des.Dnum
                            floren = floren + parseInt(e.reserved)
                        
                        }else if (e.dessert_amenity == 'Maamul'){
                            desMaamul = desMaamul + numCount.des.Dnum
                            desMaamul = desMaamul + parseInt(e.reserved)
                        
                        }else if (e.dessert_amenity == 'Arabic Inspired Amenity'){
                            desGold = desGold + numCount.des.Dnum
                            desGold = desGold + parseInt(e.reserved)
                        }else if (e.dessert_amenity == 'Custom Amenities' || e.dessert_amenity1 == 'Custom Amenities'){
                            desCustom = desCustom + numCount.des.Dnum
                            desCustom = desCustom + parseInt(e.reserved)
                        }
                        //console.log(e.dessert_amenity, '-', numCount.des)
                    }
                    
                    for (var key in numCount){
                        
                        if (e.drink_amenity == 'Water'){
                            
                            drkWater = drkWater + numCount.drk.drknum
                            console.log(drkWater)
                        }else if(e.drink_amenity == 'Negroni'){
                            drkN = drkN + numCount.drk.drknum
                        }else if (e.drink_amenity == 'White wine'){
                            drkWW = drkWW + numCount.drk.drknum
                        }else if (e.drink_amenity == 'Champagne'){
                            drkCh = drkCh + numCount.drk.drknum
                        }else if (e.drink_amenity == 'Red wine'){
                            
                            drkRW = drkRW + numCount.drk.drknum
                            
                        }
                    }


                }
                //console.log(numCount)
            }
            
        });

            let newS = coun / coun.length 

                const ulEl = document.getElementById('total')
                //console.log(coun/size)
                var liEl = document.createElement('li')
                liEl.innerHTML = `<div id="total_taly">
                                        <div id="taly">
                                        <p class=res>Small Fruit total : ${ coun / size }</p>
                                        <p class=res>Midium Fruit total : ${counM / size  }</p>
                                        <p class=res>Large Fruit total : ${counL / size  }</p>
                                        <p class=res>Presidential Fruit total : ${counR / size  }</p>
                                        <p class=res>Custom Amenities : ${CustomChoice / size  }</p>
                                        <p class=res>Florentine : ${floren / size  }</p>
                                        <p class=res>Arabic Golden Box : ${desGold / size  }</p>
                                        <p class=res>Baklava total : ${desB / size  }</p>
                                        <p class=res>Macaroons 4pcs total: ${desM / size  }</p>
                                        <p class=res>Macaroons 6pcs total: ${desM6 / size  }</p>
                                        <p class=res>Macaroons 8pcs total: ${desM8 / size  }</p>
                                        <p class=res>Chocolate box: ${counCH / size  }</p>
                                        <p class=res>Dates: ${desDates / size  }</p>
                                        <p class=res>Negroni total: ${drkN / size  }</p>
                                        <p class=res>White Wine total: ${drkWW / size  }</p>
                                        <p class=res>Champadne total: ${drkCh / size  }</p>
                                        <p class=res>Red Wine total: ${drkRW / size  }</p>
                                        </div>
                                    </div>`
                
                                  
                ulEl.appendChild(liEl)



    }


        //console.log(coun, '-', counM,' ', counL)
    const LiElments = document.getElementById('taly')
    const pResClass = document.getElementsByClassName('res')
    let NewArr1 = new Array( pResClass)
    
    //console.log(NewArr1)
    NewArr1.forEach(e => {
        //console.log(e)
    })

    for(let i = 0; i < pResClass.length; i++){
        console.log(123)
        if( pElement[i].innerText == 'Midium Fruit total : 0'){
            LiElments[i].style.display = 'none'
        }else if (pElement[i].outerText == 'Midium Fruit total : 0'){
            LiElments[i].style.display = 'none'
        }
    }


