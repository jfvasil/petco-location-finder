document.querySelector('#submitButton').addEventListener('click', getDirections)
let pog = document.querySelector('#enter').value
let broad = document.querySelector('#broad')
let specific = document.querySelector('#specfic')
async function getDirections(){
    try{
    let res = await fetch('/location')
    let data = await res.json()
    broad.innerHTML = data.pog.broadLocation
    specific.innerHTML = data.pog.specificLocation
    }
    
    catch(err){
        console.log(err)
    }
}