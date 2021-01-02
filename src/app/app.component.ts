import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFireMessaging } from '@angular/fire/messaging';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

interface Token{
  token: string;
}

@Component({
  selector: 'app-root',
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private tokensCollection : AngularFirestoreCollection<Token>;

  constructor(
    private swUpdate: SwUpdate,
    private messaging: AngularFireMessaging,
    private database: AngularFirestore
  ){
    this.tokensCollection = this.database.collection<Token>('tokens');
  }

  ngOnInit(){
    this.updatePWA();
    this.requestPermission();
    this.listenNotifications();
  }

  updatePWA(){
    this.swUpdate.available.subscribe(value=>{
      console.log('update:', value);
      debugger;
      if(confirm("Hay una nueva versiob, deseas actualizar su webapp?")){
        window.location.reload();
      }
      
    });
  }

  requestPermission(){
    this.messaging.requestToken.subscribe(token=>{
      console.log("TOKEN RECIBIDO:", token);
      this.tokensCollection.add({token});
    });

  }

  listenNotifications(){
    this.messaging.messages.subscribe(message=>{
      console.log("Notificaciones recibidas", message);

      console.log(message);
    });
  }
}
