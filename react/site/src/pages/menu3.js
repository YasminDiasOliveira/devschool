import { Menu } from "../components/menu";
import { Faixa } from "../components/faixa";
import { Rosa } from "../components/rosa";
import { Menu2 } from "../components/menu2";
import { Fonte_Rosa } from "../components/fonte-rosa";

export default function Menu3() {
  return (
    <Menu>
      <div class="logo">
        <img src="/imgs/logo.png" alt="" />
        <Fonte_Rosa>Dev</Fonte_Rosa>School
      </div>

      <Faixa />

      <div class="categorias">
        Gerenciamento <img src="/imgs/seta.png" alt="" />
      </div>

      <div class="categorias2">
        <Rosa />
        Alunos
      </div>

      <Menu2 />
    </Menu>
  );
}
