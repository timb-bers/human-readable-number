module.exports = function toReadable (num) {
    let a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let b = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let c = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let d = ['hundred', 'million', 'billion'];
    let result = [];
    let str = num.toString().split('');
    let len = str.length;

    if (num === 0) {
        result[0] = a[0];
        return result.join(' ')
    }

    if (num < 10) {
        result[0] = a[num];
        return result.join(' ')
      }
        if (9 < num && num < 20) {
        result[0] = b[num - 10];
        return result.join(' ')
      }  
        if ( (num > 19 && num < 91) && (num % 10 === 0)) {
         result[0] = c[num / 10];
        return result.join(' ')
      }
    
      if ((num > 20 && num < 100) && (num % 10 !==0)) {
        result[0] = c[str[0]];
        result[1] = a[num % 10];
        return result.join(' ')
      }  
      if (num % 100 === 0) {
        result[0] = a[str[0]];
        result[1] = d[0];
        return result.join(' ')
      } 
    
     if ((num % 100 !== 0) && (+str[1] === 0)) {
        result[0] = a[str[0]];
        result[1] = d[0];
        result[2] = a[str[2]];
        return result.join(' ')
      }
      if ( ((num%100) > 10 && (num%100) < 20) ) {
        result[0] = a[str[0]];
        result[1] = d[0];
        result[2] = b[str[2]];
        return result.join(' ')
      }
      if ( ((num%100) > 19) && (+str[2] !== 0) ) {
        result[0] = a[str[0]];
        result[1] = d[0];
        result[2] = c[str[1]];
        result[3] = a[str[2]];
        return result.join(' ')
      }
        if ((num % 100 !== 0) && (+str[1] === 1)) {
        result[0] = a[str[0]];
        result[1] = d[0];
        result[2] = b[0];
        return result.join(' ')
      }
    
       if ((num % 100 !== 0) && (+str[2] === 0)) {
        result[0] = a[str[0]];
        result[1] = d[0];
        result[2] = c[str[1]];
        return result.join(' ')
      }
    }
    
