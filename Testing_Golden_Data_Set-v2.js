//=================================================================================================================
//PUT FUNCIONS HERE
{
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
}
//=================================================================================================================
// Initialize counters
let passedCount = 0;
let failedCount = 0;

// Example test cases with expected outputs
const testCases = [
{ input: 'Αἴσωπος', expected_ALA_LC: 'Aisōpos', expected_ISO843: 'Aísōpos' },
{ input: 'Ἀριστοτέλης', expected_ALA_LC: 'Aristotelēs', expected_ISO843: 'Aristotélīs' },
{ input: 'Ἀριστοφάνης', expected_ALA_LC: 'Aristophanēs', expected_ISO843: 'Aristofánīs' },
{ input: 'Βερενίκη', expected_ALA_LC: 'Berenikē', expected_ISO843: 'Vereníkī' },
{ input: 'Βυζάντιος, Ἀλέξανδρος', expected_ALA_LC: 'Byzantios, Alexandros', expected_ISO843: 'Vyzántios, Aléxandros' },
{ input: 'Ἑλένη', expected_ALA_LC: 'Helenē', expected_ISO843: 'Elénī' },
{ input: 'Ἑλλάνικος', expected_ALA_LC: 'Hellanikos', expected_ISO843: 'Ellánikos' },
{ input: 'Εὕδημος ὁ Ῥόδιος', expected_ALA_LC: 'Eudēmos ho Rhodios', expected_ISO843: 'Eúdīmos o Ródios' },
{ input: 'Ζηνοβία', expected_ALA_LC: 'Zēnobia', expected_ISO843: 'Zīnovía' },
{ input: 'Ἡρακλείδης', expected_ALA_LC: 'Hērakleidēs', expected_ISO843: 'Īrakleídīs' },
{ input: 'Ἡράκλειτος', expected_ALA_LC: 'Hērakleitos', expected_ISO843: 'Īrákleitos' },
{ input: 'Ἡσύχιος', expected_ALA_LC: 'Hēsychiοs', expected_ISO843: 'Īsýchios' },
{ input: 'Ἰάμβλιχος', expected_ALA_LC: 'Iamblichos', expected_ISO843: 'Iámvlichos' },
{ input: 'Στοβαῖος, Ἰωάννης', expected_ALA_LC: 'Stobaios, Iōannēs', expected_ISO843: 'Stovaíos, Iōánnīs' },
{ input: 'Στράβων', expected_ALA_LC: 'Strabōn', expected_ISO843: 'Strávōn' },
{ input: 'Ὡραπόλλων', expected_ALA_LC: 'Hōrapollōn', expected_ISO843: 'Ōrapóllōn' },
{ input: 'Ἀγαθοκλῆς', expected_ALA_LC: 'Agathoklēs', expected_ISO843: 'Agathoklī́s' },
{ input: 'Μηνᾶς', expected_ALA_LC: 'Mēnas', expected_ISO843: 'Mīnás' },
{ input: 'Αγραφιώτη, Αναστασία', expected_ALA_LC: 'Agraphiōtē, Anastasia', expected_ISO843: 'Agrafiṓtī, Anastasía' },
{ input: 'Αλεξάνδρου, Νικολέττα', expected_ALA_LC: 'Alexandrou, Nikoletta', expected_ISO843: 'Alexándrou, Nikolétta' },
{ input: 'Αλεξίου, Πηνελόπη', expected_ALA_LC: 'Alexiou, Pēnelopē', expected_ISO843: 'Alexíou, Pīnelópī' },
{ input: 'Αντζουλάτου-Ρετσίλα, Ευρυδίκη', expected_ALA_LC: 'Antzoulatou-Retsila, Eurydikē', expected_ISO843: 'Antzoulátou-Retsíla, Eurydíkī' },
{ input: 'Αντωνόπουλος, Ανδρέας Αθ.', expected_ALA_LC: 'Antōnopoulos, Andreas Ath.', expected_ISO843: 'Antōnópoulos, Andréas Ath.' },
{ input: 'Αξιώτης, Διαμαντής', expected_ALA_LC: 'Axiōtēs, Diamantēs', expected_ISO843: 'Axiṓtīs, Diamantī́s' },
{ input: 'Αποστολίδης, Ήρκος Ρ.', expected_ALA_LC: 'Apostolidēs, Hērkos R.', expected_ISO843: 'Apostolídīs, Ī́rkos R.' },
{ input: 'Αποστολόπουλος, Ντίμης', expected_ALA_LC: 'Apostolopoulos, D̲imēs', expected_ISO843: 'Apostolópoulos, Ntímīs' },
{ input: 'Αργυράκης, Μίνως', expected_ALA_LC: 'Argyrakēs, Minōs', expected_ISO843: 'Argyrákīs, Mínōs' },
{ input: 'Αυγουστή, Δανάη', expected_ALA_LC: 'Augoustē, Danaē', expected_ISO843: 'Augoustī́, Danáī' },
{ input: 'Βαζιντάρης, Αντώνης Γ.', expected_ALA_LC: 'Vazintarēs, Antōnēs G.', expected_ISO843: 'Vazintárīs, Antṓnīs G.' },
{ input: 'Βαρελά, Νατάσα', expected_ALA_LC: 'Varela, Natasa', expected_ISO843: 'Varelá, Natása' },
{ input: 'Βαρίκα, Ελένη', expected_ALA_LC: 'Varika, Helenē', expected_ISO843: 'Varíka, Elénī' },
{ input: 'Βλάσσης, Γιώργος', expected_ALA_LC: 'Vlassēs, Giōrgos', expected_ISO843: 'Vlássīs, Giṓrgos' },
{ input: 'Βλάχου, Μερόπη', expected_ALA_LC: 'Vlachou, Meropē', expected_ISO843: 'Vláchou, Merópī' },
{ input: 'Βλάχου, Ντίνα', expected_ALA_LC: 'Vlachou, D̲ina', expected_ISO843: 'Vláchou, Ntína' },
{ input: 'Βογιατζόγλου, Αντρέας', expected_ALA_LC: 'Vogiatzoglou, Antreas', expected_ISO843: 'Vogiatzóglou, Antréas' },
{ input: 'Βότση, Ιόλη', expected_ALA_LC: 'Votsē, Iolē', expected_ISO843: 'Vótsī, Iólī' },
{ input: 'Γάλβα, Σύλβα', expected_ALA_LC: 'Galva, Sylva', expected_ISO843: 'Gálva, Sýlva' },
{ input: 'Γαραντούδης, Ευριπίδης', expected_ALA_LC: 'Garantoudēs, Euripidēs', expected_ISO843: 'Garantoúdīs, Euripídīs' },
{ input: 'Γασπαρινάτος, Γεράσιμος Σ.', expected_ALA_LC: 'Gasparinatos, Gerasimos S.', expected_ISO843: 'Gasparinátos, Gerásimos S.' },
{ input: 'Γερμανός, Φρέντυ', expected_ALA_LC: 'Germanos, Phrenty', expected_ISO843: 'Germanós, Frénty' },
{ input: 'Γεωργαντοπούλου, Ντίνα', expected_ALA_LC: 'Geōrgantopoulou, D̲ina', expected_ISO843: 'Geōrgantopoúlou, Ntína' },
{ input: 'Γεωργούλα, Χρυσούλα Σ.', expected_ALA_LC: 'Geōrgoula, Chrysoula S.', expected_ISO843: 'Geōrgoúla, Chrysoúla S.' },
{ input: 'Γιαννακού, Φραντζέσκα Α.', expected_ALA_LC: 'Giannakou, Phrantzeska A.', expected_ISO843: 'Giannakoú, Frantzéska A.' },
{ input: 'Γκαντόλφο, Στέφανος', expected_ALA_LC: 'Gkantolpho, Stephanos', expected_ISO843: 'Gkantólfo, Stéfanos' },
{ input: 'Γκατζελάκη, Χρύσα', expected_ALA_LC: 'Gkatzelakē, Chrysa', expected_ISO843: 'Gkatzelákī, Chrýsa' },
{ input: 'Γκουντσίδου, Βασιλική', expected_ALA_LC: 'Gkountsidou, Vasilikē', expected_ISO843: 'Gkountsídou, Vasilikī́' },
{ input: 'Γκρος, Γεώργιος', expected_ALA_LC: 'Gkros, Geōrgios', expected_ISO843: 'Gkros, Geṓrgios' },
{ input: 'Δαβαλάς, Αθανάσιος', expected_ALA_LC: 'Davalas, Athanasios', expected_ISO843: 'Davalás, Athanásios' },
{ input: 'Δάλλη, Αριστούλα', expected_ALA_LC: 'Dallē, Aristoula', expected_ISO843: 'Dállī, Aristoúla' },
{ input: 'Δελέγκος, Νικόλαος', expected_ALA_LC: 'Delenkos, Nikolaos', expected_ISO843: 'Delégkos, Nikólaos' },
{ input: 'Δρακόπουλος, Γεώργιος Βασιλείου', expected_ALA_LC: 'Drakopoulos, Geōrgios Vasileiou', expected_ISO843: 'Drakópoulos, Geṓrgios Vasileíou' },
{ input: 'Εμμανουήλ, Μελίτα', expected_ALA_LC: 'Emmanouēl, Melita', expected_ISO843: 'Emmanouī́l, Melíta' },
{ input: 'Ζωράκη, Σοφία', expected_ALA_LC: 'Zōrakē, Sophia', expected_ISO843: 'Zōrákī, Sofía' },
{ input: 'Ηρακλείδη, Ηλέκτρα', expected_ALA_LC: 'Hērakleidē, Ēlektra', expected_ISO843: 'Īrakleídī, Īléktra' },
{ input: 'Ησαΐα, Νανά', expected_ALA_LC: 'Hēsaia, Nana', expected_ISO843: 'Īsaḯa, Naná' },
{ input: 'Καββαδία, Μαρία', expected_ALA_LC: 'Kavvadia, Maria', expected_ISO843: 'Kavvadía, María' },
{ input: 'Καββαδίας, Δημήτρης', expected_ALA_LC: 'Kavvadias, Dēmētrēs', expected_ISO843: 'Kavvadías, Dīmī́trīs' },
{ input: 'Καλούτσης, Σπύρος', expected_ALA_LC: 'Kaloutsēs, Spyros', expected_ISO843: 'Kaloútsīs, Spýros' },
{ input: 'Καλτσώνης, Δημήτρης', expected_ALA_LC: 'Kaltsōnēs, Dēmētrēs', expected_ISO843: 'Kaltsṓnīs, Dīmī́trīs' },
{ input: 'Καμμάς, Παντελής', expected_ALA_LC: 'Kammas, Pantelēs', expected_ISO843: 'Kammás, Pantelī́s' },
{ input: 'Καμπάνη, Κατερίνα', expected_ALA_LC: 'Kampanē, Katerina', expected_ISO843: 'Kampánī, Katerína' },
{ input: 'Καμπάνης, Άγγελος', expected_ALA_LC: 'Kampanēs, Angelos', expected_ISO843: 'Kampánīs, Ággelos' },
{ input: 'Κανδρής, Διονύσης Κ.', expected_ALA_LC: 'Kandrēs, Dionysēs K.', expected_ISO843: 'Kandrī́s, Dionýsīs K.' },
{ input: 'Κάπος, Παναγιώτης', expected_ALA_LC: 'Kapos, Panagiōtēs', expected_ISO843: 'Kápos, Panagiṓtīs' },
{ input: 'Καραμάνης, Κωνσταντίνος', expected_ALA_LC: 'Karamanēs, Kōnstantinos', expected_ISO843: 'Karamánīs, Kōnstantínos' },
{ input: 'Καραμάνος, Χρήστος', expected_ALA_LC: 'Karamanos, Chrēstos', expected_ISO843: 'Karamános, Chrī́stos' },
{ input: 'Καρδοματέας, Δημήτρης', expected_ALA_LC: 'Kardomateas, Dēmētrēs', expected_ISO843: 'Kardomatéas, Dīmī́trīs' },
{ input: 'Καρκανιά, Αγγελική', expected_ALA_LC: 'Karkania, Angelikē', expected_ISO843: 'Karkaniá, Aggelikī́' },
{ input: 'Καρόγιαννη, Κατερίνα', expected_ALA_LC: 'Karogiannē, Katerina', expected_ISO843: 'Karógiannī, Katerína' },
{ input: 'Κατσίκα, Ιωάννα', expected_ALA_LC: 'Katsika, Iōanna', expected_ISO843: 'Katsíka, Iōánna' },
{ input: 'Κατσούλης, Μανώλης Α.', expected_ALA_LC: 'Katsoulēs, Manōlēs A.', expected_ISO843: 'Katsoúlīs, Manṓlīs A.' },
{ input: 'Κεφάλας, Σ.', expected_ALA_LC: 'Kephalas, S.', expected_ISO843: 'Kefálas, S.' },
{ input: 'Κεχαγιάς, Δημήτρης', expected_ALA_LC: 'Kechagias, Dēmētrēs', expected_ISO843: 'Kechagiás, Dīmī́trīs' },
{ input: 'Κοκκινάκη, Μαρία', expected_ALA_LC: 'Kokkinakē, Maria', expected_ISO843: 'Kokkinákī, María' },
{ input: 'Κονταξής, Βασίλης', expected_ALA_LC: 'Kontaxēs, Vasilēs', expected_ISO843: 'Kontaxī́s, Vasílīs' },
{ input: 'Κουτσουμπίδης, Φώτης Χ.', expected_ALA_LC: 'Koutsoumpidēs, Phōtēs Ch.', expected_ISO843: 'Koutsoumpídīs, Fṓtīs Ch.' },
{ input: 'Κρητικίδης, Γιώργος', expected_ALA_LC: 'Krētikidēs, Giōrgos', expected_ISO843: 'Krītikídīs, Giṓrgos' },
{ input: 'Κωνσταντάτος, Χρήστος', expected_ALA_LC: 'Kōnstantatos, Chrēstos', expected_ISO843: 'Kōnstantátos, Chrī́stos' },
{ input: 'Κωνσταντινίδης, Θεόδωρος Σ.', expected_ALA_LC: 'Kōnstantinidēs, Theodōros S.', expected_ISO843: 'Kōnstantinídīs, Theódōros S.' },
{ input: 'Κωστοπούλου, Ματίνα', expected_ALA_LC: 'Kōstopoulou, Matina', expected_ISO843: 'Kōstopoúlou, Matína' },
{ input: 'Λεκαδίτης, Αριέλ', expected_ALA_LC: 'Lekaditēs, Ariel', expected_ISO843: 'Lekadítīs, Ariél' },
{ input: 'Μάντης, Νίκος Α.', expected_ALA_LC: 'Mantēs, Nikos A.', expected_ISO843: 'Mántīs, Níkos A.' },
{ input: 'Μαυρογένη, Σταυρούλα', expected_ALA_LC: 'Maurogenē, Stauroula', expected_ISO843: 'Maurogénī, Stauroúla' },
{ input: 'Μητρούλη, Μαριλένα', expected_ALA_LC: 'Mētroulē, Marilena', expected_ISO843: 'Mītroúlī, Mariléna' },
{ input: 'Μήτσου, Κωνσταντίνος', expected_ALA_LC: 'Mētsou, Kōnstantinos', expected_ISO843: 'Mī́tsou, Kōnstantínos' },
{ input: 'Μιχαλόπουλος, Παναγ. Σ.', expected_ALA_LC: 'Michalopoulos, Panag. S.', expected_ISO843: 'Michalópoulos, Panag. S.' },
{ input: 'Μπάκα, Άννα-Ειρήνη', expected_ALA_LC: 'Baka, Anna-Eirēnē', expected_ISO843: 'Mpáka, Ánna-Eirī́nī' },
{ input: 'Μπαλωμενάκη, Κωνσταντίνα', expected_ALA_LC: 'Balōmenakē, Kōnstantina', expected_ISO843: 'Mpalōmenákī, Kōnstantína' },
{ input: 'Μπελεγρή, Μαντώ', expected_ALA_LC: 'Belegrē, Mantō', expected_ISO843: 'Mpelegrī́, Mantṓ' },
{ input: 'Μπολάνη, Μαίρη', expected_ALA_LC: 'Bolanē, Mairē', expected_ISO843: 'Mpolánī, Maírī' },
{ input: 'Μπούλος, Μαριάννα', expected_ALA_LC: 'Boulos, Marianna', expected_ISO843: 'Mpoúlos, Mariánna' },
{ input: 'Μπουρούτης, Ανδρέας Κ.', expected_ALA_LC: 'Bouroutēs, Andreas K.', expected_ISO843: 'Mpouroútīs, Andréas K.' },
{ input: 'Νάνη, Βούλα', expected_ALA_LC: 'Nanē, Voula', expected_ISO843: 'Nánī, Voúla' },
{ input: 'Νικάνδρου, Ειρήνη', expected_ALA_LC: 'Nikandrou, Eirēnē', expected_ISO843: 'Nikándrou, Eirī́nī' },
{ input: 'Νικολαΐδης, Π.', expected_ALA_LC: 'Nikolaidēs, P.', expected_ISO843: 'Nikolaḯdīs, P.' },
{ input: 'Νικολαΐδης, Παναγιώτης', expected_ALA_LC: 'Nikolaidēs, Panagiōtēs', expected_ISO843: 'Nikolaḯdīs, Panagiṓtīs' },
{ input: 'Νταλάκος, Τάκης', expected_ALA_LC: 'D̲alakos, Takēs', expected_ISO843: 'Ntalákos, Tákīs' },
{ input: 'Ορφανίδης, Δωρόθεος Γ.', expected_ALA_LC: 'Orphanidēs, Dōrotheos G.', expected_ISO843: 'Orfanídīs, Dōrótheos G.' },
{ input: 'Παναγιώτου, Νότης', expected_ALA_LC: 'Panagiōtou, Notēs', expected_ISO843: 'Panagiṓtou, Nótīs' },
{ input: 'Παπαγεωργίου, Θεόδωρος Μιχ.', expected_ALA_LC: 'Papageōrgiou, Theodōros Mich.', expected_ISO843: 'Papageōrgíou, Theódōros Mich.' },
{ input: 'Παπαγεωργίου, Μιχαήλ Θ.', expected_ALA_LC: 'Papageōrgiou, Michaēl Th.', expected_ISO843: 'Papageōrgíou, Michaī́l Th.' },
{ input: 'Παπαδάκης, Μάνος', expected_ALA_LC: 'Papadakēs, Manos', expected_ISO843: 'Papadákīs, Mános' },
{ input: 'Παπαδέλλης, Παναγιώτης Γ.', expected_ALA_LC: 'Papadellēs, Panagiōtēs G.', expected_ISO843: 'Papadéllīs, Panagiṓtīs G.' },
{ input: 'Παπαϊωάννου, Ευγενία', expected_ALA_LC: 'Papaiōannou, Eugenia', expected_ISO843: 'Papaïōánnou, Eugenía' },
{ input: 'Παπακώστα, Βασιλεία', expected_ALA_LC: 'Papakōsta, Vasileia', expected_ISO843: 'Papakṓsta, Vasileía' },
{ input: 'Παπουτσής, Χρήστος', expected_ALA_LC: 'Papoutsēs, Chrēstos', expected_ISO843: 'Papoutsī́s, Chrī́stos' },
{ input: 'Παρώδης, Άκης', expected_ALA_LC: 'Parōdēs, Akēs', expected_ISO843: 'Parṓdīs, Ákīs' },
{ input: 'Πέτρου, Μιχάλης Α.', expected_ALA_LC: 'Petrou, Michalēs A.', expected_ISO843: 'Pétrou, Michálīs A.' },
{ input: 'Πέτσα, Βασιλική', expected_ALA_LC: 'Petsa, Vasilikē', expected_ISO843: 'Pétsa, Vasilikī́' },
{ input: 'Πηγιάκη, Πόπη', expected_ALA_LC: 'Pēgiakē, Popē', expected_ISO843: 'Pīgiákī, Pópī' },
{ input: 'Πιτσιλαδής, Γεώργιος', expected_ALA_LC: 'Pitsiladēs, Geōrgios', expected_ISO843: 'Pitsiladī́s, Geṓrgios' },
{ input: 'Πρίντζου, Ευτυχία', expected_ALA_LC: 'Printzou, Eutychia', expected_ISO843: 'Príntzou, Eutychía' },
{ input: 'Σιάχου, Ευαγγελία', expected_ALA_LC: 'Siachou, Euangelia', expected_ISO843: 'Siáchou, Euaggelía' },
{ input: 'Σκορδάς, Γιάννης', expected_ALA_LC: 'Skordas, Giannēs', expected_ISO843: 'Skordás, Giánnīs' },
{ input: 'Σνομπ, Μαρία', expected_ALA_LC: 'Snomp, Maria', expected_ISO843: 'Snomp, María' },
{ input: 'Σουελτζής, Νίκος', expected_ALA_LC: 'Soueltzēs, Nikos', expected_ISO843: 'Soueltzī́s, Níkos' },
{ input: 'Σταθόγιαννης, Πάνος', expected_ALA_LC: 'Stathogiannēs, Panos', expected_ISO843: 'Stathógiannīs, Pános' },
{ input: 'Σταματόπουλος, Τάκης Αργ.', expected_ALA_LC: 'Stamatopoulos, Takēs Arg.', expected_ISO843: 'Stamatópoulos, Tákīs, Arg.' },
{ input: 'Σταυροπούλου, Καλλιόπη Θ.', expected_ALA_LC: 'Stauropoulou, Kalliopē Th.', expected_ISO843: 'Stauropoúlou, Kalliópī Th.' },
{ input: 'Σταύρου, Σταύρος', expected_ALA_LC: 'Staurou, Stauros', expected_ISO843: 'Staúrou, Staúros' },
{ input: 'Ταμουραντζής, Ασημάκης', expected_ALA_LC: 'Tamourantzēs, Asēmakēs', expected_ISO843: 'Tamourantzī́s, Asīmákīs' },
{ input: 'Τσάμης, Σπύρος', expected_ALA_LC: 'Tsamēs, Spyros', expected_ISO843: 'Tsámīs, Spýros' },
{ input: 'Τσαχουρίδου, Μαρία', expected_ALA_LC: 'Tsachouridou, Maria', expected_ISO843: 'Tsachourídou, María' },
{ input: 'Τσιακανίκας, Κωστής', expected_ALA_LC: 'Tsiakanikas, Kōstēs', expected_ISO843: 'Tsiakaníkas, Kōstī́s' },
{ input: 'Φαρμακόπουλος, Γρηγόριος', expected_ALA_LC: 'Pharmakopoulos, Grēgorios', expected_ISO843: 'Farmakópoulos, Grīgórios' },
{ input: 'Φενέκου, Παναγιώτα', expected_ALA_LC: 'Phenekou, Panagiōta', expected_ISO843: 'Fenékou, Panagiṓta' },
{ input: 'Φιλίππου, Φίλιππος', expected_ALA_LC: 'Philippou, Philippos', expected_ISO843: 'Filíppou, Fílippos' },
{ input: 'Φωτίου, Φώτης', expected_ALA_LC: 'Phōtiou, Phōtēs', expected_ISO843: 'Fōtíou, Fṓtīs' },
{ input: 'Χαλκιαδάκη, Νίκη', expected_ALA_LC: 'Chalkiadakē, Nikē', expected_ISO843: 'Chalkiadákī, Níkī' },
{ input: 'Χατζηβασιλείου, Καλλιρρόη', expected_ALA_LC: 'Chatzēvasileiou, Kallirroē', expected_ISO843: 'Chatzīvasileíou, Kallirróī' },
{ input: 'Χελά, Δήμητρα', expected_ALA_LC: 'Chela, Dēmētra', expected_ISO843: 'Chelá, Dī́mītra' },
{ input: 'Χούτας, Νίκος Ε.', expected_ALA_LC: 'Choutas, Nikos E.', expected_ISO843: 'Choútas, Níkos E.' },
{ input: 'Χρηστίδης, Δ.', expected_ALA_LC: 'Chrēstidēs, D.', expected_ISO843: 'Chrīstídīs, D.' },
{ input: 'Απ\'το παράθυρο του κόσμου', expected_ALA_LC: 'Ap’ to parathyro tou kosmou', expected_ISO843: 'Ap’ to paráthyro tou kósmou' },
{ input: 'Ἡμέρες - αἰῶνες : (Σελίδες·', expected_ALA_LC: 'Hēmeres - aiōnes : (Selides;', expected_ISO843: 'Īméres - aiṓnes : (Selides;' },
{ input: 'Παπούτσι απ\'τον τόπο σου!', expected_ALA_LC: 'Papoutsi ap’ ton topo sou!', expected_ISO843: 'Papoútsi ap’ ton tópo sou!' },
{ input: 'Εμείς οι … εξωγήϊνοι;', expected_ALA_LC: 'Emeis oi exōgēinoi?', expected_ISO843: 'Emeís oi ... exōgī́ïnoi?' },
{ input: 'Δασκαλάκη, Αναστασία', expected_ALA_LC: 'Daskalakē, Anastasia', expected_ISO843: 'Daskalákī, Anastasía' },
{ input: 'Μακαντάνη, Κατερίνα,', expected_ALA_LC: 'Makantanē, Katerina,', expected_ISO843: 'Makantánī, Katerína,' },
{ input: 'Τσάγκου, Γεωργία Α.', expected_ALA_LC: 'Tsankou, Geōrgia A.', expected_ISO843: 'Tságkou, Geōrgía A.' },
{ input: 'Ταβουλάρη, Κάλλια', expected_ALA_LC: 'Tavoularē, Kallia', expected_ISO843: 'Tavoulárī, Kállia' },
{ input: 'Καρυμπίδου, Ιουλία,', expected_ALA_LC: 'Karympidou, Ioulia,', expected_ISO843: 'Karympídou, Ioulía,' },
{ input: 'Μπολιεράκης, Γιώργος', expected_ALA_LC: 'Bolierakēs, Giōrgos', expected_ISO843: 'Mpolierákīs, Giṓrgos' },
{ input: 'Φιλελές, Δημήτρης,', expected_ALA_LC: 'Phileles, Dēmētrēs,', expected_ISO843: 'Filelés, Dīmī́trīs,' },
{ input: 'Τσιντάρη, Ελευθερία,', expected_ALA_LC: 'Tsintarē, Eleutheria,', expected_ISO843: 'Tsintárī, Eleuthería,' },
{ input: 'Μπύρου, Ελένη', expected_ALA_LC: 'Byrou, Helenē', expected_ISO843: 'Mpýrou, Elénī' },
{ input: 'Ρηγόπουλος, Κωνσταντίνος,', expected_ALA_LC: 'Rēgopoulos, Kōnstantinos,', expected_ISO843: 'Rīgópoulos, Kōnstantínos,' },
{ input: 'Κοτρώνης, Σωτήριος Ι.', expected_ALA_LC: 'Kotrōnēs, Sōterios Ι.', expected_ISO843: 'Kotrṓnīs, Sōtī́rios I.' },
{ input: 'Παυλάκης, Γιώργος', expected_ALA_LC: 'Paulakēs, Giōrgos', expected_ISO843: 'Paulákīs, Giṓrgos' },
{ input: 'Σταυριανός, Ηλίας,', expected_ALA_LC: 'Staurianos, Ēlias,', expected_ISO843: 'Staurianós, Īlías,' },
{ input: 'Φέρρης, Κώστας,', expected_ALA_LC: 'Pherrēs, Kōstas,', expected_ISO843: 'Férrīs, Kṓstas,' },
{ input: 'Βισκαδουράκης, Στέλιος,', expected_ALA_LC: 'Viskadourakēs, Stelios,', expected_ISO843: 'Viskadourákīs, Stélios,' },
{ input: 'Μηνά, Λαμπρινή,', expected_ALA_LC: 'Mēna, Lamprinē,', expected_ISO843: 'Mīná, Lamprinī́,' },
{ input: 'Αυδή, Ευρυνόμη', expected_ALA_LC: 'Audē, Eurynomē', expected_ISO843: 'Audī́, Eurynómī' },
{ input: 'Κουφουδάκης, Χρήστος,', expected_ALA_LC: 'Kouphoudakēs, Chrēstos,', expected_ISO843: 'Koufoudákīs, Chrī́stos,' },
{ input: 'Τάσκος, Άγγελος,', expected_ALA_LC: 'Taskos, Angelos,', expected_ISO843: 'Táskos, Ággelos,' },
{ input: 'Μαυρίδης, Γιώργος,', expected_ALA_LC: 'Mauridēs, Giōrgos,', expected_ISO843: 'Maurídīs, Giṓrgos,' },
{ input: 'Μιχαλόπουλος, Παναγ. Σ.,', expected_ALA_LC: 'Michalopoulos, Panag. S.,', expected_ISO843: 'Michalópoulos, Panag. S.,' },
{ input: 'Πιτσινός, Αλέξανδρος', expected_ALA_LC: 'Pitsinos, Alexandros', expected_ISO843: 'Pitsinós, Aléxandros' },
{ input: 'Καμμάς, Παντελής', expected_ALA_LC: 'Kammas, Pantelēs', expected_ISO843: 'Kammás, Pantelī́s' },
{ input: 'Παπαγεωργίου, Θουκυδίδης Παντελή,', expected_ALA_LC: 'Papageōrgiou, Thoukydidēs Pantelē,', expected_ISO843: 'Papageōrgíou, Thoukydídīs Pantelī́,' },
{ input: 'Παμπουκίδου, Αγγελική', expected_ALA_LC: 'Pampoukidou, Angelikē', expected_ISO843: 'Pampoukídou, Aggelikī́' },
{ input: 'Αϊμέλιος', expected_ALA_LC: 'Aimelios', expected_ISO843: 'Aïmélios' },
{ input: 'Μπερτσιά, Βασιλική', expected_ALA_LC: 'Bertsia, Vasilikē', expected_ISO843: 'Mpertsiá, Vasilikī́' },
{ input: 'Αντωνιάδου, Βούλα', expected_ALA_LC: 'Antōniadou, Voula', expected_ISO843: 'Antōniádou, Voúla' },
{ input: 'Μυλωνάς, Δημήτρης,', expected_ALA_LC: 'Mylōnas, Dēmētrēs,', expected_ISO843: 'Mylōnás, Dīmī́trīs,' },
{ input: 'Πουρζιτίδου, Βαΐτσα', expected_ALA_LC: 'Pourzitidou, Vaitsa', expected_ISO843: 'Pourzitídou, Vaḯtsa' },
{ input: 'Καλούδη, Έλενα', expected_ALA_LC: 'Kaloudē, Helena', expected_ISO843: 'Kaloúdī, Élena' },
{ input: 'Δαμιανός, Βασίλης', expected_ALA_LC: 'Damianos, Vasilēs', expected_ISO843: 'Damianós, Vasílīs' },
{ input: 'Ιωάννου, Αγνή,', expected_ALA_LC: 'Iōannou, Agnē,', expected_ISO843: 'Iōánnou, Agnī́,' },
{ input: 'Ζωράκη, Σοφία,', expected_ALA_LC: 'Zōrakē, Sophia,', expected_ISO843: 'Zōrákī, Sofía,' },
{ input: 'Νανούσης, Νίκος,', expected_ALA_LC: 'Nanousēs, Nikos,', expected_ISO843: 'Nanoúsīs, Níkos,' },
{ input: 'Αθανασιάδου, Σταυρούλα,', expected_ALA_LC: 'Athanasiadou, Stauroula,', expected_ISO843: 'Athanasiádou, Stauroúla,' },
{ input: 'Πούλου, Αναστασία,', expected_ALA_LC: 'Poulou, Anastasia,', expected_ISO843: 'Poúlou, Anastasía,' },
{ input: 'Χιώτη, Αιμιλία,', expected_ALA_LC: 'Chiōtē, Aimilia,', expected_ISO843: 'Chiṓtī, Aimilía,' },
{ input: 'Κιορσάββας, Σπύρος', expected_ALA_LC: 'Kiorsavvas, Spyros', expected_ISO843: 'Kiorsávvas, Spýros' },
{ input: 'Χρηστίδης, Χρήστος', expected_ALA_LC: 'Chrēstidēs, Chrēstos', expected_ISO843: 'Chrīstídīs, Chrī́stos' },
{ input: 'Κατσάμπα, Μαρία', expected_ALA_LC: 'Katsampa, Maria', expected_ISO843: 'Katsámpa, María' },
{ input: 'Λούνα, Ρένα,', expected_ALA_LC: 'Louna, Rena,', expected_ISO843: 'Loúna, Réna,' },
{ input: 'Ιντζόγλου, Κωνσταντίνος Σ.,', expected_ALA_LC: 'Intzoglou, Kōnstantinos S.,', expected_ISO843: 'Intzóglou, Kōnstantínos S.,' },
{ input: 'Δούκας, Μιχαήλ,', expected_ALA_LC: 'Doukas, Michaēl,', expected_ISO843: 'Doúkas, Michaī́l,' },
{ input: 'Σωτηροπούλου, Χαρά', expected_ALA_LC: 'Sōtēropoulou, Chara', expected_ISO843: 'Sōtīropoúlou, Chará' },
{ input: 'Γουργούλη, Νικολέτα', expected_ALA_LC: 'Gourgoulē, Nikoleta', expected_ISO843: 'Gourgoúlī, Nikoléta' },
{ input: 'Αρναούτη, Αγγελική,', expected_ALA_LC: 'Arnaoutē, Angelikē,', expected_ISO843: 'Arnaoútī, Aggelikī́,' },
{ input: 'Κουμανίδου, Καίτη', expected_ALA_LC: 'Koumanidou, Kaitē', expected_ISO843: 'Koumanídou, Kaítī' },
{ input: 'Μόσχου, Μυρσίνη', expected_ALA_LC: 'Moschou, Myrsinē', expected_ISO843: 'Móschou, Myrsínī' },
{ input: 'Ανδρέου, Δέσποινα', expected_ALA_LC: 'Andreou, Despoina', expected_ISO843: 'Andréou, Déspoina' },
{ input: 'Δημοτάκη, Μαρία,', expected_ALA_LC: 'Dēmotakē, Maria,', expected_ISO843: 'Dīmotákī, María,' },
{ input: 'Κατσίκας, Πασχάλης,', expected_ALA_LC: 'Katsikas, Paschalēs,', expected_ISO843: 'Katsíkas, Paschálīs,' },
{ input: 'Χατζόπουλος, Θάνος', expected_ALA_LC: 'Chatzopoulos, Thanos', expected_ISO843: 'Chatzópoulos, Thános' },
{ input: 'Χατζηγιάγκου, Επιφάνιος Κ.', expected_ALA_LC: 'Chatzēgiankou, Epiphanios K.', expected_ISO843: 'Chatzīgiágkou, Epifánios K.' },
{ input: 'Ζεμπίλης, Δημήτρης,', expected_ALA_LC: 'Zempilēs, Dēmētrēs,', expected_ISO843: 'Zempílīs, Dīmī́trīs,' },
{ input: 'Σαμαρά, Έλενα', expected_ALA_LC: 'Samara, Helena', expected_ISO843: 'Samará, Élena' },
{ input: 'Μπλαζουδάκη, Λίλιαν,', expected_ALA_LC: 'Blazoudakē, Lilian,', expected_ISO843: 'Mplazoudákī, Lílian,' },
{ input: 'Ψαρίδης, Τάκης', expected_ALA_LC: 'Psaridēs, Takēs', expected_ISO843: 'Psarídīs, Tákīs' },
{ input: 'Καραμούζης, Στέφανος', expected_ALA_LC: 'Karamouzēs, Stephanos', expected_ISO843: 'Karamoúzīs, Stéfanos' },
{ input: 'Μωραγιάννη, Βίκυ,', expected_ALA_LC: 'Mōragiannē, Viky,', expected_ISO843: 'Mōragiánnī, Víky,' },
{ input: 'Τσιλινγκίρης, Σαράντης', expected_ALA_LC: 'Tsilinnkirēs, Sarantēs', expected_ISO843: 'Tsilingkírīs, Sarántīs' },
{ input: 'Πολυβίου, Λάμπρος,', expected_ALA_LC: 'Polyviou, Lampros,', expected_ISO843: 'Polyvíou, Lámpros,' },
{ input: 'Παντολέων, Παντελής,', expected_ALA_LC: 'Pantoleōn, Pantelēs,', expected_ISO843: 'Pantoléōn, Pantelī́s,' },
{ input: 'Ζηνέλη, Ευαγγελία,', expected_ALA_LC: 'Zēnelē, Euangelia,', expected_ISO843: 'Zīnélī, Euaggelía,' },
{ input: 'Πρωτόπαπας, Κωνσταντίνος', expected_ALA_LC: 'Prōtopapas, Kōnstantinos', expected_ISO843: 'Prōtópapas, Kōnstantínos' },
{ input: 'Λαζαρίδου, Μαριάνθη,', expected_ALA_LC: 'Lazaridou, Marianthē,', expected_ISO843: 'Lazarídou, Mariánthī,' },
{ input: 'Γιαλούρης, Γιώργος,', expected_ALA_LC: 'Gialourēs, Giōrgos,', expected_ISO843: 'Gialoúrīs, Giṓrgos,' },
{ input: 'Δημητρίου, Βίλυ', expected_ALA_LC: 'Dēmētriou, Vily', expected_ISO843: 'Dīmītríou, Víly' },
{ input: 'Κραββαρίτη, Ευρυδίκη', expected_ALA_LC: 'Kravvaritē, Eurydikē', expected_ISO843: 'Kravvarítī, Eurydíkī' },
{ input: 'Καραγιάννης, Θωμάς', expected_ALA_LC: 'Karagiannēs, Thomas', expected_ISO843: 'Karagiánnīs, Thōmás' },
{ input: 'Κακαλέτσης, Νικόλαος', expected_ALA_LC: 'Kakaletsēs, Nikolaos', expected_ISO843: 'Kakalétsīs, Nikólaos' },
{ input: 'Βαρσαμή, Ευτυχία', expected_ALA_LC: 'Varsamē, Eutychia', expected_ISO843: 'Varsamī́, Eutychía' },
{ input: 'Συλαϊδή, Μαρία', expected_ALA_LC: 'Sylaidē, Maria', expected_ISO843: 'Sylaïdī́, María' },
{ input: 'Κουτρούλη, Παναγιώτα,', expected_ALA_LC: 'Koutroulē, Panagiōta,', expected_ISO843: 'Koutroúlī, Panagiṓta,' },
{ input: 'Κατσιγιάννη, Αθανασία', expected_ALA_LC: 'Katsigiannē, Athanasia', expected_ISO843: 'Katsigiánnī, Athanasía' },
{ input: 'Βλάχου, Αγγελική', expected_ALA_LC: 'Vlachou, Angelikē', expected_ISO843: 'Vláchou, Aggelikī́' },
{ input: 'Παπαδημήτρης, Δημήτρης,', expected_ALA_LC: 'Papadēmētrēs, Dēmētrēs,', expected_ISO843: 'Papadīmī́trīs, Dīmī́trīs,' },
{ input: 'Πάνος, Παναγιώτης Ν.', expected_ALA_LC: 'Panos, Panagiōtēs N.', expected_ISO843: 'Pános, Panagiṓtīs N.' },
{ input: 'Ψηφίδου, Ηρώ', expected_ALA_LC: 'Psyphidou, Hērō', expected_ISO843: 'Psīfídou, Īrṓ' },
{ input: 'Δημητρίου, Δήμητρα', expected_ALA_LC: 'Dēmētriou, Dēmētra', expected_ISO843: 'Dīmītríou, Dī́mītra' },
{ input: 'Παπαφάγου, Σουζάνα', expected_ALA_LC: 'Papaphagou, Souzana', expected_ISO843: 'Papafágou, Souzána' },
{ input: 'Στυλιανίδης, Χρήστος', expected_ALA_LC: 'Stylianidēs, Chrēstos', expected_ISO843: 'Stylianídīs, Chrī́stos' },
{ input: 'Φίλης, Κωνσταντίνος', expected_ALA_LC: 'Philēs, Kōnstantinos', expected_ISO843: 'Fílīs, Kōnstantínos' },
{ input: 'Οικονόμου, Κωνσταντίνος,', expected_ALA_LC: 'Oikonomou, Kōnstantinos,', expected_ISO843: 'Oikonómou, Kōnstantínos,' },
{ input: 'Τσούτσια, Μαίρη,', expected_ALA_LC: 'Tsoutsia, Mairē,', expected_ISO843: 'Tsoútsia, Maírī,' },
{ input: 'Σημαντήρας, Μανώλης', expected_ALA_LC: 'Sēmantēras, Manōlēs', expected_ISO843: 'Sīmantī́ras, Manṓlīs' },
{ input: 'Μύρου, Αθηνά', expected_ALA_LC: 'Myrou, Athēna', expected_ISO843: 'Mýrou, Athīná' },
{ input: 'Βαβλιάρας, Δημήτρης', expected_ALA_LC: 'Vavliaras, Dēmētrēs', expected_ISO843: 'Vavliáras, Dīmī́trīs' },
{ input: 'Γιαννουλάκη, Μαριάννα', expected_ALA_LC: 'Giannoulakē, Marianna', expected_ISO843: 'Giannoulákī, Mariánna' },
{ input: 'Πατσώνη, Άννα,', expected_ALA_LC: 'Patsōnē, Anna,', expected_ISO843: 'Patsṓnī, Ánna,' },
{ input: 'Μίτταλ, Σάρρα,', expected_ALA_LC: 'Mittal, Sarra,', expected_ISO843: 'Míttal, Sárra,' },
{ input: 'Σαλταγιάννη, Μαρία', expected_ALA_LC: 'Saltagiannē, Maria', expected_ISO843: 'Saltagiánnī, María' },
{ input: 'Μήτρου, Ιωάννης', expected_ALA_LC: 'Mētrou, Iōannēs', expected_ISO843: 'Mī́trou, Iōánnīs' },
{ input: 'Αθανασοπούλου, Ελένη', expected_ALA_LC: 'Athanasopoulou, Helenē', expected_ISO843: 'Athanasopoúlou, Elénī' },
{ input: 'Μιχοπούλου, Αθηνά-Μαρία,', expected_ALA_LC: 'Michopoulou, Athina-Maria,', expected_ISO843: 'Michopoúlou, Athīná-María,' },
{ input: 'Κούκη, Άννα', expected_ALA_LC: 'Koukē, Anna', expected_ISO843: 'Koúkī, Ánna' },
{ input: 'Γκάσταρη, Βασιλική Ν.', expected_ALA_LC: 'Gkastarē, Vasilikē N.', expected_ISO843: 'Gkástarī, Vasilikī́ N.' },
{ input: 'Βάσιου, Αικατερίνη', expected_ALA_LC: 'Vasiou, Aikaterinē', expected_ISO843: 'Vásiou, Aikaterínī' },
{ input: 'Τουλούπης, Θάνος', expected_ALA_LC: 'Touloupēs, Thanos', expected_ISO843: 'Touloúpīs, Thános' },
{ input: 'Μώτου, Αναστασία', expected_ALA_LC: 'Mōtou, Anastasia', expected_ISO843: 'Mṓtou, Anastasía' },
{ input: 'Παπαδάκη, Ελένη,', expected_ALA_LC: 'Papadakē, Helenē,', expected_ISO843: 'Papadákī, Elénī,' },
{ input: 'Βακάλου, Μαργαρίτα', expected_ALA_LC: 'Vakalou, Margarita', expected_ISO843: 'Vakálou, Margaríta' },
{ input: 'Αγγέλου, Άγγελος,', expected_ALA_LC: 'Angelou, Angelos,', expected_ISO843: 'Aggélou, Ággelos,' },
{ input: 'Κούτρας, Γρηγόρης', expected_ALA_LC: 'Koutras, Gregorēs', expected_ISO843: 'Koútras, Grīgórīs' },
{ input: 'Ψύλλας, Γιάννης,', expected_ALA_LC: 'Psyllas, Giannēs,', expected_ISO843: 'Psýllas, Giánnīs,' },
{ input: 'Μαραζόπουλος, Φώτης,', expected_ALA_LC: 'Marazopoulos, Phōtēs,', expected_ISO843: 'Marazópoulos, Fṓtīs,' },
{ input: 'Μάρτζη, Κοντέσσα', expected_ALA_LC: 'Martzē, Kontessa', expected_ISO843: 'Mártzī, Kontéssa' },
{ input: 'Μάνου, Αθανασία', expected_ALA_LC: 'Manou, Athanasia', expected_ISO843: 'Mánou, Athanasía' },
{ input: 'Δάρα, Πανωραία,', expected_ALA_LC: 'Dara, Panōraia,', expected_ISO843: 'Dára, Panōraía,' },
{ input: 'Συμεωνίδου, Μαρία', expected_ALA_LC: 'Symeōnidou, Maria', expected_ISO843: 'Symeōnídou, María' },
{ input: 'Ζελίτης, Θάνος', expected_ALA_LC: 'Zelitēs, Thanos', expected_ISO843: 'Zelítīs, Thános' },
{ input: 'Δέλτα, Πηνελόπη Σ.,', expected_ALA_LC: 'Délta, Pīnelópī S.,', expected_ISO843: 'Délta, Pīnelópī S.,' },
{ input: 'Βλάχος, Μάριος', expected_ALA_LC: 'Vlachos, Marios', expected_ISO843: 'Vláchos, Mários' },
{ input: 'Σούζας, Νίκος', expected_ALA_LC: 'Souzas, Nikos', expected_ISO843: 'Soúzas, Níkos' },
{ input: 'Μέρμηγκα, Ιουλία', expected_ALA_LC: 'Mermēnka, Ioulia', expected_ISO843: 'Mérmīgka, Ioulía' },
{ input: 'Κασιμάτη, Σίσσυ', expected_ALA_LC: 'Kasimatē, Sissy', expected_ISO843: 'Kasimátī, Síssy' },
{ input: 'Βαβανού, Κωνσταντία', expected_ALA_LC: 'Vananou, Kōnstantia', expected_ISO843: 'Vavanoú, Kōnstantía' },
{ input: 'Κουτλάκης, Μιχάλης,', expected_ALA_LC: 'Koutlakēs, Michalēs,', expected_ISO843: 'Koutlákīs, Michálīs,' },
{ input: 'Γεωργίου, Νίκος,', expected_ALA_LC: 'Geōrgiou, Nikos,', expected_ISO843: 'Geōrgíou, Níkos,' },
{ input: 'Μπιρσίμ, Τάσος,', expected_ALA_LC: 'Birsim, Tasos,', expected_ISO843: 'Mpirsím, Tásos,' },
{ input: 'Σαάπογλου, Σουζάνα', expected_ALA_LC: 'Saapoglou, Souzana', expected_ISO843: 'Saápoglou, Souzána' },
{ input: 'Παπαχριστοφίλου, Σοφία', expected_ALA_LC: 'Papachristophilou, Sophia', expected_ISO843: 'Papachristofílou, Sofía' },
{ input: 'Μπακοπούλου, Ελένη,', expected_ALA_LC: 'Bakopoulou, Helenē,', expected_ISO843: 'Mpakopoúlou, Elénī,' },
{ input: 'Γιαλαμά, Γιώτα,', expected_ALA_LC: 'Gialama, Giōta,', expected_ISO843: 'Gialamá, Giṓta,' },
{ input: 'Νικολίδου, Αθηνά', expected_ALA_LC: 'Nikolidou, Athēna', expected_ISO843: 'Nikolídou, Athīná' },
{ input: 'Χατζηνικολάου, Μαρία Κλ.', expected_ALA_LC: 'Chatzēnikolaou, Maria Kl.', expected_ISO843: 'Chatzīnikoláou, María Kl.' },
{ input: 'Ριζιώτης, Βασίλειος', expected_ALA_LC: 'Riziōtēs, Vasileios', expected_ISO843: 'Riziṓtīs, Vasíleios' },
{ input: 'Αμανίτου, Δήμητρα', expected_ALA_LC: 'Amanitou, Dēmētra', expected_ISO843: 'Amanítou, Dī́mītra' },
{ input: 'Καραγεώργη, Ευστρατία', expected_ALA_LC: 'Karageōrgē, Eustratia', expected_ISO843: 'Karageṓrgī, Eustratía' },
{ input: 'Τζάλλας, Αχιλλέας,', expected_ALA_LC: 'Tzallas, Achilleas,', expected_ISO843: 'Tzállas, Achilléas,' },
{ input: 'Αγγελοπούλου, Αλεξάνδρα', expected_ALA_LC: 'Angelopoulou, Alexandra', expected_ISO843: 'Aggelopoúlou, Alexándra' },
{ input: 'Ψωφάκη, Κωνσταντίνα', expected_ALA_LC: 'Psōphakē, Kōnstantina', expected_ISO843: 'Psōfákī, Kōnstantína' },
{ input: 'Σταμπέλου, Βούλα,', expected_ALA_LC: 'Stampelou, Voula,', expected_ISO843: 'Stampélou, Voúla,' },
{ input: 'Τσαλδάρης, Αριστείδης,', expected_ALA_LC: 'Tsaldarēs, Aristeidēs,', expected_ISO843: 'Tsaldárīs, Aristeídīs,' },
{ input: 'Περράκη, Αγλαΐα,', expected_ALA_LC: 'Perrakē, Aglaia,', expected_ISO843: 'Perrákī, Aglaḯa,' },
{ input: 'Μητράκης, Μάριος', expected_ALA_LC: 'Mētrakēs, Marios', expected_ISO843: 'Mītrákīs, Mários' },
{ input: 'Αρτέμης, Νικόλαος Δ.', expected_ALA_LC: 'Artemēs, Nikolaos D.', expected_ISO843: 'Artémīs, Nikólaos D.' },
{ input: 'Μπετεινάκη, Ελένη', expected_ALA_LC: 'Beteinakē, Helenē', expected_ISO843: 'Mpeteinákī, Elénī' },
{ input: 'Κεφαλοπούλου, Ζωγραφιά', expected_ALA_LC: 'Kephalopoulou, Zōgraphia', expected_ISO843: 'Kefalopoúlou, Zōgrafiá' },
{ input: 'Καλπαζίδου, Γεωργία', expected_ALA_LC: 'Kalpazidou, Geōrgia', expected_ISO843: 'Kalpazídou, Geōrgía' },
{ input: 'Δάσιου, Κατερίνα', expected_ALA_LC: 'Dasiou, Katerina', expected_ISO843: 'Dásiou, Katerína' },
{ input: 'Καραγιαννάκης, Γιάννης', expected_ALA_LC: 'Karagiannakēs, Giannēs', expected_ISO843: 'Karagiannákīs, Giánnīs' },
{ input: 'Σκαρλάτου, Βικτώρια', expected_ALA_LC: 'Skarlatou, Viktōria', expected_ISO843: 'Skarlátou, Viktṓria' },
{ input: 'Τύμπας, Τέλης', expected_ALA_LC: 'Tympas, Telēs', expected_ISO843: 'Týmpas, Télīs' },
{ input: 'Αγαπάκης, Ιωάννης Χρ.,', expected_ALA_LC: 'Agapakēs, Iōannēs Chr.,', expected_ISO843: 'Agapákīs, Iōánnīs Chr.,' },
{ input: 'Γιαννακοπούλου, Βαρβάρα Χ.', expected_ALA_LC: 'Giannakopoulou, Varvara Ch.', expected_ISO843: 'Giannakopoúlou, Varvára Ch.' },
{ input: 'Χορτάτου, Μελίνα', expected_ALA_LC: 'Chortatou, Melina', expected_ISO843: 'Chortátou, Melína' },
{ input: 'Χελιώτης, Κωνσταντίνος,', expected_ALA_LC: 'Cheliōtēs, Kōnstantinos,', expected_ISO843: 'Cheliṓtīs, Kōnstantínos,' },
{ input: 'Ποταμιάς, Γεώργιος,', expected_ALA_LC: 'Potamias, Geōrgios,', expected_ISO843: 'Potamiás, Geṓrgios,' },
{ input: 'Λυσιμάχου, Αλέξανδρος,', expected_ALA_LC: 'Lysimachou, Alexandros,', expected_ISO843: 'Lysimáchou, Aléxandros,' },
{ input: 'Γκόνης, Τάκης', expected_ALA_LC: 'Gkonēs, Takēs', expected_ISO843: 'Gkónīs, Tákīs' },
{ input: 'Αγγελή, Μαρία', expected_ALA_LC: 'Angelē, Maria', expected_ISO843: 'Aggelī́, María' },
{ input: 'Ρήγα, Ελένη', expected_ALA_LC: 'Rēga, Helenē', expected_ISO843: 'Rī́ga, Elénī' },
{ input: 'Βέμμος, Σταύρος,', expected_ALA_LC: 'Vemmos, Stauros,', expected_ISO843: 'Vémmos, Staúros,' },
{ input: 'Τσουρνάβα-Κουτσορίζωφ, Λιλή Χ.', expected_ALA_LC: 'Tsournava-Koutsorizōph, Lilē Ch.', expected_ISO843: 'Tsournáva-Koutsorízōf, Lilī́ Ch.' },
{ input: 'Κουτσορίζωφ, Νικόλαος,', expected_ALA_LC: 'Koutsorizōph, Nikolaos,', expected_ISO843: 'Koutsorízōf, Nikólaos,' },
{ input: 'Παπανικολάου, Δημήτρης,', expected_ALA_LC: 'Papanikolaou, Dēmētrēs,', expected_ISO843: 'Papanikoláou, Dīmī́trīs,' },
{ input: 'Μιχαηλίδης, Παντελής,', expected_ALA_LC: 'Michaēlidēs, Pantelēs,', expected_ISO843: 'Michaīlídīs, Pantelī́s,' },
{ input: 'Κωνσταντινίδης, Κοσμάς,', expected_ALA_LC: 'Kōnstantinidēs, Kosmas,', expected_ISO843: 'Kōnstantinídīs, Kosmás,' },
{ input: 'Μαυρογένη Μαρία', expected_ALA_LC: 'Maurogenē, Maria', expected_ISO843: 'Maurogénī María' },
{ input: 'Πάγκαλος, Μιχαήλ Ιωάννου', expected_ALA_LC: 'Pangalos, Michaēl Iōannou', expected_ISO843: 'Págkalos, Michaī́l Iōánnou' },
{ input: 'Σταμάτης, Αρσένης-Νικόλαος,', expected_ALA_LC: 'Stamatēs, Arsenēs-Nikolaos,', expected_ISO843: 'Stamátīs, Arsénīs-Nikólaos,' },
{ input: 'Τερζιώτη, Τίνα', expected_ALA_LC: 'Terziōtē, Tina', expected_ISO843: 'Terziṓtī, Tína' },
{ input: 'Ευσταθοπούλου, Αναστασία,', expected_ALA_LC: 'Eustathopoulou, Anastasia,', expected_ISO843: 'Eustathopoúlou, Anastasía,' },
{ input: 'Γιαγκούδης, Γιάννης', expected_ALA_LC: 'Giankoudēs, Giannēs', expected_ISO843: 'Giagkoúdīs, Giánnīs' },
{ input: 'Κάλφας, Ανέστης Ι.', expected_ALA_LC: 'Kalphas, Anestēs', expected_ISO843: 'Kálfas, Anéstīs I.' },
{ input: 'Μήτας, Θωμάς', expected_ALA_LC: 'Mētas, Thomas', expected_ISO843: 'Mī́tas, Thōmás' },
{ input: 'Βικέλας, Δημήτριος,', expected_ALA_LC: 'Vikelas, Dēmētrios,', expected_ISO843: 'Vikélas, Dīmī́trios,' },
{ input: 'Θεόφραστος,', expected_ALA_LC: 'Theophrastos,', expected_ISO843: 'Theófrastos,' },
{ input: 'Σουντουλίδης, Σταύρος', expected_ALA_LC: 'Sountoulidēs, Stauros', expected_ISO843: 'Sountoulídīs, Staúros' },
{ input: 'Μυλωνάκης, Αντώνης,', expected_ALA_LC: 'Mylōnákīs, Antṓnīs,', expected_ISO843: 'Mylōnákīs, Antṓnīs,' },
{ input: 'Ναντίν', expected_ALA_LC: 'Nantin', expected_ISO843: 'Nantín' },
{ input: 'Λαουτάρη, Μάρεα', expected_ALA_LC: 'Laoutarē, Marea', expected_ISO843: 'Laoutárī, Márea' },
{ input: 'Ξαφάκος, Στάθης', expected_ALA_LC: 'Xaphakos, Stathēs', expected_ISO843: 'Xafákos, Státhīs' },
{ input: 'Σδούκου, Αλεξάνδρα,', expected_ALA_LC: 'Sdoukou, Alexandra,', expected_ISO843: 'Sdoúkou, Alexándra,' },
{ input: 'Κατσάνης, Βαγγέλης,', expected_ALA_LC: 'Katsanēs, Vangelēs,', expected_ISO843: 'Katsánīs, Vaggélīs,' },
{ input: 'Ραυτόπουλος, Θεοφάνης,', expected_ALA_LC: 'Rautopoulos, Theophanēs,', expected_ISO843: 'Rautópoulos, Theofánīs,' },
{ input: 'Σουλή, Στεφανία Ι.', expected_ALA_LC: 'Soulē, Stephania I.', expected_ISO843: 'Soulī́, Stefanía I.' },
{ input: 'Αφθονίδης, Παντελής Λ.', expected_ALA_LC: 'Afthonidēs, Pantelēs L.', expected_ISO843: 'Afthonídīs, Pantelī́s L.' },
{ input: 'Γκότσης, Ελπιδοφόρος,', expected_ALA_LC: 'Gkotsēs, Elpidophoros,', expected_ISO843: 'Gkótsīs, Elpidofóros,' },
{ input: 'Φούσας, Προκόπης', expected_ALA_LC: 'Phousas, Prokopēs', expected_ISO843: 'Foúsas, Prokópīs' },
{ input: 'Γκιόσι, Ντοριάν,', expected_ALA_LC: 'Gkiosi, Dorian,', expected_ISO843: 'Gkiósi, Ntorián,' },
{ input: 'Παπαϊωάννου, Χάρης', expected_ALA_LC: 'Papaiōannou, Charēs', expected_ISO843: 'Papaïōánnou, Chárīs' },
{ input: 'Ηλία, Ιωάννα', expected_ALA_LC: 'Ēlia, Iōanna', expected_ISO843: 'Īlía, Iōánna' },
{ input: 'Φρούντζος, Γεώργιος Β.,', expected_ALA_LC: 'Phrountzos, Geōrgios V.,', expected_ISO843: 'Froúntzos, Geṓrgios V.,' },
{ input: 'Μπεζαντάκου, Δανάη', expected_ALA_LC: 'Bezantakou, Danaē', expected_ISO843: 'Mpezantákou, Danáī' },
{ input: 'Κολιαστάση, Δήμητρα,', expected_ALA_LC: 'Koliastasē, Dēmētra,', expected_ISO843: 'Koliastásī, Dī́mītra,' },
{ input: 'Παπαδημητρίου, Μαρία', expected_ALA_LC: 'Papadēmētriou, Maria', expected_ISO843: 'Papadīmītríou, María' },
{ input: 'Γεωργίου, Αγγελική', expected_ALA_LC: 'Geōrgiou, Angelikē', expected_ISO843: 'Geōrgíou, Aggelikī́' },
{ input: 'Αυδή, Ευρυνόμη', expected_ALA_LC: 'Audē, Eurynomē', expected_ISO843: 'Audī́, Eurynómī' },
{ input: 'Κανδηλάπτη, Κλαυδία', expected_ALA_LC: 'Kandēlaptē, Klaudia', expected_ISO843: 'Kandīláptī, Klaudía' },
{ input: 'Ευελπίδης, Χρυσός', expected_ALA_LC: 'Euelpidēs, Chrysos', expected_ISO843: 'Euelpídīs, Chrysós' },
{ input: 'Κουγιουμτσιάδης, Βασίλης Γ.', expected_ALA_LC: 'Kougioumtsiadēs, Vasilēs G.', expected_ISO843: 'Kougioumtsiádīs, Vasílīs G.' },
{ input: 'Αδαμαμά-Μωραΐτου, Κατερίνα Κ.', expected_ALA_LC: 'Adamama-Mōraitou, Katerina K.', expected_ISO843: 'Adamamá-Mōraḯtou, Katerína K.' },
{ input: 'Φλωράκη, Μαριάννα', expected_ALA_LC: 'Phlōrakē, Marianna', expected_ISO843: 'Flōrákī, Mariánna' },
{ input: 'Παπαδοπούλου, Ελένη', expected_ALA_LC: 'Papadopoulou, Helenē', expected_ISO843: 'Papadopoúlou, Elénī' },
{ input: 'Γεωργαλιού, Αφροδίτη', expected_ALA_LC: 'Geōrgaliou, Aphroditē', expected_ISO843: 'Geōrgalioú, Afrodítī' },
{ input: 'Ψαθά, Ν. (Ντίνα Θ.)', expected_ALA_LC: 'Psatha, N. (Ntina Th.)', expected_ISO843: 'Psathá, N. (Ntína Th.)' },
{ input: 'Γεωργαντοπούλου, Ντίνα', expected_ALA_LC: 'Geōrgantopoulou, D̲ina', expected_ISO843: 'Geōrgantopoúlou, Ntína' },
{ input: 'Βεζανής, Δημήτριος Σ.', expected_ALA_LC: 'Vezanēs, Dēmētrios S.', expected_ISO843: 'Vezanī́s, Dīmī́trios S.' },
{ input: 'Αεί Ρους', expected_ALA_LC: 'Aei Rous', expected_ISO843: 'Aeí Rous' },
{ input: 'Αλλοτροπία, Λαϊκή Ακαδημία Γραμμάτων, Τεχνών και Παράδοσης', expected_ALA_LC: 'Allotropia, Laikē Akadēmia Grammatōn, Technōn kai Paradosēs', expected_ISO843: 'Allotropía, Laïkī́ Akadīmía Grammátōn, Technṓn kai Parádosīs' },
{ input: '1ο Πειραματικό Δημοτικό Σχολείο Πορταριάς', expected_ALA_LC: '1o Peiramatiko Dēmotiko Scholeio Portarias', expected_ISO843: '1o Peiramatikó Dīmotikó Scholeío Portariás' },
{ input: '3ο Γυμνάσιο Θέρμης', expected_ALA_LC: '3o Gymnasio Thermēs', expected_ISO843: '3o Gymnásio Thérmīs' },
{ input: '3ο Πειραματικό Δημοτικό Σχολείο Ευόσμου', expected_ALA_LC: '3o Peiramatiko Dēmotiko Scholeio Euosmou', expected_ISO843: '3o Peiramatikó Dīmotikó Scholeío Euósmou' },
{ input: 'Α΄ Παιδιατρική Κλινική', expected_ALA_LC: 'A Paidiatrikē Klinikē', expected_ISO843: 'A΄ Paidiatrikī́ Klinikī́' },
{ input: 'Γυμνάσιο Αντίκυρας', expected_ALA_LC: 'Gymnasio Antikyras', expected_ISO843: 'Gymnásio Antíkyras' },
{ input: 'Γυναίκες Συγγραφείς κατά της Έμφυλης Βίας και των Γυναικοκτονιών «η Φωνή της»', expected_ALA_LC: 'Gynaikes Syngrapheis kata tēs Emphylēs Vias kai tōn Gynaikoktoniōn «ē Phōnē tēs»', expected_ISO843: 'Gynaíkes Syggrafeís katá tīs Émfylīs Vías kai tōn Gynaikoktoniṓn «ī Fōnī́ tīs»' },
{ input: 'Έλεγχος', expected_ALA_LC: 'Elenchos', expected_ISO843: 'Élegchos' },
{ input: 'Δημόσια Κεντρική Ιστορική Βιβλιοθήκη Σάμου', expected_ALA_LC: 'Dēmosia Kentrikē Historikē Vivliothēkē Samou', expected_ISO843: 'Dīmósia Kentrikī́ Istorikī́ Vivliothī́kī Sámou' },
{ input: 'Έγινε η απώλεια συνήθειά μας', expected_ALA_LC: 'Egine ē apōleia synētheia mas', expected_ISO843: 'Égine ī apṓleia synī́theiá mas' },
{ input: 'Ελληνική Φωτογραφική Εταιρεία', expected_ALA_LC: 'Hellēnikē Phōtographikē Hetaireia', expected_ISO843: 'Ellīnikī́ Fōtografikī́ Etaireía' },
{ input: 'Ηνωμένη Μεγάλη Στοά της Ελλάδος του Α.Α.Σ.Τ', expected_ALA_LC: 'Hēnōmenē Megalē Stoa tēs Hellados tou A.A.S.T', expected_ISO843: 'Īnōménī Megálī Stoá tīs Elládos tou A.A.S.T' },
{ input: 'Θεσσαλική Εταιρεία Ψυχικής Υγείας, Περίθαλψης-Αποκατάστασης', expected_ALA_LC: 'Thessalikē Hetaireia Psychikēs Hygeias, Perithalpsēs-Apokatastasēs', expected_ISO843: 'Thessalikī́ Etaireía Psychikī́s Ygeías, Períthalpsīs-Apokatástasīs' },
{ input: 'Ίδρυμα Ελισάβετ Σιαφλά Μπαλόγλου', expected_ALA_LC: 'Hidryma Elisavet Siaphla Baloglou', expected_ISO843: 'Ídryma Elisávet Siaflá Mpalóglou' },
{ input: 'σάλπιγξ', expected_ALA_LC: 'salpinx', expected_ISO843: 'sálpigx' },
{ input: 'Νεοελληνικός διχασμός και το μυστήριο της τέχνης', expected_ALA_LC: 'Neoellēnikos dichasmos kai to mystērio tēs technēs', expected_ISO843: 'Neoellīnikós dichasmós kai to mystī́rio tīs téchnīs' },
    // Add more test cases as needed
];

