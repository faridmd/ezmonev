function ezmonev(){
    function radioLooping(name){
        for(let i = 0; i<name.length;i++) if(radio=document.evaluate(`//input[@value="${name[i]}"]`,document,null,9,null).singleNodeValue) radio.checked = true;
    }
    //inisialisasi nilai default
    const aplikasi = ['Besmart UNY ', 'Google Classroom', 'Google Meet', 'Zoom'];
    const metode = ['Diskusi dan penugasan ', 'Mempelajari modul'];
    const perkuliahan = ['Tatap muka'];
    const n = 30;
    let nilai = prompt('Mau nilainya berapa? contoh: 5');
    
    //looping nilai
    for(let i = 0; i <= n; i++ ) if(radio=document.evaluate(`//input[@name="nilai[${i}]" and @value="${nilai}"]`,document,null,9,null).singleNodeValue) radio.checked=true;
    
    //looping aplikasi
    radioLooping(aplikasi)
    
    //looping metode yg diterapkan
    radioLooping(metode)
    
    //looping bentuk perkuliahan
    radioLooping(perkuliahan)
    
    //waktu khusus dihabiskan untuk belajar (default = Lebih banyak)
    const waktuKhusus=document.evaluate(`//input[@value="Lebih banyak"]`,document,null,9,null).singleNodeValue;
    waktuKhusus.checked = true;
    
    //push the rest
    const saran = 'Semoga ilmunya bermanfaat';	
    const waktuEfektif = 120;
    const textarea = document.querySelector('textarea');
    const wEfektif = document.getElementsByName('nilai[19]')[0].value = 120;
    textarea.value = saran;
    wEfektif.value = waktuEfektif;
    console.log('Sudah selesai!')
}

ezmonev();