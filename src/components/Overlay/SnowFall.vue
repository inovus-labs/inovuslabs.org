
<template>
    <div id="snowfall" class="absolute inset-0 z-50 flex items-center justify-center w-full pointer-events-none overflow-hidden" style="height:200%;">
        <div class='snow-flakes'>

            <template v-for="i in 150">

                <div v-if="isMobile" class='flake' :style="{ fontSize: Math.random() * 4 + 1.5 + 'vw' }">❄</div>
                <div v-else class='flake' :style="{ fontSize: Math.random() * 1.5 + 0.5 + 'vw' }">❄</div>
                
            </template>

        </div>
    </div>
</template>


<script>
    export default {
        name: 'SnowOverlay',
        data() {
            return {
                isMobile: false,
            }
        },

        mounted() {
            var snowStorm=null;function SnowStorm(){this.flakesMax=128,this.flakesMaxActive=64,this.animationInterval=33,this.flakeBottom=null,this.targetElement=null,this.followMouse=true,this.snowColor="#fff",this.snowCharacter="&bull;",this.snowStick=!0,this.useMeltEffect=!0,this.useTwinkleEffect=!1,this.usePositionFixed=!1,this.flakeLeftOffset=0,this.flakeRightOffset=0,this.flakeWidth=8,this.flakeHeight=8,this.vMaxX=5,this.vMaxY=4,this.zIndex=0;var e=void 0===window.attachEvent?function(e,t,i){return e.addEventListener(t,i,!1)}:function(e,t,i){return e.attachEvent("on"+t,i)},t=void 0===window.attachEvent?function(e,t,i){return e.removeEventListener(t,i,!1)}:function(e,t,i){return e.detachEvent("on"+t,i)};function i(e,t){return isNaN(t)&&(t=0),Math.random()*e+t}var n=this,o=this;this.timers=[],this.flakes=[],this.disabled=!1,this.active=!1;var s=navigator.userAgent.match(/msie/i),l=navigator.userAgent.match(/msie 6/i),a=s&&(l||navigator.userAgent.match(/msie 5/i)),r=navigator.appVersion.match(/windows 98/i),f=navigator.userAgent.match(/iphone/i),m=!!(s&&"BackCompat"==document.compatMode||l||f),h=null,c=null,d=null,u=null,v=null,k=null,g=1,w=!1,y=function(){try{document.createElement("div").style.opacity="0.5"}catch(e){return!1}return!0}(),p=document.createDocumentFragment();null===n.flakeLeftOffset&&(n.flakeLeftOffset=0),null===n.flakeRightOffset&&(n.flakeRightOffset=0),this.meltFrameCount=20,this.meltFrames=[];for(var x=0;x<this.meltFrameCount;x++)this.meltFrames.push(1-x/this.meltFrameCount);this.randomizeWind=function(){var e;if(e=i(n.vMaxX,.2),v=1==parseInt(i(2),10)?-1*e:e,k=i(n.vMaxY,.2),this.flakes)for(var t=0;t<this.flakes.length;t++)this.flakes[t].active&&this.flakes[t].setVelocities()},this.scrollHandler=function(){if(u=n.flakeBottom?0:parseInt(window.scrollY||document.documentElement.scrollTop||document.body.scrollTop,10),isNaN(u)&&(u=0),!w&&!n.flakeBottom&&n.flakes)for(var e=n.flakes.length;e--;)0===n.flakes[e].active&&n.flakes[e].stick()},this.resizeHandler=function(){window.innerWidth||window.innerHeight?(h=window.innerWidth-(s?2:16)-n.flakeRightOffset,d=n.flakeBottom?n.flakeBottom:window.innerHeight):(h=(document.documentElement.clientWidth||document.body.clientWidth||document.body.scrollWidth)-(s?0:8)-n.flakeRightOffset,d=n.flakeBottom?n.flakeBottom:document.documentElement.clientHeight||document.body.clientHeight||document.body.scrollHeight),c=parseInt(h/2,10)},this.resizeHandlerAlt=function(){h=n.targetElement.offsetLeft+n.targetElement.offsetWidth-n.flakeRightOffset,d=n.flakeBottom?n.flakeBottom:n.targetElement.offsetTop+n.targetElement.offsetHeight,c=parseInt(h/2,10)},this.freeze=function(){if(n.disabled)return!1;n.disabled=1;for(var e=n.timers.length;e--;)clearInterval(n.timers[e])},this.resume=function(){if(!n.disabled)return!1;n.disabled=0,n.timerInit()},this.toggleSnow=function(){n.flakes.length?(n.active=!n.active,n.active?(n.show(),n.resume()):(n.stop(),n.freeze())):n.start()},this.stop=function(){this.freeze();for(var e=this.flakes.length;e--;)this.flakes[e].o.style.display="none";t(window,"scroll",n.scrollHandler),t(window,"resize",n.resizeHandler),a||(t(window,"blur",n.freeze),t(window,"focus",n.resume))},this.show=function(){for(var e=this.flakes.length;e--;)this.flakes[e].o.style.display="block"},this.SnowFlake=function(e,t,n,o){var s=this,l=e;this.type=t,this.x=n||parseInt(i(h-20),10),this.y=isNaN(o)?-i(d)-12:o,this.vX=null,this.vY=null,this.vAmpTypes=[1,1.2,1.4,1.6,1.8],this.vAmp=this.vAmpTypes[this.type],this.melting=!1,this.meltFrameCount=l.meltFrameCount,this.meltFrames=l.meltFrames,this.meltFrame=0,this.twinkleFrame=0,this.active=1,this.fontSize=10+this.type/5*10,this.o=document.createElement("div"),this.o.innerHTML=l.snowCharacter,this.o.style.color=l.snowColor,this.o.style.position=w?"fixed":"absolute",this.o.style.width=l.flakeWidth+"px",this.o.style.height=l.flakeHeight+"px",this.o.style.fontFamily="arial,verdana",this.o.style.overflow="hidden",this.o.style.fontWeight="normal",this.o.style.zIndex=l.zIndex,p.appendChild(this.o),this.refresh=function(){if(isNaN(s.x)||isNaN(s.y))return!1;s.o.style.left=s.x+"px",s.o.style.top=s.y+"px"},this.stick=function(){m||l.targetElement!=document.documentElement&&l.targetElement!=document.body?s.o.style.top=d+u-l.flakeHeight+"px":l.flakeBottom?s.o.style.top=l.flakeBottom+"px":(s.o.style.display="none",s.o.style.top="auto",s.o.style.bottom="0px",s.o.style.position="fixed",s.o.style.display="block")},this.vCheck=function(){s.vX>=0&&s.vX<.2?s.vX=.2:s.vX<0&&s.vX>-.2&&(s.vX=-.2),s.vY>=0&&s.vY<.2&&(s.vY=.2)},this.move=function(){var e=s.vX*g;s.x+=e,s.y+=s.vY*s.vAmp,s.x>=h||h-s.x<l.flakeWidth?s.x=0:e<0&&s.x-l.flakeLeftOffset<0-l.flakeWidth&&(s.x=h-l.flakeWidth-1),s.refresh(),d+u-s.y<l.flakeHeight?(s.active=0,l.snowStick?s.stick():s.recycle()):(l.useMeltEffect&&s.active&&s.type<3&&!s.melting&&Math.random()>.998&&(s.melting=!0,s.melt()),l.useTwinkleEffect&&(s.twinkleFrame?(s.twinkleFrame--,s.o.style.visibility=s.twinkleFrame&&s.twinkleFrame%2==0?"hidden":"visible"):Math.random()>.9&&(s.twinkleFrame=parseInt(20*Math.random(),10))))},this.animate=function(){s.move()},this.setVelocities=function(){s.vX=v+i(.12*l.vMaxX,.1),s.vY=k+i(.12*l.vMaxY,.1)},this.setOpacity=function(e,t){if(!y)return!1;e.style.opacity=t},this.melt=function(){l.useMeltEffect&&s.melting&&s.meltFrame<s.meltFrameCount?(s.meltFrame++,s.setOpacity(s.o,s.meltFrames[s.meltFrame]),s.o.style.fontSize=s.fontSize-s.fontSize*(s.meltFrame/s.meltFrameCount)+"px",s.o.style.lineHeight=l.flakeHeight+2+.75*l.flakeHeight*(s.meltFrame/s.meltFrameCount)+"px"):s.recycle()},this.recycle=function(){s.o.style.display="none",s.o.style.position=w?"fixed":"absolute",s.o.style.bottom="auto",s.setVelocities(),s.vCheck(),s.meltFrame=0,s.melting=!1,s.setOpacity(s.o,1),s.o.style.padding="0px",s.o.style.margin="0px",s.o.style.fontSize=s.fontSize+"px",s.o.style.lineHeight=l.flakeHeight+2+"px",s.o.style.textAlign="center",s.o.style.verticalAlign="baseline",s.x=parseInt(i(h-l.flakeWidth-20),10),s.y=parseInt(-1*i(d),10)-l.flakeHeight,s.refresh(),s.o.style.display="block",s.active=1},this.recycle(),this.refresh()},this.snow=function(){for(var e=0,t=null,o=n.flakes.length;o--;)1==n.flakes[o].active?(n.flakes[o].move(),e++):0===n.flakes[o].active?0:0,n.flakes[o].melting&&n.flakes[o].melt();e<n.flakesMaxActive&&0===(t=n.flakes[parseInt(i(n.flakes.length),10)]).active&&(t.melting=!0)},this.mouseMove=function(e){if(!n.followMouse)return!0;var t=parseInt(e.clientX,10);g=t<c?t/c*2-2:(t-=c)/c*2},this.createSnow=function(e,t){for(var s=0;s<e;s++)n.flakes[n.flakes.length]=new n.SnowFlake(n,parseInt(i(6),10)),(t||s>n.flakesMaxActive)&&(n.flakes[n.flakes.length-1].active=-1);o.targetElement.appendChild(p)},this.timerInit=function(){n.timers=r?[setInterval(n.snow,3*n.animationInterval),setInterval(n.snow,n.animationInterval)]:[setInterval(n.snow,n.animationInterval)]},this.init=function(){n.randomizeWind(),n.createSnow(n.flakesMax),e(window,"resize",n.resizeHandler),e(window,"scroll",n.scrollHandler),a||(e(window,"blur",n.freeze),e(window,"focus",n.resume)),n.resizeHandler(),n.scrollHandler(),n.followMouse&&e(document,"mousemove",n.mouseMove),n.animationInterval=Math.max(20,n.animationInterval),n.timerInit()};var E=!1;function F(){n.start(!0)}this.start=function(e){if(E){if(e)return!0}else E=!0;if("string"==typeof n.targetElement){var t=n.targetElement;if(n.targetElement=document.getElementById(t),!n.targetElement)throw new Error('Snowstorm: Unable to get targetElement "'+t+'"')}n.targetElement||(n.targetElement=s?document.body:document.documentElement?document.documentElement:document.body),n.targetElement!=document.documentElement&&n.targetElement!=document.body&&(n.resizeHandler=n.resizeHandlerAlt),n.resizeHandler(),n.usePositionFixed=n.usePositionFixed&&!m,w=n.usePositionFixed,h&&d&&!n.disabled&&(n.init(),n.active=!0)},document.addEventListener?(document.addEventListener("DOMContentLoaded",F,!1),window.addEventListener("load",F,!1)):e(window,"load",F)}snowStorm=new SnowStorm;
            this.checkMobile();
            window.addEventListener('resize', this.checkMobile);
        },

        beforeDestroy() {
            window.removeEventListener('resize', this.checkMobile);
        },

        methods: {
            checkMobile() {
                if (window.innerWidth <= 768) {
                    this.isMobile = true;
                } else {
                    this.isMobile = false;
                }
            },
        },
    }
