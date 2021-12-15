function arrenge(array) {
    let TestArray=[]
    for (let index1 = 0; index1< array.length; index1++) {
        if(array[index1]!=-1){
            TestArray.push(array[index1])
        }
    }
    TestArray.sort(function(a, b){return a-b});
    let counter=0
    for (let index2 = 0; index2 < array.length; index2++) {
        if( array[index2]!=-1)
        {
            array[index2]=TestArray[counter]
            counter++
        }
    }
    return(array)
}
console.log(arrenge([170,150,160,-1,130,-1,120,-1,-1]))
console.log(arrenge([-1,150,190,170,-1,-1,160,180]))