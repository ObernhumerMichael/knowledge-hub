---
sidebar_position: 12
description: "Thematisiert Verschlüsselung und wie Informationen sicher übermittelt werden können."
---

# Kapitel 12 – Mit Sicherheit

Dieses Kapitel aus *Abenteuer Informatik* beleuchtet auf überaus praxisnahe Weise, wie Informationssicherheit in der digitalen Welt funktioniert.
Es führt von historischen Verschlüsselungsmethoden bis zu modernen asymmetrischen Verfahren und digitalen Zertifikaten – alles spielerisch, durch Bastelanleitungen und Rollenspiele erfahrbar gemacht.
Die Hauptfiguren Karl Kunde, Vera Verkäuferin, Zoe Zertifizierung und Spike Spitzbube helfen dabei, reale Probleme der IT-Sicherheit wie Schlüsselverteilung, Man-in-the-Middle-Angriffe, und Authentifizierung zu verstehen.

## Notizen

### 🛡️ Die Bedeutung von Sicherheit im digitalen Zeitalter

In der heutigen Zeit laufen Bankgeschäfte, Einkäufe und Kommunikation oft über das Internet.
Damit einher geht ein massives Bedürfnis nach Datenschutz, Datensicherheit und Schutz vor Missbrauch.
Besonders kritisch ist der Schutz vor Abhören (Vertraulichkeit), Manipulation (Integrität) und Identitätsfälschung (Authentizität).
Alte Szenarien wie Banküberfälle sind ersetzt durch digitale Angriffe – besonders auf Informationen, die heute als neue „Währung“ gelten.

### 📜 Ein historischer Einstieg in Kryptographie

Das Kapitel beginnt mit alten Verschlüsselungstechniken wie:

- **Skytale**: Ein Transpositionsverfahren aus Sparta, das Text durch spiralförmiges Aufwickeln chiffriert.
- **Cäsar-Code**: Ein Substitutionsverfahren, bei dem Buchstaben um eine feste Anzahl verschoben werden.

Beide Methoden sind didaktisch wertvoll, aber leicht zu brechen, etwa durch statistische Analyse oder simples Durchprobieren.

### 🧠 Cäsar-Codierscheibe und Codeknacken

Die Leser basteln eine Cäsar-Scheibe und lernen:

- Wie Nachrichten verschlüsselt und entschlüsselt werden.
- Wie man den Schlüssel durch Häufigkeitsvergleiche errät (Buchstabenstatistik).

Ein spielerisches Highlight ist das Codeknacker-Werkzeug, das auf Häufigkeitsanalyse basiert.
Dabei wird ein geheimer Text statistisch mit typischen Buchstabenhäufigkeiten in deutscher Sprache verglichen.

### 🔑 Symmetrische vs Asymmetrische Verschlüsselung

**Symmetrisch**: Der gleiche Schlüssel wird für beide Richtungen verwendet.
Beispiel: Der Cäsar-Code.

**Asymmetrisch**: Zwei unterschiedliche Schlüssel – ein öffentlicher zum Verschlüsseln, ein privater zum Entschlüsseln.
Vorteil: Keine vorherige Schlüsselübergabe notwendig.

Vorgestellt wird der **Diffie-Hellman-Schlüsseltausch**, ergänzt durch das populäre **RSA-Verfahren** von Rivest, Shamir und Adleman.

### 👥 Rollenspiel zur Schlüsselverteilung

Mit Comicfiguren wird gezeigt:

- Wie Karl seine Kreditkartendaten an Vera senden möchte.
- Wie Spike als Man-in-the-Middle-Angreifer Nachrichten manipulieren kann.

Erkenntnis: Selbst asymmetrische Verschlüsselung ist unsicher, wenn der öffentliche Schlüssel manipuliert wurde.
Deshalb braucht es eine Instanz, die den Schlüsselinhaber verifiziert.

### 🏛️ Die Rolle der Zertifizierungsstelle

Zoe Zertifizierung übernimmt die Rolle einer „Certificate Authority (CA)“.
Sie:

- Prüft die Identität (z. B.
über Ausweis).
- Verteilt den öffentlichen Schlüssel der geprüften Person.
- Signiert Schlüssel mit ihrer Autorität.

Der Clou: Zoe muss ihren eigenen öffentlichen Schlüssel vorher vertrauenswürdig weitergegeben haben (wie es Browserhersteller tun).

### 🧪 Angriff und Verteidigung im Schlüsselspiel

Spike gelingt es, Karl einen falschen öffentlichen Schlüssel unterzujubeln.
Karl verschlüsselt mit Spikes Schlüssel – ein riesiges Sicherheitsproblem.
Gelöst wird es durch die zusätzliche **Signierung mit Besitzername**, die Zoe anfügt: z. B.
„Vera → Schlüssel: CEF“.

Diese einfache Information verhindert das Hereinlegen, da Karl den Zusammenhang prüfen kann.

### 📡 Authentifizierung durch digitale Signaturen

Authentizität bedeutet: Nur der Besitzer eines privaten Schlüssels kann eine Nachricht signieren, die mit dem passenden öffentlichen Schlüssel überprüfbar ist.
Vera signiert also ihre Antwort – Karl prüft mit Veras öffentlichem Schlüssel.
Falls ungültig: Die Nachricht ist gefälscht.

### 🔄 Hybride Verschlüsselung – das Beste aus beiden Welten

Asymmetrische Verschlüsselung ist sicher, aber langsam.
Deshalb wird sie nur am Anfang genutzt, um einen **symmetrischen Sitzungsschlüssel** (z. B.
Cäsar-Schlüssel „G“) zu übertragen.
Danach erfolgt die eigentliche Kommunikation schnell und effizient.

Beispiel: Karl erwürfelt „G“ und verschickt diesen verschlüsselt an Vera.
Danach nutzen beide „G“ für schnelle Kommunikation.

### 🧮 Moderne Verfahren und Schlüssellängen

Moderne Algorithmen wie **AES**, **DES**, **RC4** oder **Elliptic Curve Cryptography (ECC)** bieten praktikable Sicherheit – wenn der Schlüssel lang genug ist:

| RC4 (symm.) | RSA (asymm.) | Sicherheit vergleichbar |
| -------- | ------------ | ----------------------- |
| 80 Bit      | 1120 Bit     | Mittel                  |
| 128 Bit     | 3248 Bit     | Stark                   |
| 160 Bit     | 5312 Bit     | Sehr stark              |

Eine Verdopplung der Schlüssellänge verdoppelt nicht nur die Sicherheit – sie potenziert sie exponentiell.

## Fragen & Antworten

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
