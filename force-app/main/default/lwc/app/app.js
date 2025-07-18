import { LightningElement, api, track } from 'lwc';
import getAccounts  from '@salesforce/apex/TestClass.getAccounts';
 
export default class App extends LightningElement {
  name = 'Electra X4';
  @track names = ['thapelo', 'semma', 'david'];
  description = 'A sweet bike built for comfort.';
  @api category = 'Mountain';
  @api material = 'Steel';
  price = '$2,700';
  pictureUrl = 'https://s3-us-west-2.amazonaws.com/dev-or-devrl-s3-bucket/sample-apps/ebikes/electrax4.jpg';
  ready = false;

  connectedCallback() {
    setTimeout(() => {
      this.ready = true;
    }, 3000);
  }

  callApex(){
    this.material = 'wool';
    getAccounts();
  }

}