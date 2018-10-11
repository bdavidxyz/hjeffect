// // Place all the behaviors and hooks related to the matching controller here.
// // All this logic will automatically be available in application.js.
// if (_.get(window, 'hj')) {
//   // ok, hotjar loaded, do nothing
// } else {
//   //load hotjar
//   (function(h,o,t,j,a,r){
//     h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
//     h._hjSettings={hjid:1046326,hjsv:6};
//     a=o.getElementsByTagName('head')[0];
//     r=o.createElement('script');r.async=1;
//     r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
//     a.appendChild(r);
//   })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
// }


window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
}, false)
