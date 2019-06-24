import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'
// import animation functions
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';

// import common services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
  // Add animations properties here:
  animations: [
    trigger('postsListStagger', [
      transition('* <=> *', [
        query(
          ':enter',
          [
            style({ opacity: 0, transform: 'translateY(-50px) translateX(50px)' }),
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

export class PostsComponent implements OnInit {

  // to hold posts data coming from public api
  postsData$: Object;

  constructor(private _dataService: DataService) { }

  ngOnInit() {

    /* // subscribe
    this._dataService.getPostsData().subscribe(
      (_result) => {
        console.log('success block - posts - _result : ' , _result);
        this.postsData$ = _result;
        console.log('postsData$ : ' , this.postsData$);
      },
      (_error) => {
        console.log('error block - posts - : ' , _error);
      },
      () => {
        console.log('after complition block posts');
      }
      
    ) // subscribe
    */

    // promise
    this._dataService.getPostsData().then(
      (_result) => {
        if (_result == null) {
          console.log('posts success block - BUT NO DATA : ', _result);
        } else {
          console.log('posts success block - posts - _result : ', _result);
          this.postsData$ = _result;
          console.log('Data$postsData$ : ', this.postsData$);
        } // else
      })
      .catch(function (error) {
        console.log('posts error in Promise is : ', error);
      })

  } // ngOnInit

} // PostsComponent
