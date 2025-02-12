class Rectangle{
     constructor(width,height,color){
        this.width=width;
        this.height=height;
        this.color=color;
     }
     area(){
        const area=this.width*this.height;
        return area;
     }
     paint(){
        console.log('painting with color ${this.color}');
     }
}
const rect=new Rectangle(2,4)//instance of the rectangle class, object of the rectangle class
const area=rect.area();
console.log(area)
//new , this
//date and time
const now = new Date(); // Current date and time
console.log(now.getFullYear()); // Outputs the date in ISO format
//map
const map = new Map();
map.set('name', 'Alice');
map.set('age', 30);
console.log(map.get('name'));