import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SirvMediaViewerComponent } from './sirv-media-viewer.component';
import { HelperService } from './services/helper.service';

describe('SirvMediaViewerComponent', () => {
    const SRC1 = 'https://example.com/test.jpg';
    const SRC2 = 'https://example.com/test.spin';
    let component: SirvMediaViewerComponent;
    let fixture: ComponentFixture<SirvMediaViewerComponent>;


    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ SirvMediaViewerComponent ],
            providers: [ HelperService ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(SirvMediaViewerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

     it('zoom', () => {
        const type = 'zoom';
        const src = SRC1;
        component.listSlides = [{'type': 'zoom', 'src': src }];
        component.createSlideNode();
        fixture.detectChanges();
        const createdSlide: Element = component.slides[0];
        expect(createdSlide.outerHTML).toBe(`<div data-type="${type}" data-src="${src}"></div>`);
    });

    it('spin', () => {
        const type = 'spin';
        const src = SRC2;
        component.listSlides = [{'src': src }];
        component.createSlideNode();
        fixture.detectChanges();
        const createdSlide: Element = component.slides[0];
        expect(createdSlide.outerHTML).toBe(`<div data-src="${src}"></div>`);
    });

    it('image', () => {
        const type = 'image';
        const src = SRC1;
        component.listSlides = [{ 'type': type, 'src': src }];
        component.createSlideNode();
        fixture.detectChanges();
        const createdSlide: Element = component.slides[0];
        expect(createdSlide.outerHTML).toBe(`<img data-src="${src}">`);
    });

    it('zoom', () => {
        const type = 'zoom';
        const src = SRC1;
        component.listSlides = [{ 'type': type, 'src': src }];
        component.createSlideNode();
        fixture.detectChanges();
        const createdSlide: Element = component.slides[0];
        expect(createdSlide.outerHTML).toBe(`<div data-type="${type}" data-src="${src}"></div>`);
    });

    it('html', () => {
        const type = 'html';
        const src = '<div>Hello world</div>';
        component.listSlides = [{ 'type': type, 'src': src }];
        component.createSlideNode();
        fixture.detectChanges();
        const createdSlide: Element = component.slides[0];
        expect(createdSlide.outerHTML).toBe(`<div>${src}</div>`);
    });

    it('Other props', () => {
        const type = 'spin';
        const src = SRC2;
        const id = 'testId';
        const thumbnailImage = SRC1;
        const slideDisabled = true;
        const thumbnailHtml = '<div>Selector</div>';
        const swipeDisabled = true;
        const hiddenSelector = true;
        component.listSlides = [{ 'type': type, 'src': src, 'id': id, 'dataThumbnailImage': thumbnailImage, 'dataDisabled': slideDisabled, 'dataThumbnailHtml': thumbnailHtml,
            'dataSwipeDisabled': swipeDisabled, 'dataHiddenSelector': hiddenSelector }];
        component.createSlideNode();
        fixture.detectChanges();
        const createdSlide: Element = component.slides[0];
        expect(createdSlide.outerHTML).toBe(`<div data-src="${src}" id="${id}" data-thumbnail-image="${thumbnailImage}" data-disabled="" data-thumbnail-html="${thumbnailHtml}" data-swipe-disabled="" data-hidden-selector=""></div>`);
    });
});
