import { Component } from "@angular/core";

@Component({
    selector: 'app-header-mobile',
    templateUrl: 'header-mobile.component.html',
    styleUrls: ['header-mobile.component.css']
})
export class HeaderMobileComponent {
    isNavOpen = false;
    constructor() { }
    toggleNav(){
        this.isNavOpen = !this.isNavOpen;
    }
}