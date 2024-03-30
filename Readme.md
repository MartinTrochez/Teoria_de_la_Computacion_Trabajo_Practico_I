# Trabajo Practico I - Automata

## Cátedra:
**Teoría de la Computación**

## Docentes:
- Ing. Lapertosa, Sergio
- Lic. Del Rosario, Gabril D.

## Alumnos:
- Duarte, Octavio
- Trochez, Martín

## Carrera:
Ingeniería en Sistemas de Información - Comision "A"

---

## Tipos de Automatas

## Automata Finito Determinante
Un automata finito determinante o DFA, se define la siguiente manera:
> Una DFA es una quintupla $(Q, \Sigma, \sigma, q_0, F)$, en donde:
> - $Q$ es un conjunto finite de estados,
> - $\Sigma$ es un alfabeto finito,
> - $\sigma : Q \times \Sigma \rightarrow Q$ es la función de transición,
> - $q_0$ es el estado inicial,
> - $F \subseteq Q$ es es conjunto de estados de aceptación.

## Automata Finito No Determinante
Un automata finito no determinante o NDFA, de la siguiente manera:
> Una NDFA es una quintupla $(Q, \Sigma, \sigma, q_0, F)$, en donde:
> - $Q$ es un conjunto finite de estados,
> - $\Sigma$ es un alfabeto finito,
> - $\sigma : Q \times \Sigma \rightarrow P(Q)$ es la función de transición en la cual $P(Q)$ representa un una colección de todos los subconjuntos de $Q$,
> - $q_0$ es el estado inicial,
> - $F \subseteq Q$ es es conjunto de estados de aceptación.
