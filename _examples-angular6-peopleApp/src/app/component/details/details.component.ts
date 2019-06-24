import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
// import animation functions
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

// import common services
import { DataService } from '../../services/data.service';

// to show activated link
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  // to hold single user Id details
  user$: Object;

  constructor(private _activatedRoute: ActivatedRoute, private _dataService: DataService) {
    this._activatedRoute.params.subscribe(
      (_params) => {
        this.user$ = _params.id;
        console.log('this.user$ : ' + this.user$);
        console.log('params : ', _params);
      }
    )
  }

  ngOnInit() {

    /* // subscribe
    this._dataService.getUserData(this.user$).subscribe(
      (_result) => {
        this.user$ = _result;
        console.log('success block - details user - _result : ', _result);
      },
      (_error) => {
        console.log('error block - user - : ', _error);
      },
      () => {
        console.log('after complition block user');
      }
    ) // subscribe */

    // promise
    this._dataService.getUserData(this.user$).then(
      (_result) => {
        if (_result == null) {
          console.log('user success block - details user - BUT NO DATA : ', _result);
        } else {
          console.log('users success block - user - _result : ', _result);
          this.user$ = _result;
          console.log('user$ : ', this.user$);
        } // else
      })
      .catch(function (error) {
        console.log('user error in Promise is : ', error);
      })

  } // ngOnInit

} // detailsComponent
