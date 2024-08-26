const reverseVowels = (inputString) => {
    const vowelsList = ['a', 'e', 'i', 'o', 'u'];
    const isVowel = character => vowelsList.includes(character.toLowerCase());
    
    const characters = inputString.split('');
    const vowels = characters.filter(character => isVowel(character));
  
    return characters.map(letter => isVowel(letter) ? vowels.pop() : letter).join('');
  };
  