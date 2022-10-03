function init() {

    let nama = 'Ryco'; // local variable
    
    function tampilNama () { // inner function (closure*) 
    console.log(nama); // akses ke parent variable
    
    }
    
    tampilNama ();
    
    }
    init();
    