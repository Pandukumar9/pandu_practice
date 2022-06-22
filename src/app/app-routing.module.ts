import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

// route guard
import { AuthGuard } from './shared/guard/auth.guard';
import { ButtonsComponent } from './material/buttons/buttons.component';
import { SkeletonSampleComponent } from './skeleton-sample/skeleton-sample.component';
import { AtobSampleComponent } from './atob-sample/atob-sample.component';
import { ImageCroperComponent } from './image-croper/image-croper.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] ,
children: [
  { path: 'matbutton', component: ButtonsComponent ,canActivate: [AuthGuard] },
  { path: 'skeleton', component: SkeletonSampleComponent ,canActivate: [AuthGuard] },
  { path: 'atob', component: AtobSampleComponent ,canActivate: [AuthGuard] },
  { path: 'imagecropper', component: ImageCroperComponent ,canActivate: [AuthGuard] }

]},
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
