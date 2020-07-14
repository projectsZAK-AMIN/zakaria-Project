
function each(coll,func){

if(Array.isArray(coll)){
 for(var i =0;i<coll.length;i++){
 	func(coll[i],i);
 }
}
else{


	for (var key in coll){
		func(coll[key],key);
	}
}


}





function list(object){
   var less=''; 
  each(object,function(element,key){
    less+=' ' + key;
});
return less;
}


function deleteT(object){
   each(object,function(element,key){
     if(key==='rollon'){
          delete object[key]; 
     }        
         });
return object;
}


function lengthOfObj(object){
      var count=0;
      each(object,function(element,key){
      	count++;
      })
      return count;

}
function displayProp(array){
	var pairs='';
	var obj={};
	var res='';
	each(array,function(element,i){
		obj=element;
		each(obj,function(val,key){
			pairs=key+' : '+val+', ';
			res+=pairs;
		});
		res+='\n'
	});
	return res;
}
function Circle(r){
var obj={
	radius:r,
	area:area,
	perimeter:perimeter;
};
return obj;
}
var area=function(){
	return ((this.radius*this.radius)*Math.PI);
}
var perimeter=function(){
	return (2*this.radius)*Math.PI;
}

function BookList(){
	var obj={
		bookRead:0,
		bookNotRead:0,
		nextBook:{},
		currentBook:{},
		lastBook:{},
		allBooks:[]
	}
	return obj;
}



function add (title,genre,author,read ){
	return this.allBooks.push(obj={
		title:title, 
	    genre:genre,
	    author:author,
	    read:false 
	});
}
function finishCurrentBook(){
	
}




