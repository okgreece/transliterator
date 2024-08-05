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
        clearButton: "Διαγραφή"
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
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_',
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
                        //Uppercase - Keno? 
                        //Lowercase
                            'ᾶ':'a','ῆ':'ī','ῖ':'i','ῦ':'u','ῶ':'ō',
                            'ᾷ':'a','ῇ':'ī','ῗ':'ï','ῧ':'ÿ','ῷ':'ō',
                            'ἆ':'a','ἦ':'ī','ἶ':'i','ὖ':'y','ὦ':'ō', //apostrofos .Might delete later
                            'ὗ':'y', //+dasia 
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
                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_',
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
                    'αύ':'aú','εύ':'eú','ού':'oú',

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
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','ϲ':'s',

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
                    
            //3-letters Mapping

                
                //Shmeiosh 3    ( α,ε,η,ι,ο,ω ?     β,γ,δ,ζ,λ,μ,ν,ρ)   V  + Shmeiosh 10
                    //AY  
                       //Uppercase 
                       'Aυα':'Au','Aυε':'Au','Aυη':'Au','Aυι':'Au','Aυο':'Au','Aυω':'Au',       
                       'Aυβ':'Au','Aυγ':'Au','Aυδ':'Au','Aυζ':'Au','Aυλ':'Au','Aυμ':'Au','Aυν':'Au','Aυρ':'Au',
                          //Tonismena
                       'Aύα':'Άu','Aύε':'Άu','Aύη':'Άu','Aύι':'Άu','Aύο':'Άu','Aύω':'Άu',
                       'Aύβ':'Άu','Aύγ':'Άu','Aύδ':'Άu','Aύζ':'Άu','Aύλ':'Άu','Aύμ':'Άu','Aύν':'Άu','Aύρ':'Άu',
                       //Lowercase
                       'αυα':'au','αυε':'au','αυη':'au','αυι':'au','αυο':'au','αυω':'au',
                       'αυβ':'au','αυγ':'au','αυδ':'au','αυζ':'au','αυλ':'au','αυμ':'au','αυν':'au','αυρ':'au',
                          //Tonismena
                       'αύα':'au','αύε':'au','αύη':'au','αύι':'au','αύο':'au','αύω':'au',
                       'αύβ':'au','αύγ':'au','αύδ':'au','αύζ':'au','αύλ':'au','αύμ':'au','αύν':'au','αύρ':'au',

                    //EY  
                        //Uppercase 
                       'Ευα':'Eu','Ευε':'Eu','Ευη':'Eu','Ευι':'Eu','Ευο':'Eu','Ευω':'Eu',
                       'Ευβ':'Eu','Ευγ':'Eu','Ευδ':'Eu','Ευζ':'Eu','ΕYλ':'Eu','Ευμ':'Eu','Ευν':'Eu','Ευρ':'Eu',
                          //Tonismena
                       'Εύα':'Éu','Εύε':'Éu','Εύη':'Éu','Εύι':'Éu','Εύο':'Éu','Εύω':'Éu',
                       'Εύβ':'Éu','Εύγ':'Éu','Εύδ':'Éu','Εύζ':'Éu','Εύλ':'Éu','Εύμ':'Éu','Εύν':'Éu','Εύρ':'Éu',
                        //Lowercase
                       'ευα':'eu','ευε':'eu','ευη':'eu','ευι':'eu','ευο':'eu','ευω':'eu',
                       'ευβ':'eu','ευγ':'eu','ευδ':'eu','ευζ':'eu','ευλ':'eu','ευμ':'eu','ευν':'eu','ευρ':'eu',
                          //Tonismena
                       'εύα':'éu','εύε':'éu','εύη':'éu','εύι':'éu','εύο':'éu','εύω':'éu',
                       'εύβ':'éu','εύγ':'éu','εύδ':'éu','εύζ':'éu','εύλ':'éu','εύμ':'éu','εύν':'éu','εύρ':'éu',
                    //HY   
                       'ΗYΒ':'Iu','ΗYΓ':'Iu','ΗYΔ':'Iu','ΗYΖ':'Iu','ΗYΛ':'Iu','ΗYΜ':'Iu','ΗYΝ':'Iu','ΗYΡ':'Iu',
                       'ηυβ':'iu','ηυγ':'iu','ηυδ':'iu','ηυζ':'iu','ηυλ':'iu','ηυμ':'iu','ηυν':'iu','ηυρ':'iu',

                //Shmeiosh 7
                    //keno
                        'γκ ':'gk','μπ ':'mp',
                    //With special charachers
                        'γκ,':'gk','μπ,':'mp','γκ.':'gk','μπ.':'mp','γκ;':'gk','μπ;':'mp',
                    
                //Shmeiosh 9   ά, έ, ή, -ί, ό, -ώ       ή     ϋ,ΰ
                    'Άυ':'Áv','Έυ':'Év','Ήυ':'Ī́v','Όυ':'Óv',
                    'άυ':'áv','έυ':'év','ήυ':'ī́v','όυ':'óv'

                

    }

    const transliterationMapStarters ={
        //Starters                
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
                    'Επτ':'He','Έξι':'He',
                    'Ήρα':'He','Ηρώ':'He','Ήρω':'He','Ηρω':'He','Ήβη':'He',
                    'Ιππ':'Hi',
                    'Όρκ':'Ho','Ορκ':'Ho',
                    'Ωρο':'Hō','Ώρα':'Hō','Ωρα':'Hō',
                //Lowercase
                    'επτ':'he','έξι':'he',
                    'ήρα':'he','ηρώ':'he','ήρω':'he','ηρω':'he','ήβη':'he',
                    'ιππ':'hi',
                    'όρκ':'ho','ορκ':'ho',
                    'ωρο':'hō','ώρα':'hō','ωρα':'hō',
            //4 letters 
                //Uppercase
                    'Αγιο':'Ha','Αγνη':'Ha','Αγνο':'Ha','Άδης':'Ha','Αίμα':'Ha','Αίμο':'Ha','Αίμω':'Ha','αλων':'Ha','Αμάξ':'Ha','Άμαξ':'Ha','Απλό':'Ha',
                    'Έβρο':'He','Έλεν':'He','Έλεν':'He','Έλλη':'He','Ελλή':'He','Ένωσ':'He','εξαδ':'He','Ερμα':'He','Ερμά':'He','Ερμέ':'He','Ερμη':'He','Ερμο':'He','Ερμί':'He',
                    'Ηλιό':'He','Ηλιο':'He','Ημερ':'He','Ηρόδ':'He','Ησύχ':'He','Ησυχ':'He','Ήσυχ':'He',
                    'Ιερό':'Hi','Ιερο':'Hi','Ιερή':'Hi','Ιερη':'Hi','Ιερά':'Hi','Ιερα':'Hi','Ιερώ':'Hi','Ιερώ':'Hi','Ιερω':'Hi','Ιλαρ':'Hi','Ιμάτ':'Hi',
                    'Όμηρ':'Ho','Ομηρ':'Ho','Όμιλ':'Ho','Ομίλ':'Ho','Ομιλ':'Ho','Όσιο':'Ho','Οσιο':'Ho',
                    'Υψιλ':'Yps',
                //Lowercase
                    'αγιο':'ha','αγνη':'ha','αγνο':'ha','άδης':'ha','αίμα':'ha','αίμο':'ha','αιμω':'ha','αλων':'ha','αμάξ':'ha','άμαξ':'ha','απλό':'ha',
                    'έβρο':'he','έλεν':'he','έλεν':'he','έλλη':'he','ελλή':'he','ένωσ':'he','εξαδ':'he','ερμα':'he','ερμά':'he','ερμέ':'he','ερμη':'he','ερμο':'he','ερμί':'he',
                    'ηλιό':'he','ηλιο':'he','ημερ':'he','ηρόδ':'he','ησύχ':'he','ησυχ':'he','ήσυχ':'he',
                    'ιερό':'hi','ιερο':'hi','ιερή':'hi','ιερη':'hi','ιερά':'hi','ιερα':'hi','ιερώ':'hi','ιερώ':'hi','ιερω':'hi','ιλαρ':'hi','ιμάτ':'hi',
                    'όμηρ':'ho','ομηρ':'ho','όμιλ':'ho','ομίλ':'ho','ομιλ':'ho','όσιο':'ho','οσιο':'ho',
                    'ύψιλ':'yps',
            //5 letters
                //Uppercase
                    'Άλατα':'Ha','Αλατά':'Ha','Αλατό':'Ha','Αλιεύ':'Ha','Αμαρτ':'Ha','Απαλό':'Ha',
                    'Εβραι':'He','Ειμαρ':'He','Εκάβη':'He','Εκάτη':'He','Έκτωρ':'He','Ελικώ':'He','Ελλάδ':'He','Ελλάν':'He','Ελλάς':'He','Ελλην':'He',
                    'Ερμής':'He','Ερμιό':'He','Ερμιο':'He','Έσπερ':'He','Εσπέρ':'He','Εστία':'He','Εταιρ':'He','Εκατό':'He','Εκατα':'He','Εκατο':'He','Εξηντ':'He',
                    'Ηγουμ':'He','Ηρακλ':'He','Ηράκλ':'He','Ηρόστ':'He','Ησαΐα':'He','Ησίοδ':'He','Ηφαίσ':'He','Ηφαισ':'He','Ήφαισ':'He',
                    'Ιερου':'Hi','Ιστορ':'Hi','Ιδρώς':'Hi',
                    'Ολλαν':'Ho',
                //Lowercase
                    'άλατα':'ha','αλατά':'ha','αλατό':'ha','αλιεύ':'ha','αμαρτ':'ha','απαλό':'ha',
                    'εβραι':'he','ειμαρ':'he','εκάβη':'he','εκάτη':'he','έκτωρ':'he','ελικώ':'he','ελλάδ':'he','ελλάν':'he','ελλάς':'he','ελλην':'he',
                    'ερμής':'he','ερμιό':'he','ερμιο':'he','έσπερ':'he','εσπέρ':'he','εστία':'he','εταιρ':'he','εκατό':'he','εκατα':'he','εκατο':'he','εξηντ':'he',
                    'ηγουμ':'he','ηρακλ':'he','ηράκλ':'he','ηρόστ':'he','ησαΐα':'he','ησίοδ':'he','ηφαίσ':'he','ηφαισ':'he','ήφαισ':'he',
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

                //Tonismena
                    //Oxia ( ´ )
                        //Uppercase
                            'Ά':'A','Έ':'E','Ή':'Ē','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                            'Ά':'A','Ἔ':'E','Ἢ':'Ē','Ί':'I','Ὄ':'O','Ὤ':'Ō',//+Apostrofos
                        //Lowercase
                            'ά':'a','έ':'e','ή':'ē','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                                'έ':'e','ἰ':'i','ό':'o','ύ':'y', // diff asci
                                'ἄ':'a','ἤ':'ē','ἴ':'i','ὤ':'ō','ᾤ':'ō', //+Apostrofos
                                'ΰ':'y',
                    //Baria ( ` )
                        //Uppercase
                          'Ὰ':'A','Ὲ':'E','Ὴ':'Ē','Ὶ':'I','Ὸ':'O','Ὺ':'Y','Ὼ':'Ō',
                        //Lowercase
                          'ὰ':'a','ὲ':'e','ὴ':'ē','ὶ':'i','ὸ':'o','ὺ':'y','ὼ':'ō',   
                          'ὰ':'a','ὲ':'e','ὴ':'ē',        'ὸ':'o',
                          'ἂ':'a','ἢ':'ē',  //+Apostrofos
                    //Perispomeni ( ῀ )
                        //Uppercase - Keno?
                            'Ώ': 'Ō','Ὅ': 'Ho','Ἵ':'Hi','ᾍ':'Ha','Ἥ':'Hē','Ἕ':'He','Ὥ':'Hō','Εὕ':'Eu','Αἵ':'Hai','Αἷ':'Hai',//megala bale mas swsta
                            'ἅ':'ha','ἥ':'hē','ἕ':'he','εἱ':'Hei','αἵ':'hai','αἷ':'hai',                         //mikra bake mas swsta
                        //Lowercase
                            'ᾶ':'a','ῆ':'ē','ῖ':'i','ῦ':'u','ῶ':'ō',
                            'ᾷ':'a','ῇ':'ē','ῒ':'i','ΐ':'i','ῗ':'i','ῧ':'y','ῷ':'ō',
                            'ἶ':'i',
                            'ὗ':'u', //+dasia

                    //Dasia (Rough Breathing) ( ῾ )
                         //Uppercase  
                            'Ἁ': 'Ha', 'Ἑ': 'He', 'Ἡ': 'Hē', 'Ἱ': 'Hi', 'Ὁ': 'Ho', 'Ὑ': 'Hy','Ῥ':'Rh', 'Ὡ': 'Hō',
                           //2 letter
                            'Ἅι':'Ha',
                         //Lowercase
                            'ἁ':'ha','ἑ':'he','ἡ':'hē','ἱ':'hi','ὁ':'ho','ὑ':'hy','ὡ':'hō',
                            'ᾁ':'ha','ᾑ':'hē','ᾡ':'hō','ᾅ':'ha','ᾕ':'hē','ᾥ':'hō','ῥ':'rh','ῳ':'hō',
                            'ὅ':'ho','ὕ':'hu', //+oxia
                            
                    //Apostrofos ( ᾽ )  ἤ
                        //Uppercase
                            'Ἀ':'A','Ἐ':'E','Ἠ':'Ē','Ἰ':'I','Ὀ':'O','Ὠ':'Ō',
                        //Lowercase
                            'ἀ':'a','ἐ':'e','ἠ':'ē','ἰ':'i','ὐ':'u','ὀ':'o','ὠ':'ō',

                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','ϲ':'s',
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

            //3-letters Mapping
                //Shmeiosh 4    ( θ, κ, ξ, π, σ, τ, φ, χ, ψ  (space) )       F
                    //AY              
                    'AYΘ':'Af','AYΚ':'Af','AYΞ':'Af','AYΠ':'Af','AYΣ':'Af','AYΤ':'Af','AYΦ':'Af','AYΧ':'Af','AYΨ':'Af','AY ':'Af',
                    'αυθ':'af','αυκ':'af','αυξ':'af','αυπ':'af','αυσ':'af','αυτ':'af','αυφ':'af','αυχ':'af','αυψ':'af','αυ ':'af',
                    //EY  
                    'EYΘ':'Ef','EYΚ':'Ef','EYΞ':'Ef','EYΠ':'Ef','EYΣ':'Ef','EYΤ':'Ef','EYΦ':'Ef','EYΧ':'Ef','EYΨ':'Ef','EY ':'Ef',
                    'ευθ':'ef','ευκ':'ef','ευξ':'ef','ευπ':'ef','ευσ':'ef','ευτ':'ef','ευφ':'ef','ευχ':'ef','ευψ':'ef','ευ ':'ef',
                    //HY   
                    'HYΘ':'If','HYΚ':'If','HYΞ':'If','HYΠ':'If','HYΣ':'If','HYΤ':'If','HYΦ':'If','HYΧ':'If','HYΨ':'If','HY ':'If',
                    'ηυθ':'if','ηυκ':'if','ηυξ':'if','ηυπ':'if','ηυσ':'if','ηυτ':'if','ηυφ':'if','ηυχ':'if','ηυψ':'if','ηυ ':'if',

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
