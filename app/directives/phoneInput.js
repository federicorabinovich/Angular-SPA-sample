app.directive("phoneInput", function() {
  return {
    restrict: "A",
    require: 'ngModel',
    scope: true,
    link: function(scope, element, attrs, ngModel) {
	
       ngModel.$parsers.push(function (inputValue) {
			
		var format = "(ddd) ddd-dddd";
		var rplc = function (s, n, t) {
			return s.substring(0, n) + t + s.substring(n + 1);
		}
		
		

         var out = inputValue.substr(0, format.length); 
		 if(out.length>0 && out.charAt(0)!=='(') out = rplc(out, 0, '('+out.charAt(0));
			

		 for(i=1; i<inputValue.length; i++){
			 if( (out.charAt(i)!==')' && i!=4) &&  out.charAt(i)!==' ' && out.charAt(i)!=='-' && (out.charCodeAt(i)<48 ||  out.charCodeAt(i)>57)) out = rplc(out, i, '');
			 else if(out.charAt(i)==')' && i!=4) out = rplc(out, i, '');
			 else if(out.charAt(i)==' ' && i!=5) out = rplc(out, i, '');
			 else if(out.charAt(i)=='-' && i!=9) out = rplc(out, i, '');
		 }
		 if(out.length>4){
			if(out.charAt(4)!==')') out = rplc(out, 4, ')'+out.charAt(4));
		 }
		 if(out.length>5){
			if(out.charAt(5)!==' ') out = rplc(out, 5, ' '+out.charAt(5));
		 }
		 if(out.length>9){
			if(out.charAt(9)!=='-') out = rplc(out, 9, '-'+out.charAt(9));
		 }

         if (out!=inputValue) {
           ngModel.$setViewValue(out);
           ngModel.$render();
         }         

         return out;         
       });
     }
  }
});