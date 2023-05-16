function Cat(name,age){
    this.name=name;
    this.age=age;

}
let cat1=new Cat("miu",2);

class Dog{
    // hàm khởi tạo, tự động gọi mỗi khi new 1 đối tượng mới
    constructor(name,age){
        this.name=name;
        this.age=age;
    

    }
}
let dog1=new Dog()