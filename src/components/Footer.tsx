import imgLogo from "../assets/devflow.png";
export function Footer() {
  return (
    <footer className="flex items-center justify-between px-6 pt-6 border-t border-gray-500">
      <nav className="flex items-center">
        <img src={imgLogo} alt="imagem da logo" className="w-[162px]" />
        <span className="text-lg text-gray-300">DevFlow - Todos os direitos reservados</span>
      </nav>
      <a href="#" className="mr-8 text-lg text-gray-300">Políticas de privacidade</a>
    </footer>
  );
}