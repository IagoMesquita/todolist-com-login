import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

function Login() {
  let history = useHistory();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    function validateEmail(email) {
      var re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (validateEmail(login.email) && login.password.length >= 6) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [login]);

  const handleInputChange = ({ target }) => {
    const { name, value } = target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push("/lista-de-tarefas");
  };

  return (
    <div className="conteudo">
      <div className="conteudo-apresentacao">
      	<h2># Lista de Tarefas</h2>
        <h3>Essa é sua lista de tarefas</h3>
        <p>Faça seu login e tenha acesso a dua lista <br/> de tarefas. 
        Adicione, remoca, marque suas tarefas.</p>
      </div>
    <div id="conteiner-login">
      {/* <div id="conteudo-login"> */}
        <h3>Faça seu Login</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
         <div id="entradas">
					<label htmlFor="email">
							{/* Email: */}
							<input
                placeholder="Email"
								onChange={handleInputChange}
								value={login.email}
								type="email"
								name="email"
								id="email"
								// placeholder="exemplo: nome@nome.com"
							/>
						</label>
						<label htmlFor="password">
							{/* Senha: */}
							<input
                placeholder="Senha"
								onChange={handleInputChange}
								value={login.password}
								type="password"
								name="password"
								id="password"
							/>
						</label>
				 </div>
          <button 
						disabled={isDisabled}
						className={ !isDisabled ? 'button-active' : 'button-disable' }

					>Entrar</button>
        </form>
      {/* </div> */}
    </div>
    </div>
   
  );
}

export default Login;
