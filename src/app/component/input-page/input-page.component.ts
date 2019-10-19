import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TextMatchService } from '../../text-match-service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.sass']
})
export class InputPageComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder, private textsMatches: TextMatchService ) { }
  returnValue: boolean = false;

  ngOnInit() { }
    textInput = this.formBuilder.group({
      textA : [''],
      textB:  ['']
    });

    textResult = this.formBuilder.group({
      textA : [''],
      textB:  ['']
    });

  onSubmit(){
    this.add();
    this.results();
    this.returnValue = !this.returnValue;
  }
  add(){
    this.textsMatches.add(this.textInput.value.textA);
    this.textsMatches.add(this.textInput.value.textB);
  }
  results(){
    return this.textInput.value.textA === this.textInput.value.textB;
  }

}
