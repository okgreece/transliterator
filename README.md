# Transliterator — Greek to Latin Characters

A browser-based tool for romanising names and phrases from modern or ancient Greek into Latin characters. It transliterates the text; it does not translate its meaning into English. The interface is available in Greek and English.

## Standards

The application implements rules from:

- **ISO 843:1997** — an overview is available on [Wikipedia](https://en.wikipedia.org/wiki/ISO_843).
- **ALA-LC Romanization Table for Greek (2010)** — available from the [Library of Congress](https://www.loc.gov/catdir/cpso/romanization/greek.pdf).

## Usage

The application entry page is [Arxiki.html](Arxiki.html).

1. Enter a Greek name or phrase in the left text box.
2. For ancient Greek, select **Ancient Greek** above the text box.
3. Click **Submit** to generate the ALA-LC and ISO 843 results.
4. Use **Copy** beside the desired result.

Unrecognised characters are represented by an asterisk (`*`). For modern Greek ALA-LC romanisation, the application's guidance recommends checking whether words derive from ancient Greek words with rough breathing using the [Liddell–Scott dictionary](https://www.greek-language.gr/digitalResources/ancient_greek/tools/liddell-scott/index.html).

**Current hosting issue:** the script reference in `Arxiki.html` uses `Transliterator_Javascript.js`, while the repository file is named `Transliterator_JavaScript.js`. These names must match exactly for the application to work on case-sensitive hosting.

## Credits

Ilias Tsitsilegkas developed the tool as a thesis at the [Department of Information and Electronic Engineering](https://www.iee.ihu.gr/) of the International Hellenic University, under the supervision of Assistant Professor Charalampos Bratsas, in collaboration with the staff of the Cataloguing Department of the [National Library of Greece (NLG)](https://www.nlg.gr/).

This description and the credits are based on the application's [About page](about.html). Usage instructions are adapted from its [Help page](help.html).

## Σχετικά

Η εφαρμογή δημιουργήθηκε για τον μεταγραμματισμό ονομάτων και φράσεων από τα Νέα ή Αρχαία Ελληνικά σε λατινικούς χαρακτήρες σύμφωνα με τα πρότυπα **ISO 843:1997** και **ALA-LC Romanization Table for Greek (2010)**. Πρόκειται για μεταγραμματισμό και όχι για μετάφραση στα αγγλικά.

Η ανάπτυξη έγινε από τον **Ηλία Τσιτσιλέγκα** στο πλαίσιο εκπόνησης διπλωματικής εργασίας στο [Τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων](https://www.iee.ihu.gr/) του Διεθνούς Πανεπιστημίου της Ελλάδος, με επιβλέποντα τον Επίκουρο Καθηγητή **Χαράλαμπο Μπράτσα**, σε συνεργασία με το προσωπικό του Τμήματος Καταλόγων της [Εθνικής Βιβλιοθήκης της Ελλάδος (ΕΒΕ)](https://www.nlg.gr/).

Για χρήση, εισάγετε το κείμενο στο αριστερό πλαίσιο, επιλέξτε «Αρχαία ελληνικά» εφόσον χρειάζεται, πατήστε «Υποβολή» και αντιγράψτε το αποτέλεσμα με το κουμπί «Αντιγραφή».

## Source and license

Imported with its Git history from [OKGreece/nlg-okfgr/transliterator on GitLab](https://gitlab.com/OKGreece/nlg-okfgr/transliterator).

Licensed under the [MIT License](LICENSE).
