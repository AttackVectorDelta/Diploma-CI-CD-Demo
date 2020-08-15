class Vector4f {
    
    constructor (x, y, z, h){
        this.x = x;
        this.y = y;
        this.z = z;
        this.h = h;
    }


    static negate(input){
        if(input instanceof Vector4f != true){
            throw new Error("Parameter is not a vector!");
        }

        return new Vector4f(-input.x, -input.y, -input.z, input.h);
    }

    static add(input1, input2) {
        if(input1 instanceof Vector4f != true || input2 instanceof Vector4f != true){
            throw new Error("Parameters are not vectors!")
        }

        return new Vector4f(
            (input1.x+input2.x), 
            (input1.y+input2.y), 
            (input1.z+input2.z),
            input1.h
        );
    }

    static scalarProduct(input1, input2){
        if(typeof input1 != "number" || input2 instanceof Vector4f != true){
            throw new Error("Check parameter types!")
        }
        return new Vector4f(input2.x*input1, input2.y*input1, input2.z*input1, input2.h);
    }

    static dotProduct(input1, input2) {
        if(input1 instanceof Vector4f != true || input2 instanceof Vector4f != true){
            throw new Error("Parameters are not vectors!")
        }

        return input1.x*input2.x+input1.y*input2.y+input1.z*input2.z;
    }

    static crossProduct(input1, input2){
        if(input1 instanceof Vector4f != true || input2 instanceof Vector4f != true){
            throw new Error("Parameters are not vectors!")
        }

        return new Vector4f(
            input1.y*input2.z-input1.z*input2.y,
            input1.z*input2.x-input1.x*input2.z,
            input1.x*input2.y-input1.y*input2.x,
            input1.h
        );
    }

    static length(input){
        if(input instanceof Vector4f != true){
            throw new Error("Parameters are not vectors!")
        }

        return Math.sqrt(input.x*input.x+input.y*input.y+input.z*input.z);
    }

    static normalize(input){
        if(input instanceof Vector4f != true){
            throw new Error("Parameters are not vectors!")
        }

        var vectorLength = this.length(input);

        if(vectorLength==0){
            throw new Error("Vector length is equal to 0. Cannot divide!");
        }

        return new Vector4f(
            input.x/vectorLength,
            input.y/vectorLength,
            input.z/vectorLength,
            input.h
        );
    }

    static project(input1, input2){
        if(input1 instanceof Vector4f != true || input2 instanceof Vector4f != true){
            throw new Error("Parameters are not vectors!")
        }

        var input1Length = this.length(input1);

        var dotProdukt = this.dotProduct(input1,input2);

        if(input1Length == 0){
            throw new Error("Vector 1 is 0 units long. Cannot divide!")
        }

        var scalar = dotProdukt/(input1Length*input1Length);

        return this.scalarProduct(scalar, input1);

    }

    static cosPhi(input1, input2){
        if(input1 instanceof Vector4f != true || input2 instanceof Vector4f != true){
            throw new Error("Parameters are not vectors!")
        }

        var input1Length = this.length(input1);
        var input2Length = this.length(input2);

        var product = this.dotProduct(input1, input2);

        if(input1Length*input2Length == 0){
            throw new Error("Sum of vector lengths equals 0. Cannot divide!");
        }

        return product/(input1Length*input2Length);
    }
}

module.exports = Vector4f;

