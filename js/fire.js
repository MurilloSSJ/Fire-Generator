class FireDoom{
    constructor(){
        this.width = 50;
        this.height = 50;
        this.palletColors = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}]
        this.arrayPixels = []
        for(let i=0;i<this.height;i++){
            this.arrayPixels[i] = []
            for(let j=0;j<this.width;j++){
                this.arrayPixels[i][j] = ''
            }
        }
        this.debug = false;
        this.velocidade = 100
        this.looping = null;
    }
    start(){
        if(this.looping != null){
            clearInterval(this.looping)
        }
        this.createFireDataStructure()
        this.defineBaseFire()
        var objeto = this
        this.looping = setInterval(function(){objeto.firePropagation(objeto)},this.velocidade)
    }
    createFireDataStructure(){
        for(let line=0;line<this.height;line++){
            for(let column=0;column<this.width;column++){
                this.arrayPixels[line][column] = 0
            }
        }
    }
    renderFire(){
        const table = document.createElement('table')
        const canvasDOOM = document.querySelector('#fireCanvas')
        canvasDOOM.innerText = ''
        for (let row = 0; row < this.height; row++) {
            const tableRow = document.createElement('tr')
            for(let column=0;column<this.width;column++){
                const fireIntensity = this.arrayPixels[row][column]
                const color = this.palletColors[fireIntensity]
                const colorString = color.r + ',' + color.g + ',' + color.b
                const tableColumn = document.createElement('td')
                if(this.debug == true){
                    const divIndex = document.createElement('div')
                    divIndex.innerHTML = column+ this.width * row
                    const divIntensity = document.createElement('div')
                    divIntensity.innerHTML = fireIntensity
                    tableColumn.appendChild(divIndex)
                    divIntensity.style.color = `rgb(${colorString})`;
                    divIndex.classList.add('pixel-index')
                    tableColumn.appendChild(divIntensity)
                }else{
                    tableColumn.classList.add('pixel')
                    tableColumn.style.backgroundColor = `rgb(${colorString})`;
                }
                tableRow.appendChild(tableColumn)
            }
            table.appendChild(tableRow)
        }
        canvasDOOM.appendChild(table)
    }
    defineBaseFire(){
        for(let column=0;column < this.width;column++){
            this.arrayPixels[this.height -1][column] = 36
        }
    }

    firePropagation(){
        for(let column = 0; column < this.width; column++){ 
            for(let row = this.height -2; row>=0;row--){
                this.updateFirePropagation(row,column)
            }
        }
        this.renderFire()
    }
    updateFirePropagation(row,column){
        const decay = Math.floor(Math.random()  * 14)
        const belowPixelIntensity = this.arrayPixels[row+1][column]
        const newIntensity = belowPixelIntensity - decay >=0 ? belowPixelIntensity - decay : 0 
        this.arrayPixels[row][column] = newIntensity
    }
}