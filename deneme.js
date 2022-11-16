let soruSayisi = 60;

let randomSayi = [];
let numara;
for(let i = 0; i <= soruSayisi; i++){
    numara = Math.ceil(Math.random()*10000)
    if(numara <= 1175)
        randomSayi[i] = numara;
    else
        i--;
}


for(let x = 0; x <= soruSayisi; x++)
    console.log(`${x}.sayı = ${randomSayi[x]}`);


    let z = 0;
    let k = 1;
    while(z <= soruSayisi)
    {
        k = 1;
        while(k <= soruSayisi)
        {
            if(z == k)
                k++;
            if(randomSayi[z] == randomSayi[z+k] )
                return (console.log('eşit sayi var'+' '+k));
            else{
                k++;
            }
        }
        z++;


        console.log('yok eşit sayi');
    }


