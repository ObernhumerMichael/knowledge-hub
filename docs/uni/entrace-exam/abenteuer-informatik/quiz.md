---
sidebar_position: 16 
description: "This is a quiz I created based on the key concepts from the book."
---

# Quiz

[Download this quiz for Anki](/uni/entrance_exam/abenteuer_informatik/assets/abenteuer_informatik.apkg)

## Kapitel 2 - Ordnung muss sein

1. **Was versteht man in diesem Kapitel unter der „Problemgröße“ beim Sortieren?**
   - Die Problemgröße ist in erster Linie die **Anzahl n** der zu sortierenden Elemente.
   Sie bestimmt, wie stark die Laufzeit eines Sortierverfahrens bei wachsendem n zunimmt.
1. **Wie funktioniert SelectionSort auf abstrakter Ebene?**
   - Man sucht jeweils das kleinste (bzw. größte) Element in der noch unsortierten Restliste, tauscht es an die vorderste (bzw. hinterste) Position und reduziert dann das zu betrachtende Teilproblem um dieses Element.
   Dies wiederholt man, bis keine unsortierten Elemente mehr übrig sind.
1. **Warum haben Bubblesort und SelectionSort beide eine Laufzeit von O(n²)?**
   - Weil sie für jedes der n Elemente erneut durch die verbleibenden Elemente scannen und dabei je nach Größe etwa n/2 Vergleiche/Tausche ausführen.
   Das ergibt insgesamt proportional zu $n \times n = n^2$ elementare Vergleiche/Tausch-Operationen.
1. **Welches grundlegende Prinzip nutzt Tournament-Sort, um schneller zu werden?**
   - Tournament-Sort organisiert alle n Elemente in einer Turniertabelle.
   Dabei wird in $\log_2(n)$ aufeinanderfolgenden Ebenen jeweils das größere (oder kleinere) Element weitergereicht.
   Durch ständiges Finden des bisher größten Elements in logarithmischer Zeit pro Sieger und n Wiederholungen ergibt sich insgesamt eine Laufzeit von $\mathcal{O}(n\log n)$.
1. **Unter welchen Voraussetzungen kann Proxmap- (Buckets-) Sort in O(n) laufen?**
   - Wenn die **Schlüsselwerte** so gut verteilt sind, dass man sie mit einer einfachen Abbildfunktion (Hash/Mapping) auf etwa $n$ oder ein kleines Vielfaches an “Buckets” verteilt und jeder Bucket durchschnittlich nur $\mathcal{O}(1)$ Elemente enthält.
   Dann sind das Einordnen (n Schritte) und das Sortieren innerhalb winziger Buckets (ebenfalls zusammen $\mathcal{O}(n)$) linear.
1. **Was geschieht, wenn die Verteilung der Schlüssel bei Bucketsort extrem ungleich ist?**
   - Dann häufen sich viele Elemente in wenigen Buckets.
   Innerhalb dieser Buckets muss man sie dann etwa mit O(k²) sortieren (z. B. SelectionSort), wobei k ≫ 1 Elemente im Bucket liegen. Dadurch bricht die Gesamtlaufzeit auf deutlich über $\mathcal{O}(n)$ ein, schlimmstenfalls sogar auf $\mathcal{O}(n^2)$.
1. **Welche Laufzeitklassen sind in Sortierszenarien üblich, und wofür stehen sie?**
   - **O(1)**: Konstanter Aufwand (z. B. Zugriff auf ein Arrayelement).
   - **O(log n)**: Logarithmischer Aufwand (z. B. binäre Suche in einer sortierten Liste).
   - **O(n)**: Linearer Aufwand (z. B. Bucketsort bei gleichmäßiger Verteilung).
   - **O(n log n)**: Beste vergleichsbasierte Sortieralgorithmen (Quicksort, MergeSort, Tournament-Sort).
   - **O(n²)**: Einfache Sortierverfahren (SelectionSort, Bubblesort, Insertionsort im ungünstigsten Fall).
1. **Warum ist es in der Praxis wichtiger, auf die Wachstumsrate zu achten als auf konstante Faktoren?**
   - Weil bei großen n die Terme wie $n^2$ oder $n\log n$ den Laufzeit‐Unterschied weit stärker dominieren als konstante Multiplikatoren (z. B. 2⋅n log n vs. 0,5⋅n log n).
   Ab einer gewissen Größe von n sind $\mathcal{O}(n\log n)$-Algorithmen praktisch stets deutlich schneller als solche mit $\mathcal{O}(n^2)$, selbst wenn die konstanten Faktoren variieren.
