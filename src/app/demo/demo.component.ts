import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

    viewExamples: { link: string; name: string; }[] = [];
    lazyImageExamples: { link: string; name: string; }[] = [];
    @Output() newEventEmitter = new EventEmitter<string>();

    constructor(private dataService: DataService) { }

    ngOnInit(): void {
        this.viewExamples = this.dataService.getViewEx();
        this.lazyImageExamples = this.dataService.getLazyImageEx();
    }

    handlerClick(event: Event, name: string) {
        this.newEventEmitter.emit(name);
    }

}
