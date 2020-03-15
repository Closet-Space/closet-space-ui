import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { AboutPageComponent } from "./about-page/about-page.component";
import { NavigationBarComponent } from "./navigation-bar/navigation-bar.component";
import { SignUpPageComponent } from "./sign-up-page/sign-up-page.component";
import { ContactPageComponent } from "./contact-page/contact-page.component";
import { ProductPageComponent } from "./product-page/product-page.component";
import { FooterComponent } from "./footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutPageComponent,
    NavigationBarComponent,
    SignUpPageComponent,
    ContactPageComponent,
    ProductPageComponent,
    FooterComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
