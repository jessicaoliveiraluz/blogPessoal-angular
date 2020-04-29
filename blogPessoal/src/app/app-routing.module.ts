import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [

  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Precisamos declarar que a página inicial será a home e declaramos assim nessa linha. (quando a minha localhost for vazia, ele vai redirecionar recebendo home que é a rota criada em baixo o full trás todo o componente completo pra gente).
  { path: 'home', component: HomeComponent },
  { path: 'feed', component: FeedComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
