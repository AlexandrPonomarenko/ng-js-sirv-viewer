import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { EventsApiComponent } from './events-api.component';
import { AppComponent } from '../app.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('EventsApiComponent', () => {
    let component: EventsApiComponent;
    let fixture: ComponentFixture<EventsApiComponent>;
    let de: DebugElement;
    let element: HTMLElement;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ AppComponent, EventsApiComponent ],
            imports: [SirvMediaViewerModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventsApiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        de = fixture.debugElement.query(By.css('.Sirv'));
        element = de.nativeElement;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
