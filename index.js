function ezmonev(){
    const n = 30;
    let nilai = prompt('Mau nilainya berapa? contoh: 5')
    for(let i = 0; i <= n; i++ ) 
    {
        if(radio=document.evaluate(`//input[@name="nilai[${i}]" and @value="${nilai}"]`,document,null,9,null).singleNodeValue)
            radio.checked=true;
    }
    const saran = 'Semoga ilmunya bermanfaat';	
    const textarea = document.querySelector('textarea');
    textarea.value = saran;
    console.log('Sudah selesai!')
}

ezmonev();