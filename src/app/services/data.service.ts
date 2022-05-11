import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    nameOfLink: string = '';

    viewExamples = [
        {
            link: 'example1',
            name: 'Props'
        },
        {
            link: 'example2',
            name: 'Slots'
        },
        {
            link: 'example3',
            name: 'Slide Props'
        },
        {
            link: 'example4',
            name: 'Slots, options'
        },
        {
            link: 'example5',
            name: '*.view file'
        },{
            link: 'example6',
            name: 'Events, API'
        },
    ];

    lazyImageExamples = [
        {
            link: 'example7',
            name: 'Lazy image'
        },
        {
            link: 'example8',
            name: 'Background image'
        },
    ];

    setNameOfLink(name: string) {
        this.nameOfLink = name;
    }

    getNameOfLink() {
        this.nameOfLink;
    }

    getViewEx() {
        return this.viewExamples;
    }

    getLazyImageEx () {
        return this.lazyImageExamples;
    }
}
