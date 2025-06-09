---
sidebar_position: 15
description: "Geht der Frage nach, was Computer überhaupt leisten können - und wo ihre Grenzen liegen."
---

# Kapitel 15 - Allmächtiger Computer!?

Dieses Kapitel zeigt, dass Computer keineswegs allmächtig sind.
Anhand des spielerischen „Affenpuzzles“ und des Fliesenlegerproblems führt es tief in die theoretische Informatik ein - insbesondere in die Themen *algorithmische Komplexität*, *Unentscheidbarkeit* und das berühmte *Halteproblem* von Alan Turing.
Hier die ausführliche Analyse in mehreren thematischen Abschnitten:

## Notizen

### 🧩 Puzzle & Problem: Der Einstieg ins Kapitel

Das Kapitel beginnt mit einem simplen Spiel: dem „Affenpuzzle“.
Ziel ist es, ein Quadrat aus farblich passenden Teilen zu legen.
Was einfach beginnt (2×2), eskaliert rasch: Bei einem 3×3-Puzzle steigen die Möglichkeiten und benötigte Zeit drastisch.

Beispielrechnung:

- 2×2 (4 Teile): **< 1 Sekunde** Lösungszeit
- 3×3 (9 Teile): **107 Milliarden Kartenbewegungen**, \~14s für 7,4 Milliarden Menschen
- 4×4 (16 Teile): **44,9 Trillionen Kombinationen**, \~770.000 Jahre für Menschen

Warum ist das so? Das Puzzle erfordert das Durchprobieren aller Kombinationen von Teilen ($n!$), jedes in 4 möglichen Ausrichtungen -> ergibt $ n! \cdot 4^n $ Varianten.

💡 **Erkenntnis**: Viele Probleme skalieren nicht linear - eine kleine Erhöhung in den Parametern macht sie praktisch unlösbar.

### ⚙️ Branch and Bound - Der clevere Versuch

Um nicht „bruteforce“ alles durchzuprobieren, wird „Branch and Bound“ vorgestellt:

- „Branch“: strukturiertes Ausprobieren über Teilbäume
- „Bound“: frühzeitiges Abbrechen, wenn erkennbar ist, dass ein Teil nicht passt

Beispiel: Beim 4×4-Puzzle kann man durch Regeln (z. B.
nur 1/8 der Teile passen auf eine bestimmte Position) viele Kombinationen direkt ausschließen.

Vorteil: Statt Milliarden Kartenbewegungen nur Tausende -> rechnerisch wieder lösbar.
Grenze: Ab 7×7 stoßen auch Supercomputer an ihre Grenzen.

### 🧱 Das Fliesenleger-Problem: Von praktisch zu unentscheidbar

Das Kapitel stellt nun das „Problem des Fliesenlegers“ vor:

- Drei Fliesensets: blau (lösbar), rosa (nicht lösbar), mit Schildkröten (entscheidbar?).
- Ziel: Kann man damit *beliebig große Flächen* kacheln?

Die Erkenntnis:

- **Rosa Serie**: Fester Beweis für Unlösbarkeit -> struktureller Widerspruch in den Kombinationsmöglichkeiten.
- **Schildkröten-Serie**: Kein Widerspruch, aber auch kein Beweis für Lösbarkeit.
Man kann ewig puzzeln, ohne Ergebnis.

💡 Das Problem wird zum Beispiel für das „Domino-Problem“ - ein bekanntes, *nicht entscheidbares* Problem der Informatik.

### 🛑 Das Halteproblem: Der große Beweis der Unentscheidbarkeit

Das Herzstück des Kapitels: das **Halteproblem**.
Es fragt: „Kann man vorhersagen, ob ein beliebiges Programm jemals anhält?“

Gedankenspiel:

```pseudo
PROGRAMM C
Zeile 10: FALLS HÄLTS? (PROGRAMM C) = JA GEHE ZU Zeile 10
Zeile 20: ENDE
```

1. HÄLTS?(P) = Programm, das für beliebiges P entscheidet, ob es terminiert
2. Programm C ruft HÄLTS?(C) auf:
    - Wenn HÄLTS?(C) = JA -> Endlosschleife
    - Wenn HÄLTS?(C) = NEIN -> Programm terminiert

