---
sidebar_position: 2
description: "Es geht um Sortierverfahren und warum Ordnung in Daten wichtig ist."
---

# Kapitel 2 - Ordnung muss sein

## Das Sortierproblem und seine Problemgröße

- **Problemstellung**: Man verfügt über eine unsortierte Folge von Objekten (z. B. Spielkarten mit Zahlen oder Buchstaben) und möchte sie in eine geordnete Folge überführen.
- **Problemgröße**: Die wichtigste Kennzahl ist die **Anzahl der zu sortierenden Elemente** (n).
Oft bleiben die einzelnen Schlüsselwerte (z. B. Länge einer Zahl) konstant, daher spielt maßgeblich die Objektanzahl eine Rolle.

### Experimentelle Illustration

- Sortiert man verschiedene Stapel (20, 40, 60 …) von (Pappen-)Karten von Hand, stellt man typischerweise fest:
  - Mit wachsendem n steigt die benötigte Zeit überproportional.
Wäre der Aufwand linear, würde z. B. 40 Karten genau doppelt so lange dauern wie 20, 60 Karten dreimal so lange etc.
Tatsächlich beobachten die meisten jedoch, dass 40 Karten eher 2–3-mal so lange dauern, 60 Karten schon 4–5-mal usw.
  - Dieser Effekt lässt sich darauf zurückführen, dass Menschen beim Kartenaus­legen nicht „ehrlich linear“ vorgehen, sondern bereits bei einer größeren Menge von vornherein immer mehr Vergleiche/Verschiebungen anstellen.
Das lässt sich auf die in der Informatik typische Methode „divide et impera“ („Teile und herrsche“) zurückführen: Man zerlegt das Gesamtproblem in Teilprobleme, die man einzeln löst, und fasst die Teillösungen wieder zusammen.

## Konkrete (manuelle) Sortierverfahren

### Selection-Sort (“Sortieren durch Auswahl”)

- **Grundidee**: Finde in der unsortierten Liste jeweils das (bisher) kleinste (oder größte) Element und tausche es an die vorderste (bzw. hinterste) Position.
    Dann betrachte nur noch den Rest (n–1 Elemente), wiederhole das Ganze.
- **Pseudocode (vereinfacht)**
  1. Markiere „Anfang“ (erste unsortierte Position) und „Bestes“ (ebenfalls am Anfang).
  2. Scanne mit einem „Speicherzeiger“ durch alle verbleibenden Elemente.
    Immer wenn du ein kleineres Element findest, verschiebe „Bestes“ dorthin.
  3. Wenn der Speicherzeiger am Ende angekommen ist, tausche das unter „Bestes“ mit dem unter „Anfang“.
  4. Inkrementiere „Anfang“ um eine Position nach rechts.
    Solange „Anfang“ ≠ „Ende“ ist, wiederhole Punkt 1–3.
- **Elementaroperationen**:
  - **Vergleich** zweier Karten (1 Operation)
  - **Tausch** zweier Karten (in einem Computer‐Modell in der Regel 3 Einzelschreib‐/Leseoperationen)
- **Komplexität**: Man braucht für jedes der n Elemente einmal eine vollständige Durchsuchung des noch unsortierten Rest‐Arrays ⇒ ca. n Durchläufe und durchschnittlich (n/2) Vergleiche/Tausche ⇒ **O(n²)**.

### Bubblesort (“Blubberblasen‐Sortieren”)

- **Grundidee**: „Gehe wiederholt die Liste von vorne nach hinten durch.
Vergleiche stets benachbarte Paare.
Wenn das linke Element größer ist als das rechte, tausche sie.
Wiederhole diesen Komplettdurchgang so oft, bis in einem Durchlauf keine Vertauschung mehr stattfindet.“
- Nach jedem Durchlauf ist das jeweils **größte** Element ganz am rechten Ende „aufgestiegen“ (wie eine Blubberblase).
- **Pseudocode (vereinfacht)**
  1. Solange noch mehr als ein Element unsortiert übrig ist (z. B. mittels zweier Zeiger „Anfang“ und „Ende“ markiert), führe einmal „Durchlauf“ aus:
     a. Setze einen „Speicherzeiger“ ans erste Element der unsortierten Region.
     b. Für alle Paare (aktueller Zeiger, nächstes Element): Vergleiche, tausche ggfs.
     c. Verringere danach die unsortierte Region von rechts (weil das größte Element am rechten Ende steht).
  2. Wiederhole, bis nur noch ein Element übrig ist (ist automatisch sortiert).
