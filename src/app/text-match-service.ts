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
      var count0 = 1;
      var count1 = 1;
      for (let index = 0; index < this.texts[0].length; index++) {
        let element1 = this.texts[0][index];
        let element2 = this.texts[1][index];
        if(element1 === '\n') {
          element1 = element1 + ' ' + count0;
          count0 += 1;
        }
        if(element2 === '\n') {
          element2 = (element2 + ' ' + count1);
          count1+= 1;
        }
        console.log(element2);
      }
      this.equalityResponse['valid'] = false;
      this.equalityResponse['texts'] = this.texts; 
      return this.equalityResponse;    
    }
  }
}
