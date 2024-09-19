x=new XMLHttpRequest;
x.open('GET', 'data:text/plain,This is a test', true);
x.onload=function(){
  document.write(this.responseText)
};
x.send();