Ergebnis: Beide Annahmen führen zu Widersprüchen -> **HÄLTS? kann nicht existieren**.

Alan Turing bewies dies formal mit seinem Modell der **Turingmaschine**.

### 🧠 Warum das alles wichtig ist

Diese Beispiele illustrieren:

- **Komplexitätsgrenzen**: Man kann nicht beliebig skalieren.
- **Nichtentscheidbarkeit**: Es gibt Probleme, die *kein* Algorithmus entscheiden kann.
- **Mensch bleibt wichtig**: Computer stoßen an Grenzen; Kreativität, Intuition und Mathematik des Menschen bleiben notwendig.

### 🚧 Anwendungen & Ausblick

- In Softwareentwicklung und Sicherheit (z. B. in der Luftfahrt) muss geprüft werden, ob Programme zuverlässig funktionieren.
- Da der Computer Endlosschleifen nicht sicher erkennt, kann die *Validierung* nicht vollautomatisch sein.
- Lösung: **Teilautomatische Beweiser** - der Mensch übernimmt die kreativen Schritte, der Computer rechnet streng und exakt.

### 📊 Zahlen & Vergleiche (Puzzlekomplexität)

| Puzzlegröße | Kartenbewegungen (brute-force) | Menschenzeit (bei $1/s$) | Computerzeit (bei $10 \cdot 8/s$) |
| ----------- | ------------------------------ | ------------------------ | --------------------------------- |
| 2×2         | 3.072                          | < 1 Sekunde              | < 1 Jahr                          |
| 3×3         | 107 Mrd                        | 14 Sekunden              | < 1 Sekunde                       |
| 4×4         | 4,5 Trillionen                 | 770.143 Jahre            | 6,5 Tage                          |
| 5×5         | 5,5 × $10^{46}$                 | 16 Billionen Universen   | 392.000 Universen                 |

Selbst mit „Branch and Bound“:

- 4×4 lösbar in 1 Sekunde
- 5×5 lösbar in 1 Sekunde
- 6×6 braucht 7 Tage (Menschen)
- 7×7 unlösbar (auch für Computer)

## Fragen und Antworten

1. Sind Computer allmächtig, wenn man sie nur richtig programmiert?
    - Nein. Es gibt Probleme, die Computer entweder gar nicht oder nur mit unrealistisch hohem Aufwand lösen können - unabhängig vom Programm.
1. Warum sind einige Probleme wie das Affenpuzzle nicht praktisch lösbar?
    - Weil die Anzahl möglicher Kombinationen so stark wächst, dass selbst mit allen Computern der Welt die Lösung unendlich lange dauern würde.
1. Was ist „Branch and Bound“?
    - Eine Technik, bei der man während des Ausprobierens frühzeitig falsche Lösungswege erkennt und verwirft, um Rechenaufwand zu sparen.
1. Kann ein Computer die Frage ob man mit bestimmten Puzzleteilen (Kacheln) prinzipiell beliebig große Flächen auslegen kann, immer zuverlässig beantworten?
    - Nein. Dieses sogenannte Domino-Problem ist **nicht entscheidbar**, d. h. es gibt Instanzen, für die kein Computer je eine „JA“ oder „NEIN“-Antwort geben kann.
1. Was ist das Halteproblem?
    - Die Frage, ob ein beliebiges Computerprogramm bei jeder Eingabe irgendwann anhält oder in einer Endlosschleife festhängt.
1. Kann ein Computer das Halteproblem lösen?
    - Nein. Es wurde bewiesen, dass kein Programm existieren kann, das für **alle** anderen Programme korrekt entscheidet, ob sie terminieren oder nicht.
1. Was zeigt das Beispiel von „PROGRAMM C“ im Text?
    - Dass die Annahme eines universellen „HÄLTS?“-Programms zu einem logischen Widerspruch führt - es kann also nicht existieren.

## TL;DR

1. **Nicht alles ist programmierbar**
2. **Algorithmen haben Grenzen**
3. **Clevere Heuristiken helfen - aber nur begrenzt**
4. **Unentscheidbare Probleme sind real - und relevant**
5. **Menschliche Intuition ist (noch) unersetzlich**