1. **Welchen Sortieralgorithmus sollte man typischerweise für sehr große Datenmengen wählen, und warum?**
    - Für große Datenmengen (z. B. n > 10 000) verwendet man bevorzugt Verfahren mit **O(n log n)** (Quicksort, MergeSort, Heapsort) oder – wenn die Datenverteilung passt – auch Bucketsort (O(n)).
    Quicksort (oder ein Hybrid‐Verfahren wie Introsort) ist in typischen Implementierungen sehr effizient und speicherplatzsparend.

## Kapitel 3 - Ich packe meinen Koffer

1. Was ist das Schatzkisten-Rätsel und welche Problemklasse beschreibt es?
    - Ein Mann darf zur Belohnung so viele Schätze mitnehmen, wie in eine Kiste passen – das ist eine Form des klassischen **Rucksackproblems**, bei dem der Wert maximiert werden soll, während die Kapazität begrenzt ist.
2. Warum ist der Brute-Force-Ansatz beim Rucksackproblem ineffizient?
    - Weil alle möglichen Kombinationen geprüft werden müssen, was zu einem **exponentiellen Zeitaufwand** führt, sobald die Anzahl der Gegenstände oder die Kistengröße steigt.
3. Wie hilft das Prinzip „Divide et impera“ beim Rucksackproblem?
    - Das Problem wird in kleinere Teilprobleme zerlegt. Lösungen für kleine Kisten und wenige Objekte werden kombiniert, um größere Lösungen zu erhalten.
4. Was ist die Grundidee der dynamischen Programmierung im Kontext des Rucksackproblems?
    - **Alle Teillösungen werden berechnet**, um daraus **schrittweise die optimale Lösung** aufzubauen.
5. Wie funktioniert die dynamische Programmierung beim Rucksackproblem konkret?
    - Für jede Kistengröße (0 bis max.) wird berechnet, welcher Wert mit den bisherigen Schätzen erreichbar ist. Neue Schätze verbessern die Lösungen iterativ.
6. Wie lautet der dynamische Rucksack-Algorithmus in Pseudocode?

```pseudo
Für jeden Schatz ab dem zweitkleinsten:
Für jede Kiste A (von klein nach groß):
    Bestimme Kiste B = A + Größe des Schatzes
    Wenn (Wert von A + Schatz) > Wert von B:
    Setze Inhalt von B = Inhalt A + Schatz
```

7. Was ist der Unterschied zwischen Bottom-up und Top-down?
    - **Bottom-up:** Beginnt bei kleinen Teilproblemen und baut die Lösung auf.
    - **Top-down:** Zerlegt das große Problem rekursiv in kleinere.
8. Was sind die Schritte der vollständigen Induktion?
    1. **Induktionsanfang**: Aussage gilt für $n = 1$.
    2. **Induktionsvoraussetzung**: Aussage gilt für $n - 1$.
    3. **Induktionsschritt**: Daraus folgt Gültigkeit für $n$.
    4. **Schlussfolgerung**: Aussage gilt für alle $n \geq 1$.
9. Wo wird das Rucksackproblem in der Praxis angewendet?
    - **Logistik:** Beladung von Fahrzeugen/Lagerung
    - **Aufgabenverteilung:** Ressourcen auf Prozesse oder Personen aufteilen
    - **Budgetierung, Containerstauung, Portfolio-Optimierung**
10. Warum ist das Rucksackproblem in der Praxis oft schwierig zu lösen?
    - Weil reale Bedingungen wie **begrenzte Stückzahlen**, **irrationale Maße** oder **dreidimensionale Modelle** es in die Klasse der **NP-vollständigen Probleme** überführen – dafür gibt es (derzeit) keine effizienten Algorithmen.

## Kapitel 9 - Paketpost

1. **Warum funktioniert Kommunikation im kleinen Kreis besser als im großen?**
   - Weil weniger Überschneidungen und Störungen auftreten. In großen Gruppen stört man sich gegenseitig.
2. **Was ist die Aufgabe von Kommunikatoren im Hofbeispiel?**
   - Sie übermitteln Nachrichten zwischen getrennten Gruppen - vergleichbar mit Routern im Internet.
3. **Wie ist eine IP-Adresse aufgebaut und wozu dient sie?**
   - Sie besteht aus vier Zahlenblöcken (z. B. 192.168.0.1) und dient der eindeutigen Adressierung von Geräten im Netzwerk.