- **Komplexität**: Ebenfalls etwa n vollständige Durchgänge mit jeweils bis zu (n – 1), (n – 2), … Vergleichen/Tauschen ⇒ **O(n²)**.

## Analyse: Aufwand vs. Problemgröße

- Beide eingangs betrachteten Algorithmen (Selection‐ und Bubblesort) sind **quadratisch** in n:

  $$
    T_{\mathrm{Selection}}\,(n)\;=\;c_1\,n^2 + \dots,\quad
    T_{\mathrm{Bubble}}\,(n)\;=\;c_2\,n^2 + \dots
  $$

  Man spricht kurz von Laufzeit­komplexität **O(n²)** (sprich: „groß‐Oh von n-Quadrat“).
- **Wichtige Erkenntnis**:
  1. Konstanten („c₁“, „c₂“) hängen stark von der konkreten Implementierung ab (z. B. Hardware‐Optimierungen, in‐place‐Tauschen vs. Hilfsspeicher, Ordnung der Daten).
  2. Wenn n sehr groß ist, dominieren in der Regel diese $n^2$-Terme, und der **Faktor** verliert an Bedeutung.
Deshalb genügt in der Komplexitätsabschätzung, nur das höchste Polynom bzw.
die dominierenden Terme anzugeben (Zerlegen in „Ordnungsklassen“).
  3. In der Praxis heißt das: Wenn man von n = 1 000 000 Karten ausgeht, ist ein O(n²)-Verfahren praktisch unbrauchbar, weil 10^6² = 10^12 Vergleiche/Tausche inakzeptabel sind.
Schon für 10 000 Karten ist O(n²) deutlich spürbar (≈10^8 Schritte).

## Besser als „n²“: O(n log n) – Tournament‐ und Quicksort

### Tournament-Sort (K.-o.-System)

- **Grundidee**:
  1. Lege alle n Karten in **n “Teilnehmerplätze”** der untersten Ebene einer “Turniertabelle” (n Felder).
  2. Führe paarweise Vergleichs‐“Spiele” durch, jeweils das größere Element „gewinnt“ und rückt in die nächsthöhere Ebene auf. (Wenn eine Ebene ungerade Anzahl hat, lässt man das letzte Element automatisch aufsteigen.)
  3. In der obersten Ebene bleibt genau ein „Sieger“: die größte Karte insgesamt.
  4. Übernehme diesen „Sieger“ in das **Ende** der sortierten Liste.
  5. In der Turniertabelle wird dieser Siegerplatz frei.
Fülle ihn, indem du nach oben expandierende Nachrück‐Vergleiche durchführst: Für jeden frei gewordenen Platz wiederhole den „Vorsprung‐Vogel‐Vergleich“ aus der nächsten Ebene darunter.
  6. Auf diese Weise findest du das **nächstgrößte** Element (das “Vize”) in log₂ n Schritten, denn jede Ebene erfordert genau einen Vergleich.
  7. Schiebe es wieder ans Ende der sortierten Liste, und fülle erneut den freigewordenen Platz mit log₂ n Vergleichen auf.
  8. Wiederhole alles so oft, bis keine Karten mehr übrig sind.
- **Parameter**:
  - Die **Höhe** der Turniertabelle ist $\lceil \log_2(n)\rceil$, denn jede Ebene halbiert (ungefähr) die Teilnehmerzahl, bis nur noch 1 Element übrig bleibt.
  - Pro einmaligem „Sieger ermitteln + in sortierte Liste verschieben“ fallen höchstens **log₂ n Vergleiche** (um in der Tabelle nach oben zu wandern) plus log₂ n Vergleiche (um beim Nachrücken nach oben den „freien Platz“ wieder aufzufüllen) an ⇒ pro ausgewähltem Sieger etwa $2\,\log_2(n)$.
  - Da wir diesen Schritt **n-mal** (einmal für jede Karte, beginnend mit der größten, zweitgrößten …) durchführen, ergibt sich insgesamt **ca. n ⋅ log₂ n** Vergleichsvorgänge.
