import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select-value',
  templateUrl: './select-value.component.html',
  styleUrls: ['./select-value.component.css']
})
export class SelectValueComponent implements OnInit {
  //storing the currently selected user
  currentValueChild: string;
  
  constructor( ) { }

  ngOnInit(): void {
  }

    /* updateFromChild()
  purpose: To update the currently selected user in Parent
  input: Selected user from child component
  output: Updated selection */
  
  public updateFromChild($event){
    this.currentValueChild = $event
  }
  

}



