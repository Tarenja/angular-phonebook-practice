import { Component, OnInit } from '@angular/core';
import { Contact } from '../../model/contact';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact;

  constructor() {}

  ngOnInit(): void {
    this.contact = new Contact();
    this.contact.id = 1;
    this.contact.firstName = 'Happy';
    this.contact.lastName = 'Unicorn';
    this.contact.email = 'random@email.com';
    this.contact.phone = '012345678';
    this.contact.gender = 'No';
    this.contact.dob = '1964-01-20';
  }
}
