---
sidebar_position: 14
description: "Beschäftigt sich mit Informationsdarstellung und Codierung, z. B. wie Bilder oder Texte im Computer gespeichert werden."
---

# Kapitel 14 - InformaGik

## Notizen

### 🎭 Magie als Einstieg in Informatik

Das Kapitel beginnt mit einem ungewöhnlichen, aber cleveren Einstieg: einem Zaubertrick.
Leser sollen aktiv mitmachen und ein 5×5-Kartenfeld mit X/O-Symbolen legen, welches später scheinbar „magisch“ durch eine zusätzliche Zeile und Spalte ergänzt wird - jedoch folgt das Ganze einer strikten mathematischen Regel: In jeder Zeile und Spalte soll am Ende **eine gerade Anzahl an X** liegen.

Dieser scheinbar zufällige Trick führt direkt ins Thema ein: Informationscodierung, Redundanz und Fehlerkorrektur.
So wird dem Leser nicht nur theoretisches Wissen vermittelt, sondern dieses auch durch eigenes Experimentieren gefestigt.

### 🔢 Der Trick der geraden Parität

Wenn man weiß, dass jede Zeile und jede Spalte eine gerade Anzahl von X enthalten soll, lassen sich manipulierte Karten lokalisieren:

- Ist **eine Karte umgedreht**, entsteht **eine ungerade X-Anzahl** in einer Zeile und Spalte.
- Der **Schnittpunkt** dieser fehlerhaften Zeile und Spalte identifiziert eindeutig den Fehler.

Man kann so einen **einzelnen Fehler erkennen und korrigieren**, ohne das Originalmuster zu kennen.
Der Trick beruht auf **Kontrollparitätsbits** - ein grundlegendes Konzept in der Informatik zur Fehlererkennung.

### 📊 Redundanz und Informationsgehalt

Das Kapitel unterscheidet präzise zwischen Information und Redundanz:

- **Information**: Der originäre Inhalt (z. B.  25 Kartenmuster).
- **Redundanz**: Zusätzliche Daten (z. B.  11 Karten für Zeile + Spalte), die keinen neuen Inhalt transportieren, aber **Fehlererkennung/-korrektur ermöglichen**.

Wichtig: Die Anzahl der Symbole steigt, der Informationsgehalt **nicht**.
Diese Redundanz ist kontrolliert und systematisch - nicht wie die natürliche Redundanz in der Sprache.

### ⚠️ Fehlererkennung bei Mehrfachfehlern

Bei mehr als einem Fehler wird es komplex:

- **Zwei Fehler**: Können erkannt, aber **nicht eindeutig korrigiert** werden.
- **Drei Fehler**: Können zwar teils erkannt werden, führen aber oft zu **falscher Korrektur**, da sich die Fehler "überlagern".
- Beispiel: Drei Fehler bilden die Ecken eines Rechtecks -> Falsche Korrektur erhöht Fehlerzahl auf vier.

Diese Beobachtungen zeigen, dass jede Art der Fehlerkorrektur eine Grenze hat.
Daher muss **zwischen Fehlererkennung und -korrektur entschieden** werden.

### 💡 Erweiterung: Mehrdimensionale Parität

Das Kapitel schlägt eine Erweiterung des Prinzips vor:

- Anstelle von 1 Zeile/Spalte zur Kontrolle werden **mehrere Prüfreihen** eingeführt, z. B. getrennt für gerade/ungerade Zeilen/Spalten.
- Dadurch lassen sich **mehr Fehler erkennen und manchmal korrigieren**.

Jedoch ist auch dieses Verfahren nicht fehlerfrei: Zwei Fehler auf denselben „Paritätsfarben“ (wie Schachbrettfelder) bleiben unerkannt.

### 💿 Anwendung in der Technik

Das Kapitel liefert viele **Alltagsbeispiele**, wo solche Prinzipien verwendet werden:

#### Blu-Ray-Discs

- Hohe Speicherdichte (\~20 Millionen Bits pro mm²).
- Selbst kleinste Staubpartikel können Tausende Bits beschädigen.
- Lösung: **13 % der Speicherfläche** ist **nur für Redundanz** zur Fehlerkorrektur reserviert.

#### Audio-CDs

- Verzichten auf Fehlerkorrektur (z. B.  für Musikdaten), akzeptieren kurze Störungen wie Knistern als tolerabel.

### 💳 Prüfziffern: Schutz vor Zahlendrehern

Zahlendreher sind häufige Eingabefehler.
Zur Vermeidung werden **Prüfziffern** verwendet:

