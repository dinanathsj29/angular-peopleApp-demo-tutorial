import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import animation functions
import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

// import common services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // Add animations properties here:
  animations: [
    trigger('usersListStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px) translateX(-50px)' }),
            stagger(
              '550ms',
              animate(
                '100ms ease-out',
                style({ opacity: 1, transform: 'translateY(0px)' })
              )
            )
          ],
          { optional: true }
        ),
        query(':leave', animate('50ms', style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})

export class UsersComponent implements OnInit {

  // to hold users data coming from public api
  usersData$:Object;

  constructor(private _dataService:DataService) { }

  ngOnInit() {

    /* // subscribe
    this._dataService.getUsersData().subscribe(
      (_result) => {
        console.log('success block - users - _result : ' , _result);
        this.usersData$ = _result;
        console.log('usersData$ : ' , this.usersData$);
      },
      (_error) => {
        console.log('error block - users - : ' , _error);
      },
      () => {
        console.log('after complition block users');
      }
    ) // subscribe
    */
    
    // promise
    this._dataService.getUsersData().then(
      (_result) => {
        if(_result == null){
          console.log('user success block - BUT NO DATA : ' , _result);
        } else {
          console.log('users success block - users - _result : ' , _result);
          this.usersData$ = _result;
          console.log('usersData$ : ' , this.usersData$);
        } // else
      })
      .catch(function(error){
        console.log('users error in Promise is : ', error);
      })

  } // ngOnInit
  
} // UsersComponent
