import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-lugume',
  templateUrl: './lugume.component.html',
  styleUrls: ['./lugume.component.css']
})
export class LugumeComponent implements OnInit {
    @Input()img:string;
    @Input()nom:string;
    @Input()prix:number;
    @Input()frais:boolean;
    pr:number=0;
    val:number=0;
    onCal(){
      this.pr=this.prix*this.val;
    }

  constructor() { }
    
  ngOnInit() {
  }

}
