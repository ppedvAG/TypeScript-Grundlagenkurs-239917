# 1. Erstellung einer Klasse
Es soll eine Klasse Vehicle (vehicle.class.ts) erstellt werden, welche folgende Member beinhaltet:
Eigenschaften/Felder
- `name (string)`  
- `maxV (number)`  
- `currentV (number)`  
- `dateBuilt (Date)`  
- `running (boolean)`  

Methoden
- `showInfo()`  
=> Gibt die Properties als Fließtext (string) zurück  
- `startMotor()`  
=> Ändert running auf true; Motor darf vorher nicht laufen  
- `stopMotor()`  
=> Ändert running auf false; Fahrzeug muss stehen & Motor muss laufen  
- `accelerate(v: number)`  
=> Verändert die aktuelle Geschwindigkeit um den übergebenen Wert;

Die aktuelle Geschwindigkeit darf 0 nicht unter und die maximale Geschwindigkeit nicht überschreiten
Konstruktor
- Der Konstruktor soll den Namen, die maximale Geschwindigkeit und den Preis als Übergabeparameter empfangen. 
- Die restlichen Properties sollen so gesetzt werden, dass bei einem neuen Fahrzeug der Motor aus ist und es sich nicht bewegt.  
# 2. Instanziierung von Objekten
Instanziiere in index.ts nun ein Fahrzeug (oder mehrere) und spiele ein wenig damit herum. Rufe showInfo() auf, beschleunige das Fahrzeug und teste, ob es sich so verhält, wie es soll.
```
VW kostet 2499,99€ und könnte maximal 210km/h fahren.
Der Motor von VW wurde gestartet.
VW bewegt sich jetzt mit 150km/h
VW kostet 2499,99€ und fährt momentan mit 150 von maximal 210km/h.
```
# 3. Erstellung erbender Klassen
Ziel dieses Labs ist es, neue Klassen zu erstellen, welche sich von der Fahrzeug-Klasse aus den vorherigen Labs ableiten.
- Erstelle neue Klassen (PKW, LKW, Transporter) und lasse diese von der Fahrzeug-Klasse erben.  
- Jede dieser Klassen soll mindestens eine neue klassenspezifische Property bekommen (z.B. Sitz-Anzahl, Treibstoff, Ladetyp, Fassungsvermögen etc.).
- Schreibe die jeweiligen Konstruktoren unter Berücksichtigung der neuen Properties und mit Bezug auf den Konstruktor der Fahrzeugklasse.
- showInfo() der einzelnen Klassen sollen nun auch die neue Property ausgeben (verwende hierzu die override – Mechanik sowie einen Rückbezug auf die showInfo() der Fahrzeug-Klasse).
- Erstelle in der index.ts eine function testDerived() um die neuen Klassen zu testen.  
```
Der PKW Porsche kostet 123000€ und könnte maximal 310km/h fahren. Er hat 5 Türen.
Das LKW Iveco kostet 52500€ und könnte maximal 160km/h fahren. Es fährt mit Diesel.
Das Transporter M.A.N. kostet 200000€ und könnte maximal 120km/h fahren. Es kann bis auf 9800m aufsteigen.
```

# 4. Erstellung eines Interfaces
Auf Basis der vorherigen Labs soll dem Fahrzeugpark nun ein Interface hinzugefügt werden. Durch dieses soll den implementierenden Klassen die Fähigkeit verliehen werden andere Fahrzeuge ‚aufzuladen‘.
Erstelle ein Interface namens ILoadable und füge diesem folgende Member hinzu:
- Eine Property namens otherVehicle, in welche ein beliebiges Fahrzeug (d.h. Datentyp ist Fahrzeug) gelegt werden kann
- Eine Methode (load(vehicle: Fahrzeug)), welche ein beliebiges Fahrzeug übergeben bekommt
- Eine Methode (unload()), welche ein Fahrzeug zurückgibt
# 5. Implementieren
Lasse die Transporter-Klasse das Interface implementieren und schreibe die Methodenlogik:
- load() soll testen, ob die Ladung-Property bereits belegt ist und ansonsten das übergebene Fahrzeug in diese hineinlegen (Ein Fahrzeug wird aufgeladen).
- unload() soll, wenn die Ladung belegt ist, das Fahrzeug zurückgeben und den Laderaum freiräumen. Setze die Ladung-Property hierzu auf null.
- Erweitere showInfo()-Methode der Transporter-Klasse um die Informationen eines aufgeladenen Fahrzeugs.
# 6. Testen
Erweitere die index.ts um eine weitere function testInterface(). Diese soll zwei beliebige Fahrzeuge aufnehmen und testen, ob eins davon beladbar ist. Ist dies der Fall, soll das andere Fahrzeug auf dies geladen werden.
Teste dieses unter Berücksichtigung verschiedener Fahrzeugtypen aus.
```
Keines der Fahrzeuge kann ein Fahrzeug transportieren.
Ladevorgang von 'Smart' auf 'M.A.N.' erfolgreich.
Ladeplatz auf 'Tow Truck' bereits durch 'Porsche' belegt.
```
