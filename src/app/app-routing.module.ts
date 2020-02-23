import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserSignUpFormComponent } from './user-sign-up-form/user-sign-up-form.component';
import { LandingPageComponent } from './landing-page/landing-page.component';


const routes: Routes = [
    { path: '', component: LandingPageComponent },
    { path: 'signup', component: UserSignUpFormComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
