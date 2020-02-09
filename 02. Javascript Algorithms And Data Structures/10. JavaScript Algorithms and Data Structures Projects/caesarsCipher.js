function rot13(str) { // LBH QVQ VG!
    let splitArr = str.split("");
    let newValArr = [];

    splitArr.map((e) => e.charCodeAt()).map( function (e){
        if(e >= 65 && e <= 77){
            newValArr.push(e+13);
                } else if(e >= 78 && e <= 90) {
                    newValArr.push(e - 13);
                } else {
                    newValArr.push(e)
                }
    });
    // console.log(`SPLIT: ${splitArr}      NEW: ${newValArr}`);
    // console.log(newValArr.map((e) => String.fromCharCode(e)).join(""));

  console.log(splitArr);
  return newValArr.map((e) => String.fromCharCode(e)).join("");
}

// Change the inputs below to test
rot13("SERR CVMMN!");
