var backspaceCompare = function(S, T) {
    const onlyS = [],onlyT = [];
    for(let i=0;i<S.length;i++){
        if(S.charAt(i)!='#'){
            onlyS.push(S.charAt(i));
        }else{
            if(onlyS.length!=0){
                onlyS.pop();
            }
        }
    }
    for(let i=0;i<T.length;i++){
        if(T.charAt(i)!='#'){
            onlyT.push(T.charAt(i));
        }else{
            if(onlyT.length!=0){
                onlyT.pop();
            }
        }
    }
    

    if(onlyS.length != onlyT.length){
        return false;
    }
    
    for(let i=0;i<onlyS.length;i++){
        if(onlyS[i]!=onlyT[i]){
            return false;
        }
    }
    
    return true;
   
};