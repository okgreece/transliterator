const transl = {
    "ne-GR": "Modern Greek",
    "ae-GR": "Ancient Greek",
    "la-ISO": "Latin ISO 843",
    "la-RT": "Latin Romanization"
};

const selectTag = document.querySelectorAll("select"),
      transliterationBtn = document.querySelector("button"),
      inputText = document.getElementById("inputText"),
      resultText = document.getElementById("resultText");

selectTag.forEach((tag, id) => {
    for (const transliteration_code in transl) {
        let selected = "";
        if (id == 0 && (transliteration_code == "ne-GR" || transliteration_code == "ae-GR")) {
            if (transliteration_code == "ne-GR") {
                selected = "selected";
            }
            let option = `<option value="${transliteration_code}" ${selected}>${transl[transliteration_code]}</option>`;
            tag.insertAdjacentHTML("beforeend", option);
        } else if (id == 1 && (transliteration_code == "la-ISO" || transliteration_code == "la-RT")) {
            if (transliteration_code == "la-ISO") {
                selected = "selected";
            }
            let option = `<option value="${transliteration_code}" ${selected}>${transl[transliteration_code]}</option>`;
            tag.insertAdjacentHTML("beforeend", option);
        }
    }
});

transliterationBtn.addEventListener("click", () => {
    let text = inputText.value.trim(),
        translateFrom = selectTag[0].value,
        translateTo = selectTag[1].value;

    if (!text) return;

    resultText.setAttribute("placeholder", "Transliterating...");

    let translatedText;

    // Determine the function to call based on the selected options
    switch (translateFrom + "-" + translateTo) {
        case "ne-GR-la-ISO":
            translatedText = modernGreekToLatinTransliterationIso843(text);
            break;
        case "ne-GR-la-RT":
            translatedText = modernGreekToLatinTransliterationRomanization(text);
            break;
        case "ae-GR-la-ISO":
            translatedText = ancientGreekToLatinTransliterationIso843(text);
            break;
        case "ae-GR-la-RT":
            translatedText = ancientGreekToLatinTransliterationRomanization(text);
            break;
        default:
            translatedText = "Transliteration function not found.";
            break;
    }

    resultText.value = translatedText;
    resultText.setAttribute("placeholder", "Transliteration");
});

// Placeholder functions for transliteration logic
function modernGreekToLatinTransliterationIso843(text) {
    // Implement the actual transliteration logic here
    return text; // Placeholder
}

function modernGreekToLatinTransliterationRomanization(text) {
    // Implement the actual transliteration logic here
    return text; // Placeholder
}

function ancientGreekToLatinTransliterationIso843(text) {
    // Implement the actual transliteration logic here
    return text; // Placeholder
}

function ancientGreekToLatinTransliterationRomanization(text) {
    // Implement the actual transliteration logic here
    return text; // Placeholder
}

