function simplifyPath(path: string): string {

    let stack = []
    for(let part of path.split("/")){
        //if path has anything /../ gets rid of latest
        if(part === ".."){
            if(stack.length){
                stack.pop()
            }
        }
        // handles /./ and //
        else if(part === "." || part === ""){
            continue
        }
        // actual path
        else{
            stack.push(part)
        }
    }
    return "/"+stack.join("/")
};