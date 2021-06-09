class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(string){
    const exceptWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    const arrayedString = string.split(' ')
    const result = [];

    for(let i = 0; i < arrayedString.length; i++){
      if(i === 0){
        result.push(this.capitalize(arrayedString[i]))
      }else if(exceptWords.includes(arrayedString[i])){
        result.push(arrayedString[i])
      }else{
        result.push(this.capitalize(arrayedString[i]))
      }
    }
    return result.join(' ');
  }
}