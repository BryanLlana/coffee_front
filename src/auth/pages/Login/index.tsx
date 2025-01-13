import { Link } from "react-router-dom";
import Button from "../../../common/components/Button";
import FieldWrapper from "../../../common/components/FieldWrapper";
import Input from "../../../common/components/Input";

const LoginPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Iniciar sesión</h1>
      <p className="text-gray-500">Para crear un pedido debes iniciar sesión</p>
      <div className="bg-white shadow-md rounded-md mt-5 px-5 py-10 flex flex-col gap-5">
        <FieldWrapper labelContent="Correo">
          <Input placeholder="Ingrese su correo" />
        </FieldWrapper>
        <FieldWrapper labelContent="Contraseña">
          <Input type="password" placeholder="Ingrese su contraseña" />
        </FieldWrapper>

        <Button style={{ width: "100%" }}>Iniciar sesión</Button>
      </div>

      <nav className="mt-5 text-gray-500 text-center">
        <Link to={"/auth/register"}>¿No tienes cuenta? Crea una</Link>
      </nav>
    </>
  );
};

export default LoginPage;
