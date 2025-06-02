---
sidebar_position: 11
description: "Zeigt, wie man in riesigen Datenmengen mit effizienten Suchstrategien trotzdem findet, was man sucht."
---

# Kapitel 11 - Ordnung im Chaos

Dieses Kapitel verknüpft auf faszinierende Weise Alltagsbeobachtungen mit grundlegenden informatischen Konzepten.
Es untersucht die Frage, ob Ordnung besser ist als Chaos – oder ob Chaos nicht auch eine Form von Ordnung sein kann, die lediglich verborgen ist.
Anhand praktischer Beispiele mit Karten, Zahlen und Hashfunktionen wird erklärt, wie Daten im Computerspeicher effizient organisiert, gefunden und verarbeitet werden.

## Notizen

### 🔍 Chaos vs Ordnung – Zwei Denkschulen

Ein Einstieg in die Thematik bietet das Bild zweier gegensätzlicher Büro-Philosophien: Der geordnete Schreibtisch versus das „kreative Chaos“.
Die Informatik steht als Brücke zwischen diesen Welten, denn sie zeigt, dass auch scheinbar chaotische Anordnungen (z. B. durch Hashing) hochgradig funktional sein können.
Einstein sah im Chaos einen Beweis für die Thermodynamik, während Freud die Psyche der Ordnungsliebhaber analysierte.

### 📑 Der Sinn des Sortierens

Zunächst wird der Unterschied zwischen **chaotischer** und **sortierter** Datenspeicherung erklärt.
Bei unsortierten Daten hilft nur die *sequentielle Suche* – jede Karte muss einzeln geprüft werden, was bei 16 Karten im Schnitt 8 Vergleiche braucht.
Bei sortierten Daten kann die *binäre Suche* eingesetzt werden – durch wiederholtes Halbieren des Suchbereichs reduziert sich der Aufwand drastisch ($log_2(n)$ Schritte).

### 🧩 Ordnung ist Ansichtssache – Kriterien machen den Unterschied

Anhand mehrerer Spalten mit denselben Zahlen zeigt der Text, wie unterschiedlich dieselben Daten geordnet erscheinen können – je nach verwendetem Sortierkriterium:

- **Gelbe Spalte**: Aufsteigende Ordnung der Zahlen selbst
- **Rote Spalte**: Aufsteigende Ordnung nach den letzten drei Ziffern
- **Blaue Spalte**: Ordnung nach doppelter Quersumme (Ziffern addieren, Ergebnis nochmals summieren)
- **Grüne Spalte**: Ordnung nach Divisionsrest `mod 11`

Die Lektion: Ordnung hängt vom gewählten Kriterium ab – für Computer kein Problem, für Menschen dagegen oft nicht intuitiv.

### 🧮 Hashing – Ordnung im scheinbaren Chaos

Hashing ist ein Verfahren zur schnellen Speicherung und Wiederauffindung von Daten.
Eine **Hashfunktion** berechnet aus einem Schlüssel (z. B. Nummer oder Wort) direkt die Speicherposition. Beispiel:

`h(s) = s mod 10`

Wenn eine Position belegt ist (Kollision), sucht man eine alternative – z. B. durch schrittweise Prüfung benachbarter Felder („lineare Sondierung“).

Beobachtung: **Hashing braucht Platz** – bei zu hohem Belegungsgrad steigen die Speicherzugriffe drastisch.
Ideal ist ein Belegungsgrad von 70–80 %.

### 🧠 Hashfunktionen optimieren

Hashfunktionen sollten:

- Möglichst gleichmäßige Verteilung erzielen
- Große Unterschiede im Schlüssel berücksichtigen
- Möglichst unabhängig vom Zahlensystem (z. B. dezimal) sein

Tipp: Division durch **Primzahlen** führt zu besseren Verteilungen.

Beispiel:

`h(s) = s mod 103`

führt zu gleichmäßigerer Speicherverteilung als z. B. `mod 10`.

### 💥 Kollisionsbehandlung

Kollisionen entstehen, wenn zwei Schlüssel auf denselben Speicherplatz zeigen. Strategien:

- **Lineares Sondieren**: Suche die nächste freie Stelle (`hi(s) = (h0(s) + i) mod m`)
- **Verkettung**: Verweise auf Listen an jedem Speicherplatz
- **Doppelte Hashung**: Verwendung mehrerer Hashfunktionen

Ziel: Alle Speicherplätze müssen erreichbar sein – sonst bleiben Bereiche ungenutzt.

### 🔐 Anwendungen des Hashings

Hashing wird genutzt für:

- Datenbanken (schneller Zugriff auf Einträge)
- Betriebssysteme (Speicherverwaltung)
- Echtzeitsysteme (z. B. Qualitätskontrolle auf Fließbändern)
- Wörterbücher, Spiele, Skatprogramme

Hashing bietet konstante Zugriffszeiten – bei gut gewählten Parametern.

### 🎲 Zufallszahlen – scheinbar chaotisch, aber berechnet

Computer erzeugen keine echten Zufallszahlen, sondern **Pseudozufallszahlen**, z. B. über:

- **Mid-Square-Generator**
- **Lineare Kongruenzgeneratoren** (z. B. `Z(i) = (Z(i-1)*21 + 17) mod 40`)

Diese Generatoren simulieren Zufall, aber wiederholen sich irgendwann.
Für echte Sicherheit (z. B. bei TANs oder Kryptographie) braucht es **physikalisch echte Zufallsquellen** (z. B. Quantenrauschen).

### 📈 Simulation von π – Zufall als Rechenhilfe

Zufallszahlen helfen auch bei der Schätzung mathematischer Größen wie π.
Im Experiment werden zufällig Punkte in einem Quadrat „geworfen“ – und gezählt, wie viele im Viertelkreis landen.
π ≈ (Anzahl Treffer / Gesamtzahl) × 4.
Diese Methode nennt sich **Monte-Carlo-Verfahren** und funktioniert auch für komplexe Probleme mit vielen Variablen (z. B. Karosserieoptimierung).

## Fazit und Ausblick

Ordnung ist in der Informatik unerlässlich für Effizienz und Zuverlässigkeit – aber was wie Chaos aussieht, kann ebenfalls Ordnung sein (z. B. durch Hashing oder Pseudozufall).
Informatik erlaubt es, diese scheinbar chaotischen Strukturen systematisch zu nutzen – oft sogar besser als traditionelle Sortierung.

## Fragen & Antworten

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
