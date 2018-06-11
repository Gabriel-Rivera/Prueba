import { Routes } from '@angular/router'

import { AppComponent } from '../app.component';
import { AuthLoginComponent } from '../auth-login/auth-login.component';
import { AuthSignupComponent } from '../auth-signup/auth-signup.component';
import { MyPrivatePageComponent } from '../my-private-page/my-private-page.component';
import { UsuarioComponent } from '../usuario/usuario.component';
//import { LoginGuard } from '../login.guard';


export const routes:Routes = [
    {path:"login" , component:AuthLoginComponent},
    {path:"signup" , component:AuthSignupComponent},
    {path:"Usuario" , component:UsuarioComponent},
    {path:"private", component:MyPrivatePageComponent}
]