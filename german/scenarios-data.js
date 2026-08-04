const SCENARIOS_DATA = [
  {
    "title": "At the doctor's office",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Arzt",
            "Guten Tag."
          ],
          [
            "speaker-b",
            "Patientin",
            "Guten Tag."
          ],
          [
            "speaker-a",
            "Arzt",
            "Wie heißen Sie?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Ich heiße Anna Weber."
          ],
          [
            "speaker-a",
            "Arzt",
            "Was fehlt Ihnen?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Ich habe Kopfschmerzen."
          ],
          [
            "speaker-a",
            "Arzt",
            "Seit wann haben Sie das?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Seit gestern Abend."
          ],
          [
            "speaker-a",
            "Arzt",
            "Haben Sie auch Fieber?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Nein, ich habe kein Fieber."
          ],
          [
            "speaker-a",
            "Arzt",
            "Haben Sie gut geschlafen?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Nein, ich habe schlecht geschlafen."
          ],
          [
            "speaker-a",
            "Arzt",
            "Trinken Sie genug Wasser?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Heute nicht so viel."
          ],
          [
            "speaker-a",
            "Arzt",
            "Ich messe kurz Ihren Blutdruck."
          ],
          [
            "speaker-b",
            "Patientin",
            "Ja, natürlich."
          ],
          [
            "speaker-a",
            "Arzt",
            "Sie brauchen etwas Ruhe."
          ],
          [
            "speaker-b",
            "Patientin",
            "Okay, das mache ich."
          ],
          [
            "speaker-a",
            "Arzt",
            "Ich schreibe Ihnen ein Rezept."
          ],
          [
            "speaker-b",
            "Patientin",
            "Vielen Dank."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Arzt",
            "Guten Tag, Frau Weber."
          ],
          [
            "speaker-b",
            "Patientin",
            "Guten Tag, Herr Doktor."
          ],
          [
            "speaker-a",
            "Arzt",
            "Sie kommen wegen der Kopfschmerzen?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Ja, sie sind schlimmer geworden."
          ],
          [
            "speaker-a",
            "Arzt",
            "Seit wann?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Seit drei Tagen."
          ],
          [
            "speaker-a",
            "Arzt",
            "Trinken Sie genug?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Eigentlich nicht so viel."
          ],
          [
            "speaker-a",
            "Arzt",
            "Das kann die Ursache sein."
          ],
          [
            "speaker-b",
            "Patientin",
            "Wirklich?"
          ],
          [
            "speaker-a",
            "Arzt",
            "Zu wenig Flüssigkeit verursacht oft Kopfschmerzen."
          ],
          [
            "speaker-b",
            "Patientin",
            "Dann trinke ich mehr Wasser."
          ],
          [
            "speaker-a",
            "Arzt",
            "Und versuchen Sie, regelmäßig zu schlafen."
          ],
          [
            "speaker-b",
            "Patientin",
            "Ich gehe oft spät ins Bett."
          ],
          [
            "speaker-a",
            "Arzt",
            "Das sollten Sie ändern."
          ],
          [
            "speaker-b",
            "Patientin",
            "Ich versuche es."
          ],
          [
            "speaker-a",
            "Arzt",
            "Bei anhaltenden Schmerzen kommen Sie wieder."
          ],
          [
            "speaker-b",
            "Patientin",
            "Danke, auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Arzt",
            "Guten Tag, Frau Weber, was kann ich für Sie tun?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Ich leide seit Tagen unter starken Kopfschmerzen."
          ],
          [
            "speaker-a",
            "Arzt",
            "Wann treten die Schmerzen besonders auf?"
          ],
          [
            "speaker-b",
            "Patientin",
            "Vor allem nachmittags am Bildschirm."
          ],
          [
            "speaker-a",
            "Arzt",
            "Das deutet auf Überanstrengung der Augen hin."
          ],
          [
            "speaker-b",
            "Patientin",
            "Müsste ich eine Brille tragen?"
          ],
          [
            "speaker-a",
            "Arzt",
            "Das sollten wir bei einem Optiker überprüfen lassen."
          ],
          [
            "speaker-b",
            "Patientin",
            "Ich mache einen Termin."
          ],
          [
            "speaker-a",
            "Arzt",
            "Zusätzlich empfehle ich regelmäßige Bildschirmpausen."
          ],
          [
            "speaker-b",
            "Patientin",
            "Die zwanzig-Sekunden-Regel habe ich schon gehört."
          ],
          [
            "speaker-a",
            "Arzt",
            "Genau, alle zwanzig Minuten in die Ferne schauen."
          ],
          [
            "speaker-b",
            "Patientin",
            "Und was ist mit Koffein?"
          ],
          [
            "speaker-a",
            "Arzt",
            "Zu viel Kaffee kann die Beschwerden verstärken."
          ],
          [
            "speaker-b",
            "Patientin",
            "Dann reduziere ich den Konsum."
          ],
          [
            "speaker-a",
            "Arzt",
            "Wenn es in zwei Wochen nicht besser ist, sehen wir uns wieder."
          ],
          [
            "speaker-b",
            "Patientin",
            "Vielen Dank für die ausführliche Beratung."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the supermarket checkout",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Kassiererin",
            "Guten Abend."
          ],
          [
            "speaker-b",
            "Kunde",
            "Guten Abend."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Haben Sie alles gefunden?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, danke."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Möchten Sie eine Tüte?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Die Äpfel sind heute im Angebot."
          ],
          [
            "speaker-b",
            "Kunde",
            "Das ist gut."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Haben Sie eine Kundenkarte?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Nein, ich habe keine."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Das macht zusammen zwölf Euro."
          ],
          [
            "speaker-b",
            "Kunde",
            "Kann ich mit Karte zahlen?"
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Ja, natürlich."
          ],
          [
            "speaker-b",
            "Kunde",
            "Einen Moment bitte."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Bitte stecken Sie die Karte ein."
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, mache ich."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Die Zahlung ist fertig."
          ],
          [
            "speaker-b",
            "Kunde",
            "Super."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Hier ist Ihr Bon."
          ],
          [
            "speaker-b",
            "Kunde",
            "Danke, auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Kassiererin",
            "Guten Abend, haben Sie alles?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, ich denke schon."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Das macht zusammen 23 Euro."
          ],
          [
            "speaker-b",
            "Kunde",
            "Kann ich mit Karte zahlen?"
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Ja, natürlich."
          ],
          [
            "speaker-b",
            "Kunde",
            "Einen Moment."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Bitte die Karte ans Gerät halten."
          ],
          [
            "speaker-b",
            "Kunde",
            "Geht das mit Kontakt?"
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Ja, die Zahlung ist fertig."
          ],
          [
            "speaker-b",
            "Kunde",
            "Danke."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Möchten Sie den Bon?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Hier ist alles."
          ],
          [
            "speaker-b",
            "Kunde",
            "Einen schönen Abend noch."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Ihnen auch, auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Kassiererin",
            "Guten Abend, Ihr Einkauf sieht lecker aus."
          ],
          [
            "speaker-b",
            "Kunde",
            "Danke, ich koche heute für Freunde."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Das klingt nach einem schönen Abend."
          ],
          [
            "speaker-b",
            "Kunde",
            "Hoffentlich gelingt das Rezept."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Die Zutaten sind jedenfalls frisch."
          ],
          [
            "speaker-b",
            "Kunde",
            "Darf ich die Eier ganz oben in die Tüte bekommen?"
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Selbstverständlich, ich packe sie geschützt ein."
          ],
          [
            "speaker-b",
            "Kunde",
            "Das ist sehr aufmerksam."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Möchten Sie Ihre Kundenkarte einsetzen?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, dann sammle ich Punkte."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Gut, dann erhalten Sie auch den Rabatt."
          ],
          [
            "speaker-b",
            "Kunde",
            "Sehr schön, das freut mich."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Insgesamt macht es 31 Euro und 50 Cent."
          ],
          [
            "speaker-b",
            "Kunde",
            "Bezahle ich bar, hier bitte."
          ],
          [
            "speaker-a",
            "Kassiererin",
            "Vielen Dank, und guten Appetit später."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the bakery",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Verkäuferin",
            "Guten Morgen."
          ],
          [
            "speaker-b",
            "Kundin",
            "Guten Morgen."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Was möchten Sie?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Ich möchte zwei Brötchen."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Sonst noch etwas?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Ja, ein Brot bitte."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Welches Brot möchten Sie?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Das große Bauernbrot."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Möchten Sie auch einen Kuchen?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Nein, heute nicht."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Die Brötchen sind ganz frisch."
          ],
          [
            "speaker-b",
            "Kundin",
            "Sehr gut."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Soll ich das Brot schneiden?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Gerne."
          ],
          [
            "speaker-b",
            "Kundin",
            "Wie viel kostet das?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Das kostet fünf Euro zwanzig."
          ],
          [
            "speaker-b",
            "Kundin",
            "Hier bitte."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Danke schön."
          ],
          [
            "speaker-b",
            "Kundin",
            "Auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Verkäuferin",
            "Guten Morgen, was darf es sein?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Ich möchte ein halbes Bauernbrot."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Geschnitten oder am Stück?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Bitte geschnitten."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Sonst noch etwas?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Drei Brezeln, bitte."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Möchten Sie auch etwas Süßes?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Vielleicht ein Stück Streuselkuchen."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Den haben wir ganz frisch."
          ],
          [
            "speaker-b",
            "Kundin",
            "Dann nehme ich ihn."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Das macht zusammen sieben Euro."
          ],
          [
            "speaker-b",
            "Kundin",
            "Hier bitte."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Danke schön."
          ],
          [
            "speaker-b",
            "Kundin",
            "Sind die Brezeln heute frisch?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Ja, seit sechs Uhr morgens."
          ],
          [
            "speaker-b",
            "Kundin",
            "Perfekt, dann guten Appetit zu Hause."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Verkäuferin",
            "Guten Morgen, womit kann ich Ihnen helfen?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Ich hätte gern ein Vollkornbrot, bitte."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Gern, in welcher Größe?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Ein kleines reicht für zwei Tage."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Möchten Sie es in Scheiben geschnitten?"
          ],
          [
            "speaker-b",
            "Kundin",
            "Ja, nicht zu dünn, bitte."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Sehr gern, ich stelle die Maschine ein."
          ],
          [
            "speaker-b",
            "Kundin",
            "Und außerdem ein paar Brötchen fürs Wochenende."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Empfehlen kann ich die Dinkelbrötchen."
          ],
          [
            "speaker-b",
            "Kundin",
            "Die habe ich noch nicht probiert."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Sie sind besonders saftig."
          ],
          [
            "speaker-b",
            "Kundin",
            "Dann nehme ich vier davon."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Das macht insgesamt neun Euro zwanzig."
          ],
          [
            "speaker-b",
            "Kundin",
            "Zahlen Sie mit Karte, das geht schneller."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Sehr gerne, die Zahlung ist durch."
          ],
          [
            "speaker-b",
            "Kundin",
            "Vielen Dank, einen schönen Tag noch."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the pharmacy",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Apothekerin",
            "Guten Tag."
          ],
          [
            "speaker-b",
            "Kunde",
            "Guten Tag."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Wie kann ich helfen?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ich brauche Hustensaft."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Ist der Husten stark?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, besonders nachts."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Haben Sie auch Halsschmerzen?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, ein bisschen."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Haben Sie ein Rezept?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Nein, leider nicht."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Dann habe ich etwas ohne Rezept."
          ],
          [
            "speaker-b",
            "Kunde",
            "Das ist gut."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Nehmen Sie den Saft dreimal am Tag."
          ],
          [
            "speaker-b",
            "Kunde",
            "Vor dem Essen oder danach?"
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Am besten nach dem Essen."
          ],
          [
            "speaker-b",
            "Kunde",
            "Okay."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Trinken Sie auch warmen Tee."
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, das mache ich."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Das kostet acht Euro."
          ],
          [
            "speaker-b",
            "Kunde",
            "Danke, auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Apothekerin",
            "Guten Tag, wie kann ich helfen?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ich habe Halsweh und eine leichte Erkältung."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Seit wann?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Seit gestern."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Haben Sie auch Fieber?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Nein, zum Glück nicht."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Dann reicht eine Beruhigung der Schleimhäute."
          ],
          [
            "speaker-b",
            "Kunde",
            "Was empfehlen Sie?"
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Salbeitee und eine Halsbonbonsorte."
          ],
          [
            "speaker-b",
            "Kunde",
            "Und gegen das Kratzen?"
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Ein Spray mit Kamille."
          ],
          [
            "speaker-b",
            "Kunde",
            "Das klingt gut."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Nehmen Sie außerdem viel Vitamin C."
          ],
          [
            "speaker-b",
            "Kunde",
            "Obst hilft also?"
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Ja, und warme Getränke."
          ],
          [
            "speaker-b",
            "Kunde",
            "Danke für die Tipps."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Gute Besserung!"
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Apothekerin",
            "Guten Tag, was kann ich für Sie tun?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Seit zwei Tagen kratzt mein Hals und ich fühle mich schlapp."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Haben Sie die Beschwerden beim Schlucken?"
          ],
          [
            "speaker-b",
            "Kunde",
            "Ja, vor allem morgens."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Das deutet auf eine beginnende Erkältung hin."
          ],
          [
            "speaker-b",
            "Kunde",
            "Gibt es etwas, das den Verlauf abmildert?"
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Ich empfehle ein Spray und eine intensive Zinkkur."
          ],
          [
            "speaker-b",
            "Kunde",
            "Zink soll das Immunsystem stärken?"
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Genau, wenn man früh damit beginnt."
          ],
          [
            "speaker-b",
            "Kunde",
            "Und wann sollte ich zum Arzt?"
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Sobald Sie Fieber über 38 Grad bekommen."
          ],
          [
            "speaker-b",
            "Kunde",
            "Das behalte ich im Auge."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Außerdem hilft viel Ruhe."
          ],
          [
            "speaker-b",
            "Kunde",
            "Ich nehme mir morgen frei."
          ],
          [
            "speaker-a",
            "Apothekerin",
            "Eine weise Entscheidung, so erholen Sie sich besser."
          ],
          [
            "speaker-b",
            "Kunde",
            "Vielen Dank für die fachkundige Beratung."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the bus stop",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Person A",
            "Entschuldigung, fährt der Bus nach Mitte?"
          ],
          [
            "speaker-b",
            "Person B",
            "Ja, der Bus fährt nach Mitte."
          ],
          [
            "speaker-a",
            "Person A",
            "Kommt der Bus bald?"
          ],
          [
            "speaker-b",
            "Person B",
            "Ich glaube, in fünf Minuten."
          ],
          [
            "speaker-a",
            "Person A",
            "Danke."
          ],
          [
            "speaker-b",
            "Person B",
            "Gern."
          ],
          [
            "speaker-a",
            "Person A",
            "Fahren Sie auch in die Stadt?"
          ],
          [
            "speaker-b",
            "Person B",
            "Ja, ich fahre zur Arbeit."
          ],
          [
            "speaker-a",
            "Person A",
            "Ich bin heute zum ersten Mal hier."
          ],
          [
            "speaker-b",
            "Person B",
            "Dann ist diese Linie gut für Sie."
          ],
          [
            "speaker-a",
            "Person A",
            "Muss ich hier ein Ticket kaufen?"
          ],
          [
            "speaker-b",
            "Person B",
            "Nein, im Bus oder per App."
          ],
          [
            "speaker-a",
            "Person A",
            "Ah, okay."
          ],
          [
            "speaker-b",
            "Person B",
            "Dort kommt der Bus schon."
          ],
          [
            "speaker-a",
            "Person A",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Person B",
            "Steigen Sie vorne ein."
          ],
          [
            "speaker-a",
            "Person A",
            "Hat der Bus viele Haltestellen?"
          ],
          [
            "speaker-b",
            "Person B",
            "Nicht so viele."
          ],
          [
            "speaker-a",
            "Person A",
            "Danke für die Hilfe."
          ],
          [
            "speaker-b",
            "Person B",
            "Kein Problem."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Person A",
            "Entschuldigung, fährt dieser Bus zum Bahnhof?"
          ],
          [
            "speaker-b",
            "Person B",
            "Ja, Linie 4 fährt direkt dorthin."
          ],
          [
            "speaker-a",
            "Person A",
            "Und wie oft kommt er?"
          ],
          [
            "speaker-b",
            "Person B",
            "Alle zehn Minuten."
          ],
          [
            "speaker-a",
            "Person A",
            "Das ist praktisch."
          ],
          [
            "speaker-b",
            "Person B",
            "Warten Sie schon lange?"
          ],
          [
            "speaker-a",
            "Person A",
            "Ungefähr fünf Minuten."
          ],
          [
            "speaker-b",
            "Person B",
            "Dann dauert es nicht mehr lange."
          ],
          [
            "speaker-a",
            "Person A",
            "Wo muss ich aussteigen?"
          ],
          [
            "speaker-b",
            "Person B",
            "An der Station „Hauptbahnhof“."
          ],
          [
            "speaker-a",
            "Person A",
            "Und wie komme ich zu Gleis 3?"
          ],
          [
            "speaker-b",
            "Person B",
            "Durch die Unterführung, dann geradeaus."
          ],
          [
            "speaker-a",
            "Person A",
            "Vielen Dank."
          ],
          [
            "speaker-b",
            "Person B",
            "Da kommt der Bus schon."
          ],
          [
            "speaker-a",
            "Person A",
            "Gut, dann steige ich ein."
          ],
          [
            "speaker-b",
            "Person B",
            "Gute Reise!"
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Person A",
            "Entschuldigen Sie, sind Sie mit dem Bus vertraut?"
          ],
          [
            "speaker-b",
            "Person B",
            "Ja, ich fahre täglich mit der Linie 4."
          ],
          [
            "speaker-a",
            "Person A",
            "Ich muss zum Hauptbahnhof und bin unsicher."
          ],
          [
            "speaker-b",
            "Person B",
            "Kein Problem, die Linie 4 fährt direkt dorthin."
          ],
          [
            "speaker-a",
            "Person A",
            "Wie viele Haltestellen sind es?"
          ],
          [
            "speaker-b",
            "Person B",
            "Sechs, ungefähr fünfzehn Minuten."
          ],
          [
            "speaker-a",
            "Person A",
            "Sollte ich ein Tagesticket kaufen?"
          ],
          [
            "speaker-b",
            "Person B",
            "Wenn Sie heute zurückfahren, lohnt sich das."
          ],
          [
            "speaker-a",
            "Person A",
            "Und wo bekomme ich es?"
          ],
          [
            "speaker-b",
            "Person B",
            "Am Automaten oder in der App."
          ],
          [
            "speaker-a",
            "Person A",
            "Die App habe ich schon installiert."
          ],
          [
            "speaker-b",
            "Person B",
            "Dann kaufen Sie es dort, das geht am schnellsten."
          ],
          [
            "speaker-a",
            "Person A",
            "Vielen Dank für die Auskunft."
          ],
          [
            "speaker-b",
            "Person B",
            "Gern, der Bus kommt übrigens gerade."
          ],
          [
            "speaker-a",
            "Person A",
            "Perfekt, dann muss ich mich beeilen."
          ],
          [
            "speaker-b",
            "Person B",
            "Steigen Sie vorne ein, dort ist die Entwertung."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the airport",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Guten Tag. Ihren Pass bitte."
          ],
          [
            "speaker-b",
            "Reisender",
            "Guten Tag. Hier ist mein Pass."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Wohin fliegen Sie heute?"
          ],
          [
            "speaker-b",
            "Reisender",
            "Ich fliege nach Berlin."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Haben Sie Gepäck?"
          ],
          [
            "speaker-b",
            "Reisender",
            "Ja, einen Koffer."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Stellen Sie den Koffer bitte hierhin."
          ],
          [
            "speaker-b",
            "Reisender",
            "Ja, gern."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Der Koffer ist in Ordnung."
          ],
          [
            "speaker-b",
            "Reisender",
            "Sehr gut."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Möchten Sie am Fenster sitzen?"
          ],
          [
            "speaker-b",
            "Reisender",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ihr Flug geht um zehn Uhr."
          ],
          [
            "speaker-b",
            "Reisender",
            "Wann beginnt das Boarding?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Um neun Uhr dreißig."
          ],
          [
            "speaker-b",
            "Reisender",
            "An welchem Gate?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Am Gate A zwölf."
          ],
          [
            "speaker-b",
            "Reisender",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Hier ist Ihre Bordkarte."
          ],
          [
            "speaker-b",
            "Reisender",
            "Vielen Dank."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Guten Tag, Ihren Pass, bitte."
          ],
          [
            "speaker-b",
            "Reisender",
            "Hier, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Danke. Wohin fliegen Sie?"
          ],
          [
            "speaker-b",
            "Reisender",
            "Nach München."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Haben Sie nur Handgepäck?"
          ],
          [
            "speaker-b",
            "Reisender",
            "Ja, einen kleinen Rucksack."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Dann ist alles in Ordnung."
          ],
          [
            "speaker-b",
            "Reisender",
            "Wo geht das Boarding los?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Am Gate B 5."
          ],
          [
            "speaker-b",
            "Reisender",
            "Wann beginnt es?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Um zehn Uhr zwanzig."
          ],
          [
            "speaker-b",
            "Reisender",
            "Ich habe noch Zeit."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Nutzen Sie sie für einen Kaffee."
          ],
          [
            "speaker-b",
            "Reisender",
            "Gute Idee."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Haben Sie einen schönen Flug."
          ],
          [
            "speaker-b",
            "Reisender",
            "Danke, auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Guten Tag, reisen Sie heute nach München?"
          ],
          [
            "speaker-b",
            "Reisender",
            "Ja, genau, hier sind meine Dokumente."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Vielen Dank, ich prüfe die Buchung."
          ],
          [
            "speaker-b",
            "Reisender",
            "Gibt es Probleme?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Nein, alles stimmt, nur die Sitzplatzwahl fehlt."
          ],
          [
            "speaker-b",
            "Reisender",
            "Können Sie mir einen Fensterplatz geben?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Selbstverständlich, Reihe 14 A ist noch frei."
          ],
          [
            "speaker-b",
            "Reisender",
            "Ausgezeichnet, ich fliege gern am Fenster."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ihr Boarding beginnt um 10:20 am Gate B 5."
          ],
          [
            "speaker-b",
            "Reisender",
            "Ist der Weg zum Gate weit?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ungefähr zehn Minuten, Sie haben genug Zeit."
          ],
          [
            "speaker-b",
            "Reisender",
            "Perfekt, dann schaue ich mir noch die Geschäfte an."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Achten Sie auf die Durchsagen."
          ],
          [
            "speaker-b",
            "Reisender",
            "Werde ich, vielen Dank für Ihre Hilfe."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Gern, ich wünsche Ihnen einen angenehmen Flug."
          ]
        ]
      }
    ]
  },
  {
    "title": "At school in the classroom",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Guten Morgen zusammen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Guten Morgen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Bitte setzt euch."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, Frau Becker."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Habt ihr die Hausaufgaben?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, ich habe sie."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Schüler",
            "Darf ich etwas fragen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ja, natürlich."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was machen wir heute?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wir lesen einen kurzen Text."
          ],
          [
            "speaker-b",
            "Schüler",
            "Okay."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Bitte öffnet eure Bücher."
          ],
          [
            "speaker-b",
            "Schüler",
            "Auf welcher Seite?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Auf Seite zwölf."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich habe die Seite."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Lies bitte den ersten Satz."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, ich lese."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr schön gelesen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Guten Morgen, Klasse."
          ],
          [
            "speaker-b",
            "Schüler",
            "Guten Morgen, Frau Becker."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Nehmt bitte eure Bücher."
          ],
          [
            "speaker-b",
            "Schüler",
            "Auf welcher Seite?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Seite 24, die Lektüre."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich habe sie gefunden."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wer liest den ersten Absatz?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich kann lesen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Gut, fang an."
          ],
          [
            "speaker-b",
            "Schüler",
            "Es war einmal ein kleiner Junge..."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Halt, lies noch einmal mit Betonung."
          ],
          [
            "speaker-b",
            "Schüler",
            "Es war einmal ein kleiner Junge..."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut, so klingt es lebendig."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Weiter mit dem nächsten Absatz."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich lese weiter."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Guten Morgen, wir beginnen mit einer Diskussion."
          ],
          [
            "speaker-b",
            "Schüler",
            "Worüber sprechen wir?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Über die letzte Klassenlektüre."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich fand die Geschichte sehr berührend."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Was genau hat dich beeindruckt?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Die Entwicklung der Hauptfigur."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Kannst du das näher erläutern?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Sie wird mutiger und lernt, eigene Entscheidungen zu treffen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gute Beobachtung, wer möchte ergänzen?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich finde, auch die Nebenfiguren sind wichtig."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Inwiefern?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Sie helfen der Hauptfigur, ohne aufzufallen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das ist eine kluge Interpretation."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke, die Geschichte regt zum Nachdenken an."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Genau darum geht es beim Lesen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Dann freue ich mich auf das nächste Buch."
          ]
        ]
      }
    ]
  },
  {
    "title": "At a restaurant",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Kellner",
            "Guten Abend."
          ],
          [
            "speaker-b",
            "Gast",
            "Guten Abend."
          ],
          [
            "speaker-a",
            "Kellner",
            "Haben Sie reserviert?"
          ],
          [
            "speaker-b",
            "Gast",
            "Nein, leider nicht."
          ],
          [
            "speaker-a",
            "Kellner",
            "Das ist kein Problem."
          ],
          [
            "speaker-b",
            "Gast",
            "Haben Sie einen Tisch für zwei?"
          ],
          [
            "speaker-a",
            "Kellner",
            "Ja, dort am Fenster."
          ],
          [
            "speaker-b",
            "Gast",
            "Danke."
          ],
          [
            "speaker-a",
            "Kellner",
            "Hier ist die Speisekarte."
          ],
          [
            "speaker-b",
            "Gast",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Kellner",
            "Möchten Sie schon etwas trinken?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, ein Wasser bitte."
          ],
          [
            "speaker-a",
            "Kellner",
            "Und was möchten Sie essen?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ich nehme die Suppe."
          ],
          [
            "speaker-a",
            "Kellner",
            "Möchten Sie auch einen Salat?"
          ],
          [
            "speaker-b",
            "Gast",
            "Nein, danke."
          ],
          [
            "speaker-a",
            "Kellner",
            "Kommt sofort."
          ],
          [
            "speaker-b",
            "Gast",
            "Vielen Dank."
          ],
          [
            "speaker-a",
            "Kellner",
            "Später bringe ich die Rechnung."
          ],
          [
            "speaker-b",
            "Gast",
            "Sehr gut."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Kellner",
            "Guten Abend, einen Tisch für zwei?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Kellner",
            "Am Fenster oder in der Mitte?"
          ],
          [
            "speaker-b",
            "Gast",
            "Am Fenster, bitte."
          ],
          [
            "speaker-a",
            "Kellner",
            "Hier ist die Speisekarte."
          ],
          [
            "speaker-b",
            "Gast",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Kellner",
            "Darf ich Ihnen Getränke bringen?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ein Mineralwasser und einen Saft."
          ],
          [
            "speaker-a",
            "Kellner",
            "Sehr gern."
          ],
          [
            "speaker-b",
            "Gast",
            "Und was empfehlen Sie zum Essen?"
          ],
          [
            "speaker-a",
            "Kellner",
            "Das Schnitzel ist beliebt."
          ],
          [
            "speaker-b",
            "Gast",
            "Dann nehme ich das Schnitzel."
          ],
          [
            "speaker-a",
            "Kellner",
            "Mit Pommes oder Salat?"
          ],
          [
            "speaker-b",
            "Gast",
            "Mit Salat, bitte."
          ],
          [
            "speaker-a",
            "Kellner",
            "Ich gebe die Bestellung auf."
          ],
          [
            "speaker-b",
            "Gast",
            "Danke."
          ],
          [
            "speaker-a",
            "Kellner",
            "Guten Appetit später."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Kellner",
            "Guten Abend, haben Sie reserviert?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, auf den Namen Müller."
          ],
          [
            "speaker-a",
            "Kellner",
            "Einen Moment, ich prüfe die Reservierung."
          ],
          [
            "speaker-b",
            "Gast",
            "Sicher, nehmen Sie sich Zeit."
          ],
          [
            "speaker-a",
            "Kellner",
            "Hier ist Ihr Tisch, direkt an der Terrasse."
          ],
          [
            "speaker-b",
            "Gast",
            "Danke, das ist ein schöner Platz."
          ],
          [
            "speaker-a",
            "Kellner",
            "Darf ich Ihnen die Tageskarte bringen?"
          ],
          [
            "speaker-b",
            "Gast",
            "Gern, ich bin gespannt auf die Angebote."
          ],
          [
            "speaker-a",
            "Kellner",
            "Heute gibt es unter anderem ein Lammcurry."
          ],
          [
            "speaker-b",
            "Gast",
            "Das klingt verführerisch, gibt es es auch mild?"
          ],
          [
            "speaker-a",
            "Kellner",
            "Sie können die Schärfe anpassen."
          ],
          [
            "speaker-b",
            "Gast",
            "Dann nehme ich es, bitte mit Reis."
          ],
          [
            "speaker-a",
            "Kellner",
            "Möchten Sie dazu einen Salat?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, mit einem Zitronendressing."
          ],
          [
            "speaker-a",
            "Kellner",
            "Sehr gut, ich bringe alles gleich."
          ],
          [
            "speaker-b",
            "Gast",
            "Vielen Dank, ich freue mich schon."
          ]
        ]
      }
    ]
  },
  {
    "title": "At a hotel reception",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Rezeptionistin",
            "Guten Abend."
          ],
          [
            "speaker-b",
            "Gast",
            "Guten Abend."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Haben Sie eine Reservierung?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, auf den Namen Klein."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Einen Moment bitte."
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, gern."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ja, ich habe Ihre Reservierung."
          ],
          [
            "speaker-b",
            "Gast",
            "Super."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Wie viele Nächte bleiben Sie?"
          ],
          [
            "speaker-b",
            "Gast",
            "Zwei Nächte."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Möchten Sie Frühstück?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ihr Zimmer ist im zweiten Stock."
          ],
          [
            "speaker-b",
            "Gast",
            "Hat das Zimmer WLAN?"
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ja, natürlich."
          ],
          [
            "speaker-b",
            "Gast",
            "Sehr gut."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Hier ist Ihr Schlüssel."
          ],
          [
            "speaker-b",
            "Gast",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Der Aufzug ist rechts."
          ],
          [
            "speaker-b",
            "Gast",
            "Vielen Dank."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Rezeptionistin",
            "Guten Abend, willkommen."
          ],
          [
            "speaker-b",
            "Gast",
            "Guten Abend, ich habe reserviert."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Auf welchen Namen?"
          ],
          [
            "speaker-b",
            "Gast",
            "Schmidt."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ja, Zimmer 42 im dritten Stock."
          ],
          [
            "speaker-b",
            "Gast",
            "Gibt es einen Aufzug?"
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ja, direkt links."
          ],
          [
            "speaker-b",
            "Gast",
            "Wann ist das Frühstück?"
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Von sieben bis zehn."
          ],
          [
            "speaker-b",
            "Gast",
            "Das ist perfekt."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Möchten Sie einen Weckruf?"
          ],
          [
            "speaker-b",
            "Gast",
            "Ja, um sieben Uhr."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Notiert, hier ist Ihre Karte."
          ],
          [
            "speaker-b",
            "Gast",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Auf Wiedersehen und gute Nacht."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Rezeptionistin",
            "Guten Abend, herzlich willkommen im Hotel."
          ],
          [
            "speaker-b",
            "Gast",
            "Vielen Dank, ich habe eine Reservierung."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Unter welchem Namen?"
          ],
          [
            "speaker-b",
            "Gast",
            "Unter Schmidt, mit zwei Nächten."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ich sehe Ihre Buchung, Zimmer 42."
          ],
          [
            "speaker-b",
            "Gast",
            "Gibt es eine Möglichkeit für ein Zimmer mit Aussicht?"
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ich schaue, ob ein Upgrade möglich ist."
          ],
          [
            "speaker-b",
            "Gast",
            "Das wäre wunderbar."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ja, wir haben ein Zimmer zur Seeseite frei."
          ],
          [
            "speaker-b",
            "Gast",
            "Das ist großartig, vielen Dank."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Frühstück servieren wir ab sieben Uhr."
          ],
          [
            "speaker-b",
            "Gast",
            "Und gibt es ein Restaurant im Haus?"
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ja, im Erdgeschoss, mit regionaler Küche."
          ],
          [
            "speaker-b",
            "Gast",
            "Das probiere ich heute Abend."
          ],
          [
            "speaker-a",
            "Rezeptionistin",
            "Ich wünsche Ihnen einen angenehmen Aufenthalt."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the library",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Bibliothekarin",
            "Guten Tag."
          ],
          [
            "speaker-b",
            "Besucher",
            "Guten Tag."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Kann ich Ihnen helfen?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Ja, ich suche ein deutsches Buch."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Für Anfänger oder für Fortgeschrittene?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Für Anfänger, bitte."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Dann ist dieses Buch gut."
          ],
          [
            "speaker-b",
            "Besucher",
            "Das sieht gut aus."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Haben Sie schon einen Ausweis?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Nein, noch nicht."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Dann brauchen Sie ein Formular."
          ],
          [
            "speaker-b",
            "Besucher",
            "Wo ist das Formular?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Hier auf dem Tisch."
          ],
          [
            "speaker-b",
            "Besucher",
            "Danke."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Sie können das Buch drei Wochen behalten."
          ],
          [
            "speaker-b",
            "Besucher",
            "Das ist prima."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Bitte bringen Sie es pünktlich zurück."
          ],
          [
            "speaker-b",
            "Besucher",
            "Ja, natürlich."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Dann wünsche ich viel Spaß beim Lesen."
          ],
          [
            "speaker-b",
            "Besucher",
            "Vielen Dank."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Bibliothekarin",
            "Guten Tag, kann ich Ihnen helfen?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Ja, ich suche ein Buch über Berlin."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Ein Reiseführer oder ein Geschichtsbuch?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Am besten beides."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Hier in diesem Regal finden Sie beides."
          ],
          [
            "speaker-b",
            "Besucher",
            "Danke, ich schaue mir das an."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Nehmen Sie sich Zeit."
          ],
          [
            "speaker-b",
            "Besucher",
            "Dieses Buch gefällt mir."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Möchten Sie es ausleihen?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Haben Sie einen Ausweis?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Ja, hier."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Alles erledigt, drei Wochen Leihfrist."
          ],
          [
            "speaker-b",
            "Besucher",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Viel Spaß beim Lesen."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Bibliothekarin",
            "Guten Tag, wobei kann ich helfen?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Ich suche Literatur über die Geschichte Berlins."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Interessieren Sie sich für das 20. Jahrhundert?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Vor allem für die Nachkriegszeit."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Dann empfehle ich Ihnen dieses Sachbuch."
          ],
          [
            "speaker-b",
            "Besucher",
            "Ist es gut verständlich geschrieben?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Ja, es richtet sich auch an interessierte Laien."
          ],
          [
            "speaker-b",
            "Besucher",
            "Enthält es historische Fotografien?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Eine ganze Sammlung, das macht es anschaulich."
          ],
          [
            "speaker-b",
            "Besucher",
            "Perfekt, das nehme ich mit."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Soll ich es für Sie vormerken?"
          ],
          [
            "speaker-b",
            "Besucher",
            "Nein, ich leihe es direkt aus."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Dann brauche ich nur Ihren Ausweis."
          ],
          [
            "speaker-b",
            "Besucher",
            "Hier, und wie lange darf ich es behalten?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Vier Wochen, verlängerbar per E-Mail."
          ],
          [
            "speaker-b",
            "Besucher",
            "Vielen Dank für die ausgezeichnete Beratung."
          ]
        ]
      }
    ]
  },
  {
    "title": "Morning routine before school",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Guten Morgen, Lina."
          ],
          [
            "speaker-b",
            "Lina",
            "Guten Morgen, Mama."
          ],
          [
            "speaker-a",
            "Mutter",
            "Wie spät ist es?"
          ],
          [
            "speaker-b",
            "Lina",
            "Es ist halb sieben."
          ],
          [
            "speaker-a",
            "Mutter",
            "Steh bitte auf."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich bin noch müde."
          ],
          [
            "speaker-a",
            "Mutter",
            "Heute hast du Mathe."
          ],
          [
            "speaker-b",
            "Lina",
            "Stimmt, und auch Musik."
          ],
          [
            "speaker-a",
            "Mutter",
            "Geh zuerst ins Bad."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich putze gleich meine Zähne."
          ],
          [
            "speaker-a",
            "Mutter",
            "Vergiss dein Gesicht nicht zu waschen."
          ],
          [
            "speaker-b",
            "Lina",
            "Ja, mache ich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Danach zieh dich an."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich nehme heute den roten Pullover."
          ],
          [
            "speaker-a",
            "Mutter",
            "Der passt gut zur Jeans."
          ],
          [
            "speaker-b",
            "Lina",
            "Wo sind meine Socken?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Sie liegen auf dem Stuhl."
          ],
          [
            "speaker-b",
            "Lina",
            "Danke, ich habe sie."
          ],
          [
            "speaker-a",
            "Mutter",
            "Super, dann gibt es Frühstück."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich komme sofort in die Küche."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Guten Morgen, Lina. Stehst du schon auf?"
          ],
          [
            "speaker-b",
            "Lina",
            "Ja, ich bin schon wach."
          ],
          [
            "speaker-a",
            "Mutter",
            "Wie spät ist es?"
          ],
          [
            "speaker-b",
            "Lina",
            "Es ist kurz vor sieben."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann beeil dich, wir müssen los."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich wasche mir kurz das Gesicht."
          ],
          [
            "speaker-a",
            "Mutter",
            "Vergiss nicht, die Zähne zu putzen."
          ],
          [
            "speaker-b",
            "Lina",
            "Mache ich gleich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Was ziehst du heute an?"
          ],
          [
            "speaker-b",
            "Lina",
            "Ich weiß noch nicht genau."
          ],
          [
            "speaker-a",
            "Mutter",
            "Nimm die blaue Hose, sie passt zum Wetter."
          ],
          [
            "speaker-b",
            "Lina",
            "Und dazu das weiße T-Shirt."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr schön. Frühstück steht auf dem Tisch."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich trinke schnell einen Tee."
          ],
          [
            "speaker-a",
            "Mutter",
            "Denk an deinen Rucksack."
          ],
          [
            "speaker-b",
            "Lina",
            "Alles drin. Ich bin bereit."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Guten Morgen, Lina. Hast du gut geschlafen?"
          ],
          [
            "speaker-b",
            "Lina",
            "Ganz gut, aber ich bin immer noch müde."
          ],
          [
            "speaker-a",
            "Mutter",
            "Du bist gestern zu spät ins Bett gegangen."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich weiß, der Film war allerdings zu spannend."
          ],
          [
            "speaker-a",
            "Mutter",
            "Wie dem auch sei, heute ist ein langer Schultag."
          ],
          [
            "speaker-b",
            "Lina",
            "Stimmt, wir haben nachmittags noch Sport."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann solltest du kräftig frühstücken."
          ],
          [
            "speaker-b",
            "Lina",
            "Was gibt es denn?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Müsli, Obst und ein warmes Brötchen."
          ],
          [
            "speaker-b",
            "Lina",
            "Das klingt gut, ich habe Hunger."
          ],
          [
            "speaker-a",
            "Mutter",
            "Vergiss nicht, deine Sportsachen einzupacken."
          ],
          [
            "speaker-b",
            "Lina",
            "Danke, dass du mich daran erinnerst."
          ],
          [
            "speaker-a",
            "Mutter",
            "Nach dem Frühstück wäschst du dich noch kurz."
          ],
          [
            "speaker-b",
            "Lina",
            "Ja, ich dusche sogar heute Morgen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Prima, dann können wir pünktlich los."
          ],
          [
            "speaker-b",
            "Lina",
            "Ich bin in zehn Minuten fertig."
          ]
        ]
      }
    ]
  },
  {
    "title": "Breakfast at home",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Guten Morgen, Ben."
          ],
          [
            "speaker-b",
            "Ben",
            "Guten Morgen, Papa."
          ],
          [
            "speaker-a",
            "Vater",
            "Möchtest du Brot oder Müsli?"
          ],
          [
            "speaker-b",
            "Ben",
            "Ich möchte Müsli mit Milch."
          ],
          [
            "speaker-a",
            "Vater",
            "Und eine Banane?"
          ],
          [
            "speaker-b",
            "Ben",
            "Ja, bitte."
          ],
          [
            "speaker-a",
            "Vater",
            "Hier ist deine Schüssel."
          ],
          [
            "speaker-b",
            "Ben",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Vater",
            "Willst du auch Tee?"
          ],
          [
            "speaker-b",
            "Ben",
            "Nein, lieber Wasser."
          ],
          [
            "speaker-a",
            "Vater",
            "Nimm auch dein Pausenbrot mit."
          ],
          [
            "speaker-b",
            "Ben",
            "Was ist heute drin?"
          ],
          [
            "speaker-a",
            "Vater",
            "Käse, Gurke und ein Apfel."
          ],
          [
            "speaker-b",
            "Ben",
            "Lecker, das mag ich."
          ],
          [
            "speaker-a",
            "Vater",
            "Iss bitte in Ruhe."
          ],
          [
            "speaker-b",
            "Ben",
            "Ich habe noch zehn Minuten."
          ],
          [
            "speaker-a",
            "Vater",
            "Dann packen wir gleich den Rucksack."
          ],
          [
            "speaker-b",
            "Ben",
            "Ja, wir sind fast fertig."
          ],
          [
            "speaker-a",
            "Vater",
            "Sehr gut gemacht."
          ],
          [
            "speaker-b",
            "Ben",
            "Danke, Papa."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Guten Morgen, Ben. Hast du Hunger?"
          ],
          [
            "speaker-b",
            "Ben",
            "Ja, ein bisschen."
          ],
          [
            "speaker-a",
            "Vater",
            "Es gibt Brötchen und Marmelade."
          ],
          [
            "speaker-b",
            "Ben",
            "Ich möchte lieber Müsli mit Joghurt."
          ],
          [
            "speaker-a",
            "Vater",
            "Gut, dann nimm dir eine Schüssel."
          ],
          [
            "speaker-b",
            "Ben",
            "Danke, Papa."
          ],
          [
            "speaker-a",
            "Vater",
            "Möchtest du auch Saft?"
          ],
          [
            "speaker-b",
            "Ben",
            "Ja, einen Orangensaft, bitte."
          ],
          [
            "speaker-a",
            "Vater",
            "Hier ist er."
          ],
          [
            "speaker-b",
            "Ben",
            "Danke. Das schmeckt super."
          ],
          [
            "speaker-a",
            "Vater",
            "Hast du dein Pausenbrot gemacht?"
          ],
          [
            "speaker-b",
            "Ben",
            "Noch nicht, ich mache es gleich."
          ],
          [
            "speaker-a",
            "Vater",
            "Nimm ein Stück Käse und eine Gurke."
          ],
          [
            "speaker-b",
            "Ben",
            "Und ein paar Trauben."
          ],
          [
            "speaker-a",
            "Vater",
            "Sehr gut, so bleibst du fit."
          ],
          [
            "speaker-b",
            "Ben",
            "Papa, wir müssen los!"
          ],
          [
            "speaker-a",
            "Vater",
            "Komm, ich bringe dich."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Guten Morgen, Ben. Der Kaffee ist fertig."
          ],
          [
            "speaker-b",
            "Ben",
            "Für mich lieber Tee, bitte."
          ],
          [
            "speaker-a",
            "Vater",
            "Natürlich, ich setze das Wasser auf."
          ],
          [
            "speaker-b",
            "Ben",
            "Was machen wir zum Frühstück?"
          ],
          [
            "speaker-a",
            "Vater",
            "Ich habe Eier gekocht und Brot gekauft."
          ],
          [
            "speaker-b",
            "Ben",
            "Dazu hätte ich gern ein bisschen Honig."
          ],
          [
            "speaker-a",
            "Vater",
            "Der Honig steht im Schrank."
          ],
          [
            "speaker-b",
            "Ben",
            "Danke. Übrigens, wann kommst du heute nach Hause?"
          ],
          [
            "speaker-a",
            "Vater",
            "Vermutlich um sechs, je nachdem wie die Besprechung läuft."
          ],
          [
            "speaker-b",
            "Ben",
            "Können wir dann gemeinsam kochen?"
          ],
          [
            "speaker-a",
            "Vater",
            "Gern, schlage du etwas vor."
          ],
          [
            "speaker-b",
            "Ben",
            "Wie wäre es mit Nudeln mit Tomatensoße?"
          ],
          [
            "speaker-a",
            "Vater",
            "Eine gute Wahl, wir haben alles dafür."
          ],
          [
            "speaker-b",
            "Ben",
            "Dann packe ich schon mal mein Pausenbrot."
          ],
          [
            "speaker-a",
            "Vater",
            "Nimm das Vollkornbrot, davon hast du länger Energie."
          ],
          [
            "speaker-b",
            "Ben",
            "Guter Tipp, danke."
          ],
          [
            "speaker-a",
            "Vater",
            "Viel Erfolg in der Schule."
          ],
          [
            "speaker-b",
            "Ben",
            "Danke, Papa. Bis heute Abend."
          ]
        ]
      }
    ]
  },
  {
    "title": "Packing the school bag",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Hast du deinen Stundenplan?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, er liegt auf dem Tisch."
          ],
          [
            "speaker-a",
            "Mutter",
            "Welche Fächer hast du heute?"
          ],
          [
            "speaker-b",
            "Kind",
            "Deutsch, Mathe und Sport."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann brauchst du drei Hefte."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich nehme das blaue und das grüne Heft."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und dein Mathebuch?"
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist hier im Regal."
          ],
          [
            "speaker-a",
            "Mutter",
            "Bitte steck auch das Federmäppchen ein."
          ],
          [
            "speaker-b",
            "Kind",
            "Da sind zwei Stifte kaputt."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann nimm diese neuen Bleistifte."
          ],
          [
            "speaker-b",
            "Kind",
            "Super, danke."
          ],
          [
            "speaker-a",
            "Mutter",
            "Hast du dein Sportzeug?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, T-Shirt, Hose und Schuhe."
          ],
          [
            "speaker-a",
            "Mutter",
            "Auch eine Wasserflasche?"
          ],
          [
            "speaker-b",
            "Kind",
            "Oh, die vergesse ich immer."
          ],
          [
            "speaker-a",
            "Mutter",
            "Hier, füll sie bitte auf."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt ist alles drin."
          ],
          [
            "speaker-a",
            "Mutter",
            "Prima, dein Rucksack ist bereit."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann kann ich losgehen."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Hast du deinen Stundenplan gecheckt?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, heute haben wir drei Fächer."
          ],
          [
            "speaker-a",
            "Mutter",
            "Welche denn?"
          ],
          [
            "speaker-b",
            "Kind",
            "Deutsch, Mathe und Kunst."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann brauchst du deine Mappe für Kunst."
          ],
          [
            "speaker-b",
            "Kind",
            "Die liegt noch auf dem Schreibtisch."
          ],
          [
            "speaker-a",
            "Mutter",
            "Leg sie sofort in den Rucksack."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und deine Sportsachen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Die brauche ich heute nicht."
          ],
          [
            "speaker-a",
            "Mutter",
            "Gut. Nimm deine Trinkflasche mit."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe sie schon gefüllt."
          ],
          [
            "speaker-a",
            "Mutter",
            "Perfekt. Fehlt noch etwas?"
          ],
          [
            "speaker-b",
            "Kind",
            "Mein Federmäppchen, aber das suche ich noch."
          ],
          [
            "speaker-a",
            "Mutter",
            "Es liegt neben dem Radio."
          ],
          [
            "speaker-b",
            "Kind",
            "Ah, danke. Jetzt ist alles drin."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann bist du bereit."
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, ich kann los."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Hast du deinen Rucksack schon gepackt?"
          ],
          [
            "speaker-b",
            "Kind",
            "Fast, ich kontrolliere gerade die Fächer."
          ],
          [
            "speaker-a",
            "Mutter",
            "Welche Stunden hast du morgen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Deutsch, Mathe und Schwimmen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann vergiss die Badesachen nicht."
          ],
          [
            "speaker-b",
            "Kind",
            "Die habe ich schon am Vortag vorbereitet."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr organisiert. Und dein Lesebuch?"
          ],
          [
            "speaker-b",
            "Kind",
            "Oh, das habe ich noch nicht eingepackt."
          ],
          [
            "speaker-a",
            "Mutter",
            "Ich hole es dir aus dem Wohnzimmer."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, Mama. Ich lege es oben auf."
          ],
          [
            "speaker-a",
            "Mutter",
            "Hast du genug zu trinken dabei?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, eine ganze Flasche Wasser."
          ],
          [
            "speaker-a",
            "Mutter",
            "Bei dem heißen Wetter ist das wichtig."
          ],
          [
            "speaker-b",
            "Kind",
            "Soll ich auch einen Apfel mitnehmen?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Gute Idee, Obst gibt Energie."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann ist der Rucksack endlich fertig."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und pünktlich, das freut mich."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich gehe dann los, bis später."
          ]
        ]
      }
    ]
  },
  {
    "title": "Walking to school with a friend",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Emma",
            "Hallo Tom, wartest du auf mich?"
          ],
          [
            "speaker-b",
            "Tom",
            "Ja, wir gehen zusammen."
          ],
          [
            "speaker-a",
            "Emma",
            "Super, dann ist der Weg kürzer."
          ],
          [
            "speaker-b",
            "Tom",
            "Wie war dein Abend?"
          ],
          [
            "speaker-a",
            "Emma",
            "Ich habe Hausaufgaben gemacht."
          ],
          [
            "speaker-b",
            "Tom",
            "Ich auch, die Matheaufgabe war schwer."
          ],
          [
            "speaker-a",
            "Emma",
            "Ja, besonders Nummer vier."
          ],
          [
            "speaker-b",
            "Tom",
            "Hast du sie gelöst?"
          ],
          [
            "speaker-a",
            "Emma",
            "Mit Hilfe von meiner Schwester."
          ],
          [
            "speaker-b",
            "Tom",
            "Gut, dann kannst du es mir erklären."
          ],
          [
            "speaker-a",
            "Emma",
            "Klar, in der Pause."
          ],
          [
            "speaker-b",
            "Tom",
            "Schau, die Ampel ist rot."
          ],
          [
            "speaker-a",
            "Emma",
            "Wir warten lieber."
          ],
          [
            "speaker-b",
            "Tom",
            "Jetzt ist sie grün."
          ],
          [
            "speaker-a",
            "Emma",
            "Schnell, wir gehen rüber."
          ],
          [
            "speaker-b",
            "Tom",
            "Heute ist es kalt."
          ],
          [
            "speaker-a",
            "Emma",
            "Ja, ich habe Handschuhe an."
          ],
          [
            "speaker-b",
            "Tom",
            "Da vorne ist schon die Schule."
          ],
          [
            "speaker-a",
            "Emma",
            "Wir sind pünktlich."
          ],
          [
            "speaker-b",
            "Tom",
            "Perfekt, los in die Klasse."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Emma",
            "Hallo Tom, bist du bereit?"
          ],
          [
            "speaker-b",
            "Tom",
            "Ja, ich komme gerade."
          ],
          [
            "speaker-a",
            "Emma",
            "Ich habe auf dich gewartet."
          ],
          [
            "speaker-b",
            "Tom",
            "Danke, das ist nett."
          ],
          [
            "speaker-a",
            "Emma",
            "Gehen wir zusammen zur Schule?"
          ],
          [
            "speaker-b",
            "Tom",
            "Natürlich, wie immer."
          ],
          [
            "speaker-a",
            "Emma",
            "Hast du deine Hausaufgaben?"
          ],
          [
            "speaker-b",
            "Tom",
            "Ja, ich habe sie gestern gemacht."
          ],
          [
            "speaker-a",
            "Emma",
            "Ich auch, die Aufgaben waren einfach."
          ],
          [
            "speaker-b",
            "Tom",
            "Außer Mathe, die dritte Aufgabe war schwer."
          ],
          [
            "speaker-a",
            "Emma",
            "Stimmt, aber ich habe sie gelöst."
          ],
          [
            "speaker-b",
            "Tom",
            "Kannst du sie mir zeigen?"
          ],
          [
            "speaker-a",
            "Emma",
            "Klar, in der Pause."
          ],
          [
            "speaker-b",
            "Tom",
            "Super, danke."
          ],
          [
            "speaker-a",
            "Emma",
            "Schau, die Ampel ist grün."
          ],
          [
            "speaker-b",
            "Tom",
            "Komm, wir gehen schnell."
          ],
          [
            "speaker-a",
            "Emma",
            "Wir sind pünktlich."
          ],
          [
            "speaker-b",
            "Tom",
            "Perfekt."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Emma",
            "Guten Morgen, Tom. Alles fit?"
          ],
          [
            "speaker-b",
            "Tom",
            "Einigermaßen, ich habe allerdings verschlafen."
          ],
          [
            "speaker-a",
            "Emma",
            "Kein Wunder, du hast gestern lange gespielt."
          ],
          [
            "speaker-b",
            "Tom",
            "Stimmt, die Serie war einfach zu spannend."
          ],
          [
            "speaker-a",
            "Emma",
            "Deshalb solltest du heute früher schlafen gehen."
          ],
          [
            "speaker-b",
            "Tom",
            "Du hast recht, das schaffe ich nur selten."
          ],
          [
            "speaker-a",
            "Emma",
            "Übrigens, hast du die Matheaufgabe geschafft?"
          ],
          [
            "speaker-b",
            "Tom",
            "Fast, aber ich bin an der letzten gescheitert."
          ],
          [
            "speaker-a",
            "Emma",
            "Ich könnte sie dir heute Mittag erklären."
          ],
          [
            "speaker-b",
            "Tom",
            "Das wäre sehr hilfreich, danke."
          ],
          [
            "speaker-a",
            "Emma",
            "Wir treffen uns nach der dritten Stunde."
          ],
          [
            "speaker-b",
            "Tom",
            "Abgemacht, ich bringe mein Heft mit."
          ],
          [
            "speaker-a",
            "Emma",
            "Pass auf, hier ist die Straße eng."
          ],
          [
            "speaker-b",
            "Tom",
            "Und die Autos fahren ziemlich schnell."
          ],
          [
            "speaker-a",
            "Emma",
            "Deshalb schauen wir erst nach links und rechts."
          ],
          [
            "speaker-b",
            "Tom",
            "Gut gemacht, jetzt sind wir sicher angekommen."
          ],
          [
            "speaker-a",
            "Emma",
            "Schönen Schultag noch."
          ],
          [
            "speaker-b",
            "Tom",
            "Dir auch."
          ]
        ]
      }
    ]
  },
  {
    "title": "In the school corridor",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Schüler A",
            "Hallo Mia, welche Stunde haben wir jetzt?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Jetzt haben wir Deutsch."
          ],
          [
            "speaker-a",
            "Schüler A",
            "In welchem Raum?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Im Raum 2.14 im zweiten Stock."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Oh, ich dachte im ersten Stock."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Nein, dort ist Kunst."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Danke für die Info."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Kein Problem."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Hast du dein Lesebuch dabei?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Ja, es ist im Rucksack."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Ich habe meins zu Hause vergessen."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Du kannst heute mit mir teilen."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Das ist nett."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Die Lehrerin kommt schon."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Dann gehen wir schnell rein."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Warte, ich trinke noch einen Schluck."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Okay, jetzt los."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Ich bin bereit."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Heute will ich mich oft melden."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Ich auch, das schaffen wir."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Schüler A",
            "Hast du gehört, wir haben eine Vertretung?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Ja, Frau Schmidt ist krank."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Wer unterrichtet uns denn?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Herr Neumann, der neue Lehrer."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Den kenne ich noch nicht."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Er ist nett und erklärt gut."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Das ist gut. In welchem Raum?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Raum 1.08, also im Erdgeschoss."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Dann gehen wir besser jetzt los."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Warte, ich hole noch mein Buch."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Beeil dich, die Stunde beginnt gleich."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Ich bin schon unterwegs."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Da ist die Klasse."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Wir schaffen es gerade noch."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Zum Glück."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Schüler A",
            "Weißt du, was heute in der zweiten Stunde ist?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Deutsch, aber Frau Becker ist krank."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Das heißt, wir bekommen eine Vertretung?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Ja, Herr Neumann übernimmt die Stunde."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Ich habe gehört, er ist ziemlich streng."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Eigentlich nicht, er legt nur Wert auf Pünktlichkeit."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Dann sollten wir uns beeilen."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Genau, besser fünf Minuten zu früh als zu spät."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Welchen Raum haben wir denn?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Raum 2.15 im zweiten Stock."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Da müssen wir die Treppe nehmen, der Aufzug ist kaputt."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Kein Problem, wir haben noch zwei Minuten."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Übrigens, hast du das Lesebuch dabei?"
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Ja, ich habe es sogar zweimal gepackt."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Witzig, dann lass es mich kurz anschauen."
          ],
          [
            "speaker-b",
            "Schülerin B",
            "Nur wenn du es mir nachher zurückgibst."
          ],
          [
            "speaker-a",
            "Schüler A",
            "Versprochen."
          ]
        ]
      }
    ]
  },
  {
    "title": "Math homework in the afternoon",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Hast du schon mit Mathe angefangen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Noch nicht, ich hole mein Heft."
          ],
          [
            "speaker-a",
            "Mutter",
            "Wie viele Aufgaben sind es?"
          ],
          [
            "speaker-b",
            "Kind",
            "Sechs Aufgaben auf Seite 35."
          ],
          [
            "speaker-a",
            "Mutter",
            "Fang mit der ersten an."
          ],
          [
            "speaker-b",
            "Kind",
            "Hier steht: 24 plus 17."
          ],
          [
            "speaker-a",
            "Mutter",
            "Was ist das Ergebnis?"
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist 41."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Die nächste ist eine Textaufgabe."
          ],
          [
            "speaker-a",
            "Mutter",
            "Lies sie langsam vor."
          ],
          [
            "speaker-b",
            "Kind",
            "Anna hat 12 Bonbons und bekommt 8 dazu."
          ],
          [
            "speaker-a",
            "Mutter",
            "Also wie viele hat Anna jetzt?"
          ],
          [
            "speaker-b",
            "Kind",
            "20 Bonbons."
          ],
          [
            "speaker-a",
            "Mutter",
            "Richtig gerechnet."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt verstehe ich es besser."
          ],
          [
            "speaker-a",
            "Mutter",
            "Möchtest du eine kurze Pause?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, fünf Minuten bitte."
          ],
          [
            "speaker-a",
            "Mutter",
            "Danach machen wir den Rest."
          ],
          [
            "speaker-b",
            "Kind",
            "Einverstanden."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Wie viele Aufgaben hast du schon geschafft?"
          ],
          [
            "speaker-b",
            "Kind",
            "Drei von sechs."
          ],
          [
            "speaker-a",
            "Mutter",
            "Das geht gut voran."
          ],
          [
            "speaker-b",
            "Kind",
            "Die vierte ist aber schwierig."
          ],
          [
            "speaker-a",
            "Mutter",
            "Zeig mir die Aufgabe."
          ],
          [
            "speaker-b",
            "Kind",
            "Hier, 45 minus 18."
          ],
          [
            "speaker-a",
            "Mutter",
            "Rechne erst die Zehner."
          ],
          [
            "speaker-b",
            "Kind",
            "40 minus 10 ist 30."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und dann die Einer."
          ],
          [
            "speaker-b",
            "Kind",
            "5 minus 8 geht nicht."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann musst du dir einen Zehner leihen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ah, dann sind es 27."
          ],
          [
            "speaker-a",
            "Mutter",
            "Genau richtig."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, jetzt verstehe ich das System."
          ],
          [
            "speaker-a",
            "Mutter",
            "Siehst du, es ist ganz einfach."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann mache ich die letzten zwei schnell."
          ],
          [
            "speaker-a",
            "Mutter",
            "Ich schaue später noch einmal nach."
          ],
          [
            "speaker-b",
            "Kind",
            "Alles klar."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Wie kommst du mit den Hausaufgaben voran?"
          ],
          [
            "speaker-b",
            "Kind",
            "Eigentlich gut, aber die Textaufgaben sind knifflig."
          ],
          [
            "speaker-a",
            "Mutter",
            "Lies sie einmal langsam vor."
          ],
          [
            "speaker-b",
            "Kind",
            "Ein Bus hat 40 Plätze, 23 sind besetzt. Wie viele sind frei?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Was musst du rechnen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ich denke, 40 minus 23."
          ],
          [
            "speaker-a",
            "Mutter",
            "Richtig, und wie rechnest du das?"
          ],
          [
            "speaker-b",
            "Kind",
            "40 minus 20 ist 20, minus 3 ist 17."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut, das ist die Zerlegungsmethode."
          ],
          [
            "speaker-b",
            "Kind",
            "Und bei der zweiten Aufgabe sind 12 Kinder krank?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Nein, genau lesen: 12 sind heute nicht in der Klasse."
          ],
          [
            "speaker-b",
            "Kind",
            "Ah, dann habe ich die Frage falsch verstanden."
          ],
          [
            "speaker-a",
            "Mutter",
            "Solche Fehler passieren, wenn man zu schnell liest."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann rechne ich noch einmal sorgfältig."
          ],
          [
            "speaker-a",
            "Mutter",
            "Nimm dir ruhig Zeit dafür."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt habe ich es verstanden."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann hast du dir die Pause verdient."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke für deine Hilfe."
          ]
        ]
      }
    ]
  },
  {
    "title": "Reading practice in German",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Heute lesen wir eine kleine Geschichte."
          ],
          [
            "speaker-b",
            "Schüler",
            "Wie heißt die Geschichte?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sie heißt Der kleine Hund."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das klingt schön."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wer möchte den ersten Satz lesen?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich möchte lesen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Bitte, fang an."
          ],
          [
            "speaker-b",
            "Schüler",
            "Der kleine Hund läuft in den Park."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut ausgesprochen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Was macht der Hund im Park?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Er spielt mit einem Ball."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Richtig."
          ],
          [
            "speaker-b",
            "Schüler",
            "Darf ich den nächsten Satz lesen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ja, gern."
          ],
          [
            "speaker-b",
            "Schüler",
            "Dann trifft er ein Mädchen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Klasse gelesen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Lesen macht heute Spaß."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das freut mich."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich lese zu Hause weiter."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Möchtest du heute etwas vorlesen?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, aber ich bin ein bisschen nervös."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das ist völlig normal."
          ],
          [
            "speaker-b",
            "Schüler",
            "Darf ich leise anfangen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Natürlich, lies erst für dich."
          ],
          [
            "speaker-b",
            "Schüler",
            "Okay, ich übe kurz."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Nimm dir so viel Zeit, wie du brauchst."
          ],
          [
            "speaker-b",
            "Schüler",
            "Jetzt bin ich bereit."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Dann lies den ersten Absatz."
          ],
          [
            "speaker-b",
            "Schüler",
            "Der Hund läuft durch den Park..."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut, und jetzt etwas lauter."
          ],
          [
            "speaker-b",
            "Schüler",
            "...und trifft seine Freunde."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das klang schon viel sicherer."
          ],
          [
            "speaker-b",
            "Schüler",
            "Wirklich? Danke."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Du hast dich sehr verbessert."
          ],
          [
            "speaker-b",
            "Schüler",
            "Dann lese ich morgen noch einen Absatz."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Magst du heute die Geschichte weiterlesen?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Gern, obwohl ich die langen Wörter schwierig finde."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das ist normal, mit Übung wird es leichter."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was mache ich, wenn ich ein Wort nicht kenne?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Du versuchst zuerst, es aus dem Zusammenhang zu verstehen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Und wenn das nicht klappt?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Dann fragst du oder schaust im Wörterbuch nach."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das mache ich gerne so."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Lies jetzt bitte den zweiten Abschnitt."
          ],
          [
            "speaker-b",
            "Schüler",
            "Nachdem der Hund gefressen hatte, suchte er seinen Ball."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Achte auf das „hatte“ — das ist ein Präteritum."
          ],
          [
            "speaker-b",
            "Schüler",
            "Also erzählt die Geschichte von der Vergangenheit?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Genau, sehr gut erkannt."
          ],
          [
            "speaker-b",
            "Schüler",
            "Dann habe ich die Grammatik verstanden."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Du machst beachtliche Fortschritte."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke, ich lese zu Hause weiter."
          ]
        ]
      }
    ]
  },
  {
    "title": "Art class with colors",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Lehrer",
            "Heute malen wir einen Garten."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Welche Farben sollen wir nehmen?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Grün für das Gras und Blau für den Himmel."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Kann ich auch Rosa benutzen?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Ja, für Blumen ist Rosa gut."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Mein Pinsel ist zu dick."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Nimm einen dünnen Pinsel aus der Box."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Danke, jetzt klappt es besser."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Male zuerst den Hintergrund."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Okay, ich male den Himmel."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Sehr schön und sauber."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Jetzt male ich einen Baum."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Vergiss den Stamm nicht."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Der Stamm ist braun."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Genau."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Kann ich einen Hund malen?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Natürlich, das Bild ist dein Bild."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Super, ich male einen kleinen Hund."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Dein Garten ist toll geworden."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Danke, ich bin stolz."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Lehrer",
            "Heute zeichnen wir ein Stillleben."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Was bedeutet Stillleben?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Früchte und Gegenstände, die still liegen."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Ah, wie ein Obstteller."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Genau. Du kannst Birnen oder Zitronen nehmen."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Ich male Äpfel und eine Vase."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Schöne Idee."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Welche Farben brauche ich?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Rot, Gelb und etwas Braun."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Und Grün für die Blätter."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Natürlich."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Mein Bild ist schon halb fertig."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Zeig es mir kurz."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Hier, was sagst du?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Sehr schön, nur der Schatten fehlt noch."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Wie male ich einen Schatten?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Mit etwas Blau und viel Wasser."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Ich versuche es gleich."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Lehrer",
            "Heute beschäftigen wir uns mit Perspektive."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Das klingt kompliziert."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Eigentlich nicht, es geht um das Vorher und Nachher."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Meinst du, dass Dinge in der Ferne kleiner wirken?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Genau, das nennt man räumliche Tiefe."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Das habe ich schon oft beobachtet."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Zeichne zum Beispiel einen Weg, der schmaler wird."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Und die Bäume am Rand werden kleiner?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Richtig, so entsteht Tiefe im Bild."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Darf ich zuerst eine Skizze machen?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Unbedingt, eine Skizze ist die Grundlage."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Ich beginne mit einem leichten Bleistift."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Achte darauf, die Linien nicht zu dunkel zu zeichnen."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Danach kann ich sie mit Farbe überdecken."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Ein sehr professioneller Ansatz."
          ],
          [
            "speaker-b",
            "Schülerin",
            "Danke, das macht mir großen Spaß."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Ich bin gespannt auf dein Ergebnis."
          ]
        ]
      }
    ]
  },
  {
    "title": "Music lesson with instruments",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Setzt euch bitte in einen Kreis."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, Frau Lange."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Heute hören wir verschiedene Instrumente."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich mag die Gitarre."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut, hier ist eine kleine Gitarre."
          ],
          [
            "speaker-b",
            "Schüler",
            "Darf ich sie ausprobieren?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ja, aber ganz vorsichtig."
          ],
          [
            "speaker-b",
            "Schüler",
            "Sie klingt hell."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Jetzt hören wir die Trommel."
          ],
          [
            "speaker-b",
            "Schüler",
            "Die ist laut."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wie ist der Rhythmus?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Langsam und dann schnell."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Gut gehört."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich möchte auch trommeln."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Du bist als Nächster dran."
          ],
          [
            "speaker-b",
            "Schüler",
            "Prima."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Zum Schluss singen wir zusammen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Welches Lied?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Alle meine Entchen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das kenne ich."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Welches Instrument möchtest du heute üben?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Die Blockflöte, bitte."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Gut, wir beginnen mit einer Tonleiter."
          ],
          [
            "speaker-b",
            "Schüler",
            "Von C bis G?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ja, und dann ein paar Töne zurück."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das klappt schon ganz gut."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Achte auf deine Fingerhaltung."
          ],
          [
            "speaker-b",
            "Schüler",
            "So?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Genau, die Löcher ganz schließen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Jetzt klingt es besser."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr schön, versuche ein kleines Lied."
          ],
          [
            "speaker-b",
            "Schüler",
            "Kann ich mit dem Notenbuch üben?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Natürlich, Seite zwölf."
          ],
          [
            "speaker-b",
            "Schüler",
            "Die Melodie kenne ich."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Dann spiele sie langsam."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich übe sie heute Abend noch."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr fleißig von dir."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Hast du zu Hause weiter geübt?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, jeden Tag etwa zwanzig Minuten."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das merkt man, deine Technik ist besser geworden."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke, aber das schnelle Stück klappt noch nicht."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das ist normal, schnelle Passagen brauchen Zeit."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was kann ich dagegen tun?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Übe die Stelle langsam und steigere das Tempo allmählich."
          ],
          [
            "speaker-b",
            "Schüler",
            "Also erst mit Metronom?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Genau, das Metronom hilft dir, im Takt zu bleiben."
          ],
          [
            "speaker-b",
            "Schüler",
            "Und worauf muss ich sonst achten?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Auf die Atmung und eine entspannte Haltung."
          ],
          [
            "speaker-b",
            "Schüler",
            "Wenn ich verkrampfe, klingt es sofort schlechter."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut beobachtet, du hast ein feines Gehör."
          ],
          [
            "speaker-b",
            "Schüler",
            "Vielleicht kann ich nach den Ferien das Lied vorspielen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ich freue mich schon darauf."
          ],
          [
            "speaker-b",
            "Schüler",
            "Dann übe ich fleißig weiter."
          ]
        ]
      }
    ]
  },
  {
    "title": "Sports lesson in the gym",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Trainer",
            "Guten Morgen, Klasse."
          ],
          [
            "speaker-b",
            "Kinder",
            "Guten Morgen."
          ],
          [
            "speaker-a",
            "Trainer",
            "Zieht bitte eure Sportschuhe an."
          ],
          [
            "speaker-b",
            "Kind",
            "Meine Schuhe sind schon an."
          ],
          [
            "speaker-a",
            "Trainer",
            "Wir beginnen mit Aufwärmen."
          ],
          [
            "speaker-b",
            "Kind",
            "Laufen wir im Kreis?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Ja, zwei Runden langsam."
          ],
          [
            "speaker-b",
            "Kind",
            "Und dann schneller?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Genau, dann eine schnelle Runde."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich atme tief ein und aus."
          ],
          [
            "speaker-a",
            "Trainer",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Was machen wir danach?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Wir üben Werfen und Fangen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich kann schon gut fangen."
          ],
          [
            "speaker-a",
            "Trainer",
            "Dann hilfst du deinem Partner."
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, gern."
          ],
          [
            "speaker-a",
            "Trainer",
            "Zum Schluss spielen wir ein kleines Spiel."
          ],
          [
            "speaker-b",
            "Kind",
            "Super, ich freue mich."
          ],
          [
            "speaker-a",
            "Trainer",
            "Bleibt fair und passt aufeinander auf."
          ],
          [
            "speaker-b",
            "Kind",
            "Machen wir."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Trainer",
            "Heute spielen wir ein kleines Turnier."
          ],
          [
            "speaker-b",
            "Kinder",
            "Juhu!"
          ],
          [
            "speaker-a",
            "Trainer",
            "Zuerst teilen wir die Gruppen."
          ],
          [
            "speaker-b",
            "Kind",
            "In welchen Gruppen?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Vier Teams mit je fünf Kindern."
          ],
          [
            "speaker-b",
            "Kind",
            "Welches Team gewinnt?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Das Team, das am Ende die meisten Punkte hat."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie viele Punkte gibt es für ein Tor?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Zwei Punkte pro Tor."
          ],
          [
            "speaker-b",
            "Kind",
            "Und für ein Spiel?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Drei Punkte für einen Sieg."
          ],
          [
            "speaker-b",
            "Kind",
            "Das verstehe ich."
          ],
          [
            "speaker-a",
            "Trainer",
            "Denkt daran: Fair spielen!"
          ],
          [
            "speaker-b",
            "Kind",
            "Machen wir."
          ],
          [
            "speaker-a",
            "Trainer",
            "Und viel Wasser trinken."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben alle Flaschen dabei."
          ],
          [
            "speaker-a",
            "Trainer",
            "Dann pfeife ich an."
          ],
          [
            "speaker-b",
            "Kinder",
            "Los!"
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Trainer",
            "Heute üben wir Ballkontrolle und Zusammenspiel."
          ],
          [
            "speaker-b",
            "Kind",
            "Wird es am Ende ein Turnier geben?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Ja, aber erst nach dem Trainingsteil."
          ],
          [
            "speaker-b",
            "Kind",
            "Was genau üben wir zuerst?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Passen in Bewegung und die Laufwege."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist schwieriger, als es aussieht."
          ],
          [
            "speaker-a",
            "Trainer",
            "Stimmt, aber gerade das macht gute Spieler aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Worauf kommt es beim Passen an?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Auf Präzision und auf den richtigen Moment."
          ],
          [
            "speaker-b",
            "Kind",
            "Und wenn der Gegner dazwischensteht?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Dann suchst du dir besser eine andere Lösung."
          ],
          [
            "speaker-b",
            "Kind",
            "Zum Beispiel einen Querpass?"
          ],
          [
            "speaker-a",
            "Trainer",
            "Genau, so öffnest du den Raum."
          ],
          [
            "speaker-b",
            "Kind",
            "Das probiere ich gleich aus."
          ],
          [
            "speaker-a",
            "Trainer",
            "Denkt außerdem daran, euch gegenseitig zu unterstützen."
          ],
          [
            "speaker-b",
            "Kind",
            "Im Team gewinnen wir zusammen."
          ],
          [
            "speaker-a",
            "Trainer",
            "Das ist die richtige Einstellung."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich freue mich auf das Turnier."
          ]
        ]
      }
    ]
  },
  {
    "title": "Recess on the playground",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Nora",
            "Kommst du mit auf die Schaukel?"
          ],
          [
            "speaker-b",
            "Lea",
            "Ja, gerne."
          ],
          [
            "speaker-a",
            "Nora",
            "Ich schaukle zuerst, okay?"
          ],
          [
            "speaker-b",
            "Lea",
            "Okay, dann bin ich danach dran."
          ],
          [
            "speaker-a",
            "Nora",
            "Kannst du mich ein bisschen anschubsen?"
          ],
          [
            "speaker-b",
            "Lea",
            "Ja, aber nicht zu hoch."
          ],
          [
            "speaker-a",
            "Nora",
            "Danke, so ist gut."
          ],
          [
            "speaker-b",
            "Lea",
            "Jetzt wechseln wir."
          ],
          [
            "speaker-a",
            "Nora",
            "Ja, ich halte die Schaukel fest."
          ],
          [
            "speaker-b",
            "Lea",
            "Super."
          ],
          [
            "speaker-a",
            "Nora",
            "Willst du später rutschen?"
          ],
          [
            "speaker-b",
            "Lea",
            "Ja, die große Rutsche ist frei."
          ],
          [
            "speaker-a",
            "Nora",
            "Dann gehen wir gleich dorthin."
          ],
          [
            "speaker-b",
            "Lea",
            "Ich habe auch ein Springseil dabei."
          ],
          [
            "speaker-a",
            "Nora",
            "Toll, wir können zusammen springen."
          ],
          [
            "speaker-b",
            "Lea",
            "Wie lange dauert die Pause noch?"
          ],
          [
            "speaker-a",
            "Nora",
            "Noch fünf Minuten."
          ],
          [
            "speaker-b",
            "Lea",
            "Dann schnell noch einmal rutschen."
          ],
          [
            "speaker-a",
            "Nora",
            "Los, wir laufen."
          ],
          [
            "speaker-b",
            "Lea",
            "Das macht Spaß."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Nora",
            "Komm, wir gehen auf den Spielplatz."
          ],
          [
            "speaker-b",
            "Lea",
            "Ja, aber erst esse ich mein Brot."
          ],
          [
            "speaker-a",
            "Nora",
            "Ich habe auch einen Apfel dabei."
          ],
          [
            "speaker-b",
            "Lea",
            "Essen wir zusammen auf der Bank?"
          ],
          [
            "speaker-a",
            "Nora",
            "Gute Idee."
          ],
          [
            "speaker-b",
            "Lea",
            "Hier ist noch ein freier Platz."
          ],
          [
            "speaker-a",
            "Nora",
            "Das Wetter ist schön heute."
          ],
          [
            "speaker-b",
            "Lea",
            "Ja, es ist warm."
          ],
          [
            "speaker-a",
            "Nora",
            "Nach dem Essen spielen wir Fangen."
          ],
          [
            "speaker-b",
            "Lea",
            "Okay, aber nicht zu schnell rennen."
          ],
          [
            "speaker-a",
            "Nora",
            "Warum nicht?"
          ],
          [
            "speaker-b",
            "Lea",
            "Weil meine Schuhe rutschen."
          ],
          [
            "speaker-a",
            "Nora",
            "Dann spielen wir lieber Verstecken."
          ],
          [
            "speaker-b",
            "Lea",
            "Das ist besser."
          ],
          [
            "speaker-a",
            "Nora",
            "Ich zähle bis zehn."
          ],
          [
            "speaker-b",
            "Lea",
            "Ich verstecke mich hinter dem Baum."
          ],
          [
            "speaker-a",
            "Nora",
            "Bereit oder nicht, ich komme!"
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Nora",
            "Hast du deine Pause gut überstanden?"
          ],
          [
            "speaker-b",
            "Lea",
            "Ja, aber ich war ziemlich durstig."
          ],
          [
            "speaker-a",
            "Nora",
            "Ich habe meine Flasche schon leer getrunken."
          ],
          [
            "speaker-b",
            "Lea",
            "Zum Glück gibt es am Eingang einen Trinkbrunnen."
          ],
          [
            "speaker-a",
            "Nora",
            "Wollen wir zuerst etwas spielen?"
          ],
          [
            "speaker-b",
            "Lea",
            "Gern, aber ich bin noch ein bisschen müde."
          ],
          [
            "speaker-a",
            "Nora",
            "Wie wäre es mit einem ruhigen Spiel?"
          ],
          [
            "speaker-b",
            "Lea",
            "Zum Beispiel Gummitwist?"
          ],
          [
            "speaker-a",
            "Nora",
            "Genau, das kann ich in Ruhe springen."
          ],
          [
            "speaker-b",
            "Lea",
            "Dann hole ich das Seil aus meiner Tasche."
          ],
          [
            "speaker-a",
            "Nora",
            "Es ist ganz schön windig hier."
          ],
          [
            "speaker-b",
            "Lea",
            "Dann spielen wir lieber auf dem geteerten Platz."
          ],
          [
            "speaker-a",
            "Nora",
            "Gute Idee, dort fliegt nichts weg."
          ],
          [
            "speaker-b",
            "Lea",
            "Ich halte das Seil, du springst zuerst."
          ],
          [
            "speaker-a",
            "Nora",
            "Passt du auf, dass du nicht stolperst?"
          ],
          [
            "speaker-b",
            "Lea",
            "Keine Sorge, ich bin vorsichtig."
          ],
          [
            "speaker-a",
            "Nora",
            "Das macht richtig Spaß."
          ]
        ]
      }
    ]
  },
  {
    "title": "Lunch in the school cafeteria",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Hallo, was möchtest du essen?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Was gibt es heute?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Es gibt Nudeln mit Tomatensoße oder Reis mit Gemüse."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich nehme Nudeln, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Möchtest du auch Salat?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, ein kleiner Salat."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Hier ist dein Tablett."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Und ein Getränk?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Wasser, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Schüler",
            "Wo kann ich sitzen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Hinten am Fenster sind Plätze frei."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich setze mich zu meinen Freunden."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Guten Appetit."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke schön."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Bring das Tablett später zurück."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ja, mache ich."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Und iss langsam."
          ],
          [
            "speaker-b",
            "Schüler",
            "Okay."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Was möchtest du heute essen?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Gibt es wieder Nudeln?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ja, mit einer fleischlosen Soße."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich nehme die Nudeln, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Dazu ein Gemüse oder Salat?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ein bisschen Salat, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Und zu trinken?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Einen Apfelsaft."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Hier ist dein Tablett."
          ],
          [
            "speaker-b",
            "Schüler",
            "Danke."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Guten Appetit!"
          ],
          [
            "speaker-b",
            "Schüler",
            "Wo ist das Besteck?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Rechts am Ende des Tisches."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich habe es."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Bring dein Tablett bitte zurück."
          ],
          [
            "speaker-b",
            "Schüler",
            "Mache ich, versprochen."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Und genieß dein Essen."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Guten Tag, was darf es denn sein?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich hätte gern das Gemüsecurry."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Leider ist das Curry schon aus."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was empfehlen Sie mir stattdessen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Das Hähnchen mit Reis ist heute sehr beliebt."
          ],
          [
            "speaker-b",
            "Schüler",
            "Gut, dann nehme ich das, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Möchtest du eine Beilage dazu?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Ein kleines Stück Brot, wenn es geht."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Selbstverständlich, hier bitte."
          ],
          [
            "speaker-b",
            "Schüler",
            "Und ein Glas Wasser, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Zahlst du bar oder mit Karte?"
          ],
          [
            "speaker-b",
            "Schüler",
            "Mit Karte, bitte."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Alles erledigt, guten Appetit."
          ],
          [
            "speaker-b",
            "Schüler",
            "Vielen Dank, das sieht lecker aus."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ich hoffe, es schmeckt dir."
          ],
          [
            "speaker-b",
            "Schüler",
            "Es riecht jedenfalls hervorragend."
          ]
        ]
      }
    ]
  },
  {
    "title": "Borrowing a book from the school library",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Bibliothekarin",
            "Hallo, kann ich helfen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, ich suche ein Buch über Tiere."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Für welches Alter?"
          ],
          [
            "speaker-b",
            "Kind",
            "Für neun Jahre."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Dann ist dieses Buch sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Oh, mit vielen Bildern."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Ja, und mit kurzen Texten."
          ],
          [
            "speaker-b",
            "Kind",
            "Kann ich es ausleihen?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Hast du deinen Ausweis dabei?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, hier ist er."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Danke, ich scanne ihn kurz."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange darf ich das Buch behalten?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Zwei Wochen."
          ],
          [
            "speaker-b",
            "Kind",
            "Kann ich es verlängern?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Ja, einmal per E-Mail."
          ],
          [
            "speaker-b",
            "Kind",
            "Super."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Bitte halte das Buch sauber."
          ],
          [
            "speaker-b",
            "Kind",
            "Natürlich."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Viel Spaß beim Lesen."
          ],
          [
            "speaker-b",
            "Kind",
            "Vielen Dank."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Bibliothekarin",
            "Kann ich dir helfen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, ich suche ein Buch über Weltraum."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Für dein Alter gibt es eine gute Reihe."
          ],
          [
            "speaker-b",
            "Kind",
            "Mit vielen Bildern?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Ja, und kurzen Erklärungen."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist perfekt."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Hier ist das Buch."
          ],
          [
            "speaker-b",
            "Kind",
            "Kann ich es ausleihen?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Hast du deinen Bibliotheksausweis?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, hier."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Danke, das dauert einen Moment."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange kann ich es behalten?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Drei Wochen."
          ],
          [
            "speaker-b",
            "Kind",
            "Kann ich es verlängern?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Ja, einmal kostenlos."
          ],
          [
            "speaker-b",
            "Kind",
            "Super, dann nehme ich es."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Viel Spaß beim Lesen."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, bis bald."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Bibliothekarin",
            "Guten Tag, wobei kann ich behilflich sein?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ich suche Literatur über das Sonnensystem."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Für den Sachkundeunterricht oder privat?"
          ],
          [
            "speaker-b",
            "Kind",
            "Für einen Vortrag in der Schule."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Dann empfehle ich dir dieses Sachbuch."
          ],
          [
            "speaker-b",
            "Kind",
            "Ist es für mein Alter geeignet?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Ja, es ist verständlich geschrieben und aktuell."
          ],
          [
            "speaker-b",
            "Kind",
            "Enthält es auch Diagramme?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Sogar mehrere, das hilft bei Präsentationen."
          ],
          [
            "speaker-b",
            "Kind",
            "Perfekt, das nehme ich."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Soll ich es dir auf deinen Ausweis buchen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, bitte, ich habe den Ausweis dabei."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Die Leihfrist beträgt vier Wochen."
          ],
          [
            "speaker-b",
            "Kind",
            "Reicht das für eine gute Vorbereitung?"
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Auf jeden Fall, du kannst es zudem einmal verlängern."
          ],
          [
            "speaker-b",
            "Kind",
            "Vielen Dank für die ausführliche Beratung."
          ],
          [
            "speaker-a",
            "Bibliothekarin",
            "Gern geschehen, viel Erfolg beim Vortrag."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, das motiviert mich sehr."
          ]
        ]
      }
    ]
  },
  {
    "title": "Science project in class",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Lehrer",
            "Heute bauen wir einen kleinen Vulkan."
          ],
          [
            "speaker-b",
            "Schüler",
            "Cool, was brauchen wir?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Wir brauchen eine Flasche, Essig und Natron."
          ],
          [
            "speaker-b",
            "Schüler",
            "Und Farbe?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Ja, rote Farbe für die Lava."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich hole die Flasche."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Gut, stell sie in die Mitte."
          ],
          [
            "speaker-b",
            "Schüler",
            "Jetzt kommt das Natron hinein."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Richtig, zwei Löffel sind genug."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was kommt als Nächstes?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Jetzt gießen wir den Essig dazu."
          ],
          [
            "speaker-b",
            "Schüler",
            "Oh, es schäumt!"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Genau, das ist die Reaktion."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das sieht wie echte Lava aus."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Sehr gut beobachtet."
          ],
          [
            "speaker-b",
            "Schüler",
            "Kann ich ein Foto machen?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Ja, aber ohne Blitz."
          ],
          [
            "speaker-b",
            "Schüler",
            "Okay, fertig."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Schreibt jetzt eure Beobachtungen auf."
          ],
          [
            "speaker-b",
            "Schüler",
            "Machen wir."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Lehrer",
            "Heute starten wir unser Experiment."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was bauen wir?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Einen kleinen Stromkreis."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was brauchen wir dafür?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Eine Batterie, Kabel und eine Lampe."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das habe ich alles gesehen."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Verbinde die Kabel richtig."
          ],
          [
            "speaker-b",
            "Schüler",
            "Die Batterie ist eingebaut."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Und jetzt die Lampe anschließen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Oh, sie leuchtet!"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Sehr gut gemacht."
          ],
          [
            "speaker-b",
            "Schüler",
            "Was passiert, wenn ich die Batterie wechsle?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Probiere es selbst aus."
          ],
          [
            "speaker-b",
            "Schüler",
            "Mit zwei Batterien ist es heller."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Genau, mehr Energie bedeutet mehr Licht."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das Experiment ist toll."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Notiert eure Beobachtungen."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich schreibe alles auf."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Lehrer",
            "Wir beschäftigen uns heute mit elektrischem Strom."
          ],
          [
            "speaker-b",
            "Schüler",
            "Wer hat den Strom eigentlich erfunden?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Entdeckt, möchte ich sagen — viele Forscher trugen dazu bei."
          ],
          [
            "speaker-b",
            "Schüler",
            "Zum Beispiel?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Ein bekannter Name ist Thomas Edison."
          ],
          [
            "speaker-b",
            "Schüler",
            "Er hat die Glühbirne gebaut?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Er hat sie zur Marktreife gebracht, nicht erfunden."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ach so, das wusste ich nicht."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Genau deshalb ist genaues Lesen so wichtig."
          ],
          [
            "speaker-b",
            "Schüler",
            "Welches Experiment machen wir jetzt?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Wir bauen einen Stromkreis mit einem Schalter."
          ],
          [
            "speaker-b",
            "Schüler",
            "Damit wir das Licht an- und ausschalten können?"
          ],
          [
            "speaker-a",
            "Lehrer",
            "Richtig, der Schalter unterbricht den Fluss."
          ],
          [
            "speaker-b",
            "Schüler",
            "Das klingt nach echter Physik."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Das ist echte Physik."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich probiere gleich mehrere Varianten aus."
          ],
          [
            "speaker-a",
            "Lehrer",
            "Dokumentiert eure Ergebnisse genau."
          ],
          [
            "speaker-b",
            "Schüler",
            "Ich führe ein Versuchsprotokoll."
          ]
        ]
      }
    ]
  },
  {
    "title": "Preparing a group presentation",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mila",
            "Unser Thema ist Das Wetter."
          ],
          [
            "speaker-b",
            "Noah",
            "Ja, ich mache den Teil über Regen."
          ],
          [
            "speaker-a",
            "Mila",
            "Ich spreche über Sonne und Hitze."
          ],
          [
            "speaker-b",
            "Noah",
            "Wer macht Wind und Schnee?"
          ],
          [
            "speaker-a",
            "Mila",
            "Das übernimmt Sara."
          ],
          [
            "speaker-b",
            "Noah",
            "Wie lang soll unser Vortrag sein?"
          ],
          [
            "speaker-a",
            "Mila",
            "Etwa fünf Minuten."
          ],
          [
            "speaker-b",
            "Noah",
            "Dann spricht jeder ungefähr eine Minute."
          ],
          [
            "speaker-a",
            "Mila",
            "Genau."
          ],
          [
            "speaker-b",
            "Noah",
            "Brauchen wir ein Plakat?"
          ],
          [
            "speaker-a",
            "Mila",
            "Ja, mit Bildern von Wolken und Sonne."
          ],
          [
            "speaker-b",
            "Noah",
            "Ich kann Bilder ausdrucken."
          ],
          [
            "speaker-a",
            "Mila",
            "Super, ich bringe Kleber mit."
          ],
          [
            "speaker-b",
            "Noah",
            "Wann üben wir?"
          ],
          [
            "speaker-a",
            "Mila",
            "Heute nach der Schule."
          ],
          [
            "speaker-b",
            "Noah",
            "Im Musikraum?"
          ],
          [
            "speaker-a",
            "Mila",
            "Ja, dort ist es ruhig."
          ],
          [
            "speaker-b",
            "Noah",
            "Okay, bis später."
          ],
          [
            "speaker-a",
            "Mila",
            "Vergiss deine Notizen nicht."
          ],
          [
            "speaker-b",
            "Noah",
            "Keine Sorge, ich habe sie dabei."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mila",
            "Hast du deine Bilder mitgebracht?"
          ],
          [
            "speaker-b",
            "Noah",
            "Ja, zehn Fotos."
          ],
          [
            "speaker-a",
            "Mila",
            "Prima, und ich habe die Texte fertig."
          ],
          [
            "speaker-b",
            "Noah",
            "Sollen wir noch einmal üben?"
          ],
          [
            "speaker-a",
            "Mila",
            "Ja, wir haben zwanzig Minuten Zeit."
          ],
          [
            "speaker-b",
            "Noah",
            "Wer beginnt?"
          ],
          [
            "speaker-a",
            "Mila",
            "Ich, dann kommst du."
          ],
          [
            "speaker-b",
            "Noah",
            "Und Sara macht den Schluss?"
          ],
          [
            "speaker-a",
            "Mila",
            "Genau, so läuft es rund."
          ],
          [
            "speaker-b",
            "Noah",
            "Rede nicht zu schnell."
          ],
          [
            "speaker-a",
            "Mila",
            "Danke für den Tipp."
          ],
          [
            "speaker-b",
            "Noah",
            "Ich zeige die Bilder, während du sprichst."
          ],
          [
            "speaker-a",
            "Mila",
            "Das passt gut zusammen."
          ],
          [
            "speaker-b",
            "Noah",
            "Wie lange dauert unser Teil?"
          ],
          [
            "speaker-a",
            "Mila",
            "Etwa zwei Minuten."
          ],
          [
            "speaker-b",
            "Noah",
            "Das schaffen wir."
          ],
          [
            "speaker-a",
            "Mila",
            "Dann sind wir bereit."
          ],
          [
            "speaker-b",
            "Noah",
            "Morgen klappt es bestimmt."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mila",
            "Haben wir unser Material für den Vortrag vollständig?"
          ],
          [
            "speaker-b",
            "Noah",
            "Ja, ich habe die Statistiken aktualisiert."
          ],
          [
            "speaker-a",
            "Mila",
            "Ich habe mir überlegt, mit einem Zitat zu beginnen."
          ],
          [
            "speaker-b",
            "Noah",
            "Eine starke Einleitung fesselt das Publikum."
          ],
          [
            "speaker-a",
            "Mila",
            "Genau, danach erklären wir die Grundlagen."
          ],
          [
            "speaker-b",
            "Noah",
            "Und anschließend präsentieren wir die Ergebnisse."
          ],
          [
            "speaker-a",
            "Mila",
            "Wie teilen wir die Redezeit auf?"
          ],
          [
            "speaker-b",
            "Noah",
            "Ich würde jedem von uns drei Minuten geben."
          ],
          [
            "speaker-a",
            "Mila",
            "Das reicht, wenn wir uns an die Kernpunkte halten."
          ],
          [
            "speaker-b",
            "Noah",
            "Wir sollten außerdem Blickkontakt halten."
          ],
          [
            "speaker-a",
            "Mila",
            "Und nicht von den Folien ablesen."
          ],
          [
            "speaker-b",
            "Noah",
            "Guter Einwand, die Folien sind nur eine Stütze."
          ],
          [
            "speaker-a",
            "Mila",
            "Wollen wir eine Generalprobe machen?"
          ],
          [
            "speaker-b",
            "Noah",
            "Unbedingt, und zwar mit Stoppuhr."
          ],
          [
            "speaker-a",
            "Mila",
            "Wenn wir die Zeit im Griff haben, sind wir entspannt."
          ],
          [
            "speaker-b",
            "Noah",
            "Ich bin zuversichtlich, dass es klappt."
          ],
          [
            "speaker-a",
            "Mila",
            "Dann geben wir morgen unser Bestes."
          ]
        ]
      }
    ]
  },
  {
    "title": "Parent and teacher conversation",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Guten Tag, Frau Meier."
          ],
          [
            "speaker-b",
            "Mutter",
            "Guten Tag, Frau Schulz."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wir sprechen heute über Jonas."
          ],
          [
            "speaker-b",
            "Mutter",
            "Ja, gern."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Er arbeitet gut im Unterricht."
          ],
          [
            "speaker-b",
            "Mutter",
            "Das freut mich sehr."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "In Mathe ist er sehr sicher."
          ],
          [
            "speaker-b",
            "Mutter",
            "Zu Hause rechnet er gern."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Beim Lesen braucht er noch Übung."
          ],
          [
            "speaker-b",
            "Mutter",
            "Wie können wir helfen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Lesen Sie jeden Abend zehn Minuten mit ihm."
          ],
          [
            "speaker-b",
            "Mutter",
            "Das machen wir."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Er ist freundlich zu anderen Kindern."
          ],
          [
            "speaker-b",
            "Mutter",
            "Ja, er spielt gern im Team."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Nächste Woche schreiben wir einen kleinen Test."
          ],
          [
            "speaker-b",
            "Mutter",
            "Danke für die Information."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Haben Sie noch Fragen?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Nein, das war sehr hilfreich."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Dann wünsche ich einen schönen Tag."
          ],
          [
            "speaker-b",
            "Mutter",
            "Ihnen auch."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Guten Tag, Frau Meier."
          ],
          [
            "speaker-b",
            "Mutter",
            "Guten Tag, Frau Schulz."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Danke, dass Sie gekommen sind."
          ],
          [
            "speaker-b",
            "Mutter",
            "Gern, ich wollte mich informieren."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Jonas macht gute Fortschritte."
          ],
          [
            "speaker-b",
            "Mutter",
            "Das freut mich zu hören."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Besonders in Deutsch ist er stärker geworden."
          ],
          [
            "speaker-b",
            "Mutter",
            "Er liest zu Hause viel."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das sieht man deutlich."
          ],
          [
            "speaker-b",
            "Mutter",
            "Und in Mathe?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Da braucht er noch etwas Übung."
          ],
          [
            "speaker-b",
            "Mutter",
            "Wir können zu Hause üben."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das wäre eine große Hilfe."
          ],
          [
            "speaker-b",
            "Mutter",
            "Ich kaufe ein Übungsheft."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gute Idee."
          ],
          [
            "speaker-b",
            "Mutter",
            "Danke für das Gespräch."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wir sprechen uns bald wieder."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Guten Tag, Frau Meier, vielen Dank fürs Kommen."
          ],
          [
            "speaker-b",
            "Mutter",
            "Gern, das Gespräch war mir wichtig."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ich möchte über die Entwicklung von Jonas sprechen."
          ],
          [
            "speaker-b",
            "Mutter",
            "Bitte, ich bin gespannt."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "In den letzten Wochen hat er deutlich an Selbstvertrauen gewonnen."
          ],
          [
            "speaker-b",
            "Mutter",
            "Das freut mich, er war früher sehr schüchtern."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Er meldet sich jetzt regelmäßig im Unterricht."
          ],
          [
            "speaker-b",
            "Mutter",
            "Er erzählt zu Hause auch öfter von der Schule."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Allerdings fällt ihm das Aufsatzschreiben noch schwer."
          ],
          [
            "speaker-b",
            "Mutter",
            "Woran liegt das Ihrer Meinung nach?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Er hat viele Ideen, aber es fehlt an Struktur."
          ],
          [
            "speaker-b",
            "Mutter",
            "Wie können wir ihn dabei unterstützen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Beginnen Sie mit einer einfachen Gliederung."
          ],
          [
            "speaker-b",
            "Mutter",
            "Das können wir gut üben."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wenn er eine Gliederung hat, schreibt er sicherer."
          ],
          [
            "speaker-b",
            "Mutter",
            "Vielen Dank für die konkreten Tipps."
          ]
        ]
      }
    ]
  },
  {
    "title": "Inviting a friend to a birthday party",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Hallo Leo, hast du am Samstag Zeit?"
          ],
          [
            "speaker-b",
            "Leo",
            "Ja, warum?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich habe Geburtstag und mache eine Party."
          ],
          [
            "speaker-b",
            "Leo",
            "Oh toll, wie spät beginnt sie?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Um drei Uhr nachmittags."
          ],
          [
            "speaker-b",
            "Leo",
            "Wo ist die Party?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Bei uns zu Hause im Garten."
          ],
          [
            "speaker-b",
            "Leo",
            "Wie lange dauert sie?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Bis etwa sieben Uhr."
          ],
          [
            "speaker-b",
            "Leo",
            "Was machen wir dort?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Wir spielen Spiele und essen Kuchen."
          ],
          [
            "speaker-b",
            "Leo",
            "Super, ich komme gern."
          ],
          [
            "speaker-a",
            "Kind A",
            "Kannst du auch deine Schwester mitbringen?"
          ],
          [
            "speaker-b",
            "Leo",
            "Ich frage meine Mama."
          ],
          [
            "speaker-a",
            "Kind A",
            "Okay, gib mir morgen Bescheid."
          ],
          [
            "speaker-b",
            "Leo",
            "Mache ich."
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich freue mich schon."
          ],
          [
            "speaker-b",
            "Leo",
            "Ich mich auch."
          ],
          [
            "speaker-a",
            "Kind A",
            "Vergiss bitte nicht, pünktlich zu kommen."
          ],
          [
            "speaker-b",
            "Leo",
            "Keine Sorge."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Leo, hast du am Sonntag Zeit?"
          ],
          [
            "speaker-b",
            "Leo",
            "Ich glaube schon, warum?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich feiere meinen Geburtstag."
          ],
          [
            "speaker-b",
            "Leo",
            "Oh, alles Gute!"
          ],
          [
            "speaker-a",
            "Kind A",
            "Danke. Kommst du zu meiner Party?"
          ],
          [
            "speaker-b",
            "Leo",
            "Sehr gern, wann beginnt sie?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Um zwei Uhr."
          ],
          [
            "speaker-b",
            "Leo",
            "Wo findet sie statt?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Im Gemeindezentrum."
          ],
          [
            "speaker-b",
            "Leo",
            "Was machen wir dort?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Es gibt Spiele und eine Disco."
          ],
          [
            "speaker-b",
            "Leo",
            "Das klingt super!"
          ],
          [
            "speaker-a",
            "Kind A",
            "Kannst du etwas zu essen mitbringen?"
          ],
          [
            "speaker-b",
            "Leo",
            "Ja, ich bringe einen Kuchen mit."
          ],
          [
            "speaker-a",
            "Kind A",
            "Das ist nett, danke."
          ],
          [
            "speaker-b",
            "Leo",
            "Ich freue mich schon."
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich auch, bis Sonntag."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Leo, hast du am Wochenende schon Pläne?"
          ],
          [
            "speaker-b",
            "Leo",
            "Noch nicht konkret, wieso?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich organisiere meine Geburtstagsfeier."
          ],
          [
            "speaker-b",
            "Leo",
            "Wann genau soll die Feier stattfinden?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Am Samstagabend, ab sechs Uhr."
          ],
          [
            "speaker-b",
            "Leo",
            "Und wo, wenn ich fragen darf?"
          ],
          [
            "speaker-a",
            "Kind A",
            "In unserem Garten, bei gutem Wetter sogar mit Grillen."
          ],
          [
            "speaker-b",
            "Leo",
            "Das hört sich nach einem tollen Abend an."
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich wollte dich fragen, ob du kommen kannst."
          ],
          [
            "speaker-b",
            "Leo",
            "Sehr gerne, ich bestätige dir morgen genau."
          ],
          [
            "speaker-a",
            "Kind A",
            "Sag Bescheid, falls du etwas mitbringen möchtest."
          ],
          [
            "speaker-b",
            "Leo",
            "Ich könnte einen Salat beisteuern."
          ],
          [
            "speaker-a",
            "Kind A",
            "Das wäre super, danke."
          ],
          [
            "speaker-b",
            "Leo",
            "Soll ich etwas Bestimmtes anziehen?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Nur bequem, wir spielen draußen."
          ],
          [
            "speaker-b",
            "Leo",
            "Ich freue mich riesig darauf."
          ],
          [
            "speaker-a",
            "Kind A",
            "Es wird bestimmt ein schöner Abend."
          ]
        ]
      }
    ]
  },
  {
    "title": "Birthday party games",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Gastgeberin",
            "Willkommen zu meinem Geburtstag."
          ],
          [
            "speaker-b",
            "Kinder",
            "Alles Gute zum Geburtstag!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Danke, schön, dass ihr da seid."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann spielen wir Topfschlagen?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Gleich nach dem Saft."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich möchte zuerst suchen."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Okay, du bekommst die Augenbinde."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich sehe nichts mehr."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Wir klatschen, wenn du nah bist."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich höre euch."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Noch ein Schritt nach links."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Ja, genau dort."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe den Topf gefunden!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Super, hier ist deine Überraschung."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Als Nächstes spielen wir Stopptanz."
          ],
          [
            "speaker-b",
            "Kinder",
            "Jaaa!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Musik an und los."
          ],
          [
            "speaker-b",
            "Kinder",
            "Das macht richtig Spaß."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Gastgeberin",
            "Jetzt spielen wir Schokoladen-Wettessen."
          ],
          [
            "speaker-b",
            "Kinder",
            "Juhu!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Ihr braucht einen Würfel."
          ],
          [
            "speaker-b",
            "Kind",
            "Wer würfelt zuerst?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Der Jüngste beginnt."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe eine Vier."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Dann ist der Nächste dran."
          ],
          [
            "speaker-b",
            "Kind",
            "Eine Sechs!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Jetzt darfst du die Schokolade essen."
          ],
          [
            "speaker-b",
            "Kind",
            "Nur ein Stück?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Ja, mit Messer und Gabel."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist gar nicht so einfach."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Deshalb ist es ein Spiel."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt bin ich wieder dran."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Viel Glück."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe gewonnen!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Herzlichen Glückwunsch."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Gastgeberin",
            "Als Nächstes spielen wir eine Schnitzeljagd."
          ],
          [
            "speaker-b",
            "Kinder",
            "Wie funktioniert das?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Ihr sucht Hinweise im ganzen Garten."
          ],
          [
            "speaker-b",
            "Kind",
            "Was bekommen wir am Ende?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Einen kleinen Schatz, natürlich."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie viele Hinweise gibt es?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Zehn, und jeder führt zum nächsten."
          ],
          [
            "speaker-b",
            "Kind",
            "Arbeiten wir zusammen oder einzeln?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "In zwei Gruppen, so ist es fair."
          ],
          [
            "speaker-b",
            "Kind",
            "Und wer gewinnt?"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Die Gruppe, die den Schatz zuerst findet."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir müssen die Hinweise genau lesen."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Genau, einige sind sogar versteckt."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich sehe einen Hinweis unter der Bank!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Gut beobachtet, ihr seid schon nah dran."
          ],
          [
            "speaker-b",
            "Kind",
            "Weiter geht es zur großen Eiche."
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Die Lösung ist gar nicht weit."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben den Schatz gefunden!"
          ],
          [
            "speaker-a",
            "Gastgeberin",
            "Herzlichen Glückwunsch, ihr wart schneller."
          ]
        ]
      }
    ]
  },
  {
    "title": "Sleepover at a friend house",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Gastkind",
            "Danke, dass ich heute hier schlafen darf."
          ],
          [
            "speaker-b",
            "Freundin",
            "Gern, ich freue mich."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Wo kann ich meinen Schlafsack hinlegen?"
          ],
          [
            "speaker-b",
            "Freundin",
            "Neben mein Bett."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Hast du ein extra Kissen?"
          ],
          [
            "speaker-b",
            "Freundin",
            "Ja, im Schrank ist eins."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Super, danke."
          ],
          [
            "speaker-b",
            "Freundin",
            "Wollen wir noch ein Spiel spielen?"
          ],
          [
            "speaker-a",
            "Gastkind",
            "Ja, vielleicht Karten."
          ],
          [
            "speaker-b",
            "Freundin",
            "Gute Idee."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Um wie viel Uhr schlafen wir?"
          ],
          [
            "speaker-b",
            "Freundin",
            "Meine Mama sagt um zehn Uhr."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Okay, das passt."
          ],
          [
            "speaker-b",
            "Freundin",
            "Willst du vorher noch Zähne putzen?"
          ],
          [
            "speaker-a",
            "Gastkind",
            "Ja, ich gehe jetzt ins Bad."
          ],
          [
            "speaker-b",
            "Freundin",
            "Ich komme mit."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Morgen früh frühstücken wir zusammen?"
          ],
          [
            "speaker-b",
            "Freundin",
            "Ja, es gibt Pfannkuchen."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Lecker!"
          ],
          [
            "speaker-b",
            "Freundin",
            "Gute Nacht gleich."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Gastkind",
            "Danke, dass ich übernachten darf."
          ],
          [
            "speaker-b",
            "Freundin",
            "Gern, ich freue mich."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Wo schlafe ich?"
          ],
          [
            "speaker-b",
            "Freundin",
            "In meinem Zimmer, auf der Luftmatratze."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Super, das ist bequem."
          ],
          [
            "speaker-b",
            "Freundin",
            "Ich habe dir ein Kissen hingelegt."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Danke, das ist lieb."
          ],
          [
            "speaker-b",
            "Freundin",
            "Wollen wir einen Film schauen?"
          ],
          [
            "speaker-a",
            "Gastkind",
            "Ja, welchen?"
          ],
          [
            "speaker-b",
            "Freundin",
            "Einen lustigen mit Tieren."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Gute Wahl."
          ],
          [
            "speaker-b",
            "Freundin",
            "Ich mache uns Popcorn."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Das ist lecker."
          ],
          [
            "speaker-b",
            "Freundin",
            "Und danach erzählen wir Geschichten."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Bis wir müde werden."
          ],
          [
            "speaker-b",
            "Freundin",
            "Genau, gute Idee."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Das wird eine schöne Nacht."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Gastkind",
            "Vielen Dank, dass ich bei euch übernachten darf."
          ],
          [
            "speaker-b",
            "Freundin",
            "Ich freue mich schon den ganzen Tag darauf."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Ich auch, wir haben so viel vor."
          ],
          [
            "speaker-b",
            "Freundin",
            "Zuerst essen wir Abendbrot mit meinen Eltern."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Wann gibt es das Essen?"
          ],
          [
            "speaker-b",
            "Freundin",
            "Um sieben Uhr, also in zwanzig Minuten."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Ich habe ein bisschen Hunger."
          ],
          [
            "speaker-b",
            "Freundin",
            "Danach können wir im Wohnzimmer Filme schauen."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Hast du einen Filmvorschlag?"
          ],
          [
            "speaker-b",
            "Freundin",
            "Ich hätte an eine Komödie gedacht."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Perfekt, die mag ich am liebsten."
          ],
          [
            "speaker-b",
            "Freundin",
            "Und wenn wir müde sind, ziehen wir uns zurück."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Ich bin gespannt, wie lange wir wach bleiben."
          ],
          [
            "speaker-b",
            "Freundin",
            "Letztes Mal haben wir es bis Mitternacht geschafft."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Das versuchen wir heute zu toppen."
          ],
          [
            "speaker-b",
            "Freundin",
            "Abgemacht, das wird eine lange Nacht."
          ],
          [
            "speaker-a",
            "Gastkind",
            "Ich habe Glück, eine solche Freundin zu haben."
          ]
        ]
      }
    ]
  },
  {
    "title": "Visiting grandparents",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Oma",
            "Hallo ihr Lieben, kommt rein."
          ],
          [
            "speaker-b",
            "Kind",
            "Hallo Oma, hallo Opa."
          ],
          [
            "speaker-a",
            "Opa",
            "Schön, dass ihr da seid."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben Blumen mitgebracht."
          ],
          [
            "speaker-a",
            "Oma",
            "Wie nett, danke."
          ],
          [
            "speaker-b",
            "Kind",
            "Dürfen wir im Garten spielen?"
          ],
          [
            "speaker-a",
            "Opa",
            "Ja, aber zieht Jacken an."
          ],
          [
            "speaker-b",
            "Kind",
            "Es ist heute windig."
          ],
          [
            "speaker-a",
            "Oma",
            "Ich mache später Kakao für euch."
          ],
          [
            "speaker-b",
            "Kind",
            "Super!"
          ],
          [
            "speaker-a",
            "Opa",
            "Möchtest du mir beim Pflanzen helfen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, sehr gern."
          ],
          [
            "speaker-a",
            "Opa",
            "Hier sind kleine Handschuhe."
          ],
          [
            "speaker-b",
            "Kind",
            "Die passen gut."
          ],
          [
            "speaker-a",
            "Oma",
            "In zehn Minuten gibt es Kuchen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich liebe deinen Apfelkuchen."
          ],
          [
            "speaker-a",
            "Oma",
            "Dann nehme ich ein großes Stück für dich."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, Oma."
          ],
          [
            "speaker-a",
            "Opa",
            "Der Nachmittag wird schön."
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, wir bleiben bis Abend."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Oma",
            "Kommt herein, zieht eure Jacken aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Hallo Oma, hallo Opa."
          ],
          [
            "speaker-a",
            "Opa",
            "Schön, dass ihr da seid."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben euch einen Kuchen mitgebracht."
          ],
          [
            "speaker-a",
            "Oma",
            "Das ist aber lieb."
          ],
          [
            "speaker-b",
            "Kind",
            "Dürfen wir im Garten spielen?"
          ],
          [
            "speaker-a",
            "Opa",
            "Ja, das Wetter ist schön."
          ],
          [
            "speaker-b",
            "Kind",
            "Gibt es ein neues Spiel?"
          ],
          [
            "speaker-a",
            "Oma",
            "Wir haben ein Federballset gekauft."
          ],
          [
            "speaker-b",
            "Kind",
            "Toll, das probieren wir aus."
          ],
          [
            "speaker-a",
            "Opa",
            "Wer spielt mit?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ich und mein Bruder."
          ],
          [
            "speaker-a",
            "Oma",
            "Ich schaue euch zu."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Ball fliegt schon."
          ],
          [
            "speaker-a",
            "Opa",
            "Sehr gut geschlagen."
          ],
          [
            "speaker-b",
            "Kind",
            "Das macht Spaß."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Oma",
            "Kommt herein, wir haben schon auf euch gewartet."
          ],
          [
            "speaker-b",
            "Kind",
            "Hallo, wir haben eine Überraschung dabei."
          ],
          [
            "speaker-a",
            "Opa",
            "Wirklich? Erzählt uns davon."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben ein Fotoalbum mit unseren Urlaubsbildern gemacht."
          ],
          [
            "speaker-a",
            "Oma",
            "Wie schön, das schauen wir uns nachher an."
          ],
          [
            "speaker-b",
            "Kind",
            "Und wir wollen euch beim Kuchenbacken helfen."
          ],
          [
            "speaker-a",
            "Opa",
            "Dann gehen wir jetzt in die Küche."
          ],
          [
            "speaker-b",
            "Kind",
            "Was backen wir?"
          ],
          [
            "speaker-a",
            "Oma",
            "Euren Lieblingsapfelkuchen, natürlich."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich kann die Äpfel schälen."
          ],
          [
            "speaker-a",
            "Oma",
            "Sehr aufmerksam von dir."
          ],
          [
            "speaker-b",
            "Kind",
            "Und ich rühre den Teig."
          ],
          [
            "speaker-a",
            "Opa",
            "Dann machen wir das zusammen."
          ],
          [
            "speaker-b",
            "Kind",
            "Während der Kuchen backt, spielen wir Karten."
          ],
          [
            "speaker-a",
            "Oma",
            "Einverstanden, die Zeit vergeht dann schneller."
          ],
          [
            "speaker-b",
            "Kind",
            "Bei euch ist es immer so gemütlich."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the zoo with school",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Kinder, wir sind jetzt im Zoo."
          ],
          [
            "speaker-b",
            "Kinder",
            "Juhu!"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Bitte bleibt in eurer Gruppe."
          ],
          [
            "speaker-b",
            "Kind",
            "Dürfen wir zuerst zu den Affen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ja, aber langsam gehen."
          ],
          [
            "speaker-b",
            "Kind",
            "Die Affen sind lustig."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Was machen sie gerade?"
          ],
          [
            "speaker-b",
            "Kind",
            "Einer klettert auf den Baum."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut beobachtet."
          ],
          [
            "speaker-b",
            "Kind",
            "Danach möchte ich die Giraffen sehen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Die sind auf der rechten Seite."
          ],
          [
            "speaker-b",
            "Kind",
            "Sie sind wirklich sehr groß."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Wer weiß, was Giraffen essen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Blätter von hohen Bäumen."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Richtig."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann machen wir Pause?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Um zwölf Uhr beim Spielplatz."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe ein Brot dabei."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut vorbereitet."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Ausflug ist toll."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Wir sehen uns jetzt die Elefanten an."
          ],
          [
            "speaker-b",
            "Kind",
            "Wo sind sie?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Im großen Gehege rechts."
          ],
          [
            "speaker-b",
            "Kind",
            "Da ist eine ganze Familie!"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Zählt ihr die Tiere?"
          ],
          [
            "speaker-b",
            "Kind",
            "Eins, zwei, drei... sechs Elefanten."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gut gezählt."
          ],
          [
            "speaker-b",
            "Kind",
            "Was fressen Elefanten?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Pflanzen, Blätter und Obst."
          ],
          [
            "speaker-b",
            "Kind",
            "Sie sind so groß."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sie sind die größten Landtiere."
          ],
          [
            "speaker-b",
            "Kind",
            "Können sie schwimmen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Ja, sogar sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Das wusste ich nicht."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Der Tierpark ist lehrreich, oder?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, ich lerne viel Neues."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Lehrerin",
            "Wir besuchen jetzt das neue Nashorngehege."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie alt ist das Nashorn?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Es ist vier Jahre alt und heißt Nala."
          ],
          [
            "speaker-b",
            "Kind",
            "Warum steht es allein da?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Es ist gerade angekommen und braucht Zeit zum Eingewöhnen."
          ],
          [
            "speaker-b",
            "Kind",
            "Muss es sich erst an die Umgebung gewöhnen?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Genau, neue Umgebungen sind zunächst stressig."
          ],
          [
            "speaker-b",
            "Kind",
            "Und woran erkennt man, dass es sich wohlfühlt?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Es frisst regelmäßig und bewegt sich entspannt."
          ],
          [
            "speaker-b",
            "Kind",
            "Es liegt gerade ganz ruhig im Schlamm."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Das Schlammbad schützt seine Haut."
          ],
          [
            "speaker-b",
            "Kind",
            "Interessant, das habe ich nicht gewusst."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Tiere haben erstaunliche Überlebenstricks."
          ],
          [
            "speaker-b",
            "Kind",
            "Können wir noch etwas über die Herkunft erfahren?"
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Sehr gern, dazu gibt es eine Tafel mit Informationen."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann lese ich sie gleich."
          ],
          [
            "speaker-a",
            "Lehrerin",
            "Gut, dass du so wissbegierig bist."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the pet shop",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Verkäuferin",
            "Hallo, kann ich helfen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, wir schauen nach einem Hamster."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Möchtet ihr einen jungen Hamster?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, er soll klein und ruhig sein."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Hier sind zwei Hamster."
          ],
          [
            "speaker-b",
            "Kind",
            "Der braune gefällt mir."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Er ist sehr freundlich."
          ],
          [
            "speaker-b",
            "Kind",
            "Was frisst ein Hamster?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Spezialfutter, Gemüse und etwas Obst."
          ],
          [
            "speaker-b",
            "Kind",
            "Brauchen wir einen großen Käfig?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Ja, mit Laufrad und Häuschen."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie oft muss man sauber machen?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Einmal pro Woche gründlich."
          ],
          [
            "speaker-b",
            "Kind",
            "Kann ich ihn sofort anfassen?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Besser erst nach zwei Tagen."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay, dann hat er Ruhe."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Das ist eine gute Idee."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir denken noch kurz nach."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Nehmt euch Zeit."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke für die Hilfe."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Verkäuferin",
            "Habt ihr euch schon entschieden?"
          ],
          [
            "speaker-b",
            "Kind",
            "Fast, wir schauen uns die Wellensittiche an."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Die sind sehr gesellig."
          ],
          [
            "speaker-b",
            "Kind",
            "Können sie sprechen?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Manche lernen ein paar Wörter."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist lustig."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Sie brauchen viel Platz."
          ],
          [
            "speaker-b",
            "Kind",
            "Welchen Käfig empfiehlst du?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Einen mit mindestens einem Meter Breite."
          ],
          [
            "speaker-b",
            "Kind",
            "Und was fressen sie?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Körner, Obst und Grünfutter."
          ],
          [
            "speaker-b",
            "Kind",
            "Das klingt einfach."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Aber sie brauchen täglich Freiflug."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben ein großes Zimmer."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Das ist perfekt."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann nehmen wir zwei Wellensittiche."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Eine gute Entscheidung."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Verkäuferin",
            "Guten Tag, kann ich euch beraten?"
          ],
          [
            "speaker-b",
            "Kind",
            "Wir überlegen, ob wir uns ein Haustier zulegen."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Welche Tiere habt ihr denn schon in Betracht gezogen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Einen Hamster oder ein Meerschweinchen."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Beide sind pflegeleicht, aber sehr unterschiedlich."
          ],
          [
            "speaker-b",
            "Kind",
            "Inwiefern?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Hamster sind nachtaktiv, Meerschweinchen eher tagaktiv."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann wäre ein Meerschweinchen besser für uns."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Bedenkt allerdings: Meerschweinchen sollte man nicht allein halten."
          ],
          [
            "speaker-b",
            "Kind",
            "Also gleich zwei?"
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Ja, oder ein Pärchen aus dem Tierschutz."
          ],
          [
            "speaker-b",
            "Kind",
            "Guter Hinweis, das klingt sinnvoll."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Außerdem brauchen sie täglich frisches Heu."
          ],
          [
            "speaker-b",
            "Kind",
            "Das können wir organisieren."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Wenn ihr euch gut informiert, wird es ein schönes Zusammenleben."
          ],
          [
            "speaker-b",
            "Kind",
            "Vielen Dank für die ehrliche Beratung."
          ],
          [
            "speaker-a",
            "Verkäuferin",
            "Gern geschehen, kommt gern noch einmal wieder."
          ]
        ]
      }
    ]
  },
  {
    "title": "Feeding the family cat",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Paul, hast du die Katze schon gefüttert?"
          ],
          [
            "speaker-b",
            "Paul",
            "Noch nicht, ich mache es jetzt."
          ],
          [
            "speaker-a",
            "Mutter",
            "Das Futter steht im Schrank."
          ],
          [
            "speaker-b",
            "Paul",
            "Welches soll ich nehmen?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Heute das mit Huhn."
          ],
          [
            "speaker-b",
            "Paul",
            "Okay, ich öffne die Dose."
          ],
          [
            "speaker-a",
            "Mutter",
            "Nimm bitte nur eine halbe Dose."
          ],
          [
            "speaker-b",
            "Paul",
            "Warum nur eine halbe?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Weil sie später noch einmal frisst."
          ],
          [
            "speaker-b",
            "Paul",
            "Verstanden."
          ],
          [
            "speaker-a",
            "Mutter",
            "Gib ihr auch frisches Wasser."
          ],
          [
            "speaker-b",
            "Paul",
            "Der Napf ist jetzt voll."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Paul",
            "Sie miaut ganz laut."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sie freut sich auf das Essen."
          ],
          [
            "speaker-b",
            "Paul",
            "Jetzt frisst sie schon."
          ],
          [
            "speaker-a",
            "Mutter",
            "Du kümmerst dich toll um sie."
          ],
          [
            "speaker-b",
            "Paul",
            "Danke, ich mag unsere Katze sehr."
          ],
          [
            "speaker-a",
            "Mutter",
            "Später kannst du noch mit ihr spielen."
          ],
          [
            "speaker-b",
            "Paul",
            "Ja, mit dem roten Ball."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Paul, hast du die Katze gefüttert?"
          ],
          [
            "speaker-b",
            "Paul",
            "Noch nicht, ich mache es gleich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Das Futter steht im Schrank."
          ],
          [
            "speaker-b",
            "Paul",
            "Die Dose mit dem Fisch?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Ja, die ist neu."
          ],
          [
            "speaker-b",
            "Paul",
            "Wie viel gebe ich ihr?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Eine halbe Dose ist genug."
          ],
          [
            "speaker-b",
            "Paul",
            "Und Wasser?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Der Napf ist noch voll."
          ],
          [
            "speaker-b",
            "Paul",
            "Sie wartet schon an der Tür."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sie hat Hunger."
          ],
          [
            "speaker-b",
            "Paul",
            "Hier, dein Futter ist da."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sie frisst sofort."
          ],
          [
            "speaker-b",
            "Paul",
            "Sie mag den Fisch."
          ],
          [
            "speaker-a",
            "Mutter",
            "Das freut mich."
          ],
          [
            "speaker-b",
            "Paul",
            "Darf ich sie danach streicheln?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Natürlich, aber vorsichtig."
          ],
          [
            "speaker-b",
            "Paul",
            "Sie schnurrt schon."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Paul, hast du daran gedacht, den Futternapf aufzufüllen?"
          ],
          [
            "speaker-b",
            "Paul",
            "Oh, das habe ich vergessen, ich war mit Hausaufgaben beschäftigt."
          ],
          [
            "speaker-a",
            "Mutter",
            "Unsere Katze wartet schon geduldig in der Küche."
          ],
          [
            "speaker-b",
            "Paul",
            "Ich hole sofort die neue Dose."
          ],
          [
            "speaker-a",
            "Mutter",
            "Achte darauf, das alte Futter zu entsorgen."
          ],
          [
            "speaker-b",
            "Paul",
            "Guter Punkt, frisches Futter sollte es schon sein."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und wie viel gibst du ihr?"
          ],
          [
            "speaker-b",
            "Paul",
            "Ich richte mich nach der Anleitung, etwa 200 Gramm."
          ],
          [
            "speaker-a",
            "Mutter",
            "Das ist genau richtig."
          ],
          [
            "speaker-b",
            "Paul",
            "Soll ich auch das Wasser wechseln?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Ja, Katzen trinken lieber frisches Wasser."
          ],
          [
            "speaker-b",
            "Paul",
            "Dann fülle ich den Napf gleich auf."
          ],
          [
            "speaker-a",
            "Mutter",
            "Danach könnt ihr euch beide ein Stündchen ausruhen."
          ],
          [
            "speaker-b",
            "Paul",
            "Sie legt sich sowieso gern auf mein Bett."
          ],
          [
            "speaker-a",
            "Mutter",
            "Genießt eure gemeinsame Zeit."
          ],
          [
            "speaker-b",
            "Paul",
            "Das mache ich, danke für die Erinnerung."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the playground slide",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Die Rutsche ist heute frei."
          ],
          [
            "speaker-b",
            "Kind B",
            "Dann gehen wir hoch."
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich klettere über die Leiter."
          ],
          [
            "speaker-b",
            "Kind B",
            "Ich nehme die Treppe."
          ],
          [
            "speaker-a",
            "Kind A",
            "Bist du bereit?"
          ],
          [
            "speaker-b",
            "Kind B",
            "Ja, ich rutsche jetzt."
          ],
          [
            "speaker-a",
            "Kind A",
            "Wow, du warst schnell."
          ],
          [
            "speaker-b",
            "Kind B",
            "Jetzt bist du dran."
          ],
          [
            "speaker-a",
            "Kind A",
            "Okay, ich komme."
          ],
          [
            "speaker-b",
            "Kind B",
            "Warte unten, ich fange dich."
          ],
          [
            "speaker-a",
            "Kind A",
            "Das brauche ich nicht, aber danke."
          ],
          [
            "speaker-b",
            "Kind B",
            "Sollen wir ein Rennen machen?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Ja, wer dreimal zuerst unten ist."
          ],
          [
            "speaker-b",
            "Kind B",
            "Abgemacht."
          ],
          [
            "speaker-a",
            "Kind A",
            "Eins, zwei, drei, los!"
          ],
          [
            "speaker-b",
            "Kind B",
            "Ich bin Erster."
          ],
          [
            "speaker-a",
            "Kind A",
            "Nur knapp."
          ],
          [
            "speaker-b",
            "Kind B",
            "Noch eine Runde?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Ja, die letzte Runde."
          ],
          [
            "speaker-b",
            "Kind B",
            "Das macht richtig Spaß."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Die Rutsche ist frei!"
          ],
          [
            "speaker-b",
            "Kind B",
            "Komm, wir gehen hoch."
          ],
          [
            "speaker-a",
            "Kind A",
            "Du zuerst oder ich?"
          ],
          [
            "speaker-b",
            "Kind B",
            "Du kannst anfangen."
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich bin schon oben."
          ],
          [
            "speaker-b",
            "Kind B",
            "Rutsch los!"
          ],
          [
            "speaker-a",
            "Kind A",
            "Das war schnell."
          ],
          [
            "speaker-b",
            "Kind B",
            "Jetzt bin ich dran."
          ],
          [
            "speaker-a",
            "Kind A",
            "Pass auf, ich komme hinter dir."
          ],
          [
            "speaker-b",
            "Kind B",
            "Warte kurz, ich bin noch nicht unten."
          ],
          [
            "speaker-a",
            "Kind A",
            "Okay, jetzt ist die Bahn frei."
          ],
          [
            "speaker-b",
            "Kind B",
            "Fertig, ich habe die Rutsche."
          ],
          [
            "speaker-a",
            "Kind A",
            "Wir sind ein gutes Team."
          ],
          [
            "speaker-b",
            "Kind B",
            "Noch zehn Minuten?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Ja, dann müssen wir nach Hause."
          ],
          [
            "speaker-b",
            "Kind B",
            "Eine letzte Runde."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Die große Rutsche ist endlich frei."
          ],
          [
            "speaker-b",
            "Kind B",
            "Perfekt, da müssen wir hin, bevor andere kommen."
          ],
          [
            "speaker-a",
            "Kind A",
            "Du hast recht, sie ist beliebt."
          ],
          [
            "speaker-b",
            "Kind B",
            "Ich klettere über die Leiter, du nimmst die Treppe?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Einverstanden, wir treffen uns oben."
          ],
          [
            "speaker-b",
            "Kind B",
            "Ein Tipp: Leg die Arme an, dann bist du schneller."
          ],
          [
            "speaker-a",
            "Kind A",
            "Danke, das probiere ich aus."
          ],
          [
            "speaker-b",
            "Kind B",
            "Siehst du, das war deutlich schneller."
          ],
          [
            "speaker-a",
            "Kind A",
            "Unglaublich, die Haltung macht wirklich einen Unterschied."
          ],
          [
            "speaker-b",
            "Kind B",
            "Sollen wir einen Wettbewerb machen?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Gern, aber nur zwei Runden."
          ],
          [
            "speaker-b",
            "Kind B",
            "Wer zuerst unten ist, gewinnt."
          ],
          [
            "speaker-a",
            "Kind A",
            "Bereit... los!"
          ],
          [
            "speaker-b",
            "Kind B",
            "Das war knapp, du warst schneller."
          ],
          [
            "speaker-a",
            "Kind A",
            "Beim nächsten Mal bin ich wieder dran."
          ]
        ]
      }
    ]
  },
  {
    "title": "Learning to ride a bicycle",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Bist du bereit fürs Fahrradfahren?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, aber ich habe ein bisschen Angst."
          ],
          [
            "speaker-a",
            "Vater",
            "Keine Sorge, ich halte den Sattel fest."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay, dann starte ich langsam."
          ],
          [
            "speaker-a",
            "Vater",
            "Tritt in die Pedale."
          ],
          [
            "speaker-b",
            "Kind",
            "So?"
          ],
          [
            "speaker-a",
            "Vater",
            "Ja, sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich fahre schon ein paar Meter."
          ],
          [
            "speaker-a",
            "Vater",
            "Du machst das super."
          ],
          [
            "speaker-b",
            "Kind",
            "Lässt du schon los?"
          ],
          [
            "speaker-a",
            "Vater",
            "Kurz, aber ich bleibe neben dir."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich schaffe es!"
          ],
          [
            "speaker-a",
            "Vater",
            "Brems jetzt langsam."
          ],
          [
            "speaker-b",
            "Kind",
            "Geschafft."
          ],
          [
            "speaker-a",
            "Vater",
            "Möchtest du noch einmal?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, jetzt traue ich mich mehr."
          ],
          [
            "speaker-a",
            "Vater",
            "Denk an den Helm."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Helm sitzt fest."
          ],
          [
            "speaker-a",
            "Vater",
            "Prima, dann weiter."
          ],
          [
            "speaker-b",
            "Kind",
            "Heute lerne ich es wirklich."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Heute lassen wir die Stützräder weg."
          ],
          [
            "speaker-b",
            "Kind",
            "Wirklich schon?"
          ],
          [
            "speaker-a",
            "Vater",
            "Du bist bereit, du hast geübt."
          ],
          [
            "speaker-b",
            "Kind",
            "Aber ich habe ein bisschen Angst."
          ],
          [
            "speaker-a",
            "Vater",
            "Das ist normal, ich bin ja bei dir."
          ],
          [
            "speaker-b",
            "Kind",
            "Hältst du mich fest?"
          ],
          [
            "speaker-a",
            "Vater",
            "Ja, am Sattel."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay, ich trete langsam."
          ],
          [
            "speaker-a",
            "Vater",
            "Sehr gut, so ist es richtig."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich fahre schon eine Weile."
          ],
          [
            "speaker-a",
            "Vater",
            "Und ich lasse kurz los."
          ],
          [
            "speaker-b",
            "Kind",
            "Nein, bitte noch nicht!"
          ],
          [
            "speaker-a",
            "Vater",
            "Ich bin direkt neben dir."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich schaffe es allein!"
          ],
          [
            "speaker-a",
            "Vater",
            "Siehst du, du kannst es."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, Papa, das war super."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Ich habe eine Überraschung für dich."
          ],
          [
            "speaker-b",
            "Kind",
            "Was denn?"
          ],
          [
            "speaker-a",
            "Vater",
            "Dein Fahrrad hat jetzt keine Stützräder mehr."
          ],
          [
            "speaker-b",
            "Kind",
            "Wirklich? Ich bin mir nicht sicher, ob ich das schon kann."
          ],
          [
            "speaker-a",
            "Vater",
            "Ich bin überzeugt, dass du es schaffst."
          ],
          [
            "speaker-b",
            "Kind",
            "Woran machst du das fest?"
          ],
          [
            "speaker-a",
            "Vater",
            "Dein Gleichgewicht hast du beim Laufrad trainiert."
          ],
          [
            "speaker-b",
            "Kind",
            "Stimmt, aber das ist etwas anderes."
          ],
          [
            "speaker-a",
            "Vater",
            "Das Prinzip ist dasselbe: Gleichgewicht und Mut."
          ],
          [
            "speaker-b",
            "Kind",
            "Und was, wenn ich falle?"
          ],
          [
            "speaker-a",
            "Vater",
            "Dann stehst du auf und versuchst es erneut."
          ],
          [
            "speaker-b",
            "Kind",
            "Das klingt vernünftig."
          ],
          [
            "speaker-a",
            "Vater",
            "Wir beginnen auf der Wiese, dort ist der Boden weich."
          ],
          [
            "speaker-b",
            "Kind",
            "Gute Idee, so fällt das Lernen leichter."
          ],
          [
            "speaker-a",
            "Vater",
            "Ich halte dich fest, bis du dich sicher fühlst."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann traue ich mich."
          ],
          [
            "speaker-a",
            "Vater",
            "Denk daran: Blick nach vorn, nicht auf den Boden."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich schaffe das!"
          ]
        ]
      }
    ]
  },
  {
    "title": "First swimming lesson",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Trainerin",
            "Willkommen zum Schwimmkurs."
          ],
          [
            "speaker-b",
            "Kind",
            "Hallo."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Hast du schon die Badekappe auf?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, und auch die Schwimmbrille."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Das Wasser ist kalt."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Nur am Anfang, dann wird es besser."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Wir starten am Beckenrand."
          ],
          [
            "speaker-b",
            "Kind",
            "Soll ich mich festhalten?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Ja, und dann Beine bewegen."
          ],
          [
            "speaker-b",
            "Kind",
            "So wie beim Fahrrad?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Genau, nur im Wasser."
          ],
          [
            "speaker-b",
            "Kind",
            "Das klappt schon besser."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Jetzt üben wir das Atmen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich puste Blasen ins Wasser."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Perfekt."
          ],
          [
            "speaker-b",
            "Kind",
            "Darf ich mit dem Brett schwimmen?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Ja, eine Bahn hin und zurück."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich gebe mein Bestes."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Trainerin",
            "Heute lernen wir das Brustschwimmen."
          ],
          [
            "speaker-b",
            "Kind",
            "Was machen wir zuerst?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Zuerst üben wir die Beine."
          ],
          [
            "speaker-b",
            "Kind",
            "Am Beckenrand?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Genau, dort kannst du dich festhalten."
          ],
          [
            "speaker-b",
            "Kind",
            "So?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Ja, die Beine schön lang ziehen."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist anstrengend."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Pause machen ist erlaubt."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann üben wir die Arme?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Als Nächstes, im flachen Wasser."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich stehe im Wasser."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Jetzt die Arme kreisen."
          ],
          [
            "speaker-b",
            "Kind",
            "Und den Kopf heben?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Genau, zum Atmen."
          ],
          [
            "speaker-b",
            "Kind",
            "Das klappt schon besser."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Du lernst schnell."
          ],
          [
            "speaker-b",
            "Kind",
            "Schwimme ich schon eine Bahn?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Gleich, mit dem Brett."
          ],
          [
            "speaker-b",
            "Kind",
            "Super, ich versuche es."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Trainerin",
            "Heute steigern wir unsere Ausdauer."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie weit sollen wir schwimmen?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Ziel sind zehn Bahnen ohne Pause."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist ganz schön viel."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Wir steigern es langsam, Bahn für Bahn."
          ],
          [
            "speaker-b",
            "Kind",
            "Worauf soll ich achten?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Auf eine ruhige Atmung und gleichmäßige Züge."
          ],
          [
            "speaker-b",
            "Kind",
            "Wenn ich außer Atem gerate, was mache ich?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Du drehst dich auf den Rücken und entspannst."
          ],
          [
            "speaker-b",
            "Kind",
            "Also nicht sofort aufhören?"
          ],
          [
            "speaker-a",
            "Trainerin",
            "Richtig, so trainierst du deine Kondition."
          ],
          [
            "speaker-b",
            "Kind",
            "Das verstehe ich."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Außerdem hilft dir das regelmäßige Tempo."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich versuche, mich nicht zu hetzen."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Genau, Qualität vor Geschwindigkeit."
          ],
          [
            "speaker-b",
            "Kind",
            "Nach der zehnten Bahn bin ich stolz."
          ],
          [
            "speaker-a",
            "Trainerin",
            "Das sollst du auch sein."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, das Training macht Fortschritte."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the dentist for checkup",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Zahnärztin",
            "Hallo, komm bitte rein."
          ],
          [
            "speaker-b",
            "Kind",
            "Hallo."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Setz dich auf den Stuhl."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Stuhl ist groß."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Er fährt jetzt langsam nach oben."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Hast du heute schon Zähne geputzt?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, nach dem Frühstück."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Tut die Untersuchung weh?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Nein, ich schaue nur mit dem Spiegel."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann ist es okay."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Mach den Mund bitte weit auf."
          ],
          [
            "speaker-b",
            "Kind",
            "Aaaah."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Deine Zähne sehen gut aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Super."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Putz morgens und abends zwei Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "In sechs Monaten sehen wir uns wieder."
          ],
          [
            "speaker-b",
            "Kind",
            "Bis dann."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Zahnärztin",
            "Hallo, setz dich bitte auf den Stuhl."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe ein bisschen Angst."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Das ist ganz normal."
          ],
          [
            "speaker-b",
            "Kind",
            "Tut die Kontrolle weh?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Nein, ich schaue nur genau hin."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay, ich vertraue dir."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Mach den Mund bitte weit auf."
          ],
          [
            "speaker-b",
            "Kind",
            "So?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Perfekt, ich sehe alles."
          ],
          [
            "speaker-b",
            "Kind",
            "Sind meine Zähne gesund?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Ja, ein kleiner Kariespunkt ist aber da."
          ],
          [
            "speaker-b",
            "Kind",
            "Oh, muss ich eine Spritze bekommen?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Noch nicht, wir behandeln ihn früh."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie wird er behandelt?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Mit einer Füllung, ganz ohne Schmerzen."
          ],
          [
            "speaker-b",
            "Kind",
            "Gut, dann bin ich beruhigt."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Putz weiterhin zweimal am Tag."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich, versprochen."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Zahnärztin",
            "Guten Tag, schön, dass du pünktlich bist."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich war ein bisschen nervös, aber jetzt geht es."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Nervosität ist verständlich, ich erkläre alles Schritt für Schritt."
          ],
          [
            "speaker-b",
            "Kind",
            "Das hilft mir."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Zuerst machen wir eine Röntgenaufnahme."
          ],
          [
            "speaker-b",
            "Kind",
            "Ist das gefährlich?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Nein, die Strahlung ist minimal."
          ],
          [
            "speaker-b",
            "Kind",
            "Und was sieht man darauf?"
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Auch die Stellen zwischen den Zähnen."
          ],
          [
            "speaker-b",
            "Kind",
            "Dort putzt man schwer hin."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Genau, deshalb empfehle ich Zahnseide."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich probiere es zu Hause aus."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Sehr gut, deine Zähne sind ansonsten in bester Verfassung."
          ],
          [
            "speaker-b",
            "Kind",
            "Das freut mich."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Wir sehen uns in sechs Monaten zur Kontrolle."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann bin ich hoffentlich entspannter."
          ],
          [
            "speaker-a",
            "Zahnärztin",
            "Ganz bestimmt, du hast dich heute schon super gemacht."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the pediatrician for a cold",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Ärztin",
            "Hallo, was fehlt dir?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe Husten und Schnupfen."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Seit wann?"
          ],
          [
            "speaker-b",
            "Kind",
            "Seit zwei Tagen."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Hast du auch Fieber?"
          ],
          [
            "speaker-b",
            "Kind",
            "Gestern ein bisschen."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ich höre kurz deine Lunge ab."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Bitte tief einatmen."
          ],
          [
            "speaker-b",
            "Kind",
            "So?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ja, sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Muss ich in der Schule fehlen?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Morgen bleibst du besser zu Hause."
          ],
          [
            "speaker-b",
            "Kind",
            "Und danach?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Wenn kein Fieber mehr da ist, kannst du gehen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich trinke viel Tee."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Sehr gut, und ruh dich aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Bekomme ich einen Saft gegen Husten?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ja, ich schreibe ein Rezept."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Ärztin",
            "Hallo, du bist sicher erkältet?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, ich huste seit drei Tagen."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Und die Nase läuft?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, und ich bin müde."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ich schaue mir den Hals an."
          ],
          [
            "speaker-b",
            "Kind",
            "Bitte vorsichtig."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Keine Sorge, nur kurz."
          ],
          [
            "speaker-b",
            "Kind",
            "Ist es schlimm?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Nein, eine normale Erkältung."
          ],
          [
            "speaker-b",
            "Kind",
            "Was soll ich machen?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Viel trinken und dich ausruhen."
          ],
          [
            "speaker-b",
            "Kind",
            "Darf ich in die Schule?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Morgen bleibst du zu Hause."
          ],
          [
            "speaker-b",
            "Kind",
            "Und übermorgen?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Wenn es dir besser geht, ja."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich trinke viel Tee."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Sehr gut, Honig hilft auch."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, Frau Doktor."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Gute Besserung!"
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Ärztin",
            "Guten Morgen, was führt dich zu mir?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe starken Husten und etwas Fieber."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Seit wann genau?"
          ],
          [
            "speaker-b",
            "Kind",
            "Seit gestern Abend, es wird nicht besser."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ich höre mir deine Lunge an."
          ],
          [
            "speaker-b",
            "Kind",
            "Muss ich tief atmen?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ja, genau, einmal tief ein und aus."
          ],
          [
            "speaker-b",
            "Kind",
            "So?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Perfekt, deine Lunge klingt in Ordnung."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist beruhigend."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Es ist eine virale Infektion, Antibiotika helfen hier nicht."
          ],
          [
            "speaker-b",
            "Kind",
            "Was hilft denn dann?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ruhe, Flüssigkeit und schleimlösender Tee."
          ],
          [
            "speaker-b",
            "Kind",
            "Soll ich das Fieber messen?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Ja, zweimal am Tag, und die Werte notieren."
          ],
          [
            "speaker-b",
            "Kind",
            "Ab wann darf ich wieder Sport machen?"
          ],
          [
            "speaker-a",
            "Ärztin",
            "Erst wenn du völlig gesund bist, sonst riskierst du einen Rückfall."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke für die klare Erklärung."
          ],
          [
            "speaker-a",
            "Ärztin",
            "Gern, und gute Besserung."
          ]
        ]
      }
    ]
  },
  {
    "title": "Buying vitamins at the pharmacy",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Apotheker",
            "Guten Tag, wie kann ich helfen?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Wir suchen Vitamine für Kinder."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Für welches Alter?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Für zehn Jahre."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Diese Kautabletten sind geeignet."
          ],
          [
            "speaker-b",
            "Kind",
            "Schmecken sie gut?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Ja, nach Orange."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie viele darf ich nehmen?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Eine Tablette pro Tag."
          ],
          [
            "speaker-b",
            "Mutter",
            "Nach dem Essen?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Ja, am besten nach dem Frühstück."
          ],
          [
            "speaker-b",
            "Kind",
            "Sind sie zuckerfrei?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Ja, sie sind ohne Zucker."
          ],
          [
            "speaker-b",
            "Mutter",
            "Sehr gut, dann nehmen wir sie."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Möchten Sie auch einen Messbecher für Saft?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Nein, danke."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Das macht zwölf Euro."
          ],
          [
            "speaker-b",
            "Mutter",
            "Hier bitte."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Vielen Dank."
          ],
          [
            "speaker-b",
            "Kind",
            "Auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Apotheker",
            "Guten Tag, was darf ich für Sie tun?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Wir brauchen Vitamine für Kinder."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Gern, für welches Alter?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Meine Tochter ist zehn."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Diese Lutschtabletten sind beliebt."
          ],
          [
            "speaker-b",
            "Kind",
            "Schmecken sie gut?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Ja, nach Himbeere."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie oft muss ich sie nehmen?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Einmal täglich, am besten morgens."
          ],
          [
            "speaker-b",
            "Mutter",
            "Gibt es Nebenwirkungen?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Normalerweise nicht."
          ],
          [
            "speaker-b",
            "Kind",
            "Und wie lange?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Sechs Wochen, dann eine Pause."
          ],
          [
            "speaker-b",
            "Mutter",
            "Das merken wir uns."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Das macht neun Euro."
          ],
          [
            "speaker-b",
            "Mutter",
            "Hier, bitte."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Danke, und gute Gesundheit."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Apotheker",
            "Guten Tag, wie kann ich Ihnen helfen?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Wir suchen eine sinnvolle Nahrungsergänzung für unser Kind."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Gern, wobei kann ich beraten?"
          ],
          [
            "speaker-b",
            "Mutter",
            "Sie isst wenig Obst und Gemüse."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Dann könnten Vitamine sinnvoll sein."
          ],
          [
            "speaker-b",
            "Kind",
            "Aber ich möchte keine Tabletten schlucken."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Es gibt auch Lutschpastillen mit Fruchtgeschmack."
          ],
          [
            "speaker-b",
            "Kind",
            "Die probiere ich gern."
          ],
          [
            "speaker-a",
            "Apotheker",
            "Achten Sie auf eine ausgewogene Dosierung."
          ],
          [
            "speaker-b",
            "Mutter",
            "Was bedeutet das?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Nicht mehr als die empfohlene Tagesmenge."
          ],
          [
            "speaker-b",
            "Kind",
            "Und wann nehme ich sie?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Am besten mit dem Frühstück."
          ],
          [
            "speaker-b",
            "Mutter",
            "Können wir das mit anderen Medikamenten kombinieren?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Bei Vitaminen ist das unproblematisch."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange soll ich sie nehmen?"
          ],
          [
            "speaker-a",
            "Apotheker",
            "Ein Kur über einige Wochen, dann eine Pause."
          ],
          [
            "speaker-b",
            "Mutter",
            "Vielen Dank für die ausführliche Beratung."
          ]
        ]
      }
    ]
  },
  {
    "title": "Shopping for school supplies",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Was brauchst du für die Schule?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ein neues Heft und zwei Stifte."
          ],
          [
            "speaker-a",
            "Mutter",
            "Nur das?"
          ],
          [
            "speaker-b",
            "Kind",
            "Auch einen Radiergummi."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann gehen wir in den Laden."
          ],
          [
            "speaker-b",
            "Kind",
            "Dort drüben sind die Hefte."
          ],
          [
            "speaker-a",
            "Mutter",
            "Welche Größe möchtest du?"
          ],
          [
            "speaker-b",
            "Kind",
            "Das A4-Heft mit Linien."
          ],
          [
            "speaker-a",
            "Mutter",
            "Gut, nimm zwei Stück."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay."
          ],
          [
            "speaker-a",
            "Mutter",
            "Jetzt die Stifte."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich nehme blaue und schwarze."
          ],
          [
            "speaker-a",
            "Mutter",
            "Brauchen wir noch Kleber?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, meiner ist leer."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann legen wir einen Klebestift dazu."
          ],
          [
            "speaker-b",
            "Kind",
            "Super."
          ],
          [
            "speaker-a",
            "Mutter",
            "Gehen wir zur Kasse."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich trage den Korb."
          ],
          [
            "speaker-a",
            "Mutter",
            "Danke für deine Hilfe."
          ],
          [
            "speaker-b",
            "Kind",
            "Gern."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Was steht auf der Einkaufsliste?"
          ],
          [
            "speaker-b",
            "Kind",
            "Zwei Hefte und ein Füller."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und die Mappe?"
          ],
          [
            "speaker-b",
            "Kind",
            "Die brauche ich auch noch."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann schauen wir in die Schreibwaren."
          ],
          [
            "speaker-b",
            "Kind",
            "Die Hefte sind dort hinten."
          ],
          [
            "speaker-a",
            "Mutter",
            "Welche Lineatur brauchst du?"
          ],
          [
            "speaker-b",
            "Kind",
            "Linien für Deutsch."
          ],
          [
            "speaker-a",
            "Mutter",
            "Nimm drei Stück, dann reicht es."
          ],
          [
            "speaker-b",
            "Kind",
            "Und welchen Füller?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Einen mit blauer Tinte."
          ],
          [
            "speaker-b",
            "Kind",
            "Der hier liegt gut in der Hand."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann nehmen wir den."
          ],
          [
            "speaker-b",
            "Kind",
            "Was kostet er?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Acht Euro, das ist okay."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt nur noch die Mappe."
          ],
          [
            "speaker-a",
            "Mutter",
            "Die gibt es nebenan."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben alles."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann gehen wir zur Kasse."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Hast du die Liste für den Schulbedarf dabei?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, wir brauchen noch einige Dinge."
          ],
          [
            "speaker-a",
            "Mutter",
            "Was steht ganz oben?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ein Geodreieck und einen Zirkel."
          ],
          [
            "speaker-a",
            "Mutter",
            "Für Mathematik, nehme ich an."
          ],
          [
            "speaker-b",
            "Kind",
            "Genau, und einen Taschenrechner."
          ],
          [
            "speaker-a",
            "Mutter",
            "Den besorgst du dir besser mit deinem Lehrer zusammen."
          ],
          [
            "speaker-b",
            "Kind",
            "Stimmt, er wollte ein bestimmtes Modell empfehlen."
          ],
          [
            "speaker-a",
            "Mutter",
            "So vermeiden wir einen Fehlkauf."
          ],
          [
            "speaker-b",
            "Kind",
            "Guter Gedanke."
          ],
          [
            "speaker-a",
            "Mutter",
            "Welche Fächer brauchen noch Material?"
          ],
          [
            "speaker-b",
            "Kind",
            "Kunst: einen Pinsel und Wasserfarben."
          ],
          [
            "speaker-a",
            "Mutter",
            "Achte auf gute Qualität, das zahlt sich aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Billige Pinsel verlieren schnell Haare."
          ],
          [
            "speaker-a",
            "Mutter",
            "Genau, das haben wir schon erlebt."
          ],
          [
            "speaker-b",
            "Kind",
            "Sollen wir alles zusammen an der Kasse bezahlen?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Ja, und die Quittung aufbewahren."
          ],
          [
            "speaker-b",
            "Kind",
            "Falls etwas umgetauscht werden muss."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr umsichtig von dir."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the toy store choosing a gift",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Kind",
            "Wir brauchen ein Geschenk für Mia."
          ],
          [
            "speaker-b",
            "Vater",
            "Was mag sie gern?"
          ],
          [
            "speaker-a",
            "Kind",
            "Sie liebt Basteln und Tiere."
          ],
          [
            "speaker-b",
            "Vater",
            "Dann schauen wir in diese Ecke."
          ],
          [
            "speaker-a",
            "Kind",
            "Hier ist ein Bastelset mit Perlen."
          ],
          [
            "speaker-b",
            "Vater",
            "Das sieht gut aus."
          ],
          [
            "speaker-a",
            "Kind",
            "Und dort ein Puzzle mit Pferden."
          ],
          [
            "speaker-b",
            "Vater",
            "Was passt besser?"
          ],
          [
            "speaker-a",
            "Kind",
            "Vielleicht das Puzzle."
          ],
          [
            "speaker-b",
            "Vater",
            "Wie viele Teile hat es?"
          ],
          [
            "speaker-a",
            "Kind",
            "Hundert Teile."
          ],
          [
            "speaker-b",
            "Vater",
            "Das ist für ihr Alter gut."
          ],
          [
            "speaker-a",
            "Kind",
            "Können wir es einpacken lassen?"
          ],
          [
            "speaker-b",
            "Vater",
            "Ja, an der Kasse."
          ],
          [
            "speaker-a",
            "Kind",
            "Ich schreibe noch eine Karte."
          ],
          [
            "speaker-b",
            "Vater",
            "Sehr gute Idee."
          ],
          [
            "speaker-a",
            "Kind",
            "Dann nehmen wir das Puzzle."
          ],
          [
            "speaker-b",
            "Vater",
            "Abgemacht."
          ],
          [
            "speaker-a",
            "Kind",
            "Mia freut sich bestimmt."
          ],
          [
            "speaker-b",
            "Vater",
            "Ganz sicher."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Kind",
            "Papa, wir brauchen noch ein Geschenk für Tim."
          ],
          [
            "speaker-b",
            "Vater",
            "Was mag er denn gern?"
          ],
          [
            "speaker-a",
            "Kind",
            "Autos und Bauklötze."
          ],
          [
            "speaker-b",
            "Vater",
            "Dann schauen wir in diese Abteilung."
          ],
          [
            "speaker-a",
            "Kind",
            "Hier ist ein toller Baukasten."
          ],
          [
            "speaker-b",
            "Vater",
            "Ist er für sein Alter geeignet?"
          ],
          [
            "speaker-a",
            "Kind",
            "Es steht ab vier Jahren drauf."
          ],
          [
            "speaker-b",
            "Vater",
            "Tim ist sechs, das passt."
          ],
          [
            "speaker-a",
            "Kind",
            "Und ein kleines Auto?"
          ],
          [
            "speaker-b",
            "Vater",
            "Das ist vielleicht zu viel."
          ],
          [
            "speaker-a",
            "Kind",
            "Dann nehmen wir nur den Baukasten."
          ],
          [
            "speaker-b",
            "Vater",
            "Eine gute Entscheidung."
          ],
          [
            "speaker-a",
            "Kind",
            "Soll ich ihn einpacken lassen?"
          ],
          [
            "speaker-b",
            "Vater",
            "Ja, das ist eine nette Geste."
          ],
          [
            "speaker-a",
            "Kind",
            "Und eine Karte schreibe ich auch."
          ],
          [
            "speaker-b",
            "Vater",
            "Sehr aufmerksam."
          ],
          [
            "speaker-a",
            "Kind",
            "Tim freut sich bestimmt."
          ],
          [
            "speaker-b",
            "Vater",
            "Das glaube ich auch."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Kind",
            "Papa, wir müssen noch ein Geschenk für Tims Geburtstag besorgen."
          ],
          [
            "speaker-b",
            "Vater",
            "Hast du eine Idee, was ihm Freude macht?"
          ],
          [
            "speaker-a",
            "Kind",
            "Er baut gern und interessiert sich für Technik."
          ],
          [
            "speaker-b",
            "Vater",
            "Dann wäre ein Experimentierkasten ideal."
          ],
          [
            "speaker-a",
            "Kind",
            "Aber welchen nimmt man da?"
          ],
          [
            "speaker-b",
            "Vater",
            "Ich würde auf die Altersangabe und Sicherheitshinweise achten."
          ],
          [
            "speaker-a",
            "Kind",
            "Der hier ist ab sechs Jahren, das passt genau."
          ],
          [
            "speaker-b",
            "Vater",
            "Und er enthält kindgerechte Versuche."
          ],
          [
            "speaker-a",
            "Kind",
            "Zudem ist er nicht zu teuer."
          ],
          [
            "speaker-b",
            "Vater",
            "Dann ist das die richtige Wahl."
          ],
          [
            "speaker-a",
            "Kind",
            "Sollen wir die Geschenkpapiervariante nehmen?"
          ],
          [
            "speaker-b",
            "Vater",
            "Ja, und wir lassen es uns sogar einpacken."
          ],
          [
            "speaker-a",
            "Kind",
            "Ich schreibe noch eine persönliche Karte."
          ],
          [
            "speaker-b",
            "Vater",
            "Das macht das Geschenk besonders."
          ],
          [
            "speaker-a",
            "Kind",
            "Ich hoffe, er freut sich darüber."
          ],
          [
            "speaker-b",
            "Vater",
            "Davon bin ich überzeugt."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the bookstore for a comic",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Kind",
            "Entschuldigung, wo sind die Comics?"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Hinten links im Regal."
          ],
          [
            "speaker-a",
            "Kind",
            "Danke."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Suchst du etwas Bestimmtes?"
          ],
          [
            "speaker-a",
            "Kind",
            "Ja, den neuen Band von Dino Max."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Einen Moment, ich schaue nach."
          ],
          [
            "speaker-a",
            "Kind",
            "Okay."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Hier ist er, ganz neu angekommen."
          ],
          [
            "speaker-a",
            "Kind",
            "Super!"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Möchtest du auch eine Schutzhülle?"
          ],
          [
            "speaker-a",
            "Kind",
            "Nein, danke."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Dann kommst du mit zur Kasse."
          ],
          [
            "speaker-a",
            "Kind",
            "Wie viel kostet der Comic?"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Neun Euro fünfzig."
          ],
          [
            "speaker-a",
            "Kind",
            "Ich habe zehn Euro dabei."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Sehr gut, hier ist dein Rückgeld."
          ],
          [
            "speaker-a",
            "Kind",
            "Danke schön."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Viel Spaß beim Lesen."
          ],
          [
            "speaker-a",
            "Kind",
            "Danke, ich lese ihn heute Abend."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Auf Wiedersehen."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Kind",
            "Entschuldigung, haben Sie den neuen Band von Dino Max?"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Lass mich nachschauen."
          ],
          [
            "speaker-a",
            "Kind",
            "Danke."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Ja, wir haben noch drei Exemplare."
          ],
          [
            "speaker-a",
            "Kind",
            "Super, ich nehme einen."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Hier bitte."
          ],
          [
            "speaker-a",
            "Kind",
            "Wie viel kostet er?"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Neun Euro neunzig."
          ],
          [
            "speaker-a",
            "Kind",
            "Ich habe zehn Euro."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Dann bekommst du zehn Cent zurück."
          ],
          [
            "speaker-a",
            "Kind",
            "Danke."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Möchtest du eine Tüte?"
          ],
          [
            "speaker-a",
            "Kind",
            "Ja, bitte."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Hier ist dein Comic."
          ],
          [
            "speaker-a",
            "Kind",
            "Gibt es auch eine Fortsetzung?"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Ja, die erscheint im Herbst."
          ],
          [
            "speaker-a",
            "Kind",
            "Dann komme ich wieder."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Wir freuen uns."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Kind",
            "Guten Tag, ich hätte eine Frage."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Gern, wie kann ich helfen?"
          ],
          [
            "speaker-a",
            "Kind",
            "Ich suche den neuesten Band einer Comicreihe."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Um welche Reihe handelt es sich?"
          ],
          [
            "speaker-a",
            "Kind",
            "Um Dino Max, den achten Band."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Der ist gerade erst eingetroffen."
          ],
          [
            "speaker-a",
            "Kind",
            "Wie gut, dass ich gleich gefragt habe."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Er war sogar schon fast vergriffen."
          ],
          [
            "speaker-a",
            "Kind",
            "Dann habe ich Glück gehabt."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Möchten Sie auch die Sammelbox dazu?"
          ],
          [
            "speaker-a",
            "Kind",
            "Was ist darin enthalten?"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Ein Poster und eine exklusive Kurzgeschichte."
          ],
          [
            "speaker-a",
            "Kind",
            "Das klingt verlockend, aber ich nehme nur den Band."
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Sehr gut, dann an der Kasse bitte."
          ],
          [
            "speaker-a",
            "Kind",
            "Bezahle ich dort auch den Rest?"
          ],
          [
            "speaker-b",
            "Verkäufer",
            "Ja, zusammen mit dem Comic."
          ],
          [
            "speaker-a",
            "Kind",
            "Vielen Dank für die Beratung."
          ]
        ]
      }
    ]
  },
  {
    "title": "Rainy day indoor games",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Es regnet den ganzen Tag."
          ],
          [
            "speaker-b",
            "Kind B",
            "Dann spielen wir drinnen."
          ],
          [
            "speaker-a",
            "Kind A",
            "Wollen wir ein Brettspiel spielen?"
          ],
          [
            "speaker-b",
            "Kind B",
            "Ja, welches?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Mensch aergere dich nicht."
          ],
          [
            "speaker-b",
            "Kind B",
            "Gute Idee."
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich nehme die rote Farbe."
          ],
          [
            "speaker-b",
            "Kind B",
            "Ich nehme blau."
          ],
          [
            "speaker-a",
            "Kind A",
            "Wer beginnt?"
          ],
          [
            "speaker-b",
            "Kind B",
            "Der, der eine Sechs wuerfelt."
          ],
          [
            "speaker-a",
            "Kind A",
            "Ich habe eine Drei."
          ],
          [
            "speaker-b",
            "Kind B",
            "Ich habe eine Sechs."
          ],
          [
            "speaker-a",
            "Kind A",
            "Dann startest du."
          ],
          [
            "speaker-b",
            "Kind B",
            "Danke."
          ],
          [
            "speaker-a",
            "Kind A",
            "Oh nein, du hast meine Figur geschlagen."
          ],
          [
            "speaker-b",
            "Kind B",
            "Tut mir leid, so sind die Regeln."
          ],
          [
            "speaker-a",
            "Kind A",
            "Macht nichts, ich spiele weiter."
          ],
          [
            "speaker-b",
            "Kind B",
            "Das ist fair."
          ],
          [
            "speaker-a",
            "Kind A",
            "Wer gewinnt, bekommt den letzten Keks."
          ],
          [
            "speaker-b",
            "Kind B",
            "Abgemacht."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Es regnet schon wieder."
          ],
          [
            "speaker-b",
            "Kind B",
            "Der ganze Tag ist verregnet."
          ],
          [
            "speaker-a",
            "Kind A",
            "Spielen wir im Zimmer?"
          ],
          [
            "speaker-b",
            "Kind B",
            "Ja, aber was?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Wir haben ein neues Puzzle."
          ],
          [
            "speaker-b",
            "Kind B",
            "Wie viele Teile?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Zweihundert."
          ],
          [
            "speaker-b",
            "Kind B",
            "Das schaffen wir zusammen."
          ],
          [
            "speaker-a",
            "Kind A",
            "Wir teilen die Farben auf."
          ],
          [
            "speaker-b",
            "Kind B",
            "Ich nehme den Himmel."
          ],
          [
            "speaker-a",
            "Kind A",
            "Und ich den Wald."
          ],
          [
            "speaker-b",
            "Kind B",
            "Die Ecken sind am leichtesten."
          ],
          [
            "speaker-a",
            "Kind A",
            "Genau, fangen wir damit an."
          ],
          [
            "speaker-b",
            "Kind B",
            "Es macht Spaß."
          ],
          [
            "speaker-a",
            "Kind A",
            "Bei Regen auch mal drinnen."
          ],
          [
            "speaker-b",
            "Kind B",
            "Genau, das ist gemütlich."
          ],
          [
            "speaker-a",
            "Kind A",
            "Fertig ist fast alles."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Kind A",
            "Der Regen will einfach nicht aufhören."
          ],
          [
            "speaker-b",
            "Kind B",
            "Dabei wollten wir doch in den Park."
          ],
          [
            "speaker-a",
            "Kind A",
            "Keine Sorge, ich habe eine Alternative."
          ],
          [
            "speaker-b",
            "Kind B",
            "Lass hören."
          ],
          [
            "speaker-a",
            "Kind A",
            "Wir veranstalten ein kleines Turnier in der Wohnung."
          ],
          [
            "speaker-b",
            "Kind B",
            "Welche Disziplinen?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Dosenwerfen, Weitwurf mit Socken und Balance-Parcours."
          ],
          [
            "speaker-b",
            "Kind B",
            "Das klingt nach viel Bewegung."
          ],
          [
            "speaker-a",
            "Kind A",
            "Und wir benötigen kaum Material."
          ],
          [
            "speaker-b",
            "Kind B",
            "Worum geht es beim Dosenwerfen?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Drei Würfe, wer mehr Dosen trifft, gewinnt."
          ],
          [
            "speaker-b",
            "Kind B",
            "Und wer gewinnt am Ende?"
          ],
          [
            "speaker-a",
            "Kind A",
            "Wer in allen Disziplinen die meisten Punkte sammelt."
          ],
          [
            "speaker-b",
            "Kind B",
            "Ich bin dabei, auch wenn der Regen ärgerlich ist."
          ],
          [
            "speaker-a",
            "Kind A",
            "So wird der Tag trotzdem schön."
          ],
          [
            "speaker-b",
            "Kind B",
            "Gute Einstellung, lass uns starten."
          ]
        ]
      }
    ]
  },
  {
    "title": "Family train trip on weekend",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Kinder, wir fahren heute mit dem Zug."
          ],
          [
            "speaker-b",
            "Kind",
            "Wohin fahren wir?"
          ],
          [
            "speaker-a",
            "Mutter",
            "In die Stadt am See."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange dauert die Fahrt?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Etwa eine Stunde."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich sitze gern am Fenster."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann gehen wir schnell zum Gleis."
          ],
          [
            "speaker-b",
            "Kind",
            "Welches Gleis ist es?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Gleis drei, da vorne."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Zug kommt schon."
          ],
          [
            "speaker-a",
            "Mutter",
            "Bleibt hinter der gelben Linie."
          ],
          [
            "speaker-b",
            "Kind",
            "Ja."
          ],
          [
            "speaker-a",
            "Mutter",
            "Jetzt steigen wir ein."
          ],
          [
            "speaker-b",
            "Kind",
            "Hier sind noch freie Plaetze."
          ],
          [
            "speaker-a",
            "Mutter",
            "Setzt euch und legt die Rucksaecke oben hin."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe ein Buch fuer die Fahrt."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann sind wir da?"
          ],
          [
            "speaker-a",
            "Mutter",
            "In 55 Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich freue mich auf den See."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Kommt, der Zug fährt gleich."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben noch Zeit."
          ],
          [
            "speaker-a",
            "Mutter",
            "Aber der Bahnsteig ist weit."
          ],
          [
            "speaker-b",
            "Kind",
            "Welches Gleis?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Gleis sieben."
          ],
          [
            "speaker-b",
            "Kind",
            "Da ist unser Wagen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Steigt schnell ein."
          ],
          [
            "speaker-b",
            "Kind",
            "Wir haben Sitzplätze am Fenster."
          ],
          [
            "speaker-a",
            "Mutter",
            "Perfekt, legt die Rucksäcke oben ab."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann kommen wir an?"
          ],
          [
            "speaker-a",
            "Mutter",
            "In einer Stunde."
          ],
          [
            "speaker-b",
            "Kind",
            "Was machen wir in der Stadt?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Wir besuchen das Museum."
          ],
          [
            "speaker-b",
            "Kind",
            "Und danach?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Danach gibt es Eis."
          ],
          [
            "speaker-b",
            "Kind",
            "Das wird ein schöner Tag."
          ],
          [
            "speaker-a",
            "Mutter",
            "Genießt die Fahrt."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Wir haben den Zug pünktlich erreicht, Gott sei Dank."
          ],
          [
            "speaker-b",
            "Kind",
            "Das war knapp, der Bahnsteig ist sehr lang."
          ],
          [
            "speaker-a",
            "Mutter",
            "Deshalb reist man am besten früh zum Bahnhof."
          ],
          [
            "speaker-b",
            "Kind",
            "Welche Sitzplätze haben wir?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Reihe 12, am Fenster, mit Tisch."
          ],
          [
            "speaker-b",
            "Kind",
            "Perfekt, dann kann ich zeichnen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Falls du Hunger bekommst, habe ich Snacks dabei."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, das ist lieb."
          ],
          [
            "speaker-a",
            "Mutter",
            "Der Zug beschleunigt jetzt, also bleibt sitzen."
          ],
          [
            "speaker-b",
            "Kind",
            "Die Landschaft draußen ist wunderschön."
          ],
          [
            "speaker-a",
            "Mutter",
            "Wir fahren bald an einem See vorbei."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann freue ich mich schon auf das Foto."
          ],
          [
            "speaker-a",
            "Mutter",
            "Vergiss nicht, den Fotoapparat scharfzustellen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich übe die Einstellungen gleich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Du bist ja ein kleiner Profi geworden."
          ]
        ]
      }
    ]
  },
  {
    "title": "At the childrens museum",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Willkommen im Kindermuseum."
          ],
          [
            "speaker-b",
            "Kind",
            "Hallo, was koennen wir hier machen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ihr koennt experimentieren und bauen."
          ],
          [
            "speaker-b",
            "Kind",
            "Gibt es auch einen Roboterraum?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ja, im ersten Stock rechts."
          ],
          [
            "speaker-b",
            "Kind",
            "Super."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Moechtet ihr zuerst eine kurze Fuehrung?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, gerne."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Die Fuehrung beginnt in zehn Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Wo warten wir?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Neben dem grossen Dino-Modell."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Dino ist riesig."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ja, er ist drei Meter hoch."
          ],
          [
            "speaker-b",
            "Kind",
            "Duerfen wir Fotos machen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ja, ohne Blitz."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Nach der Fuehrung gibt es einen Basteltisch."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich bastle gern Raketen."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Dann bist du dort richtig."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke!"
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Willkommen im Kindermuseum!"
          ],
          [
            "speaker-b",
            "Kind",
            "Danke. Was gibt es heute?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Eine Ausstellung über Luft."
          ],
          [
            "speaker-b",
            "Kind",
            "Über Luft? Wie funktioniert das?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Mit Experimenten zum Mitmachen."
          ],
          [
            "speaker-b",
            "Kind",
            "Kann ich etwas bauen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ja, im Werkraum."
          ],
          [
            "speaker-b",
            "Kind",
            "Was bauen die Kinder dort?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Papierflieger und Windräder."
          ],
          [
            "speaker-b",
            "Kind",
            "Das will ich auch machen."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Dann geh rechts durch die Tür."
          ],
          [
            "speaker-b",
            "Kind",
            "Wo kann ich meinen Rucksack lassen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "In den Schließfächern am Eingang."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke für die Hilfe."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Viel Spaß beim Entdecken!"
          ],
          [
            "speaker-b",
            "Kind",
            "Den werde ich haben."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mitarbeiterin",
            "Guten Tag, habt ihr schon eure Eintrittskarten?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, wir haben sie online bestellt."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Sehr gut, dann scanne ich sie ein."
          ],
          [
            "speaker-b",
            "Kind",
            "Gibt es eine Führung durch die neue Ausstellung?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Ja, die beginnt in zwanzig Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Worum geht es in der Ausstellung?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Um erneuerbare Energien."
          ],
          [
            "speaker-b",
            "Kind",
            "Interessant, damit kenne ich mich ein wenig aus."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Dann wirst du hier einiges Neues erfahren."
          ],
          [
            "speaker-b",
            "Kind",
            "Dürfen wir während der Führung Fragen stellen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Unbedingt, Fragen sind ausdrücklich erwünscht."
          ],
          [
            "speaker-b",
            "Kind",
            "Und gibt es Experimente zum Selbermachen?"
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Am Ende wartet ein Mitmachbereich auf euch."
          ],
          [
            "speaker-b",
            "Kind",
            "Das freut mich am meisten."
          ],
          [
            "speaker-a",
            "Mitarbeiterin",
            "Dann wünsche ich euch eine lehrreiche Zeit."
          ],
          [
            "speaker-b",
            "Kind",
            "Vielen Dank, das wird bestimmt spannend."
          ]
        ]
      }
    ]
  },
  {
    "title": "Baking cookies with grandma",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Oma",
            "Heute backen wir Kekse."
          ],
          [
            "speaker-b",
            "Kind",
            "Juhu, Schokokekse?"
          ],
          [
            "speaker-a",
            "Oma",
            "Ja, mit kleinen Schokostuecken."
          ],
          [
            "speaker-b",
            "Kind",
            "Was brauchen wir zuerst?"
          ],
          [
            "speaker-a",
            "Oma",
            "Mehl, Zucker, Butter und Eier."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich hole das Mehl."
          ],
          [
            "speaker-a",
            "Oma",
            "Bitte miss 300 Gramm ab."
          ],
          [
            "speaker-b",
            "Kind",
            "Fertig."
          ],
          [
            "speaker-a",
            "Oma",
            "Jetzt ruehren wir alles zusammen."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Teig ist klebrig."
          ],
          [
            "speaker-a",
            "Oma",
            "Das ist normal."
          ],
          [
            "speaker-b",
            "Kind",
            "Kann ich den Teig ausrollen?"
          ],
          [
            "speaker-a",
            "Oma",
            "Ja, mit dem Nudelholz."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich nehme Sternformen."
          ],
          [
            "speaker-a",
            "Oma",
            "Sehr schoen."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange muessen sie in den Ofen?"
          ],
          [
            "speaker-a",
            "Oma",
            "Etwa zehn Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Es riecht schon lecker."
          ],
          [
            "speaker-a",
            "Oma",
            "Nach dem Abkuehlen essen wir zwei."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich kann kaum warten."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Oma",
            "Heute backen wir Butterkekse."
          ],
          [
            "speaker-b",
            "Kind",
            "Mit Schokolade?"
          ],
          [
            "speaker-a",
            "Oma",
            "Mit Schokostücken, ja."
          ],
          [
            "speaker-b",
            "Kind",
            "Was brauchen wir?"
          ],
          [
            "speaker-a",
            "Oma",
            "Mehl, Butter, Zucker und ein Ei."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich kann das Mehl abwiegen."
          ],
          [
            "speaker-a",
            "Oma",
            "Sehr gut, 250 Gramm."
          ],
          [
            "speaker-b",
            "Kind",
            "Und die Butter?"
          ],
          [
            "speaker-a",
            "Oma",
            "Die schneiden wir in Stücke."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann kneten wir den Teig."
          ],
          [
            "speaker-a",
            "Oma",
            "Genau, bis er glatt ist."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Teig ist weich."
          ],
          [
            "speaker-a",
            "Oma",
            "Wir stellen ihn kurz kalt."
          ],
          [
            "speaker-b",
            "Kind",
            "Und dann?"
          ],
          [
            "speaker-a",
            "Oma",
            "Dann stechen wir Formen aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich nehme den Stern."
          ],
          [
            "speaker-a",
            "Oma",
            "Schöne Wahl."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange backen sie?"
          ],
          [
            "speaker-a",
            "Oma",
            "Zehn Minuten bei 180 Grad."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Oma",
            "Heute backen wir nach einem alten Familienrezept."
          ],
          [
            "speaker-b",
            "Kind",
            "Oh, ein Familienrezept?"
          ],
          [
            "speaker-a",
            "Oma",
            "Ja, von meiner Großmutter."
          ],
          [
            "speaker-b",
            "Kind",
            "Was ist daran besonders?"
          ],
          [
            "speaker-a",
            "Oma",
            "Eine Prise Zimt und etwas Zitronenschale."
          ],
          [
            "speaker-b",
            "Kind",
            "Das klingt aufregend."
          ],
          [
            "speaker-a",
            "Oma",
            "Zuerst schlagen wir die Butter cremig."
          ],
          [
            "speaker-b",
            "Kind",
            "Soll ich den Zucker dazugeben?"
          ],
          [
            "speaker-a",
            "Oma",
            "Ja, in kleinen Portionen, damit alles gut vermischt."
          ],
          [
            "speaker-b",
            "Kind",
            "Und nun die Zitronenschale?"
          ],
          [
            "speaker-a",
            "Oma",
            "Genau, sie verleiht den Keksen Frische."
          ],
          [
            "speaker-b",
            "Kind",
            "Während der Teig kühlt, können wir die Formen vorbereiten."
          ],
          [
            "speaker-a",
            "Oma",
            "Eine gute Organisation, mein Kind."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange ruht der Teig?"
          ],
          [
            "speaker-a",
            "Oma",
            "Mindestens eine Stunde im Kühlschrank."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann backen wir sie am Ende goldbraun."
          ],
          [
            "speaker-a",
            "Oma",
            "Und danach schmecken wir gemeinsam."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich bin schon sehr gespannt."
          ]
        ]
      }
    ]
  },
  {
    "title": "Cooking vegetable soup together",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Heute kochen wir Gemuesesuppe."
          ],
          [
            "speaker-b",
            "Kind",
            "Welche Gemuese kommen rein?"
          ],
          [
            "speaker-a",
            "Vater",
            "Karotten, Kartoffeln und Lauch."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich kann die Karotten waschen."
          ],
          [
            "speaker-a",
            "Vater",
            "Sehr gut, danach schaelen wir sie."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Schaeler ist hier."
          ],
          [
            "speaker-a",
            "Vater",
            "Pass auf deine Finger auf."
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, ich bin vorsichtig."
          ],
          [
            "speaker-a",
            "Vater",
            "Jetzt schneiden wir alles klein."
          ],
          [
            "speaker-b",
            "Kind",
            "Die Stuecke sind fast gleich gross."
          ],
          [
            "speaker-a",
            "Vater",
            "Perfekt, dann garen sie gleichmaessig."
          ],
          [
            "speaker-b",
            "Kind",
            "Was kommt als Naechstes?"
          ],
          [
            "speaker-a",
            "Vater",
            "Wir geben alles in den Topf mit Wasser."
          ],
          [
            "speaker-b",
            "Kind",
            "Und Salz?"
          ],
          [
            "speaker-a",
            "Vater",
            "Ja, ein bisschen Salz und Pfeffer."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange kocht die Suppe?"
          ],
          [
            "speaker-a",
            "Vater",
            "Etwa zwanzig Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Darf ich umruehren?"
          ],
          [
            "speaker-a",
            "Vater",
            "Ja, langsam mit dem grossen Loeffel."
          ],
          [
            "speaker-b",
            "Kind",
            "Das Abendessen wird lecker."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Heute kochen wir eine Gemüsesuppe."
          ],
          [
            "speaker-b",
            "Kind",
            "Welches Gemüse haben wir?"
          ],
          [
            "speaker-a",
            "Vater",
            "Karotten, Kartoffeln und Brokkoli."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich wasche das Gemüse."
          ],
          [
            "speaker-a",
            "Vater",
            "Gut, danach schälen wir es."
          ],
          [
            "speaker-b",
            "Kind",
            "Die Karotten sind sauber."
          ],
          [
            "speaker-a",
            "Vater",
            "Jetzt schneiden wir sie in Scheiben."
          ],
          [
            "speaker-b",
            "Kind",
            "Pass auf meine Finger auf!"
          ],
          [
            "speaker-a",
            "Vater",
            "Ich zeige dir, wie es sicher geht."
          ],
          [
            "speaker-b",
            "Kind",
            "So?"
          ],
          [
            "speaker-a",
            "Vater",
            "Genau, die Finger eingerollt lassen."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist einfacher."
          ],
          [
            "speaker-a",
            "Vater",
            "Alles kommt in den Topf."
          ],
          [
            "speaker-b",
            "Kind",
            "Mit Wasser und Salz?"
          ],
          [
            "speaker-a",
            "Vater",
            "Und einer Prise Pfeffer."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie lange kocht die Suppe?"
          ],
          [
            "speaker-a",
            "Vater",
            "Etwa zwanzig Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann rühren wir einmal um."
          ],
          [
            "speaker-a",
            "Vater",
            "Und dann schmecken wir ab."
          ],
          [
            "speaker-b",
            "Kind",
            "Lecker, das wird ein gutes Abendessen."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Heute bereiten wir eine kräftige Gemüsesuppe zu."
          ],
          [
            "speaker-b",
            "Kind",
            "Was kommt alles hinein?"
          ],
          [
            "speaker-a",
            "Vater",
            "Wurzelgemüse, Sellerie und ein Bund Petersilie."
          ],
          [
            "speaker-b",
            "Kind",
            "Warum nimmt man Wurzelgemüse?"
          ],
          [
            "speaker-a",
            "Vater",
            "Es gibt der Suppe einen kräftigen Geschmack."
          ],
          [
            "speaker-b",
            "Kind",
            "Und die Brühe?"
          ],
          [
            "speaker-a",
            "Vater",
            "Die kochen wir aus frischen Zutaten selbst."
          ],
          [
            "speaker-b",
            "Kind",
            "Das dauert sicher länger."
          ],
          [
            "speaker-a",
            "Vater",
            "Etwa eine halbe Stunde, dafür schmeckt es besser."
          ],
          [
            "speaker-b",
            "Kind",
            "Welche Gewürze passen dazu?"
          ],
          [
            "speaker-a",
            "Vater",
            "Majoran, Lorbeerblatt und etwas Muskat."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich schneide das Gemüse in gleichmäßige Stücke."
          ],
          [
            "speaker-a",
            "Vater",
            "Das sorgt dafür, dass alles gleich gar wird."
          ],
          [
            "speaker-b",
            "Kind",
            "Aha, deshalb ist die Konsistenz wichtig."
          ],
          [
            "speaker-a",
            "Vater",
            "Genau, du lernst schnell."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann probieren wir die Suppe?"
          ],
          [
            "speaker-a",
            "Vater",
            "Sobald sie fertig gekocht und abgeschmeckt ist."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich decke schon mal den Tisch."
          ]
        ]
      }
    ]
  },
  {
    "title": "Cleaning up the bedroom",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Bitte raeum dein Zimmer auf."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt sofort?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Ja, vor dem Abendessen."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay, ich fange mit den Legosteinen an."
          ],
          [
            "speaker-a",
            "Mutter",
            "Gute Idee."
          ],
          [
            "speaker-b",
            "Kind",
            "Die Steine kommen in die blaue Kiste."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und die Buecher ins Regal."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich sortiere sie nach Groesse."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr ordentlich."
          ],
          [
            "speaker-b",
            "Kind",
            "Was mache ich mit den alten Blaettern?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Die kommen in den Papierkorb."
          ],
          [
            "speaker-b",
            "Kind",
            "Und die schmutzige Waesche?"
          ],
          [
            "speaker-a",
            "Mutter",
            "In den Waeschekorb neben der Tuer."
          ],
          [
            "speaker-b",
            "Kind",
            "Jetzt ist der Boden frei."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann kannst du kurz staubsaugen."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Fertig?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, schau mal."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut gemacht."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Dein Zimmer sieht unordentlich aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich räume später auf."
          ],
          [
            "speaker-a",
            "Mutter",
            "Bitte jetzt, das dauert nicht lange."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay, ich beginne mit den Legos."
          ],
          [
            "speaker-a",
            "Mutter",
            "Die gehören in die blaue Kiste."
          ],
          [
            "speaker-b",
            "Kind",
            "Und die Bücher ins Regal."
          ],
          [
            "speaker-a",
            "Mutter",
            "Genau, nach Farben sortiert."
          ],
          [
            "speaker-b",
            "Kind",
            "Das sieht gleich besser aus."
          ],
          [
            "speaker-a",
            "Mutter",
            "Der Schreibtisch ist auch voll."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich lege die Stifte ins Etui."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und die Papiere in den Ordner."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Boden ist fast frei."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann staubsaugen wir noch kurz."
          ],
          [
            "speaker-b",
            "Kind",
            "Wo ist der Staubsauger?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Im Schrank im Flur."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich hole ihn gleich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Danach ist dein Zimmer perfekt."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Ich möchte, dass wir heute gründlich aufräumen."
          ],
          [
            "speaker-b",
            "Kind",
            "Reicht es nicht, das Wichtigste wegzuräumen?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Diesmal sortieren wir auch aus."
          ],
          [
            "speaker-b",
            "Kind",
            "Was bedeutet auszusortieren?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Dinge, die du nicht mehr brauchst, spenden wir."
          ],
          [
            "speaker-b",
            "Kind",
            "Also nicht alles wegwerfen?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Richtig, was noch gut ist, bekommt eine zweite Chance."
          ],
          [
            "speaker-b",
            "Kind",
            "Das finde ich sinnvoll."
          ],
          [
            "speaker-a",
            "Mutter",
            "Wir beginnen mit der Kleidung, die zu klein ist."
          ],
          [
            "speaker-b",
            "Kind",
            "Die passt meinem Cousin vielleicht."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut, dann bringen wir sie ihm vorbei."
          ],
          [
            "speaker-b",
            "Kind",
            "Und die alten Hefte?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Die recyclen wir, der Inhalt ist veraltet."
          ],
          [
            "speaker-b",
            "Kind",
            "Danach sieht das Zimmer viel geräumiger aus."
          ],
          [
            "speaker-a",
            "Mutter",
            "Ein aufgeräumtes Zimmer hilft auch beim Konzentrieren."
          ],
          [
            "speaker-b",
            "Kind",
            "Das habe ich nicht gewusst."
          ],
          [
            "speaker-a",
            "Mutter",
            "Probier es aus, du wirst den Unterschied merken."
          ]
        ]
      }
    ]
  },
  {
    "title": "Bedtime routine",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Es ist Zeit zum Schlafen."
          ],
          [
            "speaker-b",
            "Kind",
            "Schon?"
          ],
          [
            "speaker-a",
            "Vater",
            "Ja, es ist halb neun."
          ],
          [
            "speaker-b",
            "Kind",
            "Darf ich noch eine Seite lesen?"
          ],
          [
            "speaker-a",
            "Vater",
            "Ja, eine Seite."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke."
          ],
          [
            "speaker-a",
            "Vater",
            "Hast du schon Zaehne geputzt?"
          ],
          [
            "speaker-b",
            "Kind",
            "Noch nicht, ich gehe jetzt."
          ],
          [
            "speaker-a",
            "Vater",
            "Vergiss auch das Gesicht nicht zu waschen."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich."
          ],
          [
            "speaker-a",
            "Vater",
            "Soll ich die Nachtlampe anlassen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, bitte ganz schwach."
          ],
          [
            "speaker-a",
            "Vater",
            "Okay, so ist es gut?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja."
          ],
          [
            "speaker-a",
            "Vater",
            "Moechtest du eine Gute-Nacht-Geschichte?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, die mit dem kleinen Bären."
          ],
          [
            "speaker-a",
            "Vater",
            "Gern."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich liege schon unter der Decke."
          ],
          [
            "speaker-a",
            "Vater",
            "Schlaf gut und traeum schoen."
          ],
          [
            "speaker-b",
            "Kind",
            "Gute Nacht, Papa."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Es ist Zeit, ins Bett zu gehen."
          ],
          [
            "speaker-b",
            "Kind",
            "Schon so früh?"
          ],
          [
            "speaker-a",
            "Vater",
            "Es ist bereits neun Uhr."
          ],
          [
            "speaker-b",
            "Kind",
            "Darf ich noch etwas lesen?"
          ],
          [
            "speaker-a",
            "Vater",
            "Zehn Minuten."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke, Papa."
          ],
          [
            "speaker-a",
            "Vater",
            "Danach putzt du deine Zähne."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich."
          ],
          [
            "speaker-a",
            "Vater",
            "Soll ich das Fenster öffnen?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ja, ein bisschen."
          ],
          [
            "speaker-a",
            "Vater",
            "Hier ist dein Kuscheltier."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke."
          ],
          [
            "speaker-a",
            "Vater",
            "Gute Nacht, schlaf gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Gute Nacht, Papa."
          ],
          [
            "speaker-a",
            "Vater",
            "Ich lasse das Licht an, bis du einschläfst."
          ],
          [
            "speaker-b",
            "Kind",
            "Das ist nett."
          ],
          [
            "speaker-a",
            "Vater",
            "Bis morgen früh."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Vater",
            "Zeit für die Schlafensroutine, mein Schatz."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich bin noch gar nicht müde."
          ],
          [
            "speaker-a",
            "Vater",
            "Das ist normal, trotzdem ist Schlaf jetzt wichtig."
          ],
          [
            "speaker-b",
            "Kind",
            "Warum genau?"
          ],
          [
            "speaker-a",
            "Vater",
            "Im Schlaf verarbeitet dein Gehirn alles vom Tag."
          ],
          [
            "speaker-b",
            "Kind",
            "Aha, deshalb bin ich in der Schule aufmerksamer."
          ],
          [
            "speaker-a",
            "Vater",
            "Genau, und außerdem wächst du dabei."
          ],
          [
            "speaker-b",
            "Kind",
            "Kannst du mir eine Geschichte vorlesen?"
          ],
          [
            "speaker-a",
            "Vater",
            "Selbstverständlich, eine kurze."
          ],
          [
            "speaker-b",
            "Kind",
            "Und danach dimmen wir das Licht."
          ],
          [
            "speaker-a",
            "Vater",
            "Ja, ein ruhiges Licht hilft beim Einschlafen."
          ],
          [
            "speaker-b",
            "Kind",
            "Wie wäre es mit einem Entspannungslied?"
          ],
          [
            "speaker-a",
            "Vater",
            "Eine schöne Idee, dann singen wir zusammen."
          ],
          [
            "speaker-b",
            "Kind",
            "Danke für die schöne Zeit heute."
          ],
          [
            "speaker-a",
            "Vater",
            "Ich danke dir auch, gute Nacht."
          ]
        ]
      }
    ]
  },
  {
    "title": "Planning tomorrow with a calendar",
    "versions": [
      {
        "label": "V1",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Lass uns den Plan fuer morgen anschauen."
          ],
          [
            "speaker-b",
            "Kind",
            "Okay, was steht zuerst?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Um sieben Uhr aufstehen."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann fruehstuecken wir um halb acht."
          ],
          [
            "speaker-a",
            "Mutter",
            "Richtig."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann faengt die Schule an?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Um acht Uhr."
          ],
          [
            "speaker-b",
            "Kind",
            "Und nach der Schule?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Um drei Uhr hast du Fussballtraining."
          ],
          [
            "speaker-b",
            "Kind",
            "Soll ich Sportsachen vorbereiten?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Ja, heute Abend schon."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich gleich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Um fuenf besuchen wir Oma."
          ],
          [
            "speaker-b",
            "Kind",
            "Dann nehme ich ihr Bild mit."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut."
          ],
          [
            "speaker-b",
            "Kind",
            "Wann gibt es Abendessen?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Um halb sieben zu Hause."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Tag ist voll, aber schoen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Ja, und wir schaffen alles zusammen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich freue mich auf morgen."
          ]
        ]
      },
      {
        "label": "V2",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Schauen wir morgen in den Kalender."
          ],
          [
            "speaker-b",
            "Kind",
            "Was steht an?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Um acht Uhr die Schule."
          ],
          [
            "speaker-b",
            "Kind",
            "Und danach?"
          ],
          [
            "speaker-a",
            "Mutter",
            "Um drei hast du Fußballtraining."
          ],
          [
            "speaker-b",
            "Kind",
            "Dazu brauche ich meine Sportsachen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Die packst du heute Abend."
          ],
          [
            "speaker-b",
            "Kind",
            "Mache ich gleich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Um fünf besuchen wir Oma."
          ],
          [
            "speaker-b",
            "Kind",
            "Das freut mich."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und um sieben gibt es Abendessen."
          ],
          [
            "speaker-b",
            "Kind",
            "Ein voller Tag."
          ],
          [
            "speaker-a",
            "Mutter",
            "Aber gut geplant."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich schreibe alles auf."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann vergisst du nichts."
          ],
          [
            "speaker-b",
            "Kind",
            "Fertig, ich bin vorbereitet."
          ]
        ]
      },
      {
        "label": "V3",
        "lines": [
          [
            "speaker-a",
            "Mutter",
            "Lass uns den morgigen Tag einmal durchplanen."
          ],
          [
            "speaker-b",
            "Kind",
            "Gute Idee, dann vergessen wir nichts."
          ],
          [
            "speaker-a",
            "Mutter",
            "Beginnen wir mit dem Schulweg."
          ],
          [
            "speaker-b",
            "Kind",
            "Der Vater von Lena kann uns mitnehmen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Sehr gut, das spart Zeit."
          ],
          [
            "speaker-b",
            "Kind",
            "Danach habe ich bis zwei Uhr Unterricht."
          ],
          [
            "speaker-a",
            "Mutter",
            "Und nach der Schule?"
          ],
          [
            "speaker-b",
            "Kind",
            "Ich habe eine Verabredung zum Lernen."
          ],
          [
            "speaker-a",
            "Mutter",
            "Bei wem?"
          ],
          [
            "speaker-b",
            "Kind",
            "Bei Sami, wir bereiten uns auf den Test vor."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann bringe ich euch einen Snack vorbei."
          ],
          [
            "speaker-b",
            "Kind",
            "Das wäre großartig, danke."
          ],
          [
            "speaker-a",
            "Mutter",
            "Um sieben Uhr ist das Abendessen geplant."
          ],
          [
            "speaker-b",
            "Kind",
            "Zeitlich reicht das locker aus."
          ],
          [
            "speaker-a",
            "Mutter",
            "Dann ist der Plan perfekt."
          ],
          [
            "speaker-b",
            "Kind",
            "Ich notiere alles im Kalender."
          ]
        ]
      }
    ]
  }
];
