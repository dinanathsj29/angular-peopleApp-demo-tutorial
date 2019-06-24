<p align="center">
    <img src="_images-angular-peopleApp/angular-logo-1.png" alt="angular logo" title="angular logo" width="200" />
</p>

Creating and working with Angular application - Routing, Services, HTTP (mock data)
=====================
Let's create/build below Angular Single Page Application (SPA) which uses/includes/explore many core building blocks Angular features like: multiple Components, Services, Routing and Navigation, HTTP Services, CSS Animations, etc. This Angular app will fetch data from a free 3rd party mock API service and display it Angular Material UI.

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/_1-peopleapp-user-list.png" alt="Image - Output - Angular Single Page Application (SPA) with Routing and Navigation - Home View (User List)" title="Image - Output - Angular Single Page Application (SPA) with Routing and Navigation - Home View (User List)" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Angular Single Page Application (SPA) with Routing Navigation - Home View (User List)</figcaption>
  </figure>
</p>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/_2-peopleapp-user-details.png" alt="Image - Output - Angular Single Page Application (SPA) with Routing and Navigation - (User Details)" title="Image - Output - Angular Single Page Application (SPA) with Routing and Navigation - (User Details)" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Angular Single Page Application (SPA) with Routing Navigation - (User Details)</figcaption>
  </figure>
</p>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/_3-peopleapp-posts.png" alt="Image - Output - Angular Single Page Application (SPA) with Routing and Navigation - Posts" title="Image - Output - Angular Single Page Application (SPA) with Routing and Navigation - Posts" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - Angular Single Page Application (SPA) with Routing Navigation - Posts</figcaption>
  </figure>
</p>

Working with existing/cloned/copied Angular App
---------------------
- Clone or Download the project/app from Github or any other sources
- If using Visual Studio Code / Insiders, open Command panel/terminal from menu: View -> Terminal (shortcut key is `CTRL + BackTick` OR `COMMAND + J`)
- Go inside the project/app directory, command: `cd _examples-angular-peopleapp OR cd appName`
- Run command: `npm install` to install project/app dependencies `(node_modules)`
- To Build and run Angular App, command: `ng serve / npm start` OR `ng serve -o` OR `ng serve --open`
- To change the port from 4200 to other port - type command:  `ng serve --port 5000`
- To check the application in browser type path/URL: `localhost:4200 / 5000`

01 Getting Started
=====================
1.1. Pre-requisites:
---------------------
Basic familiarity with HTML, CSS and JavaScript, Angular 2/4/5/6 is must.

- HTML          - Markup
- CSS           - Style, Formates
- JavaScript    - Behaviour, Click, Validations
- TypeScript basics - Advanced JS features (Class, Arrow Function, Spread Operator)
- Text Editor / Visual Text Editors

1.2. Setup the Angular development environment:    
---------------------
In this section, we will learn how to set up a local development environment to start developing Angular apps. 

