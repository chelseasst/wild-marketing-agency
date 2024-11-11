import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/email.service';
import { LanguageService } from 'src/app/language.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('button') button!: ElementRef;
  buttonClass: string = '';
  buttonText: string = 'Submit'
  isDisabled = false;
  successMessage: boolean = false;
  errorMessage: boolean = false;
  isSubmitted = false;
  language: string = 'en';

  constructor(private emailService: EmailService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageService.language$.subscribe((lang) => {
      this.language = lang;
      this.updateButtonText('notSubmitted');
    })
  }
  formSubmitHandler(form: NgForm) {
    if (form.valid && !this.isSubmitted) {
      this.initial();
      this.isSubmitted = true;
      const formData = {
        user_name: form.value.user_name,
        user_lastName: form.value.user_lastName,
        user_email: form.value.user_email,
        user_phone: form.value.user_phone,
        user_companyName: form.value.user_companyName,
        user_message: form.value.user_message
      };
      this.emailService.sendEmail(formData)
        .then(() => {
          this.successMessage = true;
          this.isDisabled = true;
          this.updateButtonText('submitted');
          form.reset();
        })
        .catch(() => {
          this.errorMessage = true;
          this.isDisabled = true;
          this.updateButtonText('error');
        });
    }
  }
  initial() {
    this.buttonClass = 'onclick';
    this.isDisabled = true;
    setTimeout(() => {
      this.validate();
    }, 250);
  }
  validate() {
    setTimeout(() => {
      this.buttonClass = 'validate';
      this.callback();
    }, 2050);
  }

  callback() {
    setTimeout(() => {
    }, 1000);
  }
  private updateButtonText(status: 'submitted' | 'notSubmitted' | 'error') {
    if (status === 'submitted') {
      this.buttonText = this.language === 'en' ? 'Submitted' : 'Изпратено';
    } else if (status === 'error') {
      this.buttonText = this.language === 'en' ? 'Error' : 'Грешка';
    } else {
      this.buttonText = this.language === 'en' ? 'Submit' : 'Изпращане';
    }
  }
}
