const newFire = new FireDoom()
newFire.start()
const buttonMode = document.querySelector('#AlterMode')
const buttonUp = document.querySelector('#UpVelocity')
const buttonDown = document.querySelector('#DownVelocity')
buttonDown.addEventListener('click',downVelocity)
buttonUp.addEventListener('click',upVelocity)
buttonMode.addEventListener('click',mudaModo)
function mudaModo(){
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