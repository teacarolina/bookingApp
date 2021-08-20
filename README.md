# Gruppinlämning 2

## Vad är en CMS, headless cms, Firebase/serverless/backend as a service?
CMS (Content Management System) används för att hantera webinnehåll. Wordpress är ett exempel på ett CMS som har en databas, UI och API endpoint. 
CMS har färdiga UI som man kan styla och man använder templates för att visa innehållet för användaren som lagras i en databas. CMS kräver även vanligtvis att man använder deras standardramverk. 

Headless CMS får data från en API och kan sedan visas upp på önskat sätt. Det här ger mer flexibilitet vid design då man inte är begränsad av templates och mallar, utan kan designa hur man vill. Det ger möjligheten att göra sin egen UI och man behöver inte längre använda den som kommer från CMS. Det här ger även utvecklare möjligheten att använda vilket ramverk dem vill. Man kommunicerar här med hjälp av API via dem olika systemen. 
Firebase är en backend applikation som är skapad av Google. Det är ett serverless ramverk som automatiskt kör backend kod för att trigga de olika Firebase funktionerna samt HTTPS requests. Utvecklare kan använda den för att utveckla mobil och webapplikationer. Den erbjuder många olika funktioner som t.ex. Google Analytics och Firebase Authentication. 

Serverless är målbaserat och låter utvecklare köra applikationer utan att behöva hantera servrarna själv. Det finns fortfarande servrar i serverless men de är hanterade av leverantören och de ser till att infrastrukturen fungerar och skalar upp den vid behov. Serverless appar körs endast vid behov och när dem kallas vilket gör dem kostnadseffektiva.

Backend as a service (BaaS) låter utvecklare fokusera på frontend så man behöver inte bygga eller underhålla backend, då man outsourcar backend. BaaS leverantörer erbjuder färdigskriven software för allt från det som sker på servern, user authentication och cloud storage. Man använder sig av API och SDK för att koppla upp sig mot BaaS.

## Skillnaden mellan cms och backend as a service?
Skillnaden är att med Backend as a service (Baas) är att man behöver koppla sig mot databasen vid API och SDK medan med CMS så sköts kopplingen till databasen automatiskt. Båda låter utvecklaren fokusera på frontend och enkelt ändra innehåll. 

## Vilket sammanhang ska man använda headless cms och vanlig cms?  
Innehåll som skapas via CMS fungerar endast för dem plattformar det är utformat för medan Headless CMS ger mer flexibilitet och kan användas för flera plattformar.
Traditionellt CMS är mycket enklare att komma igång med och arbeta i och kan vara bra att använda för företag där man inte har ett utvecklarteam. Även för små företag och enklare hemsidor. CMS hjälper alltså användare att skapa, underhålla och ändra innehåll för hemsidan utan att behöva vara tekniskt kunnig. För med Headless CMS måste man få ihop alla pusselbitar för att systemet ska fungera. Största skillnaden är att man inte har en front end att kombinera med databasens data utan istället behöver man bygga en hemsida och använda API för att visa innehållet för användare.
Fördelarna med Headless CMS är att det är enklare att hantera innehåll för flera kanaler, snabbare laddningstid, snabbare editering och även en mer säkerhet till din hemsida. Det är även mindre troligt med en attack mot ditt Headless CMS då backend är separat från frontend. 
Fördelarna med vanlig CMS är enkla mallar och mindre tid och kostnad för att implementera.