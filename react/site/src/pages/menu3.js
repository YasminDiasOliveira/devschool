import { Menu } from "../components/menu";
import { Faixa } from "../components/faixa";
import { Rosa } from "../components/rosa";
import { Menu2 } from "../components/menu2";

export default function Menu3() {
  return (
    <Menu>
      <div class="logo">
        <img src="/imgs/logo.png" alt="" />
         DevSchool
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
