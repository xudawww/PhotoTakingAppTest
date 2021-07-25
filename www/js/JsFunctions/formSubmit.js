//Upload image in firebase storage.
function uploadImage(file){
    const uuid = uuidv4();
    return new Promise(async (resolve,reject)=>{
        const res = await fetch(file);
        console.log(res)
        const blob = await res.blob();
        storage.child('posts/'+uuid).put(blob).then((snapshot) => {
            storage.child('posts/'+uuid).getDownloadURL()
                .then((url) => {
                  resolve(url)
                })
          }).catch((error) => {
            console.log(error)
            reject(false)
          });;
    })
}
//Upload all info to firebase database
async function submit(){
    let  title = $('#title').val();
    let  des  = $('#description').val();
    let  imgSrc =$('#img').attr('src');
    const img = localStorage.getItem('imgStored');
    if(title=="" || des=="" || title==null || des==null ){
        
        let display = title==null||title==''?'block':'none';
        $('#title').next().css( "display",display );
        display = des==null||des==''?'block':'none';
        $('#description').next().css( "display",display);

    }
    else{
       $('#uploadInfo').prop('disabled',true);
       $('#uploadInfo').html('<i class="fa fa-spinner fa-spin"></i>');
       $('#takePics').prop('disabled',true);
       $('#takePics').html('<i class="fa fa-spinner fa-spin"></i>'); 
       console.log('here');
       let imgURL='img/jk-placeholder-image.jpg'; 
       if(img!=null&& $('#img').attr('src')!='img/jk-placeholder-image.jpg'){
        imgURL = await uploadImage(imgSrc); 
       }

       localStorage.removeItem('imgStored');
       const id = uuidv4();
       var newPostKey = database.ref("posts").push().key;

       database.ref('posts/'+newPostKey).set({
        description:des,
        image: imgURL,
        title: title,
        id:newPostKey,
        time:new Date().getTime()
      }).then(snap=>{
 
          setTimeout(function(){
            alert('successfully uploaded.')
            $('#uploadInfo').prop('disabled',false);
            $('#uploadInfo').html('Upload');
            $('#takePics').prop('disabled',false);
            $('#takePics').html('<i class="fa fa-camera"></i>');
          },3000)

      }).catch(err=>{
        alert('Err on server.')

      });
    }

}