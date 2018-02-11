var flag = 1;
var arr =[];
function submitaction() {
		var input2 = document.getElementById('submitbtn').value;
		

		arr = input2.split(" ");
		console.log(arr);

		if(arr.length>1){
		for(var i=1;i<arr.length;i=i+2){
			if((arr[i]=='and' || arr[i]=='or' || arr[i]=='~' || arr[i]=='&' || arr[i] =='||' || arr[i]=='OR' || arr[i]=="AND" || arr[i]=="And" || arr[i]=="Or") && arr.length%2!==0)
				flag=1;
			else{
				flag=0;
				break;
			}
			}
		}
		else{
			flag=1;
		}
			if(flag==0){
				alert("Enter valid query!");
				return false;
			}
			else if(flag==1){
				return true;
			}
						}
console.log(flag);
console.log(arr);
