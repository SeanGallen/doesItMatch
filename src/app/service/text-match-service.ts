import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextMatchService {
  texts: string[] = [];

  add(textA: string, textB: string) {
    this.texts.length = 0;
    this.texts.push(textA);
    this.texts.push(textB);;
  }
 
  equalityCheck(){
    if(this.texts[0] === this.texts[1]){
      document.body.style.setProperty(`--main-bg-color`, 'green');
    }
    else{
      document.body.style.setProperty(`--main-bg-color`, 'red');
      this.addColor();
      this.addNumberLines();
    }
    return this.texts;
  }

  addColor(){
    let textALength = this.texts[0].length;
    let textBLength = this.texts[1].length;
    var resultText = '';
    for(var i = 0; i < textBLength; i++)
    {
      if(textBLength > textALength && i >= textALength) {
        resultText += '<span class=\"alterColor\">' + this.texts[1][i] + '</span>';
        continue;
      }
     if(this.texts[0][i] !== this.texts[1][i]){
        if(this.texts[1][i] === ' ') { 
          resultText += '<span class=\"colorSpace\">' + this.texts[1][i] + '</span>';
          continue;
        }
        resultText += '<span class=\"alterColor\">' + this.texts[1][i] + '</span>';
      }
      else {
        resultText += this.texts[1][i];
      }
    }
    if(textALength > textBLength){
      resultText += '<span class=\"endedEarly\">' + '  ' + '</span>';
    }
    this.texts[1] = resultText;
  }

  addNumberLines(){
    this.numberAddition(0);
    this.numberAddition(1);
  }

  numberAddition(inputNum){
    let returnText = "1. ";
      let count = 2;
      for(var i = 0; i< this.texts[inputNum].length; i++){
        if(this.texts[inputNum][i] === '\n') {
          returnText += this.texts[inputNum][i] + count + '. ';
          count++;
        }
        else {
          returnText += this.texts[inputNum][i];
        }
    }
    this.texts[inputNum] = returnText;
  }
}
