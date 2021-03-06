(function addFrames () {
    try { 
       window.onresize=function(event){
           var frameHeight=window.innerHeight-104-48;
           document.getElementById("chatBoxMainContainer").style.height=`${frameHeight}px`
       };
       document.getElementById('player').style.width= '0px'
       document.querySelector('#chatContainer').insertAdjacentHTML( 
        'afterbegin', 
        `<div class="mod-head-side-bar-container">
           <div class="overflow-container-sidebar">
               <ul class="sidebar-wrapper">
                  <iframe style="width:100%; height:100%; border: none;"  src="https://ghost-tt.github.io/gsk/index.html"></iframe>
               </ul>
           </div>
           </div> ` 
                       
           ); }
            catch(e) { 
               console.log("failing while trying to insert add frame script", e); 
           } 
})(); 

window.addEventListener('message', function (eventData) {
    let parsedEventData = JSON.parse(eventData.data);
    console.error('parsedEventData~~~~>>', parsedEventData)
    if(parsedEventData.event_code === "welcome" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'welcome-screen-child',
            data: parsedEventData.data
        }), '*');
    }

    if(parsedEventData.event_code === "terms_and_conditions" && parsedEventData.data) {
        document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
            event_code: 'termsui-screen-child',
            data: parsedEventData.data
        }), '*');
    }
});

// window.addEventListener('message', function(eventData) {
//     // console.log('eventData---', eventData);
//     let parsedData = JSON.parse(eventData.data)
//     console.log('parsedData~~~~~~~~~>',parsedData);
//     console.log('addFrame :parsedData.data~~~~~~~~~~>>', parsedData.data)
//     if(parsedData.event_code === "welcome" && parsedData.data) {
//         console.log('Successfull Event passed addFrame: Welcome');
//         document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
//             event_code: 'pass-event-iframe',
//             data: parsedData.data
//         }), '*');
//     }

//     if(parsedData.event_code === "terms_and_conditions" && parsedData.data) {
//         console.log('Successfull Event passed addFrame: terms and condition');
//         document.querySelector("iframe").contentWindow.postMessage(JSON.stringify({
//             event_code: 'pass-event-iframe',
//             data: parsedData.data
//         }), '*');
//     }
    
// }, false);

// function dynamicHeaderTitle(e) { 
//    e.preventDefault(); 
//    var title = e.srcElement.getAttribute("title"); 
//    // document.getElementById("main-header-title").textContent = title; 
// }

// document.getElementById('e1').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='Active Passive'
//    parent.postMessage("ACTIVE", "*")
// };

// document.getElementById('e2').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='Asset Allocation'
//    parent.postMessage("ASSET", "*")
// };

// document.getElementById('e3').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='Economics'
//    parent.postMessage("ECON", "*")
// };

// document.getElementById('e4').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='Investor Behaviour'
//    parent.postMessage("INVESTOR", "*")
// };

// document.getElementById('e5').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='ISG'
//    parent.postMessage("ISG", "*")
// };

// document.getElementById('e6').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='Retirement Planning'
//    parent.postMessage("RETIREMENT", "*")
// };

// document.getElementById('e7').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='Strategic Communications'
//    parent.postMessage("STRAT-COM", "*")
// };

// document.getElementById('e8').onclick = function () {
//    document.getElementById('main-header-title').innerHTML='VCMM Capital Markets'
//    parent.postMessage("VCMM", "*")
// };

// document.getElementById('e9').onclick = function () {
//     parent.postMessage("CLOSE", "*")
// };

// document.getElementById('e10').onclick = function () {
//     parent.postMessage("Maxamize", "*")
// };

// document.getElementById('e11').onclick = function () {
//     parent.postMessage("MINIMIZE", "*")
// };