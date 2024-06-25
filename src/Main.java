public class Main {
    public static void main(String[] args) {
        System.out.println("Esse é o Sreen Match");
        System.out.println("Filme: Top Gun Maverick");

        int ano = 2022;
        System.out.println("Ano: " + ano);



        double notaDoFilme = 8.3;
        System.out.println("Sua Nota: " + notaDoFilme);

        boolean incluidoNoPlano = false;

        if(incluidoNoPlano == true) {
            System.out.println("Disponível");
        } else {
            System.out.println("Alugar!");
        }
        double media = (9.5 + 8.3 + 5) /3;                     //média dos votos cadastrados
        String mediaFinal = String.format("%.2f", media);     /* comentar varias linhas  */
        System.out.println("Nota Geral: " + mediaFinal);

        String sinopse;
        sinopse = """
                No mundo contemporâneo das guerras tecnológicas, Maverick enfrenta drones e prova que o fator humano ainda é essencial.
                Diretor: Joseph Kosinski
                Bilheteria: U$ 1,493 bi
                
                """;
        System.out.println(sinopse);

    }
}