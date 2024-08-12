const translations = {
    el: {
        title: "Μεταγραμματισμός ελληνικών χαρακτήρων σε λατινικούς",
        textLabel: "Κείμενο",
        textPlaceholder: "Εισάγετε το κείμενο για μεταγραμματισμό",
        ancientGreekLabel: "Αρχαία ελληνικά",
        alaLcLabel: "ALA-LC romanization",
        copy: "Αντιγραφή",
        iso843Label: "ISO843:1997",
        submitButton: "Υποβολή",
        clearButton: "Καθαρισμός"
    },
    en: {
        title: "Transliteration of Greek characters into Latin",
        textLabel: "Text",
        textPlaceholder: "Enter text for transliteration",
        ancientGreekLabel: "Ancient Greek",
        alaLcLabel: "ALA-LC romanization",
        copy: "Copy",
        iso843Label: "ISO843:1997",
        submitButton: "Submit",
        clearButton: "Clear"
    }
};

let currentLanguage = 'el';

function setLanguage(lang) {
    currentLanguage = lang;
    document.getElementById('title').textContent = translations[lang].title;
    document.getElementById('text-label').textContent = translations[lang].textLabel;
    document.getElementById('text').placeholder = translations[lang].textPlaceholder;
    document.getElementById('ancient-greek-label').textContent = translations[lang].ancientGreekLabel;
    document.getElementById('ala-lc-label').textContent = translations[lang].alaLcLabel;
    document.getElementById('iso843-label').textContent = translations[lang].iso843Label;
    document.getElementById('submit-button').textContent = translations[lang].submitButton;
    document.getElementById('clear-button').textContent = translations[lang].clearButton;
}

function copyText(id) {
    const text = document.getElementById(id).value;
    navigator.clipboard.writeText(text);
}


function clearForm() {
    const ancientGreekCheckbox = document.getElementById('ancient-greek').checked;
    document.getElementById('transliteration-form').reset();
    document.getElementById('ancient-greek').checked = ancientGreekCheckbox;
}

document.getElementById('transliteration-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputText = document.getElementById('text').value;
    const isAncientGreek = document.getElementById('ancient-greek').checked;

    let alaLcResult, iso843Result;

    if (isAncientGreek) {
        alaLcResult = ancientGreekToLatinTransliterationRomanization(inputText);
        iso843Result = ancientGreekToLatinTransliterationIso843(inputText);
    } else {
        alaLcResult = modernGreekToLatinTransliterationRomanization(inputText);
        iso843Result = modernGreekToLatinTransliterationIso843(inputText);
    }

    document.getElementById('ala-lc').value = alaLcResult;
    document.getElementById('iso843').value = iso843Result;
});

