function startScan(){
 const input=document.getElementById('fileInput');
 const result=document.getElementById('scanResult');
 if(!input.files.length){result.style.color='#ffd166';result.textContent='Please select a file first.';return;}
 result.style.color='#18aaff'; result.textContent='Scanning '+input.files[0].name+'...';
 setTimeout(()=>{result.style.color='#55e0a2';result.textContent='✓ Scan complete: No suspicious ransomware behavior detected (demo result).';},1500);
}