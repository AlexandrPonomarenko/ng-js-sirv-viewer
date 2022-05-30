import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundImageComponent } from './background-image.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('BackgroundImageComponent', () => {
    let component: BackgroundImageComponent;
    let fixture: ComponentFixture<BackgroundImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ BackgroundImageComponent ],
            imports: [SirvMediaViewerModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(BackgroundImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