- `Node`, (website: https://nodejs.org/en) 
- `NPM`, (Node Package Manager - comes inbuilt with Node)
- `Angular CLI = Command Line Interface`, Angular CLI (Command Line Interface) for angular (website:  https://cli.angular.io/), 
    - The quickest and easiest way of starting an Angular app is through the `Angular CLI (Command Line Interface)`. It allows/helps the developer to build/generate building blocks of angular application like component, services, routings, modules, etc. with best practices quicker and easier)
- `Text Editor`
    - Visual Studio Code / Visual Studio Code Insiders (website: https://code.visualstudio.com)
    - Sublime Text, 
    - Atom, 
    - Brackets etc.

1.3. Steps to Setup the Angular development environment:
---------------------
1. Download and Install node (node comes with npm) (website: https://nodejs.org/en)
2. After installation check version of node and npm by command: `node -v` / `node --version` OR `npm -v` / `npm --version`
3. Install Angular CLI (website https://cli.angular.io/) by using the command: `npm install -g @angular/cli` (it will install Angular CLI globally)
4. After installation check version of angular CLI by using the command: `ng -v` OR `ng --version`, you can also verify angular CLI installation by command: `ng` OR `ng --help`
5. Create a new app with angular CLI by using syntax command: `ng new project/appName` example: command: `ng new angular-peopleApp` 
    - **command: `ng new angular-peopleApp --style=scss --routing` will create Angular app with `.scss` (no css) and `routing module app-routing.module.ts` files**
6. Go inside the project/app directory, command: `cd angular-peoplesApp`
7. Build and run Angular App, command: `ng serve` OR `ng serve -o` OR `ng serve --open`
    - To change the port from 4200 to other port - type command:  `ng serve --port 5000 --open`
8. Go to the browser and launch/check Angular App by entering the web address: `localhost:4200 / 5000`

1.4. Angular project/application structure-architecture summary:
---------------------
- `Angular app`: (Show graphical representation of `src -> app -> components` folder)
    - Angular apps are modular in nature 
    - Consists of one or more modules (Angular App is a collection of one or many modules)
    - Modules are main feature area - User module, Admin module, Dashboard module, Employee module)
    - `Angular Application Root Module is AppModule (app.module.ts) ` 
    - `Modules` are lines of code which can be IMPORTed or EXPORTed
        - Module consists of one or more Components and Services 
        - `Components` - .HTML Template + .ts Class + .CSS 
            - A component represents/controls view in the browser
            - (example: header, footer, sidebar, common panels, common search utility, similar feature components used throughout the application)
            - `Angular Application Root (bootstrapped) component is AppComponent (app.comoponent.ts)`
        - `Services` - Class which consists of Business logic (common programming feature used throughout the application)

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/1.4-angular-application-architecture.png" alt="Angular Application Folder structure-Architecture" title="Angular Application Folder structure-Architecture" width="500" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular Application Folder structure-Architecture</figcaption>
  </figure>
</p>

Modules interact and ultimately render Components+Services view in the browser.

1.5. Angular project/application File / Folder structure-Architecture summary:
---------------------
- `package.json`: consists of Node/NPM library/package/module dependencies for application development
- `node_modues` - folder consists of all installed packages
- `src/main.ts` - entry point to angular application. src/index.html
- `app/app.module.ts` - route module of application
- `app/app.component.ts` - route component of application
- `app-routing.module.ts` - consits of RoutingModule/Routes for application - required path and components details
- **`ng serve / npm start` -> Initialization proeces: main.ts (index.html) -> app.module.ts -> app.component.ts -> (app.component.html + css)**

1.6. Angular Module (app.module.ts)
---------------------

> **Syntax & Example**: app.module.ts
```ts
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { PostsComponent } from './component/posts/posts.component';
import { UsersComponent } from './component/users/users.component';
import { DetailsComponent } from './component/details/details.component';

// services
import { HttpClientModule } from '@angular/common/http';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component'; 
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    // components
    AppComponent,
    SidebarComponent,
    PostsComponent,
    UsersComponent,
    DetailsComponent,
    PagenotfoundComponent
  ],
  imports: [ 
    // modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  // services must be included here
  providers: [ DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

As and when we use Angular CLI to generate components and services, it will automatically update app.module.ts file to import and add them to the `@NgModule decorator`. `Components are added to the declarations array`, and `services are added as providers`. You will also find yourself adding various imports to the imports array. For instance, when we want to add animations, HTTP, routes, routers we will add them here. In the absence of Angular CLI, we may need to all entries carefully and manually in app.module.ts.

1.7. Dealing with Angular Components (creating components)
---------------------
- The core/key idea behind Angular is to build application using `reusable parts/chunks i.e. components`
- Components are main building blocks of UI and an/any angular application
- `Angular Application Root (bootstrapped) component is AppComponent (app.comoponent.ts)`

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/1.7-angular-components.png" alt="Angular Components" title="Angular Components" width="500" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Angular Components</figcaption>
  </figure>
</p>

A component is self contained, reusable piece of UI made up of 3 important parts:
1. `Template` - `View, HTML code` (User Interface for application also known as view)
2. `Class` - `Business logic/Application logic` for the view, `TypeScript/JavaScript code`, (Data, Methods & properties)
3. `Decorator/Metadata` - `Metadata, a @function` which provide more information for angular class. example: app.component.ts: 

> **Syntax & Example**: app.component.ts
```typescript
@Component({
    selector: 'app-root', // selector - a custom html tag
    templateUrl: './app.component.html', // template/templateUrl - html view,
    styleUrls: ['./app.component.css'] // styleUrls - css style sheet
})
```

1.8. Creating component
---------------------
- We can create component manually, but in that scenario, we need to do and follow various steps/manual entries
- It's advisable to use angular CLI to create a component, services, routing, etc. 
- `To create a component using angular CLI`:
    - command: `ng generate component componentName` OR `ng g c componentName`
    - **`It generates 4 new files: .css-styles, .html-markup, .spec.ts-test, .ts-class`**
    - Also, an automated `import` /update/entry of components is done in `app.module.ts` file at the top `imports section` and in `declarations array` which consists of all the components used in the application
    - A component must be a member of/belongs to an `@NgModule - declarations array` in order for it to be usable by another component or application
- Let us create some required component for our current app:
    - ng generate component sidebar <br/>
    - ng g c posts <br/>
    - ng g c users <br/>
    - ng g c details <br/>

1.9. Using component in the application
---------------------
- To use any component in the application, we need to copy and paste new components `'selector'` from respective .ts file i.e. `'app-sidebar'` as a tag in `app.component.html`

> **Syntax & Example**: app.component.html
```html
<div id="container">
  <app-sidebar></app-sidebar>

  <div id="content">
    <router-outlet></router-outlet>
  </div>

</div>
```

- Here `<app-sidebar></app-sidebar>` is selector of newly created sidebar component from `sidebar.component.ts` file
- **router-outlet**
    - The directive `(<router-outlet>)` that marks where the router displays a view (a container to hold different views/components loaded as users perform application tasks/actions). `(<router-outlet>)` is used to load different pages/components when the user clicks on different links or buttons.

1.10. index.html
---------------------
- In our current application we will use `Angular Material Icon` and `Google Fonts`, so lets first import/link them under `<head>` section of index.html

> **Syntax & Example**: 
```html
<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <title>AngularPeopleApp</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

  <!-- material icon -->
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

  <!-- google fonts -->
  <link href="https://fonts.googleapis.com/css?family=Montserrat:300,700" rel="stylesheet">

</head>

<body>
  <app-root></app-root>
</body>

</html>
```

- Learn more about [Angular Material Icon - https://material.io/tools/icons/?style=baseline](https://material.io/tools/icons/?style=baseline) and [Google Fonts - https://fonts.google.com/](https://fonts.google.com/)

1.11. Sidebar component (sidebar.component.html)
---------------------
- **routerLink**
    - The attribute/directive for binding a clickable HTML element `(instead of html <a> anchor href will use routerLink)` to a route which denotes link/view name to load/show in `(<router-outlet>)`

> **Syntax & Example**: sidebar.component.html
```html
<nav>
  <ul>
    <li>
      <!-- -->
      <!-- <a routerLink="" [class.activated]="currentUrl == '/'">
        <i class="material-icons">supervised_user_circle</i>
      </a> -->

      <a alt="User" title="User" routerLink="" routerLinkActive="activated" [routerLinkActiveOptions]="{exact: true}"> 
        <i class="material-icons">supervised_user_circle</i>
      </a>

      <a alt="Post" title="Post" routerLink="posts" routerLinkActive="activated" [routerLinkActiveOptions]="{exact: true}">
        <i class="material-icons">message</i>
      </a>
    </li>

    <!-- <li>
      <a routerLink="posts" [class.activated]="currentUrl == '/posts'">
        <i class="material-icons">message</i>
      </a>
    </li> -->

  </ul>
</nav>
```

1.12. Angular with SCSS/CSS
---------------------
- CSS is used to make the application look better and beautiful, in the current project will use the power of `scss/sass` to change look-feel, also make application slick and intuitive

styles.scss
---------------------
> **Syntax & Example**: styles.scss
```scss
/* You can add global styles to this file, and also import other style files */
/* You can add global styles to this file, and also import other style files */

// $main-color:#e91e63;

body {
  margin: 0;
  background: #F2F2F2;
  font-family: 'Montserrat', sans-serif;
  height: 100vh;
  color: #2D2E2E;
}

#container {
  display: grid;
  grid-template-columns: 70px auto;
  height: 100%;

    #content {
        padding: 30px 50px;

        ul {
            list-style-type: none;
            margin:0;
            padding:0;
        
            li {
                background: #fff;
                border-radius: 10px;
                padding: 10px;
                margin-bottom: 10px;
        
                a {
                    font-size: 1.5em;
                    text-decoration: none;
                    font-weight: bold;
                    color:#e91e63; //#00A8FF;
                }
        
                ul {
                    margin-top: 20px;
                    
                    li {
                        padding:0;
                        background:none;
        
                        a {
                            font-size: 1em;
                            font-weight: 300;
                            text-decoration: underline;
                        }
                    }
                }
            }
        }
    }
}
```

sidebar.component.scss
---------------------

> **Syntax & Example**: sidebar.component.scss
```scss
nav {
    background: #2D2E2E;
    height: 100%;

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        li {

            a {
                color: #e91e63; //#fff;
                padding: 20px;
                display: block;
            }

            .activated {
                background-color: #e91e63;
                color: #fff;
            }
        }
    }
}
```

1.13. Angular Routing and Navigation
---------------------
- In sidebar component we have used 2 icons for User & Posts respectively also `routerLink="posts"`, let's work with routes/paths in `/src/app/app-routing.module.ts`

> **Syntax & Example**: app-routing.module.ts
```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './component/users/users.component';
import { DetailsComponent } from './component/details/details.component';
import { PostsComponent } from './component/posts/posts.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'details',
    component: PagenotfoundComponent
  },
  {
    path: 'user',
    component: PagenotfoundComponent
  },
  {
    path: 'post',
    component: PagenotfoundComponent
  },
  {
    path: '**',
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

- I hope you remember that `app-routing.module.ts` contains all component path details user need to visit/navigate on some clicks or action. Here in `const routes: Routes = [ ]` array we have created/entered different object with `path` and `component` property which user will navigate

1.14. Angular Services and HTTPClient - Fetching Data from API
---------------------
- Service is a class with a specific purpose and widely used to:
    - Share data - Between multiple pages/components
    - Implement application logic - Calculations, Repetitive tasks/functionalities, etc.
    - External Interaction - Database connectivity
- Services are a great and awesome way to share information among multiple classes/components, just create a service and inject it in respective classes/components
&nbsp;
&nbsp;
- In current application to show Users List in UsersComponent, Posts in PostsComponent we want to fetch a list of users from a 3rd party free public API - `https://jsonplaceholder.typicode.com/users`
- Let's create a service with Angular CLI command: `ng generate service data` OR `ng g s data`
- Http & HttpClientModule: Till Angular 4 - Http module used, In `Angular 5 - HttpClientModule used (HttpClientModule provides simplified APIs to work with HTTP functionality)`

> **Syntax & Example**: defualt/generic service ts file
```ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
}
```

> **Syntax & Example**: data.service.ts
```ts
import { Injectable } from '@angular/core';
// httpClient
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //public api url path to get user data
  private urlUsersData = 'https://jsonplaceholder.typicode.com/users';
  private urlUserData = 'https://jsonplaceholder.typicode.com/users/';
  private urlPostsData = 'https://jsonplaceholder.typicode.com/posts';

  //create an instance of it through dependency injection within the constructor
  constructor(private httpClient: HttpClient) { }

  //get users data from public api 
  getUsersData() {
    // default returns of get/post & other rest api method is 'OBSERVABLEs'
    // return this.httpClient.get(this.urlUsersData);

    // return PROMISE with .toPROMISE() method
    return this.httpClient.get(this.urlUsersData).toPromise();
  }

  //get single user data from public api 
  getUserData(_userId) {
    // default returns of get/post & other rest api method is 'OBSERVABLEs'
    // return this.httpClient.get(this.urlUserData+_userId);

    // return PROMISE with .toPROMISE() method
    return this.httpClient.get(this.urlUserData+_userId).toPromise();
  }

  //get posts data from public api 
  getPostsData() {
    // default returns of get/post & other rest api method is 'OBSERVABLEs'
    // return this.httpClient.get(this.urlPostsData);

    // return PROMISE with .toPROMISE() method
    return this.httpClient.get(this.urlPostsData).toPromise();
  }

}
```

- To get response/results data structure details, please check the local file: `_api_readme_result.txt`,  in this file API result pasted for reference purpose

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/1.14.1-jsonplaceholder-Fake-Online-REST-API.png" alt="Image - Output - jsonplaceholder Fake Online REST API.png" title="Image - Output - jsonplaceholder Fake Online REST API.png" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - jsonplaceholder Fake Online REST API.png</figcaption>
  </figure>
</p>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/1.14.2-jsonplaceholder-users-data.png" alt="Image - Output - jsonplaceholder Users" title="Image - Output - jsonplaceholder Users" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - jsonplaceholder Users</figcaption>
  </figure>
</p>

<p>
  <figure>
    &nbsp;&nbsp;&nbsp; <img src="./_images-angular-peopleApp/1.14.3-jsonplaceholder-posts-data.png" alt="Image - Output - jsonplaceholder Posts" title="Image - Output - jsonplaceholder Posts" width="1000" border="2" />
    <figcaption>&nbsp;&nbsp;&nbsp; Image - Output - jsonplaceholder Posts</figcaption>
  </figure>
</p>

1.15. User component 
---------------------
- Import `data service` in each and every component which needs to fetch/show data and subscribe in respective method

> **Syntax & Example**: users.component.ts
```ts
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// import common services
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})

export class UsersComponent implements OnInit {

  // to hold users data coming from public API
  usersData$: Object;

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

```

> **Syntax & Example**: users.component.html
- Use `*ngFor` directive to loop over `usersData$` list Object

```html
<h1>Users List:</h1>

<ul>
  <li *ngFor="let user of usersData$">
    <a routerLink="/details/{{user.id}}" title="{{ user.name }} | Click to get more Details"> {{ user.name }}</a>

    <ul>
      <li>{{ user.email }}</li>
      <li><a href="http://{{ user.website }}">{{ user.website }}</a></li>
    </ul>

  </li>
</ul>
```

1.16. Angular Animation
---------------------
- To access/use the animation library in an angular application, we need to first install it from the console with command: `npm install @angular/animations@latest --save`
- `app.module.ts` - import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; imports: [ 
    // modules
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
- In respective compoents which needs to use/show animation, let's import: `import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';`
- To make this animation work, in users.component.html file reference the animation trigger: `<ul [@usersListStagger]="usersData$">`

> **Syntax & Example**: users.component.ts
```ts
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

  // to hold users data coming from public API
  usersData$: Object;

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
```

> **Syntax & Example**: users.component.html
```html
<h1>Users List:</h1>

<ul [@usersListStagger]="usersData$">
  <li *ngFor="let user of usersData$">
    <a routerLink="/details/{{user.id}}" title="{{ user.name }} | Click to get more Details"> {{ user.name }}</a>

    <ul>
      <li>{{ user.email }}</li>
      <li><a href="http://{{ user.website }}">{{ user.website }}</a></li>
    </ul>

  </li>
</ul>
```