4. **Wie funktionieren Router?**
   - Router entscheiden anhand von **Routingtabellen**, wohin ein Paket weitergeleitet wird.
5. **Was passiert, wenn ein Paket keine gültige Route hat?**
   - Es wird verworfen - ähnlich wie ein Brief mit falscher Adresse nicht zugestellt wird.
6. **Wozu dient DNS?**
   - Es übersetzt **Namen** (z. B. `google.com`) in **IP-Adressen**, damit Computer kommunizieren können.
7. **Was ist das OSI-Modell?**
   - Ein 7-Schichten-Modell zur Beschreibung der Netzwerkkommunikation - vom physikalischen Signal bis zur Anwendung.
8. **Was passiert, wenn Datenpakete in falscher Reihenfolge ankommen?**
   - Die Sitzungsschicht (OSI 5) ordnet die Pakete wieder korrekt zu einer Verbindung zu.
9. **Warum ist Modellbildung wichtig in der Informatik?**
   - Modelle helfen, komplexe Systeme **überschaubar und verständlich** zu machen.
10. **Wie macht das Internet Gebrauch von Paradigmen menschlicher Organisation?**
    - Durch klare Zuständigkeiten (Router), Adresssysteme (IP), Vermittler (DNS), und Hierarchien - wie bei der Post oder im Hofstaat.

## Kapitel 11 - Ordnung im Chaos

1. Warum ist Ordnung im Computerspeicher wichtig?
    - Weil geordnete Daten schneller durchsucht werden können. Bei sortierten Daten lässt sich etwa die binäre Suche anwenden, die deutlich effizienter ist als eine sequentielle Suche.
2. Was versteht man unter sequentieller Suche?
    - Die sequentielle Suche überprüft alle Elemente nacheinander, bis das gesuchte gefunden ist. Im Schnitt müssen etwa die Hälfte aller Elemente durchlaufen werden.
3. Wie funktioniert die binäre Suche?
    - Die binäre Suche setzt voraus, dass die Daten sortiert sind. Sie beginnt in der Mitte und entscheidet je nach Vergleichsergebnis, ob die gesuchte Information links oder rechts zu finden ist. So wird der Suchbereich mit jedem Schritt halbiert.
4. Was ist Hashing und wofür wird es eingesetzt?
    - Hashing ist eine Methode zur schnellen Speicherung und Wiederauffindung von Daten. Mithilfe einer Hashfunktion wird aus einem Schlüssel direkt die Speicherposition berechnet.
5. Was versteht man unter einer Hashfunktion?
    - Eine Hashfunktion berechnet aus einem Schlüssel (z. B. einer Zahl) eine Speicheradresse. Zum Beispiel: `h(s) = s mod 10` legt fest, dass der Schlüssel in eine von 10 Speicherzellen eingeordnet wird.
6. Was passiert bei Kollisionen im Hashing?
    - Wenn zwei Daten denselben Speicherplatz beanspruchen, spricht man von einer Kollision. Diese wird durch Kollisionsbehandlung gelöst, zum Beispiel durch das Suchen der nächsten freien Speicherstelle (lineares Sondieren).
7. Warum benötigt Hashing mehr Speicherplatz als Sortieren?
    - Weil Hashing am besten funktioniert, wenn der Speicher nicht zu stark ausgelastet ist – idealerweise unter 80 %. So sinkt die Wahrscheinlichkeit von Kollisionen und der Zugriff bleibt schnell.
8. Was ist ein Pseudozufallszahlengenerator?
    - Ein Verfahren, das mit einer festen Startzahl und einer mathematischen Formel eine scheinbar zufällige Zahlenfolge erzeugt. Diese Zahlen sind nicht wirklich zufällig, aber gleichmäßig verteilt.
9. Warum sind Pseudozufallszahlen im Computer notwendig?
    - Weil Computer deterministische Maschinen sind und echten Zufall nicht erzeugen können. Für viele Anwendungen reichen gut gemachte Pseudozufallszahlen jedoch aus.
10. Was ist der Mid-Square-Generator und warum ist er ungeeignet?
    - Er quadriert eine Zahl und verwendet die mittleren Ziffern als nächste Zufallszahl. Er liefert jedoch oft kurze, sich wiederholende Zahlenfolgen und ist daher für viele Anwendungen unbrauchbar.

## Kapitel 12 – Mit Sicherheit

1. Was ist eine Transpositions-Chiffre?
    - Eine Verschlüsselung, bei der die Buchstaben des Klartexts in der Reihenfolge vertauscht werden, z. B. mit der Skytale der Spartaner.
