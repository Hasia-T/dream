import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../app/app.config';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Message } from "primeng/message";
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Button } from 'primeng/button';
import { Image } from 'primeng/image';
import { CommonModule } from '@angular/common';

// bootstrapApplication(App, appConfig)
//     .catch(err => console.error(err));
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.html',
    styleUrls: ['./gallery.scss'],
    standalone: true,
    imports: [Button, Card, Image, CommonModule]
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GalleryComponent {
    images: any[];
    constructor() {
        this.images = [
            { src: './images/firstMet.JPG', title: 'First Met', alt: 'First Met' },
            { src: './images/metAgain.PNG', title: 'Met Again', alt: 'Met Again' },
            { src: './images/fallingInLove.JPG', title: 'Falling in Love', alt: 'Falling in Love' },
            { src: './images/confession.PNG', title: 'Confession', alt: 'Confession' },
            { src: './images/realization.PNG', title: 'Realization', alt: 'Realization' },
            { src: './images/together.PNG', title: 'Together', alt: 'Together' },
            { src: './images/confession2.JPG', title: 'Confession 2', alt: 'Confession 2' },
            { src: './images/graduation.JPG', title: 'Graduation & Proposal', alt: 'Graduation & Proposal' },
            { src: './images/anotherProposal.JPG', title: 'Another Proposal', alt: 'Another Proposal' },
            { src: './images/marry.JPG', title: 'Marry', alt: 'Marry' }
        ];
    }

    ngOnInit() {
        // this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
    }
}
