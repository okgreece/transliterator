function transcribe() {
    // Retrieve the input text entered by the user
    const userInput = document.getElementById('expanding-input').value;

    // Perform transcription
    const transcribedText = latinToGreekTranscription(userInput);

    // Display the transcription result
    document.getElementById('transcriptionOutput').textContent = transcribedText;
}

function latinToGreekTranscription(text) {
    const transcriptionMap = {
        //Latin to Greek
            // Existing single letter mappings
                'a': 'α', 'A': 'Α', 'á': 'ά', 'Á': 'Ά','B': 'Μπ', 'b': 'μπ', 'V': 'Β', 'v': 'β', 'g': 'γ', 'G': 'Γ',
                'd': 'δ', 'D': 'Δ', 'e': 'ε', 'E': 'Ε', 'é': 'έ', 'É': 'Έ', 'z': 'ζ', 'Z': 'Ζ', 'ī': 'η', 'Ī': 'Η',
                'í': 'ή', 'Í': 'Ή', 'i': 'ι', 'I': 'Ι', 'í': 'ί', 'Í': 'Ί', 'ï': 'ϊ', 'Ï': 'Ϊ', 'ḯ': 'ΐ', 'k': 'κ',
                'K': 'Κ', 'l': 'λ', 'L': 'Λ', 'm': 'μ', 'M': 'Μ', 'n': 'ν', 'N': 'Ν', 'x': 'ξ', 'X': 'Ξ', 'o': 'ο',
                'O': 'Ο', 'ó': 'ό', 'Ó': 'Ό', 'p': 'π', 'P': 'Π', 'r': 'ρ', 'R': 'Ρ', 's': 'σ', 'S': 'Σ', 't': 'τ',
                'T': 'Τ', 'y': 'υ', 'Y': 'Υ', 'ý': 'ύ', 'Ý': 'Ύ', 'ÿ': 'ϋ', 'Ÿ': 'Ϋ', 'f': 'φ', 'F': 'Φ', 'ō': 'ω',
                'Ō': 'Ω', 'ṓ': 'ώ', 'Ṓ': 'Ώ',
            // Two-letter combinations mappings
                'th': 'θ', 'Th': 'Θ', 'TH': 'Θ', 'ch': 'χ', 'Ch': 'Χ', 'CH': 'Χ', 'ps': 'ψ', 'Ps': 'Ψ', 'PS': 'Ψ','ph':'φ','Ph':'Φ','PH':'Φ','s ': 'ς ','s.': 'ς.','s,': 'ς,',
                'hē': 'η','Hē': 'Η','Ho': 'Ο','ho': 'ο','Ha': 'Α','ha': 'α','Rh': 'Ρ','rh': 'ρ','hu': 'υ','hy': 'υ','he': 'ε','ng': 'γγ','gk': 'γκ','Hy': 'Υ','He': 'Ε',
                'Hi': 'Ι','hi': 'ι',
            // ISO 843 mappings
                'Ē': 'Η', 'Ī': 'Η', 'Ī́': 'Ή', 'Ō': 'Ω', 'Ṓ': 'Ώ','D̲': 'Ντ', 'd̲': 'ντ','ē': 'η','u': 'υ',
            // Vernacular Romanization mappings

            // Add your ISO 843 and Vernacular Romanization mappings here
                'W': 'ϝ', 'w': 'Ϝ', 'Ḳ': 'Ϙ', 'ḳ': 'ϙ',
            //Greek Numerals  να το δω μετα
            'αʹ': 1, 'βʹ': 2, 'γʹ': 3, 'δʹ': 4, 'εʹ': 5, 'ϝʹ': 6, 'ζʹ': 7, 'ηʹ': 8, 'θʹ': 9, 'ιʹ': 10,
            'κʹ': 20, 'λʹ': 30, 'μʹ': 40, 'νʹ': 50, 'ξʹ': 60, 'οʹ': 70, 'πʹ': 80, 'ϙʹ': 90,
            'ρʹ': 100, 'σʹ': 200, 'τʹ': 300, 'υʹ': 400, 'φʹ': 500, 'χʹ': 600, 'ψʹ': 700, 'ωʹ': 800, 'ϡʹ': 900,
            '͵α': 1000, 'ιαʹ': 1001, '͵αα': 1001,
        // //Greek to Latin
        //     //ISO 843
        //         'Α':'A','α':'a','Β':'V','β':'v','Γ':'G','γ':'g','Δ':'D','δ':'d','Ε':'E','ε':'e','Ζ':'Z','ζ':'z','Η':'Ī','η':'ī','Θ':'Th',
        //         'θ':'th','Ι':'I','ι':'i','Κ':'K','κ':'k','Λ':'L','λ':'l','Μ':'M','μ':'m','Ν':'N','ν':'n','Ξ':'X','ξ':'x','Ο':'O','ο':'o',
        //         'Π':'P','π':'p','Ρ':'R','ρ':'r','Σ':'S','σ':'s','ς':'s','Τ':'T','τ':'t','Υ':'Y','υ':'y','Φ':'F','φ':'f','Χ':'Ch','χ':'ch','Ψ':'Ps',
        //         'ψ':'ps','Ω':'Ō','ω':'ō',
        //       //Tonismena
        //         'Ά':'Á','ά':'á','Έ':'É','έ':'é','Ή':'Ī́','ή':'ī́','Ί':'Í','ί':'í','Ϊ':'Ï','ϊ':'ï','ΐ':'ḯ','Ό':'Ó','ό':'ó','Ύ':'Ý','Ϋ':'Ÿ',
        //         'ύ':'ý','ϋ':'ÿ','ΰ':'ÿ́','Ώ':'Ṓ','ώ':'ṓ',

            //Romanization Table /Modern
              //Single-letter Mapping
                'Α':'A','α':'a','Β':'V','β':'v','Γ':'G','γ':'g','Δ':'D','δ':'d','Ε':'E','ε':'e','Ζ':'Z','ζ':'z','Η':'Ē','η':'ē','Θ':'Th',
                'θ':'th','Ι':'I','ι':'i','Κ':'K','κ':'k','Λ':'L','λ':'l','Μ':'M','μ':'m','Ν':'N','ν':'n','Ξ':'X','ξ':'x','Ο':'O','ο':'o',
                'Π':'P','π':'p','Ρ':'R','ρ':'r','Ῥ':'Rh','ῥ':'rh','C':'S','σ':'s','ϲ':'s','ς':'s','Τ':'T','τ':'t','Υ':'Y','υ':'y','Φ':'Ph',
                'φ':'ph','Χ':'Ch','χ':'ch','Ψ':'Ps','ψ':'ps','Ω':'Ō','ω':'ō',
               //Tonismena
               'Ά':'A','ά':'a','Έ':'E','έ':'e','Ή':'Ē','ή':'ē','Ί':'I','ί':'i','Ϊ':'I','ϊ':'i','ΐ':'i','Ό':'O','ό':'o','Ύ':'Y','Ϋ':'Y',
               'ύ':'y','ϋ':'u','ΰ':'u','Ώ':'Ō','ώ':'ō',
                //Archail Letters
                'Ϝ':'W','ϝ':'w','Ϙ':'Ḳ','ϙ':'ḳ',
              //2-letters Mapping
                'γγ':'ng','γξ':'nx','γχ':'nch','Μπ':'B','μπ':'b','Ντ':'D̲','ντ':'d̲',
                'Αυ':'Au','Ευ':'Eu','Ηυ':'Ēu','Ου':'Ou','Υι':'Yi','Ωυ':'Ōu',
                'αυ':'au','ευ':'eu','ηυ':'ēu','ου':'ou','υι':'ui','ωυ':'ōu'


    };

    let result = '';
    let i = 0;

    while (i < text.length) {
        // Check if current and next characters form a two-letter combination
        const twoLetterCombo = text[i] + text[i+1];
        if (transcriptionMap.hasOwnProperty(twoLetterCombo)) {
            result += transcriptionMap[twoLetterCombo];
            i += 2; // Move to the next pair of characters
        } else {
            result += transcriptionMap[text[i]] || text[i];
            i++;
        }
    }

    return result;
}













function handleInputExpansion() {
    const input = document.getElementById('expanding-input');
    const indicator = document.querySelector('.expansion-indicator');
  
    const expandInput = () => {
      input.style.borderBottomWidth = '4px';
      indicator.style.height = '4px';
    };
  
    const checkInputSize = () => {
      if (input.scrollHeight > input.offsetHeight) {
        expandInput();
      } else {
        input.style.borderBottomWidth = '2px';
        indicator.style.height = '2px';
      }
    };
  
    input.addEventListener('input', checkInputSize);
    window.addEventListener('load', checkInputSize);
  }
  handleInputExpansion();