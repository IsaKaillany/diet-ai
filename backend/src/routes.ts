import {
    FastifyInstance,
    FastifyPluginOptions,
    FastifyRequest,
    FastifyReply,
} from "fastify";
import { CreateNutritionController } from "./controllers/CreateNutritionController";

export async function routes(
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) {
    fastify.get("/teste", (request: FastifyRequest, reply: FastifyReply) => {
        let responseText =
            '```json\n{\n  "nome": "Isa",\n  "sexo": "Feminino",\n  "idade": 21,\n  "altura": 1.54,\n  "peso": 49,\n  "objetivo": "Hipertrofia",\n  "refeicoes": [\n    {\n      "horario": "08:00",\n      "nome": "Café da Manhã",\n      "alimentos": [\n        "2 fatias de pão integral",\n        "1 ovo mexido",\n        "1 banana",\n        "200ml de leite desnatado",\n        "1 colher de sopa de azeite de oliva"\n      ]\n    },\n    {\n      "horario": "10:00",\n      "nome": "Lanche da Manhã",\n        "alimentos": [\n        "1 iogurte grego natural",\n        "1/2 xícara de frutas vermelhas"\n      ]\n    },\n    {\n      "horario": "12:00",\n      "nome": "Almoço",\n      "alimentos": [\n        "150g de frango grelhado",\n        "1 xícara de arroz integral",\n        "1 xícara de brócolis",\n        "1 batata doce média"\n      ]\n    },\n    {\n      "horario": "15:00",\n      "nome": "Lanche da Tarde",\n      "alimentos": [\n        "1 scoop de whey protein",\n        "1 banana"\n      ]\n    },\n    {\n      "horario": "18:00",\n      "nome": "Jantar",\n      "alimentos": [\n        "150g de peixe grelhado",\n        "1 xícara de quinoa",\n        "1 xícara de espinafre",\n        "1/2 abacate"\n      ]\n    },\n    {\n      "horario": "20:00",\n      "nome": "Lanche da Noite",\n      "alimentos": [\n        "1 iogurte grego natural",\n        "1 colher de sopa de granola"\n      ]\n    }\n  ],\n  "suplementos": [\n    "Whey protein",\n    "Creatina",\n    "BCAA"\n  ]\n}\n```';

        try {
            //Extrair o JSON removendo o markdown
            let jsonString = responseText
                .replace(/```\w*\n/g, "")
                .replace(/\n```/g, "")
                .trim();

            let jsonObject = JSON.parse(jsonString);

            return reply.send({ data: jsonObject });
        } catch (err) {
            console.log(err);
        }

        reply.send({ ok: true });
    });

    fastify.post(
        "/create",
        async (request: FastifyRequest, reply: FastifyReply) => {
            return new CreateNutritionController().handle(request, reply);
        }
    );
}
