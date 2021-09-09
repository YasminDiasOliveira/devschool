import { Turma } from "../components/turma";
import { Cabecalho } from "../components/cabecalho";
import { Borda } from "../components/borda";
import { Novo } from "../components/novo";
import { Botao } from "../components/botao";
import { Titulo } from "../components/titulo";
import { Input } from "../components/input";
import { Fonte_Bold } from "../components/fonte-bold";

import { useState, useEffect } from "react";

import Api from '../service/api';
const api = new Api();

export default function Turma3() {

  const [alunos, setAlunos] = useState([]);
  const [nome, setNome] = useState('');
  const [chamada, setChamada] = useState('');
  const [turma, setTurma] = useState('');
  const [curso, setCurso] = useState('');
  const [idAlterando, setIdAlterando] = useState(0);


  async function listar() {
    let r = await api.listar();
    setAlunos(r);
  }

  async function inserir() {

    if(idAlterando == 0) { 
      let r = await api.inserir(nome, chamada, curso, turma);

      if(r.erro) 
        alert(r.erro);
      else
        alert('Aluno inserido!');

    } else {
      let r = await api.alterar(idAlterando, nome, chamada, curso, turma);

      if(r.erro) 
        alert(r.erro);
      else
        alert('Aluno alterado!');
    }

    limparCampos();
    listar();
  }

  function limparCampos() {
    setNome('');
    setChamada('');
    setCurso('');
    setTurma('');
    setIdAlterando(0);
  }

  async function remover(id) {
    let r = await api.remover(id);
    alert('Aluno removido');

    listar();
  }

  async function editar(item){
    setNome(item.nm_aluno);
    setChamada(item.nr_chamada);
    setCurso(item.nm_curso);
    setTurma(item.nm_turma);
    setIdAlterando(item.id_matricula);
  }

  useEffect(() => {
    listar();
  }, [])

  return (
    <Turma>
      <Cabecalho>
        <div class="usuario">
          <img src="/imgs/usu.png" alt="" />
          Olá, <Fonte_Bold> Yasmin Dias de Oliveira </Fonte_Bold>
        </div>

        <div class="botoes">
          <img src="/imgs/recarregar.png" alt="" />
          <img src="/imgs/sair.png" alt="" />
        </div>
      </Cabecalho>

      <Borda />

      <Novo>
        <Titulo> {idAlterando == 0 ? "Novo Aluno" : "Alterando Aluno " +  idAlterando } </Titulo>

        <Input>
          <div class="input1">
            <div class="box1">
              <label for="nome">Nome:</label>
              <input type="text" value={nome} onChange={e => setNome(e.target.validationMessage)} class="text-input" />
            </div>

            <div class="box">
              <label for="nome">Chamada:</label>
              <input type="text" value={chamada} onChange={e => setChamada(e.target.validationMessage)} class="text-input" />
            </div>
          </div>

          <div class="input2">
            <div class="box">
              <label for="nome">Curso:</label>
              <input type="text" value={curso} onChange={e => setCurso(e.target.validationMessage)} class="text-input" />
            </div>

            <div class="box">
              <label for="nome">Turma:</label>
              <input type="text" value={turma} onChange={e => setTurma(e.target.validationMessage)} class="text-input" />
            </div>
          </div>

          <Botao>
            <button onClick={inserir}> {idAlterando == 0 ? "Cadastrar" : "Alterar"} </button>
          </Botao>
        </Input>
      </Novo>

      <Novo>
        <div class="row-bar">
          <div class="bar-new-student"></div>
          <Titulo>Alunos Matriculados</Titulo>
        </div>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Chamada</th>
              <th>Turma</th>
              <th>Curso</th>
              <th></th>
              <th></th>
            </tr>
          </thead>

          <tbody>
            {alunos.map((item, i) =>
              <tr className={i % 2 == 0 ? "linha-alternada" : ""}>
                <td> {item.id_matricula} </td>
                <td title={item.nm_aluno}> 
                      {item.nm_aluno != null && item.nm_aluno.length >= 25 
                      ? item.nm_aluno.substr(0, 25) + '...' 
                      : item.nm_aluno} 
                </td>
                <td> {item.nr_chamada} </td>
                <td> {item.nm_turma} </td>
                <td> {item.nm_curso} </td>
                <td className="coluna-acao"> <button onClick={() => editar(item)} > <img src="/imgs/alterar.png" alt="" /> </button> </td> 
                <td className="coluna-acao"> <button onClick={() => remover(item.id_matricula) }> <img src="/imgs/deletar.png" alt="" /> </button> </td>
              </tr>
            )}
          </tbody>
        </table>
      </Novo>
    </Turma>
  );
}