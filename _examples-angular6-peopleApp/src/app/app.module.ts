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
