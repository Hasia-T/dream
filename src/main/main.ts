import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './../app/app.config';
import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Message } from "primeng/message";
import { Card } from 'primeng/card';
import { Timeline } from 'primeng/timeline';
import { Button } from 'primeng/button';
import { CharacterComponent } from '../character/character';
import { TimelineComponent } from '../timeline/timeline';
import { GalleryComponent } from '../gallery/gallery';
import { AdultContentComponent } from '../adultcontent/adultcontent';
import { CommonModule } from '@angular/common';


// bootstrapApplication(App, appConfig)
//     .catch(err => console.error(err));
@Component({
    selector: 'app-root',
    templateUrl: './main.html',
    styleUrls: ['./main.scss'],
    standalone: true,
    imports: [Button, Card, CharacterComponent, TimelineComponent, GalleryComponent, AdultContentComponent, CommonModule]
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Main {
    countDownDays: number;
    activeTab: Tab;
    constructor() {
        this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
        this.activeTab = Tab.MAIN;
    }

    ngOnInit() {
        // this.activeTab = Tab.MAIN;
        // this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
    }

    public showCharacter() {
        this.activeTab = Tab.CHARACTER;
    }

    showTimeline() {
        this.activeTab = Tab.TIMELINE;
    }

    showGallery() {
        this.activeTab = Tab.GALLERY;
    }

    showAdultContent() {
        this.activeTab = Tab.ADULT_CONTENT;
    }
}


enum Tab {
    MAIN = 'main',
    CHARACTER = 'character',
    TIMELINE = 'timeline',
    GALLERY = 'gallery',
    ADULT_CONTENT = 'adultContent'
}