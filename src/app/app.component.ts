import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TXT-Angular';

  onSubmit(){
    var title = (<HTMLInputElement>document.getElementById('blogTitle')).value;
    console.log(title);
    document.getElementById('blogsTitle').innerHTML= title;

    var content = (<HTMLInputElement>document.getElementById('blogContent')).value;
    console.log(content);
    document.getElementById('blogsContent').innerHTML= content;
  }
}
