import { create } from "zustand";

export type User = {
    name: string;
    weight: string;
    age: string;
    height: string;
    level: string;
    objective: string;
    gender: string;
};

type DataState = {
    user: User;
    //Quando chamar o setPageOne, deve passar a propriedade data que é do tipo User, mas ele omite estes 3 atributos
    //Omit => Omite as propriedades que forem definidas
    setPageOne: (data: Omit<User, "gender" | "objective" | "level">) => void;
    //Pick => Pega somente as propriedades que forem definidas
    setPageTwo: (data: Pick<User, "gender" | "objective" | "level">) => void;
};

export const useDataStore = create<DataState>((set) => ({
    user: {
        name: "",
        weight: "",
        age: "",
        height: "",
        level: "",
        objective: "",
        gender: "",
    },
    //Mantém o que já tem do usuário + o que for mandado na propriedade data
    setPageOne: (data) =>
        set((state) => ({
            user: { ...state.user, ...data },
        })),
    setPageTwo: (data) =>
        set((state) => ({
            user: { ...state.user, ...data },
        })),
}));
