# Event Sourcing em JavaScript

## Visão Geral

Este repositório demonstra o conceito de Event Sourcing (ou "Registro de Eventos") em JavaScript. O Event Sourcing é uma abordagem arquitetural que se concentra em registrar todos os eventos que ocorrem em um sistema, em vez de apenas manter o estado atual. Isso permite reconstruir o estado do sistema a qualquer momento, auditar ações passadas e manter uma fonte única de verdade.

## Como Funciona

- **Eventos:** Em vez de atualizar o estado diretamente, cada ação no sistema é registrada como um evento. Um evento é um objeto que descreve o que aconteceu. Exemplo: "Pedido Criado", "Produto Adicionado ao Carrinho", etc.

- **Log de Eventos:** Todos os eventos são armazenados em um log de eventos, que é uma sequência imutável de eventos na ordem em que ocorreram.

- **Projeções:** Para obter o estado atual, os eventos são aplicados em ordem a uma projeção. Cada projeção pode representar uma visualização específica do estado do sistema.

- **Reprodução de Eventos:** Como os eventos são armazenados em ordem cronológica, é possível reproduzi-los para reconstruir o estado atual do sistema a qualquer momento.

## Por que Event Sourcing?

- **Auditoria:** Todos os eventos são registrados, o que facilita a auditoria e o rastreamento de todas as ações realizadas no sistema.

- **Recuperação de Falhas:** Em caso de falhas, é possível reconstruir o estado do sistema a partir dos eventos registrados.

- **Modelo de Domínio Complexo:** Útil quando o modelo de domínio do sistema é complexo e a evolução desse modelo é importante.

- **Múltiplas Visualizações:** Permite criar várias visualizações do estado do sistema sem afetar o registro de eventos.

## Exemplos de Uso

Este repositório inclui exemplos de implementações simples de Event Sourcing em JavaScript. Você encontrará:

- Um log de eventos simulado.
- Projeções para construir estados a partir de eventos.
- Exemplos de eventos e como aplicá-los.


## Contribuição

Sinta-se à vontade para contribuir com exemplos adicionais, aprimoramentos ou correções de bugs. Basta abrir uma [issue](https://github.com/felpsalvs/event-sourcing-js/issues) ou enviar um [pull request](https://github.com/felpsalvs/event-sourcing-js/pulls).