// Function to run the tests
function runTests() {
    const isAncientGreek = false; // Adjust as needed for your test cases

    testCases.forEach((test, index) => {
        const { input, expected_ALA_LC, expected_ISO843 } = test;

        let alaLcResult, iso843Result;

        if (isAncientGreek) {
            alaLcResult = ancientGreekToLatinTransliterationRomanization(input);
            iso843Result = ancientGreekToLatinTransliterationIso843(input);
        } else {
            alaLcResult = modernGreekToLatinTransliterationRomanization(input);
            iso843Result = modernGreekToLatinTransliterationIso843(input);
        }

        // Validate results
        const alaLcPassed = alaLcResult === expected_ALA_LC;
        const iso843Passed = iso843Result === expected_ISO843;

        // Update counters
        if (alaLcPassed && iso843Passed) {
            passedCount++;
            console.log(`Test case ${index + 1}: OK`);
        } else {
            failedCount++;
            console.log(`Test case ${index + 1}: NOT OK`);
            console.log(`  Input: ${input}`);
            if (!alaLcPassed) {
                console.log(`  ALA-LC Expected: ${expected_ALA_LC}`);
                console.log(`  ALA-LC Actual: ${alaLcResult}`);
            }
            if (!iso843Passed) {
                console.log(`  ISO 843 Expected: ${expected_ISO843}`);
                console.log(`  ISO 843 Actual: ${iso843Result}`);
            }
        }
        console.log('---');
    });

    // Print summary
    console.log(`Total Passed: ${passedCount}`);
    console.log(`Total Failed: ${failedCount}`);
}

// Run the tests
runTests();