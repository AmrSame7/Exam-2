/// <reference types="../@types/jquery" />
// <!--  ------------------SIDE BAR SECTION ----------- -->
$('#icon').on('click',function(){
    $('#sideNav').animate({width:'toggle'} ,1000, function(){ 
        $('#icon').hide(function(){
            $('#iconx').removeClass('d-none')
          
               
        })
        
    })  
})

$('#iconx').on('click',function(){
    $('#sideNav').animate({width:'toggle'} ,1000, function(){ 
        $('#icon').show()
        $('#iconx').addClass('d-none')
       
        
    })  
})



    

        




// <!--  ------------------Home SECTION ----------- -->
let dataH=[]

async function getDataHome(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
    let finalresponse = await response.json()
    
    dataH =finalresponse.meals
    console.log(dataH);

    displayDataHome ()


}

function displayDataHome (){
    $('#searchArea').html('' ) 
    $('#dataG').html('' )
    $('#dataA').html('' )
    $('#dataI').html('' )
    $('#homeData').html('' )

    let cols=``
    for( let i = 0 ; i < dataH.length ; i++){
        cols+=`<div class="col-md-3  card bg-black">
        <div>
        <div class="imgCatg">
            <img class='w-100 ' src=${dataH[i].strMealThumb}>
        </div>
        <div class="desc ">
            <h3>${dataH[i].strMeal}</h3>
            
        </div>
    </div>
    </div>`

    }

    $('#dataH').html(cols)
}



getDataHome()


// <!--  ------------------Search SECTION ----------- -->
$('#search').on('click' ,function (){
    $('#dataH').html('' )
    $('#dataG').html('' )
    $('#dataA').html('' )
    $('#dataI').html('' )
    $('#homeData').html('' )
    $('#searchArea').html(`<div  class=" search bg-black min-vh-100">
    <div class="container d-flex  ">
        <input class="form-control m-4 bg-black text-white" type="text" placeholder="Search by name">
        <input class="form-control m-4 bg-black text-white" type="text" placeholder="Search by First letter">
    </div>
</div>`)


}
    
)





// <!--  ------------------Gategories SECTION ----------- -->

let data = []

 async function getDataGategories(){
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let finalresponse = await response.json()
    
    console.log(finalresponse.categories );
    data =finalresponse.categories

    displayDataC ()


}

function displayDataC (){
    $('#searchArea').html('' ) 
    $('#dataH').html('' )
    $('#dataA').html('' )
    $('#dataI').html('' )
    $('#homeData').html('' )

    let cols=``
    for( let i = 0 ; i < data.length ; i++){
        cols+=`<div class="col-md-3  card bg-black">
        <div>
        <div class="imgCatg">
            <img class='w-100 ' src=${data[i].strCategoryThumb}>
        </div>
        <div class="desc w-100">
            <h3>${data[i].strCategory}</h3>
            <p>${data[i].strCategoryDescription}</p>
        </div>
    </div>
    </div>`

    }

    $('#dataG').html(cols)
}

$('#categories').on('click',function(){
    getDataGategories()
})

// <!--  ------------------Area SECTION ----------- -->

let dataA=[]

async function getDataArea(){

    $('#dataH').html('' )
    $('#dataG').html('' )
    $('#dataA').html('' )
    $('#dataI').html('' )
    $('#homeData').html('' )
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
    let finalresponse = await response.json()
    
    
    dataA =finalresponse.meals

    displayDataArea ()

    
    

}


function displayDataArea (){

    let cols=``
    for( let i = 0 ; i < dataA.length ; i++){
        cols+=` <div class="col-md-3 p-4 card bg-black">
                    
        <div class="iconArea text-white">
            <i class="fa-solid fa-house-laptop fa-4x"></i>
        </div>
        <div class="descA text-white">
            <h3>${dataA[i].strArea}</h3>
           
        </div>
   

   </div>
    `

    }

    $('#dataA').html(cols)
}



$('#area').on('click',function(){
    getDataArea()
})

// <!--  ------------------Ingredients SECTION ----------- -->

let dataI=[]

