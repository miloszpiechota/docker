## Table of contents
* Podejście pierwsze Simpleweb/Dockerfile11 (program bez nginx)
* Podejście drugie Simpleweb/Dockerfile1 (program wykorzystuje nginx)



## A. Podejście pierwsze Simpleweb/Dockerfile11 (program bez nginx)

Dockerfile11 (builder) używa obrazu node:alpine w etapie budowania aplikacji Node.js oraz obrazu alpine w etapie końcowym.
Dudowanie aplikacji Node.js, kopiowanie plików, instalacja Express itp. odbywa się w jednym etapie (builder),
a następnie wynikowy obraz jest kopiowany do drugiego etapu (alpine).
Dockerfile11 instaluje Node.js, npm i Express w obrazie końcowym, co sprawia, że obraz jest większy, 
Dockerfile11 otwiera port 8080, na którym działa serwer Express.

### polecenie do budowy obrazu i wynik jego działania

![image](https://github.com/miloszpiechota/docker/assets/161620373/0ac11353-e97c-47ae-808a-bd01745f4e48)


### polecenie uruchamiające serwer

![image](https://github.com/miloszpiechota/docker/assets/161620373/dfa8350f-95a7-4df9-b8fc-4b0799a05e3b)


### polecenie potwierdzające działanie kontenera i poprawne funkcjonowanieopracowanej aplikacji

![image](https://github.com/miloszpiechota/docker/assets/161620373/6b51cf6f-f8d8-44d4-89ac-9637d1a33e50)


### wynik działania aplikacji -> aplikacja zdaje się działać poprawnie

![image](https://github.com/miloszpiechota/docker/assets/161620373/65a625eb-5dc5-4a47-b141-18c9ebb3204a)



## B. Podejście drugie Simpleweb/Dockerfile1 (program wykorzystuje nginx)

Dockerfile1 (build1) wykorzystuje obraz bazowy node w etapie budowania aplikacji Node.js oraz obraz nginx w etapie końcowym.
Budowanie aplikacji Node.js i kopiowanie plików odbywa się w jednym etapie (build1).
Dockerfile1 nie instaluje Node.js ani Express w obrazie końcowym. Zamiast tego, wykorzystuje gotowy obraz nginx do serwowania
plików statycznych i konfiguracji serwera HTTP.
Dockerfile1 otwiera port 80 w obrazie Nginx.


### polecenie do budowy obrazu i wynik jego działania

![image](https://github.com/miloszpiechota/docker/assets/161620373/0790da42-e6ed-4917-b748-1daf277f9110)


### polecenie uruchamiające serwer

![image](https://github.com/miloszpiechota/docker/assets/161620373/24b75697-3d58-4986-ab57-739718242a1d)


### polecenie potwierdzające działanie kontenera i poprawne funkcjonowanieopracowanej aplikacji

![image](https://github.com/miloszpiechota/docker/assets/161620373/14e5558c-ca10-4cfb-9f50-797b9ad75697)


### wynik działania aplikacji -> strona wyświetla sam kod, więc apliakcja nie działa poprawnie

![image](https://github.com/miloszpiechota/docker/assets/161620373/9ee2f70d-7a4f-4688-97cc-b7adfe58ddf1)



