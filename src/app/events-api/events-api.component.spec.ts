import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsApiComponent } from './events-api.component';
import { SirvMediaViewerModule } from '../../../projects/sirv-media-viewer/src/lib/sirv-media-viewer.module';
// import SMVSlider from '../../../projects/sirv-media-viewer/src/lib/interfaces/SMVSlider';
// import SMVEvents from '../../../projects/sirv-media-viewer/src/lib/interfaces/SMVEvents';
// import SMV from '../../../projects/sirv-media-viewer/src/lib/interfaces/SMV';
// import { HelperService } from '../../../projects/sirv-media-viewer/src/lib/services/helper.service';

describe('EventsApiComponent', () => {
    let component: EventsApiComponent;
    // let hService: HelperService;
    let fixture: ComponentFixture<EventsApiComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ EventsApiComponent ],
            imports: [SirvMediaViewerModule]
            // providers: [hService]
            // providers: [HelperService]
        }).compileComponents();
        // TestBed.inject(HelperService);

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(EventsApiComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
