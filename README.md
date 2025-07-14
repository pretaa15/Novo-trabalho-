# 🔐 Segurança Digital com Matemática: Criando Senhas Fortes

Este projeto foi criado como parte do módulo de **Segurança Digital** para o **3º ano do Ensino Médio**. O objetivo é mostrar como a **matemática**, especialmente a **análise combinatória**, pode ser usada para entender e construir senhas mais seguras na internet.

---

## 📌 Objetivo do Projeto

- Explicar o que torna uma senha forte.
- Aplicar conceitos matemáticos para calcular o número de combinações possíveis.
- Demonstrar, por meio de um código Python, como gerar senhas seguras.
- Promover o uso consciente e seguro da tecnologia.

---

## 🧠 Conceito Matemático

Utilizamos **potenciação** e **combinatória** para calcular o número de senhas possíveis com um determinado número de caracteres.  
Fórmula:  

---

## 💻 Como funciona o código

O script Python:
1. Gera uma senha forte aleatória com letras, números e símbolos.
2. Calcula quantas combinações diferentes podem ser feitas com esse tipo de senha.
3. Mostra o nível de entropia da senha (medida de segurança).

---

## ▶️ Como usar

Você pode rodar o código em:

- 🧪 [Google Colab](https://colab.research.google.com/)
- 📱 **Pydroid 3** (Android)
- 🌐 [Replit](https://replit.com/)
- 💻 Qualquer editor Python no computador

---

## 📄 Código Python

```python
import random
import string
import math

# Função para gerar senha forte
def gerar_senha(tamanho=12):
    caracteres = string.ascii_letters + string.digits + string.punctuation
        senha = ''.join(random.choice(caracteres) for _ in range(tamanho))
            return senha

            # Função para calcular as combinações possíveis
            def calcular_combinacoes(tamanho):
                total_caracteres = len(string.ascii_letters + string.digits + string.punctuation)
                    return total_caracteres ** tamanho

                    # Exemplo
                    tamanho_senha = 12
                    senha = gerar_senha(tamanho_senha)
                    combinacoes = calcular_combinacoes(tamanho_senha)

                    print("Senha gerada:", senha)
                    print(f"Total de combinações possíveis: {combinacoes}")
                    print(f"Entropia: {math.log2(combinacoes):.2f} bits")
                    