- **Komplexität**: Kurz gefasst $T(n)=\mathcal{O}(n\,\log n)$. Selbstverständlich fallen noch ein paar Verschiebe‐ bzw. Lese‐/Schreiboperationen an, doch konstante Faktoren vernachlässigt man hier.

![tournament-sort](/books/abenteuer-informatik/chapter-2/tournament-sort.png)

### Quicksort (Tony Hoare, 1960)

:::note

Nicht wirklich relevant für den Aufnahmetest.

:::

- **Idee (vereinfacht)**:
  1. Wähle ein „Pivot“-Element aus der Liste (z. B. das erste, ein zufälliges oder das Median‐Drittel).
  2. Partitioniere die Liste in zwei Teilmengen:
     - links alle Karten ≤ Pivot,
     - rechts alle Karten > Pivot.
       (Jedes Element wird während dieser Partition in genau 1 Vergleich dem Pivot gegenübergestellt.)
  3. Wende Quicksort **rekursiv** auf die linke und rechte Teilmenge an.
- **Analyse**:
  - Im **Durchschnitt** (bei zufällig guter Wahl des Pivots) wird jede Partition in etwa n – 1 Vergleichen durchgeführt, und man teilt dann die Menge etwa halbiert für den nächsten Rekursionsschritt.
  - Daraus folgt: $\displaystyle T(n)=T\bigl(k\bigr)\,+\,T\bigl(n-1-k\bigr)\,+\,n$, wobei $k$ ungefähr $n/2$ ist.
Man erhält dadurch den Durchschnittsfall $T(n)\approx 2\,T(n/2)+n$, woraus sich gegen Ende eine Gesamtaufwandsabschätzung $T(n)=\mathcal{O}(n\,\log n)$ ergibt (ähnlich wie beim Merge‐Sort).
  - **Worst Case**: Wählt man stets das schlechteste Pivot (z. B. das größte oder kleinste Element), bekommt man die schiefe Partition $T(n)=T(n-1)+T(0)+n\approx \mathcal{O}(n^2)$.
Deshalb nutzt man in der Praxis in der Regel eine **zufällige Pivot‐Wahl** oder einen Mittelwert aus mehreren Kandidaten (Median‐Drittel), um den Worst‐Case‐Wahrscheinlichkeiten vorzubeugen.
- **Vorteile**:
  - Sehr gute **Durchschnittslaufzeit O(n log n)**
  - Meist in-place realisierbar (d. h. keine großen zusätzlichen Extra‐Speicherbereiche)
  - Sehr gute Constant‐Factors in realen Programmen (meist schneller als MergeSort und HeapSort)

## Noch besser: O(n) – Proxmap-Sort

- **Motivation**: Sämtliche oben genannten Verfahren (Selection, Bubble, Tournament, Quicksort, Heapsort, MergeSort etc.) sind maximal $ \mathcal{O}(n \log n)$, wenn man nur **Paarvergleiche** erlaubt.
Es gibt einen theoretischen Beweis, dass **vergleichsbasiertes Sortieren** nicht besser als $\mathcal{O}(n\log n)$ laufen kann.
- **Proxmap-Sort (oder „Binsort“, „Bucket Sort“, „Radix Sort“, je nach Variante)** nutzt jedoch, dass die Schlüsselwerte (z. B. Zahlen von 0 bis 999 999 bzw. Buchstaben, Wörter o. Ä.) **direkt** in geeignete „Kategorien“ (Buckets/Proxmaps) abgebildet werden können, ohne sie jedes Mal miteinander vergleichen zu müssen.
- **Grundprinzip**:
  1. Definiere zu jedem Schlüssel eine Funktion $h(\text{Schlüssel})\mapsto \text{Bucket‐Index}$, die direkt angibt, in welchen Teilbereich der endgültigen sortierten Folge dieses Element gehört.
     - Beispiel (Gleichverteilung): Ein Zahlenschlüssel zwischen  0 und 999 999 könnte z. B. durch die ersten drei Stellen in eine Zahl von  0 – 999 abgebildet werden. Dann hat man 1000 „Buckets“.
     - **Wunsch**: Jeder Bucket sollte im Idealfall nur sehr wenige Elemente enthalten (am besten 0 oder 1).
  2. **Initiiere** für jeden Bucket eine (leere) Hilfsliste (oder – im Papierspeicher‐Experiment – eine entsprechende Region von Kartenplätzen).
  3. **Durchlaufe alle n Elemente** und lege jedes direkt in den dafür bestimmten Bucket (z. B. an das Ende einer verketteten Liste oder in ein offenes Feld).
