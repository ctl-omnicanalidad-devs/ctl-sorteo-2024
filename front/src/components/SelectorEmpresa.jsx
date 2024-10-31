import CardEmpresa from "./CardEmpresa";

export default function SelectorEmpresa({ setEmpresa }) {
  return (
    <div className=" h-full flex items-center flex-col justify-around bg-black21-100">
      <CardEmpresa
        setEmpresa={setEmpresa}
        nombre={"CTL"}
        imagen={
          "https://www.ctl.tech/hubfs/logo-ctl-white.svg"
        }
      />
      <CardEmpresa
        setEmpresa={setEmpresa}
        nombre={"Activia"}
        imagen={"https://activia.com.ar/assets/images/activia-isologo.png"}
      />
    </div>
  );
}
