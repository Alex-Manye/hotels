OOP Exercise

##Instructions in Catalan##

crear una aplicació per donar d’alta, modificar, veure i eliminar hotels.

La classe hotel haurà de tenir els següents atributs: nom, nombre d’habitacions, nombre de plantes i superfície total de l’hotel. Com a mètodes només haurà de tenir els getters i setters propis de la classe i un mètode anomenat calcularManteniment(). Aquest mètode ha de tenir en compte que cada persona del servei pot atendre 20 habitacions i haurà de mostrar quantes persones són necessàries per atendre el servei d’habitacions de l’hotel i quin és el cost total destinat al servei sabent que aquestes persones cobren 1.500€ al mes. 

El mètode crearHotel() haurà de demanar a l’usuari que introdueixi per pantalla les dades de nom,  nombre d’habitacions, nombre de plantes i superfície total de l’hotel. Un cop hagi demanat totes aquestes dades, s’ha d’instanciar l’objecte de la classe i afegir-lo a un array d’hotels.

El mètode donarDeBaixaHotel() ha de demanar quin hotel es vol donar de baixa. L’usuari introduirà el nom de l’hotel i si l’hotel està dintre de l’array, l’eliminarem i mostrarem un missatge per pantalla informant l’usuari que hem eliminat l’hotel. Si no hem trobat l’hotel dintre de l’array, avisarem l’usuari dient que l’hotel no estava dintre de la nostra aplicació.

El mètode veureHotel() ha de demanar a l’usuari el nom de l’hotel que vol que mostrem per pantalla, si l’hotel està a la nostra aplicació, li mostrarem l’hotel, si no hi és, informarem l’usuari dient que l’hotel que ens ha demanat no està dintre de la nostra aplicació.
Quan mostrem l’hotel, a més, de mostrar el nombre d’habitacions, nombre de plantes i superfície total de l’hotel també es cridarà al mètode calcularManteniment().

El mètode modificarHotel() ha de demanar a l’usuari quin hotel vol modificar. L’usuari introduirà el nom de l’hotel. Si el tenim a l’aplicació, li demanarem si vol modificar el nombre d’habitacions, el nombre de plantes o la superfície total de l’hotel. Farem la modificació pertinent i avisarem a l’usuari que la modificació s’ha realitzat.
