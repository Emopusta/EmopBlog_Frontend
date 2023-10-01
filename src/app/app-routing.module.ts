import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginGuard } from './guards/login.guard';
import { LoginComponent } from './components/login/login.component';
import { ContactMeComponent } from './components/contact-me/contact-me.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { AddBlogComponent } from './components/add-blog/add-blog.component';
import { BlogDetailComponent } from './components/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate:[LoginGuard] },
  { path: 'about-me', component: AboutMeComponent, canActivate:[LoginGuard] },
  { path: 'contact', component: ContactMeComponent, canActivate:[LoginGuard] },
  { path: 'add-blog', component: AddBlogComponent, canActivate:[LoginGuard] },
  { path: 'blog-detail/:id', component: BlogDetailComponent},
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
