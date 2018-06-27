import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LangingPageComponent } from './components/landingPage/langing-page/langing-page.component';
import { FormsModule } from '@angular/forms';
import { WelcomeComponent } from './components/welcomePage/welcome/welcome.component';
import { CommonHeaderComponent } from './components/common-header/common-header/common-header.component';
import { HeaderService } from './services/headerServices/header.service';
import { LogoutComponent } from './modals/logoutModal/logout/logout.component';
import { SpinnyComponent } from './components/spinnyComponent/spinny/spinny.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LangingPageComponent,
    WelcomeComponent,
    CommonHeaderComponent,
    LogoutComponent,
    SpinnyComponent
  ],
  entryComponents: [LogoutComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    HttpClientModule,
    FormsModule
  ],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
