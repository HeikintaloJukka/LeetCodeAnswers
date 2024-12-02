function isPrefixOfWord(sentence: string, searchWord: string): number {
    let words: string[] = sentence.split(" ")
    for(let i=0;i<words.length;i++){
        if(words[i].substring(0,searchWord.length) === searchWord){
            return i+1
        }
    }

    return -1
};