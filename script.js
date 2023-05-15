// complete the given function

function palindrome(str){
       var str2= str.lowercase();
	var i=0;
	var j=str2.length-1;
	while(i<j)
	{
		if(str2.charAt(i)===str2.charAt(j))
		{
			i++;
		    j--;
		}
		else
		{
			return false;
		}
		
	}
	return true;
}

module.exports = palindrome
