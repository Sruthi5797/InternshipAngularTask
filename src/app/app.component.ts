import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'app-task-intern';

  constructor(private _router: Router) { }

  ngOnInit(): void{

  }

/* purpose: To navigate to a component
   input: Button trigger
   output: Navigate to parent-component (select-value) */

navigateToView() {
  this._router.navigate(['select-value'])
}

}
