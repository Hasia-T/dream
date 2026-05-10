import { Component, OnInit } from '@angular/core';
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Button } from 'primeng/button';
import { CommonModule } from '@angular/common';


// bootstrapApplication(App, appConfig)
//     .catch(err => console.error(err));
@Component({
    selector: 'app-thanks',
    templateUrl: './thanks.html',
    styleUrls: ['./thanks.scss'],
    standalone: true,
    imports: [Button, Card, Timeline, CommonModule]
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class ThanksComponent {
    events: any[];
    constructor() {
        this.events = [
            { status: 'First Met', date: 'At Fair', color: '#9C27B0', image: './../images/firstMet.JPG', description: 'First Met Description filler filler filler filler filler filler filler fille' },
            { status: 'Met Again', date: 'In the Dream', color: '#673AB7', image: './../images/metAgain.PNG', description: 'Met Again Description' },
            { status: 'Falling in Love', date: 'At the Ball', color: '#FF9800', image: './../images/fallingInLove.JPG', description: 'Falling in Love Description' },
            { status: 'Confession', date: '', color: '#607D8B', image: './../images/confession.PNG', description: 'Confession Description' },
            { status: 'Realization', date: '', color: '#607D8B', image: './../images/realization.PNG', description: 'Realization Description' },
            { status: 'Together', date: '', color: '#607D8B', image: './../images/together.PNG', description: 'Together Description' },
            { status: 'Confession', date: '', color: '#607D8B', image: './../images/confession2.JPG', description: 'Confession 2 Description' },
            { status: 'Graduation & Proposal', date: 'Graduation', color: '#607D8B', image: './../images/graduation.JPG', description: 'Graduation & Proposal Description' },
            { status: 'Another Proposal', date: '', color: '#607D8B', image: './../images/anotherProposal.JPG', description: 'Another Proposal Description' },
            { status: 'Marry', date: '', color: '#607D8B', image: './../images/marry.JPG', description: 'Marry Description' }
        ];
    }

    ngOnInit() {
        // this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
    }
}
