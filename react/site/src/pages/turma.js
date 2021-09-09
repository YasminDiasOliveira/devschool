import { Turma } from "../components/turma";
import { Cabecalho } from "../components/cabecalho";
import { Borda } from "../components/borda";
import { Novo } from "../components/novo";
import { Botao } from "../components/botao";
import { Titulo } from "../components/titulo";
import { Input } from "../components/input";
import { Cab } from "../components/cab";
import { Tabela } from "../components/tabela";
import { Tabela1 } from "../components/tabela1";
import { Tabela2 } from "../components/tabela2";
import { Fonte_Bold } from "../components/fonte-bold";

export default function Turma3() {
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
        <Titulo>Novo Aluno</Titulo>

        <Input>
          <div class="input1">
            <div class="box1">
              <label for="nome">Nome:</label>
              <input type="text" class="text-input" />
            </div>

            <div class="box">
              <label for="nome">Chamada:</label>
              <input type="text" class="text-input" />
            </div>
          </div>

          <div class="input2">
            <div class="box">
              <label for="nome">Curso:</label>
              <input type="text" class="text-input" />
            </div>

            <div class="box">
              <label for="nome">Turma:</label>
              <input type="text" class="text-input" />
            </div>
          </div>

          <Botao>
            <a href=""> Cadastrar </a>
          </Botao>
        </Input>
      </Novo>

      <Novo>
        <div class="row-bar">
          <div class="bar-new-student"></div>
          <Titulo>Alunos Matriculados</Titulo>
        </div>

        <Tabela>
          <thead>
            <Cab>
              <th>ID</th>
              <th>Nome</th>
              <th>Chamada</th>
              <th>Turma</th>
              <th>Curso</th>
              <th></th>
              <th></th>
            </Cab>
          </thead>

          <tbody>
            <Tabela1>
              <td>1</td>
              <td>Fulao da Silva Sauro</td>
              <td>14</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela1>

            <Tabela2>
              <td>2</td>
              <td>Fulao da Silva Sauro</td>
              <td>15</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela2>

            <Tabela1>
              <td>3</td>
              <td>Fulao da Silva Sauro</td>
              <td>16</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela1>

            <Tabela2>
              <td>4</td>
              <td>Fulao da Silva Sauro</td>
              <td>17</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela2>

            <Tabela1>
              <td>5</td>
              <td>Fulao da Silva Sauro</td>
              <td>18</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela1>

            <Tabela2>
              <td>6</td>
              <td>Fulao da Silva Sauro</td>
              <td>19</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela2>

            <Tabela1>
              <td>7</td>
              <td>Fulao da Silva Sauro</td>
              <td>20</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela1>

            <Tabela2>
              <td>8</td>
              <td>Fulao da Silva Sauro</td>
              <td>21</td>
              <td>InfoX</td>
              <td>Informática</td>
              <td>
                <img src="/imgs/alterar.png" alt="" />
              </td>
              <td>
                <img src="/imgs/deletar.png" alt="" />
              </td>
            </Tabela2>
          </tbody>
        </Tabela>
      </Novo>
    </Turma>
  );
}