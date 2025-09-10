import { Routes } from '@angular/router';
import { Cafe } from './components/cafe/cafe';
import { Footer } from './components/footer/footer';
import { Header } from './components/header/header';
export const routes: Routes = [
    {path: 'cafe', component : Cafe},
    {path: 'footer', component : Footer} ,
   {path: 'header', component : Header }
];
