module.exports = function getZerosCount(number, base) {
  let n = primeDivisors(base), tmp = n, result = 0;
	while(number > n){
		result = result + Math.floor(number / n);
		n = n * tmp;
	}
	return result;
}

function primeDivisors(base){
	let result = [], number = base, curNumber = number, probe = 2;
	while(curNumber != 1){
		if(curNumber % probe != 0){
			probe++;
		}
		else{
			curNumber = curNumber / probe;
			result.push(probe);
		}
	}
	let max = result[0];
	for(let i = 0; i < result.length; i++){
		if(max < result[i]){
			max = result[i];
		}
	}
	return max;
}