function modernGreekToLatinTransliterationIso843(text) {
    const transliterationMap = {
         //ISO 843 Modern

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ī','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'F','Χ':'Ch','Ψ':'Ps','Ω':'Ō',
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ī','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'f','χ':'ch','ψ':'ps','ω':'ō',
                //Tonismena
                    //Uppercase
                    'Ά':'Á','Έ':'É','Ή':'Ī́','Ί':'Í','Ό':'Ó','Ύ':'Ý','Ώ':'Ṓ',
                    //Lowercase
                    'ά':'á','έ':'é','ή':'ī́','ί':'í','ό':'ó','ύ':'ý','ώ':'ṓ',
                            'έ':'é',        'ί':'í','ό':'ó','ύ':'ý',//diaforetikos kwdikos asci
                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','(':'(',')':')','΄':'΄','«':'«','»':'»',
                    //Numbers
                    '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
                    //Dialitika
                        //Uppercase
                            'Ϊ':'Ï','Ϋ':'Ÿ',
                        //Lowercase
                            'ϊ':'ï','ϋ':'ÿ','ΐ':'ḯ','ΰ':'ÿ́',
                
            //2 letters
                //Shmeiosh 1
                    //Uppercase  
                    'Αυ':'Au','Ευ':'Eu','Ου':'Ou',
                    'Αύ':'Aú','Εύ':'Eú','Ού':'Oú',
                    //Lowercase
                    'αυ':'au','ευ':'eu','ου':'ou',
                    'αύ':'aú','εύ':'eú','ού':'oú',

            //Arxaioi Tonismoi
                //Tonismena
                    //Oxia ( ´ )
                        //Uppercase
                        'Ά':'Á','Έ':'É','Ή':'Ī́','Ί':'Í','Ό':'Ó','Ύ':'Ý','Ώ':'Ṓ',
                        'Ἄ':'Á','Ἔ':'É','Ἢ':'Ī́','Ἴ':'Í','Ὄ':'Ó','Ὕ':'Ý','Ὤ':'Ṓ',//+Apostrofos
                    //Lowercase
                        'ά':'á','έ':'é','ή':'ī́','ί':'í','ό':'ó','ύ':'ý','ώ':'ṓ',
                                'έ':'é','ἰ':'i',        'ό':'ó','ύ':'ý', // για καποιο λογο εχει διαφορα με το ε
                        'ἄ':'á','ἔ':'é','ἤ':'ī́','ἴ':'í','ὄ':'ó','ὕ':'ý','ὤ':'ṓ','ᾤ':'ṓ', //+Apostrofos
                    //Baria ( ` )
                        //Uppercase
                          'Ὰ':'A','Ὲ':'E','Ὴ':'Ī','Ὶ':'I','Ὸ':'O','Ὺ':'Y','Ὼ':'Ō',
                        //Lowercase
                          'ὰ':'a','ὲ':'e','ὴ':'ī','ὶ':'i','ὸ':'o','ὺ':'y','ὼ':'ō',   
                          'ὰ':'a','ὲ':'e','ὴ':'ī',        'ὸ':'o', //Diff asci code
                          'ἂ':'a','ἢ':'ī','ῒ':'ï', //+Apostrofos
                    //Perispomeni ( ῀ )
                        //Uppercase 
                        'Ἆ':'Á','Ἦ':'Ī́','Ἶ':'Í','Ὦ':'Ṓ',//+Apostrofos
                        'ᾎ':'Á','ᾞ':'Ī́',        'ᾮ':'Ṓ',//+Apostrofos +iota
                        'Ἇ':'Á','Ἧ':'Ī́','Ἷ':'Í','Ὗ':'Ý','Ὧ':'Ṓ',//+Daseia
                        'ᾏ':'Á','ᾟ':'Ī́',                'ᾯ':'Ṓ',//+Daseia +
                    //Lowercase
                        'ᾶ':'á','ῆ':'ī́','ῖ':'í','ῦ':'ý','ῶ':'ṓ',
                        'ᾷ':'á','ῇ':'ī́','ῗ':'ḯ','ῧ':'ÿ́','ῷ':'ṓ',
                        'ἆ':'á','ἦ':'ī́','ἶ':'í','ὖ':'ý','ὦ':'ṓ', //+Apostorofos
                        'ᾆ':'á','ᾖ':'ī́',                'ᾦ':'ṓ',//+Apostorofos+
                        'ἇ':'á','ἧ':'ī́','ἷ':'í','ὗ':'ý','ὧ':'ṓ',//+Daseia
                        'ᾇ':'á','ᾗ':'ī́',                'ᾧ':'ṓ',//+Daseia +iota

                     //Dasia (Rough Breathing) ( ῾ )
                         //Uppercase  
                         'Ἁ':'A','Ἑ':'E','Ἡ':'Ī','Ἱ':'I','Ὁ':'O','Ὑ':'Y','Ῥ':'R','Ὡ':'Ō',
                         'Ἅ':'Á','Ἕ':'É','Ἥ':'Ī́','Ἵ':'Í','Ὅ':'Ó','Ὥ':'Ṓ',//+oxia
                         'ᾍ':'Á', 
                         'Εὕ':'Eú',
                       //Lowercase
                          'ἁ':'a','ἑ':'e','ἡ':'ī','ἱ':'i','ὁ':'o','ὑ':'y','ὡ':'ō',
                          'ᾁ':'a','ᾑ':'ī','ᾡ':'ō','ᾅ':'a','ῥ':'r','ῳ':'ō',
                          'ἅ':'á','ἕ':'é','ἥ':'ī́','ἵ':'í','ὅ':'ó','ὕ':'ý', //+oxia   
                          'ᾕ':'ī́','ᾥ':'ṓ',//oxia
                          'ἇ':'a','ἧ':'ī','ἷ':'i','ὗ':'y','ὧ':'ō',//perispomeni
                     //Apostrofos ( ᾽ )  ἤ
                        //Uppercase
                            'Ἀ':'A','Ἐ':'E','Ἠ':'Ī','Ἰ':'I','Ὀ':'O','Ὠ':'Ō',
                            'ᾈ':'A',        'ᾘ':'Ī',                'ᾨ':'Ō',
                        //Lowercase
                            'ἀ':'a','ἐ':'e','ἠ':'ī','ἰ':'i','ὐ':'u','ὀ':'o','ὠ':'ō',
                            'ᾀ':'a',        'ᾐ':'ī',                        'ᾠ':'ō'
                    


    }
    let result = '';
    let i = 0;
    let isWordStart = true;

    while (i < text.length) {
        
        if (text[i]=== ' '){
            result += text[i];
            isWordStart = true;
            i++
            continue;
        }else{
            //Handle 2-letter combinations
            const twoLetterCombo = text[i] + text[i+1];
            if(transliterationMap.hasOwnProperty(twoLetterCombo)) {
                result += transliterationMap[twoLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }
            //Single letter combinations    
            result += transliterationMap[text[i]] || '*';
            i++
            isWordStart=false;
        }
    }
    return result;

}

function ancientGreekToLatinTransliterationIso843(text) {
    const transliterationMap = {
        //Iso843

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ī','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'F','Χ':'Ch','Ψ':'Ps','Ω':'Ō',
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ī','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'f','χ':'ch','ψ':'ps','ω':'ō',
                //Tonismena
                    //Oxia ( ´ )
                        //Uppercase
                        'Ά':'Á','Έ':'É','Ή':'Ī́','Ί':'Í','Ό':'Ó','Ύ':'Ý','Ώ':'Ṓ',
                        'Ἄ':'Á','Ἔ':'É','Ἢ':'Ī́','Ἴ':'Í','Ὄ':'Ó','Ὕ':'Ý','Ὤ':'Ṓ',//+Apostrofos
                    //Lowercase
                        'ά':'á','έ':'é','ή':'ī́','ί':'í','ό':'ó','ύ':'ý','ώ':'ṓ',
                                'έ':'é','ἰ':'i',        'ό':'ó','ύ':'ý', // για καποιο λογο εχει διαφορα με το ε
                        'ἄ':'á','ἔ':'é','ἤ':'ī́','ἴ':'í','ὄ':'ó','ὕ':'ý','ὤ':'ṓ','ᾤ':'ṓ', //+Apostrofos
                    //Baria ( ` )
                        //Uppercase
                          'Ὰ':'A','Ὲ':'E','Ὴ':'Ī','Ὶ':'I','Ὸ':'O','Ὺ':'Y','Ὼ':'Ō',
                        //Lowercase
                          'ὰ':'a','ὲ':'e','ὴ':'ī','ὶ':'i','ὸ':'o','ὺ':'y','ὼ':'ō',   
                          'ὰ':'a','ὲ':'e','ὴ':'ī',        'ὸ':'o', //Diff asci code
                          'ἂ':'a','ἢ':'ī','ῒ':'ï', //+Apostrofos
                    //Perispomeni ( ῀ )
                        //Uppercase 
                            'Ἆ':'Á','Ἦ':'Ī́','Ἶ':'Í','Ὦ':'Ṓ',//+Apostrofos
                            'ᾎ':'Á','ᾞ':'Ī́',        'ᾮ':'Ṓ',//+Apostrofos +iota
                            'Ἇ':'Á','Ἧ':'Ī́','Ἷ':'Í','Ὗ':'Ý','Ὧ':'Ṓ',//+Daseia
                            'ᾏ':'Á','ᾟ':'Ī́',                'ᾯ':'Ṓ',//+Daseia +
                        //Lowercase
                            'ᾶ':'á','ῆ':'ī́','ῖ':'í','ῦ':'ý','ῶ':'ṓ',
                            'ᾷ':'á','ῇ':'ī́','ῗ':'ḯ','ῧ':'ÿ́','ῷ':'ṓ',
                            'ἆ':'á','ἦ':'ī́','ἶ':'í','ὖ':'ý','ὦ':'ṓ', //+Apostorofos
                            'ᾆ':'á','ᾖ':'ī́',                'ᾦ':'ṓ',//+Apostorofos+
                            'ἇ':'á','ἧ':'ī́','ἷ':'í','ὗ':'ý','ὧ':'ṓ',//+Daseia
                            'ᾇ':'á','ᾗ':'ī́',                'ᾧ':'ṓ',//+Daseia +iota

                     //Dasia (Rough Breathing) ( ῾ )
                         //Uppercase  
                         'Ἁ':'A','Ἑ':'E','Ἡ':'Ī','Ἱ':'I','Ὁ':'O','Ὑ':'Y','Ῥ':'R','Ὡ':'Ō',
                         'Ἅ':'Á','Ἕ':'É','Ἥ':'Ī́','Ἵ':'Í','Ὅ':'Ó','Ὥ':'Ṓ',//+oxia
                         'ᾍ':'Á', 
                       //Lowercase
                          'ἁ':'a','ἑ':'e','ἡ':'ī','ἱ':'i','ὁ':'o','ὑ':'y','ὡ':'ō',
                          'ᾁ':'a','ᾑ':'ī','ᾡ':'ō','ᾅ':'a','ῥ':'r','ῳ':'ō',
                          'ἅ':'á','ἕ':'é','ἥ':'ī́','ἵ':'í','ὅ':'ó','ὕ':'ý', //+oxia   
                          'ᾕ':'ī́','ᾥ':'ṓ',//oxia
                          'ἇ':'a','ἧ':'ī','ἷ':'i','ὗ':'y','ὧ':'ō',//perispomeni
                     //Apostrofos ( ᾽ )  ἤ
                        //Uppercase
                            'Ἀ':'A','Ἐ':'E','Ἠ':'Ī','Ἰ':'I','Ὀ':'O','Ὠ':'Ō',
                            'ᾈ':'A',        'ᾘ':'Ī',                'ᾨ':'Ō',
                        //Lowercase
                            'ἀ':'a','ἐ':'e','ἠ':'ī','ἰ':'i','ὐ':'u','ὀ':'o','ὠ':'ō',
                            'ᾀ':'a',        'ᾐ':'ī',                        'ᾠ':'ō',

                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','(':'(',')':')','΄':'΄','«':'«','»':'»',
                    //Numbers
                    '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
                    //Dialitika
                        //Uppercase
                        'Ϊ':'Ï','Ϋ':'Ÿ',
                        //Lowercase
                            'ϊ':'ï','ϋ':'ÿ','ΐ':'ḯ','ΰ':'ÿ́',
                
            //2 letters
                //Shmeiosh 1
                    //Uppercase  
                    'Αυ':'Au','Ευ':'Eu','Ου':'Ou',
                    'Αύ':'Aú','Εύ':'Eú','Εὕ':'Eú','Ού':'Oú',
                    //Lowercase
                    'αυ':'au','ευ':'eu','ου':'ou',
                    'αύ':'aú','εύ':'eú','ού':'oú'

    }
    let result = '';
    let i = 0;
    let isWordStart = true;

    while (i < text.length) {
        
        if (text[i]=== ' '){
            result += text[i];
            isWordStart = true;
            i++
            continue;
        }else{
            //Handle 2-letter combinations
            const twoLetterCombo = text[i] + text[i+1];
            if(transliterationMap.hasOwnProperty(twoLetterCombo)) {
                result += transliterationMap[twoLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }
            //Single letter combinations    
            result += transliterationMap[text[i]] || '*';
            i++
            isWordStart=false;
        }
    }
    return result;
}

function modernGreekToLatinTransliterationRomanization(text) {
    const transliterationMap = {
         //Romanization

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ē','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'Ph','Χ':'Ch','Ψ':'Ps','Ω':'Ō', 
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ē','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'ph','χ':'ch','ψ':'ps','ω':'ō',
                      //Tonismena
                    //Uppercase
                    'Ά':'A','Έ':'E','Ή':'Ē','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                    //Lowercase
                    'ά':'a','έ':'e','ή':'ē','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                            'έ':'e',        'ί':'i','ό':'o','ύ':'y', // diff asci code
                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','(':'(',')':')','ϲ':'s','«':'«','»':'»',
                    //Numbers
                    '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
                    //Uppercase
                    'Ϊ':'I','Ϋ':'Y',
                    //Lowercase
                    'ϊ':'i','ϋ':'u','ΐ':'i','ΰ':'u',

            //2-letters Mapping
                    //Uppercase
                    'Αυ':'Au','Ευ':'Eu','Ηυ':'Ēu','Ου':'Ēu','Ωυ':'Ōu',
                    //Lowercase
                    'άι':'ai','γγ':'ng','γκ':'nk','γξ':'nx','γχ':'nch','έι':'ei','μπ':'mp','ντ':'nt',
                    'αυ':'au','ευ':'eu','ηυ':'ēu','ου':'ou','ωυ':'ōu',
                    //Tonismena
                    'Αύ':'Au','Εύ':'Eu','Ηύ':'Ēu','Ού':'Ēu','Ωύ':'Ōu',
                    'αύ':'au','εύ':'eu','ηύ':'ēu','ού':'ou','ωύ':'ōu',
                    
                //Shmeiosh 7
                    //keno
                        'γκ ':'gk','μπ ':'mp',
                    //With special charachers
                        'γκ,':'gk','μπ,':'mp','γκ.':'gk','μπ.':'mp','γκ;':'gk','μπ;':'mp',
                    
                //Shmeiosh 9   ά, έ, ή, -ί, ό, -ώ       ή     ϋ,ΰ
                    'Άυ':'Áv','Έυ':'Év','Ήυ':'Ī́v','Όυ':'Óv',
                    'άυ':'áv','έυ':'év','ήυ':'ī́v','όυ':'óv',


            //Arxoi Tonismoi
                //Oxia ( ´ )
                        //Uppercase
                        'Ά':'A','Έ':'E','Ή':'Ē','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                        'Ἄ':'A','Ἔ':'E','Ἢ':'Ē','Ἴ':'I','Ὄ':'O','Ὕ':'Y','Ὤ':'Ō',//+Apostrofos
                    //Lowercase
                        'ά':'a','έ':'e','ή':'ē','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                                'έ':'e',        'ἰ':'i','ό':'o','ύ':'y', // για καποιο λογο εχει διαφορα με το ε
                        'ἄ':'a','ἔ':'e','ἤ':'ē','ἴ':'i','ὄ':'o','ὕ':'y','ὤ':'ō','ᾤ':'ō', //+Apostrofos
                //Baria ( ` )
                    //Uppercase
                      'Ὰ':'A','Ὲ':'E','Ὴ':'Ē','Ὶ':'I','Ὸ':'O','Ὺ':'Y','Ὼ':'Ō',
                    //Lowercase
                      'ὰ':'a','ὲ':'e','ὴ':'ē','ὶ':'i','ὸ':'o','ὺ':'y','ὼ':'ō',   
                      'ὰ':'a','ὲ':'e','ὴ':'ē',        'ὸ':'o', //Diff asci code
                      'ἂ':'a',        'ἢ':'ē','ῒ':'i', //+Apostrofos
                //Perispomeni ( ῀ )
                    //Uppercase 
                        'Ἆ':'A','Ἦ':'Ē','Ἶ':'I','Ὦ':'Ō',//+Apostrofos
                        'ᾎ':'A','ᾞ':'Ē',        'ᾮ':'Ō',//+Apostrofos +iota
                        'Ἇ':'A','Ἧ':'Ē','Ἷ':'I','Ὗ':'Y','Ὧ':'Ō',//+Daseia
                        'ᾏ':'A','ᾟ':'Ē',                'ᾯ':'Ō',//+Daseia +
                    //Lowercase
                        'ᾶ':'a','ῆ':'ē','ῖ':'i','ῦ':'y','ῶ':'ō',
                        'ᾷ':'a','ῇ':'ē','ῗ':'i','ῧ':'y','ῷ':'ō',
                        'ἆ':'a','ἦ':'ē','ἶ':'i','ὖ':'y','ὦ':'ō',//+Apostorofos
                        'ᾆ':'a','ᾖ':'ē',                'ᾦ':'ō',//+Apostorofos+
                        'ἇ':'a','ἧ':'ē','ἷ':'i','ὗ':'y','ὧ':'ō',//+Daseia
                        'ᾇ':'a','ᾗ':'ē',                'ᾧ':'ō',//+Daseia +iota
                        
                 //Dasia (Rough Breathing) ( ῾ )
                    //Uppercase  
                     'Ἁ':'Ha','Ἑ':'He','Ἡ':'Hē','Ἱ':'Hi','Ὁ':'Ho','Ὑ':'Hy','Ῥ':'Rh','Ὡ':'Hō',
                     'Ἅ':'Ha','Ἕ':'He','Ἥ':'Hē','Ἵ':'Hi','Ὅ':'Ho','Ὥ':'Hō',//+oxia
                     'ᾍ':'Ha', 
                     'Εὕ':'Eu',
                    //Lowercase
                        'ἁ':'ha','ἑ':'he','ἡ':'hē','ἱ':'hi','ὁ':'ho','ὑ':'hu','ὡ':'hō',
                        'ᾁ':'ha','ᾑ':'hē','ᾡ':'hō','ᾅ':'ha','ῥ':'hr','ῳ':'hō',
                        'ἅ':'ha','ἕ':'he','ἥ':'hē','ἵ':'hi','ὅ':'ho','ὕ':'hu', //+oxia   
                        'ᾕ':'hē','ᾥ':'hō',//oxia
                        'ἇ':'ha','ἧ':'hē','ἷ':'hi','ὗ':'hu','ὧ':'hō',//perispomeni
                    //Apostrofos ( ᾽ )
                        //Uppercase
                            'Ἀ':'A','Ἐ':'E','Ἠ':'Ē','Ἰ':'I','Ὀ':'O','Ὠ':'Ō',
                            'ᾈ':'A',        'ᾘ':'Ē',                'ᾨ':'Ō',
                        //Lowercase
                            'ἀ':'a','ἐ':'e','ἠ':'ē','ἰ':'i','ὐ':'u','ὀ':'o','ὠ':'ō',
                            'ᾀ':'a',        'ᾐ':'ē',                        'ᾠ':'ō'

                

    }

    const transSpecialStarters ={
        'Ο ':'Ho','Η ':'Hē','ο ':'ho','η ':'hē'
    }
    const transliterationMapStarters ={
        //Starters               
            //Single Letter
                    'Υ':'Hy','υ':'hy',

            //2-letters Starters
                    //Uppercase
                        'Μπ':'B','Ντ':'D̲',  
                
                    //Lowercase
                        'ντ':'d̲','μπ':'b',
                    //2 letter output
                        'Γκ':'Gk','γκ':'gk',

     //Special Occasions

                //3 letters
                    //Uppercase
                    'Αφή':'He','Αι ':'Ha',
                    'Επτ':'He','Έξι':'He','Ένα':'He',
                    'Ήρα':'Hē','Ηρώ':'Hē','Ήρω':'Hē','Ηρω':'Hē','Ήβη':'Hē',
                    'Ιππ':'Hi',
                    'Όρκ':'Ho','Ορκ':'Ho','Οι ':'Ho',
                    'Ωρο':'Hō','Ώρα':'Hō','Ωρα':'Hō',
                //Lowercase
                    'αφή':'he','αι ':'ha',
                    'επτ':'he','έξι':'he','ένα':'he',
                    'ήρα':'hē','ηρώ':'hē','ήρω':'hē','ηρω':'hē','ήβη':'hē',
                    'ιππ':'hi',
                    'όρκ':'ho','ορκ':'ho','οι ':'ho',
                    'ωρο':'hō','ώρα':'hō','ωρα':'hō',
            //4 letters 
                //Uppercase
                    'Αγιο':'Ha','Αγνη':'Ha','Αγνο':'Ha','Άδης':'Ha','Αίμα':'Ha','Αίμο':'Ha','Αίμω':'Ha','αλων':'Ha','Αμάξ':'Ha','Άμαξ':'Ha','Απλό':'Ha',
                    'Άρπα':'Ha',
                    'Έβρο':'He','Έλεν':'He','Ελέν':'He','Έλλη':'He','Ελλή':'He','Ένωσ':'He','εξαδ':'He','Ερμα':'He','Ερμά':'He','Ερμέ':'He','Ερμη':'He',
                    'Ερμο':'He','Ερμί':'He','Ένας':'He','Ένωσ':'he','Ενωσ':'he','Ενωτ':'he','Ενωμ':'he','Έδρα':'he','Έρμα':'he',
                    'Ηλιό':'Hē','Ηλιο':'Hē','Ημερ':'Hē','Ηρόδ':'Hē','Ησύχ':'Hē','Ησυχ':'Hē','Ήσυχ':'Hē','Ηνωμ':'Hē',
                    'Ιερό':'Hi','Ιερο':'Hi','Ιερή':'Hi','Ιερη':'Hi','Ιερά':'Hi','Ιερα':'Hi','Ιερώ':'Hi','Ιερώ':'Hi','Ιερω':'Hi','Ιλαρ':'Hi','Ιμάτ':'Hi',
                    'Ίδρυ':'Hi','Ιδρύ':'Hi','Ιδρυ':'Hi',
                    'Όμηρ':'Ho','Ομηρ':'Ho','Όμιλ':'Ho','Ομίλ':'Ho','Ομιλ':'Ho','Όσιο':'Ho','Οσιο':'Ho',
                    'Υψιλ':'Yps',
                //Lowercase
                    'αγιο':'ha','αγνη':'ha','αγνο':'ha','άδης':'ha','αίμα':'ha','αίμο':'ha','αιμω':'ha','αλων':'ha','αμάξ':'ha','άμαξ':'ha','απλό':'ha',
                    'άρπα':'Ha',
                    'έβρο':'he','έλεν':'he','έλεν':'he','έλλη':'he','ελλή':'he','ένωσ':'he','εξαδ':'he','ερμα':'he','ερμά':'he','ερμέ':'he','ερμη':'he',
                    'ερμο':'he','ερμί':'he','ένας':'he','ένωσ':'he','ενωσ':'he','ενωτ':'he','ενωμ':'he','έδρα':'he','έρμα':'he',
                    'ηλιό':'hē','ηλιο':'hē','ημερ':'hē','ηρόδ':'hē','ησύχ':'hē','ησυχ':'hē','ήσυχ':'hē','ηνωμ':'Hē',
                    'ιερό':'hi','ιερο':'hi','ιερή':'hi','ιερη':'hi','ιερά':'hi','ιερα':'hi','ιερώ':'hi','ιερώ':'hi','ιερω':'hi','ιλαρ':'hi','ιμάτ':'hi',
                    'ίδρυ':'hi','ιδρύ':'hi','ιδρυ':'hi',
                    'όμηρ':'ho','ομηρ':'ho','όμιλ':'ho','ομίλ':'ho','ομιλ':'ho','όσιο':'ho','οσιο':'ho',
                    'ύψιλ':'yps',
            //5 letters
                //Uppercase
                    'Άλατα':'Ha','Αλατά':'Ha','Αλατό':'Ha','Αλιεύ':'Ha','Αμαρτ':'Ha','Απαλό':'Ha',
                    'Εβραι':'He','Ειμαρ':'He','Εκάβη':'He','Εκάτη':'He','Έκτωρ':'He','Ελικώ':'He','Ελλάδ':'He','Ελλάν':'He','Ελλάς':'He','Ελλην':'He',
                    'Ερμής':'He','Ερμιό':'He','Ερμιο':'He','Έσπερ':'He','Εσπέρ':'He','Εστία':'He','Εταιρ':'He','Εκατό':'He','Εκατα':'He','Εκατο':'He','Εξηντ':'He',
                    'Ηγουμ':'Hē','Ηρακλ':'Hē','Ηράκλ':'Hē','Ηρόστ':'Hē','Ησαΐα':'Hē','Ησίοδ':'Hē','Ηφαίσ':'Hē','Ηφαισ':'Hē','Ήφαισ':'Hē',
                    'Ιερου':'Hi','Ιστορ':'Hi','Ιδρώς':'Hi',
                    'Ολλαν':'Ho',
                //Lowercase
                    'άλατα':'ha','αλατά':'ha','αλατό':'ha','αλιεύ':'ha','αμαρτ':'ha','απαλό':'ha',
                    'εβραι':'he','ειμαρ':'he','εκάβη':'he','εκάτη':'he','έκτωρ':'he','ελικώ':'he','ελλάδ':'he','ελλάν':'he','ελλάς':'he','ελλην':'he',
                    'ερμής':'he','ερμιό':'he','ερμιο':'he','έσπερ':'he','εσπέρ':'he','εστία':'he','εταιρ':'he','εκατό':'he','εκατα':'he','εκατο':'he','εξηντ':'he',
                    'ηγουμ':'hē','ηρακλ':'hē','ηράκλ':'hē','ηρόστ':'hē','ησαΐα':'hē','ησίοδ':'hē','ηφαίσ':'hē','ηφαισ':'hē','ήφαισ':'hē',
                    'ιερου':'hi','ιστορ':'hi','ιδρώς':'hi',
                    'ολλαν':'ho',

                //Me eplibleci
                    'Αλικα':'Ha','αλικα':'ha'
    }

    let result = '';
    let i = 0;
    let isWordStart = true;

    while (i < text.length) {
        
        if (text[i]=== ' '){
            result += text[i];
            isWordStart = true;
            i++
            continue;
        }
        if(isWordStart){
            const twoLetterCombo = text[i] + text[i+1];
            //Starters (2 Letters)
            if(transliterationMapStarters.hasOwnProperty(twoLetterCombo)) {
                result += transliterationMapStarters[twoLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }else if(transSpecialStarters.hasOwnProperty(twoLetterCombo)){    
                result += transSpecialStarters[twoLetterCombo];
                i += 1; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }else{
                //Handle 5-letter combinations
                const fiveLetterCombo = text[i] + text[i+1] + text[i+2]+ text[i+3]+ text[i+4];
                if (transliterationMapStarters.hasOwnProperty(fiveLetterCombo)){
                    result += transliterationMapStarters[fiveLetterCombo];
                    i += 1; // Move to the next pair of characters
                    isWordStart = false;
                    continue;
                }
                //Handle 4-letter combinations
                const fourLetterCombo = text[i] + text[i+1] + text[i+2]+ text[i+3];
                if (transliterationMapStarters.hasOwnProperty(fourLetterCombo)){
                    result += transliterationMapStarters[fourLetterCombo];
                    i += 1; // Move to the next pair of characters
                    isWordStart = false;
                    continue;
                }
                //Handle 3-letter combinations
                const threeLetterCombo = text[i] + text[i+1] + text[i+2];
                if (transliterationMapStarters.hasOwnProperty(threeLetterCombo)){
                    result += transliterationMapStarters[threeLetterCombo];
                    i += 1; // Move to the next pair of characters
                    isWordStart = false;
                    continue;
                }
                //Handle 3-letter combinations
                const threeLetterCombos = text[i] + text[i+1] + text[i+2];
                if (transliterationMap.hasOwnProperty(threeLetterCombos)){
                    result += transliterationMap[threeLetterCombos];
                    i += 1; // Move to the next pair of characters
                    isWordStart = false;
                    continue;
                }
                //Handle 2-letter combinations
                const twoLetterCombo = text[i] + text[i+1];
                if(transliterationMap.hasOwnProperty(twoLetterCombo)) {
                    result += transliterationMap[twoLetterCombo];
                    i += 2; // Move to the next pair of characters
                    isWordStart = false;
                    continue;
                }
                const oneLetterCombo = text[i];
                if(transliterationMapStarters.hasOwnProperty(oneLetterCombo)){
                    result += transliterationMapStarters[oneLetterCombo];
                    i += 1; // Move to the next pair of characters
                    isWordStart = false;
                    continue; 
                }
                //Single letter combinations    
                result += transliterationMap[text[i]] || '*';
                i++
                isWordStart=false;}
        }else{
            //Handle 3-letter combinations
            const threeLetterCombo = text[i] + text[i+1] + text[i+2];
            if (transliterationMap.hasOwnProperty(threeLetterCombo)){
                result += transliterationMap[threeLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }
            //Handle 2-letter combinations
            const twoLetterCombo = text[i] + text[i+1];
            if(transliterationMap.hasOwnProperty(twoLetterCombo)) {
                result += transliterationMap[twoLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }
            //Single letter combinations    
            result += transliterationMap[text[i]] || '*';
            i++
            isWordStart=false;
        }
    }
    return result;

}

function ancientGreekToLatinTransliterationRomanization(text) {
    const transliterationMap = {
         //Romanization

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'B','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ē','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'Ph','Χ':'Ch','Ψ':'Ps','Ω':'Ō','Ϝ':'W','Ϙ':'Ḳ',
                    //Lowercase
                    'α':'a','β':'b','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ē','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'ph','χ':'ch','ψ':'ps','ω':'ō','ϝ':'w','ϙ':'ḳ',
            //Tonismoi
                    //Oxia ( ´ )
                        //Uppercase
                            'Ά':'A','Έ':'E','Ή':'Ē','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                            'Ἄ':'A','Ἔ':'E','Ἢ':'Ē','Ἴ':'I','Ὄ':'O','Ὕ':'Y','Ὤ':'Ō',//+Apostrofos
                        //Lowercase
                            'ά':'a','έ':'e','ή':'ē','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                                    'έ':'e',        'ἰ':'i','ό':'o','ύ':'y', // για καποιο λογο εχει διαφορα με το ε
                            'ἄ':'a','ἔ':'e','ἤ':'ē','ἴ':'i','ὄ':'o','ὕ':'y','ὤ':'ō','ᾤ':'ō', //+Apostrofos
                    //Baria ( ` )
                        //Uppercase
                          'Ὰ':'A','Ὲ':'E','Ὴ':'Ē','Ὶ':'I','Ὸ':'O','Ὺ':'Y','Ὼ':'Ō',
                        //Lowercase
                          'ὰ':'a','ὲ':'e','ὴ':'ē','ὶ':'i','ὸ':'o','ὺ':'y','ὼ':'ō',   
                          'ὰ':'a','ὲ':'e','ὴ':'ē',        'ὸ':'o', //Diff asci code
                          'ἂ':'a',        'ἢ':'ē','ῒ':'i', //+Apostrofos
                    //Perispomeni ( ῀ )
                        //Uppercase 
                            'Ἆ':'A','Ἦ':'Ē','Ἶ':'I','Ὦ':'Ō',//+Apostrofos
                            'ᾎ':'A','ᾞ':'Ē',        'ᾮ':'Ō',//+Apostrofos +iota
                            'Ἇ':'A','Ἧ':'Ē','Ἷ':'I','Ὗ':'Y','Ὧ':'Ō',//+Daseia
                            'ᾏ':'A','ᾟ':'Ē',                'ᾯ':'Ō',//+Daseia +
                        //Lowercase
                            'ᾶ':'a','ῆ':'ē','ῖ':'i','ῦ':'y','ῶ':'ō',
                            'ᾷ':'a','ῇ':'ē','ῗ':'i','ῧ':'y','ῷ':'ō',
                            'ἆ':'a','ἦ':'ē','ἶ':'i','ὖ':'y','ὦ':'ō',//+Apostorofos
                            'ᾆ':'a','ᾖ':'ē',                'ᾦ':'ō',//+Apostorofos+
                            'ἇ':'a','ἧ':'ē','ἷ':'i','ὗ':'y','ὧ':'ō',//+Daseia
                            'ᾇ':'a','ᾗ':'ē',                'ᾧ':'ō',//+Daseia +iota
                            
                     //Dasia (Rough Breathing) ( ῾ )
                        //Uppercase  
                         'Ἁ':'Ha','Ἑ':'He','Ἡ':'Hē','Ἱ':'Hi','Ὁ':'Ho','Ὑ':'Hy','Ῥ':'Rh','Ὡ':'Hō',
                         'Ἅ':'Ha','Ἕ':'He','Ἥ':'Hē','Ἵ':'Hi','Ὅ':'Ho','Ὥ':'Hō',//+oxia
                         'ᾍ':'Ha', 
                        //Lowercase
                            'ἁ':'ha','ἑ':'he','ἡ':'hē','ἱ':'hi','ὁ':'ho','ὑ':'hu','ὡ':'hō',
                            'ᾁ':'ha','ᾑ':'hē','ᾡ':'hō','ᾅ':'ha','ῥ':'hr','ῳ':'hō',
                            'ἅ':'ha','ἕ':'he','ἥ':'hē','ἵ':'hi','ὅ':'ho','ὕ':'hu', //+oxia   
                            'ᾕ':'hē','ᾥ':'hō',//oxia
                            'ἇ':'ha','ἧ':'hē','ἷ':'hi','ὗ':'hu','ὧ':'hō',//perispomeni
                        //Apostrofos ( ᾽ )
                            //Uppercase
                                'Ἀ':'A','Ἐ':'E','Ἠ':'Ē','Ἰ':'I','Ὀ':'O','Ὠ':'Ō',
                                'ᾈ':'A',        'ᾘ':'Ē',                'ᾨ':'Ō',
                            //Lowercase
                                'ἀ':'a','ἐ':'e','ἠ':'ē','ἰ':'i','ὐ':'u','ὀ':'o','ὠ':'ō',
                                'ᾀ':'a',        'ᾐ':'ē',                        'ᾠ':'ō',

                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','(':'(',')':')','_':'_','ϲ':'s','«':'«','»':'»',
                    //Numbers
                    '0':'0','1':'1','2':'2','3':'3','4':'4','5':'5','6':'6','7':'7','8':'8','9':'9',
                    //iota subscript
                        'ᾳ': 'a','ῃ': 'ē','ῳ': 'ō',
                        'ᾳ': 'a','ῃ': 'ē',
                    //Uppercase
                        'Ϊ':'I','Ϋ':'Y',
                    //Lowercase
                        'ϊ':'i','ϋ':'u','ΐ':'i','ΰ':'u',

            //2-letters Mapping
                    //Uppercase
                    'Αυ':'Au','Ευ':'Eu','Ηυ':'Ēu','Ου':'Ēu','Ωυ':'Ōu',
                    //Lowercase
                    'άι':'ai','γγ':'ng','γκ':'nk','γξ':'nx','γχ':'nch','έι':'ei','μπ':'mp','ντ':'nt',
                    'αυ':'au','ευ':'eu','ηυ':'ēu','ου':'ou','ωυ':'ōu',
                    //Tonismena
                    'Αύ':'Au','Εύ':'Eu','Ηύ':'Ēu','Ού':'Ēu','Ωύ':'Ōu',
                    'αύ':'au','εύ':'eu','ηύ':'ēu','ού':'ou','ωύ':'ōu',
                    'Εὕ':'Eu',

                //Shmeiosh 7 (In the end of a word)
                    //keno
                        'γκ ':'gk','μπ ':'mp',
                    //With special charachers
                        'γκ,':'gk','μπ,':'mp','γκ.':'gk','μπ.':'mp','γκ;':'gk','μπ;':'mp',

                //Shmeiosh 9   ά, έ, ή, ί, ό, ώ       ή     ϋ,ΰ
                    'Άυ':'Áv','Έυ':'Év','Ήυ':'Ī́v','Όυ':'Óv',
                    'άυ':'áv','έυ':'év','ήυ':'ī́v','όυ':'óv',

                //gia meta
                'εὕρ':'heu','αἱρ':'hai','ΓΧ':'Nch','γχ':'nch'
                
                    
    }


    const transliterationMapStarters ={
        //Starters 
            //2-letters Starters
                    //Uppercase
                    'Μπ':'B','Ντ':'D̲',  
                    //Lowercase
                        'ντ':'d̲','μπ':'b',
                    //2 letter output
                        'Γκ':'Gk','γκ':'gk'
    }

    let result = '';
    let i = 0;
    let isWordStart = true;

    while (i < text.length) {
        
        if (text[i]=== ' '){
            result += text[i];
            isWordStart = true;
            i++
            continue;
        }
        if(isWordStart){
            const twoLetterCombo = text[i] + text[i+1];
            //Starters (2 Letters)
            if(transliterationMapStarters.hasOwnProperty(twoLetterCombo)) {
                result += transliterationMapStarters[twoLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }else{
                //Handle 3-letter combinations
                const threeLetterCombo = text[i] + text[i+1] + text[i+2];
                if (transliterationMap.hasOwnProperty(threeLetterCombo)){
                    result += transliterationMap[threeLetterCombo];
                    i += 2; // Move to the next pair of characters
                    isWordStart = false;
                    continue;
                }
                //Handle 2-letter combinations
                const twoLetterCombo = text[i] + text[i+1];
                if(transliterationMap.hasOwnProperty(twoLetterCombo)) {
                    result += transliterationMap[twoLetterCombo];
                    i += 2; // Move to the next pair of characters
                    isWordStart = false;
                    continue;
                }
                //Single letter combinations    
                result += transliterationMap[text[i]] || '*';
                i++
                isWordStart=false;}
        }else{
            //Handle 3-letter combinations
            const threeLetterCombo = text[i] + text[i+1] + text[i+2];
            if (transliterationMap.hasOwnProperty(threeLetterCombo)){
                result += transliterationMap[threeLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }
            //Handle 2-letter combinations
            const twoLetterCombo = text[i] + text[i+1];
            if(transliterationMap.hasOwnProperty(twoLetterCombo)) {
                result += transliterationMap[twoLetterCombo];
                i += 2; // Move to the next pair of characters
                isWordStart = false;
                continue;
            }
            //Single letter combinations    
            result += transliterationMap[text[i]] || '*';
            i++
            isWordStart=false;
        }
    }
    return result;

}

// Set default language to Greek
setLanguage('el');
