import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.sass']
})
export class InputPageComponent implements OnInit {
  
  textInput: FormGroup;

  constructor(private formBuilder: FormBuilder ) { }


  ngOnInit() {
    this.textInput = this.formBuilder.group({
      textA : [''],
      textB: ['']
    });
  }

  onClickSubmit(){}

}
