export {animationObject}

class animationObject {
    constructor(defaultOptions) {
        const defaultObject = {
            spTab: [],
            widthObject: 0,
            heightObject: 0,
            position: [],
        }

        this.animObject = Object.assign({}, defaultObject, defaultOptions);
        this.typeAnimation = null;
        this.image = new Image();
    }

    getSprites(imageURL) {
        this.image.src = imageURL;
        return this.animObject.spTab.push(this.image);
    }

    getContext(Context){
        return this.animObject.oContext = Context;
    }

    getWidth(W){
        return this.animObject.widthObject = W;
    }

    getHeight(H){
        return this.animObject.heightObject = H;
    }

    getPosition(X, Y){
        return this.animObject.position.push(X, Y);
    }

    getType(animationType){
        return this.typeAnimation = animationType;
    }
}