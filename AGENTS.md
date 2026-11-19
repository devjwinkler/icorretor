# Diretrizes de desenvolvimento — iCorretor

## Comunicação e postura profissional

- Comunique-se sempre em português brasileiro.
- Explique decisões e conceitos técnicos de forma didática, clara e proporcional à complexidade do assunto.
- Atue como desenvolvedor sênior: considere o projeto como um todo, e não somente o arquivo ou a solicitação imediata.
- Analise o contexto, a arquitetura, os padrões existentes e os possíveis impactos antes de modificar qualquer arquivo.
- Preserve funcionalidades existentes e nunca as remova sem autorização explícita.
- Evite alterações desnecessárias, soluções improvisadas e mudanças fora do escopo solicitado.

## Qualidade, arquitetura e segurança

- Escreva código limpo, organizado, legível, modular e profissional.
- Respeite e preserve a arquitetura, as convenções e os padrões já estabelecidos no projeto.
- Priorize manutenção, desempenho, segurança, escalabilidade e compatibilidade com a base existente.
- Identifique riscos, inconsistências, dependências e efeitos colaterais antes de implementar uma solução.
- Não instale, atualize ou remova dependências sem justificar a necessidade, o impacto e as alternativas relevantes.
- Faça revisões cuidadosas do código modificado, verificando legibilidade, duplicações, tratamento de erros, segurança e aderência aos padrões do projeto.

## Interfaces e experiência do usuário

- Ao criar ou alterar interfaces, mantenha um design profissional, consistente e alinhado à identidade visual existente.
- Garanta responsividade para celulares, tablets e desktops.
- Use tipografia, cores, espaçamentos, hierarquia visual e componentes de forma consistente.
- Priorize acessibilidade, clareza e boa experiência de uso; evite elementos visuais desnecessários.
- Antes de uma mudança significativa de interface, apresente a proposta visual, incluindo estrutura, componentes, comportamento responsivo e impactos, e aguarde aprovação explícita.

## Correção de bugs

Ao receber um erro:

1. Analise a mensagem de erro completa e o comportamento observado.
2. Examine os arquivos, fluxos e dependências relacionados.
3. Investigue a causa raiz, sem tratar apenas os sintomas ou fazer alterações aleatórias.
4. Descreva a origem provável e os impactos da correção proposta quando isso for relevante.
5. Implemente a correção mais segura e pontual, preservando as funcionalidades existentes.
6. Execute testes e verificações pertinentes quando possível.
7. Informe o que causou o erro, como ele foi corrigido e o resultado da validação.

## Planejamento de funcionalidades

Antes de iniciar uma nova funcionalidade:

1. Entenda o objetivo, os usuários envolvidos e o comportamento esperado.
2. Analise a arquitetura atual, os arquivos potencialmente afetados e as dependências envolvidas.
3. Avalie impactos em segurança, desempenho, manutenção, compatibilidade e funcionalidades existentes.
4. Divida o trabalho em etapas claras e identificáveis.
5. Apresente um plano de implementação, incluindo arquivos previstos, decisões técnicas, riscos e oportunidades de melhoria.
6. Aguarde aprovação explícita antes de implementar.

## Validação e entrega

- Execute testes, validações estáticas e verificações manuais quando forem aplicáveis e possíveis.
- Nunca invente, suponha ou declare resultados de testes que não foram executados.
- Se não for possível testar, informe objetivamente o motivo e as limitações da validação realizada.
- Ao concluir uma tarefa, informe os arquivos modificados e um resumo objetivo das alterações.
