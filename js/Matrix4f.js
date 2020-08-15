class Matrix4f{
    constructor(
        x1,x2,x3,x4,
        y1,y2,y3,y4,
        z1,z2,z3,z4,
        h1,h2,h3,h4
    ){
        this.x1=x1; this.x2=x2; this.x3=x3; this.x4=x4;

        this.y1=y1; this.y2=y2; this.y3=y3; this.y4=y4;

        this.z1=z1; this.z2=z2; this.z3=z3; this.z4=z4;

        this.h1=h1; this.h2=h2; this.h3=h3; this.h4=h4;
    }

    stringify(){
        return this.x1+" "+this.x2+" "+this.x3+" "+this.x4+"\n"+
            this.y1+" "+this.y2+" "+this.y3+" "+this.y4+"\n"+
            this.z1+" "+this.z2+" "+this.z3+" "+this.z4+"\n"+
            this.h1+" "+this.h2+" "+this.h3+" "+this.h4;
    }

    static negate(input){
        if(input instanceof Matrix4f != true){
            throw new Error("Input is not a matrix!")
        }

        return new Matrix4f(
            -input.x1, -input.x2, -input.x3, -input.x4, 
            -input.y1, -input.y2, -input.y3, -input.y4, 
            -input.z1, -input.z2, -input.z3, -input.z4,
            -input.h1, -input.h2, -input.h3, -input.h4
        );
    }

    static add(input1, input2){
        if(input1 instanceof Matrix4f != true || input2 instanceof Matrix4f != true){
            throw new Error("Input parameters are not matrices!")
        }

        return new Matrix4f(
            input1.x1+input2.x1, input1.x2+input2.x2, input1.x3+input2.x3, input1.x4+input2.x4,
            input1.y1+input2.y1, input1.y2+input2.y2, input1.y3+input2.y3, input1.y4+input2.y4,
            input1.z1+input2.z1, input1.z2+input2.z2, input1.z3+input2.z3, input1.z4+input2.z4,
            input1.h1+input2.h1, input1.h2+input2.h2, input1.h3+input2.h3, input1.h4+input2.h4
        );
    }

    static transpose(input){
        if(input instanceof Matrix4f != true){
            throw new Error("Input is not a matrix!")
        }

        return new Matrix4f(
            input.x1, input.y1, input.z1, input.h1,
            input.x2, input.y2, input.z2, input.h2,
            input.x3, input.y3, input.z3, input.h3,
            input.x4, input.y4, input.z4, input.h4
        );
    }

    static multiplyScalar(input1, input2){
        if(typeof input1 !="number" || input2 instanceof Matrix4f != true){
            throw new Error("Check input parameter types!")
        }

        return new Matrix4f(
            input2.x1*input1, input2.x2*input1, input2.x3*input1, input2.x4*input1,
            input2.y1*input1, input2.y2*input1, input2.y3*input1, input2.y4*input1,
            input2.z1*input1, input2.z2*input1, input2.z3*input1, input2.z4*input1,
            input2.h1*input1, input2.h2*input1, input2.h3*input1, input2.h4*input1
        );

    }

    static multiply(input1, input2){
        if(input1 instanceof Matrix4f != true || input2 instanceof Matrix4f != true){
            throw new Error("Input parameters are not matrices!")
        }

        return new Matrix4f(
            input1.x1*input2.x1+input1.x2*input2.y1+input1.x3*input2.z1+input1.x4*input2.h1,
            input1.x1*input2.x2+input1.x2*input2.y2+input1.x3*input2.z2+input1.x4*input2.h2,
            input1.x1*input2.x3+input1.x2*input2.y3+input1.x3*input2.z3+input1.x4*input2.h3,
            input1.x1*input2.x4+input1.x2*input2.y4+input1.x3*input2.z4+input1.x4*input2.h4,

            input1.y1*input2.x1+input1.y2*input2.y1+input1.y3*input2.z1+input1.y4*input2.h1,
            input1.y1*input2.x2+input1.y2*input2.y2+input1.y3*input2.z2+input1.y4*input2.h2,
            input1.y1*input2.x3+input1.y2*input2.y3+input1.y3*input2.z3+input1.y4*input2.h3,
            input1.y1*input2.x4+input1.y2*input2.y4+input1.y3*input2.z4+input1.y4*input2.h4,

            input1.z1*input2.x1+input1.z2*input2.y1+input1.z3*input2.z1+input1.z4*input2.h1,
            input1.z1*input2.x2+input1.z2*input2.y2+input1.z3*input2.z2+input1.z4*input2.h2,
            input1.z1*input2.x3+input1.z2*input2.y3+input1.z3*input2.z3+input1.z4*input2.h3,
            input1.z1*input2.x4+input1.z2*input2.y4+input1.z3*input2.z4+input1.z4*input2.h4,
            
            input1.h1*input2.x1+input1.h2*input2.y1+input1.h3*input2.z1+input1.h4*input2.h1,
            input1.h1*input2.x2+input1.h2*input2.y2+input1.h3*input2.z2+input1.h4*input2.h2,
            input1.h1*input2.x3+input1.h2*input2.y3+input1.h3*input2.z3+input1.h4*input2.h3,
            input1.h1*input2.x4+input1.h2*input2.y4+input1.h3*input2.z4+input1.h4*input2.h4,
        );
    }

}

module.exports = Matrix4f;