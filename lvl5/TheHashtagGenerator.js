/*
DESCRIPTION:
	The marketing team is spending way too much time typing in hashtags.
	Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
	All words must have their first letter capitalized.
	If the final result is longer than 140 chars it must return false.
	If the input or the result is an empty string it must return false.


Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/

function generateHashtag (str) {
	return str.replace( /\s/g, '').length < 140 && str.replace( /\s/g, '') !== '' ?
		'#' + str.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join('') :
		false
}

console.log(generateHashtag('hello world'))
