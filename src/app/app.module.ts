import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

// components
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// routing
import { AppRoutingModule } from './app-routing.module';

// service
import { AuthService } from './shared/services/auth.service';
import { ButtonsComponent } from './material/buttons/buttons.component';
import { SkeletonSampleComponent } from './skeleton-sample/skeleton-sample.component';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AtobSampleComponent } from './atob-sample/atob-sample.component';
import { ImageCroperComponent } from './image-croper/image-croper.component';
import { ImageCropperModule } from 'ngx-image-cropper';
import { UploadpicComponent } from './image-croper/uploadpic/uploadpic.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MaterialSampleComponent } from './material/material-sample/material-sample.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ButtonsComponent,
    SkeletonSampleComponent,
    AtobSampleComponent,
    ImageCroperComponent,
    UploadpicComponent,
    MaterialSampleComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    ImageCropperModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})

export class AppModule {}
