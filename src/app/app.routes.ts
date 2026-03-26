import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
	{ path: '', component: LandingComponent },
	{
		path: 'signin',
		loadComponent: () => import('./auth/signin/signin.component').then(m => m.SigninComponent)
	},
	{
		path: 'signup',
		loadComponent: () => import('./auth/signup/signup.component').then(m => m.SignupComponent)
	},
	{
		path: 'subscribe',
		loadComponent: () => import('./auth/subscription/subscription.component').then(m => m.SubscriptionComponent)
	},
	{ path: '**', redirectTo: '' }
];
