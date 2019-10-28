import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TextMatchService } from '../../text-match-service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InputPageComponent implements OnInit {
  returnValue: boolean = false;
  textAReturn: string;
  textBReturn: string;

  constructor(private formBuilder: FormBuilder, private textsMatches: TextMatchService ) { }

  ngOnInit() { }
    textInput = this.formBuilder.group({
      textA : [''],
      textB:  ['']
    });

  onSubmit(){
    this.add();
    this.get();
  }
  
  add(){
    this.textsMatches.add(this.textInput.value.textA);
    this.textsMatches.add(this.textInput.value.textB);
  }

  get(){
    var textReturns = this.textsMatches.equal();
    this.textAReturn =  textReturns[0];
    this.textBReturn =  textReturns[1];
    this.returnValue = true; 
  }
}
