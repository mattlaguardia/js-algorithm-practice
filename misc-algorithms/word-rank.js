function allCombo(start, str) {
    //console.log(start + " | " + str);
    if ( str.length === 1 ) {
        return [ start + str ];
    } else {
        var returnResult = [];
        for (var i = 0; i < str.length; i++) {
            var result = allCombo(str[i], str.substr(0, i)
                + str.substr(i + 1));
                //console.log(result);
            for (var j = 0; j < result.length; j++) {
                //console.log(result);
                returnResult.push(start  + result[j]);
            }
        }
        console.log("return: " + returnResult);
        return returnResult;
    }
}
function cleanArr(start, str){
    var dirtyArr = allCombo(start, str);
    console.log("dirty arr: " + dirtyArr);
    for (i = 0; i < dirtyArr.length; i++){
        for (r = dirtyArr.length - i; r >= 0; r--){
            if (dirtyArr[i] === dirtyArr[r]){
                dirtyArr.splice(r, 1);
            }
        }
    }
    console.log("clean arr: " + dirtyArr);
    return dirtyArr;
}
function findRank(alpha, test){
    var arr = cleanArr("", alpha);
    for (var r = 0; r < arr.length; r++){
        if (arr[r] == test){
            console.log(r);
            return r+1;
        }
    }
}
findRank("abbc", "abbc");
