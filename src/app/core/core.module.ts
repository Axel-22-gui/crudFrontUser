import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { PerfilComponent } from '../components/perfil/perfil.component';
import { UsuarioComponent } from '../components/usuario/usuario.component';


@NgModule({
  declarations: [LayoutComponent,FooterComponent,HeaderComponent,PerfilComponent,UsuarioComponent],
  imports: [
    CommonModule,
    CoreRoutingModule
  ],
  exports : [ LayoutComponent]
})
export class CoreModule { }
