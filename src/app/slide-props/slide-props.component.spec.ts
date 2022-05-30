import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePropsComponent } from './slide-props.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('SlidePropsComponent', () => {
    let component: SlidePropsComponent;
    let fixture: ComponentFixture<SlidePropsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SlidePropsComponent ],
            imports: [SirvMediaViewerModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlidePropsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
