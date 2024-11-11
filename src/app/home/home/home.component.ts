import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() navigateToSection2 = new EventEmitter<string>();
  scrollTo(sectionId: string) {
    this.navigateToSection2.emit(sectionId);
  }

}
