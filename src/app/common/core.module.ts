import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatStepperModule } from '@angular/material/stepper';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { InitialpageComponent } from './components/initialpage/initialpage.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderService } from './components/services/header.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatChipsModule,
    MatTableModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatListModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatFormFieldModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
  ],
  providers: [MatDatepickerModule, HeaderService],
  exports: [
    BrowserModule,
    MatGridListModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatChipsModule,
    MatTableModule,
    MatIconModule,
    MatStepperModule,
    MatTabsModule,
    MatBottomSheetModule,
    MatListModule,
    MatMenuModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatGridListModule,
    MatSelectModule,
    MatSidenavModule,
    MatInputModule,
    MatRadioModule,
    MatSliderModule,
    MatFormFieldModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    FlexLayoutModule,
  ],
  declarations: [InitialpageComponent]
})

export class CoreModule {
}
