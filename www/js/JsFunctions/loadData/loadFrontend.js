//After get data from firebase, append the data to frontend post page.
function loadFrontend(snapshot,content,ifInit){

  let html=''
  let counter = 1;
  //When it's loading for next page, we show up the loading spinner.
  if(!ifInit){
    content.append('<i id="temLoad" class="fa fa-spinner fa-spin loadingSign"></i>')
  }
  //iterate each of data  
  snapshot.forEach((childSnapshot) => {
    const dataEle = childSnapshot.val();
    if(counter==1&&!ifInit){
        PostList.pop();
        
    }
    PostList = ifInit?[]:PostList;
    PostList.push(childSnapshot.val());
    console.log(!(counter==1&&!ifInit))
    html+= !(counter==1&&!ifInit)?
           `<div class="card" id=${dataEle.id}>
                <img src="${dataEle.image}">
                <div class="container">
                <h4><b>${dataEle.title}</b></h4> 
                <p>${dataEle.description}</p> 
                </div>
           </div>`:''
    counter++;
 
 })
 //This is for you to see the spinning, so I added a timer to execute code later.
  setTimeout(function(){
      $('.loadingSign').hide();
      ifInit?content.html(html):content.append(html);
      lock =false;
      content.find('#temLoad').remove();
    },3000)
}