Das kostet **genau 1 Hash/Tendelung‐Operation** plus 1 Schreibvorgang ⇒ insgesamt **n Operationen**, wenn die Bucket‐Adressierung in konstanter Zeit erfolgt (z. B. direktes Indexieren).
  4. **Innerhalb jedes Buckets** befinden sich jetzt nur noch sehr wenig Elemente (im besten Fall höchstens 1).
Um eine finale sortierte Liste zu erhalten, muss man nur noch die Buckets in aufsteigender Reihenfolge durchlaufen und ggf.
die sehr kleinen Bündel (von der Bucketzurnahme bis zum Bucketrücklauf) miteinander vergleichen bzw. sortieren (z. B. mit InsertionSort, da dort die Teilmenge nur < 10 oder ähnlich groß ist).
  5. Da die einzelnen Buckets im Idealfall konstant viele Elemente enthalten (z. B. ≤ 2 … 5 Objekte), ist das Sortieren innerhalb jedes Buckets eine $\mathcal{O}(1)$-Operation pro Bucket.
Und insgesamt gibt es nur **so viele Buckets, wie man sie im Voraus definiert hat** (häufig $ \approx n$ oder ein kleines Vielfaches davon).
- **Gesamtlaufzeit** (bei gut verteilten Daten):
  1. **n** Schritte, um jedes Element einmal einem Bucket zuzuweisen.
  2. Dann für jeden der $m$ Buckets, die im Schnitt nur $\mathcal{O}(1)$ Elemente enthalten, ein paar Vergleiche ⇒ $\mathcal{O}(m)$.
Wenn man z. B. $m=\mathcal{O}(n)$ Buckets einrichtet und auf gleichmäßige Verteilung hofft, ist dieser Schritt $\mathcal{O}(n)$.
  3. Letztendlich also **$\mathcal{O}(n) + \mathcal{O}(n) = \mathcal{O}(n)$**.
- **Risiken/Kollisionen**:
  - Wenn die Schlüssel nicht **gleichmäßig** auf die Buckets verteilt sind (z. B. normale/Gauß’sche Verteilung von Zahlen oder häufige Anfangsbuchstaben in Texten), dann häufen sich viele Elemente in wenigen Buckets ⇒ dort steigt der Aufwand plötzlich auf $\mathcal{O}(k_i^2)$, wenn sich $k_i$ Elemente in Bucket *i* befinden und man z. B. dort SelectionSort anwendet.
  - Genau deshalb testet man experimentell, ob die Verteilung der Daten zur Bucket‐Strategie passt, und wählt ggf. eine **Zweiphasen‐Lösung**:
    1. Eine Hash‐/Proxmap‐Funktion, die abhängig von der Daten‐Verteilung (z. B. erste drei Ziffern, Anfangsbuchstabe, erste 2 Zeichen, je nach Anwendungsfall) möglichst gleichmäßige Buckets erzeugt.
    2. Innerhalb jedes Buckets ein **kleines** Sortierverfahren ($\mathcal{O}(k \log k)$ oder $\mathcal{O}(k²)$, aber mit $k \ll n$).
  - Ist die Bucketzahl hingegen sehr groß (etwa $\approx n$ oder mehr), und die Buckets bleiben trotzdem sehr klein (am besten ⩽ 1 Element pro Bucket), so ergibt sich in der Praxis eine **sehr schnelle** (fast lineare) Sortierroutine, die insbesondere bei riesigen Datenmengen vielfach den Overhead großer Vergleichs‐Algorithmen (Quicksort, MergeSort) schlägt.

