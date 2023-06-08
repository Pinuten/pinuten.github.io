README.txt
===========

Flickr Galleri
===============

Detta är en React-applikation som visar en Flickr-galleri med bilder baserat på en tagg. Applikationen använder Flickr API för att hämta bilder och visar dem i en responsiv grid-layout.
Appen är skriven i Typescript och jag har använt Next.js. 

Installation
------------

Följ stegen nedan för att installera och köra applikationen lokalt:

1. Klona eller ladda ner projektet till din dator.

2. Navigera till projektmappen i terminalen.

3. Kör följande kommando för att installera alla nödvändiga beroenden: npm install 

4. Starta applikationen genom att köra följande kommando: npm start



Applikationen kommer att köras i utvecklingsläge och du kan öppna den i din webbläsare på [http://localhost:3000](http://localhost:3000).

Användning
----------

När applikationen körs kan du använda sökfältet för att söka efter bilder baserat på en tagg. Skriv in önskad tagg och tryck på Enter eller klicka på sökknappen. Applikationen kommer att hämta bilder från Flickr API och visa dem i galleriet.

Komponenter
-----------

App
---

Den här komponenten är rotkomponenten för applikationen och innehåller Banner-komponenten och FlickrGallery-komponenten. Banner-komponenten används för att söka efter bilder baserat på en tagg, medan FlickrGallery-komponenten visar galleriet med bilder.

Banner
------

Banner-komponenten är ett enkelt sökfält för att söka efter bilder baserat på en tagg. När användaren skriver in en tagg och trycker på Enter eller klickar på sökknappen, skickas taggen till överordnade komponenten för att uppdatera bilderna i galleriet.

FlickrGallery
-------------

FlickrGallery-komponenten visar en grid-layout av bilder baserat på den tagg som skickas som en egenskap. Komponenten använder Flickr API för att hämta bilder baserat på taggen och visar dem i ett responsivt galleri.

API-nyckel
----------

Applikationen använder Flickr API för att hämta bilder. En giltig API-nyckel krävs för att kunna använda Flickr API. Du kan skapa en API-nyckel genom att registrera dig på Flickr Developer Portal och skapa ett API-nyckelpar.

När du har skapat din API-nyckel, kan du ersätta den befintliga nyckeln i koden med din egen:

1. Öppna "FlickrGallery.tsx"-filen.

2. Hitta följande rad:
const apiKey = '9946f8a0988e53386bfe120cff3d26e8';


3. Ersätt "'9946f8a0988e53386bfe120cff3d26e8'" med din API-nyckel.

Anpassning
----------

Du kan anpassa applikationen genom att ändra vissa inställningar och stilar i koden. Här är några möjliga anpassningar du kan göra:

- I "FlickrGallery.tsx" kan du ändra antalet bilder som visas genom att justera "slice"-metoden på raden `const randomIndices = images.map((_, index) => index).sort(() => 0.5 - Math.random()).slice(0, 12);`.

- I "FlickrGallery.tsx" kan du ändra intervallet för att byta bilder genom att justera "setInterval"-metoden på raden `const timer = setInterval(updateImages, 30000);`.

- I "FlickrGallery.tsx" kan du ändra grid-layout genom att ändra "gridTemplateColumns" och "gridAutoRows" i CSS-stilen.

- I "Banner.tsx" kan du ändra sökikonen genom att ersätta "lookingglass.png"-filen med din egen bild.