#### Kreditkarten (Luhn-Algorithmus)

- Alternierendes Multiplizieren mit 1 und 2.
- Quersumme der Ergebnisse muss durch 10 teilbar sein.
- Erfasst fast alle Zahlendreher - **außer** 0$\leftrightarrow$9 oder Kombinationen mit identischer Quersumme.

#### Personalausweise (7-3-1-Prüfung)

- Ziffern werden alternierend mit 7, 3 und 1 multipliziert.
- Letzte Stelle der Summe ist die Prüfziffer.
- Auch hier gibt es **blinde Flecken**: 1$\leftrightarrow$6 oder 0$\leftrightarrow$5 liefern gleiche Prüfziffern bei Vertauschung.

**Kombination beider Verfahren** (Luhn + 7/3/1) könnte Lücken schließen - wird aber nicht standardmäßig eingesetzt.

### 🧬 Hamming-Distanz & fehlerkorrigierende Codes

Zentrales Konzept für robuste Codes: **Hamming-Distanz** - Anzahl der Bitunterschiede zwischen zwei Codewörtern.

#### Beispiel 1: einfache 3-Bit-Codierung

- 8 Zeichen -> 3 Bits pro Zeichen
- Fehler führt zu ungültigem Code -> Detektion möglich, aber **keine Korrektur**

#### Beispiel 2: Hamming-Codes mit 6 Bits

- Mindestens 3 Bit Unterschied zwischen zwei gültigen Codes
- Ein Fehler -> nur ein gültiger Code mit Abstand 1 -> **eindeutige Korrektur**

#### Beispiel 3: Erweiterte Codes mit Hamming-Distanz 6

- Pro Codewort: 11 Bits
- 2 Bitfehler -> erkennbar und korrigierbar
- 3 Fehler -> erkennbar, aber **nicht sicher korrigierbar**

Man muss sich entscheiden:

- Entweder **2 Fehler korrigieren**, 3 erkennen
- Oder **5 Fehler erkennen**, aber keine Korrektur versuchen

### 🛠️ Theorie trifft Realität: Systemwahl nach Bedarf

Die Wahl der Fehlerbehandlung hängt vom Anwendungskontext ab:

- **Haustelefon**: Keine aufwändige Korrektur notwendig - Sprachübertragung bleibt verständlich.
- **Raumsonde**: Extreme Redundanz & Sicherheitsmaßnahmen nötig - ein Fehler kann zur Katastrophe führen.
- **Kreditkarten**: Zahlendreher müssen erkannt werden - einfache Prüfziffer genügt.
- **Datenspeicherung**: Fehlerkorrektur unumgänglich - Redundanz bewusst einkalkuliert.

### 🧠 Fazit & Lernziel

Das Kapitel liefert eine brillante Einführung in fundamentale Informatikprinzipien:

- **Redundanz** ist nicht überflüssig - sie ist notwendig zur Sicherung von Daten.
- **Fehlererkennung** und **Fehlerkorrektur** basieren auf **systematischer Codierung**.
- **Parität**, **Hamming-Distanz** und **Prüfziffern** sind zentrale Werkzeuge der Informatik.

## Fragen und Antworten

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

## Zusammenfassung

Die "InformaGik" befasst sich mit der Codierung und Sicherung von Informationen.
Im Gegensatz zur kompakten Speicherung, die Redundanz minimiert, nutzt die InformaGik gezielt hinzugefügte, "redundante" Daten, um Fehler in der Datenübertragung oder -speicherung zu erkennen und gegebenenfalls zu korrigieren.

Ein Zaubertrick mit einem 6x6-Feld aus X und O demonstriert, wie durch das Einhalten einer Regel (gerade Anzahl von X in jeder Zeile und Spalte) ein einzelner Fehler im Muster sofort identifiziert und korrigiert werden kann.
Bei mehreren Fehlern wird die Korrektur komplexer, und es muss entschieden werden, ob man Fehler korrigieren oder nur erkennen möchte.

Das Konzept der "Hamming-Distanz" misst, wie unterschiedlich gültige Codewörter sind; eine höhere Distanz macht Codes robuster gegenüber Fehlern.
Beispiele aus dem Alltag sind die Prüfziffern von Kreditkarten und Personalausweisen, die helfen, Vertipp- oder Zahlendreher zu erkennen, obwohl auch hier nicht alle Fehlerkombinationen auffallen.
Ziel ist es, Redundanz nach der Komprimierung gezielt hinzuzufügen, um maximale Datensicherheit zu erreichen[cite: 132].
