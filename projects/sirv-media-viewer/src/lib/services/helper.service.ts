import { Injectable } from '@angular/core';
import { SlideOptions } from '../interfaces/SlideOptions';

@Injectable({ providedIn: 'root'})
// @Injectable()
export class HelperService {
    slideAttributes: object = {};
    window: any = window;

    constructor() {
        this.slideAttributes = {
            'id': 'id',
            'src': 'data-src',
            'options': 'data-options',
            'type': 'data-type',
            'dataThumbnailImage': 'data-thumbnail-image',
            'dataThumbnailHtml': 'data-thumbnail-html',
            'dataDisabled': 'data-disabled',
            'dataSwipeDisabled': 'data-swipe-disabled',
            'dataHiddenSelector': 'data-hidden-selector',
            'dataPinned': 'data-pinned',
            'staticImage': 'static-image'
        };
    }

    getWindow(): any {
        return this.window;
    }

    getStringFromObject(params: Object): string {
        const convert = (obj: Object) => {
            let str: string = '';

            Object.entries(obj).forEach((item) => {
                str += item[0];
                if ( typeof  item[1] === 'object') {
                    str += '.' + convert(item[1]);
                } else {
                    str += ':' + item[1] + ';';
                }
            });

            return str;
        }

        return convert(params);
    }

    isImage (src: string): boolean {
        return /\.(jpg|jpeg|png|webp|gif|svg)$/.test(src);
    }

    isSpin (src: string): boolean {
        return /\.spin$/.test(src);
    }

    isVideo (src: string): boolean {
        return /([^#?]+)\/?([^#?]+\.(mp4|mov|avi|m4v|mkv|webm|wmv|ogv|ogg))(\?([^#]*))?(#(.*))?$/i.test(src);
    }

    isVimeo (src: string): boolean {
        return /^(https?:)?\/\/((www|player)\.)?vimeo\.com\//.test(src);
    }

    isYoutube (src: string): boolean {
        return /^(https?:)?\/\/((www\.)?youtube\.com|youtu\.be)\//.test(src);
    }

    getTypeComponent(src: string): string {
        let result = 'html';
        if (this.isSpin(src)) {
            result = 'spin';
        } else if (this.isImage(src)) {
            // result = 'image';
            result = 'zoom';
        } else if (this.isYoutube(src)) {
            result = 'youtube';
        } else if (this.isVimeo(src)) {
            result = 'vimeo';
        } else if (this.isVideo(src)) {
            result = 'video';
        }
        return result;
    }

    setAttributes(node: HTMLElement, slideAttr: SlideOptions): void {
        const listKeys = Object.keys(slideAttr);
        let keyAttr: string | null;
        let valueAttr: string | boolean | undefined;

        for(let index = 0; index < listKeys.length; index++) {
            keyAttr = this.slideAttributes[listKeys[index] as keyof typeof this.slideAttributes];
            valueAttr = slideAttr[listKeys[index] as keyof typeof slideAttr];
            if ( typeof valueAttr === 'boolean') {
                node.setAttribute(keyAttr, '');
                continue;
            }

            node.setAttribute(keyAttr, valueAttr ? valueAttr : '');
        }
    }
}
