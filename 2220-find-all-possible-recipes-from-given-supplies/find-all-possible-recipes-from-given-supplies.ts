function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    let validRecipes = []
    let failed = []
    let updatedValids = true
    while(updatedValids){
        updatedValids = false
        for(let i=0;i<recipes.length;i++){
            let valid = true
            for(let j=0;j<ingredients[i].length;j++){
                if(!supplies.includes(ingredients[i][j])){
                    if(!validRecipes.includes(ingredients[i][j])){
                        valid = false
                        failed.push[i]
                    }
                }
            }
            if(valid && !validRecipes.includes(recipes[i])){
                validRecipes.push(recipes[i])
                updatedValids = true
            }
        }
    }

    return validRecipes
};