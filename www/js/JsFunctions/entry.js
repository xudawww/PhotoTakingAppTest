let lock = false;
let stopPaging = false;
let PostList=[];
//Entry file to listen all events
window.addEventListener('load',function(){
  //Event for menu style changes
  $('.MenuItem').on('click',adjustMenu)
  //Event for submit the input data
  $('#uploadInfo').on('click', submit)
  //Load all data from firebase, here it only loads 8 posts.
  InitLoad($('#PostsPage'));
  //Listen the scrollng down event, when it scrolls down, it will go to next page.
  $('#PostsPage').on('scroll',function(){
     if($(this).children().first().attr('class')=='card')
     {   
         if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
              if(!lock&&!stopPaging){
                 lock = true;
                 nextPageLoad(PostList[PostList.length-1].id,$(this));
                }

        }
     }



  })
})
document.addEventListener("deviceready", function(){picTaken();})