let a = "Global";

function outerPrint() {
    let b = 'Outerprint';

    function innerPrint() {
        let c = innerPrint;
        return `${a} -> ${b} -> ${c}`;
    }
    const show = innerPrint();
    console.log(show);
}
outerPrint();