1. Wie funktioniert der Cäsar-Code?,
    - Jeder Buchstabe wird durch den ersetzt, der eine bestimmte Anzahl an Positionen später im Alphabet steht.
1. Was ist eine Substitutions-Chiffre?,
    - Eine Verschlüsselung, bei der jeder Buchstabe durch einen anderen ersetzt wird, aber an der gleichen Textstelle bleibt.
1. Was unterscheidet symmetrische von asymmetrischer Verschlüsselung?
    - Bei symmetrischer Verschlüsselung wird derselbe Schlüssel für Ver- und Entschlüsselung genutzt. Bei asymmetrischer gibt es ein Schlüsselpaar (öffentlich/privat).
1. Warum ist asymmetrische Verschlüsselung wichtig für das Internet?
    - Sie ermöglicht sichere Kommunikation mit Unbekannten, ohne vorher einen gemeinsamen Schlüssel auszutauschen.
1. Was ist das Hauptproblem bei der asymmetrischen Verschlüsselung im Internet?
    - Die Authentizität des öffentlichen Schlüssels muss überprüfbar sein – sonst könnte ein Angreifer (wie Spike) sich dazwischenschalten.
1. Welche Rolle hat eine Zertifizierungsinstanz wie Zoe im Buchbeispiel?
    - Sie bestätigt, dass ein öffentlicher Schlüssel wirklich zu einer bestimmten Person (z. B. Vera) gehört.
1. Was bedeutet „Vertraulichkeit“ im Kontext digitaler Kommunikation?
    - Nur der beabsichtigte Empfänger kann die Nachricht lesen.
1. Was bedeutet „Authentizität“ bei digitalen Nachrichten?
    - Man kann sicherstellen, dass eine Nachricht tatsächlich vom angegebenen Absender stammt.
1. Warum wird asymmetrische Verschlüsselung meist nur zu Beginn einer sicheren Sitzung verwendet?
    - Weil sie rechnerisch aufwändiger ist. Danach wird auf schnellere symmetrische Verschlüsselung gewechselt.
1. Warum ist ein sicher erzeugter Zufallswert für einen symmetrischen Schlüssel wichtig?
    - Weil ein vorhersehbarer Schlüssel leicht erraten und damit die Verschlüsselung gebrochen werden kann.
1. Was ist das RSA-Verfahren?
    - Ein asymmetrisches Verschlüsselungsverfahren, das auf dem Problem der Primfaktorzerlegung basiert.
1. Warum ist die Länge des Schlüssels wichtig für die Sicherheit?
    - Je länger der Schlüssel, desto mehr Kombinationen müssen Hacker ausprobieren, um ihn zu knacken.

## Kapitel 14 - InformaGik

1. Welchen Zweck erfüllen redundante Daten in der Informatik?
    - Redundante Daten erhöhen nicht den Informationsgehalt eines Datensatzes, ermöglichen aber, dass eine bestimmte Anzahl von Fehlern erkannt und unter Umständen auch korrigiert werden kann.
1. Was versteht man unter Hamming-Distanz?
    - Die Hamming-Distanz ist die Anzahl der Stellen, an denen sich zwei Codeworte einer Codetabelle unterscheiden. Die kleinste Hamming-Distanz zwischen zwei beliebigen Codeworten bestimmt die Hamming-Distanz des gesamten Codes.
1. Wie lässt sich der Fehlerkorrektur-Trick mit dem 6x6-Feld durchführen, wenn eine Karte umgedreht wurde?
    - Nachdem eine Karte umgedreht wurde, gibt es genau eine Zeile und eine Spalte mit einer ungeraden Anzahl von X. Die gesuchte Karte ist diejenige im Schnittpunkt dieser Zeile und Spalte.
1. Welche Methode zur Fehlererkennung wird bei Kreditkartennummern verwendet?
    - Bei Kreditkartennummern wird jede Ziffer abwechselnd mit 2 und mit 1 multipliziert. Die einzelnen Ziffern der Ergebnisse werden addiert, und die Summe muss ein Vielfaches von 10 sein.
1. Welche Art von Zahlendrehern werden beim Kreditkarten-Verfahren nicht erkannt?
    - Zahlendreher bei den Ziffern 0 und 9 werden nicht erkannt, da sie auf jeder Position den gleichen Teil zur Prüfsumme beitragen.
