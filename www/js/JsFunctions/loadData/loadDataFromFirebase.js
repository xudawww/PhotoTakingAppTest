function InitLoad(content){
  //Listen the init listen on db or any update on db
  database.ref('posts/').on('value',(snapshot) => {
    database.ref('posts/').limitToFirst(8).once('value', (snapshot) => {

        loadFrontend(snapshot,content,true);
      });
})  
}
function nextPageLoad(lastId,content){
    //Last id is the last post id, and we deliver content to fill some data later
    database.ref('posts/').orderByChild("id").startAt(lastId).limitToFirst(9).once('value', (snapshot) => {
      //When the data gotten is less than 9, which means there is no next page.
      if(snapshot.numChildren()<9){
        stopPaging = true; 
      }
      loadFrontend(snapshot,content,false);
  });


}