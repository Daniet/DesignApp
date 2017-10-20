import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DragulaModule } from 'ng2-dragula/ng2-dragula'

import { AppComponent } from './app.component';
import { WorktableComponent } from './worktable/worktable.component';

@NgModule({
  declarations: [
    AppComponent,
    WorktableComponent
  ],
  imports: [
    BrowserModule,
    DragulaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
