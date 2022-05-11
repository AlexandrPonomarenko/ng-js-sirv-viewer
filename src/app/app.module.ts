import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropsComponent } from './props/props.component';
import { SlotsComponent } from './slots/slots.component';
import { SlidePropsComponent } from './slide-props/slide-props.component';
import { SlotsOptionsComponent } from './slots-options/slots-options.component';
import { ViewFileComponent } from './view-file/view-file.component';
import { EventsApiComponent } from './events-api/events-api.component';
import { LazyImageComponent } from './lazy-image/lazy-image.component';
import { BackgroundImageComponent } from './background-image/background-image.component';
import { DemoComponent } from './demo/demo.component';
import { DataService } from './services/data.service';
import { SmvModule } from './module-smv/module-smv.module';
// import { routingComponents } from './app-routing.module';

@NgModule({
    declarations: [
    AppComponent,
    // DemoComponent
    // PropsComponent,
    // SlotsComponent,
    // SlidePropsComponent,
    // SlotsOptionsComponent,
    // ViewFileComponent,
    // EventsApiComponent,
    // LazyImageComponent,
    // BackgroundImageComponent
    routingComponents,
    ],
    imports: [
        BrowserModule,
        SmvModule,
        AppRoutingModule
    ],
    providers: [DataService],
    bootstrap: [AppComponent]
})
export class AppModule { }