function modernGreekToLatinTransliterationIso843(text) {
    const transliterationMap = {
         //ISO 843 Modern

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ī','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'F','Χ':'Ch','Ψ':'Ps','Ω':'Ō', //Η,Ω δες μετά
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ī','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'f','χ':'ch','ω':'ō', //η,ω δες μετά
                //Tonismena
                    //Uppercase
                    'Ά':'A','Έ':'E','Ή':'I','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'O',
                    //Lowercase
                    'ά':'a','έ':'e','ή':'i','ί':'i','ό':'o','ύ':'y','ώ':'o',
                            'έ':'e',        'ί':'i','ό':'o','ύ':'y',//diaforetikos kwdikos asci
                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_',
                    //Uppercase
                    'Ϊ':'Ï','Ϋ':'Ÿ',
                    //Lowercase
                    'ϊ':'ï','ϋ':'ÿ','ΐ':'ḯ','ΰ':'ÿ́',
            //2-letters Mapping
                    //Uppercase
                    'ΓΓ':'Ng','ΓΞ':'Nx','ΓΧ':'Nch','Μπ':'Mp',  
                    //Lowercase
                    'άι':'ai','γγ':'ng','γξ':'nx','γχ':'nch','έι':'ei','μπ':'mp',
            //3-letters Mapping
                //Shmeiosh 3    ( α,ε,η,ι,ο,υ,ω ?     β,γ,δ,ζ,λ,μ,ν,ρ)   V      + Shmeiosh 10
                     //AY  
                       //Uppercase 
                            'Aυα':'Av','Aυε':'Av','Aυη':'Av','Aυι':'Av','Aυο':'Av','Aυω':'Av',       
                            'Aυβ':'Av','Aυγ':'Av','Aυδ':'Av','Aυζ':'Av','Aυλ':'Av','Aυμ':'Av','Aυν':'Av','Aυρ':'Av',
                          //Tonismena
                            'Aύα':'Άv','Aύε':'Άv','Aύη':'Άv','Aύι':'Άv','Aύο':'Άv','Aύω':'Άv',
                            'Aύβ':'Άv','Aύγ':'Άv','Aύδ':'Άv','Aύζ':'Άv','Aύλ':'Άv','Aύμ':'Άv','Aύν':'Άv','Aύρ':'Άv',
                       //Lowercase
                            'αυα':'av','αυε':'av','αυη':'av','αυι':'av','αυο':'av','αυω':'av',
                            'αυβ':'av','αυγ':'av','αυδ':'av','αυζ':'av','αυλ':'av','αυμ':'av','αυν':'av','αυρ':'av',
                          //Tonismena
                            'αύα':'áv','αύε':'áv','αύη':'áv','αύι':'áv','αύο':'áv','αύω':'áv',
                            'αύβ':'áv','αύγ':'áv','αύδ':'áv','αύζ':'áv','αύλ':'áv','αύμ':'áv','αύν':'áv','αύρ':'áv',
                    //EY  
                        //Uppercase 
                            'Ευα':'Ev','Ευε':'Ev','Ευη':'Ev','Ευι':'Ev','Ευο':'Ev','Ευω':'Ev',
                            'Ευβ':'Ev','Ευγ':'Ev','Ευδ':'Ev','Ευζ':'Ev','ΕYλ':'Ev','Ευμ':'Ev','Ευν':'Ev','Ευρ':'Ev',
                          //Tonismena
                            'Εύα':'Év','Εύε':'Év','Εύη':'Év','Εύι':'Év','Εύο':'Év','Εύω':'Év',
                            'Εύβ':'Év','Εύγ':'Év','Εύδ':'Év','Εύζ':'Év','Εύλ':'Év','Εύμ':'Év','Εύν':'Év','Εύρ':'Év',
                        //Lowercase
                            'ευα':'ev','ευε':'ev','ευη':'ev','ευι':'ev','ευο':'ev','ευω':'ev',
                            'ευβ':'ev','ευγ':'ev','ευδ':'ev','ευζ':'ev','ευλ':'ev','ευμ':'ev','ευν':'ev','ευρ':'ev',
                          //Tonismena
                            'εύα':'év','εύε':'év','εύη':'év','εύι':'év','εύο':'év','εύω':'év',
                            'εύβ':'év','εύγ':'év','εύδ':'év','εύζ':'év','εύλ':'év','εύμ':'év','εύν':'év','εύρ':'év',
                    //HY   
                        //Uppercase
                            'Ηυα':'Iv','Ηυε':'Iv','Ηυη':'Iv','Ηυι':'Iv','Ηυο':'Iv','Ηυω':'Iv',
                            'Ηυβ':'Iv','Ηυγ':'Iv','Ηυδ':'Iv','Ηυζ':'Iv','Ηυλ':'Iv','Ηυμ':'Iv','Ηυν':'Iv','Ηυρ':'Iv',
                          //Tonismena
                            'Ηύα':'Ī́v','Ηύε':'Ī́v','Ηύη':'Ī́v','Ηύι':'Ī́v','Ηύο':'Ī́v','Ηύω':'Ī́v',
                            'Ηύβ':'Ī́v','Ηύγ':'Ī́v','Ηύδ':'Ī́v','Ηύζ':'Ī́v','Ηύλ':'Ī́v','Ηύμ':'Ī́v','Ηύν':'Ī́v','Ηύρ':'Ī́v',
                        //Lowercase
                            'ηυα':'īv','ηυε':'īv','ηυη':'īv','ηυι':'īv','ηυο':'īv','ηυω':'īv',
                            'ηυβ':'īv','ηυγ':'īv','ηυδ':'īv','ηυζ':'īv','ηυλ':'īv','ηυμ':'īv','ηυν':'īv','ηυρ':'īv',
                          //Tonismena
                            'ηύα':'ī́v','ηύε':'ī́v','ηύη':'ī́v','ηύι':'ī́v','ηύο':'ī́v','ηύω':'ī́v',
                            'ηύβ':'ī́v','ηύγ':'ī́v','ηύδ':'ī́v','ηύζ':'ī́v','ηύλ':'ī́v','ηύμ':'ī́v','ηύν':'ī́v','ηύρ':'ī́v',

                //Shmeiosh 4    ( θ, κ, ξ, π, σ, τ, φ, χ, ψ  (space) )    F      + Shmeiosh 10
                    //AY              
                       //Uppercase                           
                            'Aυθ':'Af','Aυκ':'Af','Aυξ':'Af','Aυπ':'Af','Aυσ':'Af','Aυτ':'Af','Aυφ':'Af','Aυχ':'Af','Aυψ':'Af','Aυ ':'Af',                       
                            //Tonismena
                             'Aύθ':'Άf','Aύκ':'Άf','Aύξ':'Άf','Aύπ':'Άf','Aύσ':'Άf','Aύτ':'Άf','Aύφ':'Άf','Aύχ':'Άf','Aύψ':'Άf','Aύ ':'Άf',
                       //Lowercase
                            'αυθ':'af','αυκ':'af','αυξ':'af','αυπ':'af','αυσ':'af','αυτ':'af','αυφ':'af','αυχ':'af','αυψ':'af','αυ ':'af',
                            //Tonismena
                             'αύθ':'áf','αύκ':'áf','αύξ':'áf','αύπ':'áf','αύσ':'áf','αύτ':'áf','αύφ':'áf','αύχ':'áf','αύψ':'áf','αύ ':'áf',
                    //EY  
                        //Uppercase                           
                            'Ευθ':'Ef','Ευκ':'Ef','Ευξ':'Ef','Ευπ':'Ef','Ευσ':'Ef','Ευτ':'Ef','Ευφ':'Ef','Ευχ':'Ef','Ευψ':'Ef','Ευ ':'Ef',                       
                          //Tonismena
                             'Εύθ':'Éf','Εύκ':'Éf','Εύξ':'Éf','Εύπ':'Éf','Εύσ':'Éf','Εύτ':'Éf','Εύφ':'Éf','Εύχ':'Éf','Εύψ':'Éf','Εύ ':'Éf',
                        //Lowercase
                            'ευθ':'ef','ευκ':'ef','ευξ':'ef','ευπ':'ef','ευσ':'ef','ευτ':'ef','ευφ':'ef','ευχ':'ef','ευψ':'ef','ευ ':'ef',
                          //Tonismena
                             'εύθ':'éf','εύκ':'éf','εύξ':'éf','εύπ':'éf','εύσ':'éf','εύτ':'éf','εύφ':'éf','εύχ':'éf','εύψ':'éf','εύ ':'éf',
                    //HY   
                        //Uppercase                           
                            'Ηυθ':'Īf','Ηυκ':'Īf','Ηυξ':'Īf','Ηυπ':'Īf','Ηυσ':'Īf','Ηυτ':'Īf','Ηυφ':'Īf','Ηυχ':'Īf','Ηυψ':'Īf','Ηυ ':'Īf',                       
                           //Tonismena
                             'Ηύθ':'Ī́f','Ηύκ':'Ī́f','Ηύξ':'Ī́f','Ηύπ':'Ī́f','Ηύσ':'Ī́f','Ηύτ':'Ī́f','Ηύφ':'Ī́f','Ηύχ':'Ī́f','Ηύψ':'Ī́f','Ηύ ':'Ī́f',
                        //Lowercase
                            'ηυθ':'īf','ηυκ':'īf','ηυξ':'īf','ηυπ':'īf','ηυσ':'īf','ηυτ':'īf','ηυφ':'īf','ηυχ':'īf','ηυψ':'īf','ηυ ':'īf',
                          //Tonismena
                             'ηύθ':'ī́f','ηύκ':'ī́f','ηύξ':'ī́f','ηύπ':'ī́f','ηύσ':'ī́f','ηύτ':'ī́f','ηύφ':'ī́f','ηύχ':'ī́f','ηύψ':'ī́f','ηύ ':'ī́f',

                //Shmeiosh 7
                    'μπ ':'b','μπ,':'b','μπ.':'b','μπ;':'b',
                    
                //Shmeiosh 9   ά, έ, ή, -ί, ό, -ώ       ή     ϋ,ΰ
                    'Άυ':'Áy','Έυ':'Éy','Ήυ':'Ī́y','Όυ':'Óy',
                    'άυ':'áy','έυ':'éy','ήυ':'ī́y','όυ':'óy'

    }
    const transliterationMapStarters = {
        'Μπ':'B','μπ':'b'
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

function ancientGreekToLatinTransliterationIso843(text) {
    const transliterationMap = {
        //Iso843

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ī','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'F','Χ':'Ch','Ψ':'Ps','Ω':'Ō',
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ī','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'f','χ':'ch','ω':'ō',

                //Tonismena
                    //Oxia ( ´ )
                        //Uppercase
                            'Ά':'A','Έ':'E','Ή':'Ī','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                            'Ά':'A','Ἔ':'E','Ἢ':'Ī','Ί':'I','Ὄ':'O','Ὤ':'Ō',//+Apostrofos
                        //Lowercase
                            'ά':'a','έ':'e','ή':'ī','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                                    'έ':'e','ἰ':'i','ό':'o','ύ':'y', // για καποιο λογο εχει διαφορα με το ε
                             'ἄ':'a','ἤ':'ī','ἴ':'i','ὤ':'ō','ᾤ':'ō', //+Apostrofos
                                'ΰ':'y',
                    //Baria ( ` )
                        //Uppercase
                          'Ὰ':'A','Ὲ':'E','Ὴ':'Ī','Ὶ':'I','Ὸ':'O','Ὺ':'Y','Ὼ':'Ō',
                        //Lowercase
                          'ὰ':'a','ὲ':'e','ὴ':'ī','ὶ':'i','ὸ':'o','ὺ':'y','ὼ':'ō',   
                          'ὰ':'a','ὲ':'e','ὴ':'ī',        'ὸ':'o',
                          'ἂ':'a','ἢ':'ī',  //+Apostrofos
                    //Perispomeni ( ῀ )
                        //Uppercase - Keno?
                            'Ώ': 'Ō','Ὅ': 'Ho','Ἵ':'Hi','ᾍ':'Ha','Ἥ':'Hē','Ἕ':'He','Ὥ':'Hō','Εὕ':'Eu','Αἵ':'Hai','Αἷ':'Hai',//megala bale mas swsta
                            'ἅ':'ha','ἥ':'hē','ἕ':'he','εἱ':'Hei','αἵ':'hai','αἷ':'hai',                         //mikra bake mas swsta
                        //Lowercase
                            'ᾶ':'a','ῆ':'ī','ῖ':'i','ῦ':'u','ῶ':'ō',
                            'ᾷ':'a','ῇ':'ī','ῒ':'i','ΐ':'i','ῗ':'i','ῧ':'y','ῷ':'ō',
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
                            'ἀ':'a','ἐ':'e','ἠ':'ī','ἰ':'i','ὐ':'u','ὀ':'o','ὠ':'ō',
                //Simeiosi 1
                        //Uppercase
                            'ΑΥ':'Au','ΕΥ':'Eu','ΟΥ':'Ou',
                        //Lowercase
                            'αυ':'au','ευ':'eu','ου':'ou',
                //Special characters
                    ';':'?','.':'.',',':',','’':'’','ʹ':'ʹ','-':'-','_':'_','ϲ':'s',
                    //iota subscript
                        'ᾳ': 'a','ῃ': 'ī','ῳ': 'ō',
                        'ᾳ': 'a','ῃ': 'ī',
                    //Ypodialitika    
                        //Uppercase
                            'Ϊ':'I','Ϋ':'Y',
                        //Lowercase
                            'ϊ':'i','ϋ':'u','ΐ':'i','ΰ':'u'

    }
    const transliterationMapStarters = {
        'Μπ':'B','μπ':'b'
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

function modernGreekToLatinTransliterationRomanization(text) {
    const transliterationMap = {
         //Romanization

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'V','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ē','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'Ph','Χ':'Ch','Ψ':'Ps','Ω':'Ō', 
                    //Lowercase
                    'α':'a','β':'v','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ē','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'ph','χ':'ch','ω':'ō',
                      //Tonismena
                    //Uppercase
                    'Ά':'A','Έ':'E','Ή':'Ē','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                    //Lowercase
                    'ά':'a','έ':'e','ή':'ē','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                            'έ':'e',        'ί':'i','ό':'o','ύ':'y', // για καποιο λογο εχει διαφορα με το ε
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

//----------------------------------------------------------------------------------------------------------------------------------------

function ancientGreekToLatinTransliterationRomanization(text) {
    const transliterationMap = {
         //Romanization

            //Single-letters
                    //Uppercase
                    'Α':'A','Β':'B','Γ':'G','Δ':'D','Ε':'E','Ζ':'Z','Η':'Ē','Θ':'Th','Ι':'I','Κ':'K','Λ':'L','Μ':'M','Ν':'N','Ξ':'X',
                    'Ο':'O','Π':'P','Ρ':'R','Σ':'S','Τ':'T','Υ':'Y','Φ':'Ph','Χ':'Ch','Ψ':'Ps','Ω':'Ō','Ϝ':'W','Ϙ':'Ḳ',
                    //Lowercase
                    'α':'a','β':'b','γ':'g','δ':'d','ε':'e','ζ':'z','η':'ē','θ':'th','ι':'i','κ':'k','λ':'l','μ':'m','ν':'n','ξ':'x',
                    'ο':'o','π':'p','ρ':'r','σ':'s','ς':'s','τ':'t','υ':'y','φ':'ph','χ':'ch','ω':'ō','ϝ':'w','ϙ':'ḳ',

                //Tonismena
                    //Oxia ( ´ )
                        //Uppercase
                            'Ά':'A','Έ':'E','Ή':'Ē','Ί':'I','Ό':'O','Ύ':'Y','Ώ':'Ō',
                            'Ά':'A','Ἔ':'E','Ἢ':'Ē','Ί':'I','Ὄ':'O','Ὤ':'Ō',//+Apostrofos
                        //Lowercase
                            'ά':'a','έ':'e','ή':'ē','ί':'i','ό':'o','ύ':'y','ώ':'ō',
                                'έ':'e','ἰ':'i','ό':'o','ύ':'y', // για καποιο λογο εχει διαφορα με το ε
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
                'εὕρ':'heu','αἱρ':'hai','ΓΧ':'Nch','γχ':'nch',
                
                //gia meta
                'Ηρ':'Hēr','Ηλι':'Hel'
                //na fia3w periptosh me 4 xarakthres. 

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



// //Greek to Latin
        //    

            //Romanization Table /Modern
              //Single-letter Mapping
            //   'Α':'A','α':'a','Β':'V','β':'v','Γ':'G','γ':'g','Δ':'D','δ':'d','Ε':'E','ε':'e','Ζ':'Z','ζ':'z','Η':'Ē','η':'ē','Θ':'Th',
            //   'θ':'th','Ι':'I','ι':'i','Κ':'K','κ':'k','Λ':'L','λ':'l','Μ':'M','μ':'m','Ν':'N','ν':'n','Ξ':'X','ξ':'x','Ο':'O','ο':'o',
            //   'Π':'P','π':'p','Ρ':'R','ρ':'r','Ῥ':'Rh','ῥ':'rh','C':'S','σ':'s','ϲ':'s','ς':'s','Τ':'T','τ':'t','Υ':'Y','υ':'y','Φ':'Ph',
            //   'φ':'ph','Χ':'Ch','χ':'ch','Ψ':'Ps','ψ':'ps','Ω':'Ō','ω':'ō',
            //  //Tonismena
            //  'Ά':'A','ά':'a','Έ':'E','έ':'e','Ή':'Ē','ή':'ē','Ί':'I','ί':'i','Ϊ':'I','ϊ':'i','ΐ':'i','Ό':'O','ό':'o','Ύ':'Y','Ϋ':'Y',
            //  'ύ':'y','ϋ':'u','ΰ':'u','Ώ':'Ō','ώ':'ō',
            //   //Archail Letters
            //   'Ϝ':'W','ϝ':'w','Ϙ':'Ḳ','ϙ':'ḳ',
            // //2-letters Mapping
            //   'γγ':'ng','γξ':'nx','γχ':'nch','Μπ':'B','μπ':'b','Ντ':'D̲','ντ':'d̲',
            //   'Αυ':'Au','Ευ':'Eu','Ηυ':'Ēu','Ου':'Ou','Υι':'Yi','Ωυ':'Ōu',
            //   'αυ':'au','ευ':'eu','ηυ':'ēu','ου':'ou','υι':'ui','ωυ':'ōu'