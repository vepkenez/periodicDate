Date.prototype.dayOfYear = function() {
   var startdayofyear = new Date(this.getFullYear(),0,1);
	return Math.ceil((this - startdayofyear) / 86400000);
}

Date.prototype.yearStartDay = function(){
	return new Date(this.getFullYear(),0,1).getDay();
}

Date.prototype.element = function(){
	return this.dayOfYear()+this.yearStartDay()+7;
}

Date.prototype.color = function(){
	return {
		0: 'yellow',
		1: 'red',
		2: 'orange',
		3: 'purple',
		4: 'cyan',
		5: 'blue',
		6: 'green'
	}[this.getDay()]
}

Date.prototype.alternates = function(){

}

