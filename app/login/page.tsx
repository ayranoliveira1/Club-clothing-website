const LoginPage = () => {
  return (
    <>
      <main className="flex h-[100%] items-center justify-center">
        <div className="flex w-[450px] flex-col items-center gap-4">
          <h2 className="text-xl font-bold text-black">Entre com sua conta</h2>
          <button className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#212529] p-[6px] text-sm font-semibold shadow-lg">
            <span className="text-2xl">G</span>
            <span>Entrar com o Google</span>
          </button>

          <span className="tex-sm font-semibold text-black">
            ou entre com seu e-mail
          </span>

          <div className="h-[1px] w-full bg-[#212529]"> </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
