(function injectJS() {
    try {        
        var iFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];         
        var modularBars = document.createElement('script');
        modularBars.type = 'text/javascript';
        modularBars.src = 'https://staging.yellowmessenger.com/components/public/webviews/vanguard/assets/js/addFrame.js';
        iFrameHead.appendChild(modularBars);
        injectDynamicCssToParent();
        injectDynamicCssToChild();
    } catch(e) {
        console.error("failed while inserting to iFrame", e);
    }
})();


function injectDynamicCssToChild() {
    var ymFrameHead = window.frames["ymIframe"].document.getElementsByTagName("head")[0];  
    var modularStyles = document.createElement('style');
    modularStyles.type = 'text/css';

     var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 3rem 0 0 4rem;}*{margin:0;padding:0}.mod-head-side-bar-container .overflow-container-sidebar{position:absolute;top:0;left:0;right:0;bottom:0;}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper{display:flex;flex-direction:column;justify-content:center;background-color:#fff;padding:0;width:4rem;list-style:none;height:calc(100% - 91px);justify-content:space-between;border:.5px solid #ccc}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box{text-decoration:none;color:#fff;padding:5px;cursor:pointer;display:flex}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box:hover{background:#caf7e3;border-right:3px solid #39a6a3}.mod-head-side-bar-container .overflow-container-sidebar .sidebar-wrapper .side-bar-icon-box .sidebar-img-icon{width:3.5rem;height:auto;pointer-events:none;}.mod-head-side-bar-container .overflow-container-header{position:fixed;top:0;right:0;width:calc(100% - 4rem - 2px);z-index:99999}.mod-head-side-bar-container .overflow-container-header .header-wrapper{display:flex;flex-direction:row;align-items:center;justify-content:space-between;background-color:#fff;padding:0;list-style:none;height:3rem;border:.5px solid #ccc;border-left:0}.mod-head-side-bar-container .overflow-container-header .header-wrapper .header-title{font-size:16px;font-weight:600;color:#999;padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box{padding:0 1rem}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box{color:#000;font-weight:900;font-size:20px;width:100%;padding-left:.5rem;cursor:pointer}.mod-head-side-bar-container .overflow-container-header .header-wrapper .icons-box .header-bar-icon-box .header-icons{width:1.2rem;height:auto} .message-icons.live-chat .noPaddingLeft.cardsNoBotPersona { width:100%}  @media only screen and (min-width: 768px) {.cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} } ' ;
    // var css = '#chatBoxMainContainer.message-icons.live-chat { margin: 3rem 0 0 4rem; }';
    if (modularStyles.styleSheet) {
      modularStyles.styleSheet.cssText = css;
    } else {
      modularStyles.appendChild(document.createTextNode(css));
    }
    ymFrameHead.appendChild(modularStyles);
}

function injectDynamicCssToParent() {
    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
    var parentStyles = document.createElement('style');
    parentStyles.type = 'text/css';

    var parentCssStyles = '#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 440px; } }';
    if (parentStyles.styleSheet) {
      parentStyles.styleSheet.cssText = parentCssStyles;
    } else {
      parentStyles.appendChild(document.createTextNode(parentCssStyles));
    }
    parentCssHead.appendChild(parentStyles);
}

window.addEventListener('message', function(eventData) {
    console.log('onload---->')
    console.log(eventData);
    try{

        console.error( 'Data----------------->>>',eventData.data);
        if(eventData.data == 'VEMO') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "VEMO",
                     data: ""
                    }
                }
           }, '*');
           return;
        }


        if(eventData.data == 'ACTIVE') {
            console.log('In Custom js')
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ACTIVE",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'ASSET') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ASSET",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'ECON') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ECON",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'INVESTOR') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "INVESTOR",
                     data: ""
                    }
                }
           }, '*');
           return;
        }


        if(eventData.data == 'ISG') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "ISG",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'RETIREMENT') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "RETIREMENT",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'STRAT-COM') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "STRAT-COM",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        if(eventData.data == 'VCMM') {
            document.getElementById('ymIframe').contentWindow.postMessage({
                event_code: 'ym-client-event',
                data: {
                    event: {
                     code: "VCMM",
                     data: ""
                    }
                }
           }, '*');
           return;
        }

        

        if(eventData.data == 'CLOSE') {
            window.YellowMessengerPlugin.closeBot();
        }


        if(eventData.data == 'Maxamize') {
            (function injectJS() {
                try {        
                    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
                    var parentStyles = document.createElement('style');
                    parentStyles.type = 'text/css';

                    var parentCssStyles = '#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 880px; } .cards.slick-initialized .slick-slide {height: auto;border-radius: 10px;position: relative;margin-bottom: 10px;overflow: hidden;/* width: 300px; */max-width: none; min-width: none; display: inline-block !important;width: 700px;padding-bottom: 0px !important;margin-right: 10px !important;box-shadow: rgb(0 0 0 / 10%) 0px 1px 3px 0px, rgb(0 0 0 / 10%) 0px 0px 1px 0px !important;} }';

                    if (parentStyles.styleSheet) {
                    parentStyles.styleSheet.cssText = parentCssStyles;
                    } else {
                    parentStyles.appendChild(document.createTextNode(parentCssStyles));
                    }
                    parentCssHead.appendChild(parentStyles);
                } catch(e) {
                    console.error("failed while inserting to iFrame", e);
                }
            })();
        }


        if(eventData.data == 'MINIMIZE') {
            (function injectJS() {
                try {        
                    var parentCssHead = document.head || document.getElementsByTagName('head')[0];
                    var parentStyles = document.createElement('style');
                    parentStyles.type = 'text/css';

                    var parentCssStyles = '#ymFrameHolder { width: 100%; } @media only screen and (min-width: 768px) { #ymFrameHolder { width: 440px; } }';
                    if (parentStyles.styleSheet) {
                    parentStyles.styleSheet.cssText = parentCssStyles;
                    } else {
                    parentStyles.appendChild(document.createTextNode(parentCssStyles));
                    }
                    parentCssHead.appendChild(parentStyles);
                } catch(e) {
                    console.error("failed while inserting to iFrame", e);
                }
            })();
        }

        // if(eventData.data == 'MINIMIZE') {
        //     document.getElementById('ymIframe').style.display ="none"
        // }
        
    }catch(error){
        console.log(error);
        return;
    }
    
}, false);