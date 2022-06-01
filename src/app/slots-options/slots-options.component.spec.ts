import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsOptionsComponent } from './slots-options.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('SlotsOptionsComponent', () => {
    let component: SlotsOptionsComponent;
    let fixture: ComponentFixture<SlotsOptionsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SlotsOptionsComponent ],
            imports: [SirvMediaViewerModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlotsOptionsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
