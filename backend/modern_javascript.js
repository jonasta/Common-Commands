15/08
2017 4689 6380 98

21/08
2017 4717 3531 79


callback
	function passed as argument, wich will be executed after response
	
PROs/CONs
	blessing and curse
	seam rip acros program
	another, difficult error mecanism
	boilerplate error handling
	hard to reuse error handling logic
	difficult to understand
		nesting
		never called
		called multiple times
		called synchronously
		synchronize parallelism is hard
		ReactiveX
		
	
	
	
	
	
	
	
    <!-- <button ion-button (click)="doAsync()">async</button>
    <div id="teste" style="width:100px; height: 100px" [style.background]="bk_color"></div> -->

	
	 doAsync(){
    console.log("rodoooo");
    let self = this;
    setTimeout(function() {
      self.bk_color = 'purple';  
    }, 2000);
    console.log("doidera");
  }
  
  
import { LoadingController } from 'ionic-angular';

export class MyPage {
  constructor(public loadingCtrl: LoadingController) {
  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 3000
    });
    loader.present();
  }
}



import { ModalController } from 'ionic-angular';
import { ModalPage } from './modal-page';

export class MyPage {
  constructor(public modalCtrl: ModalController) {
  }

  presentModal() {
    let modal = this.modalCtrl.create(ModalPage);
    modal.present();
  }
}


import {StartPage} from 'start'

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
class MyApp {
  // First page to push onto the stack
  rootPage = StartPage;
}


fun1(function(par1){console.log(par1});

functino fun1(cb){
	cb("teste");
}
	