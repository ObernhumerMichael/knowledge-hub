---
sidebar_position: 9
description: "Erklärt, wie Datenpakete im Internet übertragen und wieder zusammengesetzt werden."
---

# Kapitel 9 - Paketpost

## Kurze Zusammenfassung

Das Kapitel erklärt anschaulich, wie Kommunikation im Internet funktioniert - durch **Paketvermittlung**, **adressierte Daten**, **Router** und das Prinzip **„divide et impera“**.
Anhand einer Hofküchen-Analogie wird gezeigt, wie Kommunikationsstrukturen durch Aufteilung in kleinere Einheiten effizienter werden.
Es folgt die Erklärung von **IP-Adressen**, **Routern**, **Domain Name System (DNS)** und dem **OSI-Modell** (7 Schichten).
Am Ende steht die Erkenntnis: Moderne Netzwerke funktionieren effizient, weil sie menschliche Organisationsmuster übernehmen - etwa durch Modellbildung und Hierarchie.

## Notizen

### Kommunikation am Hof Informatix

- Hofpersonal kommuniziert mündlich -> funktioniert bei kleinen Gruppen gut.
- Zu viele Teilnehmer = Kommunikationschaos -> Produktivität sinkt.

### Trennwandlösung

- Hof wird in Bereiche mit **Kommunikatoren** aufgeteilt.
- Kommunikatoren übermitteln Nachrichten zwischen Gruppen -> vergleichbar mit **Routern** im Internet.

### Paketvermittlung

- Daten werden in kleine **Pakete** zerlegt.
- Jedes Paket trägt **Absender- und Empfängeradresse**.
- Kommunikation erfolgt nicht über dauerhafte Verbindungen.

### IP-Adressen

- IP = eindeutige Adresse eines Rechners.
- Struktur: z. B. `130.83.242.159`
  - erste Ziffern = Netzwerkkennung, letzte = Gerät.
- Kommunikation innerhalb eines Netzwerks ist direkt, sonst über **Router**.

### Routing

- Router nutzen **Routingtabellen** zur Weiterleitung.
- Nachrichten wandern **Hop für Hop** durch das Netz.
- Spezifischere Routingregeln haben Vorrang.

### DNS (Domain Name System)

- Menschen nutzen **Namen**, Computer brauchen **IP-Adressen**.
- DNS-Server übersetzen Namen wie `www.abenteuer-informatik.de` in IP-Adressen.
- Hierarchische Weitergabe der Anfrage an übergeordnete Nameserver.

### OSI-Modell (7 Schichten)

1. **Physikalisch**: elektrische Signale, Lichtwellen
2. **Datenverbindung**: Prüfsummen, Adressierung im LAN
3. **Netzwerk**: Routing von Paketen (IP)
4. **Transport**: Priorisierung, zuverlässiger Versand
5. **Sitzung**: Verbindungskontext, z. B. laufender Videostream
6. **Darstellung**: Codierung, Zeichensätze, Komprimierung
7. **Anwendung**: Protokolle wie HTTP, SMTP, FTP etc.

:::note[ECHTES OSI]

1. **Physical**: Cables, signals, bits, voltage, hardware
2. **Data Link**: MAC address, switches, frames, error detection
3. **Network**: IP address, routers, packets, routing
4. **Transport**: TCP/UDP, ports, segmentation, reliability
5. **Session**: Connection management, sessions, sync
6. **Presentation**: Encryption, compression, data format (e.g., JPEG, ASCII)
7. **Application**: HTTP, FTP, user interface, network services

:::

### Paradigma & Modellbildung

- Internet nutzt **bekannte Strukturen** aus dem Alltag (z. B. Post, Kommunikation).
- **Paradigmenbildung**: menschliche Organisation als Vorlage für technische Systeme.
- Beispiel: objektorientierte Programmierung = „sprechende“ Objekte.

### Fazit

- Internet ist **technisch komplex**, aber **organisatorisch menschlich**.
- Informationssysteme funktionieren durch Zerlegung, Hierarchie und Wiederverwendung bekannter Prinzipien.

## Fragen & Antworten

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
