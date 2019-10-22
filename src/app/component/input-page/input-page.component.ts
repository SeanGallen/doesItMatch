import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { TextMatchService } from '../../text-match-service';

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.sass']
})
export class InputPageComponent implements OnInit {
  returnValue: boolean = false;

  constructor(private formBuilder: FormBuilder, private textsMatches: TextMatchService ) { }

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
    this.get();
  }
  add(){
    this.textsMatches.add(this.textInput.value.textA);
    this.textsMatches.add(this.textInput.value.textB);
  }

  get(){
    var equalReturn = this.textsMatches.equal();
    this.textResult.patchValue({ textA: equalReturn['texts'][0], textB: equalReturn['texts'][1]});
    this.returnValue = true; 
  }
  

}
