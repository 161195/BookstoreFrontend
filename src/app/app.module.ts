import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GetAllBooksComponent } from './components/get-all-books/get-all-books.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { QuickViewComponent } from './components/quick-view/quick-view.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import { WishListAddComponent } from './components/wish-list-add/wish-list-add.component';
import { CartListComponent } from './components/cart-list/cart-list.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    GetAllBooksComponent,
    QuickViewComponent,
    WishListAddComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    FlexLayoutModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    MatDividerModule,
    MatRadioModule



  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
