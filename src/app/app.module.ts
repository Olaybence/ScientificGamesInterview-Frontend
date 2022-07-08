import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import { TableComponent } from './game-page/table/table.component';

import { UsersService } from 'src/services/users.service';
import { RandomService } from 'src/services/random.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontPageComponent,
    GamePageComponent,
    AppHeaderComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    FormsModule, ReactiveFormsModule,

    MatFormFieldModule, 
    MatInputModule,
    MatDialogModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule
  ],
  providers: [
    UsersService,
    RandomService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
