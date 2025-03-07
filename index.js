function ezmonev() {
    function checkRadioByValue(nameList) {
        nameList.forEach(name => {
            const radio = document.evaluate(
                `//input[@value="${name}"]`,
                document,
                null,
                XPathResult.FIRST_ORDERED_NODE_TYPE,
                null
            ).singleNodeValue;
            if (radio) radio.checked = true;
        });
    }

    function checkRadioByNameAndValue(name, value) {
        const radio = document.evaluate(
            `//input[@name="${name}" and @value="${value}"]`,
            document,
            null,
            XPathResult.FIRST_ORDERED_NODE_TYPE,
            null
        ).singleNodeValue;
        if (radio) radio.checked = true;
    }

    function getRandomSaran(saranArray) {
        const randomIndex = Math.floor(Math.random() * saranArray.length);
        return saranArray[randomIndex];
    }

    // init nilai default
    const aplikasi = ['Besmart UNY ', 'Google Classroom', 'Google Meet', 'Zoom'];
    const metode = ['Diskusi dan penugasan ', 'Mempelajari modul'];
    const perkuliahan = ['Tatap muka'];
    const jumlahNilai = 30;
    const nilai = prompt('Mau nilainya berapa? contoh: 5');

    // list saran
    const saranList = [
        'Semoga ilmunya bermanfaat',
        'Semoga ilmunya berguna bagi bangsa dan negara',
        'Semoga menjadi ilmu yang berkah dan barokah amiin',
        'Semoga ilmunya dapat diaplikasikan dalam kehidupan sehari-hari',
        'Semoga sukses dengan ilmunya',
        'Semoga ilmu yang didapat bisa menjadi bekal di masa depan',
        'Semoga ilmu yang diperoleh bisa membantu dalam mencapai cita-cita',
        'Semoga ilmu yang didapat bisa meningkatkan kualitas diri',
        'Semoga ilmu yang diperoleh bisa bermanfaat bagi orang lain',
        'Semoga ilmu yang didapat bisa membuka wawasan baru',
        'Semoga ilmu yang diperoleh bisa menjadi inspirasi bagi orang lain',
        'Semoga ilmu yang didapat bisa membantu dalam menyelesaikan masalah',
        'Semoga ilmu yang diperoleh bisa menjadi modal untuk meraih kesuksesan',
        'Semoga ilmu yang didapat bisa membawa perubahan positif',
        'Semoga ilmu yang diperoleh bisa menjadi sumber kebahagiaan',
        'Semoga ilmu yang didapat bisa meningkatkan kepercayaan diri',
        'Semoga ilmu yang diperoleh bisa menjadi bekal untuk masa depan yang lebih baik',
        'Semoga ilmu yang didapat bisa membantu dalam mencapai tujuan hidup',
        'Semoga ilmu yang diperoleh bisa menjadi sumber kekuatan',
        'Semoga ilmu yang didapat bisa membawa keberkahan'
    ];

    // loop nilai
    for (let i = 0; i <= jumlahNilai; i++) {
        checkRadioByNameAndValue(`nilai[${i}]`, nilai);
    }

    // looping aplikasi, metode, dan bentuk perkuliahan
    checkRadioByValue(aplikasi);
    checkRadioByValue(metode);
    checkRadioByValue(perkuliahan);

    // waktu khusus dihabiskan untuk belajar (default = Lebih banyak)
    checkRadioByValue(['Lebih banyak']);

    // isi saran dan waktu efektif
    const textarea = document.querySelector('textarea');
    const waktuEfektifInput = document.getElementsByName('nilai[19]')[0];

    if (textarea) textarea.value = getRandomSaran(saranList);
    if (waktuEfektifInput) waktuEfektifInput.value = 120;

    console.log('Sudah selesai!');
}

ezmonev();