// JavaScript Document
function tekstopmaak(tekst, lowerid, upperid, bigid, blinkid, boldid, fixedid, italicsid, linkid, smallid, strikeid, subid, superid){
    this.tekst = tekst;
    this.lowercheck = document.getElementById(lowerid);
    this.uppercheck = document.getElementById(upperid);
    this.bigcheck = document.getElementById(bigid);
    this.blinkcheck = document.getElementById(blinkid);
    this.boldcheck = document.getElementById(boldid);
    this.fixedcheck = document.getElementById(fixedid);
    this.italicscheck = document.getElementById(italicsid);
    this.linkcheck = document.getElementById(linkid);
    this.smallcheck = document.getElementById(smallid);
    this.strikecheck = document.getElementById(strikeid);
    this.subcheck = document.getElementById(subid);
    this.supercheck = document.getElementById(superid);
    this.opmaken = opmaken;
  }
  function opmaken(id){
    this.opgemaakt = this.tekst;
    if(this.lowercheck.checked){
      this.opgemaakt = this.opgemaakt.toLowerCase();
    }
    if(this.uppercheck.checked){
      this.opgemaakt = this.opgemaakt.toUpperCase();
    }
    if(this.bigcheck.checked){
      this.opgemaakt = this.opgemaakt.big();
    }
    if(this.blinkcheck.checked){
      this.opgemaakt = this.opgemaakt.blink();
    }
    if(this.boldcheck.checked){
      this.opgemaakt = this.opgemaakt.bold();
    }
    if(this.fixedcheck.checked){
      this.opgemaakt = this.opgemaakt.fixed();
    }
    if(this.italicscheck.checked){
      this.opgemaakt = this.opgemaakt.italics();
    }
    if(this.linkcheck.checked){
      this.opgemaakt = this.opgemaakt.link();
    }
    if(this.smallcheck.checked){
      this.opgemaakt = this.opgemaakt.small();
    }
    if(this.strikecheck.checked){
      this.opgemaakt = this.opgemaakt.strike();
    }
    if(this.subcheck.checked){
      this.opgemaakt = this.opgemaakt.sub();
    }
    if(this.supercheck.checked){
      this.opgemaakt = this.opgemaakt.sup();
    }
    document.getElementById(id).innerHTML = this.opgemaakt;  
  }