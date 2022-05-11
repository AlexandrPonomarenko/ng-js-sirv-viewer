import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PropsComponent } from './props/props.component';
import { DemoComponent } from './demo/demo.component';
import { SlotsComponent } from './slots/slots.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { SlotsOptionsComponent } from './slots-options/slots-options.component';
import { SlidePropsComponent } from './slide-props/slide-props.component';
import { EventsApiComponent } from './events-api/events-api.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component';
import { BackgroundImageComponent } from './background-image/background-image.component';

const routes: Routes = [
    { path: '', component: DemoComponent },
    { path: 'example1', component: PropsComponent },
    { path: 'example2', component: SlotsComponent },
    { path: 'example3', component: SlidePropsComponent },
    { path: 'example4', component: SlotsOptionsComponent },
    { path: 'example5', component: ViewFileComponent },
    { path: 'example6', component: EventsApiComponent },
    { path: 'example7', component: LazyImageComponent },
    { path: 'example8', component: BackgroundImageComponent }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [
    DemoComponent, PropsComponent, SlotsComponent, SlidePropsComponent,
    SlotsOptionsComponent, ViewFileComponent, EventsApiComponent, LazyImageComponent, BackgroundImageComponent
];
