import { NgModule } from "@angular/core";
import { SharedModule } from "../_modules/shared.module";
import { AuthRoutingModule } from "./auth-routing.module";
import { AuthComponent } from "./auth/auth.component";

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule
  ]
})

export class AuthModule {}
