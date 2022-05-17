import { Component, AfterViewInit } from '@angular/core';
import SMVSlider from '../module-smv/interfaces/SMVSlider';
import SMVEvents from '../module-smv/interfaces/SMVEvents';
import SMV from '../module-smv/interfaces/SMV';

@Component({
    selector: 'app-events-api',
    templateUrl: './events-api.component.html',
    styleUrls: ['./events-api.component.css']
})
export class EventsApiComponent implements AfterViewInit {

  smv: SMV;
    viewer: SMVSlider;
    connections: SMVEvents = {};
    id: string = 'smv-event-test';

    constructor() {
        this.smv = (window as any).Sirv;
    }

    ngAfterViewInit(): void {
        this.connections['viewer:ready'] = this.smv.on('viewer:ready', (e: any) => {
            if (e.id === this.id) {
                this.viewer = e;
                console.log('viewer:ready', e);
            }
        });
        this.connections['spin:init'] = this.smv.on('spin:init', (e: any) => {
            if (e.id === 'test-spin') {
                console.log('spin:init', e);
            }
        });
        this.connections['zoom:ready'] = this.smv.on('zoom:ready', (e: any) => {
            if (e.id === 'test-zoom') {
                console.log('zoom:ready', e);
            }
        });
        this.connections['image:ready'] = this.smv.on('image:ready', (e: any) => {
            if (e.id === 'test-image') {
                console.log('image:ready', e);
            }
        });
    }

    prev(): void {
        if (this.viewer) {
            this.viewer.prev();
        }
    }

    next(): void {
        if (this.viewer) {
            this.viewer.next();
        }
    }

    ngOnDestroy(): void {
        this.smv.off('viewer:ready', this.connections['viewer:ready'] ? this.connections['viewer:ready'] : () => {});
        this.smv.off('spin:init', this.connections['spin:init'] ? this.connections['spin:init'] : () => {});
        this.smv.off('zoom:ready', this.connections['zoom:ready'] ? this.connections['zoom:ready'] : () => {});
        this.smv.off('image:ready', this.connections['image:ready'] ? this.connections['image:ready'] : () => {});
    }
}
