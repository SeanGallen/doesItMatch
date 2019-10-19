import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TextMatchService {
  texts: string[] = [];

  add(text: string) {
    this.texts.push(text);
    console.log("here is the service", this.texts);
  }
}
