import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@app/core/material/material.module';

export const SHARED_MODULES: any[] = [
  FlexLayoutModule,
  NgbModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule,
];

export const COMPONENT_DECLARATIONS: any[] = [];

export const PROVIDERS: any[] = [];
