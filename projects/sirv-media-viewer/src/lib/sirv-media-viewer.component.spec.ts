import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ElementRef} from '@angular/core';

import { SirvMediaViewerComponent } from './sirv-media-viewer.component';
import { HelperService } from './services/helper.service';

describe('SirvMediaViewerComponent', () => {
    let component: SirvMediaViewerComponent;
    let fixture: ComponentFixture<SirvMediaViewerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SirvMediaViewerComponent ],
            // imports: [ElementRef],
            providers: [ HelperService ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SirvMediaViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        // const hp: HelperService = TestBed.inject(HelperService);
        // console.log('HP --> ', hp);

        expect(component).toBeTruthy();
    });
});
