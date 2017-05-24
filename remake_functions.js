//remake_functions.js

//Concat

function Concat()
{concat_string = "";
	for (i=0; i<arguments.length; i++)
	{
		concat_string = concat_string + arguments[i];
	}
	return concat_string;
}

console.log(Concat('a','b','c'));


//endsWith
function endsWith(long_string, short_string, sublen)
{	if (sublen != null)
	{long_string = long_string.substring(0,sublen+1)}
	var long_string_trunc = long_string.substring(long_string.length - short_string.length)
	for(i=0;i<short_string.length;i++)
		{if (long_string_trunc.charAt(i) != short_string.charAt(i))
			{return false;}

		}
		return true;
}

console.log(endsWith('abcdefghijkl','c', 2));


//includes
function includes(tosearch, search_term)
{
	for (i=0; i<tosearch.length; i++)
	{
		if (tosearch.substring(i,search_term.length+i)===search_term)
			{return true;}
 	}
	return false;
}
console.log(includes('abccc','d'));


//indexof
function indexof(tosearch, search_term, start_index)
{
	for (i=0 + start_index; i<tosearch.length; i++)
	{
		if (tosearch.substring(i,search_term.length+i)===search_term)
			{return i;}
	}
	return -1;
}
console.log(indexof('abccc','b'));