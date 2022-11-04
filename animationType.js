export {animationType}

class animationType{
    constructor(animationObject) {
        this.animationObject = animationObject;
        this.gameCanvas = null
        this.gameContext = null;
        this.iFrame = [];
    }

    getCanvas(Canvas){
        return this.gameCanvas = Canvas;
    }

    getContext(Context){
        return this.gameContext = Context;
    }

    getIndex(first, last){
        return this.iFrame.push({first, last});
    }

    draw(){
        this.gameContext.drawImage(this.animationObject.animObject.spTab[this.iFrame[0]++%this.iFrame[this.iFrame.length-1]], this.animationObject.animObject.position[0], this.animationObject.animObject.position[1], this.animationObject.animObject.widthObject, this.animationObject.animObject.heightObject)
    }
}