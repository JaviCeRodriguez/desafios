// Página: https://courseit.io/
// Título: Texto a código morse
// Descripción: Queremos que la función morseCode retorne la traducción del texto que nos llega por parámetro
// en código morse

function morseCode(str) {
    let translate = "";
    const morseTrans = {
        a: "._",
        b: "_...",
        c: "_._.",
        d: "_..",
        e: ".",
        f: ".._.",
        g: "__.",
        h: "....",
        i: "..",
        j: ".___",
        k: "_._",
        l: "._..",
        m: "__",
        n: "_.",
        o: "___",
        p: ".__.",
        q: "__._",
        r: "._.",
        s: "...",
        t: "_",
        u: ".._",
        v: "..._",
        w: ".__",
        x: "_.._",
        y: "_.__",
        z: "__..",
    };

    for (let i = 0; i < str.length; i++) {
        translate += morseTrans[str[i].toLowerCase()];
    }

    return translate;
}

console.log(morseCode("CourseIt"));
