
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
let HoneyCk = 0
let AniverCk = 0
let BirthCk = 0
let CelebCk = 0
let SixInch = 0
let EightInch = 0
let Canap = 0
let SliceFruit = 0
let SpecialAM =0
    const amenitiesEl = document.getElementsByClassName('amenities')
    const MonthEl = document.getElementById('month').innerText
    const WordsForDays = document.getElementById('words')
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
            
            /*
            const DateNomber = e.arrival_date.split(/[/]/)
            const DateInput = DateToMorrow.innerText.split(/[/]/)
            var date1 = parseInt(DateNomber[0])+1
            var date2 = parseInt(DateInput[0])
            //console.log(date1, '=== ', date2)
             let con = 0
            if ( date1 === date2){
                con++
               
                //console.log(parseInt(DateNomber[0]))
                
            }
            if(con > 0){
                    WordsForDays.innerHTML = 'Day after Arrivals:'
                } else {
                WordsForDays.innerHTML = 'Tomorrow arrivals:'
            }
            console.log(con)*/

            //var date = new Date().toLocaleDateString()
            //var currentDate = date.getFullYear() + '-' + date.getrMonth() + '-' + date.getDate()
            
            //console.log(typeof(e.today_date),' ',e.arrival_date)
            //const d = new Date(e.arrival_date)
            const month = {'01':"January",'02':"February",'03':"March",'04':"April",'05':"May",'06':"June",'07':"July",'08':"August",
            '09':"September",'10':"October",'11':"November",'12':"December"};

            const d = new Date();
            let name = month[d.getMonth()]
            
            //console.log(name ,'-', e.arrival_date)
            const MonthEntry = e.arrival_date.split('/')

             

            //console.log(MonthEntry[1], '-', month[MonthEntry[1]])

            
            //console.log(e.today_date,' ',e.arrival_date, ' ',DateToMorrow.innerText)
            if (month[MonthEntry[1]] === MonthEl){
                
                if(e.reserved != 0){
                    //console.log(e.name, '+', e.fruit_amenity, '+', e.arrival_date )
                    //console.log(e.fruit_amenity, '-', e.dessert_amenity, '-', e.dessert_amenity1)

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
                            //console.log(123)
                            counCH = counCH + numCount.key.num
                            counCH = counCH + parseInt(e.reserved)
                        }else if (e.fruit_amenity == 'Birthday cake'){
                            
                            BirthCk = BirthCk + numCount.key.num
                            BirthCk = BirthCk + parseInt(e.reserved)
                        }else if (e.fruit_amenity == '6" cake'){
                            SixInch = SixInch + numCount.key.num
                            SixInch = SixInch + parseInt(e.reserved)
                        }else if (e.fruit_amenity == 'Aniversary cake'){
                            AniverCk = AniverCk + numCount.key.num
                            AniverCk = AniverCk + parseInt(e.reserved)
                        }else if (e.fruit_amenity == 'Honeymoon cake'){
                            HoneyCk =  HoneyCk + numCount.key.num
                            HoneyCk = HoneyCk + parseInt(e.reserved)
                        }else if (e.fruit_amenity == 'Celebration cake'){
                            CelebCk = CelebCk + numCount.key.num
                            CelebCk = CelebCk + parseInt(e.reserved)
                        }else if (e.fruit_amenity == '8" cake'){
                            EightInch = EightInch + numCount.key.num
                            EightInch = EightInch + parseInt(e.reserved)
                        }else if (e.fruit_amenity == 'Canapes'){
                            Canap = Canap + numCount.key.num
                            Canap = Canap + parseInt(e.reserved)
                        }else if ( e.fruit_amenity == 'Sliced fruit platter'){
                            SliceFruit = SliceFruit + numCount.key.num
                            SliceFruit = SliceFruit +parseInt(e.reserved)
                        }else if (e.fruit_amenity == 'Special amenities'){
                            SpecialAM = SpecialAM + numCount.key.num
                            SpecialAM = SpecialAM + parseInt(e.reserved)
                        }
                            
                    }
                    for( var key in numCount){
                        if ( e.dessert_amenity == 'dates' || e.dessert_amenity1 == 'dates'){
                            
                            desDates = desDates + numCount.des.Dnum
                            desDates = desDates + parseInt(e.reserved)
                         }
                    }


                    for (var key in numCount){

                        if (e.dessert_amenity == 'Chocolate truffle'){
                            desC = desC + numCount.des.Dnum
                            desC = desC + parseInt(e.reserved)
                            
                        }else if(e.dessert_amenity == 'baklava' || e.dessert_amenity1 == 'baklava'){                     
                            desB = desB + numCount.des.Dnum
                            desB = desB + parseInt(e.reserved)
                            //console.log(e)
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
/*
                const ulEl = document.getElementById('total')
                //console.log(size)
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
 */
                const TableSell = document.getElementById('Tally')
                
                const SmFruitBowlCost = '4.12'
                const MidFruitBowlCost = '7.22'
                const LrgFruitBowlCost = '19.86'
                const PresidentialFruitBowlCost = '59.58'
                const CustomAM = '18.56'
                const floerntinsC = '3.25'
                const GoldenBxCost = '6.32'
                const BaklavaCost = '3.83'
                const Macaroon4cost = '3.10'
                const Macaroon6cost = '4.65'
                const Macaroon8cost = '6.20'
                const DatesCost = '3.83'
                const NegroniCost = '7.25'
                const WhiteWineCost ='15.05'
                const RedWineCost = '15.05'
                const ChampadneCost = '24.89'
                const HoneymoonCost = '5.65'
                const SixInchCost = '27.00'
                const EightInchCost = '33.75'
                const CanapCost = '5.20'
                const SliceFruitCost = '4.20'
                const SpecialAMCost = '16.38'

                TableSell.innerHTML = `
                                    <tr>
                                        <th>Item Name</th>
                                        <th>Total for the Month</th>
                                        <th>Coast</th>
                                        <th>Total cost</th>
                                        <th>Amenities</th>
                                        <th>Date</th>
                                  </tr>
                                 
                                  <tr >
                                    <td><p class=res>Small Fruit total :</p></td>
                                    <td >${ coun / size }</td>
                                    <td>£ ${SmFruitBowlCost}</td>
                                    <td class='totals'>£ ${((coun / size)*SmFruitBowlCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Midium Fruit total :</p></td>
                                    <td > ${counM / size  }</td>
                                    <td>£ ${MidFruitBowlCost}</td>
                                    <td class='totals'>£ ${((counM / size)*MidFruitBowlCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Large Fruit total :</p></td>
                                    <td > ${counL / size  }</td>
                                    <td>£ ${LrgFruitBowlCost}</td>
                                    <td class='totals'>£ ${((counL / size)*LrgFruitBowlCost).toFixed(2)  } </td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Presidential Fruit total :</p></td>
                                    <td >${counR / size  }</td>
                                    <td>£ ${PresidentialFruitBowlCost}</td>
                                    <td class='totals'>£ ${((counR / size)*PresidentialFruitBowlCost).toFixed(2)  }</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Custom Amenities :</p></td>
                                    <td >${CustomChoice / size  }</td>
                                    <td>£ ${CustomAM}</td>
                                    <td class='totals'>£ ${((CustomChoice / size)*CustomAM).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Florentine :</p></td>
                                    <td >${floren / size  }</td>
                                    <td>£ ${floerntinsC}</td>
                                    <td class='totals'>£ ${((floren / size)*floerntinsC).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Arabic Golden Box :</p></td>
                                    <td >${desGold / size  }</td>
                                    <td>£ ${GoldenBxCost}</td>
                                    <td class='totals'>£ ${((desGold / size)*GoldenBxCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Baklava total : </p></td>
                                    <td >${desB / size  }</td>
                                    <td>£ ${BaklavaCost}</td>
                                    <td class='totals'>£ ${((desB / size)*BaklavaCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Macaroons 4pcs total:</p></td>
                                    <td > ${desM / size  }</td>
                                    <td>£ ${Macaroon4cost}</td>
                                    <td class='totals'>£ ${((desM / size)*Macaroon4cost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Macaroons 6pcs total:</p></td>
                                    <td >${desM6 / size  }</td>
                                    <td>£ ${Macaroon6cost}</td>
                                    <td class='totals'>£ ${((desM6 / size)*Macaroon6cost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Macaroons 8pcs total:</p></td>
                                    <td >${desM8 / size  }</td>
                                    <td>£ ${Macaroon8cost}</td>
                                    <td class='totals'>£ ${((desM8 / size )*Macaroon8cost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td> <p class=res>Chocolate box:</p></td>
                                    <td > ${counCH / size  }</td>
                                    <td>£ 0</td>
                                    <td class='totals'>£ 0</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Dates:</p></td>
                                    <td >${desDates / size  }</td>
                                    <td>£ ${DatesCost}</td>
                                    <td class='totals'>£ ${((desDates / size)*DatesCost)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Negroni total:</p></td>
                                    <td >${drkN / size  }</td>
                                    <td>£ ${NegroniCost}</td>
                                    <td class='totals'>£ ${((drkN/size)*NegroniCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>White Wine total:</p></td>
                                    <td > ${drkWW / size  }</td>
                                    <td>£ ${WhiteWineCost}</td>
                                    <td class='totals'>£ ${((drkWW/size)*WhiteWineCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Champadne total:</p></td>
                                    <td >${drkCh / size  }</td>
                                    <td>£ ${ChampadneCost}</td>
                                    <td class='totals'>£ ${((drkCh/size)*ChampadneCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Red Wine total:</p></td>
                                    <td >${drkRW / size  }</td>
                                    <td>£ ${RedWineCost}</td>
                                    <td class='totals'>£ ${((drkRW/size)*RedWineCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Honeymoon cake total:</p></td>
                                    <td >${HoneyCk / size  }</td>
                                    <td>£ ${HoneymoonCost}</td>
                                    <td class='totals'>£ ${((HoneyCk / size)*HoneymoonCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Birthday cake total:</p></td>
                                    <td >${BirthCk / size  }</td>
                                    <td>£ ${HoneymoonCost}</td>
                                    <td class='totals'>£ ${((BirthCk/size)*HoneymoonCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Aniversary cake total:</p></td>
                                    <td >${AniverCk / size  }</td>
                                    <td>£ ${HoneymoonCost}</td>
                                    <td class='totals'>£ ${((AniverCk/size)*HoneymoonCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Celebrations cake total:</p></td>
                                    <td >${CelebCk / size  }</td>
                                    <td>£ ${HoneymoonCost}</td>
                                    <td class='totals'>£ ${((CelebCk/size)*HoneymoonCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res> 6" cake total:</p></td>
                                    <td >${SixInch / size  }</td>
                                    <td>£ ${SixInchCost}</td>
                                    <td class='totals'>£ ${((SixInch/size)*SixInchCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>8" cake total:</p></td>
                                    <td >${EightInch / size  }</td>
                                    <td>£ ${EightInchCost}</td>
                                    <td class='totals'>£ ${((EightInch/size)*EightInchCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Canapes total:</p></td>
                                    <td > ${Canap / size  }</td>
                                    <td>£ ${CanapCost}</td>
                                    <td class='totals'>£ ${((Canap/size)*CanapCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Sliced fruit total:</p></td>
                                    <td >${SliceFruit / size  }</td>
                                    <td>£ ${SliceFruitCost}</td>
                                    <td class='totals'>£ ${((SliceFruit/size)*SliceFruitCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>
                                  <tr >
                                    <td><p class=res>Spacial Amenities total:</p></td>
                                    <td >${SpecialAM / size  }</td>
                                    <td>£ ${SpecialAMCost}</td>
                                    <td class='totals'>£ ${((SpecialAM/size)*SpecialAMCost).toFixed(2)}</td>
                                    <td class="amenities"></td>
                                    <td></td>
                                  </tr>`


    let TotalAmondRepl = 0
    const TotalPriceEl = document.getElementsByClassName('totals')

    console.log(TotalPriceEl.length)
    for(let i = 0; i < TotalPriceEl.length; i++){
      //console.log( TotalPriceEl[i].innerText  )
      let numValue = TotalPriceEl[i].innerText.replace('£', '')
      TotalAmondRepl = TotalAmondRepl + parseFloat(numValue)
      //console.log((TotalAmondRepl).toFixed(2))
      
    }
    
            const TotalAmondAmenities = document.getElementById('totalAmound')
            TotalAmondAmenities.innerText = `£ ${(TotalAmondRepl).toFixed(2)}`   


    }




    let date = new Date().toLocaleDateString();
    // Date and time function with adding two days 
    let d = new Date()
    d.setDate(d.getDate() + 2)

    //console.log(d.toLocaleDateString())

    const BtnLinkEl = document.getElementsByClassName('BtnLinkElement')
    //console.log(BtnLinkEl)
    for (let i =0; i < BtnLinkEl.length;i++ ){
        //console.log(BtnLinkEl[i].innerHTML)
        if (BtnLinkEl[i].outerText == 'Tomorrow Amenity'){
            BtnLinkEl[i].href = "{% url 'calc:update_daily' %}"
            BtnLinkEl[i].innerText = 'Today Amenity'
        }else if (date === DateToMorrow.innerText){
            BtnLinkEl[i].href = "{% url 'calc:tomorrow_amenities' %}"
            BtnLinkEl[i].innerText = 'Tomorrow Amenity'
        }else if(WordsForDays.innerText == 'Day after arrivals:'){
                BtnLinkEl[i].href = "{% url 'calc:tomorrow_amenities' %}"
                BtnLinkEl[i].innerText = 'Tomorrow Amenity'
          
           
        }

    }
