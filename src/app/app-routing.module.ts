import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";

const routes: Routes = [
  { path: "", component: LandingPageComponent },
  { path: "products", component: ProductPageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "contact", component: ContactPageComponent },
  { path: "about", component: AboutPageComponent },
  { path: "signup", component: SignUpPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