![proxmap-sort](/books/abenteuer-informatik/chapter-2/proxmap-sort.png)

## Zusammenfassung der Komplexitätsklassen

1. **O(1)**  – Konstante Zeit: Zugriff auf ein Array‐/Feld‐Element, Lese‐/Schreiboperation an einer bekannten Stelle.
2. **O(log n)**  – Logarithmische Zeit: z. B. binäre Suche in einer bereits sortierten Liste (man halbiert die Problemgröße in jedem Schritt).
3. **O(n)**  – Lineare Zeit: Einfaches Durchzählen aller Elemente, oder aber (bei gleichmäßig verteilten Schlüsseln) Bucketsort/Proxmapsort mit konstant kleinen Teilmengen.
4. **O(n log n)**  – Typische Komplexität der besten vergleichsbasierten Sortierverfahren (Quicksort, Mergesort, Heapsort, Tournament‐Sort).
5. **O(n²)**  – Einfache Sortierverfahren wie SelectionSort, Bubblesort, Insertionsort (im ungünstigsten Fall).
6. **O(n³)** (und mehr)  – Algorithmen, deren Aufwand sogar im Kubik‐(bzw. höher‐)Bereich liegt.
Für Sortieren nicht relevant, hier nur als Beispiel für teure Algorithmen.

## Praxis‐Tipps und Fazit

- Bei kleineren Datenmengen (z. B. n < 1000) sind **SelectionSort** oder **InsertionSort** oft ausreichend und in der Implementierung sehr einfach.
- Für **mittlere bis große** Datenmengen (n > 10 000) sollten auf jeden Fall Sortieralgorithmen mit **O(n log n)** zum Einsatz kommen (Quicksort, Mergesort, Heapsort oder Tournament‐Sort). Moderne Standard‐Bibliotheken verwenden meist Hybrid‐Varianten (z. B. Introsort), die Quicksort mit Heapsort/Mergesort koppeln, um sowohl im Durchschnitt als auch im Worst Case $O(n \log n)$ zu garantieren.
- **Bucket‐/Radix‐Sort** (bzw. ProxmapSort) kann bei **passender Schlüsselverteilung** sogar in **O(n)** sortieren.
Das ist meist dann sinnvoll, wenn man frühzeitig feststellt, dass die Daten auf natürliche Weise in gleichmäßig verteilte Buckets fallen (z. B. 32-Bit‐Ganzzahlen, die numerisch schon im Vorfeld in bestimmte Bereiche fallen).
- **Konstante Faktoren** (z. B. 2 ⋅ n log₂ n vs. 0,5 ⋅ n log₂ n) sind zwar im Detail wichtig, aber beim Vergleichen von Algorithmen steht die **Wachstumsrate** im Vordergrund (daher *nur* O(…)‐Notation).
- **Experimentelles Benchmarking** ist hilfreich, um für die **eigene** Hardware & Datensätze die besten Verfahren und Parametrisierungen (z. B. Pivot‐Wahl bei Quicksort, Anzahl der Buckets) zu finden.

### Schlussbemerkung

In diesem Kapitel haben wir gesehen, wie man das banale Alltagsproblem „Karten sortieren“ zu einer **didaktischen Reise durch die wichtigsten Sortieralgorithmen und Komplexitätsklassen** macht.
Von O(n²) (Selection‐, Bubble-Sort) über O(n log n) (Tournament, Quicksort) bis hin zu **O(n)** (Proxmap/Bucketsort) – stets begleitet von der Frage:

> **„Wie skaliert der Aufwand, wenn man (nur) die Zahl der zu sortierenden Objekte erhöht?“**

Genau diese Denkweise („Problemgröße vs. Aufwand“) ist der Kern aller algorithmischen Überlegungen in der Informatik.
Sobald man verstanden hat, wie man eine Prozedur in Elementaroperationen zerlegt und abschätzt, welche Terme dominieren, ist man in der Lage, auch komplexere Aufgaben (z. B. Graphenalgorithmen, Datenbankindizierung, numerische Verfahren u. v. m.) gezielt zu optimieren.

## Fragen & Antworten

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
