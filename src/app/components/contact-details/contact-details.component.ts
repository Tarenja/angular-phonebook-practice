import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PhonebookService } from 'src/app/services/phonebook.service';
import { Contact } from '../../model/contact';

@Component({
  selector: 'pb-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css'],
})
export class ContactDetailsComponent implements OnInit {
  contact: Contact = new Contact();
  // if dependencies are mentioned here, Angular will inject them for us
  constructor(
    private service: PhonebookService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this is a way, but shouldn't do this, because PhonebookService might have all sorts of other dependencies
    // let service = new PhonebookService();
    // this.contact = service.getContactDetails(1);
    // do it like this:
    this.activatedRoute.params.subscribe((paramsData) => {
      this.service
        .getContactDetails(paramsData['id']) // :id variable in the routing in amm.module
        .subscribe((data) => (this.contact = data));
    });
  }

  deleteContact() {
    if (!confirm('Are you sure?')) {
      return;
    }
    this.service.deleteContact(this.contact.id).subscribe(() => {
      this.router.navigate(['/contact-list']);
    });
  }
}
