import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ImageCroppedEvent, LoadedImage } from 'ngx-image-cropper';
import { UploadpicComponent } from './uploadpic/uploadpic.component';

@Component({
  selector: 'app-image-croper',
  templateUrl: './image-croper.component.html',
  styleUrls: ['./image-croper.component.scss']
})
export class ImageCroperComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  imageChangedEvent: any = '';
    croppedImage: any = '';

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    dogimg:string="./assets/img/Captuddre.jpg"
    updatePic(): void {
      this.dialog.open(UploadpicComponent, {
        width: '650px'
      }).afterClosed().subscribe((res:any) => {
        if (res) {
          // this.notifications.callUpdateProfilePic  = true;
          // this.personalDetailsUpdated.emit();
          // this.snack.openSnackBar(res.body.status, res.body.message);
          // this.notifications.getuserdata();
          return true
        } else {
          return false;
        }
      });
    }

}
