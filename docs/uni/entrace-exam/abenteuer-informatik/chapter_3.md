---
sidebar_position: 3
description: "Behandelt das Packproblem und zeigt, wie Computer bei optimaler Ressourcennutzung helfen."
---

# Kapitel 3 - Ich packe meinen Koffer

## Einleitung: Das Schatzkisten-Rätsel

Ein einfacher Mann rettet eine Prinzessin und darf zur Belohnung so viele Schätze aus der königlichen Schatzkammer nehmen, wie in eine Kiste passen – mit geschlossenem Deckel. Das stellt sich als klassisches **Rucksackproblem** heraus.

## Das Rucksackproblem

### Problemstellung

- Nur eine begrenzte Menge Platz (Kiste)
- Unterschiedlich große und wertvolle Gegenstände
- Ziel: Maximierung des Wertes bei begrenztem Platz

### Vereinfachung

- Jeder Schatz hat:
  - **eine Größe** (in Feldern)
  - **einen Wert** (in Dublonen)
- Triviale Fälle (z. B. gleicher Platz, unterschiedlicher Wert) wurden entfernt

## Erste Lösungsversuche

### Brute-Force

- Alle Kombinationen werden ausprobiert
- Exponentiell wachsender Aufwand mit zunehmender Kistengröße

### Erkenntnis

- Mehr Möglichkeiten = mehr Rechenzeit
- Bedarf an intelligenterer Strategie

## Divide et impera – Zerlege das Problem

### Problemgröße identifizieren

- Größe der Kiste
- Anzahl unterschiedlicher Gegenstände

### Vorgehen

- Beginne mit kleinen Kisten oder wenigen Objekten
- Arbeite dich schrittweise hoch
- Kombiniere kleinere Lösungen zu größeren

## Dynamische Programmierung

### Idee: „Mehr ist weniger“

- Statt gezielt eine Lösung zu finden → **alle Teillösungen berechnen**
- Verwende diese zur **schrittweisen Verbesserung**

### Vorgehensweise

- Maxikiste mit allen Kistengrößen (0 bis 13)
- Beginne mit dem kleinsten Schatz
- Fülle jede Kiste optimal mit diesem Schatz
- Füge nach und nach größere Schätze hinzu

### Beispielprozess

1. Edelsteine → 42 Dublonen bei voller Kiste
2. Ringe → Verbesserung auf 59 Dublonen

## Der Algorithmus

```pseudo
Für jeden Schatz ab dem zweitkleinsten:
  Für jede Kiste A (von klein nach groß):
    Bestimme Kiste B = Größe A + Größe des Schatzes
    Wenn (Wert von A + Schatz) > Wert von B:
      Setze Inhalt von B = Inhalt A + Schatz
```

![algorithmus](/books/abenteuer-informatik/chapter-3/algorithmus.png)

### Bottom-up vs. Top-down

- **Bottom-up**: Kleine Probleme zuerst lösen → auf größere aufbauen
- **Top-down**: Große Probleme aufteilen

## Mathematischer Hintergrund

### Ziel

Beweise folgende Aussage (auch bekannt als die Formel der arithmetischen Summe):

$$
1 + 2 + 3 + \dots + n = \frac{n \cdot (n + 1)}{2}
$$

### Was ist vollständige Induktion?

Die vollständige Induktion ist ein Beweisverfahren für Aussagen, die für **alle natürlichen Zahlen ab einem bestimmten Wert** gelten sollen.
Es besteht aus **zwei Schritten**:

1. **Induktionsanfang**: Zeige, dass die Aussage für den Startwert $n = a$ gilt.
2. **Induktionsschritt**: Zeige, dass aus der Gültigkeit für $n - 1$ (oder $n$) die Gültigkeit für $n$ (oder $n + 1$) folgt.

### Schritt-für-Schritt-Beweis

#### **1. Induktionsanfang**

Wir starten mit $n = 1$ und prüfen die Aussage:

$$
1 = \frac{1 \cdot (1 + 1)}{2} = \frac{2}{2} = 1
$$

:white_check_mark: Stimmt – der Induktionsanfang ist **bewiesen**.

#### **2. Induktionsvoraussetzung (IV)**

Wir **nehmen an**, dass die Aussage für eine beliebige natürliche Zahl $n - 1$ (hier also $n-1$) **bereits gilt**:

$$

1 + 2 + 3 + \dots + (n - 1) = \frac{(n - 1) \cdot n}{2}

$$

Diese Annahme nennen wir die **Induktionsvoraussetzung**.

:::note

Die Variable $n$ wird durch $( n - 1 )$ ersetzt.

:::

#### **3. Induktionsschritt (IS)**

Wir müssen zeigen, dass die Aussage dann **auch für $n$** gilt:

$$
1 + 2 + 3 + \dots + (n - 1) + n = \frac{n \cdot (n + 1)}{2}
$$

