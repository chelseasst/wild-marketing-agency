import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser'; // Make sure you have this package installed
import { environment } from '../environments/environment' // Adjust the path if necessary
@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {
    emailjs.init(environment.emailJsUserId);
  }

  sendEmail(formData: { user_name: string; user_lastName: string, user_email: string; user_phone: string; user_companyName: string, user_message: string }) {
    return emailjs.send(
      environment.emailJsServiceId,
      environment.emailJsTemplateId,
      formData,
      environment.emailJsUserId
    );
  }

}
