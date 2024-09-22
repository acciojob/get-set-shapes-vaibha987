//complete this code
class Rectangle {
	constructor(width,height){
		this.width=width
		this.height=height
	}
	getArea=function(){
		return this.width*this.height
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	getPerimeter=function(){
	return 2*(this.width+this.height)	
}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