Verwende die IV für den ersten Teil der linken Seite:

$$
\left( \frac{(n - 1) \cdot n}{2} \right) + n
$$

Jetzt bringe $n$ auf denselben Nenner (also auf $\frac{2}{2}$):

$$
\frac{(n - 1) \cdot n}{2} + \frac{2n}{2} = \frac{(n - 1)n + 2n}{2}
$$

Multipliziere aus und fasse zusammen:

$$
\frac{n^2 - n + 2n}{2} = \frac{n^2 + n}{2} = \frac{n(n + 1)}{2}
$$

:white_check_mark: Genau das wollten wir zeigen. Der **Induktionsschritt** ist **bewiesen**.

#### **4. Schlussfolgerung**

- Die Aussage ist **für $n = 1$** richtig (**Induktionsanfang**).
- **Wenn** sie für $n - 1$ gilt, **dann** gilt sie auch für $n$ (**Induktionsschritt**).

**Daher gilt die Aussage für alle $n \in \mathbb{N}$ mit $n \geq 1$**.

### Zusammenfassung in Stichpunkten

1. **Aussage aufstellen** (was soll bewiesen werden?).
2. **Induktionsanfang**: Zeige die Aussage für den kleinsten Fall (meist $n = 1$).
3. **Induktionsvoraussetzung**: Nimm an, dass die Aussage für ein beliebiges $n - 1$ gilt.
4. **Induktionsschritt**: Zeige, dass daraus die Gültigkeit für $n$ folgt.
5. **Schlussfolgerung**: Die Aussage gilt für alle $n \in \mathbb{N}$ mit $n \geq 1$.

### Anwendung auf Rucksackproblem

Auch hier gibt es quasi eine Verankerung (Induktionsanfang), bei der das Problem für eine kleine Problemgröße gelöst wird.
Im Laufe des Algorithmus leiten wir dann jeweils aus einer kleineren Lösung die nächstgrößere ab.  
Im Beispiel des Rucksackproblems bestand die Verankerung darin, das Problem für den Fall zu lösen, dass nur ein einziger Schatz zur Wahl steht: der kleinste.

Danach konstruierten wir aus der Problemlösung der Größe $n$ (eine optimal gefüllte Kiste der Größe $n$)
und dem nächsten Schatz der Größe $s$ die Problemlösung der Größe $n + s$ : Die Kiste der Größe $n + s$ wird optimal gefüllt, wenn man sie **entweder so lässt**,
wie sie ist, **oder** mit dem Inhalt der Kiste $n$ $+$ Schatz $s$ füllt - je nachdem, welche der Möglichkeiten wertvoller ist.

## Anwendungen in der Praxis

- **Logistik/Spedition:** Wie bestücke ich einen LKW (oder eine Flotte) so, dass der Gewinn maximiert und Leerraum minimiert wird?
- **Aufgabenverteilung:** Verteilung von Arbeitspaketen auf Mitarbeiter oder Prozessoren, um Auslastung und Fertigstellungszeit zu optimieren.
- **Weitere Gebiete:** Ressourcenallokation in Budgetierung, Containerstauung, Portfolio-Optimierung, etc.

## Grenzen: Das verflixte NP

- Ganzzahlige Bedingungen: Das beschriebene DP-Verfahren setzt voraus, dass:
  - Kisten- und Objektgrößen ganzzahlig sind (z. B. Kacheln in Quadraten).
  - Unbeschränkte Verfügbarkeit der jeweiligen Gegenstände pro Typ.
- Reale Komplexität: Im dreidimensionalen Fall mit realen Maßen, irrationalen Abmessungen oder begrenzter Stückzahl pro Schatztyp ist das Problem nicht mehr direkt polynomiell in Kapazität und Anzahl der Objekte lösbar.
- Das (allgemeine) Rucksackproblem gehört zur Klasse der NP-vollständigen Probleme.
  Für diese existieren (derzeit) keine Algorithmen, die in polynomieller Zeit in allen Parametern arbeiten.

## Fragen & Antworten

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

## Fazit

- **Brute Force** ist bei größeren Instanzen unpraktikabel, da die Anzahl der möglichen Kombinationen exponentiell wächst.
- **Dynamische Programmierung** (“bottom-up”) löst alle Teilprobleme (Kisten kleinerer Kapazität) und baut darauf auf, um das Gesamtproblem effizient in $O(C \cdot n)$ zu lösen (C = Kapazität, n = Anzahl der Objekte).
- Das Verfahren beruht konzeptionell auf der **vollständigen Induktion** und garantiert optimale Lösungen bei ganzzahligen Problemparametern.
- Kleine Änderungen in der Aufgabenstellung (z. B. begrenzte Objektanzahl, reelle Abmessungen) verschieben das Problem in die **NP-vollständige Klasse**, für die keine polynomiellen Algorithmen bekannt sind.
