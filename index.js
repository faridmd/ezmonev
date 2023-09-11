function ezmonev(){
    const n = 30;
    for(let i = 0; i <= n; i++ ) {
        if(radio=document.evaluate(//input[@name="nilai[${i}]" and @value="5"],document,null,9,null).singleNodeValue)
            radio.checked=true;
    }

const teks = 'Semoga kedepannya lebih baik'; 
const textarea = document.querySelector('textarea');
textarea.value = teks;
}
ezmonev();
