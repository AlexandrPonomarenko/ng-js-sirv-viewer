import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SirvMediaViewerComponent } from './sirv-media-viewer/sirv-media-viewer.component';
import { HelperService } from './services/helper.service';

@NgModule({
    declarations: [ SirvMediaViewerComponent],
    providers: [HelperService],
    imports: [ CommonModule ],
    exports: [ SirvMediaViewerComponent ]
})
export class SmvModule { }
