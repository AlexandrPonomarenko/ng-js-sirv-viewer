import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlotsComponent } from './slots.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('SlotsComponent', () => {
    let component: SlotsComponent;
    let fixture: ComponentFixture<SlotsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SlotsComponent ],
            imports: [SirvMediaViewerModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SlotsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
