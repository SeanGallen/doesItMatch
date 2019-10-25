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
      let returnText = "1. ";
      let count = 2;
      for(var i = 0; i< this.texts[1].length; i++){
        
        if(this.texts[1][i] === '\n') {
          returnText += this.texts[1][i] + count + '. ';
          count++;
          continue;
        }
        returnText += this.texts[1][i];
      }
      this.texts[1] = returnText;
      this.equalityResponse['valid'] = false;
      this.equalityResponse['texts'] = this.texts;
      return this.equalityResponse;
    }
  }
}
