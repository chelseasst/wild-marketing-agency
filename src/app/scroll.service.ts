import { Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({ providedIn: 'root' })
export class ScrollService {
    private scrollSubject$ = new Subject<string>(); //no initial value 
    scrollObs$ = this.scrollSubject$.asObservable();

    scrollTo(sectionId: string) {
        this.scrollSubject$.next(sectionId);
    }
}