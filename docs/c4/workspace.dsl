/*
 * Gerado por fernando-moretes/platform como ponto de partida. ESTE arquivo e
 * seu: o rollout so cria se nao existir, nunca sobrescreve.
 *
 * Modelo C4 de ref-sa-daily-toolkit. Renderize em https://c4.home.lab (Structurizr Lite)
 * ou cole em https://structurizr.com/dsl.
 */
workspace "ref-sa-daily-toolkit" "Daily skills, scripts and templates for Solution Architects: ADRs, Well-Architected, threat modeling, sizing, RFCs." {

    model {
        usuario = person "Usuário"
        sistema = softwareSystem "ref-sa-daily-toolkit" "Daily skills, scripts and templates for Solution Architects: ADRs, Well-Architected, threat modeling, sizing, RFCs." {
            app = container "Aplicação" "Descreva o que roda aqui" "ci-node.yml"
        }
        usuario -> sistema.app "Usa"
    }

    views {
        systemContext sistema "contexto" {
            include *
            autoLayout lr
        }
        container sistema "containers" {
            include *
            autoLayout lr
        }
        styles {
            element "Person" { shape person; background #08427b; color #ffffff }
            element "Software System" { background #1168bd; color #ffffff }
            element "Container" { background #438dd5; color #ffffff }
        }
    }
}
