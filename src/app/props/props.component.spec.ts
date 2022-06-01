import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropsComponent } from './props.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';

describe('PropsComponent', () => {
    let component: PropsComponent;
    let fixture: ComponentFixture<PropsComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ PropsComponent ],
            imports: [SirvMediaViewerModule]
        }) .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PropsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
