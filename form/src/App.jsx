import Form from "./components/Form"

function App() {

  return (
    <>
    <div className=" flex flex-col items-center pt-8">
      <div className="flex items-center justify-center">
      <img src="https://www.ctl.tech/hubfs/logo-ctl-white.svg" className=" w-[100px] my-4 mr-8"></img>
      <img src="https://raw.githubusercontent.com/ctl-omnicanalidad-devs/ctl-sorteo-2024/9e3b9053429b408586ddfd29b902776e3904871e/form/public/svg-image-1.svg?token=GHSAT0AAAAAACYJ5S7VJZGIISSUL3SGSYEUZ2A4DRQ" className=" w-[100px] my-4 ml-8"></img>
      </div>
      <Form />
    </div>
    </>
  )
}

export default App
