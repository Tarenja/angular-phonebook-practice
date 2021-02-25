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
    const title = contact.gender === 'No' ? 'Sparkly' : 'Shiny';
    return `${title} ${contact.firstName} ${contact.lastName}`;
  }
}
