export const name = "前端"
const age = 20
const color = 'red'
export {
    age,color
}
export const obj = {
    job:'学生'
}
class stu{
    constructor(name,age){
        this.name=name
        this.age=age
    }
    tostring(){
        console.log(name+'今年'+age+'岁了')
    }
}
export default stu