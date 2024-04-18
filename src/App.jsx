import "./index.css";
import logo from "./assets/LogoVertical.svg";

function App() {
  return (
    <>
      <main className="w-full h-[100vh] flex items-center justify-center bg-[#131313] text-white">
        <div className="flex flex-col gap-6 items-center ">
          <img src={logo} alt="logo" width={160} />
                    <div
            className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-[#FF900C]"
            role="status"
          >
            <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          <h1 className="text-[#a1a1a9] opacity-30">Proximamente..</h1>

        </div>
      </main>
    </>
  );
}

export default App;
