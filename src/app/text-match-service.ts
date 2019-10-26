import { Injectable } from '@angular/core';
import { text } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class TextMatchService {
  texts: string[] = [];
  equalityResponse: object = {'valid': false, 'texts': this.texts};

  add(text: string) {
    this.texts.push(text);
  }
 
  equal(){
    if(this.texts[0] === this.texts[1]){
      this.equalityResponse['valid'] = true;
      this.equalityResponse['texts'] = this.texts;
      return this.equalityResponse;
    }
    else{
      this.addColor();
      this.addNumberLines();
      this.equalityResponse['valid'] = false;
      this.equalityResponse['texts'] = this.texts;
      return this.equalityResponse;
    }
  }

  addColor(){
    var resultText = '';
    for(var i = 0; i< this.texts[0].length; i++)
    {
      if(this.texts[0][i] !== this.texts[1][i]){
        resultText += '<span class=\"alterColor\">' + this.texts[1][i] + '</span>';
      }
      else {
        resultText += this.texts[1][i];
      }
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
          continue;
        }
        else {
          returnText += this.texts[inputNum][i];
        }
    }
    this.texts[inputNum] = returnText;
  }
}
