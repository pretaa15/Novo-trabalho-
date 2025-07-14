function gerarSenha(tamanho = 12) {
      const letras = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numeros = "0123456789";
          const simbolos = "!@#$%^&*()_+[]{}|;:,.<>?";

            const todos = letras + numeros + simbolos;
              let senha = "";

                for (let i = 0; i < tamanho; i++) {
                    const random = Math.floor(Math.random() * todos.length);
                        senha += todos[random];
                          }

                            return senha;
                            }

                            function calcularCombinacoes(tamanho) {
                              const totalCaracteres = 26 * 2 + 10 + 30; // letras + números + símbolos
                                return Math.pow(totalCaracteres, tamanho);
                                }

                                // Exibir na tela
                                document.addEventListener("DOMContentLoaded", () => {
                                  const senha = gerarSenha(12);
                                    const combinacoes = calcularCombinacoes(12);

                                      document.getElementById("senha").textContent = senha;
                                        document.getElementById("combinacoes").textContent = combinacoes.toLocaleString();
                                        });

}<script src="script.js"></script>
