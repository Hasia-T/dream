import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '../app/app.config';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Message } from "primeng/message";
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Button } from 'primeng/button';
import {Galleria} from 'primeng/galleria';

// bootstrapApplication(App, appConfig)
//     .catch(err => console.error(err));
@Component({
    selector: 'app-gallery',
    templateUrl: './gallery.html',
    styleUrls: ['./gallery.scss'],
    standalone: true,
    imports: [Button, Card, Timeline, Galleria]
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class GalleryComponent {
    events: any[];
    countDownDays: number;
    ikuyoPortraitPath: string = '../images/ikuyoPortrait.jpg';
    constructor() {
        this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
        this.events = [
            { status: 'Ordered', date: '15/10/2020 10:30', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
            { status: 'Processing', date: '15/10/2020 14:00', icon: 'pi pi-cog', color: '#673AB7' },
            { status: 'Shipped', date: '15/10/2020 16:15', icon: 'pi pi-shopping-cart', color: '#FF9800' },
            { status: 'Delivered', date: '16/10/2020 10:00', icon: 'pi pi-check', color: '#607D8B' }
        ];
    }

    ngOnInit() {
        // this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
    }
}
