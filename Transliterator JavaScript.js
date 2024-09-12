const translations = {
    el: {
        title: "Μεταγραμματισμός ελληνικών χαρακτήρων σε λατινικούς",
        textLabel: "Κείμενο",
        textPlaceholder: "Εισάγετε το κείμενο για μεταγραμματισμό",
        ancientGreekLabel: "Αρχαία Ελληνικά",
        alaLcLabel: "ALA-LC Romanization",
        copy: "Αντιγραφή",
        iso843Label: "ISO843:1997",
        submitButton: "Υποβολή",
        clearButton: "Καθαρισμός",
        disclaimer: "Disclaimer: Για τον μεταγραμματισμό ονομάτων και φράσεων στα νέα ελληνικά σύμφωνα με τους κανόνες του ALA-LC Romanization table, επιβεβαιώστε την προέλευση των λέξεων (αν δηλαδή προέρχονται από δασυνόμενες λέξεις της αρχαίας ελληνικής) μέσα από το <a href='https://www.greek-language.gr/digitalResources/ancient_greek/tools/liddell-scott/index.html' target='_blank' target='_blank'>online λεξικό αρχαίας ελληνικής των Liddell-Scott</a>στον δικτυακό τόπο του Κέντρου Ελληνικής Γλώσσας."
    },
    en: {
        title: "Transliteration of Greek characters into Latin",
        textLabel: "Text",
        textPlaceholder: "Enter text for transliteration",
        ancientGreekLabel: "Ancient Greek",
        alaLcLabel: "ALA-LC Romanization",
        copy: "Copy",
        iso843Label: "ISO843:1997",
        submitButton: "Submit",
        clearButton: "Clear",
        disclaimer: "Disclaimer: For the transliteration of names and phrases in Modern Greek according to the rules of the ALA-LC Romanization table, confirm the origin of the words (whether they come from aspirated words of Ancient Greek) through the <a href='https://www.greek-language.gr/digitalResources/ancient_greek/tools/liddell-scott/index.html' target='_blank'>online Ancient Greek Liddell-Scott dictionary</a> on the website of the Center for the Greek Language."
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
    document.getElementById('disclaimer').innerHTML = translations[lang].disclaimer;
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
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ī','Θ':'Th',
                    'Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X','Ο':'O','Π':'P',
                    'Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'F','Χ':'Ch','Ψ':'Ps','Ω':'Ō',
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ī','θ':'th',
                    'ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x','ο':'o','π':'p',
                    'ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'f','χ':'ch','ψ':'ps','ω':'ō',
                //Tonismena
                    //Uppercase
                    'Ά':'Á','Έ':'É','Ή':'Ī́','Ί':'Í','Ό':'Ó','Ύ':'Ý','Ώ':'Ṓ',
                    //Lowercase
                    'ά':'á','έ':'é','ή':'ī́','ί':'í','ό':'ó','ύ':'ý','ώ':'ṓ',
                            'έ':'é',        'ί':'í','ό':'ó','ύ':'ý',//Diff asci code
                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','(':'(',')':')','΄':'΄','«':'"','»':'"','·':';','"':'"',
                    '&':'&','%':'%','@':'@','#':'#','^':'^','*':'*','+':'+','/':'/','[':'[',']':']','{':'{','}':'}','`':'`',"'":"'",
                    '!':'!',':':':','$':'$',
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
                        'ά':'á','έ':'é','ή':'ī́','ί':'í','ό':'ó','ύ':'ý','ώ':'ṓ',
                                'έ':'é','ἰ':'i',        'ό':'ó','ύ':'ý', //Diff asci code
                        'ἄ':'á','ἔ':'é','ἤ':'ī́','ἴ':'í','ὄ':'ó','ὕ':'ý','ὤ':'ṓ','ᾤ':'ṓ', //+Apostrofos
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
                        'ᾶ':'á','ῆ':'ī́','ῖ':'í','ῦ':'ý','ῶ':'ṓ',
                        'ᾷ':'á','ῇ':'ī́','ῗ':'ḯ','ῧ':'ÿ́','ῷ':'ṓ',
                        'ἆ':'á','ἦ':'ī́','ἶ':'í','ὖ':'ý','ὦ':'ṓ', //+Apostorofos
                        'ᾆ':'á','ᾖ':'ī́',                'ᾦ':'ṓ',//+Apostorofos+
                        'ἇ':'á','ἧ':'ī́','ἷ':'í','ὗ':'ý','ὧ':'ṓ',//+Daseia
                        'ᾇ':'á','ᾗ':'ī́',                'ᾧ':'ṓ',//+Daseia +iota

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
                          'ᾕ':'ī́','ᾥ':'ṓ',//oxia
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
                                'έ':'é','ἰ':'i',        'ό':'ó','ύ':'ý', //Diff asci code
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
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','(':'(',')':')','΄':'΄','«':'"','»':'"','·':';','"':'"',
                    '&':'&','%':'%','@':'@','#':'#','^':'^','*':'*','+':'+','/':'/','[':'[',']':']','{':'{','}':'}','`':'`',"'":"'",
                    '!':'!',':':':','$':'$',
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
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ē','Θ':'Th',
                    'Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X','Ο':'O','Π':'P',
                    'Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'Ph','Χ':'Ch','Ψ':'Ps','Ω':'Ō', 
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ē','θ':'th',
                    'ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x','ο':'o','π':'p',
                    'ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'ph','χ':'ch','ψ':'ps','ω':'ō',
                      //Tonismena
                    //Uppercase
                    'Ά':'A','Έ':'E','Ή':'Ē','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                    //Lowercase
                    'ά':'a','έ':'e','ή':'ē','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                            'έ':'e',        'ί':'i','ό':'o','ύ':'y', // diff asci code
                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','(':'(',')':')','΄':'΄','«':'"','»':'"','·':';','"':'"',
                    '&':'&','%':'%','@':'@','#':'#','^':'^','*':'*','+':'+','/':'/','[':'[',']':']','{':'{','}':'}','`':'`',"'":"'",
                    '!':'!',':':':','$':'$',
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
                                'έ':'e',        'ἰ':'i','ό':'o','ύ':'y', // diff asci code
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
                    'Αι ':'Ha','Αψύ':'Ha',
                    'Επτ':'He','Έξι':'He','Έξη':'He','Έρπ':'He','Έωλ':'He',
                    'Ήρα':'Hē','Ηρώ':'Hē','Ήρω':'Hē','Ηρω':'Hē','Ήβη':'Hē','Ηδυ':'Hē','Ηδύ':'Hē','Ήλο':'Hē','Ήλω':'Hē','Ημι':'Hē','Ημί':'',
                    'Ηνί':'Hē','Ηττ':'Hē','Ήττ':'Hē',
                    'Ιππ':'Hi',
                    'Οι ':'Ho','Όρκ':'Ho','Ορκ':'Ho','Ολκ':'Ho','Όλκ':'Ho','Ολο':'Ho','Ολό':'Ho','Όλο':'Ho','Ομο':'Ho','Ομό':'Ho','Οπλ':'Ho',
                    'Όπλ':'Ho','Όση':'Ho','Οσο':'Ho','Όσο':'Ho','Ότι':'Ho',
                    'Ωρο':'Hō','Ώρα':'Hō','Ωρα':'Hō',
                //Lowercase
                    'αι ':'ha','αψύ':'ha',
                    'επτ':'he','έξι':'he','έξη':'he','έρπ':'he','έωλ':'he',
                    'ήρα':'hē','ηρώ':'hē','ήρω':'hē','ηρω':'hē','ήβη':'hē','ηδυ':'hē','ηδύ':'hē','ήλο':'hē','ήλω':'hē','ημι':'hē','ημί':'hē','ήμι':'hē',
                    'ηνί':'hē','ηττ':'hē','ήττ':'hē',
                    'ιππ':'hi',
                    'όρκ':'ho','ορκ':'ho','οι ':'ho','ολκ':'ho','όλκ':'ho','ολο':'ho','ολό':'ho','όλο':'ho','ομο':'ho','ομό':'ho','οπλ':'ho','όπλ':'ho',
                    'όση':'ho','οσο':'ho','όσο':'ho','ότι':'ho',
                    'ωρο':'hō','ώρα':'hō','ωρα':'hō',
            //4 letters 
                //Uppercase  
                    'Αγιο':'Ha','Αγνη':'Ha','Αγνο':'Ha','Άδης':'Ha','Αίμα':'Ha','Αίμω':'Ha','Αιμω':'Ha','Αγια':'Ha','Αγία':'Ha','Άγιο':'Ha','Αγιω':'Ha',
                    'Αλων':'Ha','Αμάξ':'Ha','Άμαξ':'Ha','Απλό':'Ha','Αγιώ':'Ha','Αγνί':'Ha','Αδρό':'Ha','Αιμο':'Ha','Αίμο':'Ha','Αλάτ':'Ha','Αλίε':'Ha',
                    'Άλμα':'Ha','Άλμη':'Ha','Αλών':'Ha','Άπαξ':'Ha','Απλά ':'Ha','Αγίο':'Ha','Απλο':'Ha','Απτι':'Ha','Άρμη':'Ha','Αψιδ':'Ha','Αψίδ':'Ha',
                    'Αψίθ':'Ha','Αψίκ':'Ha','Αψίχ':'Ha','Αφή ':'Ha',
                    'Εαυτ':'He','Εβρί':'He','Εδρά':'He','Εκόν':'He','Εκών':'He','Ελκο':'He','Έλκο':'He','Ελκτ':'He','Έλκω':'He','Έλξη':'He',
                    'Ελόβ':'He','Έλος':'He','Εξηκ':'He','Εξήκ':'He','Εξής':'He','Εορτ':'He','Επτα':'He','Επτά':'He','Ερμή':'He','Εύρε':'He',
                    'Ευρη':'He','Εύρη':'He','Εφτά':'He','Εωθι':'He','Εωσφ':'He','Έβρο':'He','Έλεν':'He','Ελέν':'He','Έλλη':'He','Ελλή':'He',
                    'Ένωσ':'He','Eξαδ':'He','Ερμα':'He','Ερμά':'He','Ερμέ':'He','Ερμη':'He','Ερμο':'He','Ερμί':'He','Ενωσ':'He','Ενωτ':'He',
                    'Ενωμ':'he',
                    'Ηλιό':'Hē','Ηλιο':'Hē','Ημερ':'Hē','Ηρόδ':'Hē','Ησύχ':'Hē','Ησυχ':'Hē','Ήσυχ':'Hē','Ηνωμ':'Hē',
                    'Ηγεμ':'Hē','Ηγεσ':'Hē','Ηγετ':'Hē','Ηγήτ':'Hē','Ηδον':'Hē','Ήδυσ':'Hē','Ήμερ':'Hē','Ηπαρ':'Hē','Ήπαρ':'Hē','Ηπατ':'Hē','Ήπατ':'Hē',
                    'Ήρωα':'Hē','Ήτις':'Hē',
                    'Ιερό':'Hi','Ιερο':'Hi','Ιερή':'Hi','Ιερη':'Hi','Ιερά':'Hi','Ιερα':'Hi','Ιερώ':'Hi','Ιερώ':'Hi','Ιερω':'Hi','Ιλαρ':'Hi','Ιμάτ':'Hi',
                    'Ιδρο':'Hi','Ιδρυ':'Hi','Ιδρύ':'Hi','Ίδρυ':'Hi','Ιδρω':'Hi','Ιδρώ':'Hi','Ίδρω':'Hi','Ιζημ':'Hi','Ίζημ':'Hi','Ικετ':'Hi','Ικέτ':'Hi',
                    'Ιπτά':'Hi','Ίπτα':'Hi','Ίστα':'Hi','Ιστο':'Hi','Ιστό':'Hi','Ίδρυ':'Hi','Ιδρύ':'Hi','Ιδρυ':'Hi',
                    'Όμηρ':'Ho','Ομηρ':'Ho','Όμιλ':'Ho','Ομίλ':'Ho','Ομιλ':'Ho','Όσιο':'Ho','Οσιο':'Ho','Οδεύ':'Ho','Όδευ':'Ho','Οδηγ':'Ho','Οδήγ':'Ho',
                    'Οδικ':'Ho','Οδοδ':'Ho','Οδοκ':'Ho','Οδομ':'Ho','Οδοπ':'Ho','Οδοσ':'Ho','Οδός':'Ho','Οδόσ':'Ho','Οδόφ':'Ho','Ομαδ':'Ho','Ομάδ':'Ho',
                    'Ομαλ':'Ho','Όμιλ':'Ho','Ομων':'Ho','Ομών':'Ho','Όμως':'Ho','Οριζ':'Ho','Ορίζ':'Ho','Οριο':'Ho','Όριο':'Ho','Όρκα':'O',
                    'Ορμέ':'Ho','Ορμη':'Ho','Ορμή':'Ho','Ορμί':'Ho','Ορμώ':'Ho','Οσία':'Ho','Οσιό':'Ho',
                    'Υψιλ':'Yps',
                    'Ωριμ':'Hō','Ώριμ':'Hō',
                //Lowercase
                    'αγιο':'ha','αγνη':'ha','αγνο':'ha','άδης':'ha','αίμα':'ha','αίμω':'ha','αιμω':'ha','αγια':'ha','αγία':'ha','άγιο':'ha','αγιω':'ha',
                    'αλων':'ha','αμάξ':'ha','άμαξ':'ha','απλό':'ha','αγιώ':'ha','αγνί':'ha','αδρό':'ha','αιμο':'ha','αίμο':'ha','αλάτ':'ha','αλίε':'ha',
                    'άλμα':'ha','άλμη':'ha','αλών':'ha','άπαξ':'ha','απλά ':'ha','αγίο':'ha','απλο':'ha','απτι':'ha','άρμη':'ha','αψιδ':'ha','αψίδ':'ha',
                    'αψίθ':'ha','αψίκ':'ha','αψίχ':'ha','αφή ':'ha',
                    'έβρο':'he','έλεν':'he','ελέν':'he','έλεν':'he','έλλη':'he','ελλή':'he','ένωσ':'he','εξαδ':'he','ερμα':'he','ερμά':'he','ερμέ':'he','ερμη':'he',
                    'ερμο':'he','ερμί':'he','ένα ':'he','ένωσ':'he','ενωσ':'he','ενωτ':'he','ενωμ':'he','έδρα':'he','έρμα':'he',
                    'εαυτ':'he','εβρί':'he','εδρά':'he','εκόν':'he','εκών':'he','ελκο':'he','έλκο':'he','ελκτ':'he','έλκω':'he',
                    'έλξη':'he','ελόβ':'he','έλος':'he','εξηκ':'he','εξήκ':'he','εξής':'he','εορτ':'he','επτα':'he','επτά':'he','ερμή':'he','εύρε':'he',
                    'ευρη':'he','εύρη':'he','εφτά':'he','εωθι':'he','εωσφ':'he',
                    'ηλιό':'hē','ηλιο':'hē','ημερ':'hē','ηρόδ':'hē','ησύχ':'hē','ησυχ':'hē','ήσυχ':'hē','ηνωμ':'Hē','ηδυ':'hē','ηδύ':'hē','ήλο':'hē',
                    'ηγεμ':'hē','ηγεσ':'hē','ηγετ':'hē','ηγήτ':'hē',
                    'ηδον':'hē','ήδυσ':'hē','ήμερ':'hē','ηπαρ':'hē','ήπαρ':'hē','ηπατ':'hē','ήπατ':'hē','ήρωα':'hē','ήτις':'hē',
                    'ιερό':'hi','ιερο':'hi','ιερή':'hi','ιερη':'hi','ιερά':'hi','ιερα':'hi','ιερώ':'hi','ιερώ':'hi','ιερω':'hi','ιλαρ':'hi','ιμάτ':'hi',
                    'ίδρυ':'hi','ιδρύ':'hi','ιδρυ':'hi','ιδρο':'hi','ιδρω':'hi','ιδρώ':'hi','ίδρω':'hi','ιζημ':'hi','ίζημ':'hi','ικετ':'hi','ικέτ':'hi',
                    'ιπτά':'hi','ίπτα':'hi','ίστα':'hi','ιστο':'hi','ιστό':'hi',
                    'όμηρ':'ho','ομηρ':'ho','όμιλ':'ho','ομίλ':'ho','ομιλ':'ho','όσιο':'ho','οσιο':'ho','ολκ':'ho','όλκ':'ho','ολο':'ho','ολό':'ho',
                    'οδεύ':'ho','όδευ':'ho','οδηγ':'ho',
                    'οδήγ':'ho','οδικ':'ho','οδοδ':'ho','οδοκ':'ho','οδομ':'ho','οδοπ':'ho','οδοσ':'ho','οδός':'ho','οδόφ':'ho','ομαδ':'ho','ομάδ':'ho',
                    'ομαλ':'ho','ομων':'ho','ομών':'ho','όμως':'ho','οριζ':'ho','ορίζ':'ho','οριο':'ho','όριο':'ho','όρκα':'ho',
                    'ορμέ':'ho','ορμη':'ho','ορμή':'ho','ορμί':'ho','ορμώ':'ho','οσία':'ho','οσιό':'ho',
                    'ύψιλ':'yps',
					'ωριμ':'hō','ώριμ':'hō',
            //5 letters
                //Uppercase
                    'Άλατα':'Ha','Αλατά':'Ha','Αλατό':'Ha','Αλιεύ':'Ha','Αμαρτ':'Ha','Απαλό':'Ha','Άρπα ':'Ha','Αβροδ':'Ha','Αβρός':'Ha','Αβρότ':'Ha',
                    'Αβροφ':'Ha','Αγνεί':'Ha','Αθρόο':'Ha','Αιματ':'Ha','Αιρεσ':'Ha','Αιρέσ':'Ha','Αίρεσ':'Ha','Αιρετ':'Ha','Αλατι':'Ha','Αλατί':'Ha',
                    'Αλατο':'Ha','Αλιάκ':'Ha','Αλίαρ':'Ha','Αγιου':'A','Αγιού':'A','Αμιλλ':'Ha','Άμιλλ':'Ha','Αλιευ':'Ha','Αλματ':'Ha','Αλμυρ':'Ha',
                    'Αλμύρ':'Ha','Αλόνν':'Ha','Αλτήρ':'Ha','Άλτης':'Ha','Αλυκή':'Ha','Αλυσο':'Ha','Αλυσω':'Ha','Αλώσε':'Ha','Άλωση':'Ha','Αμαδρ':'Ha',
                    'Απαλύ':'Ha','Απάλυ':'Ha','Απλών':'Ha','Απλώσ':'Ha','Απλώς':'Ha','Απλωτ':'Ha','Άπτομ':'Ha','Απτός':'Ha','Αρμόδ':'Ha','Αρμόζ':'Ha',
                    'Αρμον':'Ha','Αρμοσ':'Ha','Αρμός':'Ha','Αρμυρ':'Ha','Αρμύρ':'Ha','Αρπαζ':'Ha','Αρπάζ':'Ha','Αρπαγ':'Ha','Αρπακ':'Ha','Αρπαξ':'Ha',
                    'Αρπαχ':'Ha','Αψιμα':'Ha',
                    'Εβραι':'He','Ειμαρ':'He','Εκάβη':'He','Εκάτη':'He','Έκτωρ':'He','Ελικώ':'He','Ελλάδ':'He','Ελλάν':'He','Ελλάς':'He','Ελλην':'He',
                    'Ερμής':'He','Ερμιό':'He','Ερμιο':'He','Έσπερ':'He','Εσπέρ':'He','Εστία':'He','Εταιρ':'He','Εκατό':'He','Εκατα':'He','Εκατο':'He',
                    'Εξηντ':'He','Εδρά ':'He','Ένας ':'He','Έδρα ':'He','Έρμα ':'He','Ένα ':'He','Εβδομ':'He','Εδραι':'He','Εδραί':'He','Έδραν':'He',
                    'Εδρεύ':'He','Εδώλι':'He','Είλωτ':'He','Ειρκτ':'He','Ειρμο':'He','Ειρμό':'He','Εκάστ':'He','Έκαστ':'He','Εκατέ':'He','Εκάτε':'He',
                    'Εκουσ':'He','Εκούσ':'He','Ελιγμ':'He','Έλικα':'He','Ελικο':'He','Ελικό':'He','Ελικω':'He','Ελίσσ':'He','Έλκηθ':'He','Ελκυσ':'He',
                    'Ελλαδ':'He','Ελλαν':'He','Ελλήσ':'He','Ελονο':'He','Ένεκα':'He','Ένεκε':'He','Ενικό':'He','Ενισμ':'He','Ενιστ':'He','Ενώνω':'He',
                    'Ένωση':'He','Ενωσί':'He','Ενωτι':'He','Εξήντ':'He','Έπομα':'He','Επομέ':'He','Επόμε':'He','Ερμαί':'He','Ερμαϊ':'He','Έρμαι':'He',
                    'Ερπετ':'He','Εσμός':'He','Εστια':'He','Εστιά':'He','Εταίρ':'He','Ετερο':'He','Ετερό':'He','Έτερο':'He','Ετοιμ':'He','Έτοιμ':'He',
                    'Εύρεσ':'He','Ευρεσ':'He','Ευρετ':'He','Εύρημ':'He','Ευρημ':'He','Ευρήμ':'He','Εύρηκ':'He','Ευρίσ':'He','Εφταγ':'He','Εφταδ':'He',
                    'Εφταε':'He','Εφταή':'He','Εφτακ':'He','Εφταμ':'He','Εφτασ':'He','Εφταψ':'He',
                    'Ηγουμ':'Hē','Ηρακλ':'Hē','Ηράκλ':'Hē','Ηρόστ':'Hē','Ησαΐα':'Hē','Ησίοδ':'Hē','Ηφαίσ':'Hē','Ηφαισ':'Hē','Ήφαισ':'Hē','Ηγησώ':'Hē',
                    'Ηγιασ':'Hē','Ηγούμ':'Hē','Ήκιστ':'Hē','Ηλικι':'Hē','Ηλικί':'Hē','Ημέρα':'Hē','Ηπάτω':'Hē',
                    'Ιερου':'Hi','Ιστορ':'Hi','Ιδρώς':'Hi','Ιδρώτ':'Hi','Ικανή':'Hi','Ικανο':'Hi','Ικανό':'Hi','Ικεσί':'Hi','Ιμαντ':'Hi','Ιμάντ':'Hi',
                    'Ιματι':'Hi','Ιμάτι':'Hi','Ίμερο':'Hi','Ιστιο':'Hi','Ιστίο':'Hi',
                    'Ολλαν':'Ho','Οδοιπ':'Ho','Οδονο':'Ho','Ομιχλ':'Ho','Ομίχλ':'Ho','Ομορφ':'O','Όμορφ':'O','Οραμα':'Ho','Όραμα':'Ho','Όραση':'Ho',
                    'Ορατό':'Ho','Ορισμ':'Ho','Οριστ':'Ho','Ορμαθ':'Ho','Ορμον':'Ho','Ορμόν':'Ho','Όρμος':'Ho','Ορμυλ':'Ho','Οροσή':'Ho','Ορόση':'Ho',
                    'Όστις':'Ho',
					'Ωριμά':'Hō','Ωρίμα':'Hō',
                    //Lowercase
                    'άλατα':'ha','αλατά':'ha','αλατό':'ha','αλιεύ':'ha','αμαρτ':'ha','απαλό':'ha','άρπα ':'Ha','αβροδ':'ha','αβρός':'ha','αβρότ':'ha',
                    'αβροφ':'ha','αγνεί':'ha','αθρόο':'ha','αιματ':'ha','αιρεσ':'ha','αιρέσ':'ha','αίρεσ':'ha','αιρετ':'ha','αλατι':'ha','αλατί':'ha',
                    'αλατο':'ha','αλιάκ':'ha','αλίαρ':'ha','αγιου':'a','αγιού':'a','αμιλλ':'ha','άμιλλ':'ha','αλιευ':'ha','αλματ':'ha','αλμυρ':'ha',
                    'αλμύρ':'ha','αλόνν':'ha','αλτήρ':'ha','άλτης':'ha','αλυκή':'ha','αλυσο':'ha','αλυσω':'ha','αλώσε':'ha','άλωση':'ha','αμαδρ':'ha',
                    'απαλύ':'ha','απάλυ':'ha','απλών':'ha','απλώσ':'ha','απλώς':'ha','απλωτ':'ha','άπτομ':'ha','απτός':'ha','αρμόδ':'ha','αρμόζ':'ha',
                    'αρμον':'ha','αρμοσ':'ha','αρμός':'ha','αρμυρ':'ha','αρμύρ':'ha','αρπαζ':'ha','αρπάζ':'ha','αρπαγ':'ha','αρπακ':'ha','αρπαξ':'ha',
                    'αρπαχ':'ha','αψιμα':'ha',
                    'εβραι':'he','ειμαρ':'he','εκάβη':'he','εκάτη':'he','έκτωρ':'he','ελικώ':'he','ελλάδ':'he','ελλάν':'he','ελλάς':'he','ελλην':'he',
                    'ερμής':'he','ερμιό':'he','ερμιο':'he','έσπερ':'he','εσπέρ':'he','εστία':'he','εταιρ':'he','εκατό':'he','εκατα':'he','εκατο':'he',
                    'εξηντ':'he','εδρά ':'he','ένας ':'he','έδρα ':'he','έρμα ':'he','ένα ':'he','εβδομ':'he','εδραι':'he','εδραί':'he','έδραν':'he',
                    'εδρεύ':'he','εδώλι':'he','είλωτ':'he','ειρκτ':'he','ειρμο':'he','ειρμό':'he','εκάστ':'he','έκαστ':'he','εκατέ':'he','εκάτε':'he',
                    'εκουσ':'he','εκούσ':'he','ελιγμ':'he','έλικα':'he','ελικο':'he','ελικό':'he','ελικω':'he','ελίσσ':'he','έλκηθ':'he','ελκυσ':'he',
                    'ελλαδ':'he','ελλαν':'he','ελλήσ':'he','ελονο':'he','ένεκα':'he','ένεκε':'he','ενικό':'he','ενισμ':'he','ενιστ':'he','ενώνω':'he',
                    'ένωση':'he','ενωσί':'he','ενωτι':'he','εξήντ':'he','έπομα':'he','Επομέ':'he','επόμε':'he','ερμαί':'he','ερμαϊ':'he','έρμαι':'he',
                    'ερπετ':'he','εσμός':'he','εστια':'he','εστιά':'he','εταίρ':'he','ετερο':'he','ετερό':'he','έτερο':'he','ετοιμ':'he','έτοιμ':'he',
                    'εύρεσ':'he','ευρεσ':'he','ευρετ':'he','εύρημ':'he','ευρημ':'he','ευρήμ':'he','εύρηκ':'he','ευρίσ':'he','εφταγ':'he','εφταδ':'he',
                    'εφταε':'he','εφταή':'he','εφτακ':'he','εφταμ':'he','εφτασ':'he','εφταψ':'he',
                    'ηγουμ':'hē','ηρακλ':'hē','ηράκλ':'hē','ηρόστ':'hē','ησαΐα':'hē','ησίοδ':'hē','ηφαίσ':'hē','ηφαισ':'hē','ήφαισ':'hē','ηγησώ':'Hē',
                    'ηγιασ':'hē','ηγούμ':'hē','ήκιστ':'hē','ηλικι':'hē','ηλικί':'hē','ημέρα':'hē','ηπάτω':'hē',
                    'ιερου':'hi','ιστορ':'hi','ιδρώς':'hi','ιδρώτ':'hi','ικανή':'hi','ικανο':'hi','ικανό':'hi','ικεσί':'hi','ιμαντ':'hi','ιμάντ':'hi',
                    'ιματι':'hi','ιμάτι':'hi','ίμερο':'hi','ιστιο':'hi','ιστίο':'hi',
                    'ολλαν':'ho','οδοιπ':'ho','οδονο':'ho','ομιχλ':'ho','ομίχλ':'ho','ομορφ':'o','όμορφ':'o','οραμα':'ho','όραμα':'ho','όραση':'ho',
                    'ορατό':'ho','ορισμ':'ho','οριστ':'ho','ορμαθ':'ho','ορμον':'ho','ορμόν':'ho','όρμος':'ho','ορμυλ':'Ho','οροσή':'ho','ορόση':'ho',
                    'όστις':'ho',
                    'ωριμά':'Hō','ωρίμα':'Hō',
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
                                    'έ':'e',        'ἰ':'i','ό':'o','ύ':'y', // diff asci code
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
                            'ἁ':'ha','ἑ':'he','ἡ':'hē','ἱ':'hi','ὁ':'ho','ὑ':'hu','ῥ':'hr','ὡ':'hō',
                            'ᾁ':'ha','ᾑ':'hē','ᾡ':'hō','ᾅ':'ha','ῳ':'hō',
                            'ἅ':'ha','ἕ':'he','ἥ':'hē','ἵ':'hi','ὅ':'ho','ὕ':'hu', //+oxia   
                            'ᾕ':'hē','ᾥ':'hō',//+oxia + iota
                            'ἇ':'ha','ἧ':'hē','ἷ':'hi','ὗ':'hu','ὧ':'hō',//+perispomeni
                    //Apostrofos ( ᾽ )
                        //Uppercase
                            'Ἀ':'A','Ἐ':'E','Ἠ':'Ē','Ἰ':'I','Ὀ':'O','Ὠ':'Ō',
                            'ᾈ':'A',        'ᾘ':'Ē',                'ᾨ':'Ō',
                        //Lowercase
                            'ἀ':'a','ἐ':'e','ἠ':'ē','ἰ':'i','ὐ':'u','ὀ':'o','ὠ':'ō',
                            'ᾀ':'a',        'ᾐ':'ē',                        'ᾠ':'ō',

                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','(':'(',')':')','΄':'΄','«':'"','»':'"','·':';','"':'"',
                    '&':'&','%':'%','@':'@','#':'#','^':'^','*':'*','+':'+','/':'/','[':'[',']':']','{':'{','}':'}','`':'`',"'":"'",
                    '!':'!',':':':','$':'$',
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
