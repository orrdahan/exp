x=new XMLHttpRequest; 
x.onload=function(){
  document.write('This is a test for SSRF')
};
x.send();
