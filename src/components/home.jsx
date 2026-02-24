import logo from "../assets/robot.png"
import '../index.css'

function Home() {
  return (
    <div className="h-screen flex items-center justify-center overflow-hidden">

      <div className="flex items-center relative bottom-20 gap-10">

        <img 
          src={logo}
          className="w-60 h-auto"
          alt="Robot"
        />

        <div className="flex flex-col justify-center items-start">
          <h1 className="text-blue-500 font-semibold text-6xl">
            Selamat Datang!
          </h1>
          <p className="text-blue-500">
            SIM KKN Universitas Duta Bangsa
          </p>
        </div>

      </div>

    </div>
  )
}

export default Home