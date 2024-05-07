const input = document.getElementById("user-input")
const checkBtn = document.getElementById("check-btn")
const clearBtn = document.getElementById("clear-btn")
const results = document.getElementById("results-div")

const check= (input)=>{
    const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/g
    if(!input){
        window.alert("Please provide a phone number")
    }else{
    results.innerText= regex.test(input.split())? `Valid US number: ${input}` : `Invalid US number: ${input}`;
}
}
const clean=()=>{
    input.value=""
    results.innerText=""
}

checkBtn.addEventListener("click",()=>check(input.value))
clearBtn.addEventListener("click",clean)
