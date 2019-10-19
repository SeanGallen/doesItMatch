import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.sass']
})
export class InputPageComponent implements OnInit {
  
  constructor(private formBuilder: FormBuilder ) { }
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
    this.results();
    this.returnValue = !this.returnValue;
  }

  results(){
    return this.textInput.value.textA === this.textInput.value.textB;
  }
}
