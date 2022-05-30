import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LazyImageComponent } from './lazy-image.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('LazyImageComponent', () => {
    let component: LazyImageComponent;
    let fixture: ComponentFixture<LazyImageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ LazyImageComponent ],
            imports: [SirvMediaViewerModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(LazyImageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
