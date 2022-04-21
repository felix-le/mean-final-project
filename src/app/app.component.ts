import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
const URL = 'https://mean-final-project-be.herokuapp.com/api/upload';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: URL,
    allowedFileType: ['pdf', 'image', 'video'],
    headers: [
      { name: 'Access-Control-Allow-Origin', value: '*' },
      {
        name: 'Content-Type',
        value:
          'application/json; application/x-www-form-urlencoded; charset=UTF-8',
      },
    ],
  });
  ngOnInit() {
    this.uploader.onAfterAddingFile = (file) => {
      file.withCredentials = false;
    };

    this.uploader.onCompleteItem = (item: any, status: any) => {
      console.log('Uploaded File Details:', item, status);
    };
  }
  ngAfterViewInit() {
    this.uploader.onAfterAddingFile = (item) => {
      item.withCredentials = false;
    };
  }
}
