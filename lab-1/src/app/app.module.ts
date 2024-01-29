import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { TwoWayBindingCardComponent } from './components/two-way-binding-card/two-way-binding-card.component';
import { ChipListComponent } from './components/chip-list/chip-list.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { FormArrayComponent } from './components/form-array/form-array.component';

@NgModule({
  declarations: [
    AppComponent,
    TwoWayBindingCardComponent,
    ChipListComponent,
    AccordionComponent,
    FormArrayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
