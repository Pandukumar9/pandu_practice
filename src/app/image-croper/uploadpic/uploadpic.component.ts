import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCropperComponent } from 'ngx-image-cropper';
import { DatashareService } from 'src/app/datashare.service';

@Component({
  selector: 'app-uploadpic',
  templateUrl: './uploadpic.component.html',
  styleUrls: ['./uploadpic.component.scss']
})
export class UploadpicComponent implements OnInit {

  jsUploadPicForm:any;
  imgErr = false;
  imgErrmes:any;
  image:any;
  // img;
  result:any;
  imgerr = false;
  isenableprofile:boolean=false;
  @ViewChild('myInput', { static: true }) myInputVariable!:ElementRef;
  constructor(public dialog: MatDialog,
              public dialogRef: MatDialogRef<UploadpicComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any,
              private uploadpicSer: DatashareService,
              private fb: FormBuilder,
              public notifications: DatashareService) { }

  ngOnInit() {
    this.jsUploadPicForm = this.fb.group({
      pic: ''
    });
  }

  jsUploadPic(event:any) {
    // let filetype = event.target.files[0].name.substr(event.target.files[0].name.lastIndexOf('.') + 1).toUpperCase();
    // if ((filetype !== 'JPG') && (filetype !== 'PNG') && (filetype !== 'JPEG') && (filetype !== 'BMP')) {
    //      this.imgErrmes = 'Please upload .jpg, .jpeg, .png or .bmp formats only';
    //      this.imgErr = false;
    //      this.imgerr = true;
    //   return false;
    // } else if (event.target.files[0].size > 1000000) {
    //   // else if (event.target.files[0].size > 5242880) {
    //      this.imgErr = false;
    //      this.imgerr = true;
    //      this.imgErrmes = 'Make Sure to upload a file less than 1 Mb';
    //   return false;
    // } else {
    //   this.imgErr = false;
    //   this.imgerr = false;
    //   this.dialog.open(ImageCropperComponent, {
    //     width: '650px',
    //     data: {
    //       event,
    //       rounded: true
    //     }
    //   }).afterClosed().subscribe((res) => {
    //     if (res) {
    //       this.image = res;
    //       this.image.name = 'profile.png';
    //     } else {
    //       this.image = null;
    //       this.myInputVariable.nativeElement.value = '';
    //     }
    //   });
    // }
  }

  uploadPic() {
    if (!this.imgerr) {
      if (this.image && this.image.name) {
        this.isenableprofile = true;
        this.imgErr = false;
        const formData = new FormData();
        formData.append('image', this.image, this.image.name);
        this.uploadpicSer.postPrflPic(formData).subscribe((data: any) => {
          if (data.body.status === 'SUCCESS') {
            // this.notifications.getuserdata();
            this.dialogRef.close(data);
          } else if (data.body.status === 'FAIL') {
            this.isenableprofile = false;
            this.imgErr = true;
            this.imgErrmes = data.body.message;
            setTimeout(() => {
              this.imgErr = false;
              this.imgErrmes = '';
            }, 5000);
          }
        });
      } else {
        this.isenableprofile = false;
        this.imgErr = true;
        this.imgErrmes = 'Please Select a Profile Pic to Upload';
        setTimeout(() => {
          this.imgErr = false;
          this.imgErrmes = '';
        }, 5000);
      }
    } else {
      // this.isenableprofile = false;
      this.imgErr = true;
    }
  }

}
