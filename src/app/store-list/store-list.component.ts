import { Component } from '@angular/core';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.css']
})
export class StoreListComponent {
  stores: any[] = [
    // Define your list of stores here
    // Example:
    { name: 'בית מרקחת גן העיר', location: 'אבן גבירול 83, תל אביב', phone: '077-8880730' },
    { name: 'סופר פארם גורדון', location: 'דיזינגוף 129, תל אביב' , phone: '073-7758967'},
    { name: 'לאון פארם בצאלאל', location: 'המכבי 2, תל אביב' ,phone: '03-5246003'},
    { name: 'סופר פארם אלנבי', location: 'אלנבי 115, תל אביב' , phone: '077-8880730'},

    // ...
  ];
}
