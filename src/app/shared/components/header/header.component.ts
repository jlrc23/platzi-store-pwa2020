import { Component, OnInit, HostListener } from '@angular/core';

import { map } from 'rxjs/operators';

import { CartService } from './../../../core/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  installEvent;

  @HostListener('window:beforeinstallprompt', ['$event'])
  onBeforeInstallPrompt(event: Event){
    console.log('[window:beforeinstallprompt]',event);
    event.preventDefault();
    this.installEvent = event;
  }

  installByUser(){
    if(this.installEvent){
      this.installEvent.prompt();
      this.installEvent.userChoice.then(rta=>{
        console.log(rta);
      })

    }
  }
  total$: Observable<number>;

  constructor(
    private cartService: CartService
  ) {
    this.total$ = this.cartService.cart$
    .pipe(
      map(products => products.length)
    );
  }

  ngOnInit() {
  }

}