async function getDataIngredients(){
    $('#searchArea').html('' ) 
    $('#dataG').html('' )
    $('#dataA').html('' )
    $('#homeData').html('' )
    $('#dataH').html('' )
    let response = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
    let finalresponse = await response.json()
    
    dataI =finalresponse.meals
    console.log(dataI);

    displayDataIngredients ()
   
}



function displayDataIngredients (){
   
    let cols=``
    for( let i = 0 ; i < 20 ; i++){
        cols+=` <div class="col-md-3 p-4 card ingr bg-black">
                    
        <div class="iconArea text-white">
            <i class="fa-solid fa-drumstick-bite fa-4x"></i>
        </div>
        <div class="descA text-white">
            <h3>${dataI[i].strIngredient}</h3>
            <p>${dataI[i].strDescription}</p>
           
        </div>
   

   </div>
    `

    }

    $('#dataI').html(cols)
}

$('#ingredients').on('click',function(){
    
            getDataIngredients()
       
        
    }) 
   




// <!--  ------------------Contact us SECTION ----------- -->


$('#contact').on('click',function(){
    $('#searchArea').html('' ) 
    $('#dataG').html('' )
    $('#dataA').html('' )
    $('#dataI').html('' )
    $('#dataH').html('' )
    
     

    cols=`<div id="contactus" class="min-vh-100 bg-black text-center  d-flex flex-nowrap justify-content-center align-items-center ">

    <div class="inputs w-75">
        <div class="d-flex m-2"> <input id="nameValidation" class="form-control mx-2" type="text " placeholder="Enter your name">
            
            <input id="emailValidation" class="form-control mx-2" type="email " placeholder="Enter your Email">
        </div>
        <div class="d-flex m-2 px-2"> <div id="error1" class=" w-50 mx-2 bg-danger p-2 form-control d-none">Special characters and numbers not allowed</div>
        <div class="error2 bg-danger mx-2 w-50 form-control d-none">Email not valid *exemple@yyy.zzz</div>
        </div>
        <div class="d-flex m-2"> <input id="phoneValidation" class="form-control mx-2" type="number " placeholder="Enter your Phone">
            <input id="ageValidation" class="form-control mx-2" type="number " placeholder="Enter your Age">
        </div>
        <div class="d-flex m-2 px-2"> <div class="error3 w-50 mx-2 bg-danger p-2 form-control d-none">Enter valid Phone Number</div>
        <div class="error4 bg-danger mx-2 w-50 form-control d-none">Enter valid age</div>
        </div>
        <div class="d-flex m-2"> <input id="passValidation" class="form-control mx-2" type="password " placeholder="Enter your Password">
            <input id="repassValidation" class="form-control mx-2" type="password " placeholder="Password">
        </div>

        <div class="d-flex m-2 px-2"> <div class="error5 w-50 mx-2 bg-danger p-2 form-control d-none">Enter valid password *Minimum eight characters, at least one letter and one number:*</div>
        <div class="error6 bg-danger mx-2 w-50 form-control d-none">Enter valid repassword</div>
        </div>

        <button id="submit" class="btn btn-outline-danger mt-3 disabled">Submit</button>
       
        

    </div>

</div>`
    $('#homeData').html(cols)

})

    

   

// <!--  ------------------Validation SECTION ----------- -->

 let regexName=/^[A-Z][a-z]{3,8}$/;
 let regexEmail=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 let regexPhone=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
 let regexAge=/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/;
 let regexPassword=/^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/;


 if (nameValidation() && emailValidation() && phoneValidation() &&ageValidation() &&passwordValidation() && repasswordValidation()== true) {
 $('#submit').removeClass("disabled")
} else {
    $('#submit').addClass("disabled")
}


 function nameValidation(){

if(regexName.test($('#nameValidation').val())!=true){
    $('#error1').removeClass('d-none')
} 
else{
    $('#error1').addClass('d-none')
}


 }

 $('#nameValidation').on('input',function(){nameValidation()})

 function emailValidation(){

    return regexEmail.test($('#nameValidation').val())
     }



     function phoneValidation(){

  return regexPhone.test($('#nameValidation').val())
         }


         function ageValidation(){

            return regexAge.test($('#nameValidation').val())
             }



             function passwordValidation(){

                return regexPassword.test($('#nameValidation').val())
                 }