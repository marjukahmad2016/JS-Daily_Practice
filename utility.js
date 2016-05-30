
var evt = {
	addListener: function(obj, type, fn) {
		if (obj.addEventListener) {
			obj.addEventListener(type, fn); 
		} else{ obj.attachEvent("on" + type, fn); }
	},
	removeEventListener: function(obj, type,fn){
			if(obj.addEventListener){
				obj.addEventListener(type,fn); 
			} else {
				obj.attachEvent("on" + type, fn); 
			}
	},
	getTarget: function(e){
		if(e.target) {
			return e.target; 
		}
		return e.srcElement;
	},
	preventDefault: function(e){
		if (e.preventDefault) {
			e.preventDefault(); 
		} else {
			e.returnValue = false; 
		}
	}

};

