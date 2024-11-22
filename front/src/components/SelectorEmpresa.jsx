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
        imagen={"https://raw.githubusercontent.com/ctl-omnicanalidad-devs/ctl-sorteo-2024/refs/heads/main/form/public/svg-image-1.svg"}
      />
    </div>
  );
}
