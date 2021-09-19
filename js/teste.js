const newFire = new FireDoom()
newFire.start()
const buttonMode = document.querySelector('#AlterMode')
const buttonUp = document.querySelector('#UpVelocity')
const buttonDown = document.querySelector('#DownVelocity')
buttonDown.addEventListener('click',downVelocity)
buttonUp.addEventListener('click',upVelocity)
buttonMode.addEventListener('click',mudaModo)
function mudaModo(){
    console.log(newFire.debug)
    if(!newFire.debug){
        newFire.width = 10
        newFire.height = 10
    }else{
        newFire.width = 80;
        newFire.height = 80;
    }
    newFire.debug = !newFire.debug
    newFire.start()
}
function upVelocity(){
    newFire.velocidade -= 100
    if(newFire.velocidade <= 0){
        buttonUp.disabled = true
    }
    if(newFire.velocidade < 500){
        buttonDown.disabled = false
    }
    newFire.start()
}
function downVelocity(){
    newFire.velocidade +=100
    if(newFire.velocidade >=500){
        buttonDown.disabled = true
    }
    if(newFire.velocidade >0){
        buttonUp.disabled = false
    }
    newFire.start()
}