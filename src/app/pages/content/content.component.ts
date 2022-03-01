import { Component, OnInit } from '@angular/core';
import ImgJson from '../imageArr.json';

interface IMAGE{

  userId: Number;
  id:Number;
  title: String;
  completed: Boolean;
  isChecked:Boolean;
  count: Number;
  imgPath:String;

}
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})


export class ContentComponent implements OnInit {


Image : IMAGE[] = ImgJson;
imgClickedArr: any[] = [];
suraj : number = 5;

limiter(event){
   console.log(event)
   this.suraj = event
 
  }

ngOnInit(): void {
  console.log('oninit');
}
imageClicked(img: any) {
  const found = this.imgClickedArr.some((el: any) => el.id === img.id);
  if (!found) {
    this.imgClickedArr.push(img);
    img.isChecked = true
    
  }
  if (found) {
    this.imgClickedArr.splice(
      this.imgClickedArr.findIndex((a) => a.id === img.id),
      1
    );
    img.isChecked = false
  }
  console.log('clickedArr', this.imgClickedArr);
}
}