1. Wie funktioniert die Prüfziffernberechnung beim EU-Personalausweis oder Reisepass für einen Block von Ziffern?
    - Die Ziffern werden abwechselnd nacheinander mit 7, 3 und 1 multipliziert. Die Prüfziffer ist die letzte Ziffer der Summe dieser Produkte. Buchstaben spielen dabei keine Rolle.
1. Welchen Nachteil hat es, wenn bei einem 6x6-Feld zwei Kärtchen umgedreht werden?
    - Wenn zwei Kärtchen umgedreht werden, kann man zwar erkennen, dass Fehler vorliegen, aber man kann nicht mit Gewissheit sagen, welche Karten umgedreht wurden. Eine Korrektur könnte die Situation sogar verschlimmern, indem nicht zwei, sondern vier Kärtchen falsch liegen.
1. Warum ist es notwendig, Fehler bei der Datenspeicherung, wie zum Beispiel auf einer Blu-Ray-Disc, zu akzeptieren und zu korrigieren?
    - Bei der Speicherung großer Datenmengen auf engstem Raum, wie bei Blu-Ray-Discs, sind winzige Partikel wie Staubkörner unvermeidbar und können viele Informationseinheiten unlesbar machen. Daher müssen Fehler erkannt und korrigiert werden.
1. Was ist der Unterschied zwischen Fehlererkennung und Fehlerkorrektur in Bezug auf die Anzahl der Fehler?
    - Wenn man Fehler korrigiert, kann man einen Fehler korrigieren und zwei Fehler noch erkennen. Verzichtet man auf die Korrektur, kann man bis zu drei Fehler erkennen. Die Korrektur funktioniert nur mit einer kleineren Anzahl von Fehlern, und bei mehr Fehlern muss man eine falsche Korrektur in Kauf nehmen.
1. Wie wird die Speicherkapazität bei DVDs oder Blu-Ray-Discs für die Fehlerkorrektur genutzt?
    - Bei DVDs oder Blu-Ray-Discs werden etwa 87% der möglichen Speicherkapazität für "echte Daten" genutzt, der Rest (13%) wird für redundante Daten investiert, die eine umfangreiche Fehlerkorrektur ermöglichen.
1. Welchen Vorteil bietet eine höhere Hamming-Distanz eines Codes?
    - Codes mit einer höheren Hamming-Distanz sind robuster gegenüber Fehlern, da die korrekten Codeworte so unterschiedlich sind, dass gegebenenfalls auch mehrere Fehler erkannt und korrigiert werden können.
1. Warum wird bei Audio-CDs im Musikteil auf Fehlerkorrektur verzichtet?
    - Bei Audio-CDs wird auf Fehlerkorrektur verzichtet, da die Entwickler eine kurze Unterbrechung oder ein winziges Knistern als akzeptabel ansahen.

## Kapitel 15 - Allmächtiger Computer!?

1. Sind Computer allmächtig, wenn man sie nur richtig programmiert?
    - Nein. Es gibt Probleme, die Computer entweder gar nicht oder nur mit unrealistisch hohem Aufwand lösen können - unabhängig vom Programm.
1. Warum sind einige Probleme wie das Affenpuzzle nicht praktisch lösbar?
    - Weil die Anzahl möglicher Kombinationen so stark wächst, dass selbst mit allen Computern der Welt die Lösung unendlich lange dauern würde.
1. Was ist „Branch and Bound“?
    - Eine Technik, bei der man während des Ausprobierens frühzeitig falsche Lösungswege erkennt und verwirft, um Rechenaufwand zu sparen.
1. Kann ein Computer die Frage ob man mit bestimmten Puzzleteilen (Kacheln) prinzipiell beliebig große Flächen auslegen kann, immer zuverlässig beantworten?
    - Nein. Dieses sogenannte Domino-Problem ist nicht entscheidbar, d. h. es gibt Instanzen, für die kein Computer je eine „JA“ oder „NEIN“-Antwort geben kann.
1. Was ist das Halteproblem?
    - Die Frage, ob ein beliebiges Computerprogramm bei jeder Eingabe irgendwann anhält oder in einer Endlosschleife festhängt.
1. Kann ein Computer das Halteproblem lösen?
    - Nein. Es wurde bewiesen, dass kein Programm existieren kann, das für alle anderen Programme korrekt entscheidet, ob sie terminieren oder nicht.
1. Was zeigt das Beispiel von „PROGRAMM C“ im Text?
    - Dass die Annahme eines universellen „HÄLTS?“-Programms zu einem logischen Widerspruch führt - es kann also nicht existieren.
