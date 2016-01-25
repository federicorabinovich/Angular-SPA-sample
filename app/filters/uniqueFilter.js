angular.module('filters', []).filter('uniqueFilter', function() {
	return function (arr, field) {
       
		arr2 = new Array();
		if(typeof arr != 'undefined' && typeof field != 'undefined'){
			for(i=0; i<arr.length; i++){
				found = false;
				for(j=0; j<arr2.length; j++){
					if(arr[i][field]==arr2[j][field]){
						found = true;
						break;
					}
				}
				if(!found) arr2.push(arr[i]);
			}
			return arr2;
		}else return null;
    };
});