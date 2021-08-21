let belowTotal=document.getElementById("below-total");

// updating total price section
function updatingCostTotal(existPriceId,newPrice){
    // updating chipcost
     let chipExistingPrice=document.getElementById(existPriceId);
     chipExistingPrice.innerText=newPrice
   
    //  updating total price and below total
     let bestPrice=gettingElementToNum("best-price");
     let memoryCost=gettingElementToNum("memory-cost");
     let storageCost=gettingElementToNum("storage-cost");
     let deliveryCharge=gettingElementToNum("delivery-charge");
     let total= bestPrice+memoryCost+storageCost+deliveryCharge;
     document.getElementById("total-price").innerText=total;  
     belowTotal.innerText=total;
}
// getting element to numbeer
function gettingElementToNum(elementId){
    var element=document.getElementById(elementId).innerText;
    elementNum=parseFloat(element);
    return elementNum;
}


// memory cost interaction
document.getElementById("memory-8gb").addEventListener("click",function(){                  
    updatingCostTotal("memory-cost",0)
}) 
document.getElementById("memory-16gb").addEventListener("click",function(){             
    updatingCostTotal("memory-cost",180)
}) 


// storage cost interaction
document.getElementById("ssd-256gb").addEventListener("click",function(){                 
    updatingCostTotal("storage-cost",0)
}) 
document.getElementById("ssd-512gb").addEventListener("click",function(){                 
    updatingCostTotal("storage-cost",100)
}) 
document.getElementById("ssd-1tb").addEventListener("click",function(){                 
    updatingCostTotal("storage-cost",180)
}) 


// delivery charge interaction
document.getElementById("charge-free").addEventListener("click",function(){                 
    updatingCostTotal("delivery-charge",0)
}) 
document.getElementById("charge-20").addEventListener("click",function(){                 
    updatingCostTotal("delivery-charge",20)
}) 


// updating below total Section
document.getElementById("coupon-btn").addEventListener("click",function(){
    let couponInput=document.getElementById("coupon-input");
    let totalPrice=gettingElementToNum("total-price")
           if(couponInput.value=="stevekaku"){
               let couponDiscount=(totalPrice/100)*20;
               belowTotal.innerText=totalPrice-couponDiscount;
               couponInput.value="";
           }
   })
