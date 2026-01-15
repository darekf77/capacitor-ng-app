import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Toast } from '@capacitor/toast';
import { Camera, CameraResultType } from '@capacitor/camera';
import { ActionSheet, ActionSheetButtonStyle } from '@capacitor/action-sheet';
import { Dialog } from '@capacitor/dialog';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('capacitor-ng-app');
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // const showHelloToast = async () => {
    //   await Toast.show({
    //     text: 'Hello!',
    //   });
    // };

    // showHelloToast();



    // const takePicture = async () => {
    //   const image = await Camera.getPhoto({
    //     quality: 90,
    //     allowEditing: true,
    //     resultType: CameraResultType.Uri
    //   });

    //   // image.webPath will contain a path that can be set as an image src.
    //   // You can access the original file using image.path, which can be
    //   // passed to the Filesystem API to read the raw data of the image,
    //   // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //   var imageUrl = image.webPath;
    //   console.log('Image URL: ', imageUrl);
    //   // Can be set to the src of an image now
    //   // imageElement.src = imageUrl;
    // };

    // takePicture();


  }

  showAlert = async () => {
    await Dialog.alert({
      title: 'Stop',
      message: 'this is an error',
    });
  };

  showConfirm = async () => {
    const { value } = await Dialog.confirm({
      title: 'Confirm',
      message: `Are you sure you'd like to press the red button?`,
    });

    console.log('Confirmed:', value);
  };

  showPrompt = async () => {
    const { value, cancelled } = await Dialog.prompt({
      title: 'Hello',
      message: `What's your name?`,
    });

    console.log('Name:', value);
    console.log('Cancelled:', cancelled);
  };

  showActions = async () => {
    const result = await ActionSheet.showActions({
      title: 'Photo Options',
      message: 'Select an option to perform',
      options: [
        {
          title: 'Upload',
        },
        {
          title: 'Share',
        },
        {
          title: 'Remove',
          style: ActionSheetButtonStyle.Destructive,
        },
      ],
    });

    console.log('Action Sheet result:', result);
  };
}
