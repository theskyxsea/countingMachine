let countIs= document.getElementById("countIs")
let saving= document.getElementById("savePoint1")
let message= document.getElementById("messageAlert")
let count =0
function increment(){
    if(count < 7){
        if (count==0) {
            resetMsg()    
        }
        
        count+=1
        countIs.innerText = count
    }
    else{
        message.innerText="Count at Maximun"
    }
}
function reduce(){
    if (count>0) {
        if (count==7) {
            resetMsg()    
        }
        count-=1
        countIs.innerText=count
            
    } else {
        message.innerText="Count at Minimun"
    }

}
function reset(){
    count=0
    countIs.innerText=count
    saving.innerText=""
    resetMsg()
}
function save(){
    let counta=count + " - "
    saving.textContent +=counta
    count = 0
    countIs.textContent = 0
}
function resetMsg(){
    message.innerText=""
}
