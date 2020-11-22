import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule} from './material/material.module';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ResourceComponent } from './resource/resource.component';
import { HttpClientModule } from '@angular/common/http';
import{AuthGuard} from './auth.guard'

import { ToastrModule } from 'ngx-toastr';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { TestcodesComponent } from './testcodes/testcodes.component';
import { ClipboardModule } from "@angular/cdk/clipboard";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ResourceComponent,
    MainNavComponent,
    TestcodesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    ClipboardModule,
    
    ToastrModule.forRoot(),

    LayoutModule,

    MatToolbarModule,

    MatButtonModule,

    MatSidenavModule,

    MatIconModule,

    MatListModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
