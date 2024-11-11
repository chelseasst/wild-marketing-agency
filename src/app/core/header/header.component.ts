import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: 'header.component.html',
    styleUrls: ['header.component.css']
})
export class HeaderComponent {
    @Output() navigateToSection2 = new EventEmitter<string>();

    scrollToSection(sectionId: string) {
      this.navigateToSection2.emit(sectionId);
    }
}