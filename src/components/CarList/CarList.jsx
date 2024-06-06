import React, { useState } from "react";

const listaCarros = [
  {
    nome: "Fiat Mobi",
    preço: 55000,
    imagem: "/mobi.png",
    ano: 2020,
    atrasoAos: "0",
    descrição:
      "Um verdadeiro explorador das ruas, o Fiat Mobi possui um design jovem pensado para enfrentar as ruas e avenidas com muita presença e estilo e ainda mais! Brutalmente econômico, o Mobi possui uma excelente relação peso-potência, que garante agilidade e respostas mais rápidas. Tudo o que você precisa para rodar mais e gastar menos.",
    melhor: false,
    maisLocado: true,
  },
  {
    nome: "Honda Civic",
    preço: 66348,
    imagem: "/civic.png",
    ano: 2016,
    atrasoAos: "500",
    descrição:
      "Sedãs são carros geralmente associados ao conforto - tanto pela estabilidade quanto pelo maior espaço interno, especialmente no assento traseiro. Essas características se aplicam ao Honda Civic 2016, que também conta com um excelente porta-malas de 449 litros, tornando-o ideal para viagens em família!",
    melhor: true,
    maisLocado: false,
  },
  {
    nome: "Fiat Argo",
    preço: 54915,
    imagem: "/argo.png",
    ano: 2020,
    atrasoAos: "1000",
    descrição:
      "Experimente uma condução prazerosa de verdade com o Motor 1.3 Firefly com 107 cv de potência. Ele é o sonho de todo motorista que busca desempenho aliado ao melhor consumo de combustível no Argo.",
    melhor: false,
    maisLocado: true,
  },
];

const DetalhesCarro = ({ carro, aoFechar, aoComprar }) => {
  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-lg relative">
        <button
          onClick={aoFechar}
          className="absolute top-3 right-3 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Voltar
        </button>
        <h2 className="text-2xl font-semibold mb-4">{carro.nome}</h2>
        <img
          src={carro.imagem}
          alt={carro.nome}
          className="w-full mb-4 transform scale-50"
        />
        <p className="mb-4">{carro.descrição}</p>
        <p>Ano: {carro.ano}</p>
        <p>Preço: ${carro.preço}</p>
        <div className="flex justify-center mt-4">
          <button
            onClick={aoComprar}
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          >
            Comprar ou alugar
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalContato = ({ aoFechar }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Nome:", nome);
    console.log("E-mail:", email);
    console.log("Telefone:", telefone);
    aoFechar();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg max-w-lg relative">
        <button
          onClick={aoFechar}
          className="absolute top-3 right-3 bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700"
          style={{ marginTop: "1rem" }}
        >
          Fechar
        </button>
        <h2 className="text-2xl font-semibold mb-4 mt-10">
          Preencha seus dados para compra ou alocação!
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nome" className="block text-gray-700 font-semibold">
              Nome:
            </label>
            <input
              type="text"
              id="nome"
              className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              E-mail:
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="telefone" className="block text-gray-700 font-semibold">
              Telefone:
            </label>
            <input
              type="tel"
              id="telefone"
              className="border border-gray-300 rounded-md w-full px-3 py-2 mt-1"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-700 w-full"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

const ListaCarros = () => {
  const [carroSelecionado, setCarroSelecionado] = useState(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [modalContatoAberto, setModalContatoAberto] = useState(false);
  const [filtro, setFiltro] = useState("todos");

  const abrirDetalhesCarro = (carro) => {
    setCarroSelecionado(carro);
    setModalAberto(true);
  };

  const fecharDetalhesCarro = () => {
    setCarroSelecionado(null);
    setModalAberto(false);
  };

  const fecharModalContato = () => {
    setModalContatoAberto(false);
  };

  const comprarCarro = () => {
    fecharDetalhesCarro();
    setModalContatoAberto(true);
  };

  const carrosFiltrados = listaCarros.filter((carro) => {
    if (filtro === "melhor") return carro.melhor;
    if (filtro === "maisLocado") return carro.maisLocado;
    if (filtro === "destaques") return carro.nome === "Honda Civic"; // Filtro para destacar o Honda Civic
    return true;
  });

  return (
    <div className="pb-24">
      <div className="container">
        <h1
          data-aos="fade-up"
          className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-3xl sm:text-5xl"
          style={{ fontFamily: "Segoe UI" }}
        >
          Top três em vendas e locações!!
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="400"
          className="text-base sm:text-lg pb-12"
        >
          Está à procura do carro dos seus sonhos? Nossa loja é o caminho!
        </p>
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setFiltro("todos")}
            className={`px-4 py-2 mx-2 ${
              filtro === "todos" ? "bg-blue-900 text-white" : "bg-gray-300"
            } rounded-md`}
          >
            Todos
          </button>
          <button
            onClick={() => setFiltro("melhor")}
            className={`px-4 py-2 mx-2 ${
              filtro === "melhor" ? "bg-blue-900 text-white" : "bg-gray-300"
            } rounded-md`}
          >
            Melhor
          </button>
          <button
            onClick={() => setFiltro("maisLocado")}
            className={`px-4 py-2 mx-2 ${
              filtro === "maisLocado" ? "bg-blue-900 text-white" : "bg-gray-300"
            } rounded-md`}
          >
            Mais Locado
          </button>
          <button
            onClick={() => setFiltro("destaques")}
            className={`px-4 py-2 mx-2 ${
              filtro === "destaques" ? "bg-blue-900 text-white" : "bg-gray-300"
            } rounded-md`}
          >
            Destaques
          </button>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
            {carrosFiltrados.map((carro, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={carro.atrasoAos}
                className="space-y-3 border-2 border-gray-300 hover:border-blue-700 p-3 rounded-xl relative group"
                onClick={() => abrirDetalhesCarro(carro)}
              >
                <div className="w-full h-[120px]">
                  <img
                    src={carro.imagem}
                    alt=""
                    className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:sm:translate-x-16 duration-700"
                  />
                </div>
                <div className="space-y-2">
                  <h1 className="text-blue-900 font-semibold">{carro.nome}</h1>
                  <div className="flex justify-between items-center text-xl font-semibold">
                    <p>${carro.preço} sem juros!!</p>
                    <a href="#" className="text-blue-900 hover:underline">
                      Detalhes
                    </a>
                  </div>
                </div>
                <p className="text-xl font-semibold absolute top-0 left-3">
                  {carro.ano}
                </p>
              </div>
            ))}
          </div>
        </div>
        {modalAberto && carroSelecionado && (
          <DetalhesCarro
            carro={carroSelecionado}
            aoFechar={fecharDetalhesCarro}
            aoComprar={comprarCarro}
          />
        )}
        {modalContatoAberto && <ModalContato aoFechar={fecharModalContato} />}
      </div>
    </div>
  );
};

export default ListaCarros;
