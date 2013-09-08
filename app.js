var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function calculate_frequence (word){
	var word_vector = word.split("");
	var result = [];
	
	for (var i = 0; i < alphabet.length; i++) {
		result.push(0);
		for (var y = 0; y < word_vector.length; y++) {
			if(alphabet[i] === word_vector[y]){
				result[i]++;	
			}
		}	
	}

	return result;
}

function calculate_product(word_1, word_2){
	var result = 0;
	for (var i = 0; i < word_1.length; i++) {
		result += (word_1[i] * word_2[i]);
	}	
	return result;
}

function calculate_magnitude(word){
	var result = 0;
	for (var i = 0; i < word.length; i++) {
		result += Math.pow(word[i], 2);
	}	
	return Math.pow(result,1/2);
}

var word_1 = "rodrigo";
var word_2 = "rodrigi";

var word_1_frequence = calculate_frequence(word_1);
var word_2_frequence = calculate_frequence(word_2);

var words_product = calculate_product(word_1_frequence, word_2_frequence);

var word_1_magnitude = calculate_magnitude(word_1_frequence);
var word_2_magnitude = calculate_magnitude(word_2_frequence);

var magnitude_product = calculate_product([word_1_magnitude],[word_2_magnitude]);

var result = words_product / magnitude_product;
console.log(word_1, " is " , result,"% similar to " , word_2);