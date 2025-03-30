function partitionLabels(s: string): number[] {
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


    let lastOccurence: number[] = new Array(26).fill(0)
    for(let i=0;i<s.length;i++){
        let index = alphabet.indexOf(s[i]);
        lastOccurence[index] = i
    }

    let partEnd = 0
    let partStart = 0
    let partSizes:number[] = []
    for(let i=0;i<s.length;i++){
        partEnd = Math.max(partEnd,lastOccurence[alphabet.indexOf(s[i])])

        if(i == partEnd){
            partSizes.push(i-partStart +1)
            partStart = i+1
        }
    }
    return partSizes
};