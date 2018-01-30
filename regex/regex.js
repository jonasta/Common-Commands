
REGEX
	LITERAL
		"rainbow"

	META-CHARS

		SINGLE CHAR
			\d "digits 0-9"
			\w "word characters A-Z a-z 0-9"
			\W
			\s "whitespace, tab"
			\S
			. "any char"
			* "wildcard"




			examples
				\d\d\d
				\d\d\d\d-\d\d\d

		QUANTIFIERS
			* "0 - n"
			+ "1 - n"
			? "0 -1"
			{min,2max}
			{n}

			examples
				\w{4} sequence of 4 word characters
					love live gore
				colou?rs?
					color colour colors colours

		POSITION
			^ "beginning"
			$ "end"
			\b "word Boundary"
				examples
        	^\w+ all line first words
					\w+$ all line end word
					\b\w{4}\b 4 letter words ("whole word")

		CHARACTER CLASSES
			"OR" like operation
			[ abc ] a or b or c
			[-.] - or .
			[^abc]{3} three character that is not a or b or c
			\b[A-Za-z]{4}\b 4 letter word (only a-z)
			other sintaxe
			(net|com|net)

		CAPTURING GROUPS
			"(" ")" delimiters
			example
				santos, jonasta
				tschoke , pedro
				(\w+\s?),(\s?\w+)
				replace
						$2 $1
				\[.*\] greedy version
				\[.*?\] non greedy version

///



function reverseParentheses(s) {
    
    let res = [];
    while(res = s.match(/\([\w\s]*\)/g)){
        let text = res[0];
        console.log(text)
        let result = text.split('').reverse().join('').substr(1, text.length -2);
        s = s.replace(text, result);
        console.log( "s " + s)
    }
    return s;
    
}



