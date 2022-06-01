import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewFileComponent } from './view-file.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('ViewFileComponent', () => {
    let component: ViewFileComponent;
    let fixture: ComponentFixture<ViewFileComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ ViewFileComponent ],
            imports: [SirvMediaViewerModule]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViewFileComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
