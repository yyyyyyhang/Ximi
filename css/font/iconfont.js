(function(window){var svgSprite="<svg>"+""+'<symbol id="icon-houtuiqianjin" viewBox="0 0 1024 1024">'+""+'<path d="M736.268 811.472l-287.995-287.941 287.994-290.448-82.683-81.975-369.802 372.955 41.179 40.826 328.98 328.919z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-tiaozhuan" viewBox="0 0 1024 1024">'+""+'<path d="M512 0c-283.733333 0-512 228.266667-512 512s228.266667 512 512 512 512-228.266667 512-512-228.266667-512-512-512z m-87.466667 840.533333l-66.133333-66.133333 256-256-262.4-262.4 66.133333-66.133333 328.533334 328.533333-322.133334 322.133333z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-houtuiqianjin1" viewBox="0 0 1024 1024">'+""+'<path d="M287.732 212.528l287.995 287.941-287.994 290.448 82.683 81.975 369.802-372.956-41.179-40.826-328.98-328.919z"  ></path>'+""+"</symbol>"+""+'<symbol id="icon-dingbuxiala" viewBox="0 0 1792 1024">'+""+'<path d="M1645.5208333333308 954.1458333333333l-743.9765625000003-836.8945312499995L168.95833333333346 958.4700520833334z"  ></path>'+""+"</symbol>"+""+"</svg>";var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)