import pytest
from servico import cadastrar_usuario

def test_cadastro_usuario():
    resultado = cadastrar_usuario("João")
    assert resultado[1] == "João" # Verifica se o nome foi persistido
    
def test_cadastro_invalido():
    with pytest.raises(Exception):
        cadastrar_usuario(None) # Simula erro de entrada
