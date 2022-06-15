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
                   <div style="text-decoration: none; color: #fff; width: 100%; padding: 10px; cursor: pointer; display: flex;"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/LS9XYE9urVcj1605084428877.png"/ style="width: 44px; height: auto;" >
                   </div>
                   <div id="e1" onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="Active Passive"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/4dnzmSDugrwW1622800597860.png"/>
                   </div>
                   <div  id="e2"onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="Asset Allocation"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/peOgkPdE8n0A1622800752931.png"/>
                       </div>
                   <div id="e3" onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="Economics"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/FPloPRu3LmfA1622800812350.png"/>
                   </div>
                   <div id="e4" onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="Investor Behaviour"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/sULHcUPQH5RL1622800858305.png"/>
                   </div>
                   <div id="e5" onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="ISG"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png"/>
                   </div>
                   <div id="e6" onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="Retirement Planning"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/o2BBDya1HiQT1622800956549.png"/>
                   </div>
                   <div id="e7" onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="Strategic Communications"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/GnxBWRVeIm6i1622800692538.png"/>
                   </div>
                   <div id="e8" onclick="dynamicHeaderTitle(event)" class="side-bar-icon-box" title="VCMM Capital Markets"> 
                       <img class="sidebar-img-icon" src="https://cdn.yellowmessenger.com/g6Fdrr5NeUj01622800983140.png"/>
                   </div>
               </ul>
           </div>
           <div class="overflow-container-header">
               <ul class="header-wrapper">
                   <div class="header-title" id="main-header-title" style="font-weight: 700; font-size: large;color: black;">AskISG</div>
                   <div style="display:flex;align-items:center;">
                        <div id="e11" class="icons-box"> 
                            <span class="header-bar-icon-box" title="minimize">-</span>
                        </div>
                        <div id="e10" style="cursor:pointer;"> 
                        <span class="header-bar-icon-box" title="maxamize"><img src="https://cdn.yellowmessenger.com/m65zoVM7Si3s1624952263631.png" style="width: 1.7rem; height: 20px;" /></span>
                        </div>
                        <div id="e9" class="icons-box"> 
                            <span class="header-bar-icon-box" title="Close">x</span>
                        </div>
                   </div>
               </ul>
           </div>
           </div> ` 
                       
           ); }
            catch(e) { 
               console.log("failing while trying to insert add frame script", e); 
           } 
})(); 

function dynamicHeaderTitle(e) { 
   e.preventDefault(); 
   var title = e.srcElement.getAttribute("title"); 
   // document.getElementById("main-header-title").textContent = title; 
}

document.getElementById('e1').onclick = function () {
   document.getElementById('main-header-title').innerHTML='Active Passive'
   parent.postMessage("ACTIVE", "*")
};

document.getElementById('e2').onclick = function () {
   document.getElementById('main-header-title').innerHTML='Asset Allocation'
   parent.postMessage("ASSET", "*")
};

document.getElementById('e3').onclick = function () {
   document.getElementById('main-header-title').innerHTML='Economics'
   parent.postMessage("ECON", "*")
};

document.getElementById('e4').onclick = function () {
   document.getElementById('main-header-title').innerHTML='Investor Behaviour'
   parent.postMessage("INVESTOR", "*")
};

document.getElementById('e5').onclick = function () {
   document.getElementById('main-header-title').innerHTML='ISG'
   parent.postMessage("ISG", "*")
};

document.getElementById('e6').onclick = function () {
   document.getElementById('main-header-title').innerHTML='Retirement Planning'
   parent.postMessage("RETIREMENT", "*")
};

document.getElementById('e7').onclick = function () {
   document.getElementById('main-header-title').innerHTML='Strategic Communications'
   parent.postMessage("STRAT-COM", "*")
};

document.getElementById('e8').onclick = function () {
   document.getElementById('main-header-title').innerHTML='VCMM Capital Markets'
   parent.postMessage("VCMM", "*")
};

document.getElementById('e9').onclick = function () {
    parent.postMessage("CLOSE", "*")
};

document.getElementById('e10').onclick = function () {
    parent.postMessage("Maxamize", "*")
};

document.getElementById('e11').onclick = function () {
    parent.postMessage("MINIMIZE", "*")
};