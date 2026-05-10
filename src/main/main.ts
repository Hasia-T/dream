import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { Card } from 'primeng/card';
import { Button } from 'primeng/button';
import { CharacterComponent } from '../character/character';
import { TimelineComponent } from '../timeline/timeline';
import { GalleryComponent } from '../gallery/gallery';
import { AdultContentComponent } from '../adultcontent/adultcontent';
import { ThanksComponent } from '../thanks/thanks';
import { CommonModule } from '@angular/common';
import { Image } from 'primeng/image';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';


// bootstrapApplication(App, appConfig)
//     .catch(err => console.error(err));
@Component({
    selector: 'app-root',
    templateUrl: './main.html',
    styleUrls: ['./main.scss'],
    standalone: true,
    imports: [Button, Card, CharacterComponent, TimelineComponent, GalleryComponent, AdultContentComponent, ThanksComponent, CommonModule, Image, InputGroupModule, InputTextModule, FormsModule]
    // schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class Main {
    countDownDays: number;
    activeTab: Tab;
    thanks: boolean = false;
    passphase: string;
    constructor() {
        this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
        this.activeTab = Tab.MAIN;
        this.passphase = '';
    }

    ngOnInit() {
        // this.activeTab = Tab.MAIN;
        // this.countDownDays = Math.floor((Date.now() - Date.parse('2025-08-01')) / (1000 * 60 * 60 * 24));
    }

    submitPassphase() {
        if (this.passphase === 'whereIsP4R') {

        }
    }

    showMain() {
        this.activeTab = Tab.MAIN;
        this.thanks = false;
    }

    showCharacter() {
        this.activeTab = Tab.CHARACTER;
        this.thanks = false;
    }

    showTimeline() {
        this.activeTab = Tab.TIMELINE;
        this.thanks = false;
    }

    showGallery() {
        this.activeTab = Tab.GALLERY;
        this.thanks = false;
    }

    showAdultContent() {
        this.activeTab = Tab.ADULT_CONTENT;
        this.thanks = false;
    }

    showThanks() {
        this.thanks = true;
    }
}


enum Tab {
    MAIN = 'main',
    CHARACTER = 'character',
    TIMELINE = 'timeline',
    GALLERY = 'gallery',
    ADULT_CONTENT = 'adultContent'
}