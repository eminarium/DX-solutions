
/*
    Counts amount of vowels in a given string.
    
    Function: amountOfVowels
    Input: string
    Output: Amount of vowels in a provided string.
*/

function amountOfVowels(word) {
    // Escape cases where the word is empty string.
    if (!word) 
        return 0;
    
    // Count cases where it matches vowels ('a', 'e', 'i', 'o', 'u') 
    // and return the total amount of occurences.
    return word.match(/[aeiou]/ig).length
}


/*
    Returns the longest word from a sentence, or the one with the most vowels.
    
    Function: theLongestWord
    Input: string
    Output: The longest word in a sentence, if there are multiple of them,
            returns the one with the most amount of vowels.
*/

function theLongestWord(string = "") {

    // Split the word by spaces and remove non-word characters (\W+), 
    // by replacing them with empty space.
    let words = string.split(' ').map(word => word.replace(/\W+/, ''))

    // Form an array of the words with longest length
    let longestWordsArray = words.reduce((longestWords, currentWord) => {
         if (currentWord.length > longestWords[0].length) {
            return [currentWord]
         } else if (currentWord.length == longestWords[0].length) {
            longestWords.push(currentWord)
            return longestWords;
        } else {
            return longestWords;
        }
    }, [''])
    
    
    // If there's only one word in array, return it.
    if (longestWordsArray.length == 1) {
        return longestWordsArray[0]
    } else {
        // There are more than one words in resultant array,
        // so we compare them by amount of vowels in them and return the
        // one that has maximum of vowels.
        let longestWord = longestWordsArray.reduce((result, currentWord) => {
            return (amountOfVowels(currentWord) > amountOfVowels(result)) ? currentWord : result;
        }, "");
        
        return longestWord;
    }
}


console.log(theLongestWord("Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers"))