// 682.棒球比赛
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    const res = [];
    
    for(let i=0;i<ops.length;i++){
        if(ops[i]==="+"){
            if(res.length>=2){
                res.push(res[res.length-1]+res[res.length-2]);
            }
        }else if(ops[i]==='D'){
            if(res.length>=1){
                res.push(res[res.length-1]*2);
            }
        }else if(ops[i]==='C'){
            if(res.length>=1){
                res.pop();
            }
        }else{
            res.push(parseInt(ops[i],10));
        }
    }
    
    let result = 0;
    for(let i=0;i<res.length;i++){
        result+=res[i];
    }
    
    return result;
};