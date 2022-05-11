import { Component, Input, OnInit, AfterContentInit, ElementRef, AfterViewInit} from '@angular/core';
import { HelperService } from '../services/helper.service';
import { SlideOptions } from '../interfaces/SlideOptions';

@Component({
    selector: 'sirv-media-viewer',
    templateUrl: './sirv-media-viewer.component.html',
    styleUrls: ['./sirv-media-viewer.component.css']
})
export class SirvMediaViewerComponent implements OnInit, AfterContentInit, AfterViewInit {
    @Input('slides') listSlides: any[] = [];
    @Input('id') id: string;
    @Input('data-options') dataOptions: string;
    @Input('data-src') dataSrc: string;
    @Input('data-bg-src') dataBgSrc: string;
    @Input('style') style: string;

    sirv: any;
    sirvBlock: HTMLElement;
    selector: HTMLElement;
    selectorTwo: ElementRef;
    helper: HelperService;
    SlideAttr: SlideOptions;
    isNodes: boolean = false;
    slides: Node[] = [];

    constructor(private elementRef: ElementRef, private helperRef: HelperService) {
        this.sirv = helperRef.getWindow().Sirv;
        this.selector = elementRef.nativeElement;
        this.helper = helperRef;
    }

    ngOnInit(): void {
        if (!this.listSlides.length) {
            this.slides = Array.from(this.selector.children);
            this.isNodes = true;
        }
        this.createSirvViewer();
    }

    ngAfterContentInit(): void {
        this.selector.appendChild(this.sirvBlock);
        this.sirv.start(this.id ? '#' + this.id : '');
    }

    ngAfterViewInit(): void {
    }

    createSirvViewer(): void {
        this.sirvBlock = document.createElement('div');
        this.sirvBlock.classList.add('Sirv');
        this.addAttrToSMV('id', this.id);
        this.addAttrToSMV('data-options', this.dataOptions);
        this.addAttrToSMV('data-src', this.dataSrc);
        this.addAttrToSMV('data-bg-src', this.dataBgSrc);
        this.addAttrToSMV('style', this.style);
        this.createSlideNode();
        this.addSlides();
    }

    addSlides(): void {
        this.slides.forEach((slide) => {
            this.sirvBlock.appendChild(slide);
        });
    }

    createSlideNode(): void {
        this.listSlides.forEach((data) => {
            let node: HTMLDivElement | HTMLImageElement;
            let typeSlide: string = (typeof data === 'string') ? this.helper.getTypeComponent(data) : this.helper.getTypeComponent(data.src);

            node = document.createElement('div');

            if(data.type === 'image') {
                 typeSlide = 'image'
                 node = document.createElement('img');
            }

            this.initSlideAttr(data, typeSlide);
            this.helper.setAttributes(node, this.SlideAttr);
            this.slides.push(node);
        });
    }

    initSlideAttr(ob: Object, ts: string) {
        this.SlideAttr = {};
        const typeSlide: string = ts;
        const isZoom: boolean = typeSlide === 'zoom';

        if (typeof ob === 'string') {
            this.SlideAttr.src = ob;
            if (typeSlide === 'zoom') {
                this.SlideAttr.type = typeSlide;
            }

            return;
        }

        for(let [key, val] of Object.entries(ob)) {
            if (key === 'options') {
                val = this.helper.getStringFromObject(val);
            }
            this.SlideAttr[key as keyof typeof ob] = val;

        }

        if (!this.SlideAttr.type && isZoom) {
            this.SlideAttr.type = this.helper.getTypeComponent(ob['src' as keyof typeof ob].toString());
        }

        if (this.SlideAttr.type && typeSlide === 'image') {
            delete this.SlideAttr.type;
        }
    }

    addAttrToSMV(attrKey: string, attrVal: string): void {
        if (attrVal) {
            this.sirvBlock.setAttribute(attrKey, attrVal);
            this.selector.removeAttribute(attrKey);
        }
    }

}
