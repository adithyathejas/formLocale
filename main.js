class student {
    static count = 0
    constructor(name,age,phone,marks){
        this.name =  name
        this.age= age
        this.phone= phone
        this.marks = marks
    }
   
}

student.prototype.isEligible = function(minmark){
    return (minage)=>{
        if (this.age > minage && this.marks>minmark){
            console.log("placed")
        }
        else{
            console.log("not placed")
        }

    }
}

let ajith = new student('ajith',28,8078371316,50)
let anooja = new student('anooja',20,8078371316,45)
let akhil = new student('akhil',24,701525465,30)
let aji = new student('aji',21,7837131680,20)
let aju = new student('aju',28,8078371316,30)

ajith.isEligible(20)(18)
anooja.isEligible(14)(47)