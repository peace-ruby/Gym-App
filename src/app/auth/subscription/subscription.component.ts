import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent {
  plans = [
    {
      name: 'Starter Plan',
      price: 'Free',
      features: [
        '3 projects limit',
        'Only one page in projects',
        'Low resolution video exports',
        'Free mockup items and content',
        'Personal license for hobby usage'
      ],
      highlighted: false
    },
    {
      name: 'Lite Plan',
      price: '$7/month',
      features: [
        'Unlimited projects',
        'Premium mockups and content',
        'Premium templates',
        'Commercial license',
        'Project versions',
        'Project presentation',
        'Standard customer support'
      ],
      highlighted: false
    },

    {
      name: 'Professional Plan',
      price: '$12/month',
      features: [
        'Unlimited projects',
        'Premium mockups and content',
        'Premium templates',
        'Commercial license',
        'Project versions',
        'Project presentation',
        'Branding components',
        'Custom fonts',
        'Digital Assets Manager',
        'Team collaboration',
        'HD Video Export',
        'Standard customer support'
      ],
      highlighted: true
    },
    {
      name: 'Ultimate Plan',
      price: '$29/month',
      features: [
        'Unlimited projects',
        'Premium mockups and content',
        'Premium templates',
        'Commercial license',
        'Project versions',
        'Project presentation',
        'Branding components',
        'Custom fonts',
        'Digital Assets Manager',
        'Team collaboration',
        'HD Video Export',
        'Standard customer support'
      ],
      highlighted: false
    }
  ];

  constructor(private auth: AuthService) {}

  subscribe(plan: any) {
    console.log('subscribing to', plan);
  }
}
