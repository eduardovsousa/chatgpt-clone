
import { Alert, AlertTitle } from "@mui/material";

const AlertNotification = () => {
  return (
    <div className="absolute top-64  md:top-[20%] md:left-[40%] md:w-1/4 text-start">
      <Alert severity="error">
        <AlertTitle className="font-black">Erro</AlertTitle>
        A chave temporária da API <strong>expirou</strong>. Caso queira testar, favor acionar o link do footer.
      </Alert>
    </div>
  );
};

export default AlertNotification;
