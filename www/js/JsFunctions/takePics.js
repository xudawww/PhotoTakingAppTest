//Retuen image after photo is gotten.
function cameraTakePicture(cordova) { 
    return new Promise((resolve, reject) => {
        cordova.plugins.photoLibrary.getLibrary(
            function (result) {
             console.log(result)
              var library = result.library;
              resolve({url:library[0].photoURL})
           
            },
            function (err) {
              alert('Error occured');
              reject(false)
            },
            { // optional options
              thumbnailWidth: 512,
              thumbnailHeight: 384,
              quality: 0.8,
              includeAlbumData: false // default
            }
          );
    
    
    });

}
//Listen button to take camera,here its browser.
async function picTaken(){
    $('#takePics').on('click',async function(){
        const res = await cameraTakePicture(cordova)
        if(res.url){
            $('#img').attr('src',res.url);
            localStorage.setItem('imgStored',res.file)

        }
    })
}