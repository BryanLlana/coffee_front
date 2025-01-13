import { Link } from "react-router-dom";
import Button from "../../../common/components/Button";
import FieldWrapper from "../../../common/components/FieldWrapper";
import Input from "../../../common/components/Input";

const RegisterPage = () => {
  return (
    <>
      <h1 className="text-4xl font-black">Crea tu cuenta</h1>
      <p className="text-gray-500">Crea tu cuenta llenando el formulario</p>
      <div className="bg-white shadow-md rounded-md mt-5 px-5 py-10 flex flex-col gap-5">
        <FieldWrapper labelContent="Nombre">
          <Input placeholder="Ingrese su nombre" />
        </FieldWrapper>
        <FieldWrapper labelContent="Correo">
          <Input placeholder="Ingrese su correo" />
        </FieldWrapper>
        <FieldWrapper labelContent="Contraseña">
          <Input type="password" placeholder="Ingrese su contraseña" />
        </FieldWrapper>
        <FieldWrapper labelContent="Repetir contraseña">
          <Input type="password" placeholder="Ingrese su contraseña" />
        </FieldWrapper>
        <Button style={{ width: "100%" }}>Crear cuenta</Button>
      </div>

      <nav className="mt-5 text-gray-500 text-center">
        <Link to={"/auth/login"}>¿Ya tienes una cuenta? Inicia sesión</Link>
      </nav>
    </>
  );
};

export default RegisterPage;
