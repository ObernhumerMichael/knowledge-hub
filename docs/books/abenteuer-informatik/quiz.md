---
sidebar_position: 16 
description: "This is a quiz I created based on the key concepts from the book."
---

# Quiz

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