</script>


<style>


    .flake {
        color: #4CA3FF;
        border-radius: 100%;
        position: absolute;
        top: -10vh;
        padding: 1vw;
    }

    .flake:nth-child(1) {
        animation: snow 19s linear 40s infinite normal backwards;
        left: 79%;
        opacity: 0.71;
        padding: 0.11vw;
    }

    .flake:nth-child(2) {
        animation: snow 19s linear 10s infinite normal backwards;
        left: 57%;
        opacity: 1.1;
        padding: 0.34vw;
    }

    .flake:nth-child(3) {
        animation: snow 14s linear 15s infinite normal backwards;
        left: 5%;
        opacity: 0.82;
        padding: 0.12vw;
    }

    .flake:nth-child(4) {
        animation: snow 14s linear 30s infinite normal backwards;
        left: 95%;
        opacity: 0.32;
        padding: 0.28vw;
    }

    .flake:nth-child(5) {
        animation: snow 12s linear 8s infinite normal backwards;
        left: 54%;
        opacity: 0.48;
        padding: 0.41vw;
    }

    .flake:nth-child(6) {
        animation: snow 16s linear 30s infinite normal backwards;
        left: 20%;
        opacity: 0.64;
        padding: 0.28vw;
    }

    .flake:nth-child(7) {
        animation: snow 12s linear 36s infinite normal backwards;
        left: 20%;
        opacity: 0.28;
        padding: 0.34vw;
    }

    .flake:nth-child(8) {
        animation: snow 13s linear 3s infinite normal backwards;
        left: 62%;
        opacity: 0.55;
        padding: 0.14vw;
    }

    .flake:nth-child(9) {
        animation: snow 18s linear 44s infinite normal backwards;
        left: 65%;
        opacity: 0.6;
        padding: 0.32vw;
    }

    .flake:nth-child(10) {
        animation: snow 16s linear 32s infinite normal backwards;
        left: 90%;
        opacity: 0.55;
        padding: 0.18vw;
    }

    .flake:nth-child(11) {
        animation: snow 14s linear 50s infinite normal backwards;
        left: 6%;
        opacity: 0.98;
        padding: 0.39vw;
    }

    .flake:nth-child(12) {
        animation: snow 11s linear 22s infinite normal backwards;
        left: 93%;
        opacity: 0.51;
        padding: 0.2vw;
    }

    .flake:nth-child(13) {
        animation: snow 13s linear 8s infinite normal backwards;
        left: 61%;
        opacity: 0.21;
        padding: 0.47vw;
    }

    .flake:nth-child(14) {
        animation: snow 15s linear 43s infinite normal backwards;
        left: 19%;
        opacity: 0.46;
        padding: 0.25vw;
    }

    .flake:nth-child(15) {
        animation: snow 11s linear 13s infinite normal backwards;
        left: 94%;
        opacity: 0.83;
        padding: 0.29vw;
    }

    .flake:nth-child(16) {
        animation: snow 19s linear 15s infinite normal backwards;
        left: 92%;
        opacity: 0.83;
        padding: 0.28vw;
    }

    .flake:nth-child(17) {
        animation: snow 19s linear 30s infinite normal backwards;
        left: 14%;
        opacity: 0.3;
        padding: 0.36vw;
    }

    .flake:nth-child(18) {
        animation: snow 20s linear 41s infinite normal backwards;
        left: 46%;
        opacity: 1.07;
        padding: 0.16vw;
    }

    .flake:nth-child(19) {
        animation: snow 15s linear 7s infinite normal backwards;
        left: 46%;
        opacity: 1.03;
        padding: 0.29vw;
    }

    .flake:nth-child(20) {
        animation: snow 14s linear 7s infinite normal backwards;
        left: 40%;
        opacity: 1.08;
        padding: 0.13vw;
    }

    .flake:nth-child(21) {
        animation: snow 16s linear 18s infinite normal backwards;
        left: 1%;
        opacity: 0.29;
        padding: 0.46vw;
    }

    .flake:nth-child(22) {
        animation: snow 16s linear 3s infinite normal backwards;
        left: 35%;
        opacity: 0.64;
        padding: 0.25vw;
    }

    .flake:nth-child(23) {
        animation: snow 19s linear 45s infinite normal backwards;
        left: 9%;
        opacity: 0.39;
        padding: 0.3vw;
    }

    .flake:nth-child(24) {
        animation: snow 17s linear 40s infinite normal backwards;
        left: 73%;
        opacity: 0.4;
        padding: 0.2vw;
    }

    .flake:nth-child(25) {
        animation: snow 13s linear 10s infinite normal backwards;
        left: 78%;
        opacity: 0.4;
        padding: 0.28vw;
    }

    .flake:nth-child(26) {
        animation: snow 20s linear 6s infinite normal backwards;
        left: 23%;
        opacity: 0.77;
        padding: 0.44vw;
    }

    .flake:nth-child(27) {
        animation: snow 14s linear 17s infinite normal backwards;
        left: 46%;
        opacity: 0.36;
        padding: 0.11vw;
    }

    .flake:nth-child(28) {
        animation: snow 15s linear 14s infinite normal backwards;
        left: 35%;
        opacity: 0.85;
        padding: 0.31vw;
    }

    .flake:nth-child(29) {
        animation: snow 16s linear 47s infinite normal backwards;
        left: 59%;
        opacity: 0.85;
        padding: 0.29vw;
    }

    .flake:nth-child(30) {
        animation: snow 11s linear 48s infinite normal backwards;
        left: 98%;
        opacity: 0.51;
        padding: 0.26vw;
    }

    .flake:nth-child(31) {
        animation: snow 20s linear 7s infinite normal backwards;
        left: 98%;
        opacity: 0.15;
        padding: 0.39vw;
    }

    .flake:nth-child(32) {
        animation: snow 19s linear 44s infinite normal backwards;
        left: 34%;
        opacity: 0.54;
        padding: 0.37vw;
    }

    .flake:nth-child(33) {
        animation: snow 11s linear 8s infinite normal backwards;
        left: 14%;
        opacity: 1.1;
        padding: 0.37vw;
    }

    .flake:nth-child(34) {
        animation: snow 14s linear 28s infinite normal backwards;
        left: 34%;
        opacity: 0.36;
        padding: 0.5vw;
    }

    .flake:nth-child(35) {
        animation: snow 16s linear 21s infinite normal backwards;
        left: 87%;
        opacity: 0.72;
        padding: 0.19vw;
    }

    .flake:nth-child(36) {
        animation: snow 17s linear 18s infinite normal backwards;
        left: 58%;
        opacity: 0.48;
        padding: 0.34vw;
    }

    .flake:nth-child(37) {
        animation: snow 11s linear 49s infinite normal backwards;
        left: 35%;
        opacity: 0.42;
        padding: 0.48vw;
    }

    .flake:nth-child(38) {
        animation: snow 13s linear 29s infinite normal backwards;
        left: 8%;
        opacity: 0.96;
        padding: 0.5vw;
    }

    .flake:nth-child(39) {
        animation: snow 15s linear 43s infinite normal backwards;
        left: 36%;
        opacity: 0.41;
        padding: 0.24vw;
    }

    .flake:nth-child(40) {
        animation: snow 13s linear 46s infinite normal backwards;
        left: 18%;
        opacity: 0.13;
        padding: 0.15vw;
    }

    .flake:nth-child(41) {
        animation: snow 14s linear 22s infinite normal backwards;
        left: 34%;
        opacity: 0.86;
        padding: 0.46vw;
    }

    .flake:nth-child(42) {
        animation: snow 19s linear 3s infinite normal backwards;
        left: 66%;
        opacity: 0.82;
        padding: 0.11vw;
    }

    .flake:nth-child(43) {
        animation: snow 15s linear 46s infinite normal backwards;
        left: 75%;
        opacity: 0.69;
        padding: 0.26vw;
    }

    .flake:nth-child(44) {
        animation: snow 14s linear 12s infinite normal backwards;
        left: 55%;
        opacity: 0.33;
        padding: 0.39vw;
    }

    .flake:nth-child(45) {
        animation: snow 16s linear 33s infinite normal backwards;
        left: 95%;
        opacity: 0.19;
        padding: 0.47vw;
    }

    .flake:nth-child(46) {
        animation: snow 16s linear 15s infinite normal backwards;
        left: 72%;
        opacity: 0.2;
        padding: 0.48vw;
    }

    .flake:nth-child(47) {
        animation: snow 16s linear 8s infinite normal backwards;
        left: 61%;
        opacity: 0.39;
        padding: 0.49vw;
    }

    .flake:nth-child(48) {
        animation: snow 12s linear 21s infinite normal backwards;
        left: 15%;
        opacity: 0.29;
        padding: 0.42vw;
    }

    .flake:nth-child(49) {
        animation: snow 17s linear 26s infinite normal backwards;
        left: 16%;
        opacity: 0.52;
        padding: 0.45vw;
    }

    .flake:nth-child(50) {
        animation: snow 11s linear 42s infinite normal backwards;
        left: 67%;
        opacity: 1.01;
        padding: 0.16vw;
    }

    .flake:nth-child(51) {
        animation: snow 11s linear 29s infinite normal backwards;
        left: 58%;
        opacity: 0.16;
        padding: 0.3vw;
    }

    .flake:nth-child(52) {
        animation: snow 14s linear 33s infinite normal backwards;
        left: 85%;
        opacity: 1.04;
        padding: 0.2vw;
    }

    .flake:nth-child(53) {
        animation: snow 14s linear 10s infinite normal backwards;
        left: 15%;
        opacity: 0.92;
        padding: 0.35vw;
    }

    .flake:nth-child(54) {
        animation: snow 17s linear 44s infinite normal backwards;
        left: 88%;
        opacity: 0.29;
        padding: 0.25vw;
    }

    .flake:nth-child(55) {
        animation: snow 17s linear 20s infinite normal backwards;
        left: 55%;
        opacity: 0.27;
        padding: 0.26vw;
    }

    .flake:nth-child(56) {
        animation: snow 15s linear 27s infinite normal backwards;
        left: 97%;
        opacity: 0.99;
        padding: 0.33vw;
    }

    .flake:nth-child(57) {
        animation: snow 13s linear 31s infinite normal backwards;
        left: 72%;
        opacity: 1.1;
        padding: 0.13vw;
    }

    .flake:nth-child(58) {
        animation: snow 11s linear 6s infinite normal backwards;
        left: 69%;
        opacity: 0.99;
        padding: 0.15vw;
    }

    .flake:nth-child(59) {
        animation: snow 11s linear 23s infinite normal backwards;
        left: 46%;
        opacity: 0.9;
        padding: 0.19vw;
    }

    .flake:nth-child(60) {
        animation: snow 19s linear 16s infinite normal backwards;
        left: 34%;
        opacity: 1.08;
        padding: 0.15vw;
    }

    .flake:nth-child(61) {
        animation: snow 17s linear 21s infinite normal backwards;
        left: 4%;
        opacity: 1.04;
        padding: 0.43vw;
    }

    .flake:nth-child(62) {
        animation: snow 18s linear 3s infinite normal backwards;
        left: 80%;
        opacity: 0.26;
        padding: 0.16vw;
    }

    .flake:nth-child(63) {
        animation: snow 12s linear 34s infinite normal backwards;
        left: 19%;
        opacity: 0.9;
        padding: 0.36vw;
    }

    .flake:nth-child(64) {
        animation: snow 17s linear 7s infinite normal backwards;
        left: 69%;
        opacity: 0.63;
        padding: 0.29vw;
    }

    .flake:nth-child(65) {
        animation: snow 15s linear 36s infinite normal backwards;
        left: 20%;
        opacity: 0.16;
        padding: 0.49vw;
    }

    .flake:nth-child(66) {
        animation: snow 12s linear 6s infinite normal backwards;
        left: 29%;
        opacity: 0.81;
        padding: 0.45vw;
    }

    .flake:nth-child(67) {
        animation: snow 14s linear 22s infinite normal backwards;
        left: 2%;
        opacity: 0.69;
        padding: 0.47vw;
    }

    .flake:nth-child(68) {
        animation: snow 16s linear 41s infinite normal backwards;
        left: 8%;
        opacity: 0.44;
        padding: 0.2vw;
    }

    .flake:nth-child(69) {
        animation: snow 18s linear 5s infinite normal backwards;
        left: 14%;
        opacity: 0.79;
        padding: 0.22vw;
    }

    .flake:nth-child(70) {
        animation: snow 20s linear 12s infinite normal backwards;
        left: 25%;
        opacity: 0.23;
        padding: 0.49vw;
    }

    .flake:nth-child(71) {
        animation: snow 20s linear 32s infinite normal backwards;
        left: 43%;
        opacity: 0.65;
        padding: 0.23vw;
    }

    .flake:nth-child(72) {
        animation: snow 15s linear 3s infinite normal backwards;
        left: 25%;
        opacity: 0.42;
        padding: 0.29vw;
    }

    .flake:nth-child(73) {
        animation: snow 16s linear 20s infinite normal backwards;
        left: 9%;
        opacity: 1.01;
        padding: 0.24vw;
    }

    .flake:nth-child(74) {
        animation: snow 12s linear 26s infinite normal backwards;
        left: 64%;
        opacity: 0.55;
        padding: 0.43vw;
    }

    .flake:nth-child(75) {
        animation: snow 19s linear 17s infinite normal backwards;
        left: 85%;
        opacity: 1.08;
        padding: 0.27vw;
    }

    .flake:nth-child(76) {
        animation: snow 18s linear 3s infinite normal backwards;
        left: 100%;
        opacity: 0.63;
        padding: 0.18vw;
    }

    .flake:nth-child(77) {
        animation: snow 14s linear 19s infinite normal backwards;
        left: 98%;
        opacity: 0.35;
        padding: 0.14vw;
    }

    .flake:nth-child(78) {
        animation: snow 13s linear 3s infinite normal backwards;
        left: 79%;
        opacity: 0.25;
        padding: 0.14vw;
    }

    .flake:nth-child(79) {
        animation: snow 18s linear 28s infinite normal backwards;
        left: 72%;
        opacity: 0.49;
        padding: 0.48vw;
    }

    .flake:nth-child(80) {
        animation: snow 19s linear 3s infinite normal backwards;
        left: 79%;
        opacity: 0.19;
        padding: 0.35vw;
    }

    .flake:nth-child(81) {
        animation: snow 13s linear 48s infinite normal backwards;
        left: 14%;
        opacity: 0.66;
        padding: 0.48vw;
    }

    .flake:nth-child(82) {
        animation: snow 15s linear 1s infinite normal backwards;
        left: 3%;
        opacity: 0.72;
        padding: 0.34vw;
    }

    .flake:nth-child(83) {
        animation: snow 15s linear 36s infinite normal backwards;
        left: 42%;
        opacity: 1.08;
        padding: 0.26vw;
    }

    .flake:nth-child(84) {
        animation: snow 14s linear 15s infinite normal backwards;
        left: 98%;
        opacity: 0.41;
        padding: 0.17vw;
    }

    .flake:nth-child(85) {
        animation: snow 18s linear 20s infinite normal backwards;
        left: 99%;
        opacity: 0.86;
        padding: 0.32vw;
    }

    .flake:nth-child(86) {
        animation: snow 20s linear 14s infinite normal backwards;
        left: 43%;
        opacity: 0.27;
        padding: 0.3vw;
    }

    .flake:nth-child(87) {
        animation: snow 14s linear 44s infinite normal backwards;
        left: 64%;
        opacity: 0.83;
        padding: 0.19vw;
    }

    .flake:nth-child(88) {
        animation: snow 16s linear 24s infinite normal backwards;
        left: 11%;
        opacity: 0.83;
        padding: 0.48vw;
    }

    .flake:nth-child(89) {
        animation: snow 13s linear 24s infinite normal backwards;
        left: 62%;
        opacity: 0.26;
        padding: 0.11vw;
    }

    .flake:nth-child(90) {
        animation: snow 18s linear 44s infinite normal backwards;
        left: 72%;
        opacity: 0.92;
        padding: 0.13vw;
    }

    .flake:nth-child(91) {
        animation: snow 13s linear 20s infinite normal backwards;
        left: 72%;
        opacity: 0.71;
        padding: 0.31vw;
    }

    .flake:nth-child(92) {
        animation: snow 20s linear 14s infinite normal backwards;
        left: 80%;
        opacity: 0.69;
        padding: 0.38vw;
    }

    .flake:nth-child(93) {
        animation: snow 11s linear 21s infinite normal backwards;
        left: 47%;
        opacity: 1.01;
        padding: 0.48vw;
    }

    .flake:nth-child(94) {
        animation: snow 15s linear 35s infinite normal backwards;
        left: 51%;
        opacity: 0.85;
        padding: 0.32vw;
    }

    .flake:nth-child(95) {
        animation: snow 11s linear 47s infinite normal backwards;
        left: 85%;
        opacity: 0.97;
        padding: 0.29vw;
    }

    .flake:nth-child(96) {
        animation: snow 18s linear 37s infinite normal backwards;
        left: 54%;
        opacity: 0.25;
        padding: 0.45vw;
    }

    .flake:nth-child(97) {
        animation: snow 17s linear 39s infinite normal backwards;
        left: 15%;
        opacity: 0.35;
        padding: 0.26vw;
    }

    .flake:nth-child(98) {
        animation: snow 15s linear 5s infinite normal backwards;
        left: 61%;
        opacity: 0.37;
        padding: 0.21vw;
    }

    .flake:nth-child(99) {
        animation: snow 11s linear 2s infinite normal backwards;
        left: 8%;
        opacity: 0.32;
        padding: 0.42vw;
    }

    .flake:nth-child(100) {
        animation: snow 15s linear 19s infinite normal backwards;
        left: 31%;
        opacity: 0.85;
        padding: 0.5vw;
    }

    .flake:nth-child(101) {
        animation: snow 13s linear 14s infinite normal backwards;
        left: 19%;
        opacity: 0.62;
        padding: 0.32vw;
    }

    .flake:nth-child(102) {
        animation: snow 20s linear 42s infinite normal backwards;
        left: 76%;
        opacity: 0.87;
        padding: 0.31vw;
    }

    .flake:nth-child(103) {
        animation: snow 15s linear 41s infinite normal backwards;
        left: 49%;
        opacity: 0.37;
        padding: 0.25vw;
    }

    .flake:nth-child(104) {
        animation: snow 14s linear 42s infinite normal backwards;
        left: 80%;
        opacity: 0.91;
        padding: 0.11vw;
    }

    .flake:nth-child(105) {
        animation: snow 19s linear 48s infinite normal backwards;
        left: 78%;
        opacity: 0.99;
        padding: 0.49vw;
    }

    .flake:nth-child(106) {
        animation: snow 14s linear 11s infinite normal backwards;
        left: 40%;
        opacity: 1.09;
        padding: 0.22vw;
    }

    .flake:nth-child(107) {
        animation: snow 15s linear 42s infinite normal backwards;
        left: 67%;
        opacity: 1.07;
        padding: 0.47vw;
    }

    .flake:nth-child(108) {
        animation: snow 12s linear 28s infinite normal backwards;
        left: 36%;
        opacity: 0.58;
        padding: 0.37vw;
    }

    .flake:nth-child(109) {
        animation: snow 15s linear 33s infinite normal backwards;
        left: 92%;
        opacity: 0.68;
        padding: 0.49vw;
    }

    .flake:nth-child(110) {
        animation: snow 16s linear 5s infinite normal backwards;
        left: 42%;
        opacity: 0.47;
        padding: 0.46vw;
    }

    .flake:nth-child(111) {
        animation: snow 20s linear 24s infinite normal backwards;
        left: 17%;
        opacity: 0.62;
        padding: 0.43vw;
    }

    .flake:nth-child(112) {
        animation: snow 13s linear 1s infinite normal backwards;
        left: 9%;
        opacity: 0.55;
        padding: 0.21vw;
    }

    .flake:nth-child(113) {
        animation: snow 12s linear 22s infinite normal backwards;
        left: 20%;
        opacity: 0.33;
        padding: 0.27vw;
    }

    .flake:nth-child(114) {
        animation: snow 20s linear 36s infinite normal backwards;
        left: 16%;
        opacity: 0.28;
        padding: 0.12vw;
    }

    .flake:nth-child(115) {
        animation: snow 15s linear 6s infinite normal backwards;
        left: 39%;
        opacity: 0.13;
        padding: 0.31vw;
    }

    .flake:nth-child(116) {
        animation: snow 20s linear 35s infinite normal backwards;
        left: 62%;
        opacity: 0.21;
        padding: 0.46vw;
    }

    .flake:nth-child(117) {
        animation: snow 12s linear 14s infinite normal backwards;
        left: 63%;
        opacity: 0.14;
        padding: 0.34vw;
    }

    .flake:nth-child(118) {
        animation: snow 18s linear 14s infinite normal backwards;
        left: 49%;
        opacity: 0.85;
        padding: 0.11vw;
    }

    .flake:nth-child(119) {
        animation: snow 16s linear 27s infinite normal backwards;
        left: 85%;
        opacity: 0.78;
        padding: 0.4vw;
    }

    .flake:nth-child(120) {
        animation: snow 13s linear 27s infinite normal backwards;
        left: 64%;
        opacity: 0.18;
        padding: 0.19vw;
    }

    .flake:nth-child(121) {
        animation: snow 19s linear 4s infinite normal backwards;
        left: 35%;
        opacity: 0.32;
        padding: 0.14vw;
    }

    .flake:nth-child(122) {
        animation: snow 18s linear 50s infinite normal backwards;
        left: 35%;
        opacity: 1.02;
        padding: 0.38vw;
    }

    .flake:nth-child(123) {
        animation: snow 12s linear 7s infinite normal backwards;
        left: 16%;
        opacity: 1.1;
        padding: 0.42vw;
    }

    .flake:nth-child(124) {
        animation: snow 16s linear 15s infinite normal backwards;
        left: 10%;
        opacity: 0.25;
        padding: 0.19vw;
    }

    .flake:nth-child(125) {
        animation: snow 20s linear 12s infinite normal backwards;
        left: 71%;
        opacity: 0.64;
        padding: 0.37vw;
    }

    .flake:nth-child(126) {
        animation: snow 15s linear 14s infinite normal backwards;
        left: 33%;
        opacity: 0.39;
        padding: 0.25vw;
    }

    .flake:nth-child(127) {
        animation: snow 18s linear 36s infinite normal backwards;
        left: 44%;
        opacity: 0.38;
        padding: 0.5vw;
    }

    .flake:nth-child(128) {
        animation: snow 16s linear 4s infinite normal backwards;
        left: 40%;
        opacity: 0.61;
        padding: 0.4vw;
    }

    .flake:nth-child(129) {
        animation: snow 11s linear 5s infinite normal backwards;
        left: 81%;
        opacity: 0.53;
        padding: 0.2vw;
    }

    .flake:nth-child(130) {
        animation: snow 15s linear 14s infinite normal backwards;
        left: 44%;
        opacity: 0.9;
        padding: 0.37vw;
    }

    .flake:nth-child(131) {
        animation: snow 16s linear 7s infinite normal backwards;
        left: 68%;
        opacity: 0.47;
        padding: 0.38vw;
    }

    .flake:nth-child(132) {
        animation: snow 15s linear 36s infinite normal backwards;
        left: 99%;
        opacity: 0.46;
        padding: 0.36vw;
    }

    .flake:nth-child(133) {
        animation: snow 13s linear 25s infinite normal backwards;
        left: 8%;
        opacity: 0.64;
        padding: 0.43vw;
    }

    .flake:nth-child(134) {
        animation: snow 19s linear 38s infinite normal backwards;
        left: 71%;
        opacity: 0.97;
        padding: 0.35vw;
    }

    .flake:nth-child(135) {
        animation: snow 20s linear 48s infinite normal backwards;
        left: 96%;
        opacity: 1;
        padding: 0.29vw;
    }

    .flake:nth-child(136) {
        animation: snow 13s linear 42s infinite normal backwards;
        left: 17%;
        opacity: 0.91;
        padding: 0.42vw;
    }

    .flake:nth-child(137) {
        animation: snow 16s linear 41s infinite normal backwards;
        left: 34%;
        opacity: 0.94;
        padding: 0.28vw;
    }

    .flake:nth-child(138) {
        animation: snow 18s linear 22s infinite normal backwards;
        left: 82%;
        opacity: 0.27;
        padding: 0.38vw;
    }

    .flake:nth-child(139) {
        animation: snow 13s linear 22s infinite normal backwards;
        left: 51%;
        opacity: 0.43;
        padding: 0.5vw;
    }

    .flake:nth-child(140) {
        animation: snow 19s linear 22s infinite normal backwards;
        left: 54%;
        opacity: 0.89;
        padding: 0.41vw;
    }

    .flake:nth-child(141) {
        animation: snow 16s linear 31s infinite normal backwards;
        left: 54%;
        opacity: 0.46;
        padding: 0.12vw;
    }

    .flake:nth-child(142) {
        animation: snow 11s linear 49s infinite normal backwards;
        left: 2%;
        opacity: 0.75;
        padding: 0.29vw;
    }

    .flake:nth-child(143) {
        animation: snow 15s linear 1s infinite normal backwards;
        left: 63%;
        opacity: 0.3;
        padding: 0.29vw;
    }

    .flake:nth-child(144) {
        animation: snow 18s linear 26s infinite normal backwards;
        left: 46%;
        opacity: 0.98;
        padding: 0.43vw;
    }

    .flake:nth-child(145) {
        animation: snow 12s linear 29s infinite normal backwards;
        left: 87%;
        opacity: 0.31;
        padding: 0.33vw;
    }

    .flake:nth-child(146) {
        animation: snow 16s linear 1s infinite normal backwards;
        left: 37%;
        opacity: 0.42;
        padding: 0.13vw;
    }

    .flake:nth-child(147) {
        animation: snow 17s linear 45s infinite normal backwards;
        left: 38%;
        opacity: 0.3;
        padding: 0.44vw;
    }

    .flake:nth-child(148) {
        animation: snow 19s linear 35s infinite normal backwards;
        left: 65%;
        opacity: 0.77;
        padding: 0.21vw;
    }

    .flake:nth-child(149) {
        animation: snow 16s linear 18s infinite normal backwards;
        left: 43%;
        opacity: 0.14;
        padding: 0.37vw;
    }

    .flake:nth-child(150) {
        animation: snow 14s linear 26s infinite normal backwards;
        left: 46%;
        opacity: 0.5;
        padding: 0.5vw;
    }

    @keyframes snow {
        4% {
            transform: translate(.4vw, 4vh);
        }

        8% {
            transform: translate(-.2vw, 8vh);
        }

        12% {
            transform: translate(.4vw, 12vh);
        }

        16% {
            transform: translate(.4vw, 16vh);
        }

        20% {
            transform: translate(-.4vw, 20vh);
        }

        24% {
            transform: translate(.4vw, 24vh);
        }

        28% {
            transform: translate(-.2vw, 28vh);
        }

        32% {
            transform: translate(.4vw, 32vh);
        }

        36% {
            transform: translate(.4vw, 36vh);
        }

        40% {
            transform: translate(-.4vw, 40vh);
        }

        44% {
            transform: translate(.4vw, 44vh);
        }

        48% {
            transform: translate(-.2vw, 48vh);
        }

        52% {
            transform: translate(.4vw, 52vh);
        }

        56% {
            transform: translate(.4vw, 56vh);
        }

        60% {
            transform: translate(-.4vw, 60vh);
        }

        64% {
            transform: translate(.4vw, 64vh);
        }

        68% {
            transform: translate(-.2vw, 68vh);
        }

        72% {
            transform: translate(.4vw, 72vh);
        }

        76% {
            transform: translate(.4vw, 76vh);
        }

        80% {
            transform: translate(-.4vw, 80vh);
        }

        84% {
            transform: translate(.4vw, 84vh);
        }

        88% {
            transform: translate(-.2vw, 88vh);
        }

        92% {
            transform: translate(.4vw, 92vh);
        }

        96% {
            transform: translate(.4vw, 96vh);
        }

        100% {
            transform: translate(-.4vw, 100vh);
        }

        100% {
            opacity: 0;
        }
    }
    

</style>