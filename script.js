var fulldetails =document.getElementById("inf");
var submitbtn =document.getElementById("bt");
var than=document.getElementById("than")
var man=document.getElementById("man")
var clearbtn=document.getElementById("clea")
var i1=document.getElementById("i1")
var i2=document.getElementById("i2")
var i3=document.getElementById("i3")
var i4=document.getElementById("i4")
var i5=document.getElementById("i5")
var i6=document.getElementById("i6")
var i7=document.getElementById("i7")
var i8=document.getElementById("i8")

submitbtn.addEventListener("click", () =>{
    fulldetails.style.display="block"
    than.style.display="block"
    man.style.height="882px"
})
clearbtn.addEventListener("click", () =>{
    fulldetails.style.display="none"
    than.style.display="none"
    man.style.height="300px"
    man.style.transition=".3s"
    i1.value=""
})

const namee=["MOHANRAJ"]
const dob=["28/07/2006"]
const father=["MURUGAN"]
const mother=["VALLIYAMMAL"]
const unr=["C23UG188CSC008"]
const rollnumber=["23UCS09"]
const address=["KAVALUR"]
const contact=["8667552467"]

submitbtn.addEventListener("click",() =>{
    if(i1.value==namee[0]){
        i2.value=dob[0]
        i3.value=father[0]
        i4.value=mother[0]
        i5.value=unr[0]
        i6.value=rollnumber[0]
       i7.value=address[0] 
       i8.value=contact[0] 
    }

})


