module.exports = function multiply(first, second) {
    if ( first.length <= second.length) {
            var arr1 = first.split('').reverse();
            var arr2 = second.split('').reverse();
        } else {
            var arr1 = second.split('').reverse();
            var arr2 = first.split('').reverse();
        }
        var arr3 = [];
        var q;
        for (var i = 0; i < arr1.length; i++) {
            q = i;
            var promResult = 0;
            for ( var j = 0 ; j < arr2.length; j++) {
                str = (arr1[i] * arr2[j]) + '';
                if (j == (arr2.length - 1)) {
                    if (arr3[q] == undefined) {
                        if ( (arr1[i] * arr2[j]) >= 10 ) {
                            arr3[q] = (+str[1] + promResult);
                            arr3[q + 1] = +str[0];
                            
                        } else {
                            arr3[q] = (+str[0] + promResult);
                            
                        }
                    } else {
                        if ( (arr1[i] * arr2[j]) >= 10 ) {
                            arr3[q] += (+str[1] + promResult);
                            arr3[q + 1] = +str[0];
                            
                        } else {
                            arr3[q] += (+str[0] + promResult);
                            
                        }
                    }
                    if (arr3[q] >= 10) {
                        arr3[q] += '';
                        if (arr3[q + 1] == undefined) {
                            arr3[q + 1] = +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        } else {
                            arr3[q + 1] += +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        }
                   
                    }
                 break;
                }
                if ( (arr1[i] * arr2[j]) >= 10 ) {
                    if (arr3[q] == undefined) {
                        arr3[q] = +str[1] + promResult;
                        promResult = +str[0]; 
                    } else {
                        arr3[q] += (+str[1] + promResult);
                        
                        promResult = +str[0];
                    }
                } else {
                    if (arr3[q] == undefined) {
                        arr3[q] = +str[0] + promResult;
                        promResult = 0; 
                    } else {
                        arr3[q] += (+str[0] + promResult);
                        promResult = 0;
                    }
                }
                if (arr3[q] >= 10) {
                        arr3[q] += '';
                        if (arr3[q + 1] == undefined) {
                            arr3[q + 1] = +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        } else {
                            arr3[q + 1] += +arr3[q][0];
                            arr3[q] = +arr3[q][1];
                        }
                    }
                
                q++
            }
        }
        
       return arr3.reverse().join('');
    
}
