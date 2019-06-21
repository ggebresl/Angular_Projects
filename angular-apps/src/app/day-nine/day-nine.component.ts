import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-day-nine',
  templateUrl: './day-nine.component.html',
  styleUrls: ['./day-nine.component.css']
})
export class DayNineComponent implements OnInit {

  isColorClass=true;
  isItalicClass=true;
  isBoldClass=true;

  isBold=false;
  isItalic=true;

  fontSize=30;
  classesToApply="boldClass italicClass";
  constructor() { }

  ngOnInit() {
  }

    changeStyle(){
      this.isColorClass = !this.isColorClass;
     // this.isItalicClass=!this.isItalicClass;
      //this.isBoldClass=!this.isBoldClass;
    }

    addClass(){
      let classes={
        italicClass:this.isItalicClass,
        boldClass:this.isBoldClass
      }
      return classes;
    }

    addStyles(){
      let styles={
        "font-size.px":30,
        "font-style":this.isItalic ?'italic' : 'normal',
        "font-weight":this.isBold ? 'bold' : 'normal',
        "width":"300px"

      }
      return styles;
    }
}
