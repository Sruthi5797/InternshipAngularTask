import { Component, OnInit,EventEmitter,Output,Input,ViewChild } from '@angular/core';
import { MatSelectionList } from '@angular/material/list';
import users from "../../assets/users.json";
@Component({
  selector: 'app-view-list',
  templateUrl: './view-list.component.html',
  styleUrls: ['./view-list.component.css']
})
export class ViewListComponent implements OnInit {
  // Get data from the json file
  userData: any;
  
  @Input('childCurrentvalue')
  currentSelected: string = '';
  
  // Access the html element
  @ViewChild('users') _users: MatSelectionList;
  
  // Send output to parent component
  @Output() 
  displayInParent: EventEmitter<string> = new EventEmitter<string>();

  /* deSelect()
  purpose: To deselect the list of selected users
  input: Button trigger
  output: Deselected list and a resets the user */

  deSelect(){
    if(this.currentSelected = ''){
      console.log('No user selected')
    }
    else{
      this.currentSelected = '';
      this.displayInParent.emit(this.currentSelected)
      this._users.deselectAll();  
    }
  }

  /* onSelection ()
  purpose: To Select a user form list and send it to Parent
  input: User click event and the chosen element
  output: Emitted selected user to parent */

  onSelection(e,v){ 
    this.currentSelected = e.option.value;
    console.log(this.currentSelected)
    this.displayInParent.emit(this.currentSelected)
  }

  constructor() { 
    this.userData = users;
   }

  ngOnInit(): void{

   }

  }

