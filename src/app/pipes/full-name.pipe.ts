import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../model/contact';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(contact: Contact): string {
    if (!contact) {
      return '';
    }
    const title = contact.gender === 'no' ? 'Sparkly' : 'Shiny';
    return `${title} ${contact.firstname} ${contact.lastname}`;
  }
}
