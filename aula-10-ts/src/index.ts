import { z } from "zod";
const estudanteSchema = z.object({
    nome:   z.string()
            .min(3, "Deve conter no mínimo 3 caracteres")
            .max(50, "Deve conter no maximo 50 caracteres"),
    email: z.string()
            .email()
});

type Estudante = z.infer<typeof estudanteSchema>;

let e1:Estudante = {
    nome:"Maria",
    email:"Maria@gmail.com"
}

console.log(estudanteSchema.parse(e1));

const resultado = estudanteSchema.safeParse(e1);

if(!resultado.success){
    resultado.error.errors.forEach(e => console.log(e.message))
}
