var isValid = function (s){
    var map = {
        "(":")",
        "[":"]",
        "{":"}"
    }

    var leftArr = [];
    for(var ch of s){
        if(ch in map) leftArr.push(ch);
        else{
            if(ch != map[leftArr.pop()]) return false;
        }
    }
    return !leftArr.length; //防止全部为左括号
}